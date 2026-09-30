/* ICA-HEADER-BANNER-V2 — isolated experimental implementation.
   The visitor URLs must be supplied by the Product Owner, never guessed. */
const SOCIAL_URLS={youtube:'',instagram:''};
const banner=document.querySelector('.ica-banner');
const status=document.getElementById('preview-status');
const validUrl=value=>{try{const parsed=new URL(value);return ['https:','http:'].includes(parsed.protocol)}catch{return false}};
const activate=state=>{if(banner)banner.dataset.socialState=state};
for(const element of document.querySelectorAll('[data-social]')){
  const provider=element.dataset.social;
  const url=SOCIAL_URLS[provider];
  if(validUrl(url)){
    element.href=url;
    element.target='_blank';element.rel='noopener noreferrer';
    element.removeAttribute('aria-describedby');
    element.setAttribute('aria-label',provider==='youtube'?'Apri YouTube di In Cerca di Avventura':'Apri Instagram di In Cerca di Avventura');
  }else{
    element.addEventListener('click',event=>{
      event.preventDefault();status.textContent='Il collegamento '+provider+' non è ancora configurato: inserire l’URL ufficiale in header-v2.js.';
    });
  }
  element.addEventListener('pointerenter',()=>activate(provider));
  element.addEventListener('pointerleave',()=>activate(''));
  element.addEventListener('focus',()=>activate(provider));
  element.addEventListener('blur',()=>activate(''));
  element.addEventListener('pointerdown',()=>activate(provider));
  element.addEventListener('pointerup',()=>activate(''));
  element.addEventListener('pointercancel',()=>activate(''));
}
for(const item of document.querySelectorAll('[data-unconfigured]')){
  item.addEventListener('click',()=>{status.textContent='La destinazione Contatti non è stata ancora specificata; nessun URL fittizio è stato inserito.'});
}
document.addEventListener('keydown',e=>{if(e.key==='Escape')activate('')});