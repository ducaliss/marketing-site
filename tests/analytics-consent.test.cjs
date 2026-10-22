const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const test=require('node:test');
const source=fs.readFileSync(path.join(__dirname,'../script.js'),'utf8');
const start=source.indexOf('const METRIKA_ID=');
const end=source.indexOf('document.querySelectorAll(\'a[href^="tel:"]\')',start);
assert(start>0&&end>start);
const code=source.slice(start,end);
const key='marketing-site-analytics-consent-v2';
const record=(choice,extra={})=>JSON.stringify({choice,version:'2026-10-22',updatedAt:new Date().toISOString(),...extra});
function harness(initial={},blocked=false){
  const storage=new Map(Object.entries(initial));
  const cookies=new Map([['_ym_uid','test'],['unrelated','keep']]);
  const scripts=[],calls=[],events={};
  const element=()=>({events:{},dataset:{},hidden:true,scrollTop:0,addEventListener(n,f){this.events[n]=f},before(el){this.previous=el},appendChild(el){this.child=el},remove(){this.removed=true},querySelector(){return {focus(){}}}});
  const accept=element(),details=element(),copy=element(),footer=element(),content=element();
  const modal={open:false,showModal(){this.open=true}};
  const banner=element();
  banner.querySelector=s=>s==='.cookie-consent-accept'?accept:s==='.cookie-consent-details'?details:copy;
  const document={
    head:{appendChild(el){scripts.push(el)}},
    createElement:element,
    querySelector:s=>s==='#cookie-consent'?banner:null,
    querySelectorAll:s=>s==='.footer-documents'?[footer]:[],
    body:{classList:{add(){}}}
  };
  Object.defineProperty(document,'cookie',{get:()=>[...cookies].map(([n,v])=>n+'='+v).join('; '),set:v=>{if(v.includes('Max-Age=0'))cookies.delete(v.split('=')[0])}});
  const window={location:{search:'',hostname:'marketolog-penza.ru',pathname:'/smm-penza.html'},addEventListener(n,f){events[n]=f},localStorage:{
    get length(){return storage.size},key:i=>[...storage.keys()][i]??null,
    getItem(k){if(blocked)throw Error('blocked');return storage.get(k)??null},
    setItem(k,v){if(blocked)throw Error('blocked');storage.set(k,v)},
    removeItem(k){if(blocked)throw Error('blocked');storage.delete(k)}
  }};
  const context=vm.createContext({window,document,legalModal:modal,legalModalContent:content,showLegalDocument(){},URLSearchParams,Date,Set});
  vm.runInContext(code,context);
  const run=expression=>vm.runInContext(expression,context);
  const ready=()=>{
    window.ym=(...args)=>calls.push(args);
    scripts.at(-1).onload();
  };
  return {run,window,storage,cookies,scripts,calls,events,banner,footer,modal,content,accept,reject:accept.previous,ready};
}
test('no analytics before explicit choice, old unversioned approval is not reused',()=>{
  for(const initial of [{},{'marketing-site-analytics-consent-v1':'accepted'},{[key]:'invalid'},{[key]:record('accepted',{version:'old'})}]){
    const h=harness(initial);assert.equal(h.scripts.length,0);assert.equal(h.banner.hidden,false);
  }
});
test('accept saves revision and timestamp; starts once after load',()=>{
  const h=harness();h.accept.events.click();h.accept.events.click();
  assert.equal(h.scripts.length,1);assert.equal(h.calls.length,0);
  assert.equal(JSON.parse(h.storage.get(key)).version,'2026-10-22');
  assert(Number.isFinite(Date.parse(JSON.parse(h.storage.get(key)).updatedAt)));
  h.ready();assert.equal(h.calls.filter(x=>x[1]==='init').length,1);
  h.run("reachMetrikaGoal('phone_click')");assert.equal(h.calls.at(-1)[1],'reachGoal');
});
test('reject remains rejected on next page and preserves unrelated data',()=>{
  const h=harness({_ym_uid:'test',other:'keep'});h.reject.events.click();
  assert.equal(h.scripts.length,0);assert.equal(h.storage.get('other'),'keep');
  assert.equal(h.storage.has('_ym_uid'),false);assert.equal(h.cookies.has('_ym_uid'),false);
  assert.equal(h.cookies.get('unrelated'),'keep');
  const next=harness(Object.fromEntries(h.storage));assert.equal(next.scripts.length,0);assert.equal(next.banner.hidden,true);
});
test('revoke while tag loads cannot initialize later; explicit re-enable works',()=>{
  const h=harness();h.accept.events.click();h.reject.events.click();h.ready();
  assert.equal(h.calls.length,0);h.accept.events.click();assert.equal(h.scripts.length,1);
  assert.equal(h.calls.at(-1)[1],'init');
});
test('revoke stops existing counter and goals; settings can re-enable',()=>{
  const h=harness();h.accept.events.click();h.ready();h.footer.child.events.click();
  assert.equal(h.modal.open,true);assert(h.content.innerHTML.includes('Аналитика разрешена'));
  h.reject.events.click();assert.equal(h.calls.at(-1)[1],'destruct');
  const count=h.calls.length;h.run("reachMetrikaGoal('lead_form_success')");assert.equal(h.calls.length,count);
  h.accept.events.click();assert.equal(h.calls.at(-1)[1],'init');
});
test('choices older than 180 days, future dates and malformed dates fail closed',()=>{
  for(const updatedAt of [new Date(Date.now()-181*86400000).toISOString(),new Date(Date.now()+86400000).toISOString(),'bad']){
    const h=harness({[key]:record('accepted',{updatedAt})});assert.equal(h.scripts.length,0);assert.equal(h.banner.hidden,false);
  }
});
test('storage unavailable: choices still work for current document',()=>{
  const h=harness({},true);h.reject.events.click();assert.equal(h.scripts.length,0);
  h.accept.events.click();h.ready();assert.equal(h.calls.at(-1)[1],'init');
});
test('cross-tab revocation and deleted choice stop collection',()=>{
  const h=harness({[key]:record('accepted')});h.ready();
  h.storage.set(key,record('rejected'));h.events.storage({key});assert.equal(h.calls.at(-1)[1],'destruct');
  h.storage.delete(key);h.events.storage({key:null});assert.equal(h.banner.hidden,false);
});
test('tag failure can be retried without duplicate initialization',()=>{
  const h=harness();h.accept.events.click();h.scripts[0].onerror();
  h.accept.events.click();assert.equal(h.scripts.length,2);h.ready();assert.equal(h.calls.length,1);
});
test('all public landing pages share revised analytics and legal implementation',()=>{
  for(const file of ['index.html','targetirovannaya-reklama-penza.html','yandex-direct-penza.html','smm-penza.html','reklama-telegram-penza.html']){
    const html=fs.readFileSync(path.join(__dirname,'..',file),'utf8');
    assert(html.includes('script.js?v=20261022-privacy1'),file);
    assert(html.includes('continuous.css?v=20261022-privacy1'),file);
    assert(html.includes('class="footer-documents"'),file);
    assert(html.includes('class="ym-disable-keys"'),file);
    assert(!html.includes('value="yes" checked'),file);
  }
});
