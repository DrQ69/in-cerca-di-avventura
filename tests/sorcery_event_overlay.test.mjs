import assert from 'node:assert/strict';
import test from 'node:test';
import {overlayEventFromSorcery} from '../beta/shared/sorcery-event-overlay.mjs';

const event={event_id:'bog-2026-duello-02',status:'conclusa',player_count:99,winner_display_name:'Old Winner',standings:[]};
const snapshot={
  provenance:{sorcery_event_id:'cmua2gkxc00090agm7qvfrh45',retrieved_at:'2026-10-11T10:00:00.000Z',content_sha256:'abc'},
  event:{id:'cmua2gkxc00090agm7qvfrh45',registration_count:3,played_participant_count:2},
  registrations:[
    {registration_id:'a',participation_status:'played'},
    {registration_id:'b',participation_status:'played'},
    {registration_id:'c',participation_status:'registered_no_show'},
  ],
  standings:[
    {registration_id:'a',rank:1,display_name:'Michele S',points:12,wins:4,draws:0,losses:0,omw:.625,cmp:30,avatar:{name:'Flamecaller'}},
    {registration_id:'b',rank:2,display_name:'Simone C',points:9,wins:3,draws:0,losses:1,omw:.65625,cmp:27,avatar:{name:'Necromancer'}},
    {registration_id:'c',rank:3,display_name:'No Show',points:0,wins:0,draws:0,losses:0,omw:0,cmp:0,avatar:null},
  ],
};

test('overlay excludes zero-round no-shows from attendance and public standings',()=>{
  const result=overlayEventFromSorcery(event,snapshot);
  assert.equal(result.player_count,2);
  assert.equal(result.registration_count,3);
  assert.equal(result.no_show_count,1);
  assert.equal(result.winner_display_name,'Michele S');
  assert.equal(result.standings.length,2);
  assert.equal(result.standings[1].omw_percent,65.625);
  assert.equal(result.standings.some(row=>row.display_name==='No Show'),false);
});
