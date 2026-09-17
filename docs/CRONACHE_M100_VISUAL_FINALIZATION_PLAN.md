# Cronache — M100 Visual Finalization Gate

Date: 2026-09-17

## Purpose

Close the remaining visual-quality gap between the implemented Cronache Beta and the approved Copilot visual reference while preserving ICA canonical terminology, real data and responsive behavior.

The reference remains visual evidence, not a pixel-perfect production specification.

## Visual priorities

1. **Identity first** — the page must read immediately as In Cerca di Avventura, not as a generic fantasy dashboard.
2. **Archive hierarchy** — threshold -> consultation ledger -> season chapters -> event records -> closing must remain visually unmistakable.
3. **Material grammar** — midnight-blue stone/blackened iron, antique gold, restrained parchment, warm ember only for status.
4. **Density discipline** — ornament may frame structure but must not compete with dates, locations, formats, players or winner.
5. **Status semantics** — FUTURA / IN CORSO / CONCLUSA remain icon + text; no color-only meaning.
6. **Responsive recomposition** — mobile is a deliberate composition, not a compressed desktop layout.

## Finalization tasks

### VF-01 — Navigation and Logo host
- Preserve canonical navigation.
- Keep the logo centered as Home affordance.
- Remove any shield/crest silhouette around the production Logo ICA itself.
- Only the surrounding architectural host may be styled.
- Original Logo ICA artwork must remain byte-for-byte untouched once installed.

### VF-02 — Archive threshold
- Strengthen the threshold as a ceremonial architectural opening, not a marketing hero.
- Preserve functional subtitle: `Archivio di Adunanze, Leghe, Duelli e Giostre`.
- Keep only `Leghe Completate` and `Giostre Completate` as archive metrics.
- Reduce decorative competition around the metrics.

### VF-03 — Search/filter ledger
- Keep inputs semantic HTML.
- Parchment surface remains visually separate from the dark architecture.
- Search is the dominant control; filters are secondary.
- Result count and `Azzera filtri` must remain visible and legible.

### VF-04 — Season chapters
- Season header must read as a chapter opening.
- Event count remains small and subordinate.
- No city nesting.

### VF-05 — Event records
- Records remain wide archival documents, not dashboard cards.
- Hierarchy: status -> event title -> date/location -> format -> result -> action.
- Completed records may expose players + winner.
- Future/ongoing records never expose invented results.

### VF-06 — Responsive behavior
Target review widths:
- 1440 px desktop
- 1024 px tablet/landscape
- 768 px tablet/portrait
- 390 px mobile

At small widths:
- metadata stacks cleanly;
- status remains visible near the title;
- action remains reachable;
- no horizontal scrolling;
- filters become one-column or two-column without micro-controls.

### VF-07 — Performance discipline
- Prefer CSS/SVG for frame/ornament/icon work.
- No new large painterly raster unless it materially improves the page.
- Decorative assets must not block content readability.

## Acceptance criteria

The M100 visual gate passes only when:

- the page visually belongs to ICA;
- the Copilot reference's hierarchy and material relationships are recognisable;
- the interface remains more usable than the concept image;
- all factual content remains sourced/verified;
- all search/filter behavior remains functional;
- the page remains usable at the four target widths;
- no held/deprecated hero asset is reintroduced;
- the original Logo ICA is used unchanged once production transfer is complete.

## Known open dependency

Exact repository transfer of the original `Logo di in Cerca di Avventura.svg` remains open. The source file has been recovered from the conversation and must not be altered. Until its exact bytes are installed in the repository, `assets/logo-emblem.webp` remains a temporary layout proxy only.
