import {test} from 'node:test';
import assert from 'node:assert/strict';
import {assessWorkbookIntake,publicSafeIntakeSummary} from '../scripts/league-xlsx-intake-core.mjs';

const good=()=>({
 source_version_label:'manual-export-2026-09-30',
 source_exported_at:'2026-09-30T20:00:00+02:00',
 source_timestamp_provenance:'EXPORT_METADATA',
 last_public_release_id:'bog-2026-09-22-001',
 last_public_published_at:'2026-09-22T21:00:00+02:00',
 formula_cache:{general:'READABLE',draft:'READABLE',constructed:'READABLE'},
 officiality:'CONFIRMED',
 fair_play_affected:false
});

test('newer export with readable formula caches passes intake structurally',()=>{
 const r=assessWorkbookIntake(good());
 assert.equal(r.blocked,false);
 assert.equal(r.freshness,'NEWER');
 assert.deepEqual(r.errors,[]);
 assert.ok(!r.requiredGates.includes('owner_confirms_source_freshness'));
});

test('missing, inconsistent or unverified formula cache blocks atomically',()=>{
 for(const bad of ['MISSING','INCONSISTENT','NOT_VERIFIED']){
   const m=good();m.formula_cache.draft=bad;
   const r=assessWorkbookIntake(m);
   assert.equal(r.blocked,true,bad);
   assert.ok(r.errors.some(e=>e.code.startsWith('FORMULA_CACHE_')));
 }
});

test('older/equal/unverifiable export requires separate freshness approval',()=>{
 const older=good();older.source_exported_at='2026-09-20T20:00:00+02:00';
 let r=assessWorkbookIntake(older);
 assert.equal(r.freshness,'OLDER');
 assert.ok(r.requiredGates.includes('owner_confirms_source_freshness'));
 const unknown=good();unknown.source_exported_at=null;unknown.source_timestamp_provenance='UNAVAILABLE';
 r=assessWorkbookIntake(unknown);
 assert.equal(r.freshness,'UNVERIFIABLE');
 assert.ok(r.requiredGates.includes('owner_confirms_source_freshness'));
});

test('pending officiality remains a gate while Fair Play uses confirmed +3 rule',()=>{
 const m=good();m.officiality='PENDING';m.fair_play_affected=true;
 const r=assessWorkbookIntake(m);
 assert.ok(r.requiredGates.includes('owner_confirms_officiality'));
 assert.ok(!r.requiredGates.includes('resolve_DEC_09_7_before_publication'));
 assert.ok(r.warnings.some(x=>x.code==='FAIR_PLAY_PLUS3_RULE_APPLIES'));
});

test('private or unexpected intake metadata keys are rejected',()=>{
 const m=good();m.workbook_path='/secret/path.xlsx';m.real_name='Private Person';
 const r=assessWorkbookIntake(m);
 assert.equal(r.blocked,true);
 assert.equal(r.errors.filter(e=>e.code==='FORBIDDEN_INTAKE_FIELD').length,2);
});

test('public safe summary contains codes and gates only',()=>{
 const m=good();m.source_timestamp_provenance='UNAVAILABLE';m.source_exported_at=null;
 const r=assessWorkbookIntake(m),s=publicSafeIntakeSummary(r);
 const text=JSON.stringify(s);
 assert.ok(!text.includes('manual-export'));
 assert.ok(!text.includes('2026-09-30T20:00'));
 assert.ok(s.warning_codes.includes('SOURCE_TIMESTAMP_UNAVAILABLE'));
});
