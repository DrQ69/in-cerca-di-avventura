import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validatePublicBundle, previewPublicChange, buildReleaseFiles, validateManifest, sha256 } from '../scripts/league-release-core.mjs';
const clone=x=>structuredClone(x);
const base=()=>({
 players:{players:[{id:'PLY-0000',nickname:'Dr. Q'},{id:'PLY-0001',nickname:'Nick the Wizard'}]},
 events:{events:[{event_code:'E02',event_id:'bog-2026-duello-02',stage_number:2,stage_label:'II',
   series_id:'bog',standings:[{rank:1,player_id:'PLY-0000'}]},
   {event_code:'E04',event_id:'bog-2026-duello-04',stage_number:4,stage_label:'IV',series_id:'bog'}]},
 standings:{series_id:'bog',entries:[{rank:1,player_id:'PLY-0000',points:8}]}
});
test('confirmed E02=II/E04=IV pass (user correction overrides old workbook)',()=>{
 const r=validatePublicBundle(base());assert.equal(r.ok,true);assert.equal(r.errors.length,0);
});
test('old inverted Excel stage labels are critical, never silently swapped',()=>{
 const b=base();b.events.events[0].stage_number=4;b.events.events[0].stage_label='IV';
 assert.equal(validatePublicBundle(b).errors.some(e=>e.code==='CONFIRMED_STAGE_CONFLICT'),true);
});
test('historical alias PLY-0002 cannot become a new profile',()=>{
 const b=base();b.players.players.push({id:'PLY-0002',nickname:'wrong'});
 assert.equal(validatePublicBundle(b).errors.some(e=>e.code==='RESERVED_LEGACY_ID'),true);
});
test('duplicate ID, broken references, invalid points and private keys block update',()=>{
 const b=base();b.players.players.push({id:'PLY-0001',nickname:'duplicate',email:'secret'});
 b.standings.entries[0].points=-1;b.events.events[0].standings[0].player_id='PLY-0999';
 const e=validatePublicBundle(b).errors.map(e=>e.code);
 for(const code of ['DUPLICATE_PLAYER_ID','NON_PUBLIC_FIELD','INVALID_POINTS','UNRESOLVED_EVENT_PLAYER'])
 assert.ok(e.includes(code),code);
});
test('missing formerly published player or event blocks candidate, rather than deleting it',()=>{
 const current=base(),next=base();next.players.players.pop();next.events.events.pop();
 const r=previewPublicChange(current,next);assert.equal(r.blocked,true);
 assert.equal(r.qa.errors.filter(e=>e.code==='UNAUTHORIZED_OMISSION').length,2);
});
test('an actual nickname change is previewed by ID and does not change player identity',()=>{
 const current=base(),next=base();next.players.players[0].nickname='Dr. Q II';
 const r=previewPublicChange(current,next);assert.equal(r.blocked,false);
 assert.deepEqual(r.changes.players.changed,['PLY-0000']);
});
test('Fair Play is flagged but never computed or silently set to +2/+3',()=>{
 const b=base();b.standings.entries[0].fair_play_bonus_points=3;
 const r=validatePublicBundle(b);
 assert.ok(r.warnings.some(x=>x.code==='FAIR_PLAY_RULE_UNRESOLVED_DO_NOT_RECALCULATE'));
 assert.equal(b.standings.entries[0].fair_play_bonus_points,3);
});
test('three immutable paths, hashes and one pointer manifest are coherent',()=>{
 const b=base();const out=buildReleaseFiles(b,'bog-2026-09-30-001','2026-09-30T18:36:00+02:00');
 assert.ok(validateManifest(out.manifest));assert.equal(Object.keys(out.files).length,3);
 for(const [path,value] of Object.entries(out.files))assert.equal(out.manifest.sha256[path],sha256(value));
});
test('release paths reject path traversal and unsafe release ids',()=>{
 assert.throws(()=>buildReleaseFiles(base(),'../escape','2026-09-30T18:36:00+02:00'));
});

test('field-level preview lists public changed keys without publishing field values',()=>{
 const prior=base(),next=base();next.players.players[0].nickname='new nickname';
 next.events.events[0].title='New public title';next.standings.entries[0].points=9;
 const result=previewPublicChange(prior,next);
 assert.deepEqual(result.changedFieldNames.players['PLY-0000'],['nickname']);
 assert.deepEqual(result.changedFieldNames.events['bog-2026-duello-02'],['title']);
 assert.deepEqual(result.changedFieldNames.standings['PLY-0000'],['points']);
 assert.equal(JSON.stringify(result.changedFieldNames).includes('new nickname'),false);
});

test('special owner gates are triggered by proposed new profiles, nickname changes and events',()=>{
 const before=base(),after=base();
 after.players.players.push({id:'PLY-0033',nickname:'New Adventurer'});
 after.players.players[0].nickname='Dr. Q Revised';
 after.events.events.push({event_id:'bog-new-event',title:'New event'});
 const result=previewPublicChange(before,after);
 for(const gate of ['owner_approves_new_player_ids','owner_approves_nickname_changes','owner_approves_new_event_entries'])
   assert.ok(result.requiredGates.includes(gate),gate);
 assert.deepEqual(result.changes.players.added,['PLY-0033']);
});
