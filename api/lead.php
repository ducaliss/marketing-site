<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function respond(int $status, bool $ok, string $message): void
{
    http_response_code($status);
    echo json_encode(['ok' => $ok, 'message' => $message], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, false, 'Метод не поддерживается.');
}

$contentLength = (int) ($_SERVER['CONTENT_LENGTH'] ?? 0);
if ($contentLength > 16384) {
    respond(413, false, 'Слишком большой запрос.');
}

$allowedHosts = ['marketolog-penza.ru', 'www.marketolog-penza.ru', 'localhost', '127.0.0.1'];
$requestHost = strtolower(explode(':', (string) ($_SERVER['HTTP_HOST'] ?? ''))[0]);
if (!in_array($requestHost, $allowedHosts, true)) {
    respond(403, false, 'Недопустимый адрес сайта.');
}

$origin = (string) ($_SERVER['HTTP_ORIGIN'] ?? '');
if ($origin !== '') {
    $originHost = strtolower((string) parse_url($origin, PHP_URL_HOST));
    if (!in_array($originHost, $allowedHosts, true)) {
        respond(403, false, 'Недопустимый источник запроса.');
    }
}

if (trim((string) ($_POST['website'] ?? '')) !== '') {
    respond(200, true, 'Заявка принята.');
}

$clientIp = (string) ($_SERVER['REMOTE_ADDR'] ?? 'unknown');
$rateDirectory = rtrim(sys_get_temp_dir(), DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . 'marketolog-lead-rate';
if (!is_dir($rateDirectory) && !mkdir($rateDirectory, 0700, true) && !is_dir($rateDirectory)) {
    error_log('Lead form: rate-limit directory is unavailable.');
    respond(503, false, 'Сервис временно недоступен.');
}

$rateFile = $rateDirectory . DIRECTORY_SEPARATOR . hash('sha256', $clientIp) . '.txt';
$now = time();
$lastRequest = is_file($rateFile) ? (int) file_get_contents($rateFile) : 0;
if ($lastRequest > 0 && ($now - $lastRequest) < 60) {
    respond(429, false, 'Повторите отправку через минуту.');
}

function cleanText(string $value): string
{
    $value = trim($value);
    return (string) preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $value);
}

function textLength(string $value): int
{
    return function_exists('mb_strlen') ? mb_strlen($value, 'UTF-8') : strlen($value);
}

$name = cleanText((string) ($_POST['name'] ?? ''));
$contact = cleanText((string) ($_POST['contact'] ?? ''));
$message = cleanText((string) ($_POST['message'] ?? ''));
$consent = (string) ($_POST['personal_data_consent'] ?? '');

if (textLength($name) < 2 || textLength($name) > 80) {
    respond(422, false, 'Проверьте имя.');
}

$digits = preg_replace('/\D+/', '', $contact) ?? '';
$validPhone = preg_match('/^[+()\d\s-]{10,24}$/u', $contact) === 1 && strlen($digits) >= 10 && strlen($digits) <= 15;
$validTelegram = preg_match('/^@[A-Za-z][A-Za-z0-9_]{4,31}$/', $contact) === 1;
if (!$validPhone && !$validTelegram) {
    respond(422, false, 'Укажите номер телефона или Telegram-ник в формате @username.');
}

if (textLength($message) > 2000) {
    respond(422, false, 'Сократите текст обращения.');
}

if ($consent !== 'yes') {
    respond(422, false, 'Необходимо согласие на обработку персональных данных.');
}

$mailTo = getenv('LEAD_MAIL_TO') ?: 'ivan_muzenitov@mail.ru';
$mailFrom = getenv('LEAD_MAIL_FROM') ?: 'ivan_muzenitov@mail.ru';
if (!filter_var($mailTo, FILTER_VALIDATE_EMAIL) || !filter_var($mailFrom, FILTER_VALIDATE_EMAIL)) {
    error_log('Lead form: invalid mail environment configuration.');
    respond(503, false, 'Сервис временно недоступен.');
}

date_default_timezone_set('Europe/Moscow');
$subjectText = 'Новая заявка с marketolog-penza.ru';
$subject = '=?UTF-8?B?' . base64_encode($subjectText) . '?=';
$body = implode("\n", [
    'Новая заявка с сайта marketolog-penza.ru',
    '',
    'Имя: ' . $name,
    'Контакт: ' . $contact,
    'Сообщение: ' . ($message !== '' ? $message : 'Не указано'),
    '',
    'Согласие на обработку персональных данных: получено',
    'Дата и время: ' . date('d.m.Y H:i:s T'),
    'IP-адрес: ' . $clientIp,
]);

$encodedFromName = '=?UTF-8?B?' . base64_encode('Сайт Ивана Музенитова') . '?=';
$headers = [
    'From: ' . $encodedFromName . ' <' . $mailFrom . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
];

if (!mail($mailTo, $subject, $body, implode("\r\n", $headers))) {
    error_log('Lead form: mail transport failed.');
    respond(503, false, 'Не удалось отправить заявку.');
}

file_put_contents($rateFile, (string) $now, LOCK_EX);
respond(200, true, 'Заявка отправлена.');
