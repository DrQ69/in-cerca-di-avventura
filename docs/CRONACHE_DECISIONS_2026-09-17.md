# Cronache — Product Owner alignment decisions (2026-09-17)

This file records the Product Owner decisions that close the initial alignment gate for the Cronache page.

## Locked decisions

1. **Primary navigation** — Cronache uses the same canonical navigation as Home: `Le Adunanze · Cronache · Avventurieri · Alleanze · Proclami`, with the original **Logo ICA** as the Home anchor.
2. **Hero metrics** — retain only two metrics: `Leghe Completate` and `Giostre Completate`. Do not preserve the Copilot `Stagioni Registrate / Eventi Conservati / Campagne Attive` counters.
3. **Subtitle / secondary title** — prioritize functional clarity. Use the working formulation `Archivio di Adunanze, Leghe, Duelli e Giostre` unless a later PO decision replaces the exact wording.
4. **Primary grouping** — group by `Anno / Stagione` first. Do not add city as a nested hierarchy. Location remains a filter.
5. **Lega -> Duelli** — each stage of a Lega is a `Duello`. Example: `Blaze of Glory` is the Lega; `Gothic Draft BOG#1` is a Duello.
6. **Giostra** — `La Giostra` is a standalone ICA competitive event and is categorized as `Giostra`, not as a Duello.
7. **Search/filter register** — use `Stagione`, `Stato`, `Luogo`, `Lega`, `Formato`, plus free-text search. `Luogo` should support venue/location discovery (e.g. GameLover / Joker's) rather than city-only filtering.
8. **Season event counter** — retain a small event-count indicator for each season/year chapter.
9. **Closing copy** — `Altre Cronache attendono le future adunanze.` remains **ON HOLD / candidate**, not canonicalized yet.
10. **Status icon grammar** — locked: plain skull = `FUTURA`; ember skull = `IN CORSO`; skull with flames emerging from the eyes = `CONCLUSA`; icon must always be paired with explicit text.

## Identity constraint

The Product Owner-provided **Logo ICA** must replace the fictional Copilot crest. The fictional shield/crown/ICA/skull composition must be removed. The Logo ICA itself must not be altered; only its external host/container, spacing, scale and surrounding architectural treatment may be designed.

## Consequence for the 25% gate

The terminology/navigation/filter/status decisions required for canonicalization are now resolved. Remaining 25% work is execution: map verified real event data, produce the definitive component map/production specification, and register the production destination for the immutable Logo ICA asset before visual implementation begins.