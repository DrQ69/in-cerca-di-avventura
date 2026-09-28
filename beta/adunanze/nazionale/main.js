const menu=document.getElementById('menu');
const mobile=document.getElementById('mobile-nav');
if(menu&&mobile){
  const closeMenu=()=>{mobile.classList.remove('open');menu.setAttribute('aria-expanded','false');};
  menu.addEventListener('click',()=>{const open=mobile.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
  mobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('pointerover',event=>{
  const control=event.target.closest('.info-control');
  if(control)positionPopover(control);
});
document.addEventListener('focusin',event=>{
  const control=event.target.closest('.info-control');
  if(control)positionPopover(control);
});
window.addEventListener('resize',()=>{
  document.querySelectorAll('.info-control.is-open').forEach(positionPopover);
});

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
const nationalShell=document.getElementById('national-shell');

function esc(value){
  return String(value??'').replace(/[&<>'"]/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
}

const mesi=['gennaio','febbraio','marzo','aprile','maggio','giugno','luglio','agosto','settembre','ottobre','novembre','dicembre'];

function fmtDate(value){
  if(!value)return 'Data da verificare';
  const [year,month,day]=String(value).split('-').map(Number);
  if(!year||!month||!day||month<1||month>12)return 'Data da verificare';
  return `${day} ${mesi[month-1]} ${year}`;
}

function place(event){
  return [event.venue,event.city].filter(Boolean).join(', ')||'Luogo da definire';
}

function mapsUrl(event){
  const query=event?.address||[event?.venue,event?.city,event?.province,event?.country].filter(Boolean).join(', ');
  return query?'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(query):'';
}

function placeLink(event){
  const label=place(event);
  const url=mapsUrl(event);
  if(!url)return esc(label);
  return '<a class="map-link" href="'+esc(url)+'" target="_blank" rel="noopener noreferrer" aria-label="Apri '+esc(label)+' in Google Maps">'+esc(label)+'</a>';
}

function stage(event){
  if(!event.stage_number)return '';
  const roman=['','I','II','III','IV','V','VI','VII','VIII','IX','X'][event.stage_number]||String(event.stage_number);
  return `Duello ${roman}`;
}

function timeValue(value){
  return value||'Da definire';
}

function prizeGrid(event){
  const pop=event.prize_popover;
  if(pop){
    const prizes=Array.isArray(pop.prizes)?'<ol class="prize-copy-list">'+pop.prizes.map(item=>'<li>'+esc(item.replace(/^\\d+\\s*-\\s*/,''))+'</li>').join('')+'</ol>':'';
    const notes=Array.isArray(pop.notes)?pop.notes.map((note,index)=>'<p class="prize-note prize-note-'+(index+1)+'">'+esc(note)+'</p>').join(''):'';
    return '<div class="prize-copy">'+
      (pop.title?'<h4>'+esc(pop.title)+'</h4>':'')+
      (pop.subtitle?'<p class="popover-heading">'+esc(pop.subtitle)+'</p>':'')+
      prizes+
      notes+
    '</div>';
  }
  const rows=Array.isArray(event.prize_grid)?event.prize_grid:[];
  const notes=Array.isArray(event.prize_notes)?event.prize_notes:[];
  if(rows.length){
    const heading=event.prize_grid_status==='projected_20_players'
      ? '<p class="popover-heading">Proiezione con 20 partecipanti</p>'
      : '';
    const grid='<div class="prize-grid">'+rows.map(row=>'<div><strong>'+esc(row.top_label||'Top')+'</strong><span>'+esc(row.prize||'Premio da definire')+'</span></div>').join('')+'</div>';
    const noteHtml=notes.length?'<ul class="popover-list">'+notes.map(note=>'<li>'+esc(note)+'</li>').join('')+'</ul>':'';
    return heading+grid+noteHtml;
  }
  return '<p class="popover-note">Griglia premi in aggiornamento. Verrà pubblicata per fasce di partecipazione (X Giocatori → Top X).</p>';
}

function rulesContent(event){
  const pop=event.rules_popover;
  if(pop){
    const deck=Array.isArray(pop.deckbuilding)?'<ul class="popover-list">'+pop.deckbuilding.map(item=>'<li>'+esc(item)+'</li>').join('')+'</ul>':'';
    const avatars=Array.isArray(pop.avatars)?'<ul class="popover-list">'+pop.avatars.map(item=>'<li>'+esc(item)+'</li>').join('')+'</ul>':'';
    return '<div class="rules-copy">'+
      (pop.title?'<h4>'+esc(pop.title)+'</h4>':'')+
      (pop.intro?'<p>'+esc(pop.intro)+'</p>':'')+
      deck+
      (pop.avatars_title?'<h5>'+esc(pop.avatars_title)+'</h5>':'')+
      avatars+
      (pop.decklist_title?'<h5>'+esc(pop.decklist_title)+'</h5>':'')+
      (pop.decklist?'<p>'+esc(pop.decklist)+'</p>':'')+
    '</div>';
  }
  const blocks=[];
  if(event.rules_details) blocks.push('<p>'+esc(event.rules_details)+'</p>');
  if(event.rounds) blocks.push('<p><strong>Struttura:</strong> '+esc(event.rounds)+'</p>');
  if(event.match_format) blocks.push('<p><strong>Partite:</strong> '+esc(event.match_format)+'</p>');
  if(event.league_valid) blocks.push('<p><strong>Lega:</strong> tappa valida per la classifica Blaze of Glory.</p>');
  if(Number.isFinite(event.entry_fee_eur)) blocks.push('<p><strong>Ingresso:</strong> '+esc(event.entry_fee_eur)+' €</p>');
  if(Array.isArray(event.fee_details)&&event.fee_details.length){
    blocks.push('<ul class="popover-list">'+event.fee_details.map(item=>'<li>'+esc(item)+'</li>').join('')+'</ul>');
  }
  return blocks.join('')||'<p>Regolamento in aggiornamento.</p>';
}

function infoPopover(label,content,kind,eventId){
  return '<span class="info-control '+kind+'">'+
    '<button type="button" class="info-trigger" aria-haspopup="dialog" aria-expanded="false">'+esc(label)+'</button>'+
    '<span class="event-popover" role="dialog" aria-label="'+esc(label)+' '+esc(eventId)+'">'+content+'</span>'+
  '</span>';
}

function card(event){
  const statusLabel=event.status==='in corso'?'In corso':'In programma';
  const series=[event.series_name,stage(event)].filter(Boolean).join(' · ');
  const registration=event.registration_url||event.official_event_url||'';
  const rules=infoPopover('Regolamento',rulesContent(event),'rules-control',event.event_id);
  const prizes=infoPopover('Premi',prizeGrid(event),'prizes-control',event.event_id);
  const signup=registration
    ? `<a class="card-action signup-action" href="${esc(registration)}" target="_blank" rel="noopener noreferrer">Iscriviti</a>`
    : '<span class="card-action signup-action is-disabled" aria-disabled="true" title="Link evento Sorcery non ancora disponibile">Iscriviti</span>';
  return `<article class="adunanza-card" data-ica-id="AN-CARD-${esc(event.event_id)}" data-event-id="${esc(event.event_id)}" data-status="${esc(event.status)}" data-date="${esc(event.date||'')}">
    <header class="card-head" data-ica-id="AN-CARD-HEAD-${esc(event.event_id)}">
      <span class="card-status">${esc(statusLabel)}</span>
      <h3>${esc(event.title)}</h3>
      ${series?`<p class="card-series">${esc(series)}</p>`:''}
    </header>
    <div class="card-body" data-ica-id="AN-CARD-BODY-${esc(event.event_id)}">
      <div class="fact"><span>Data</span><strong>${esc(fmtDate(event.date))}</strong></div>
      <div class="fact"><span>Luogo</span><strong>${placeLink(event)}</strong></div>
      <div class="fact"><span>Formato</span><strong>${esc(event.format||'Da definire')}</strong></div>
      <div class="fact"><span>Check-in</span><strong>${esc(timeValue(event.check_in_time))}</strong></div>
      <div class="fact"><span>Inizio</span><strong>${esc(timeValue(event.start_time))}</strong></div>
    </div>
    <div class="card-tools" data-ica-id="AN-CARD-TOOLS-${esc(event.event_id)}">
      ${rules}
      ${prizes}
      ${signup}
    </div>
  </article>`;
}

function byDateAscending(a,b){
  return (a.date||'9999-12-31').localeCompare(b.date||'9999-12-31');
}

function nextFrame(){
  return new Promise(resolve=>requestAnimationFrame(()=>resolve()));
}

async function appendCards(root,events){
  root.innerHTML='';
  for(const event of events){
    const template=document.createElement('template');
    template.innerHTML=card(event).trim();
    root.append(template.content.firstElementChild);
    await nextFrame();
  }
}

async function render(events){
  const ongoing=events.filter(event=>event.status==='in corso').sort(byDateAscending);
  const upcoming=events.filter(event=>event.status==='futura').sort(byDateAscending);

  if(ongoing.length){
    ongoingSection.hidden=false;
    await appendCards(ongoingRoot,ongoing);
  }else{
    ongoingSection.hidden=true;
    ongoingRoot.innerHTML='';
  }

  if(upcoming.length){
    empty.hidden=true;
    await appendCards(upcomingRoot,upcoming);
  }else{
    upcomingRoot.innerHTML='';
    empty.hidden=false;
  }
}

fetch('../../../data/events.json',{cache:'no-store'})
  .then(response=>{if(!response.ok)throw new Error(`HTTP ${response.status}`);return response.json();})
  .then(async data=>{
    const events=Array.isArray(data.events)?data.events:[];
    await render(events);
    loading.hidden=true;
    nationalMain?.classList.remove('is-loading');
    nationalShell?.classList.remove('is-loading');
  })
  .catch(reason=>{
    console.error('Adunanze data load failed',reason);
    loading.hidden=true;
    error.hidden=false;
    nationalMain?.classList.remove('is-loading');
    nationalShell?.classList.remove('is-loading');
  });


function positionPopover(control){
  if(!control)return;
  control.classList.remove('align-right','open-down');
  const popover=control.querySelector('.event-popover');
  if(!popover)return;

  const wasOpen=control.classList.contains('is-open');
  control.classList.add('is-open');
  popover.style.visibility='hidden';
  const triggerRect=control.getBoundingClientRect();
  const popRect=popover.getBoundingClientRect();
  const margin=12;

  if(triggerRect.left+popRect.width>window.innerWidth-margin){
    control.classList.add('align-right');
  }
  if(triggerRect.top-popRect.height-margin<0 && triggerRect.bottom+popRect.height+margin<=window.innerHeight){
    control.classList.add('open-down');
  }

  popover.style.visibility='';
  if(!wasOpen)control.classList.remove('is-open');
}

document.addEventListener('click',event=>{
  const trigger=event.target.closest('.info-trigger');
  if(trigger){
    const control=trigger.closest('.info-control');
    positionPopover(control);
    const open=control?.classList.toggle('is-open');
    document.querySelectorAll('.info-control.is-open').forEach(item=>{if(item!==control)item.classList.remove('is-open');});
    trigger.setAttribute('aria-expanded',String(Boolean(open)));
    return;
  }
  if(!event.target.closest('.info-control')){
    document.querySelectorAll('.info-control.is-open').forEach(item=>{
      item.classList.remove('is-open');
      item.querySelector('.info-trigger')?.setAttribute('aria-expanded','false');
    });
  }
});
document.addEventListener('keydown',event=>{
  if(event.key==='Escape'){
    document.querySelectorAll('.info-control.is-open').forEach(item=>{
      item.classList.remove('is-open');
      item.querySelector('.info-trigger')?.setAttribute('aria-expanded','false');
    });
  }
});
