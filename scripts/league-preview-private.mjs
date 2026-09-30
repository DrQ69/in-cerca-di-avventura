#!/usr/bin/env node
// Output must be a new LOCAL file OUTSIDE the GitHub checkout.
import {readFile,writeFile,realpath} from 'node:fs/promises';
import {resolve,dirname,sep,join} from 'node:path';
import {renderPrivatePreview} from './league-private-preview.mjs';
if(process.argv.length!==5){
 console.error('Usage: node scripts/league-preview-private.mjs <current-public-json-dir> <candidate-sanitized-json-dir> <private-output.html>');
 process.exitCode=2;
}else try {
 const root=await realpath(process.cwd()),output=resolve(process.argv[4]),dir=await realpath(dirname(output));
 if(dir===root||dir.startsWith(root+sep))throw new Error('OUTPUT_MUST_BE_OUTSIDE_REPOSITORY');
 if(!output.endsWith('.html'))throw new Error('OUTPUT_MUST_BE_HTML');
 const load=async folder=>{
  const rd=async name=>JSON.parse(await readFile(join(resolve(folder),name),'utf8'));
  return {players:await rd('players.json'),events:await rd('events.json'),standings:await rd('league-standings.json')};
 };
 const html=renderPrivatePreview(await load(process.argv[2]),await load(process.argv[3]));
 await writeFile(output,html,{flag:'wx',mode:0o600});
 console.log('PRIVATE_PREVIEW_CREATED: schematic, local-only; no publication or QA pass.');
}catch(e){
 console.error(['OUTPUT_MUST_BE_OUTSIDE_REPOSITORY','OUTPUT_MUST_BE_HTML'].includes(e.message)?e.message:'PRIVATE_PREVIEW_FAILED');
 process.exitCode=2;
}
