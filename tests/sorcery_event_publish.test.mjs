import test from 'node:test';
import assert from 'node:assert/strict';
import { prepareSorceryPublication } from '../scripts/lib/sorcery-event-publish.mjs';

const snapshot={
 event:{id:'cmtest123',status:'Complete',played_participant_count:2,standings_count:2},
 registrations:[
  {registration_id:'r1',deck:{deck_status:'missing'}},
  {registration_id:'r2',deck:{deck_status:'available'}}
 ],
 standings:[
  {registration_id:'r1',rank:1,display_name:'Alpha',points:3,wins:1,draws:0,losses:0},
  {registration_id:'r2',rank:2,display_name:'Beta',points:0,wins:0,draws:0,losses:1}
 ]
};
const events={events:[{
 event_id:'evt-1',
 official_results_url:'https://sorcerytcg.com/events/cmtest123',
 player_count:2,
 winner_display_name:'Alpha',
 standings:[
  {rank:1,display_name:'Alpha',points:3,wins:1,draws:0,losses:0},
  {rank:2,display_name:'Beta',points:0,wins:0,draws:0,losses:1}
 ]
}]};

test('publication registers a validated complete snapshot exactly once',()=>{
 const result=prepareSorceryPublication({
  eventId:'cmtest123',
  snapshot,
  eventsDocument:events,
  indexDocument:{updated_at:'2026-01-01',events:['old','cmtest123']},
  publishedAt:'2026-10-17'
 });
 assert.equal(result.ica_event_id,'evt-1');
 assert.deepEqual(result.updated_index.events,['cmtest123','old']);
 assert.equal(result.updated_index.updated_at,'2026-10-17');
 assert.equal(result.validation.ok,true);
 assert.equal(result.comparison.summary.differences,0);
});

test('publication fails closed when ICA event mapping is absent',()=>{
 assert.throws(()=>prepareSorceryPublication({
  eventId:'cmtest123',snapshot,eventsDocument:{events:[]},indexDocument:{events:[]},publishedAt:'2026-10-17'
 }),/No ICA event matches/);
});

test('publication refuses provisional event by default',()=>{
 assert.throws(()=>prepareSorceryPublication({
  eventId:'cmtest123',
  snapshot:{...snapshot,event:{...snapshot.event,status:'Scheduled'}},
  eventsDocument:events,indexDocument:{events:[]},publishedAt:'2026-10-17'
 }),/Refusing publication for non-complete/);
});

test('publication fails closed on invalid snapshot',()=>{
 assert.throws(()=>prepareSorceryPublication({
  eventId:'cmtest123',
  snapshot:{event:{id:'cmtest123',status:'Complete'},registrations:'bad',standings:[]},
  eventsDocument:events,indexDocument:{events:[]},publishedAt:'2026-10-17'
 }),/Snapshot validation failed/);
});
