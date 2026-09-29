const menu=document.getElementById('menu');
const mobile=document.getElementById('mobile-nav');
if(menu&&mobile){
  const closeMenu=()=>{mobile.classList.remove('open');menu.setAttribute('aria-expanded','false');};
  menu.addEventListener('click',()=>{const open=mobile.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
  mobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
}
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();

const markerLayer=document.getElementById('marker-layer');
const influenceLayer=document.getElementById('influence-layer');
const statusEl=document.getElementById('map-status');
const filters=[...document.querySelectorAll('.map-filter')];
const VIEW_W=1000,VIEW_H=625;

function esc(v){return String(v??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
function pctX(x){return (Number(x)/VIEW_W*100).toFixed(3)+'%';}
function pctY(y){return (Number(y)/VIEW_H*100).toFixed(3)+'%';}
function radiusPct(r){return (Number(r)/VIEW_W*200).toFixed(3)+'%';}

function render(data){
  const tiers=data.influence_tiers||{};
  const entities=Array.isArray(data.entities)?data.entities:[];
  influenceLayer.innerHTML='';
  markerLayer.innerHTML='';

  for(const entity of entities){
    if(!Number.isFinite(entity.x)||!Number.isFinite(entity.y))continue;
    const tier=tiers[String(entity.influence_tier)]||tiers['1']||{radius:32};
    const influence=document.createElement('span');
    influence.className='influence-zone';
    influence.dataset.category=entity.type||'community';
    influence.style.setProperty('--x',pctX(entity.x));
    influence.style.setProperty('--y',pctY(entity.y));
    influence.style.setProperty('--size',radiusPct(tier.radius||32));
    influenceLayer.append(influence);

    const button=document.createElement('button');
    button.type='button';
    button.className='map-marker';
    button.dataset.category=entity.type||'community';
    button.style.setProperty('--x',pctX(entity.x));
    button.style.setProperty('--y',pctY(entity.y));
    button.setAttribute('aria-label',entity.name+' — '+entity.city);
    button.innerHTML=
      '<img class="marker-logo" src="../../'+esc(entity.logo)+'" alt="">'+
      '<img class="marker-frame" src="../../assets/alleanze/medallion-bronze.webp" alt="">'+
      '<span class="marker-popover"><strong>'+esc(entity.name)+'</strong>'+
      '<span>'+esc(entity.city)+(entity.region?' · '+esc(entity.region):'')+'</span>'+
      '<small>Prestigio: '+esc(entity.prestige_label||'Bronzo')+' · Influenza: '+esc(tier.label||'Presenza locale')+'</small></span>';
    button.addEventListener('click',()=>{
      document.querySelectorAll('.map-marker.is-open').forEach(el=>{if(el!==button)el.classList.remove('is-open');});
      button.classList.toggle('is-open');
    });
    markerLayer.append(button);
  }

  statusEl.textContent=entities.length+' presidi pilota censiti. Le aree di influenza sono dimostrative e verranno aggiornate con i dati reali delle community.';
}

function applyFilter(filter){
  document.querySelectorAll('.map-marker,.influence-zone').forEach(el=>{
    el.classList.toggle('is-hidden',filter!=='all'&&el.dataset.category!==filter);
  });
  filters.forEach(btn=>btn.classList.toggle('is-active',btn.dataset.filter===filter));
}

filters.forEach(btn=>btn.addEventListener('click',()=>applyFilter(btn.dataset.filter)));
document.addEventListener('click',event=>{
  if(!event.target.closest('.map-marker'))document.querySelectorAll('.map-marker.is-open').forEach(el=>el.classList.remove('is-open'));
});
document.addEventListener('keydown',event=>{if(event.key==='Escape')document.querySelectorAll('.map-marker.is-open').forEach(el=>el.classList.remove('is-open'));});

fetch('../../data/alliances.json',{cache:'no-store'})
  .then(r=>{if(!r.ok)throw new Error('HTTP '+r.status);return r.json();})
  .then(render)
  .catch(err=>{console.error('Alliance map data load failed',err);statusEl.textContent='La mappa delle Alleanze non è disponibile in questo momento.';});