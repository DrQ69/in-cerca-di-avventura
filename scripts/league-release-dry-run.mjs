#!/usr/bin/env node
// Read-only dry-run of ALREADY PUBLIC / SANITIZED JSON. No Excel ingestion, no deploy.
import { readFile } from 'node:fs/promises';
import { resolve,join } from 'node:path';
import { previewPublicChange } from './league-release-core.mjs';
const usage='Usage: node scripts/league-release-dry-run.mjs <current-public-directory> <candidate-sanitized-directory>';
async function load(dir){
  const parse=async name=>JSON.parse(await readFile(join(resolve(dir),name),'utf8'));
  return {players:await parse('players.json'),events:await parse('events.json'),
    standings:await parse('league-standings.json')};
}
if(process.argv.length!==4){console.error(usage);process.exitCode=2;}
else {
  try {
    const current=await load(process.argv[2]),candidate=await load(process.argv[3]);
    const result=previewPublicChange(current,candidate);
    const report={
      status:result.blocked?'BLOCKED':'STRUCTURAL_CHECK_PASSED_NOT_APPROVED_FOR_RELEASE',
      summary:Object.fromEntries(Object.entries(result.changes||{}).map(([k,v])=>
        [k,Object.fromEntries(Object.entries(v).map(([action,ids])=>[action,ids.length]))])),
      changes:result.changes,errors:result.qa.errors,warnings:result.qa.warnings,
      requiredGates:result.requiredGates||[]
    };
    console.log(JSON.stringify(report,null,2));
    if(result.blocked)process.exitCode=1;
  } catch(e) {
    // Avoid printing workbook/private contents or attacker-controlled parse text.
    const code=e?.code==='ENOENT'?'INPUT_FILE_MISSING':
      e instanceof SyntaxError?'INVALID_JSON':'DRY_RUN_FAILED';
    console.error(JSON.stringify({status:'BLOCKED',error:code}));
    process.exitCode=2;
  }
}
