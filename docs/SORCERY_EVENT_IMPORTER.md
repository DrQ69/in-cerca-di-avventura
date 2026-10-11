# Sorcery Event Importer V1

Status: **IMPLEMENTED / not approved as a canonical source**.

## Purpose

This importer creates a read-only normalized snapshot of public Sorcery event data without modifying ICA canonical data. Sorcery remains an external source; `data/events.json` remains governed by ICA source-integrity and Product Owner rules.

## Source and risk boundary

The adapter uses two public, undocumented frontend tRPC endpoints observed on `sorcerytcg.com` without cookies or Authorization:

- `GET /api/trpc/event.get`
- `GET /api/trpc/event.playerSnapshot`

Because these are internal/undocumented endpoints, names, input envelopes and JSONL response shape may change without notice. Schema drift must fail closed. The importer must never become a runtime dependency of the public site or of the normal GitHub Pages deploy.

## Security / privacy

- host is hardcoded to `https://sorcerytcg.com`;
- event/player IDs are validated;
- GET/read-only only;
- no authentication, cookies or tokens;
- low deck-fetch concurrency (default 2), retry only for 429/5xx/transient failures;
- normalized output excludes Sorcery username, ELO, authentication/user IDs and source deck IDs;
- Sorcery users are not automatically mapped to ICA Avventurieri.

## Data model

Snapshots are written by default to:

`data/external/sorcery/events/<EVENT_ID>.json`

They keep three separate counts: registrations, standings entries, and players with at least one recorded round. Product Owner rule (2026-10-11): a registration with zero recorded rounds represents a player who registered online but did not attend the tournament. Such records are normalized with `participation_status: "registered_no_show"` and are excluded from ICA attendance. Registrations with one or more rounds use `participation_status: "played"`.

Deck board names are preserved exactly as Sorcery returns them (`Avatar`, `Main`, `Collection`). V1 deliberately does not reinterpret them as ICA `Avatar + Atlas + Spellbook` until that mapping is proven.

Each deck is independently marked `available`, `missing` or `error`; a single missing deck does not invalidate the event snapshot.

## CLI

```bash
node scripts/import_sorcery_event.mjs <EVENT_ID> --dry-run
node scripts/import_sorcery_event.mjs <EVENT_ID> --compare
node scripts/import_sorcery_event.mjs <EVENT_ID> --output /tmp/event.json
```

Default execution writes only the external normalized snapshot. It never edits `data/events.json`.

`--compare` compares the imported snapshot with the matching ICA event by Sorcery event URL and reports `MATCH`, `DIFFERENCE` and `MISSING` without changing either source.

## Failure model

The importer exits non-zero and writes no snapshot when the event payload cannot be parsed/validated. Deck-level errors are isolated and recorded per player. A non-`Complete` event is allowed but produces a warning because standings may be provisional.

## QA

Offline fixture tests:

```bash
node --test tests/sorcery_event_importer.test.mjs
```

The fixtures are reduced, privacy-minimized reproductions of the captured BOG Stage II `event.get` and `event.playerSnapshot` response shapes. They are test evidence, not production event data.

Pull requests run the offline importer test suite automatically. A manual workflow is also provided for live validation after the workflow is available on the default branch; it creates an artifact/report only and does not commit, merge or publish.

## Known residual risks

1. Sorcery may change or remove undocumented tRPC endpoints/schema.
2. Sorcery may restrict datacenter/GitHub Actions access even while browser access works.
3. `Main`/`Collection` semantics are intentionally not mapped to Atlas/Spellbook in V1.
4. Public availability today does not imply a supported long-term API contract.
5. A future Terms/robots/policy change may require disabling live import.

## BOG Stage II live validation — 2026-10-11

A live run from a local Node environment against event `cmua2gkxc00090agm7qvfrh45` succeeded without authentication and returned:

- 24 registrations;
- 24 Sorcery standings entries;
- 23 players with at least one recorded round;
- 24 deck snapshots available, 0 missing, 0 errors;
- ICA winner and ranks 1–23 names/points matched the source;
- Sorcery also contains Alberto I at rank 24 with 0 points and no recorded rounds; per Product Owner rule this is an online registration/no-show and is not part of ICA attendance.

V1 therefore does not equate `standings.length` with attendance. The discrepancy is preserved for Product Owner/source reconciliation rather than silently corrected.


## Public beta integration

Completed-event snapshots can be registered in:

`data/external/sorcery/events/index.json`

The beta event surfaces then apply a read-only runtime overlay from the normalized snapshot:

- `player_count` = registrations with `participation_status: played`;
- winner = rank 1 among played participants;
- standings = played participants only, including W/D/L, OMW, CMP and Avatar;
- `registration_count` and `no_show_count` remain available as separate metrics;
- decklists remain stored only in the external snapshot and are not duplicated into `data/events.json`.

This means imported Sorcery results can update what the beta site renders while `data/events.json` remains unchanged. If a snapshot is absent from the manifest, the site falls back to ICA event data without issuing a missing-file request.

The detailed Cronache event page reads the same normalized snapshot and presents:
- final standings;
- participant / registration / no-show counts;
- Avatar;
- W-D-L, points, OMW and CMP;
- event decklists.

For public deck presentation, the raw source remains unchanged, while ICA derives the canonical Sorcery structure:
- source `Avatar` -> Avatar;
- source `Main` + card category `Site` -> Atlas;
- source `Main` + non-Site card -> Spellbook;
- source `Collection` remains explicitly labelled Collection as a supplementary source section.
