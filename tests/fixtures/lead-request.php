<?php
declare(strict_types=1);
if (PHP_SAPI !== 'cli' || function_exists('mail')) {
    exit(90); // Tests require a private CLI process with the real mail function disabled.
}
if (!function_exists('mail')) {
    function mail(string $to, string $subject, string $message, array|string $headers = [], string $extra = ''): bool
    {
        file_put_contents('php://stderr', 'TEST_MAIL:' . base64_encode($message) . "\n");
        return true;
    }
}
$case = $argv[1] ?? '';
$_SERVER = ['REQUEST_METHOD' => 'POST', 'HTTP_HOST' => 'localhost', 'REMOTE_ADDR' => '192.0.2.' . (string) (10 + (int) ($argv[2] ?? 0))];
$_POST = ['name' => 'ТЕСТ', 'contact' => '@consent_test', 'message' => 'Синтетическая проверка без отправки письма', 'personal_data_consent' => 'yes', 'consent_version' => '2026-10-22-v2'];
if ($case === 'missing') unset($_POST['consent_version']);
if ($case === 'old') $_POST['consent_version'] = '2026-10-22-v1';
if ($case === 'array') $_POST['consent_version'] = ['2026-10-22-v2'];
if ($case === 'path') $_POST['consent_version'] = '../../etc/passwd';
if ($case === 'unchecked') $_POST['personal_data_consent'] = '';
if ($case === 'contact') $_POST['contact'] = 'invalid';
require dirname(__DIR__, 2) . '/api/lead.php';
