const menu=document.getElementById('menu');
const mobile=document.getElementById('mobile-nav');
if(menu&&mobile){
  const closeMenu=()=>{mobile.classList.remove('open');menu.setAttribute('aria-expanded','false');};
  menu.addEventListener('click',()=>{const open=mobile.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
  mobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
}

const records=[...document.querySelectorAll('.event-record')];
const search=document.getElementById('search');
const controls={
  season:document.getElementById('season'),
  status:document.getElementById('status'),
  place:document.getElementById('place'),
  league:document.getElementById('league'),
  format:document.getElementById('format')
};
const empty=document.getElementById('empty');

function norm(v){
  return String(v||'').toLocaleLowerCase('it').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ').trim();
}

function applyFilters(){
  const q=norm(search?.value);
  let shown=0;
  records.forEach(el=>{
    const values={
      season:norm(el.dataset.season),
      status:norm(el.dataset.status),
      place:norm(el.dataset.place),
      league:norm(el.dataset.league),
      format:norm(el.dataset.format),
      search:norm(el.dataset.search+' '+el.textContent)
    };
    const okSearch=!q||values.search.includes(q);
    const okSeason=!controls.season||controls.season.value==='tutte'||values.season===norm(controls.season.value);
    const okStatus=!controls.status||controls.status.value==='Tutti'||values.status===norm(controls.status.value);
    const okPlace=!controls.place||controls.place.value==='Tutti'||values.place.includes(norm(controls.place.value.split('—')[0]));
    const okLeague=!controls.league||controls.league.value==='Tutte'||(controls.league.value.startsWith('Nessuna')?values.league==='nessuna':values.league.includes(norm(controls.league.value)));
    const okFormat=!controls.format||controls.format.value==='Tutti'||values.format===norm(controls.format.value);
    const show=okSearch&&okSeason&&okStatus&&okPlace&&okLeague&&okFormat;
    el.hidden=!show;
    if(show)shown++;
  });
  if(empty)empty.hidden=shown!==0;
}

search?.addEventListener('input',applyFilters);
Object.values(controls).forEach(c=>c?.addEventListener('change',applyFilters));
applyFilters();

document.getElementById('year').textContent=new Date().getFullYear();
