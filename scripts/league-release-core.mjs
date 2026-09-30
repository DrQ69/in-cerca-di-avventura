// Sprint 1: offline-only validation of an already sanitized PUBLIC candidate.
// Never parse or publish the raw workbook here. No GitHub writes are performed.
import { createHash } from 'node:crypto';

const OWN = (o,k) => Object.prototype.hasOwnProperty.call(o,k);
const isRecord = x => x !== null && typeof x === 'object' && !Array.isArray(x);
const same = (a,b) => JSON.stringify(a) === JSON.stringify(b);
const forbidden = /^(real_?name|first_?name|last_?name|surname|email|phone|play_?network_?id|excel_?id|private_?.*|admin_?.*|config)$/i;
const releaseId = /^[a-z0-9][a-z0-9._-]{2,79}$/;
const playerId = /^PLY-\d{4,}$/;
const safePath = /^data\/releases\/[a-z0-9][a-z0-9._-]*\/(players|events|league-standings)\.json$/;

export function validatePublicBundle(bundle) {
  const errors=[], warnings=[];
  const err=(code,where)=>errors.push({code,where});
  const warn=(code,where)=>warnings.push({code,where});
  if(!isRecord(bundle))return {ok:false,errors:[{code:'BUNDLE_NOT_OBJECT',where:'$'}],warnings};
  const players=bundle.players?.players,events=bundle.events?.events,entries=bundle.standings?.entries;
  if(!Array.isArray(players))err('PLAYERS_NOT_ARRAY','players.players');
  if(!Array.isArray(events))err('EVENTS_NOT_ARRAY','events.events');
  if(!Array.isArray(entries))err('STANDINGS_NOT_ARRAY','standings.entries');
  // Check privacy-related keys, including nested objects. Text content must also
  // be reviewed by the owner: this structural guard is not a PII detector.
  function scan(x,path,depth=0) {
    if(depth>24){err('EXCESSIVE_NESTING',path);return;}
    if(Array.isArray(x)){x.forEach((v,i)=>scan(v,path+'['+i+']',depth+1));return;}
    if(!isRecord(x))return;
    for(const [k,v] of Object.entries(x)){
      if(forbidden.test(k))err('NON_PUBLIC_FIELD',path+'.'+k);
      scan(v,path+'.'+k,depth+1);
    }
  }
  scan(bundle,'$');
  if(errors.some(e=>['PLAYERS_NOT_ARRAY','EVENTS_NOT_ARRAY','STANDINGS_NOT_ARRAY'].includes(e.code)))return {ok:false,errors,warnings};
  const pIds=new Set(),eIds=new Set(),codes=new Set(),rIds=new Set(),ranks=new Set();
  players.forEach((p,i)=>{
    const path='players.players['+i+']';
    if(!isRecord(p)||!playerId.test(p.id||''))err('INVALID_PLAYER_ID',path);
    else if(pIds.has(p.id))err('DUPLICATE_PLAYER_ID',path);else pIds.add(p.id);
    if(typeof p?.nickname!=='string'||!p.nickname.trim())err('MISSING_NICKNAME',path);
    if(p?.id==='PLY-0002')err('RESERVED_LEGACY_ID',path);
  });
  events.forEach((e,i)=>{
    const path='events.events['+i+']';
    if(!isRecord(e)||typeof e.event_id!=='string'||!e.event_id.trim())err('INVALID_EVENT_ID',path);
    else if(eIds.has(e.event_id))err('DUPLICATE_EVENT_ID',path);else eIds.add(e.event_id);
    if(e?.event_code!=null){
      if(codes.has(e.event_code))err('DUPLICATE_EVENT_CODE',path);else codes.add(e.event_code);
      // Explicit owner correction SUPERSEDES the old exported sheet.
      const expected={E02:[2,'II'],E04:[4,'IV']}[e.event_code];
      if(expected&&(e.stage_number!==expected[0]||e.stage_label!==expected[1]))
        err('CONFIRMED_STAGE_CONFLICT',path+' (E02=II, E04=IV)');
    }
    if(Array.isArray(e?.standings))e.standings.forEach((r,j)=>{
      if(r.player_id!=null&&!pIds.has(r.player_id))err('UNRESOLVED_EVENT_PLAYER',path+'.standings['+j+']');
      if(r.player_id==null)warn('UNLINKED_HISTORIC_RESULT',path+'.standings['+j+']');
    });
  });
  entries.forEach((r,i)=>{
    const path='standings.entries['+i+']';
    if(!isRecord(r)||!pIds.has(r.player_id))err('UNRESOLVED_STANDINGS_PLAYER',path);
    else if(rIds.has(r.player_id))err('DUPLICATE_STANDINGS_PLAYER',path);else rIds.add(r.player_id);
    if(!Number.isInteger(r?.rank)||r.rank<1)err('INVALID_RANK',path);
    else if(ranks.has(r.rank))err('DUPLICATE_RANK',path);else ranks.add(r.rank);
    if(!Number.isFinite(r?.points)||r.points<0)err('INVALID_POINTS',path);
    if(r?.fair_play_bonus_points!=null)warn('FAIR_PLAY_RULE_UNRESOLVED_DO_NOT_RECALCULATE',path);
  });
  if(bundle.standings?.series_id && events.every(e=>e.series_id!==bundle.standings.series_id))
    warn('SERIES_NOT_FOUND_IN_EVENTS','standings.series_id');
  // Workbook officiality, formula cache and export freshness are external human
  // gates (DEC-09.12/.26/.27), not something this public JSON can establish.
  warn('XLSX_FORMULA_CACHE_NOT_VERIFIED_BY_JSON','source');
  warn('SOURCE_VERSION_NOT_VERIFIED_BY_JSON','source');
  warn('RESULT_OFFICIALITY_REQUIRES_OWNER_CONFIRMATION','source');
  return {ok:errors.length===0,errors,warnings};
}
function idMap(arr,id){return new Map((arr||[]).map(x=>[x[id],x]));}
function delta(before,after,key){
  const a=idMap(before,key),b=idMap(after,key);
  return {
    added:[...b.keys()].filter(k=>!a.has(k)),
    changed:[...b.keys()].filter(k=>a.has(k)&&!same(a.get(k),b.get(k))),
    missing:[...a.keys()].filter(k=>!b.has(k))
  };
}
// Report keys only; never insert unreviewed raw values into public CI logs.
// The owner-facing chat preview may add the authorized old/new values privately.
function changedFields(before,after,key){
 const a=idMap(before,key),b=idMap(after,key),result={};
 for(const [id,proposed] of b){
  if(!a.has(id)||same(a.get(id),proposed))continue;
  const prior=a.get(id),names=new Set([...Object.keys(prior||{}),...Object.keys(proposed||{})]);
  result[id]=[...names].filter(name=>name!==key&&!same(prior?.[name],proposed?.[name])).sort();
 }
 return result;
}

