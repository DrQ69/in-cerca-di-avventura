import {test} from 'node:test';
import assert from 'node:assert/strict';
import {buildLeagueView,stageLabel,eventAnchor,leagueAnchor} from '../beta/adunanze/nazionale/league-model.mjs';

const events=[
 {event_id:'bog-2026-duello-01',series_id:'blaze-of-glory-2026-2027',series_name:'Blaze of Glory — La Lega di Cremos',stage_number:1,stage_label:'I',date:'2026-09-16',status:'conclusa'},
 {event_id:'bog-2026-duello-02',series_id:'blaze-of-glory-2026-2027',series_name:'Blaze of Glory — La Lega di Cremos',stage_number:2,stage_label:'II',date:'2026-10-02',status:'futura'},
 {event_id:'bog-2026-duello-04',series_id:'blaze-of-glory-2026-2027',series_name:'Blaze of Glory — La Lega di Cremos',stage_number:4,stage_label:'IV',date:'2026-10-30',status:'futura'},
 {event_id:'bog-2027-finale',series_id:'blaze-of-glory-2026-2027',series_name:'Blaze of Glory — La Lega di Cremos',stage_number:null,stage_label:'Finale',date:'2027-01-30',status:'futura'},
 {event_id:'giostra-001',series_id:null,date:'2026-08-01',status:'conclusa'}
];
const standings={series_id:'blaze-of-glory-2026-2027',series_name:'Blaze of Glory — La Lega di Cremos',status:'current',
 entries:[{rank:2,player_id:'PLY-0002X',points:20},{rank:1,player_id:'PLY-0000',points:25}]};
const players=[{id:'PLY-0000',nickname:'Dr. Q'}];

test('league view uses only matching series and only numbered stages in Tappe',()=>{
 const m=buildLeagueView(events,standings,players);
 assert.equal(m.stages.length,3);
 assert.deepEqual(m.stages.map(x=>x.stage_number),[1,2,4]);
 assert.equal(m.completed.length,1);
 assert.equal(m.season,'2026/2027');
 assert.equal(m.organizer,'In Cerca di Avventura');
});
test('top standings are sorted but points are never recalculated',()=>{
 const m=buildLeagueView(events,standings,players);
 assert.equal(m.entries[0].player_id,'PLY-0000');
 assert.equal(m.entries[0].points,25);
 assert.equal(m.entries[1].nickname,'Avventuriero da verificare');
});
test('current mapping terminology keeps E02 II and E04 IV',()=>{
 assert.equal(stageLabel(events[1]),'Tappa II');
 assert.equal(stageLabel(events[2]),'Tappa IV');
});
test('stable local anchors do not alter event ids',()=>{
 assert.equal(eventAnchor('bog-2026-duello-02'),'event-bog-2026-duello-02');
 assert.equal(leagueAnchor('blaze-of-glory-2026-2027'),'lega-blaze-of-glory-2026-2027');
});
