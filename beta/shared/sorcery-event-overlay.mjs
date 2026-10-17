function sorceryEventId(event){
  const url=event?.official_results_url||event?.official_event_url||event?.registration_url||'';
  return String(url).match(/\/events\/([a-z0-9]+)/i)?.[1]||null;
}

function playedIds(snapshot){
  return new Set((snapshot?.registrations||[])
    .filter(item=>item?.participation_status==='played')
    .map(item=>item.registration_id));
}

export function overlayEventFromSorcery(event,snapshot){
  if(!event||!snapshot?.event) return event;
  const ids=playedIds(snapshot);
  const playedStandings=(snapshot.standings||[]).filter(row=>ids.has(row.registration_id));
  const noShows=(snapshot.registrations||[]).filter(item=>item?.participation_status==='registered_no_show');
  const winner=playedStandings.find(row=>row.rank===1)||playedStandings[0]||null;

  return {
    ...event,
    player_count:snapshot.event.played_participant_count??playedStandings.length??event.player_count,
    registration_count:snapshot.event.registration_count??snapshot.registrations?.length??null,
    no_show_count:noShows.length,
    winner_display_name:winner?.display_name??event.winner_display_name,
    winner_rank:winner?.rank??event.winner_rank,
    standings:playedStandings.map(row=>{
      const canonical=(event.standings||[]).find(item=>item.rank===row.rank&&String(item.display_name||'').toLocaleLowerCase('it')===String(row.display_name||'').toLocaleLowerCase('it'))
        ||(event.standings||[]).find(item=>String(item.display_name||'').toLocaleLowerCase('it')===String(row.display_name||'').toLocaleLowerCase('it'))
        ||{};
      return {
        ...canonical,
        rank:row.rank,
        display_name:row.display_name,
        points:row.points,
        wins:row.wins,
        draws:row.draws,
        losses:row.losses,
        omw_percent:Number.isFinite(row.omw)?row.omw*100:null,
        cmp:row.cmp,
        avatar:row.avatar??canonical.avatar??null,
      };
    }),
    sorcery_snapshot:{
      event_id:snapshot.provenance?.sorcery_event_id??snapshot.event.id??null,
      retrieved_at:snapshot.provenance?.retrieved_at??null,
      content_sha256:snapshot.provenance?.content_sha256??null,
    },
  };
}

export async function applySorceryEventOverlays(events,{dataRoot,fetchImpl=fetch}={}){
  const root=dataRoot||new URL('../../data/',document.baseURI).href;
  let available=new Set();
  try{
    const manifestResponse=await fetchImpl(new URL('external/sorcery/events/index.json',root).href,{cache:'no-store'});
    if(manifestResponse.ok){
      const manifest=await manifestResponse.json();
      available=new Set(Array.isArray(manifest.events)?manifest.events:[]);
    }
  }catch{
    return events||[];
  }
  return Promise.all((events||[]).map(async event=>{
    const externalId=sorceryEventId(event);
    if(!externalId||event.status!=='conclusa'||!available.has(externalId)) return event;
    try{
      const url=new URL('external/sorcery/events/'+encodeURIComponent(externalId)+'.json',root).href;
      const response=await fetchImpl(url,{cache:'no-store'});
      if(!response.ok) return event;
      const snapshot=await response.json();
      return overlayEventFromSorcery(event,snapshot);
    }catch{
      return event;
    }
  }));
}

export {sorceryEventId};
