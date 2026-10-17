import assert from 'node:assert/strict';
import test from 'node:test';
import { chestForPlayers, chestForEvent, participantCount } from '../beta/tesori/treasure-chests.mjs';

test('treasure chest bands follow Product Owner participant ranges', () => {
  const cases = [
    [9, null],
    [10, 'scrigno-10-19-giocatori.webp'],
    [19, 'scrigno-10-19-giocatori.webp'],
    [20, 'scrigno-20-39-giocatori.webp'],
    [39, 'scrigno-20-39-giocatori.webp'],
    [40, 'scrigno-40-59-giocatori.webp'],
    [59, 'scrigno-40-59-giocatori.webp'],
    [60, 'scrigno-60-79-giocatori.webp'],
    [79, 'scrigno-60-79-giocatori.webp'],
    [80, 'scrigno-80-100-giocatori.webp'],
    [100, 'scrigno-80-100-giocatori.webp'],
    [101, null],
  ];
  for (const [count, expected] of cases) {
    assert.equal(chestForPlayers(count)?.file ?? null, expected, String(count));
  }
});

test('participant count never falls back to event capacity', () => {
  assert.equal(participantCount({ capacity: 50 }), null);
  assert.equal(participantCount({ player_count: 23, registration_count: 24, capacity: 50 }), 23);
  assert.equal(participantCount({ registration_count: 36, capacity: 50 }), 36);
});

test('BOG stage II resolves to the 20-39 chest from 23 actual participants', () => {
  const result = chestForEvent({ event_id: 'bog-2026-duello-02', player_count: 23 });
  assert.equal(result.count, 23);
  assert.equal(result.band?.file, 'scrigno-20-39-giocatori.webp');
});
