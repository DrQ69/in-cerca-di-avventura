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

const track=document.getElementById('player-track');
const statusEl=document.getElementById('player-status');
const emptyEl=document.getElementById('player-empty');
const countEl=document.getElementById('player-count');
const indicator=document.getElementById('page-indicator');
const prev=document.getElementById('prev-page');
const next=document.getElementById('next-page');
const search=document.getElementById('player-search');
const filterResults=document.getElementById('filter-results');
const filterAvatar=document.getElementById('filter-avatar');
const filterStyle=document.getElementById('filter-style');
const clear=document.getElementById('clear-filters');

let players=[];
let filtered=[];
let page=0;

function esc(value){
  return String(value??'').replace(/[&<>'\"]/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','\"':'&quot;'}[char]));
}

function valueOrMissing(value){
  return value===null||value===undefined||value===''?'Da completare':String(value);
}

function initials(nickname){
  return String(nickname||'?').replace(/[^\p{L}\p{N}\s]/gu,' ').trim().split(/\s+/).filter(Boolean).slice(0,2).map(part=>part[0]?.toUpperCase()||'').join('')||'?';
}

function hasResults(player){
  const stats=player.stats||{};
  return [stats.wins,stats.draws,stats.losses,stats.leagues_won].some(v=>Number.isFinite(v));
}
function hasAvatar(player){return Boolean(player.avatar_url);}
function hasStyle(player){return Boolean(player.play_style);}
function passesMode(mode,available){return mode==='all'||(mode==='available'?available:!available);}

function detail(label,value,wide){
  const missing=value===null||value===undefined||value==='';
  return '<div class="detail'+(wide?' detail-wide':'')+'"><span>'+esc(label)+'</span><strong class="'+(missing?'profile-missing':'')+'">'+esc(valueOrMissing(value))+'</strong></div>';
}

function card(player){
  const stats=player.stats||{};
  const avatar=player.avatar_url ? '<img src="'+esc(player.avatar_url)+'" alt="">' : '<span aria-hidden="true">'+esc(initials(player.nickname))+'</span>';
  const recordAvailable=[stats.wins,stats.draws,stats.losses].some(v=>Number.isFinite(v));
  const record=recordAvailable ? (Number.isFinite(stats.wins)?stats.wins:'–')+' V · '+(Number.isFinite(stats.draws)?stats.draws:'–')+' P · '+(Number.isFinite(stats.losses)?stats.losses:'–')+' S' : null;
  return '<article class="player-card" data-player-id="'+esc(player.id)+'">'+
    '<header class="player-card-header"><div class="player-avatar">'+avatar+'</div><div class="player-card-title"><h3>'+esc(player.nickname)+'</h3><span class="player-id">'+esc(player.id)+'</span></div></header>'+
    '<div class="player-details">'+
      detail('Vittorie',Number.isFinite(stats.wins)?stats.wins:null,false)+
      detail('Leghe vinte',Number.isFinite(stats.leagues_won)?stats.leagues_won:null,false)+
      detail('Partite V / P / S',record,true)+
      detail('Last Deck',player.last_deck,false)+
      detail('Avatar preferito',player.preferred_avatar,false)+
      detail('Tratto distintivo',player.distinctive_trait,false)+
      detail('Stile di gioco',player.play_style,true)+
    '</div></article>';
}

function perPage(){if(window.innerWidth<768)return 1;if(window.innerWidth<1024)return 2;return 3;}
function totalPages(){return Math.max(1,Math.ceil(filtered.length/perPage()));}

function render(){
  const size=perPage();
  const pages=totalPages();
  page=Math.min(Math.max(page,0),pages-1);
  const start=page*size;
  const slice=filtered.slice(start,start+size);
  track.innerHTML=slice.map(card).join('');
  emptyEl.hidden=filtered.length!==0;
  track.hidden=filtered.length===0;
  prev.disabled=page===0||filtered.length===0;
  next.disabled=page>=pages-1||filtered.length===0;
  indicator.textContent=filtered.length?'Pagina '+(page+1)+' di '+pages:'Nessun profilo';
  countEl.textContent=filtered.length+' di '+players.length+' Avventurieri';
}

function applyFilters(resetPage=true){
  const term=search.value.trim().toLocaleLowerCase('it');
  filtered=players.filter(player=>{
    const matchName=!term||player.nickname.toLocaleLowerCase('it').includes(term);
    return matchName && passesMode(filterResults.value,hasResults(player)) && passesMode(filterAvatar.value,hasAvatar(player)) && passesMode(filterStyle.value,hasStyle(player));
  });
  if(resetPage)page=0;
  render();
}

prev.addEventListener('click',()=>{if(page>0){page-=1;render();}});
next.addEventListener('click',()=>{if(page<totalPages()-1){page+=1;render();}});
search.addEventListener('input',()=>applyFilters());
[filterResults,filterAvatar,filterStyle].forEach(control=>control.addEventListener('change',()=>applyFilters()));
clear.addEventListener('click',()=>{search.value='';filterResults.value='all';filterAvatar.value='all';filterStyle.value='all';applyFilters();search.focus();});

let lastSize=perPage();
window.addEventListener('resize',()=>{const size=perPage();if(size!==lastSize){lastSize=size;page=0;render();}});

fetch('../../data/players.json',{cache:'no-store'})
  .then(response=>{if(!response.ok)throw new Error('HTTP '+response.status);return response.json();})
  .then(data=>{players=Array.isArray(data.players)?data.players:[];filtered=[...players];statusEl.hidden=true;applyFilters(false);})
  .catch(reason=>{console.error('Avventurieri data load failed',reason);statusEl.textContent='Il registro degli Avventurieri non è disponibile in questo momento.';countEl.textContent='Registro non disponibile';prev.disabled=true;next.disabled=true;});
