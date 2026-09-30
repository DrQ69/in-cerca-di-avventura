import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,mkdir,writeFile,readFile,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {spawnSync} from 'node:child_process';
const base=()=>({
 players:{players:[{id:'PLY-0000',nickname:'Dr. Q'}]},
 events:{events:[{event_code:'E02',event_id:'bog-2026-duello-02',stage_number:2,stage_label:'II'}]},
 standings:{entries:[{rank:1,player_id:'PLY-0000',points:8}]}
});
test('private candidate packager writes only outside repo and marks package not published',async()=>{
 const root=await mkdtemp(join(tmpdir(),'ica-pack-'));
 try{
   const input=join(root,'input'),out=join(root,'private-release');await mkdir(input);
   const b=base();
   await Promise.all([
     writeFile(join(input,'players.json'),JSON.stringify(b.players)),
     writeFile(join(input,'events.json'),JSON.stringify(b.events)),
     writeFile(join(input,'league-standings.json'),JSON.stringify(b.standings))
   ]);
   const r=spawnSync(process.execPath,['scripts/league-build-private-candidate.mjs',input,'bog-private-001',
      '2026-09-30T20:30:00+02:00',out],{encoding:'utf8'});
   assert.equal(r.status,0,r.stderr);
   const m=JSON.parse(await readFile(join(out,'current-release.json'),'utf8'));
   assert.equal(m.release_id,'bog-private-001');
   assert.ok((await readFile(join(out,'README-NOT-PUBLISHED.txt'),'utf8')).includes('NOT PUBLISHED'));
   assert.ok(await readFile(join(out,'releases/bog-private-001/events.json'),'utf8'));
 }finally{await rm(root,{recursive:true,force:true});}
});
