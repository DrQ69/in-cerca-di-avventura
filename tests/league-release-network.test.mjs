import {test} from 'node:test';
import assert from 'node:assert/strict';
import http from 'node:http';
import {once} from 'node:events';
import {buildReleaseFiles} from '../scripts/league-release-core.mjs';
import {readSiteBundle} from '../beta/shared/release-reader.mjs';
const base=()=>({
 players:{players:[{id:'PLY-0000',nickname:'Dr. Q'}]},
 events:{events:[
   {event_code:'E02',event_id:'bog-2026-duello-02',stage_number:2,stage_label:'II',series_id:'bog'},
   {event_code:'E04',event_id:'bog-2026-duello-04',stage_number:4,stage_label:'IV',series_id:'bog'}
 ]},
 standings:{series_id:'bog',entries:[{rank:1,player_id:'PLY-0000',points:8}]}
});
async function withServer(routeMap,fn){
 const server=http.createServer((req,res)=>{
   const hit=routeMap.get(req.url);
   if(hit==null){res.writeHead(404);res.end('not found');return;}
   res.writeHead(200,{'content-type':'application/json'});res.end(hit);
 });
 server.listen(0,'127.0.0.1');await once(server,'listening');
 const port=server.address().port;
 try{return await fn('http://127.0.0.1:'+port);}
 finally{server.close();await once(server,'close');}
}
test('real HTTP activation reads one manifest and the matching immutable release only',async()=>{
 const out=buildReleaseFiles(base(),'bog-sim-001','2026-09-30T20:00:00+02:00');
 const routes=new Map([['/data/current-release.json',JSON.stringify(out.manifest)]]);
 for(const [path,value] of Object.entries(out.files))routes.set('/'+path,value);
 await withServer(routes,async origin=>{
   const bundle=await readSiteBundle(origin+'/data/current-release.json',{}, {useManifest:true});
   assert.equal(bundle.releaseId,'bog-sim-001');
   assert.equal(bundle.events.events.find(x=>x.event_code==='E02').stage_label,'II');
   assert.equal(bundle.events.events.find(x=>x.event_code==='E04').stage_label,'IV');
 });
});
test('real HTTP activation hard-fails on tampered immutable file, never legacy fallback',async()=>{
 const out=buildReleaseFiles(base(),'bog-sim-002','2026-09-30T20:00:00+02:00');
 const routes=new Map([['/data/current-release.json',JSON.stringify(out.manifest)]]);
 for(const [path,value] of Object.entries(out.files))routes.set('/'+path,value);
 routes.set('/data/releases/bog-sim-002/events.json','{"events":[]}');
 await withServer(routes,async origin=>{
   await assert.rejects(
     readSiteBundle(origin+'/data/current-release.json',{
       players:origin+'/data/players.json',events:origin+'/data/events.json',standings:origin+'/data/league-standings.json'
     },{useManifest:true}),
     /RELEASE_HASH_MISMATCH/
   );
 });
});
