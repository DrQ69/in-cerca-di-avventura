# VR-0136 — ICA v1 unified Archivio

**Primary QA Profile:** QAP-PAG  
**Secondary profiles:** QAP-CODE, QAP-DAT  
**Lifecycle claim:** IMPLEMENTED and VERIFIED on the feature branch.  
**Release readiness:** READY_FOR_MERGE for the unified Archivio scope.

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

## Automated verification evidence

Tested feature-branch head: `f0d1a8e7d7742a5f2173a739ffcabb9577330fe4`.

- ICA baseline QA run 593 — **PASS**.
- Archivio visual QA run 2 — **PASS** at 390 / 768 / 1440 px.
- Shared banner consistency QA run 209 — **PASS**.
- Homepage visual QA run 155 — **PASS**.
- LCS-02 runtime QA run 200 — **PASS**.

Archivio visual QA confirms:
- all six type filters are present;
- Eventi / Cronache / Avventurieri / Tesori / Deck are populated;
- Proclami has the correct empty state while its feed is empty;
- full-text search for `Flaming Skull` returns both Tesoro and Deck records;
- at least one deck is indexed from an existing available public Sorcery snapshot;
- no horizontal overflow or browser console errors.

## Verification coverage

- ICA baseline QA;
- Archivio visual QA at 390 / 768 / 1440 px;
- all six content-type filters present;
- Eventi / Cronache / Avventurieri / Tesori / Deck populated;
- Proclami empty state works while feed is empty;
- cross-domain search can return both Tesori and Deck results;
- root Home exposes Archivio;
- shared banner consistency includes Archivio;
- no horizontal overflow or browser console errors.

All checks above passed.
