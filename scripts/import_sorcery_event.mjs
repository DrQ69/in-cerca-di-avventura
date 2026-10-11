#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import { assertEventId, fetchDecksForRegistrations, fetchEvent } from './lib/sorcery-event-adapter.mjs';
import { normalizeSorceryEvent } from './lib/sorcery-event-normalize.mjs';
import { validateSorcerySnapshot } from './lib/sorcery-event-validate.mjs';
import { compareWithIca, formatComparison } from './lib/sorcery-event-compare.mjs';

function parseArgs(argv) {
  const [eventId, ...rest] = argv;
  if (!eventId) throw new Error('Usage: node scripts/import_sorcery_event.mjs <EVENT_ID> [--dry-run] [--compare] [--output PATH]');
  const args = { eventId: assertEventId(eventId), dryRun: false, compare: false, output: null };
  for (let i = 0; i < rest.length; i += 1) {
    if (rest[i] === '--dry-run') args.dryRun = true;
    else if (rest[i] === '--compare') args.compare = true;
    else if (rest[i] === '--output') args.output = rest[++i];
    else throw new Error(`Unknown argument: ${rest[i]}`);
  }
  if (rest.includes('--output') && !args.output) throw new Error('--output requires a path');
  return args;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  console.log(`Fetching Sorcery event ${args.eventId}...`);
  const raw = await fetchEvent(args.eventId);
  const minimalRegistrations = (raw.event?.players ?? []).map((player) => ({ registration_id: player.id }));
  const deckResults = raw.event?.trackDecks
    ? await fetchDecksForRegistrations(args.eventId, minimalRegistrations, { concurrency: 2 })
    : new Map();
  const snapshot = normalizeSorceryEvent(raw, deckResults);
  const validation = validateSorcerySnapshot(snapshot, args.eventId);

  console.log(`Registrations: ${snapshot.registrations.length}`);
  console.log(`Ranked participants: ${snapshot.standings.length}`);
  const deckCounts = snapshot.registrations.reduce((acc, registration) => {
    acc[registration.deck.deck_status] = (acc[registration.deck.deck_status] ?? 0) + 1;
    return acc;
  }, {});
  console.log(`Decklists: available=${deckCounts.available ?? 0}, missing=${deckCounts.missing ?? 0}, error=${deckCounts.error ?? 0}`);
  for (const warning of validation.warnings) console.warn(`WARNING: ${warning}`);
  if (!validation.ok) {
    for (const error of validation.errors) console.error(`ERROR: ${error}`);
    process.exitCode = 1;
    return;
  }

  if (args.compare) {
    const eventsPath = path.resolve('data/events.json');
    const eventsDocument = JSON.parse(await fs.readFile(eventsPath, 'utf8'));
    console.log(formatComparison(compareWithIca(snapshot, eventsDocument)));
  }

  const output = path.resolve(args.output ?? `data/external/sorcery/events/${args.eventId}.json`);
  if (args.dryRun) {
    console.log(`Dry run: snapshot validated; nothing written. Planned output: ${output}`);
    return;
  }
  await fs.mkdir(path.dirname(output), { recursive: true });
  await fs.writeFile(output, `${JSON.stringify(snapshot, null, 2)}\n`, 'utf8');
  console.log(`Wrote normalized snapshot: ${output}`);
}

main().catch((error) => {
  console.error(`Sorcery importer failed safely: ${error.message}`);
  process.exitCode = 1;
});
