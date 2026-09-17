# Cronache — Implementation Specification v0.1

**Status:** M25 foundation

## Product purpose

For the current product phase, **Cronache = the primary ICA Events / Stages page**. It must let users discover, browse and understand completed, ongoing and future ICA-related events while preserving the fantasy-editorial ICA visual language.

Functional clarity takes precedence over poetic ambiguity. Visual quality has equal weight to functional correctness.

## Canonical navigation

Primary navigation is shared with Home:

1. Le Adunanze
2. Cronache
3. Avventurieri
4. Alleanze
5. Proclami

The **Logo ICA** is the Home anchor. The logo asset itself is immutable; only its host/container, spacing and external integration treatment may change.

## Page header

Primary title: `CRONACHE`

Working functional subtitle: `Archivio di Adunanze, Leghe, Duelli e Giostre`

Metrics retained:
- `Leghe Completate`
- `Giostre Completate`

Metric values must be derived from real data, never hard-coded fictional values.

## Domain model

### Adunanza
Umbrella term for a real-world Sorcery gathering/event represented by ICA.

### Lega
A multi-stage organized series.

### Duello
A single stage/event belonging to a Lega.

Relationship: `Lega 1 -> many Duelli`.

### Giostra
A standalone competitive ICA event not represented as a Duello of a Lega.

`La Giostra` is classified as a **Giostra**.

`Blaze of Glory` is classified as a **Lega**; each individual stage is a **Duello**.

## Primary grouping

Archive grouping is by **Anno / Stagione**.

Do not nest by city/place. Place remains searchable/filterable metadata.

Each season/year chapter displays a small event count.

## Search and filters

Free-text search across:
- event title
- place / venue
- Lega name
- format

Filters:
- Stagione
- Stato
- Luogo
- Lega
- Formato

No separate city nesting is required in v1.

## Status system

Every status uses both icon and text.

- `FUTURA` — plain / unlit skull
- `IN CORSO` — skull with restrained internal ember
- `CONCLUSA` — skull with restrained flames emerging from the eyes

The icon is supportive; the text carries the semantic meaning.

Future and ongoing records must not show final winner or final result data.

## Page regions

### CRN-R01 — Global navigation
Canonical ICA navigation with Logo ICA as Home anchor.

### CRN-R02 — Archive threshold
Compact title region; not a marketing hero.

Contains:
- CRONACHE
- functional subtitle
- two data-derived metrics

### CRN-R03 — Search and filter register
Single visual plane containing search and filters. Core controls remain semantic HTML.

### CRN-R04 — Season / year chapter
Reusable chapter header with year/season label and event count.

### CRN-R05 — Event archive record
Wide, document-like record; not a modern card/widget.

Recommended information order:
1. status icon + text
2. event title
3. Lega / Duello context if applicable
4. date
5. place
6. format
7. player count if completed
8. winner if completed
9. detail link

### CRN-R06 — Archive closing
Closing inscription remains non-blocking and ON HOLD. Candidate copy: `Altre Cronache attendono le future adunanze.`

## Component map

- `CMP-CRN-NAV` — canonical ICA navigation
- `CMP-CRN-LOGO-HOST` — architectural host for immutable Logo ICA
- `CMP-CRN-HERO` — archive threshold
- `CMP-CRN-METRICS` — two derived metrics
- `CMP-CRN-SEARCH` — search field
- `CMP-CRN-FILTER` — reusable filter control
- `CMP-CRN-FILTER-REGISTER` — search/filter shell
- `CMP-CRN-SEASON` — season/year chapter header
- `CMP-CRN-EVENT` — event archive record
- `CMP-CRN-STATUS` — status icon + text
- `CMP-CRN-META` — metadata group
- `CMP-CRN-WINNER` — conditional winner/result block
- `CMP-CRN-LINK` — editorial detail link
- `CMP-CRN-EMPTY` — no-results state
- `CMP-CRN-CLOSING` — optional closing inscription

## Visual implementation strategy

Priority order:

1. semantic HTML
2. CSS geometry/material treatment
3. SVG for vector ornament/icons
4. raster only for painterly/texture-heavy assets that CSS/SVG cannot reproduce convincingly

Important text must never be baked into raster artwork.

Core visual language:
- blackened iron architecture
- antique gold rules and authority accents
- midnight blue structural surfaces
- aged parchment for records
- restrained crimson / ember for status only
- square / near-square geometry
- subtle shadowing
- low ornament density

Avoid:
- SaaS/dashboard visual language
- videogame HUDs
- glowing fantasy controls
- oversized skull art
- quest markers
- faction crests used as filler
- decorative artwork inside core information

## Responsive behavior

Desktop: wide horizontal records and full archive framing.

Tablet: reduce decorative side architecture; reflow event records into logical grouped columns.

Mobile: stack semantic content vertically; preserve parchment record identity, season chapter treatment and status icon+text; remove nonessential decorative side elements.

Targets must remain at least 44x44 CSS px where interactive.

## Factual data rules

- Real event data comes only from verified sources.
- Winner is taken from official final standing/rank, not inferred from maximum points.
- Future/ongoing records do not display final winner.
- Mock Copilot event names, venues, winners and counts are not data sources.

## M25 exit criteria

M25 is complete when:
- terminology/navigation/domain relationships are locked;
- La Giostra and Gothic Draft BOG#1 are mapped into the content model;
- component map is defined;
- asset production plan is defined;
- Logo ICA integration constraints are explicit;
- no unresolved decision blocks M50 visual production.
