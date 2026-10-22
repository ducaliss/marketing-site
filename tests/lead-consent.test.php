<?php
declare(strict_types=1);
if (PHP_SAPI !== 'cli') exit(90);
require dirname(__DIR__) . '/api/lead-consent.php';
function check(bool $condition, string $name): void
{
    if (!$condition) throw new RuntimeException('FAIL ' . $name);
    echo 'PASS ' . $name . "\n";
}
function child(array $command): array
{
    $process = proc_open($command, [0 => ['pipe', 'r'], 1 => ['pipe', 'w'], 2 => ['pipe', 'w']], $pipes);
    if (!is_resource($process)) throw new RuntimeException('Cannot start private PHP test process');
    fclose($pipes[0]);
    $out = stream_get_contents($pipes[1]); fclose($pipes[1]);
    $err = stream_get_contents($pipes[2]); fclose($pipes[2]);
    return [proc_close($process), $out, $err];
}
$evidence = leadConsentEvidence('2026-10-22-v1');
check($evidence !== null && $evidence['version'] === LEAD_CONSENT_VERSION, 'known revision');
check($evidence['sha256'] === hash_file('sha256', dirname(__DIR__) . '/' . LEAD_CONSENT_ARCHIVE), 'archive byte integrity');
check(leadConsentEvidence('') === null && leadConsentEvidence('../../etc/passwd') === null, 'unknown versions rejected');
$temporary = sys_get_temp_dir() . '/marketolog-consent-test-' . bin2hex(random_bytes(6));
if (!mkdir($temporary, 0700)) throw new RuntimeException('Cannot create isolated test directory');
foreach (['valid', 'missing', 'old', 'array', 'path', 'unchecked', 'contact'] as $index => $case) {
    [$exit, $out, $err] = child([PHP_BINARY, '-d', 'disable_functions=mail', '-d', 'sys_temp_dir=' . $temporary, __DIR__ . '/fixtures/lead-request.php', $case, (string) $index]);
    $response = json_decode($out, true, 512, JSON_THROW_ON_ERROR);
    check($exit === 0, 'handler exits normally: ' . $case);
    check($response['ok'] === ($case === 'valid'), 'handler result: ' . $case);
    if ($case === 'valid') {
        preg_match('/TEST_MAIL:([^\r\n]+)/', $err, $match);
        $body = base64_decode($match[1] ?? '', true);
        check(is_string($body) && str_contains($body, 'Версия согласия: ' . LEAD_CONSENT_VERSION), 'email revision');
        check(str_contains($body, $evidence['url']) && str_contains($body, $evidence['sha256']), 'email archive and digest');
        check(str_contains($body, 'IP-адрес: 192.0.2.10') && str_contains($body, 'Дата и время:'), 'email time and IP');
    } else {
        check(!str_contains($err, 'TEST_MAIL:'), 'rejected request never calls mail: ' . $case);
    }
}
// Use a private mirror to prove corrupt or missing archives fail closed.
mkdir($temporary . '/api'); mkdir($temporary . '/legal');
copy(dirname(__DIR__) . '/api/lead-consent.php', $temporary . '/api/lead-consent.php');
$probe = 'require ' . var_export($temporary . '/api/lead-consent.php', true) . '; try { leadConsentEvidence("2026-10-22-v1"); exit(3); } catch (RuntimeException $e) { echo "ARCHIVE_REJECTED"; }';
foreach (['missing', 'corrupt'] as $state) {
    if ($state === 'corrupt') file_put_contents($temporary . '/' . LEAD_CONSENT_ARCHIVE, 'modified test archive');
    [$exit, $out] = child([PHP_BINARY, '-r', $probe]);
    check($exit === 0 && $out === 'ARCHIVE_REJECTED', 'fail closed: ' . $state . ' archive');
}
echo "No real emails were sent. Test files contain synthetic data only.\n";
