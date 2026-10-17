#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import { assertEventId } from './lib/sorcery-event-adapter.mjs';
import { prepareSorceryPublication } from './lib/sorcery-event-publish.mjs';

function parseArgs(argv){
 const [rawEventId,...rest]=argv;
 if(!rawEventId)throw new Error('Usage: node scripts/register_sorcery_event_snapshot.mjs <EVENT_ID> [--check-only] [--report PATH]');
 const args={eventId:assertEventId(rawEventId),checkOnly:false,report:null};
 for(let i=0;i<rest.length;i+=1){
  if(rest[i]==='--check-only')args.checkOnly=true;
  else if(rest[i]==='--report')args.report=rest[++i];
  else throw new Error('Unknown argument: '+rest[i]);
 }
 if(rest.includes('--report')&&!args.report)throw new Error('--report requires a path');
 return args;
}

async function readJson(file){return JSON.parse(await fs.readFile(file,'utf8'));}

async function main(){
 const args=parseArgs(process.argv.slice(2));
 const snapshotPath=path.resolve('data/external/sorcery/events',args.eventId+'.json');
 const eventsPath=path.resolve('data/events.json');
 const indexPath=path.resolve('data/external/sorcery/events/index.json');
 const [snapshot,eventsDocument,indexDocument]=await Promise.all([
  readJson(snapshotPath),
  readJson(eventsPath),
  readJson(indexPath),
 ]);
 const publishedAt=new Date().toISOString().slice(0,10);
 const report=prepareSorceryPublication({eventId:args.eventId,snapshot,eventsDocument,indexDocument,publishedAt});
 if(!args.checkOnly){
  await fs.writeFile(indexPath,JSON.stringify(report.updated_index,null,2)+'\n','utf8');
  console.log('Registered snapshot in '+indexPath);
 }else{
  console.log('Check only: manifest not modified.');
 }
 if(args.report){
  const reportPath=path.resolve(args.report);
  await fs.mkdir(path.dirname(reportPath),{recursive:true});
  await fs.writeFile(reportPath,JSON.stringify({
   ica_event_id:report.ica_event_id,
   sorcery_event_id:report.sorcery_event_id,
   validation:report.validation,
   comparison:report.comparison,
   planned_index:report.updated_index,
   check_only:args.checkOnly,
  },null,2)+'\n','utf8');
  console.log('Wrote publication report: '+reportPath);
 }
 console.log('ICA event: '+report.ica_event_id);
 console.log('Comparison: '+report.comparison.summary.matches+' MATCH, '+report.comparison.summary.differences+' DIFFERENCE, '+report.comparison.summary.missing+' MISSING');
}

main().catch(error=>{
 console.error('Sorcery publication gate failed safely: '+error.message);
 process.exitCode=1;
});
