# Cronache — Task & Asset Register

**Purpose:** persistent execution register for the Cronache page. It tracks work started, in development, completed, blocked/awaiting PO input, expected PO interactions, and aesthetic assets with their storage location.

**Current product rule:** for the present phase, **Cronache = Events / Stages page**. It must cover completed, ongoing, and future events, while preserving the ICA visual language and real factual data.

**Visual priority:** visual quality has equal weight to functional correctness. A milestone is not considered reached if the page works technically but does not yet express the intended ICA aesthetic.

**Latest PO alignment:** initial navigation / terminology / grouping / filter / status decisions resolved on 2026-09-17. See `docs/CRONACHE_DECISIONS_2026-09-17.md`.

## Status legend

- `NOT_STARTED` — not begun
- `IN_DEVELOPMENT` — active work
- `WAITING_PO` — requires a Product Owner decision before safe continuation
- `BLOCKED` — blocked by a dependency
- `COMPLETED` — finished at the stated scope
- `RECHECK_REQUIRED` — previously completed but must be revalidated after a dependency change

## Milestone register

| ID | Milestone | Task | Status | PO interactions estimated | PO interaction trigger / note |
|---|---|---|---|---:|---|
| CRN-25-01 | 25% | Consolidate Cronache functional purpose and terminology | COMPLETED | 0 | Cronache = Eventi/Tappe; functional clarity first |
| CRN-25-02 | 25% | Replace Copilot fictional navigation with ICA canonical navigation | COMPLETED | 0 | Use Home nav: Le Adunanze / Cronache / Avventurieri / Alleanze / Proclami; Logo ICA = Home |
| CRN-25-03 | 25% | Replace Copilot crest with the original **Logo ICA** without modifying the logo | IN_DEVELOPMENT | 0 | PO rule explicit; only host/container/integration may change |
| CRN-25-04 | 25% | Define final subtitle under `CRONACHE` using ICA terminology | COMPLETED | 0 | Functional wording locked in working form: `Archivio di Adunanze, Leghe, Duelli e Giostre` |
| CRN-25-05 | 25% | Decide whether archive metrics are retained and define their real labels | COMPLETED | 0 | Retain two metrics only: `Leghe Completate` / `Giostre Completate`; values must be data-derived |
| CRN-25-06 | 25% | Rationalize search/filter set for real ICA use | COMPLETED | 0 | Free text + Stagione / Stato / Luogo / Lega / Formato |
| CRN-25-07 | 25% | Lock primary grouping strategy: season/year first, filters second | COMPLETED | 0 | Year/season primary; no city nesting |
| CRN-25-08 | 25% | Lock domain relationship `Lega -> Duelli` and standalone `Giostra` semantics | COMPLETED | 0 | Each Lega stage = Duello; La Giostra = standalone Giostra |
| CRN-25-09 | 25% | Map real data for **La Giostra** into event-record model | IN_DEVELOPMENT | 0 | Use only verified source data |
| CRN-25-10 | 25% | Map real data for **Blaze of Glory / Gothic Draft BOG#1** into Lega/Duello model | IN_DEVELOPMENT | 0 | Use only verified source data |
| CRN-25-11 | 25% | Define event status grammar: FUTURA / IN CORSO / CONCLUSA | COMPLETED | 0 | Plain skull / ember skull / flaming-eye skull + explicit text |
| CRN-25-12 | 25% | Produce definitive component map and production specification for the page shell | IN_DEVELOPMENT | 0 | Now unblocked by PO alignment |
| CRN-25-13 | 25% | Preserve season event-count indicator | COMPLETED | 0 | Small count retained in each season/year chapter header |
| CRN-25-14 | 25% | Resolve closing inscription | WAITING_PO | 1 | `Altre Cronache attendono le future adunanze.` remains ON HOLD / candidate; not blocking 25% execution |
| CRN-50-01 | 50% | Build page-wide architectural frame system | NOT_STARTED | 0–1 | Interaction only if two visually strong alternatives are equally valid |
| CRN-50-02 | 50% | Build Logo ICA host/container and integrate original logo unchanged | NOT_STARTED | 0 | No modifications permitted to Logo ICA itself |
| CRN-50-03 | 50% | Build Hero / Archive Threshold visual system | NOT_STARTED | 0–1 | Review only if art direction materially diverges from reference |
| CRN-50-04 | 50% | Build Search + Filter Register visual system | NOT_STARTED | 0 | HTML/CSS-first, decorative frame separate |
| CRN-50-05 | 50% | Build Season / Year chapter header component | NOT_STARTED | 0 | Reusable component |
| CRN-50-06 | 50% | Build Event Record component with responsive anatomy | NOT_STARTED | 0 | Reusable HTML/CSS component |
| CRN-50-07 | 50% | Generate status icon family: future / ongoing / completed | NOT_STARTED | 0–1 | Visual review may be requested after first integrated set |
| CRN-50-08 | 50% | Generate/reconstruct dividers, corners, seals and restrained ICA ornaments | NOT_STARTED | 0–1 | Only strategic visual choices escalate to PO |
| CRN-50-09 | 50% | Establish typography, material, border and spacing tokens | NOT_STARTED | 0 | Derived from ICA art direction + reference rationalization |
| CRN-50-10 | 50% | Define responsive simplification rules for all aesthetic systems | NOT_STARTED | 0 | Desktop/tablet/mobile |
| CRN-50-11 | 50% | Perform visual QA against Copilot reference and ICA rules | NOT_STARTED | 0 | Internal gate before 50% completion |
| CRN-75-01 | 75% | Implement Cronache Beta route/page in repository | NOT_STARTED | 0 | Branch -> QA -> PR -> merge under M10 |
| CRN-75-02 | 75% | Populate La Giostra with real data | NOT_STARTED | 0 | Winner/player count taken from official result source, not inferred |
| CRN-75-03 | 75% | Populate Blaze of Glory / Gothic Draft BOG#1 with real data | NOT_STARTED | 0 | Preserve Lega -> Duello relationship |
| CRN-75-04 | 75% | Add known future Blaze of Glory stages where data is sufficiently verified | NOT_STARTED | 0–1 | Ask only where factual event details remain genuinely uncertain |
| CRN-75-05 | 75% | Implement functional search and filters | NOT_STARTED | 0 | Search title/place/series; Stagione/Stato/Luogo/Lega/Formato filters |
| CRN-75-06 | 75% | Implement conditional completed/ongoing/future content states | NOT_STARTED | 0 | No winner/results for future/ongoing events |
| CRN-75-07 | 75% | Implement desktop/tablet/mobile layouts | NOT_STARTED | 0 | No desktop mural shrinking; true recomposition |
| CRN-75-08 | 75% | Accessibility, keyboard, focus and reduced-motion QA | NOT_STARTED | 0 | Functional gate |
| CRN-75-09 | 75% | Visual QA against reference at target widths | NOT_STARTED | 0–1 | Escalate only if a major subjective visual choice remains |
| CRN-100-01 | 100% | Refine final ornamental/illustrative assets | NOT_STARTED | 0–1 | Only if final art direction choice is materially subjective |
| CRN-100-02 | 100% | Add empty/no-results/loading/error states | NOT_STARTED | 0 | Same design system |
| CRN-100-03 | 100% | Add event-detail routing hooks / detail-page contract | NOT_STARTED | 0 | Full event detail page may be implemented later |
| CRN-100-04 | 100% | SEO, metadata and share preview QA | NOT_STARTED | 0 | No held/obsolete assets |
| CRN-100-05 | 100% | Performance and asset-weight optimization | NOT_STARTED | 0 | Preserve fidelity while meeting performance targets |
| CRN-100-06 | 100% | Final visual regression pass | NOT_STARTED | 0 | Cross-width and component-state review |
| CRN-100-07 | 100% | Final content-truth audit | NOT_STARTED | 0 | No fictional event/player/venue data presented as real |
| CRN-100-08 | 100% | Product Owner final visual review | NOT_STARTED | 1 | Final approval gate; not implied by technical completion |

