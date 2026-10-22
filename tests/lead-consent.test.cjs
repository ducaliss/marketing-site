const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const crypto=require('node:crypto');
const vm=require('node:vm');
const root=path.join(__dirname,'..');
const js=fs.readFileSync(path.join(root,'script.js'),'utf8').replace(/\r\n/g,'\n');
const php=fs.readFileSync(path.join(root,'api/lead-consent.php'),'utf8');
const version=js.match(/const LEAD_CONSENT_VERSION='([^']+)'/)[1];
const archivePath=js.match(/const LEAD_CONSENT_ARCHIVE='([^']+)'/)[1];
const archive=fs.readFileSync(path.join(root,archivePath));
test('displayed consent is identical to immutable archived text',()=>{
  const shown=js.match(/  consent:`\n([\s\S]*?)\n  `\n};/)[1].trim();
  const saved=archive.toString('utf8').replace(/\r\n/g,'\n').match(/<!-- consent-text:start -->\n([\s\S]*?)\n<!-- consent-text:end -->/)[1].trim();
  assert.equal(shown,saved);
  assert(shown.includes(version));assert(shown.includes(archivePath));
});
test('server binds submitted version to a fixed archived file and exact byte hash',()=>{
  assert.equal(php.match(/const LEAD_CONSENT_VERSION = '([^']+)'/)[1],version);
  assert.equal(php.match(/const LEAD_CONSENT_ARCHIVE = '([^']+)'/)[1],archivePath);
  assert.equal(php.match(/const LEAD_CONSENT_SHA256 = '([^']+)'/)[1],crypto.createHash('sha256').update(archive).digest('hex'));
  assert(!php.includes('$submittedVersion .'));
});
test('form sends the version of the document rendered by its own script',()=>{
  assert(js.includes("leadConsentVersionField.name='consent_version'"));
  assert(js.includes('leadConsentVersionField.defaultValue=LEAD_CONSENT_VERSION'));
  assert(js.includes('leadForm.appendChild(leadConsentVersionField)'));
  assert(js.includes('body:new FormData(leadForm)'));
});
test('email metadata is built from server-validated evidence, not a client URL/hash',()=>{
  const handler=fs.readFileSync(path.join(root,'api/lead.php'),'utf8');
  assert(handler.includes('leadConsentEvidence($submittedConsentVersion)'));
  assert(handler.includes("'Версия согласия: ' . $consentEvidence['version']"));
  assert(handler.includes("'Архив текста согласия: ' . $consentEvidence['url']"));
  assert(handler.includes("'SHA-256 архивного HTML-файла: ' . $consentEvidence['sha256']"));
  assert(handler.indexOf('leadConsentEvidence($submittedConsentVersion)')<handler.indexOf('if (!mail('));
});
test('stale document errors reach the visitor without losing filled-in fields',async()=>{
  const status={};
  const context=vm.createContext({
    event:{preventDefault(){}},validateContact(){},
    leadForm:{reportValidity:()=>true,querySelector:()=>status,reset(){throw Error('must not reset on error')}},
    submitButton:{disabled:false,setAttribute(){},removeAttribute(){}},
    contactField:{setCustomValidity(){}},FormData:class {},
    fetch:async()=>({ok:false,json:async()=>({ok:false,message:'Редакция согласия изменилась. Обновите страницу и подтвердите согласие заново.'})}),
    reachMetrikaGoal(){throw Error('no success event on rejection')}
  });
  const body=js.match(/leadForm\.addEventListener\('submit',async event=>{([\s\S]*?)\n}\);/)[1];
  await vm.runInContext('(async()=>{'+body+'})()',context);
  assert(status.textContent.includes('Обновите страницу'));
  assert.equal(context.submitButton.disabled,false);
});
