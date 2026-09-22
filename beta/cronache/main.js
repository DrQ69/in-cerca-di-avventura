const menu=document.getElementById('menu');
const mobile=document.getElementById('mobile-nav');
if(menu&&mobile){
  const closeMenu=()=>{mobile.classList.remove('open');menu.setAttribute('aria-expanded','false');};
  menu.addEventListener('click',()=>{const open=mobile.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
  mobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
}

document.getElementById('year').textContent=new Date().getFullYear();

const root=document.getElementById('chronicles-root');
const loading=document.getElementById('loading');
const error=document.getElementById('error');
const empty=document.getElementById('empty');

function esc(v){
  return String(v??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
}

function fmtDate(v){
  if(!v)return 'Da verificare';
  const d=new Date(v+'T12:00:00');
  return new Intl.DateTimeFormat('it-IT',{day:'numeric',month:'long',year:'numeric'}).format(d);
}

function placeName(e){
  return [e.venue,e.city].filter(Boolean).join(', ')||'Da verificare';
}

function deckLink(e){
  if(e.winner_deck_url){
    return `<a class="winner-deck-link" href="${esc(e.winner_deck_url)}" target="_blank" rel="noopener">Mazzo del vincitore →</a>`;
  }
  return '<span class="winner-deck-pending">Mazzo del vincitore — prossimamente</span>';
}

function eventCard(e){
  return `<article class="chronicle-record" data-ica-id="CRO-REC-${esc(e.event_id||'unknown')}">
    <header class="chronicle-record-head" data-ica-id="CRO-REC-TITLE-${esc(e.event_id||'unknown')}">
      <h3>${esc(e.title)}</h3>
    </header>
    <div class="chronicle-facts">
      <div class="chronicle-fact" data-ica-id="CRO-REC-PLACE-${esc(e.event_id||'unknown')}"><span>Luogo</span><strong>${esc(placeName(e))}</strong></div>
      <div class="chronicle-fact" data-ica-id="CRO-REC-DATE-${esc(e.event_id||'unknown')}"><span>Data</span><strong>${esc(fmtDate(e.date))}</strong></div>
      <div class="chronicle-fact" data-ica-id="CRO-REC-WINNER-${esc(e.event_id||'unknown')}"><span>Vincitore</span><strong>${esc(e.winner_display_name||'Da verificare')}</strong></div>
      <div class="chronicle-fact" data-ica-id="CRO-REC-PLAYERS-${esc(e.event_id||'unknown')}"><span>Giocatori</span><strong>${esc(e.player_count??'—')}</strong></div>
      <div class="chronicle-fact chronicle-deck" data-ica-id="CRO-REC-DECK-${esc(e.event_id||'unknown')}">${deckLink(e)}</div>
    </div>
  </article>`;
}

function render(events){
  const completed=events
    .filter(e=>e.status==='conclusa')
    .sort((a,b)=>(b.date||'0000-00-00').localeCompare(a.date||'0000-00-00'));

  if(!completed.length){
    empty.hidden=false;
    return;
  }

  const seasons=[...new Set(completed.map(e=>e.season).filter(Boolean))].sort().reverse();
  root.innerHTML=seasons.map(season=>{
    const list=completed.filter(e=>e.season===season);
    return `<section class="chronicle-season" data-ica-id="CRO-SEA-${esc(season)}" aria-labelledby="chronicle-season-${esc(season)}">
      <header class="chronicle-season-head" data-ica-id="CRO-SEA-HEAD-${esc(season)}">
        <h2 id="chronicle-season-${esc(season)}">${esc(season)}</h2>
      </header>
      <div class="chronicle-records">${list.map(eventCard).join('')}</div>
    </section>`;
  }).join('');
}

fetch('../../data/events.json',{cache:'no-store'})
  .then(r=>{if(!r.ok)throw new Error(`HTTP ${r.status}`);return r.json();})
  .then(data=>{
    const events=Array.isArray(data.events)?data.events:[];
    render(events);
    loading.hidden=true;
  })
  .catch(err=>{
    console.error('Cronache data load failed',err);
    loading.hidden=true;
    error.hidden=false;
  });
