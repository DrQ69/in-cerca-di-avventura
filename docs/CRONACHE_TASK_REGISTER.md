# Cronache — Task & Asset Register

**Purpose:** persistent execution register for the Cronache page. Tracks work state, expected PO interactions, milestone gates and aesthetic assets with exact storage paths.

**Current product rule:** **Cronache = Events / Stages page** for the current phase.

**Visual priority:** visual quality has equal weight to functional correctness.

**Latest PO alignment:** navigation / terminology / grouping / filters / domain relationships / status grammar resolved on 2026-09-17. See `docs/CRONACHE_DECISIONS_2026-09-17.md`.

## Status legend

`NOT_STARTED` · `IN_DEVELOPMENT` · `WAITING_PO` · `BLOCKED` · `COMPLETED` · `RECHECK_REQUIRED`

## Milestone register

| ID | Milestone | Task | Status | PO interactions estimated | Note |
|---|---|---|---|---:|---|
| CRN-25-01 | 25% | Consolidate Cronache purpose / terminology / navigation | COMPLETED | 0 | Canonical scope locked |
| CRN-25-02 | 25% | Lock grouping, filters, metrics and status semantics | COMPLETED | 0 | Year/season; Search + Stagione/Stato/Luogo/Lega/Formato |
| CRN-25-03 | 25% | Map real La Giostra and BOG#1 data | COMPLETED | 0 | `data/cronache-events.json` |
| CRN-25-04 | 25% | Seed Avventurieri display-name registry | COMPLETED | 0 | `data/avventurieri-seed.json` |
| CRN-25-05 | 25% | Produce implementation specification | COMPLETED | 0 | `docs/CRONACHE_IMPLEMENTATION_SPEC.md` |
| CRN-25-06 | 25% | Resolve closing inscription | WAITING_PO | 1 | Candidate remains ON HOLD; non-blocking |
| CRN-50-01 | 50% | Architectural page frame system | COMPLETED | 0 | CSS shell integrated |
| CRN-50-02 | 50% | Logo ICA architectural host | COMPLETED | 0 | Host complete; logo artwork never altered |
| CRN-50-03 | 50% | Exact Logo ICA production-source transfer | IN_DEVELOPMENT | 0–1 | Exact supplied SVG is available to the working environment but not yet committed as production source; preview uses existing project render only as temporary layout proxy |
| CRN-50-04 | 50% | Archive threshold / title system | COMPLETED | 0 | Compact, reference-led, functional subtitle |
| CRN-50-05 | 50% | Search + Filter Register visual system | COMPLETED | 0 | Semantic HTML + parchment treatment |
| CRN-50-06 | 50% | Season / Year chapter component | COMPLETED | 0 | Reusable SVG ornament + count |
| CRN-50-07 | 50% | Event Record visual anatomy | COMPLETED | 0 | Responsive archival record |
| CRN-50-08 | 50% | Status icon family FUTURA / IN CORSO / CONCLUSA | COMPLETED | 0–1 | SVG family generated and installed |
| CRN-50-09 | 50% | Metadata icon family | COMPLETED | 0 | Date/place/type/players/winner SVG family installed |
| CRN-50-10 | 50% | Divider / restrained ornament system | COMPLETED | 0 | Season ornament + archive divider + CSS frame corners |
| CRN-50-11 | 50% | Typography/material/border/spacing tokens | COMPLETED | 0 | Encoded in `beta/cronache/style.css` |
| CRN-50-12 | 50% | Responsive simplification rules | COMPLETED | 0 | Desktop/tablet/mobile recomposition |
| CRN-50-13 | 50% | Internal visual QA against reference and ICA rules | COMPLETED | 0 | `docs/CRONACHE_M50_VISUAL_QA.md`; runtime screenshots remain M75/M100 gate |
| CRN-75-01 | 75% | Implement Cronache Beta page in repository | IN_DEVELOPMENT | 0 | Preview live path `beta/cronache/` |
| CRN-75-02 | 75% | Populate La Giostra real data | IN_DEVELOPMENT | 0 | Winner/player count verified; date deliberately unverified |
| CRN-75-03 | 75% | Populate BOG#1 real data | IN_DEVELOPMENT | 0 | Real concluded Duello I data |
| CRN-75-04 | 75% | Add sufficiently verified future BOG stages | IN_DEVELOPMENT | 0–1 | Duello II present; remaining schedule pending controlled expansion |
| CRN-75-05 | 75% | Functional search and filters | IN_DEVELOPMENT | 0 | Search + all five locked filters; season filter now functional |
| CRN-75-06 | 75% | Conditional FUTURA / IN CORSO / CONCLUSA content states | IN_DEVELOPMENT | 0 | Future + completed exercised; ongoing component ready, no real current ongoing record |
| CRN-75-07 | 75% | Desktop/tablet/mobile implementation | IN_DEVELOPMENT | 0 | Runtime visual QA pending |
| CRN-75-08 | 75% | Accessibility / keyboard / focus / reduced-motion QA | IN_DEVELOPMENT | 0 | Core behaviors implemented; formal QA pending |
| CRN-75-09 | 75% | Runtime visual QA at target widths | NOT_STARTED | 0–1 | Escalate only major subjective visual choice |
| CRN-100-01 | 100% | Final ornamental / illustrative refinement | NOT_STARTED | 0–1 | Only after integrated runtime review |
| CRN-100-02 | 100% | Empty / loading / error states | IN_DEVELOPMENT | 0 | No-results implemented; loading/error remain |
| CRN-100-03 | 100% | Event-detail routing hooks / contract | NOT_STARTED | 0 | Detail pages may follow later |
| CRN-100-04 | 100% | SEO / metadata / social preview QA | NOT_STARTED | 0 | Production gate |
| CRN-100-05 | 100% | Performance / asset-weight optimization | NOT_STARTED | 0 | Preserve fidelity |
| CRN-100-06 | 100% | Final visual regression | NOT_STARTED | 0 | Cross-width and state review |
| CRN-100-07 | 100% | Final content-truth audit | NOT_STARTED | 0 | No fictional data as real |
| CRN-100-08 | 100% | PO final visual review | NOT_STARTED | 1 | Final approval gate |

