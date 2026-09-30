// LOCAL, private schematic preview from an already sanitized PUBLIC candidate.
// NOT a pixel-exact rendering of /beta/, an official result, or a QA PASS.
import { previewPublicChange } from './league-release-core.mjs';
const esc=x=>String(x??'—').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const card=(title,detail)=>'<article class="card"><h3>'+esc(title)+'</h3><p>'+esc(detail)+'</p></article>';
export function renderPrivatePreview(current,candidate){
 const result=previewPublicChange(current,candidate),p=candidate.players.players,
   e=candidate.events.events,r=candidate.standings.entries;
 const names=new Map(p.map(x=>[x.id,x.nickname]));
 const summary=k=>['added','changed','missing'].map(action=>
   action+': '+(result.changes?.[k]?.[action]?.length||0)).join(' · ');
 const events=e.map(x=>card(x.title||x.event_id,(x.stage_number?'Tappa '+(x.stage_label||x.stage_number):'Evento autonomo')+' · '+(x.date||'—')+
   ' · '+(x.venue||'—')+' · '+(x.format||'—'))).join('');
 const players=p.map(x=>card(x.nickname,x.id)).join('');
 const rows=r.map(x=>'<tr><td>'+esc(x.rank)+'</td><td>'+esc(names.get(x.player_id)||'—')+
  '</td><td>'+esc(x.points)+'</td></tr>').join('');
 const errors=result.qa.errors.map(x=>'<li>'+esc(x.code)+' · '+esc(x.where)+'</li>').join('');
 return '<!doctype html><html lang="it"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">'+
 '<title>ANTEPRIMA PRIVATA — NON PUBBLICATA</title><style>*{box-sizing:border-box}'+
 'body{margin:0;background:#101824;color:#e9e5df;font:16px system-ui;line-height:1.5}'+
 'header,main{max-width:1200px;margin:auto;padding:20px}h1,h2,h3{color:#e5c898}'+
 '.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,270px),1fr));gap:12px}'+
 '.card{border:1px solid #aa8a54;background:#1c2834;border-radius:8px;padding:12px;overflow-wrap:anywhere}'+
 'table{border-collapse:collapse;width:100%}td,th{padding:8px;border-bottom:1px solid #667;text-align:left}'+
 '.scroll{overflow-x:auto}@media(max-width:600px){header,main{padding:12px}table{font-size:.9rem}}</style></head>'+
 '<body><header><h1>ANTEPRIMA PRIVATA — NON PUBBLICATA</h1><p>Simulazione schematica, NON rendering fedele né ufficializzazione dei risultati.</p>'+
 '<p>Validazione strutturale: '+(result.blocked?'BLOCCATA':'NESSUN ERRORE STRUTTURALE; SERVONO CONFERME FINALI')+'</p></header>'+
 '<main><section><h2>Riepilogo</h2><p>Avventurieri: '+summary('players')+'</p><p>Adunanze: '+summary('events')+
 '</p><p>Classifiche: '+summary('standings')+'</p><ul>'+errors+'</ul></section>'+
 '<section><h2>Adunanze</h2><div class="grid">'+events+'</div></section>'+
 '<section><h2>Avventurieri</h2><div class="grid">'+players+'</div></section>'+
 '<section><h2>Classifica generale — dati proposti non ufficializzati</h2><div class="scroll"><table>'+
 '<thead><tr><th>Pos.</th><th>Nickname</th><th>GP</th></tr></thead><tbody>'+rows+
 '</tbody></table></div></section></main></body></html>';
}