## PO interaction budget

The initial consolidated PO alignment interaction is now complete. Most remaining work should continue autonomously.

- **To 25% gate:** **0 required interactions** for currently unblocked work; closing inscription remains a non-blocking candidate decision.
- **25% -> 50%:** typically **0–2 interactions**, only for genuinely subjective identity-level visual choices.
- **50% -> 75%:** typically **0–1 interaction**, mainly if a visual direction remains ambiguous after integration.
- **75% -> 100%:** typically **1–2 interactions**, including the final visual/product review.

Estimated total remaining PO interactions under normal execution: **1–5**, excluding optional reviews requested by the PO.

## Aesthetic asset register

| Asset ID | Asset | Type | Status | Source / generated by | Canonical use | Storage / location | Notes |
|---|---|---|---|---|---|---|---|
| CRN-AST-001 | **Logo ICA** | SVG | PROVIDED / IMMUTABLE | Product Owner source | Primary ICA identity / Home anchor | Source attachment: `Logo di in Cerca di Avventura.svg`; production destination to be registered in repo before integration | **Must not be altered.** Only surrounding container, spacing and external treatment may change. |
| CRN-REF-001 | Copilot Cronache full-page visual reference | PNG | REFERENCE_ONLY | Copilot / Designer | Visual benchmark only | Source attachment: `Designer (1).png` | Not a production asset; must be reverse-engineered/rationalized. |
| CRN-REF-002 | Copilot Cronache full-page reference | PDF | REFERENCE_ONLY | Copilot / Designer | Verification/reference | Source attachment: `Designer.pdf` | Same composition as visual reference; useful for inspection. |
| CRN-REF-003 | Copilot functional brief | DOCX | REFERENCE_ONLY | Copilot | Functional/IA evidence | Source attachment: `Copilot-Cronache-part 1.docx` | Reconciled against current PO decisions. |
| CRN-REF-004 | Copilot art direction + reverse engineering | DOCX | REFERENCE_ONLY | Copilot | Visual/system evidence | Source attachment: `Copilot-Cronache - part 2.docx` | Not canonical by itself. |
| CRN-AST-010 | Architectural outer frame system | CSS/SVG + optional raster texture | NOT_STARTED | To be generated/reconstructed | Page shell | Planned repo family: `assets/ui/cronache/` | Exact filenames assigned at production time. |
| CRN-AST-011 | Logo ICA architectural host/container | CSS/SVG | NOT_STARTED | To be generated/reconstructed | Navigation/header | Planned repo family: `assets/ui/cronache/` and CSS | Does not modify CRN-AST-001. |
| CRN-AST-012 | Hero/archive threshold ornaments | SVG/CSS | NOT_STARTED | To be generated/reconstructed | Cronache title region | Planned repo family: `assets/ui/cronache/` | Keep decorative density restrained. |
| CRN-AST-013 | Archive search/filter frame ornaments | SVG/CSS | NOT_STARTED | To be generated/reconstructed | Search/filter register | Planned repo family: `assets/ui/cronache/` | Core controls stay semantic HTML. |
| CRN-AST-014 | Season chapter header ornament | SVG | NOT_STARTED | To be generated/reconstructed | Year/season grouping | Planned repo family: `assets/ui/cronache/` | Reusable. |
| CRN-AST-015 | Event record frame/corners | SVG/CSS | NOT_STARTED | To be generated/reconstructed | Event records | Planned repo family: `assets/ui/cronache/` | Text/data remain HTML. |
| CRN-AST-016 | Status skull — FUTURA | SVG preferred | NOT_STARTED | To be generated | Future event status | Planned repo family: `assets/ui/cronache/status/` | Icon always paired with text. |
| CRN-AST-017 | Status skull — IN CORSO | SVG preferred / raster only if needed | NOT_STARTED | To be generated | Ongoing event status | Planned repo family: `assets/ui/cronache/status/` | Ember effect restrained. |
| CRN-AST-018 | Status skull — CONCLUSA | SVG + restrained effect / raster only if needed | NOT_STARTED | To be generated | Completed event status | Planned repo family: `assets/ui/cronache/status/` | Flames from eyes; no cartoon/game-HUD treatment. |
| CRN-AST-019 | Metadata icon set | SVG | NOT_STARTED | To be generated/reconstructed | Date/place/format/players/winner | Planned repo family: `assets/ui/cronache/icons/` | Consistent stroke/fill family. |
| CRN-AST-020 | Archive divider / closing ornament | SVG | NOT_STARTED | To be generated/reconstructed | Section transitions / closing | Planned repo family: `assets/ui/cronache/` | Optional if CSS alone achieves fidelity. |

