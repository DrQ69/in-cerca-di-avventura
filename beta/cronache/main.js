const menu=document.getElementById('menu');
const mobile=document.getElementById('mobile-nav');
if(menu&&mobile){
  const closeMenu=()=>{mobile.classList.remove('open');menu.setAttribute('aria-expanded','false');};
  menu.addEventListener('click',()=>{const open=mobile.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
  mobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
}

document.getElementById('year').textContent=new Date().getFullYear();

const root=document.getElementById('seasons-root');
const loading=document.getElementById('loading');
const error=document.getElementById('error');
const empty=document.getElementById('empty');
const search=document.getElementById('search');
const controls={season:document.getElementById('season'),status:document.getElementById('status'),place:document.getElementById('place'),league:document.getElementById('league'),format:document.getElementById('format')};
let events=[];

const icons={date:'../../assets/ui/cronache/icons/date.svg',place:'../../assets/ui/cronache/icons/place.svg',format:'../../assets/ui/cronache/icons/format.svg',players:'../../assets/ui/cronache/icons/players.svg',winner:'../../assets/ui/cronache/icons/winner.svg'};
const statusIcon={futura:'../../assets/ui/cronache/status/skull-futura.svg','in corso':'../../assets/ui/cronache/status/skull-in-corso.svg',conclusa:'../../assets/ui/cronache/status/skull-conclusa.svg'};
const statusLabel={futura:'Futura','in corso':'In corso',conclusa:'Conclusa'};

function norm(v){return String(v||'').toLocaleLowerCase('it').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ').trim();}
function esc(v){return String(v??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
function fmtDate(v){if(!v)return 'Da verificare';const d=new Date(v+'T12:00:00');return new Intl.DateTimeFormat('it-IT',{day:'numeric',month:'long',year:'numeric'}).format(d);}
function roman(n){return ['','I','II','III','IV','V','VI','VII','VIII','IX','X'][n]||String(n||'');}
function eventType(e){return e.classification==='giostra'?'Giostra ICA autonoma':'Duello di Lega';}
function formatName(e){return e.format||'Da definire';}
function recordSearch(e){return [e.title,e.series_name,e.venue,e.city,e.format,e.structure,eventType(e),e.winner_display_name].filter(Boolean).join(' ');}

function populateSelect(select,items,allLabel){const current=select.value;select.innerHTML=`<option value="${esc(allLabel.value)}">${esc(allLabel.label)}</option>`+items.map(v=>`<option value="${esc(v.value)}">${esc(v.label)}</option>`).join('');if([...select.options].some(o=>o.value===current))select.value=current;}

function buildFilters(){
  const seasons=[...new Set(events.map(e=>e.season).filter(Boolean))].sort().reverse().map(v=>({value:v,label:v}));
  const places=[...new Map(events.filter(e=>e.venue||e.city).map(e=>{const label=[e.venue,e.city].filter(Boolean).join(' — ');return [norm(label),{value:norm(label),label}]})).values()].sort((a,b)=>a.label.localeCompare(b.label,'it'));
  const leagues=[...new Map(events.map(e=>e.series_name? [norm(e.series_name),{value:norm(e.series_name),label:e.series_name}] : ['nessuna',{value:'nessuna',label:'Nessuna — Giostra autonoma'}])).values()];
  const formats=[...new Set(events.map(e=>formatName(e)))].sort((a,b)=>a.localeCompare(b,'it')).map(v=>({value:norm(v),label:v}));
  populateSelect(controls.season,seasons,{value:'tutte',label:'Tutte'});
  populateSelect(controls.place,places,{value:'tutti',label:'Tutti'});
  populateSelect(controls.league,leagues,{value:'tutte',label:'Tutte'});
  populateSelect(controls.format,formats,{value:'tutti',label:'Tutti'});
}

function computeMetrics(){
  const series=new Map();events.filter(e=>e.series_id).forEach(e=>{if(!series.has(e.series_id))series.set(e.series_id,[]);series.get(e.series_id).push(e);});
  const completedLeagues=[...series.values()].filter(list=>list.length>0&&list.every(e=>e.status==='conclusa')).length;
  const completedJousts=events.filter(e=>e.classification==='giostra'&&e.status==='conclusa').length;
  document.getElementById('metric-leagues').textContent=completedLeagues;
  document.getElementById('metric-jousts').textContent=completedJousts;
}

function recordHTML(e){
  const completed=e.status==='conclusa';
  const dateText=e.date?fmtDate(e.date):'Da verificare nella fonte ufficiale';
  const league=e.series_name||'Giostra ICA autonoma';
  const stage=e.stage_number?`Duello ${roman(e.stage_number)}`:'Evento autonomo';
  const result=completed
    ? `<div class="results"><span class="result-item"><img src="${icons.players}" alt=""><span><b>${esc(e.player_count??'—')}</b><small>giocatori</small></span></span><span class="result-item winner"><img src="${icons.winner}" alt=""><span><b>Vincitore</b><small>${esc(e.winner_display_name||'Da verificare')}</small></span></span></div>`
    : `<div class="results"><span class="pending-result">Risultati disponibili dopo la conclusione</span></div>`;
  const truth=e.date?'' : `<span class="truth-note">La data non viene inferita: resta non pubblicata finché non è verificata.</span>`;
  const action=e.official_results_url?`<a class="detail-link" href="${esc(e.official_results_url)}" target="_blank" rel="noopener">Risultati →</a>`:`<span class="detail-pending">Dettagli in preparazione</span>`;
  const place=[e.venue,e.city].filter(Boolean).join(', ');
  return `<article class="event-record status-${e.status==='conclusa'?'completed':e.status==='in corso'?'ongoing':'future'}" data-id="${esc(e.event_id)}" data-season="${esc(e.season)}" data-status="${esc(norm(e.status))}" data-place="${esc(norm(place))}" data-league="${esc(e.series_name?norm(e.series_name):'nessuna')}" data-format="${esc(norm(formatName(e)))}" data-search="${esc(norm(recordSearch(e)))}">
    <div class="record-cell status-cell"><img src="${statusIcon[e.status]||statusIcon.futura}" alt=""><span class="status-label">${statusLabel[e.status]||esc(e.status)}</span></div>
    <div class="record-cell identity-cell"><h3>${esc(e.title)}</h3><p class="series">${esc(league)}</p><span class="stage">${esc(stage)}</span></div>
    <div class="record-cell record-meta"><div class="meta">
      <span class="meta-item"><img src="${icons.date}" alt=""><span><b>Data</b><small>${esc(dateText)}</small></span></span>
      <span class="meta-item"><img src="${icons.place}" alt=""><span><b>Luogo</b><small>${esc(place||'Da definire')}</small></span></span>
      <span class="meta-item"><img src="${icons.format}" alt=""><span><b>Tipo</b><small>${esc(eventType(e))}</small></span></span>
    </div>${truth}</div>
    <div class="record-cell results-cell"><span class="format">${esc(formatName(e))}</span>${result}</div>
    <div class="record-cell action-cell">${action}</div>
  </article>`;
}

function sortEvents(list){const rank={conclusa:0,'in corso':1,futura:2};return [...list].sort((a,b)=>{const r=(rank[a.status]??9)-(rank[b.status]??9);if(r)return r;const ad=a.date||'0000-00-00',bd=b.date||'0000-00-00';return a.status==='futura'?ad.localeCompare(bd):bd.localeCompare(ad);});}

function render(){
  const seasons=[...new Set(events.map(e=>e.season).filter(Boolean))].sort().reverse();
  root.innerHTML=seasons.map(season=>{const list=sortEvents(events.filter(e=>e.season===season));return `<section class="season" data-season-section="${esc(season)}" aria-labelledby="season-${esc(season)}"><header class="season-heading"><img src="../../assets/ui/cronache/season-ornament.svg" alt=""><h2 id="season-${esc(season)}">Stagione ${esc(season)}</h2><p><span class="season-count">${list.length}</span> eventi registrati</p></header><div class="records">${list.map(recordHTML).join('')}</div></section>`;}).join('');
  applyFilters();
}

function applyFilters(){
  const q=norm(search?.value);let shown=0;
  const records=[...document.querySelectorAll('.event-record')];
  records.forEach(el=>{const okSearch=!q||norm(el.dataset.search+' '+el.textContent).includes(q);const okSeason=controls.season.value==='tutte'||el.dataset.season===controls.season.value;const okStatus=controls.status.value==='tutti'||el.dataset.status===norm(controls.status.value);const okPlace=controls.place.value==='tutti'||el.dataset.place===controls.place.value;const okLeague=controls.league.value==='tutte'||el.dataset.league===controls.league.value;const okFormat=controls.format.value==='tutti'||el.dataset.format===controls.format.value;const show=okSearch&&okSeason&&okStatus&&okPlace&&okLeague&&okFormat;el.hidden=!show;if(show)shown++;});
  document.querySelectorAll('[data-season-section]').forEach(section=>{const visible=[...section.querySelectorAll('.event-record')].filter(r=>!r.hidden);section.hidden=visible.length===0;const count=section.querySelector('.season-count');if(count)count.textContent=visible.length;});
  empty.hidden=shown!==0;
}

search?.addEventListener('input',applyFilters);Object.values(controls).forEach(c=>c?.addEventListener('change',applyFilters));

fetch('../../data/cronache-events.json',{cache:'no-store'})
  .then(r=>{if(!r.ok)throw new Error(`HTTP ${r.status}`);return r.json();})
  .then(data=>{events=Array.isArray(data.events)?data.events:[];buildFilters();computeMetrics();render();loading.hidden=true;})
  .catch(err=>{console.error('Cronache data load failed',err);loading.hidden=true;error.hidden=false;});
