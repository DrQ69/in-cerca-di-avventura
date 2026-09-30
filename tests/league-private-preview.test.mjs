import {test} from 'node:test';
import assert from 'node:assert/strict';
import {renderPrivatePreview} from '../scripts/league-private-preview.mjs';
const base=()=>({
 players:{players:[{id:'PLY-0000',nickname:'Dr. Q'},{id:'PLY-0001',nickname:'Nick'}]},
 events:{events:[{event_code:'E02',event_id:'bog-2026-duello-02',stage_number:2,stage_label:'II',title:'Peasant',date:'2026-10-02',venue:'Joker'}]},
 standings:{entries:[{rank:1,player_id:'PLY-0000',points:8}]}
});
test('private preview escapes user text, labels unapproved content and is responsive',()=>{
 const a=base(),b=base();b.players.players[1].nickname='<img src=x onerror=alert(1)>';
 const h=renderPrivatePreview(a,b);
 assert.ok(h.includes('ANTEPRIMA PRIVATA — NON PUBBLICATA'));
 assert.ok(h.includes('name="viewport"'));
 assert.ok(h.includes('@media(max-width:600px)'));
 assert.ok(h.includes('&lt;img src=x onerror=alert(1)&gt;'));
 assert.ok(!h.includes('<img src=x onerror=alert(1)>'));
 assert.ok(h.includes('Tappa II'));
});