## Asset storage rule

Every newly generated aesthetic asset must be entered here **before or in the same coherent change that installs it**. Each entry must record stable asset ID, exact repository path, file type, status, dependent components, provenance, and replacement/deprecation notes.

No generated asset is considered canonical merely because it exists in the repository.

## Current visual/reference constraints

1. `Logo ICA` is the required identity asset and cannot be modified.
2. The fictional Copilot shield containing crown / ICA text / skull must be removed rather than recreated.
3. Cronache uses the same canonical primary navigation as Home: `Le Adunanze / Cronache / Avventurieri / Alleanze / Proclami`, with Logo ICA as Home anchor.
4. Working subtitle: `Archivio di Adunanze, Leghe, Duelli e Giostre`; clarity takes precedence over poetic copy.
5. Metrics: `Leghe Completate` and `Giostre Completate` only; values must be derived from real data.
6. Primary grouping: year/season. Do not nest by city/place.
7. Filters: Stagione / Stato / Luogo / Lega / Formato + free-text search.
8. `Lega -> Duelli`: each Lega stage is a Duello. `La Giostra` is a standalone Giostra.
9. Season/year chapters retain a small event count.
10. Closing copy `Altre Cronache attendono le future adunanze.` is ON HOLD / candidate.
11. Status visual grammar is locked: plain skull FUTURA; ember skull IN CORSO; flaming-eye skull CONCLUSA; always icon + text.
12. Copilot event names, winners, counts, places and other mock data are not factual sources.
13. Real event records must use verified information from official/event source material.
14. `assets/hero-fantasy.webp` remains ON HOLD / DO NOT USE unless the PO explicitly reopens it.
15. Visual quality is a milestone gate, not a post-production polish task.

## Update discipline

This file must be updated whenever any of the following occurs: a task changes state; estimated PO interaction count materially changes; a new aesthetic asset is generated; an asset is installed/relocated/replaced/deprecated/rejected; a milestone gate is passed; or a new factual/content dependency is identified.

The register is intended to remain the single operational status view for the Cronache implementation.