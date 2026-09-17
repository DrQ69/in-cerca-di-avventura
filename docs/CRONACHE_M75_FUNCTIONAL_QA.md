# Cronache — M75 Functional QA

**Scope:** data-driven Cronache Beta implementation after M50 visual-system baseline.

## Gate summary

- Real event data source: PASS
- Blaze of Glory future schedule expansion: PASS for PO-confirmed dates/venues/formats; unknown formats remain explicitly undefined
- Year/season grouping: PASS
- Search: PASS by implementation review
- Stagione filter: PASS by implementation review
- Stato filter: PASS by implementation review
- Luogo filter: PASS by implementation review
- Lega filter: PASS by implementation review
- Formato filter: PASS by implementation review
- Completed-event winner/player visibility: PASS
- Future-event result suppression: PASS
- Ongoing-state renderer support: PASS; no real ongoing event is currently present
- Dynamic `Leghe Completate` / `Giostre Completate`: PASS
- Loading/error/no-results states: PASS
- Keyboard/mobile-menu Escape behavior: PASS
- Reduced-motion support: inherited from M50 CSS baseline
- Runtime screenshot comparison at target widths: PENDING / M75-09
- Exact Logo ICA production-source transfer: PENDING identity dependency

## Truth-safety checks

1. La Giostra date remains absent and visibly reported as unverified; no date is inferred.
2. La Giostra winner uses official final rank, not a score-max calculation.
3. BOG#1 winner/player count are sourced from the supplied official results.
4. Future Blaze of Glory entries contain no winner or result placeholders that could be mistaken for results.
5. Duello V and Duello VII formats remain `null` / `Da definire` because no confirmed format is currently available in the project source set.
6. The 2027 finale is grouped under calendar year 2027 while remaining part of the Blaze of Glory 2026/2027 league series.

## Implementation notes

The page now renders from `data/cronache-events.json`; event records are no longer duplicated as hard-coded factual HTML. This reduces the risk of content drift between the visual page and the project data source.

The M75 code is ready for CI and merge once baseline checks pass. Passing CI does not imply PO visual approval or final production readiness.
