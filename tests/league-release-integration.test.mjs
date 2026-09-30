import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp,mkdir,writeFile,rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { validatePublicManifest,readPublicRelease,readSiteBundle } from '../beta/shared/release-reader.mjs';
import {buildReleaseFiles} from '../scripts/league-release-core.mjs';
const base=()=>({
 players:{players:[{id:'PLY-0000',nickname:'Dr. Q'},{id:'PLY-0001',nickname:'Nick the Wizard'}]},
 events:{events:[{event_code:'E02',event_id:'bog-2026-duello-02',stage_number:2,stage_label:'II',
   series_id:'bog'}, {event_code:'E04',event_id:'bog-2026-duello-04',stage_number:4,stage_label:'IV',series_id:'bog'}]},
 standings:{series_id:'bog',entries:[{rank:1,player_id:'PLY-0000',points:8}]}
});
test('loader reads one manifest once, three immutable paths and verifies hashes',async()=>{
 const out=buildReleaseFiles(base(),'bog-test-001','2026-09-30T18:36:00+02:00');
 const manifestURL='https://example.org/data/current-release.json';
 const payloads=new Map([[manifestURL,JSON.stringify(out.manifest)],...Object.entries(out.files).map(
 ([p,c])=>['https://example.org/'+p,c])]);
 const requested=[];
 const fetcher=async(url)=>{requested.push(url);return {ok:payloads.has(url),text:async()=>payloads.get(url)};};
 const hasher=async t=>createHash('sha256').update(t).digest('hex');
 const result=await readPublicRelease(manifestURL,{fetcher,hasher});
 assert.equal(requested.filter(p=>p===manifestURL).length,1);
 assert.equal(result.releaseId,'bog-test-001');
 assert.equal(result.players.players[0].id,'PLY-0000');
 assert.equal(result.events.events[0].stage_label,'II');
 assert.equal(requested.length,4);
});
test('loader refuses mismatched hashes, malformed manifest and path traversal',async()=>{
 const out=buildReleaseFiles(base(),'bog-test-001','2026-09-30T18:36:00+02:00');
 assert.equal(validatePublicManifest(out.manifest),true);
 const malicious=structuredClone(out.manifest);malicious.paths.players='../data/players.json';
 assert.equal(validatePublicManifest(malicious),false);
 const manifestURL='https://example.org/data/current-release.json';
 const fetcher=async(url)=>({ok:true,text:async()=>url===manifestURL?JSON.stringify(out.manifest):'{}'});
 const hasher=async t=>createHash('sha256').update(t).digest('hex');
 await assert.rejects(readPublicRelease(manifestURL,{fetcher,hasher}),/RELEASE_HASH_MISMATCH/);
});
test('dry run exits non-zero if the source snapshot changes E02/II or omits E04',async()=>{
 const tmp=await mkdtemp(join(tmpdir(),'ica-sprint1-'));
 try{
  const current=join(tmp,'current'),candidate=join(tmp,'candidate');
  await Promise.all([mkdir(current),mkdir(candidate)]);
  const write=async(dir,b)=>Promise.all([
   ['players.json',b.players],['events.json',b.events],['league-standings.json',b.standings]
  ].map(([file,json])=>writeFile(join(dir,file),JSON.stringify(json))));
  await write(current,base());const invalid=base();
  invalid.events.events[0].stage_number=4;invalid.events.events[0].stage_label='IV';
  invalid.events.events.pop();await write(candidate,invalid);
  const r=spawnSync(process.execPath,['scripts/league-release-dry-run.mjs',current,candidate],{encoding:'utf8'});
  assert.equal(r.status,1);
  const report=JSON.parse(r.stdout);
  assert.equal(report.status,'BLOCKED');
  assert.ok(report.errors.some(x=>x.code==='CONFIRMED_STAGE_CONFLICT'));
  assert.ok(report.errors.some(x=>x.code==='UNAUTHORIZED_OMISSION'));
  await write(candidate,base());
  const pass=spawnSync(process.execPath,['scripts/league-release-dry-run.mjs',current,candidate],{encoding:'utf8'});
  assert.equal(pass.status,0);
  assert.equal(JSON.parse(pass.stdout).status,'STRUCTURAL_CHECK_PASSED_NOT_APPROVED_FOR_RELEASE');
 }finally{await rm(tmp,{recursive:true,force:true});}
});

test('404 on manifest alone permits a coherent legacy fallback; other errors are fatal',async()=>{
 const unique='https://example.org/'+Math.random().toString(36).slice(2)+'/data/current-release.json';
 const old=base(),seen=[];
 const legacy={players:'https://example.org/old/players.json',
               events:'https://example.org/old/events.json',
               standings:'https://example.org/old/league-standings.json'};
 const map={ [legacy.players]:old.players,[legacy.events]:old.events,[legacy.standings]:old.standings };
 const fetcher=async url=>{
  seen.push(url);
  if(url===unique)return {ok:false,status:404};
  return {ok:!!map[url],json:async()=>map[url]};
 };
 const [one,two]=await Promise.all([readSiteBundle(unique,legacy,{fetcher}),
                                  readSiteBundle(unique,legacy,{fetcher})]);
 assert.equal(one,two);assert.equal(one.source,'legacy-no-manifest');
 assert.equal(seen.filter(u=>u===unique).length,1);
 assert.equal(seen.length,4);
 const broken=unique.replace('current-release','broken-release');
 const bad=async()=>({ok:false,status:500});
 await assert.rejects(readSiteBundle(broken,legacy,{fetcher:bad}),/RELEASE_FETCH_FAILED/);
});
