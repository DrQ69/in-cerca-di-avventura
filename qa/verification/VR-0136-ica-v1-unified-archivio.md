# VR-0136 — ICA v1 unified Archivio

**Primary QA Profile:** QAP-PAG  
**Secondary profiles:** QAP-CODE, QAP-DAT  
**Lifecycle claim:** IMPLEMENTED candidate; PR verification pending.  
**Release readiness:** NOT_READY — automated visual QA and Product Owner visual review pending.

## Product Owner decision

On 2026-10-17 the Product Owner approved a unified Archivio for ICA v1 covering:

- events;
- Cronache;
- Avventurieri;
- Tesori;
- deck;
- Proclami;

with search and filters.

The current primary navigation remains unchanged. Archivio is exposed from the Home without replacing or renaming any consolidated section.

## Implementation

Public route:

- `/archivio/`

Datasets remain owned by their existing sources of truth:

- EVENT → `data/events.json`;
- PLAYER → `data/players.json`;
- TREASURE → `data/treasures.json`;
- PROCLAMA → `data/proclami.json`;
- available Sorcery deck snapshots → `data/external/sorcery/events/*.json`.

The archive is a discovery/index layer only. It does not duplicate authoritative facts into a new persistent dataset.

## Search and filters

Full-text search covers available titles, metadata and type-specific searchable fields. Filters include:

- content type;
- year;
- format.

All approved content-type filters remain visible even when a category has no current records. Proclami therefore has an explicit empty state while its dedicated page remains on hold.

## Deck indexing

Only deck snapshots already represented as `deck_status: available` in the existing public Sorcery event snapshots are indexed. The Archivio links back to the event result page rather than creating a second deck source of truth.

Deck search includes available deck name, player display name, Avatar and card names. ICA does not introduce round-by-round MATCH data.

## Public identity

Avventurieri results use public nickname/profile identifiers only. No private reconciliation fields are introduced by Archivio.

## Planned verification

- ICA baseline QA;
- Archivio visual QA at 390 / 768 / 1440 px;
- all six content-type filters present;
- Eventi / Cronache / Avventurieri / Tesori / Deck populated;
- Proclami empty state works while feed is empty;
- cross-domain search can return both Tesori and Deck results;
- root Home exposes Archivio;
- shared banner consistency includes Archivio;
- no horizontal overflow or browser console errors.
