/* ICA-HEADER-BANNER-V2 shared parallel preview. Source branch PR #102.
   Site routes are resolved from THIS module so the component works on every
   nesting level (Home, Cronache, Adunanze, Nazionale...). */
const root=new URL('../',import.meta.url);
const art=new URL('../../assets/header-v2/',import.meta.url);
const urls={youtube:'https://www.youtube.com/@incercadiavventura',instagram:'https://www.instagram.com/incercadavventura/',contatti:''}; // official social destinations supplied by Product Owner
const route=(path)=>new URL(path,root).href;
const asset=(file)=>new URL(file,art).href;
const page=document.body.getAttribute('data-ica-page')||'HOME';
const selected={HOME:'',ADU:'adunanze/nazionale/', 'ADU-NAT':'adunanze/nazionale/',CRO:'cronache/',AVV:'avventurieri/',ALL:'alleanze/'}[page]??'';
const targets=[
  {label:'Adunanza',path:'adunanze/nazionale/',klass:'adunanza',x:'3.4%',y:'20.8%'},
  {label:'Cronache',path:'cronache/',klass:'cronache',x:'3.4%',y:'45.146%'},
  {label:'Avventurieri',path:'avventurieri/',klass:'avventurieri',x:'3.4%',y:'69.423%'},
  {label:'Alleanze',path:'alleanze/',klass:'alleanze',x:'78.4%',y:'22.277%'},
  {label:'Proclami',path:'#proclami',klass:'proclami',x:'78.4%',y:'45.146%'},
];
const props=t=>`--x:${t.x};--y:${t.y};--w:18.2%;--h:14.3%`;
const current=t=>selected===t.path?' aria-current="page"':'';
const tag=t=>`<a class="ica-banner__link ica-banner__link--${t.klass}" style="${props(t)}" href="${route(t.path)}"${current(t)}><span class="ica-nav-label">${t.label}</span></a>`;
const mobile=t=>`<a href="${route(t.path)}"${current(t)}>${t.label}</a>`;
const mount=document.getElementById('ica-v2-header');
if(mount){
 mount.className='ica-v2-shell';
 const oldPath=location.pathname.replace('/beta-v2/','/beta/');
 mount.innerHTML=`<div class="ica-v2-notice">ANTEPRIMA BANNER V2 · nessuna modifica alla Beta attuale <a href="${oldPath}">Confronta con Beta originale ↗</a></div>
 <div class="ica-v2-component">
 <header class="ica-header-v2">
  <nav class="ica-banner" aria-label="Navigazione principale" data-social-state="">
   <div class="ica-banner__art" aria-hidden="true">
    <img class="ica-banner__image" src="${asset('banner-base-alpha.webp')}" width="1536" height="512" alt="" fetchpriority="high">
    <img class="ica-banner__image ica-banner__image--yt" src="${asset('banner-youtube-hover-alpha.webp')}" width="1536" height="512" alt="">
    <img class="ica-banner__image ica-banner__image--ig" src="${asset('banner-instagram-hover.webp')}" width="1536" height="512" alt="">
   </div>
   <div class="ica-banner__hitboxes">
    ${targets.slice(0,3).map(tag).join('')}
    <a class="ica-banner__home" href="${route('')}" aria-label="In Cerca di Avventura — Home" title="Torna alla Home"></a>
    ${targets.slice(3).map(tag).join('')}
    <button class="ica-banner__link" style="--x:78.4%;--y:69.423%;--w:18.2%;--h:14.3%" data-unconfigured="contatti" type="button"><span class="ica-nav-label">Contatti</span></button>
    <a class="ica-banner__social ica-banner__social--yt" href="#" data-social="youtube" aria-label="YouTube — In Cerca di Avventura"></a>
    <a class="ica-banner__social ica-banner__social--ig" href="#" data-social="instagram" aria-label="Instagram — In Cerca di Avventura"></a>
   </div>
  </nav>
  <nav class="ica-mobile-nav" aria-label="Navigazione mobile V2">
   <a href="${route('')}">Home</a>${targets.map(mobile).join('')}
   <button type="button" data-unconfigured="contatti">Contatti</button>
   <a href="#" data-social="youtube">YouTube</a><a href="#" data-social="instagram">Instagram</a>
  </nav>
 </header>
 <p class="ica-v2-status" role="status" aria-live="polite"></p>
 </div>`;
 const banner=mount.querySelector('.ica-banner');
 const status=mount.querySelector('.ica-v2-status');
 const activate=(state)=>banner.dataset.socialState=state;
 const externalURL=s=>{try{const u=new URL(s);return ['https:','http:'].includes(u.protocol)}catch{return false}};
 mount.querySelectorAll('[data-social]').forEach(link=>{
  const name=link.dataset.social, destination=urls[name];
  if(externalURL(destination)){link.href=destination;link.target='_blank';link.rel='noopener noreferrer';}
  else link.addEventListener('click',event=>{event.preventDefault();status.textContent='Collegamento '+name+' non ancora configurato.'});
  for(const [event,state] of [['pointerenter',name],['pointerleave',''],['focus',name],['blur',''],['pointerdown',name],['pointercancel','']])link.addEventListener(event,()=>activate(state));
 });
 mount.querySelectorAll('[data-unconfigured]').forEach(link=>link.addEventListener('click',()=>{status.textContent='Contatti: destinazione da approvare prima di attivare il link.'}));
 document.addEventListener('keydown',event=>{if(event.key==='Escape')activate('')});
}
