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

They keep registrations and ranked standings separate. A registered player with no rounds can therefore exist without being counted as tournament attendance.

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

A manual workflow is provided for live validation. It creates an artifact/report only; it does not commit, merge or publish.

## Known residual risks

1. Sorcery may change or remove undocumented tRPC endpoints/schema.
2. Sorcery may restrict datacenter/GitHub Actions access even while browser access works.
3. `Main`/`Collection` semantics are intentionally not mapped to Atlas/Spellbook in V1.
4. Public availability today does not imply a supported long-term API contract.
5. A future Terms/robots/policy change may require disabling live import.
