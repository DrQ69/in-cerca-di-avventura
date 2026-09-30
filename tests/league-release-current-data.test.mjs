import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {validatePublicBundle,previewPublicChange} from '../scripts/league-release-core.mjs';
const read=async path=>JSON.parse(await readFile(new URL('../'+path,import.meta.url),'utf8'));
test('the EXISTING published public JSON passes core structural validation (not officiality)',async()=>{
 const bundle={players:await read('data/players.json'),events:await read('data/events.json'),standings:await read('data/league-standings.json')};
 const out=validatePublicBundle(bundle);
 assert.deepEqual(out.errors,[],JSON.stringify(out.errors));
 assert.equal(out.ok,true);
 const e02=bundle.events.events.find(e=>e.event_code==='E02'),e04=bundle.events.events.find(e=>e.event_code==='E04');
 assert.deepEqual([e02.stage_number,e02.stage_label,e04.stage_number,e04.stage_label],[2,'II',4,'IV']);
 assert.ok(out.warnings.some(w=>w.code==='FAIR_PLAY_RULE_UNRESOLVED_DO_NOT_RECALCULATE'));
 // A no-op dry run does not create/officialize data, while still reporting manual gates.
 const preview=previewPublicChange(bundle,structuredClone(bundle));
 assert.equal(preview.blocked,false);
 for(const group of Object.values(preview.changes))assert.deepEqual(group,{added:[],changed:[],missing:[]});
 assert.ok(preview.requiredGates.includes('explicit_final_publication_approval'));
});
