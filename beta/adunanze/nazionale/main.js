const menu=document.getElementById('menu');
const mobile=document.getElementById('mobile-nav');
if(menu&&mobile){
  const closeMenu=()=>{mobile.classList.remove('open');menu.setAttribute('aria-expanded','false');};
  menu.addEventListener('click',()=>{const open=mobile.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
  mobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
}

const year=document.getElementById('year');
if(year)year.textContent=new Date().getFullYear();

const loading=document.getElementById('loading');
const error=document.getElementById('error');
const empty=document.getElementById('empty');
const ongoingSection=document.getElementById('ongoing-section');
const ongoingRoot=document.getElementById('ongoing-root');
const upcomingRoot=document.getElementById('upcoming-root');
const nationalMain=document.getElementById('national-main');

function esc(value){
  return String(value??'').replace(/[&<>'"]/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
}

const dateFormatter=new Intl.DateTimeFormat('it-IT',{day:'numeric',month:'long',year:'numeric'});

function fmtDate(value){
  if(!value)return 'Data da verificare';
  const date=new Date(value+'T12:00:00');
  return dateFormatter.format(date);
}

function place(event){
  return [event.venue,event.city].filter(Boolean).join(', ')||'Luogo da definire';
}

function stage(event){
  if(!event.stage_number)return '';
  const roman=['','I','II','III','IV','V','VI','VII','VIII','IX','X'][event.stage_number]||String(event.stage_number);
  return `Duello ${roman}`;
}

function card(event){
  const statusLabel=event.status==='in corso'?'In corso':'In programma';
  const series=[event.series_name,stage(event)].filter(Boolean).join(' · ');
  const registration=event.registration_url||event.official_event_url||'';
  const action=registration
    ? `<a class="card-action" href="${esc(registration)}" target="_blank" rel="noopener">Informazioni / iscrizione →</a>`
    : '';
  return `<article class="adunanza-card" data-event-id="${esc(event.event_id)}" data-status="${esc(event.status)}" data-date="${esc(event.date||'')}">
    <header class="card-head">
      <span class="card-status">${esc(statusLabel)}</span>
      <h3>${esc(event.title)}</h3>
      ${series?`<p class="card-series">${esc(series)}</p>`:''}
    </header>
    <div class="card-body">
      <div class="fact"><span>Data</span><strong>${esc(fmtDate(event.date))}</strong></div>
      <div class="fact"><span>Luogo</span><strong>${esc(place(event))}</strong></div>
      <div class="fact"><span>Formato</span><strong>${esc(event.format||'Da definire')}</strong></div>
    </div>
    ${action}
  </article>`;
}

function byDateAscending(a,b){
  return (a.date||'9999-12-31').localeCompare(b.date||'9999-12-31');
}

function render(events){
  const ongoing=events.filter(event=>event.status==='in corso').sort(byDateAscending);
  const upcoming=events.filter(event=>event.status==='futura').sort(byDateAscending);

  if(ongoing.length){
    ongoingRoot.innerHTML=ongoing.map(card).join('');
    ongoingSection.hidden=false;
  }else{
    ongoingSection.hidden=true;
  }

  if(upcoming.length){
    upcomingRoot.innerHTML=upcoming.map(card).join('');
    empty.hidden=true;
  }else{
    upcomingRoot.innerHTML='';
    empty.hidden=false;
  }
}

fetch('../../../data/events.json',{cache:'no-store'})
  .then(response=>{if(!response.ok)throw new Error(`HTTP ${response.status}`);return response.json();})
  .then(data=>{
    const events=Array.isArray(data.events)?data.events:[];
    render(events);
    loading.hidden=true;
    nationalMain?.classList.remove('is-loading');
  })
  .catch(reason=>{
    console.error('Adunanze data load failed',reason);
    loading.hidden=true;
    error.hidden=false;
    nationalMain?.classList.remove('is-loading');
  });
