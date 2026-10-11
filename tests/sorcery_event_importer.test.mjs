import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import test from 'node:test';
import { parseTrpcJsonl } from '../scripts/lib/sorcery-event-adapter.mjs';
import { normalizeSorceryEvent } from '../scripts/lib/sorcery-event-normalize.mjs';
import { validateSorcerySnapshot } from '../scripts/lib/sorcery-event-validate.mjs';
import { compareWithIca } from '../scripts/lib/sorcery-event-compare.mjs';

const eventText = await fs.readFile(new URL('./fixtures/sorcery/event-get-bog-e02.jsonl', import.meta.url), 'utf8');
const deckText = await fs.readFile(new URL('./fixtures/sorcery/player-snapshot-example.jsonl', import.meta.url), 'utf8');

test('parses captured Sorcery JSONL event payload', () => {
  const raw = parseTrpcJsonl(eventText, (value) => value?.event?.id === 'cmua2gkxc00090agm7qvfrh45');
  assert.equal(raw.event.status, 'Complete');
  assert.equal(raw.event.players.length, 3);
  assert.equal(raw.standings.length, 3);
});

test('normalizes data without username, ELO, auth user id or source deck id', () => {
  const raw = parseTrpcJsonl(eventText, (value) => value?.event?.id === 'cmua2gkxc00090agm7qvfrh45');
  const deck = parseTrpcJsonl(deckText, (value) => Array.isArray(value?.snapshotlist));
  const decks = new Map([['cmua34iio00000agmmj67gf9s', { status: 'available', snapshot: deck }]]);
  const normalized = normalizeSorceryEvent(raw, decks, '2026-10-11T10:00:00.000Z');
  assert.equal(normalized.registrations[0].deck.deck_status, 'available');
  assert.deepEqual(normalized.registrations[0].deck.cards.map((card) => card.board_source), ['Main', 'Collection', 'Avatar']);
  const serialized = JSON.stringify(normalized);
  assert.equal(serialized.includes('username'), false);
  assert.equal(serialized.includes('elo'), false);
  assert.equal(serialized.includes('sourceDeck":{"id"'), false);
});

test('validation distinguishes standings entries from players with recorded rounds', () => {
  const raw = parseTrpcJsonl(eventText, (value) => value?.event?.id === 'cmua2gkxc00090agm7qvfrh45');
  const normalized = normalizeSorceryEvent(raw, new Map(), '2026-10-11T10:00:00.000Z');
  const result = validateSorcerySnapshot(normalized, raw.event.id);
  assert.equal(result.ok, true);
  assert.equal(normalized.event.registration_count, 3);
  assert.equal(normalized.event.standings_count, 3);
  assert.equal(normalized.event.played_participant_count, 2);
  assert.match(result.warnings.join('\n'), /standings entries \(3\) differ from players with at least one recorded round \(2\)/);
});

test('comparison is read-only and reports matches/differences', () => {
  const raw = parseTrpcJsonl(eventText, (value) => value?.event?.id === 'cmua2gkxc00090agm7qvfrh45');
  const normalized = normalizeSorceryEvent(raw, new Map(), '2026-10-11T10:00:00.000Z');
  const report = compareWithIca(normalized, { events: [{ event_id: 'bog-2026-duello-02', official_event_url: 'https://sorcerytcg.com/events/cmua2gkxc00090agm7qvfrh45', player_count: 2, winner_display_name: 'Michele S', standings: [{ rank: 1, display_name: 'Michele S', points: 12 }, { rank: 3, display_name: 'Luke C', points: 8 }] }] });
  assert.equal(report.event_found, true);
  assert.ok(report.summary.matches > 0);
  assert.ok(report.summary.differences > 0);
});

test('schema drift fails closed', () => {
  assert.throws(() => parseTrpcJsonl('{"json":{"unexpected":true}}\n', (value) => value?.event?.id), /Schema may have changed/);
});