## Milestone snapshot

- **25%:** COMPLETED and merged.
- **50%:** internal visual baseline completed; exact Logo ICA production-source transfer remains an identity dependency carried forward. M50 visual review: `docs/CRONACHE_M50_VISUAL_QA.md`.
- **75%:** active.
- **100%:** not started except early no-results work.

## PO interaction budget

- M50 → M75: **0–1** likely interaction, only if exact logo-source handling or a genuinely subjective visual conflict requires it.
- M75 → M100: **1–2** likely interactions, including final visual review.

Estimated remaining PO interactions under normal execution: **1–3**, excluding optional reviews requested by PO.

## Aesthetic asset register

| Asset ID | Asset | Type | Status | Source / generated by | Storage / location | Notes |
|---|---|---|---|---|---|---|
| CRN-AST-001 | **Logo ICA** | SVG source | PROVIDED / IMMUTABLE | Product Owner | Working source: `Logo di in Cerca di Avventura.svg`; production repo source pending transfer | Must never be redrawn/recoloured/altered |
| CRN-AST-001-R | Existing project emblem render | WEBP | TEMPORARY_LAYOUT_PROXY | Existing project asset | `assets/logo-emblem.webp` | Exercises host/layout only; does not redefine Logo ICA |
| CRN-REF-001 | Copilot Cronache visual reference | PNG | REFERENCE_ONLY | Copilot / Designer | `Designer (1).png` source attachment | Benchmark only |
| CRN-REF-002 | Copilot Cronache reference | PDF | REFERENCE_ONLY | Copilot / Designer | `Designer.pdf` source attachment | Inspection backup |
| CRN-REF-003 | Copilot functional brief | DOCX | REFERENCE_ONLY | Copilot | `Copilot-Cronache-part 1.docx` source attachment | Reconciled with PO decisions |
| CRN-REF-004 | Copilot art direction / reverse engineering | DOCX | REFERENCE_ONLY | Copilot | `Copilot-Cronache - part 2.docx` source attachment | Evidence, not canon by itself |
| CRN-AST-010 | Architectural outer frame system | CSS | INSTALLED_PREVIEW | Generated/reconstructed | `beta/cronache/style.css` | Shell / side rails |
| CRN-AST-011 | Logo ICA architectural host | CSS | INSTALLED_PREVIEW | Generated/reconstructed | `beta/cronache/style.css` `.logo-host` | Does not modify logo |
| CRN-AST-012 | Archive threshold ornaments | CSS | INSTALLED_PREVIEW | Generated/reconstructed | `beta/cronache/style.css` `.archive-threshold` | Restrained density |
| CRN-AST-013 | Search/filter register frame | CSS | INSTALLED_PREVIEW | Generated/reconstructed | `beta/cronache/style.css` `.ledger` | Controls remain semantic HTML |
| CRN-AST-014 | Season chapter ornament | SVG | GENERATED / INSTALLED_PREVIEW | Generated | `assets/ui/cronache/season-ornament.svg` | Reusable |
| CRN-AST-015 | Event record frame / corners | CSS | INSTALLED_PREVIEW | Generated/reconstructed | `beta/cronache/style.css` `.event-record` | Data stays HTML |
| CRN-AST-016 | Status skull — FUTURA | SVG | GENERATED / INSTALLED_PREVIEW | Generated | `assets/ui/cronache/status/skull-futura.svg` | Icon + text always |
| CRN-AST-017 | Status skull — IN CORSO | SVG | GENERATED / INSTALLED_PREVIEW | Generated | `assets/ui/cronache/status/skull-in-corso.svg` | Restrained ember |
| CRN-AST-018 | Status skull — CONCLUSA | SVG | GENERATED / INSTALLED_PREVIEW | Generated | `assets/ui/cronache/status/skull-conclusa.svg` | Restrained eye flames |
| CRN-AST-019A | Metadata — date | SVG | GENERATED / INSTALLED_PREVIEW | Generated | `assets/ui/cronache/icons/date.svg` | Event metadata |
| CRN-AST-019B | Metadata — place | SVG | GENERATED / INSTALLED_PREVIEW | Generated | `assets/ui/cronache/icons/place.svg` | Event metadata |
| CRN-AST-019C | Metadata — format/type | SVG | GENERATED / INSTALLED_PREVIEW | Generated | `assets/ui/cronache/icons/format.svg` | Event metadata |
| CRN-AST-019D | Metadata — players | SVG | GENERATED / INSTALLED_PREVIEW | Generated | `assets/ui/cronache/icons/players.svg` | Completed-event results |
| CRN-AST-019E | Metadata — winner | SVG | GENERATED / INSTALLED_PREVIEW | Generated | `assets/ui/cronache/icons/winner.svg` | Completed-event results |
| CRN-AST-020 | Archive divider | SVG | GENERATED / INSTALLED_PREVIEW | Generated | `assets/ui/cronache/archive-divider.svg` | Closing copy remains ON HOLD |

## Current constraints

1. Logo ICA is immutable.
2. Copilot fictional crest is removed and never recreated.
3. Canonical nav is shared with Home.
4. Subtitle favors functional clarity.
5. Metrics are only Leghe Completate / Giostre Completate and data-derived.
6. Grouping is year/season; no city nesting.
7. Filters are Stagione / Stato / Luogo / Lega / Formato + search.
8. Lega → Duelli; La Giostra = standalone Giostra.
9. Season event count retained.
10. Closing copy remains ON HOLD / candidate.
11. Status visual grammar locked.
12. Copilot mock facts are not sources.
13. Real event records use verified source material.
14. `assets/hero-fantasy.webp` remains ON HOLD / DO NOT USE.
15. Visual quality is a milestone gate.

## Update discipline

Update this register whenever a task changes state, interaction estimate changes, an asset is generated/installed/relocated/replaced/deprecated, a milestone gate passes, or a factual dependency emerges.
