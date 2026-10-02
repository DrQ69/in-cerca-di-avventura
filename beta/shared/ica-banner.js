/* ICA beta shared banner runtime — 2026-10-02 */
const mount=document.getElementById('ica-main-banner');
if(mount){
 const betaRoot=new URL('../',import.meta.url),repoAssets=new URL('../../assets/',import.meta.url);
 const route=path=>new URL(path,betaRoot).href,page=document.body.dataset.icaPage||'HOME';
 const currentKey={ADU:'adunanze','ADU-NAT':'adunanze',AVV:'avventurieri',ALL:'alleanze',TES:'tesori'}[page]||'';
 const nav=[
  {key:'adunanze',label:'Adunanze',href:route('adunanze/nazionale/'),cx:'9.375%'},
  {key:'avventurieri',label:'Avventurieri',href:route('avventurieri/'),cx:'22.5%'},
  {key:'alleanze',label:'Alleanze',href:route('alleanze/'),cx:'35.625%'},
  {key:'tesori',label:'Tesori',href:route('tesori/'),cx:'64.375%'},
  {key:'proclami',label:'Proclami',href:route('./#proclami'),cx:'77.5%'},
  {key:'chi-siamo',label:'Chi siamo',href:route('./#chi-siamo'),cx:'90.625%'}];
 const current=n=>n.key===currentKey?' aria-current="page"':'';
 const desktop=n=>'<a class="ica-main-banner__link" style="--cx:'+n.cx+'" href="'+n.href+'"'+current(n)+'><span>'+n.label+'</span></a>';
 const mobile=n=>'<a href="'+n.href+'"'+current(n)+'>'+n.label+'</a>';
 const logo=new URL('logo-emblem.webp',repoAssets).href;
 mount.className='ica-main-banner';
 mount.dataset.icaId='BETA-NAV-01';
 mount.innerHTML='<nav class="ica-main-banner__desktop" data-ica-id="BETA-NAV-02" aria-label="Navigazione principale"><div class="ica-main-banner__art" aria-hidden="true"></div>'+nav.slice(0,3).map(desktop).join('')+'<a class="ica-main-banner__home" href="'+route('./')+'" aria-label="In Cerca di Avventura — Home" title="Torna alla Home"></a>'+nav.slice(3).map(desktop).join('')+'<a class="ica-main-banner__social ica-main-banner__social--instagram" href="https://www.instagram.com/incercadavventura?utm_source=ig_web_button_share_sheet&amp;stkn=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram — In Cerca di Avventura"></a><a class="ica-main-banner__social ica-main-banner__social--youtube" href="https://www.youtube.com/@incercadiavventura" target="_blank" rel="noopener noreferrer" aria-label="YouTube — In Cerca di Avventura"></a></nav><nav class="ica-main-banner__mobile" data-ica-id="BETA-NAV-03" aria-label="Navigazione mobile"><div class="ica-main-banner__mobile-bar"><a class="ica-main-banner__mobile-brand" href="'+route('./')+'"><img src="'+logo+'" alt=""><span>In Cerca di Avventura</span></a><button class="ica-main-banner__menu-button" type="button" aria-expanded="false" aria-controls="ica-main-banner-mobile-menu">Menu</button></div><div class="ica-main-banner__mobile-menu" id="ica-main-banner-mobile-menu">'+nav.map(mobile).join('')+'<div class="ica-main-banner__mobile-socials"><a href="https://www.instagram.com/incercadavventura?utm_source=ig_web_button_share_sheet&amp;stkn=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">Instagram</a><a href="https://www.youtube.com/@incercadiavventura" target="_blank" rel="noopener noreferrer">YouTube</a></div></div></nav>';
 const button=mount.querySelector('.ica-main-banner__menu-button'),menu=mount.querySelector('.ica-main-banner__mobile-menu');
 const close=()=>{menu?.classList.remove('is-open');button?.setAttribute('aria-expanded','false')};
 button?.addEventListener('click',()=>{const open=!menu?.classList.contains('is-open');menu?.classList.toggle('is-open',open);button.setAttribute('aria-expanded',String(open))});
 menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
 document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
}