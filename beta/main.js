const menu=document.getElementById('menu');
const nav=document.getElementById('mobile-nav');
if(menu&&nav){
  const close=()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');};
  menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
  document.addEventListener('keydown',event=>{if(event.key==='Escape')close();});
}

const year=document.getElementById('year');
if(year)year.textContent=new Date().getFullYear();

const mesi=['gennaio','febbraio','marzo','aprile','maggio','giugno','luglio','agosto','settembre','ottobre','novembre','dicembre'];
const mesiBrevi=['gen','feb','mar','apr','mag','giu','lug','ago','set','ott','nov','dic'];

function esc(value){
  return String(value??'').replace(/[&<>'"]/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
}

function todayKey(){
  const now=new Date();
  const y=now.getFullYear();
  const m=String(now.getMonth()+1).padStart(2,'0');
  const d=String(now.getDate()).padStart(2,'0');
  return y+'-'+m+'-'+d;
}

function parseDate(value){
  const [year,month,day]=String(value||'').split('-').map(Number);
  if(!year||!month||!day||month<1||month>12)return null;
  return {year,month,day};
}

function fmtDate(value,short=false){
  const d=parseDate(value);
  if(!d)return 'Data da verificare';
  return d.day+' '+(short?mesiBrevi[d.month-1]:mesi[d.month-1])+' '+d.year;
}

function avatarSrc(value){
  if(!value)return '';
  if(/^https?:\/\//i.test(value)||value.startsWith('/'))return value;
  return '../'+value.replace(/^\.\//,'');
}

function initials(nickname){
  return String(nickname||'?')
    .replace(/[^\p{L}\p{N}\s]/gu,' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0,2)
    .map(part=>part[0]?.toUpperCase()||'')
    .join('')||'?';
}

function futureEvents(events){
  const today=todayKey();
  return events.filter(event=>event.status==='futura'&&event.date&&event.date>today).sort((a,b)=>a.date.localeCompare(b.date));
}

function completedEvents(events){
  return events.filter(event=>event.status==='conclusa'&&event.date).sort((a,b)=>b.date.localeCompare(a.date));
}

function renderNextEvent(events){
  const next=futureEvents(events)[0];
  const title=document.getElementById('next-title');
  const series=document.getElementById('next-event-series');
  const facts=document.getElementById('next-event-facts');
  const card=document.getElementById('next-event-card');
  if(!title||!series||!facts||!card)return;

  if(!next){
    series.textContent='Calendario';
    title.textContent='Nessuna Adunanza futura registrata';
    facts.innerHTML='<div><dt>Stato</dt><dd>In attesa del prossimo evento</dd></div>';
    card.removeAttribute('data-event-id');
    return;
  }

  card.setAttribute('data-event-id',next.event_id||'');
  series.textContent=next.series_name||'In Cerca di Avventura';
  title.textContent=next.title;
  const place=[next.venue,next.city].filter(Boolean).join(' · ')||'Luogo da definire';
  const format=next.format||'Formato da definire';
  facts.innerHTML=
    '<div><dt>Data</dt><dd>'+esc(fmtDate(next.date))+'</dd></div>'+
    '<div><dt>Luogo</dt><dd>'+esc(place)+'</dd></div>'+
    '<div><dt>Formato</dt><dd>'+esc(format)+'</dd></div>';
}

function renderChronicle(events){
  const latest=completedEvents(events)[0];
  const title=document.getElementById('chronicle-title');
  const facts=document.getElementById('chronicle-facts');
  const card=document.getElementById('latest-chronicle');
  if(!title||!facts||!card)return;

  if(!latest){
    title.textContent='Nessun evento concluso con data verificata';
    facts.innerHTML='';
    card.removeAttribute('data-event-id');
    return;
  }

  card.setAttribute('data-event-id',latest.event_id||'');
  title.textContent=latest.title;
  const place=[latest.venue,latest.city].filter(Boolean).join(' · ')||'Luogo da verificare';
  const values=[
    ['Data',fmtDate(latest.date)],
    ['Luogo',place],
    ['Formato',latest.format||'Da verificare'],
    ['Giocatori',Number.isFinite(latest.player_count)?String(latest.player_count):'Da verificare']
  ];
  facts.innerHTML=values.map(([label,value])=>'<div><dt>'+esc(label)+'</dt><dd>'+esc(value)+'</dd></div>').join('');
}

function renderStandings(standings,players){
  const root=document.getElementById('league-standings');
  if(!root)return;
  const entries=Array.isArray(standings?.entries)?standings.entries:[];
  const byId=new Map((Array.isArray(players)?players:[]).map(player=>[player.id,player]));
  const top=entries
    .filter(entry=>entry&&entry.player_id&&Number.isFinite(entry.points))
    .sort((a,b)=>{
      const ar=Number.isFinite(a.rank)?a.rank:Number.POSITIVE_INFINITY;
      const br=Number.isFinite(b.rank)?b.rank:Number.POSITIVE_INFINITY;
      return ar-br||b.points-a.points||String(a.player_id).localeCompare(String(b.player_id));
    })
    .slice(0,3);

  if(!top.length){
    root.innerHTML=[1,2,3].map((rank,index)=>{
      const roman=['I','II','III'][index];
      return '<article class="standing-card standing-loading" data-ica-id="HOME-STD-0'+(index+3)+'"><span class="standing-rank">'+roman+'</span><div class="standing-avatar">—</div><strong>Classifica in aggiornamento</strong><small>— punti</small></article>';
    }).join('');
    return;
  }

  root.innerHTML=top.map((entry,index)=>{
    const player=byId.get(entry.player_id);
    const nickname=player?.nickname||'Avventuriero da verificare';
    const avatar=player?.avatar_url
      ? '<img src="'+esc(avatarSrc(player.avatar_url))+'" alt="">'
      : '<span aria-hidden="true">'+esc(initials(nickname))+'</span>';
    const roman=['I','II','III'][index]||String(index+1);
    return '<article class="standing-card" data-ica-id="HOME-STD-0'+(index+3)+'" data-player-id="'+esc(entry.player_id)+'">'+
      '<span class="standing-rank">'+roman+'</span>'+
      '<div class="standing-avatar">'+avatar+'</div>'+
      '<strong>'+esc(nickname)+'</strong>'+
      '<small>'+esc(entry.points)+' punti lega</small>'+
    '</article>';
  }).join('');
}

function renderProclamation(data){
  const items=Array.isArray(data?.items)?data.items:[];
  const today=todayKey();
  const published=items
    .filter(item=>item&&item.status==='published'&&item.date&&item.date<=today)
    .sort((a,b)=>b.date.localeCompare(a.date))[0];
  if(!published)return;

  const date=document.getElementById('proclamation-date');
  const title=document.getElementById('proclamation-title');
  const summary=document.getElementById('proclamation-summary');
  const card=document.getElementById('latest-proclamation');
  if(!date||!title||!summary||!card)return;

  date.dateTime=published.date;
  date.textContent=fmtDate(published.date,true);
  title.textContent=published.title||'Proclama';
  summary.textContent=published.summary||'';
  card.setAttribute('data-proclamation-id',published.id||'');
}

fetch('../data/events.json',{cache:'no-store'})
  .then(response=>{if(!response.ok)throw new Error('HTTP '+response.status);return response.json();})
  .then(data=>{
    const events=Array.isArray(data.events)?data.events:[];
    renderNextEvent(events);
    renderChronicle(events);
  })
  .catch(reason=>{
    console.error('Homepage event data load failed',reason);
    const next=document.getElementById('next-title');
    const chronicle=document.getElementById('chronicle-title');
    if(next)next.textContent='Calendario non disponibile';
    if(chronicle)chronicle.textContent='Cronache non disponibili';
  });

Promise.all([
  fetch('../data/league-standings.json',{cache:'no-store'}).then(r=>{if(!r.ok)throw new Error('standings HTTP '+r.status);return r.json();}),
  fetch('../data/players.json',{cache:'no-store'}).then(r=>{if(!r.ok)throw new Error('players HTTP '+r.status);return r.json();})
])
  .then(([standings,players])=>renderStandings(standings,players.players))
  .catch(reason=>{
    console.error('Homepage standings load failed',reason);
    renderStandings({entries:[]},[]);
  });

fetch('../data/proclami.json',{cache:'no-store'})
  .then(response=>{if(!response.ok)throw new Error('HTTP '+response.status);return response.json();})
  .then(renderProclamation)
  .catch(reason=>console.error('Homepage proclamations load failed',reason));
