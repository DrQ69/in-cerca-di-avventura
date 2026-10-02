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
const completedSection=document.getElementById('completed-section');
const completedRoot=document.getElementById('completed-root');
const activeLeagues=document.getElementById('active-leagues');
const activeLeaguesRoot=document.getElementById('active-leagues-root');
const completedLeagues=document.getElementById('completed-leagues');
const completedLeaguesRoot=document.getElementById('completed-leagues-root');
const leaguesEmpty=document.getElementById('leagues-empty');
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
  return `Tappa ${roman}`;
}

function timeValue(value){
  return value||'Da definire';
}

function organizer(event){
  if(event?.organizer)return event.organizer;
  if(event?.series_id==='blaze-of-glory-2026-2027')return 'Il Regno di Cremos';
  return 'Da verificare';
}

function entryFee(event){
  return Number.isFinite(event?.entry_fee_eur)?event.entry_fee_eur+' €':'Da verificare';
}

function availability(event){
  if(event?.availability_status)return event.availability_status;
  return event?.status==='conclusa'?'Conclusa':'Da verificare';
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
  const statusLabel=event.status==='in corso'?'In corso':event.status==='conclusa'?'Conclusa':'In programma';
  const series=[event.series_name,stage(event)].filter(Boolean).join(' · ');
  const registration=event.registration_url||event.official_event_url||'';
  const rules=infoPopover('Regolamento',rulesContent(event),'rules-control',event.event_id);
  const prizes=infoPopover('Premi',prizeGrid(event),'prizes-control',event.event_id);
  const signup=event.status==='conclusa'
    ? '<a class="card-action signup-action" href="../../cronache/">Cronache</a>'
    : registration
      ? `<a class="card-action signup-action" href="${esc(registration)}" target="_blank" rel="noopener noreferrer">Iscriviti</a>`
      : '<span class="card-action signup-action is-disabled" aria-disabled="true" title="Link evento Sorcery non ancora disponibile">Iscriviti</span>';
  return `<article id="event-${esc(event.event_id)}" class="adunanza-card" data-ica-id="AN-CARD-${esc(event.event_id)}" data-event-id="${esc(event.event_id)}" data-status="${esc(event.status)}" data-date="${esc(event.date||'')}">
    <header class="card-head" data-ica-id="AN-CARD-HEAD-${esc(event.event_id)}">
      <span class="card-status">${esc(statusLabel)}</span>
      <h3>${esc(event.title)}</h3>
      ${series?`<p class="card-series">${esc(series)}</p>`:''}
    </header>
    <div class="card-body" data-ica-id="AN-CARD-BODY-${esc(event.event_id)}">
      <div class="fact"><span>Data</span><strong>${esc(fmtDate(event.date))}</strong></div>
      <div class="fact"><span>Luogo</span><strong>${placeLink(event)}</strong></div>
      <div class="fact"><span>Formato</span><strong>${esc(event.format||'Da definire')}</strong></div>
      <div class="fact"><span>Organizzatore</span><strong>${esc(organizer(event))}</strong></div>
      <div class="fact"><span>Costo</span><strong>${esc(entryFee(event))}</strong></div>
      <div class="fact"><span>Disponibilità</span><strong>${esc(availability(event))}</strong></div>
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
  const completed=events.filter(event=>event.status==='conclusa').sort((a,b)=>byDateAscending(b,a));

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

  if(completed.length){
    completedSection.hidden=false;
    await appendCards(completedRoot,completed);
  }else{
    completedSection.hidden=true;
    completedRoot.innerHTML='';
  }
}

function standingsRows(entries){
  return entries.map(entry=>'<tr><td>'+esc(entry.rank)+'</td><td><a href="../../avventurieri/?player='+encodeURIComponent(entry.player_id)+'">'+esc(entry.nickname)+'</a></td><td>'+esc(entry.points)+'</td><td>'+esc(entry.stages_completed??'—')+'</td></tr>').join('');
}

function leagueMarkup(model,eventAnchor,leagueAnchor){
  const stages=model.stages.map(event=>{
    const label='Tappa '+esc(event.stage_label||event.stage_number);
    return '<a class="league-stage-row" href="#'+esc(eventAnchor(event.event_id))+'">'+
      '<strong>'+label+' · '+esc(event.title||event.event_id)+'</strong>'+
      '<span>'+esc(fmtDate(event.date))+' · '+esc(place(event))+' · '+esc(event.format||'Formato da verificare')+' · '+esc(event.status||'Stato da verificare')+'</span>'+
    '</a>';
  }).join('');
  const top=model.top3.length
    ? model.top3.map((entry,index)=>'<article class="league-podium-card"><span>'+(index+1)+'</span><strong>'+esc(entry.nickname)+'</strong><small>'+esc(entry.points)+' GP</small></article>').join('')
    : '<p class="league-empty-copy">In attesa della prima Tappa ufficiale.</p>';
  const table=model.entries.length
    ? '<div class="league-table-scroll"><table class="league-table"><thead><tr><th>Pos.</th><th>Avventuriero</th><th>GP</th><th>Tappe</th></tr></thead><tbody>'+standingsRows(model.entries)+'</tbody></table></div>'
    : '<p class="league-empty-copy">Classifica non ancora disponibile.</p>';
  const history=model.completed.length
    ? '<ul class="league-history">'+model.completed.map(event=>'<li><strong>'+esc('Tappa '+(event.stage_label||event.stage_number||'—'))+' · '+esc(event.title)+'</strong><span>'+esc(fmtDate(event.date))+'</span></li>').join('')+'</ul><a class="league-archive-link" href="../../cronache/">Apri l’archivio Cronache →</a>'
    : '<p class="league-empty-copy">Nessuna Cronaca di questa Lega disponibile.</p>';
  const panelId=leagueAnchor(model.id)+'-panel';
  return '<article class="league-card" id="'+esc(leagueAnchor(model.id))+'" data-series-id="'+esc(model.id)+'">'+
    '<h3><button class="league-toggle" type="button" aria-expanded="false" aria-controls="'+esc(panelId)+'">'+
      '<span><strong>'+esc(model.name)+'</strong><small>'+esc(model.season)+' · Organizzatore: '+esc(model.organizer)+'</small></span><span aria-hidden="true">＋</span></button></h3>'+
    '<div class="league-panel" id="'+esc(panelId)+'" hidden>'+
      '<section><h4>Presentazione</h4><p>Lega di Sorcery: Contested Realm organizzata da '+esc(model.organizer)+'.</p></section>'+
      '<section><h4>Tappe</h4><div class="league-stages">'+stages+'</div></section>'+
      '<section><h4>Classifica</h4><div class="league-podium">'+top+'</div>'+table+'</section>'+
      '<section><h4>Cronache</h4>'+history+'</section>'+
    '</div></article>';
}

function setupLeagueAccordion(root){
  root.querySelectorAll('.league-toggle').forEach(button=>button.addEventListener('click',()=>{
    const card=button.closest('.league-card');
    const open=button.getAttribute('aria-expanded')==='true';
    root.querySelectorAll('.league-toggle[aria-expanded="true"]').forEach(other=>{
      if(other!==button){
        other.setAttribute('aria-expanded','false');
        other.querySelector('[aria-hidden="true"]')?.replaceChildren('＋');
        const otherPanel=document.getElementById(other.getAttribute('aria-controls'));
        if(otherPanel)otherPanel.hidden=true;
      }
    });
    button.setAttribute('aria-expanded',String(!open));
    button.querySelector('[aria-hidden="true"]')?.replaceChildren(open?'＋':'−');
    const panel=document.getElementById(button.getAttribute('aria-controls'));
    if(panel)panel.hidden=open;
    if(!open)card?.scrollIntoView({block:'start',behavior:'smooth'});
  }));
}

function openLeagueFromHash(){
  const id=decodeURIComponent(location.hash.slice(1));
  if(!id.startsWith('lega-'))return;
  const card=document.getElementById(id);
  const button=card?.querySelector('.league-toggle');
  if(button&&button.getAttribute('aria-expanded')!=='true')button.click();
}

async function renderLeagues(events,standings,players){
  const {buildLeagueView,eventAnchor,leagueAnchor}=await import('./league-model.mjs');
  const model=buildLeagueView(events,standings,players);
  if(!model){
    activeLeagues.hidden=true;
    completedLeagues.hidden=true;
    leaguesEmpty.hidden=false;
    return;
  }
  leaguesEmpty.hidden=true;
  const html=leagueMarkup(model,eventAnchor,leagueAnchor);
  if(model.status==='active'){
    activeLeagues.hidden=false;
    completedLeagues.hidden=true;
    activeLeaguesRoot.innerHTML=html;
    setupLeagueAccordion(activeLeaguesRoot);
  }else{
    activeLeagues.hidden=true;
    completedLeagues.hidden=false;
    completedLeaguesRoot.innerHTML=html;
    setupLeagueAccordion(completedLeaguesRoot);
  }
  openLeagueFromHash();
}

import('../../shared/release-reader.mjs').then(({readSiteBundle})=>readSiteBundle(
  new URL('../../../data/current-release.json',document.baseURI).href,
  {players:new URL('../../../data/players.json',document.baseURI).href,
   events:new URL('../../../data/events.json',document.baseURI).href,
   standings:new URL('../../../data/league-standings.json',document.baseURI).href}
))
  .then(async ({events:data,standings,players})=>{
    const events=Array.isArray(data.events)?data.events:[];
    await render(events);
    await renderLeagues(events,standings,players.players);
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
  control.classList.remove('align-right','open-down','fit-viewport');
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
  const fitsAbove=triggerRect.top-popRect.height-margin>=0;
  const fitsBelow=triggerRect.bottom+popRect.height+margin<=window.innerHeight;
  if(!fitsAbove&&fitsBelow){
    control.classList.add('open-down');
  }else if(!fitsAbove&&!fitsBelow){
    control.classList.add('fit-viewport');
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

window.addEventListener('hashchange',openLeagueFromHash);