export function previewPublicChange(current,candidate){
  const qa=validatePublicBundle(candidate);
  if(!isRecord(current)||!isRecord(candidate))return {qa,changes:null,blocked:true};
  const changes={
    players:delta(current.players?.players,candidate.players?.players,'id'),
    events:delta(current.events?.events,candidate.events?.events,'event_id'),
    standings:delta(current.standings?.entries,candidate.standings?.entries,'player_id')
  };
  const changedFieldNames={
    players:changedFields(current.players?.players,candidate.players?.players,'id'),
    events:changedFields(current.events?.events,candidate.events?.events,'event_id'),
    standings:changedFields(current.standings?.entries,candidate.standings?.entries,'player_id')
  };
  // Missing public entities must be preserved, unless separately authorized.
  for(const k of ['players','events'])
    if(changes[k].missing.length)qa.errors.push({code:'UNAUTHORIZED_OMISSION',where:k+': '+changes[k].missing.join(', ')});
  qa.ok=qa.errors.length===0;
  const requiredGates=['owner_confirms_source_freshness','owner_confirms_formula_caches',
    'owner_confirms_officiality','private_desktop_and_mobile_preview',
    'functional_qa_desktop_and_mobile','explicit_final_publication_approval'];
  if(changes.players.added.length)requiredGates.push('owner_approves_new_player_ids');
  if(changes.players.changed.some(id=>changedFieldNames.players[id]?.includes('nickname')))
    requiredGates.push('owner_approves_nickname_changes');
  if(changes.events.added.length)requiredGates.push('owner_approves_new_event_entries');
  return {qa,changes,changedFieldNames,blocked:!qa.ok,requiredGates};
}
export const stableJSONStringify = x => JSON.stringify(x,null,2)+'\n';
export const sha256 = text => createHash('sha256').update(text,'utf8').digest('hex');
export function buildReleaseFiles(candidate,id,publishedAt){
  if(!releaseId.test(id))throw new Error('INVALID_RELEASE_ID');
  if(!Number.isFinite(Date.parse(publishedAt)))throw new Error('INVALID_TIMESTAMP');
  const qa=validatePublicBundle(candidate);
  if(!qa.ok)throw new Error('VALIDATION_FAILED: '+JSON.stringify(qa.errors));
  const root='data/releases/'+id+'/';
  const files={
    [root+'players.json']:stableJSONStringify(candidate.players),
    [root+'events.json']:stableJSONStringify(candidate.events),
    [root+'league-standings.json']:stableJSONStringify(candidate.standings)
  };
  const manifest={schema_version:'1.0',release_id:id,published_at:publishedAt,
    paths:{players:root+'players.json',events:root+'events.json',standings:root+'league-standings.json'},
    sha256:Object.fromEntries(Object.entries(files).map(([p,v])=>[p,sha256(v)]))};
  return {files,manifest,qa};
}
export function validateManifest(manifest){
  if(!isRecord(manifest)||!releaseId.test(manifest.release_id||''))return false;
  const keys=['players','events','standings'];
  const paths=keys.map(k=>manifest.paths?.[k]);
  if(new Set(paths).size!==3)return false;
  return keys.every(k=>{
    const path=manifest.paths?.[k];
    const expected=k==='standings'?'league-standings.json':k+'.json';
    return safePath.test(path||'')
      && path==='data/releases/'+manifest.release_id+'/'+expected
      && /^[a-f0-9]{64}$/.test(manifest.sha256?.[path]||'');
  });
}
