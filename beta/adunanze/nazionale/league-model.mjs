// Pure view-model helpers for Sprint 2 Adunanze & Leghe.
// No network access, no data mutation, no score calculation.
export function buildLeagueView(events,standings,players){
  const allEvents=Array.isArray(events)?events:[];
  const allPlayers=Array.isArray(players)?players:[];
  if(!standings?.series_id)return null;
  const seriesEvents=allEvents.filter(e=>e?.series_id===standings.series_id);
  if(!seriesEvents.length)return null;
  const stages=seriesEvents.filter(e=>Number.isInteger(e.stage_number))
    .sort((a,b)=>a.stage_number-b.stage_number||String(a.date||'').localeCompare(String(b.date||'')));
  const completed=seriesEvents.filter(e=>e.status==='conclusa').sort((a,b)=>String(b.date||'').localeCompare(String(a.date||'')));
  const years=[...new Set(seriesEvents.map(e=>String(e.date||'').slice(0,4)).filter(y=>/^\d{4}$/.test(y)))].sort();
  const season=years.length>1?years[0]+'/'+years.at(-1):years[0]||'Stagione da verificare';
  const playerMap=new Map(allPlayers.map(p=>[p.id,p]));
  const entries=(Array.isArray(standings.entries)?standings.entries:[])
    .filter(x=>x&&x.player_id&&Number.isFinite(x.points))
    .slice().sort((a,b)=>{
      const ar=Number.isFinite(a.rank)?a.rank:Number.POSITIVE_INFINITY;
      const br=Number.isFinite(b.rank)?b.rank:Number.POSITIVE_INFINITY;
      return ar-br||b.points-a.points||String(a.player_id).localeCompare(String(b.player_id));
    })
    .map(x=>({...x,nickname:playerMap.get(x.player_id)?.nickname||'Avventuriero da verificare'}));
  return {
    id:standings.series_id,
    name:standings.series_name||seriesEvents[0].series_name||standings.series_id,
    season,
    status:standings.status==='current'?'active':'completed',
    organizer:'Il Regno di Cremos',
    stages,
    completed,
    entries,
    top3:entries.slice(0,3)
  };
}
export function stageLabel(event){
  if(!Number.isInteger(event?.stage_number))return '';
  return 'Tappa '+(event.stage_label||event.stage_number);
}
export function eventAnchor(eventId){
  return 'event-'+String(eventId||'').replace(/[^a-zA-Z0-9_-]/g,'-');
}
export function leagueAnchor(seriesId){
  return 'lega-'+String(seriesId||'').replace(/[^a-zA-Z0-9_-]/g,'-');
}
