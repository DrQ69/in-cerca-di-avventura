#!/usr/bin/env node
// Build a PRIVATE candidate package only. No GitHub/network/deploy.
// Input must already be sanitized public JSON. Output directory must be outside the repo and not exist.
import {readFile,mkdir,writeFile,realpath} from 'node:fs/promises';
import {resolve,dirname,sep,join} from 'node:path';
import {buildReleaseFiles,previewPublicChange,stableJSONStringify} from './league-release-core.mjs';
const usage='Usage: node scripts/league-build-private-candidate.mjs <current-public-dir> <candidate-sanitized-dir> <release-id> <published-at> <private-output-dir>';
if(process.argv.length!==7){console.error(usage);process.exitCode=2;}
else try{
 const [currentInput,input,id,publishedAt,outArg]=process.argv.slice(2);
 const repo=await realpath(process.cwd()),out=resolve(outArg),parent=await realpath(dirname(out));
 if(parent===repo||parent.startsWith(repo+sep))throw new Error('OUTPUT_MUST_BE_OUTSIDE_REPOSITORY');
 const load=async folder=>{
   const read=async name=>JSON.parse(await readFile(join(resolve(folder),name),'utf8'));
   return {players:await read('players.json'),events:await read('events.json'),
           standings:await read('league-standings.json')};
 };
 const current=await load(currentInput),candidate=await load(input);
 const preview=previewPublicChange(current,candidate);
 if(preview.blocked)throw new Error('CANDIDATE_PREVIEW_BLOCKED');
 const built=buildReleaseFiles(candidate,id,publishedAt);
 await mkdir(out,{recursive:false,mode:0o700});
 try{
   for(const [repoPath,text] of Object.entries(built.files)){
     const rel=repoPath.replace(/^data\//,'');
     const target=join(out,rel);await mkdir(dirname(target),{recursive:true,mode:0o700});
     await writeFile(target,text,{flag:'wx',mode:0o600});
   }
   await writeFile(join(out,'current-release.json'),stableJSONStringify(built.manifest),{flag:'wx',mode:0o600});
   await writeFile(join(out,'README-NOT-PUBLISHED.txt'),
     'PRIVATE RELEASE CANDIDATE ONLY. NOT PUBLISHED. Requires all DEC-09 QA and explicit owner approval before any GitHub write.\n',
     {flag:'wx',mode:0o600});
 }catch(e){throw e;}
 console.log(JSON.stringify({status:'PRIVATE_CANDIDATE_CREATED',release_id:id,file_count:5}));
}catch(e){
 const safe=['OUTPUT_MUST_BE_OUTSIDE_REPOSITORY','INVALID_RELEASE_ID','INVALID_TIMESTAMP','CANDIDATE_PREVIEW_BLOCKED'];
 console.error(safe.includes(e.message)?e.message:'PRIVATE_CANDIDATE_BUILD_FAILED');
 process.exitCode=2;
}
