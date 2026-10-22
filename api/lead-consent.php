<?php
declare(strict_types=1);

// Keep this revision and its archive immutable. Publish a new path for future revisions.
const LEAD_CONSENT_VERSION = '2026-10-22-v2';
const LEAD_CONSENT_ARCHIVE = 'legal/lead-consent-2026-10-22-v2.html';
const LEAD_CONSENT_SHA256 = 'f5cd9c6fd4feafb864cb9402e87a36b4490740acd6580196f7e3993821ace471';

function leadConsentEvidence(string $submittedVersion): ?array
{
    // Never interpolate a submitted version into a filesystem path.
    if (!hash_equals(LEAD_CONSENT_VERSION, $submittedVersion)) {
        return null;
    }
    $archivePath = dirname(__DIR__) . '/' . LEAD_CONSENT_ARCHIVE;
    if (!is_file($archivePath) || !is_readable($archivePath)) {
        throw new RuntimeException('Consent archive unavailable');
    }
    $archive = file_get_contents($archivePath);
    if ($archive === false || !hash_equals(LEAD_CONSENT_SHA256, hash('sha256', $archive))) {
        throw new RuntimeException('Consent archive integrity check failed');
    }
    return [
        'version' => LEAD_CONSENT_VERSION,
        'url' => 'https://marketolog-penza.ru/' . LEAD_CONSENT_ARCHIVE,
        'sha256' => LEAD_CONSENT_SHA256,
    ];
}
