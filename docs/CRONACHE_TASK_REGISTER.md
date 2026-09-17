# Cronache — Task & Asset Register

**Purpose:** persistent execution register for the Cronache page. Tracks work state, expected PO interactions, milestone gates and aesthetic assets with exact storage paths.

**Current product rule:** **Cronache = Events / Stages page** for the current phase.

**Visual priority:** visual quality has equal weight to functional correctness.

## Status legend
`NOT_STARTED` · `IN_DEVELOPMENT` · `WAITING_PO` · `BLOCKED` · `COMPLETED` · `RECHECK_REQUIRED`

## Milestone register

| ID | Milestone | Task | Status | PO interactions estimated | Note |
|---|---|---|---|---:|---|
| CRN-25-01 | 25% | Purpose / terminology / canonical navigation | COMPLETED | 0 | Cronache = Eventi/Tappe |
| CRN-25-02 | 25% | Grouping / filters / metrics / status semantics | COMPLETED | 0 | Year/season; locked filter set |
| CRN-25-03 | 25% | Real La Giostra + BOG#1 data mapping | COMPLETED | 0 | `data/cronache-events.json` |
| CRN-25-04 | 25% | Avventurieri display-name seed | COMPLETED | 0 | `data/avventurieri-seed.json` |
| CRN-25-05 | 25% | Implementation specification | COMPLETED | 0 | `docs/CRONACHE_IMPLEMENTATION_SPEC.md` |
| CRN-25-06 | 25% | Closing inscription | WAITING_PO | 1 | Candidate ON HOLD; non-blocking |
| CRN-50-01 | 50% | Architectural frame / threshold / archive ledger | COMPLETED | 0 | Installed in Beta |
| CRN-50-02 | 50% | Logo ICA architectural host | COMPLETED | 0 | Host only; artwork untouched |
| CRN-50-03 | 50% | Exact Logo ICA production-source transfer | IN_DEVELOPMENT | 0–1 | Original SVG source recovered exactly; repository installation still open |
| CRN-50-04 | 50% | Season header + Event Record visual anatomy | COMPLETED | 0 | Responsive archival pattern |
| CRN-50-05 | 50% | Status icon family | COMPLETED | 0–1 | FUTURA / IN CORSO / CONCLUSA |
| CRN-50-06 | 50% | Metadata icon family | COMPLETED | 0 | Date/place/type/players/winner |
| CRN-50-07 | 50% | Divider / ornaments / tokens / responsive rules | COMPLETED | 0 | CSS/SVG system |
| CRN-50-08 | 50% | Internal visual QA | COMPLETED | 0 | `docs/CRONACHE_M50_VISUAL_QA.md` |
| CRN-75-01 | 75% | Data-driven Cronache Beta | COMPLETED | 0 | `beta/cronache/` renders from JSON source |
| CRN-75-02 | 75% | Populate La Giostra real data | COMPLETED | 0 | Date remains explicitly unverified |
| CRN-75-03 | 75% | Populate BOG#1 real data | COMPLETED | 0 | Concluded Duello I |
| CRN-75-04 | 75% | Add verified future Blaze of Glory schedule | COMPLETED | 0 | Duelli II–VIII added; unknown formats stay undefined |
| CRN-75-05 | 75% | Functional search + 5 filters | COMPLETED | 0 | Stagione/Stato/Luogo/Lega/Formato + free search |
| CRN-75-06 | 75% | Conditional FUTURA / IN CORSO / CONCLUSA states | COMPLETED | 0 | Renderer supports all; no invented ongoing event |
| CRN-75-07 | 75% | Desktop/tablet/mobile implementation | COMPLETED | 0 | Responsive system inherited/refined from M50 |
| CRN-75-08 | 75% | Accessibility / keyboard / focus / reduced-motion QA | COMPLETED | 0 | Code-level gate documented in M75 QA |
| CRN-75-09 | 75% | Runtime visual QA at target widths | IN_DEVELOPMENT | 0–1 | Rendered PO-facing comparison remains final visual gate |
| CRN-75-10 | 75% | Functional QA register | COMPLETED | 0 | `docs/CRONACHE_M75_FUNCTIONAL_QA.md` |
| CRN-75-11 | 75% | Search/filter regression fix | COMPLETED | 0 | Normalized selected values |
| CRN-100-01 | 100% | Final ornamental / illustrative refinement | IN_DEVELOPMENT | 0–1 | Aesthetic Deep Pass 1 implemented; orientation cleanup complete |
| CRN-100-02 | 100% | Empty / loading / error states | COMPLETED | 0 | Implemented in M75 |
| CRN-100-03 | 100% | Event-detail routing hooks / contract | IN_DEVELOPMENT | 0 | Official-result links exist; native detail pages later scope |
| CRN-100-04 | 100% | SEO / metadata / social preview QA | COMPLETED | 0 | Canonical + OG/Twitter metadata |
| CRN-100-05 | 100% | Performance / asset-weight optimization | COMPLETED | 0 | CSS/SVG-first |
| CRN-100-06 | 100% | Final visual regression | IN_DEVELOPMENT | 0–1 | Deep-pass cross-width review pending |
| CRN-100-07 | 100% | Final content-truth audit | COMPLETED | 0 | Undefined facts remain undefined |
| CRN-100-08 | 100% | PO final visual review | NOT_STARTED | 1 | Final approval gate |
| CRN-100-09 | 100% | Visible filter-result feedback + reset | COMPLETED | 0 | Result count + `Ripristina i filtri` |
| CRN-100-10 | 100% | Production-readiness audit | COMPLETED | 0 | `docs/CRONACHE_M100_PRODUCTION_READINESS.md` |
| CRN-100-11 | 100% | Visual collision cleanup before Aesthetic Deep Pass | COMPLETED | 0 | Safe areas and reset-control restyle complete |
| CRN-100-12 | 100% | Aesthetic Deep Pass 1 — frame/sigils/records/ledger | COMPLETED | 0–1 | `beta/cronache/m100-aesthetic.css` + new SVG assets |
| CRN-100-13 | 100% | PO visual adjustments — logo diamond / filter offset / pending-detail fit | COMPLETED | 0 | Diamond reduced; filter summary shifted +0.5 cm; pending-detail font reduced |
| CRN-100-14 | 100% | Ornamental Orientation Cleanup | COMPLETED | 0 | Explicit TL/TR/BL/BR variants for frame and record corners; `m100-orientation.css` |
| CRN-100-15 | 100% | Daily review + risk analysis | COMPLETED | 0 | `docs/CRONACHE_DAILY_REVIEW_2026-09-17.md` |

## Milestone snapshot

- **25%:** COMPLETED and merged.
- **50%:** visual baseline completed; exact Logo ICA production-source installation remains open.
- **75% functional implementation:** COMPLETED.
- **100%:** Aesthetic Deep Pass 1, first PO correction pass and ornamental-orientation cleanup completed. Remaining blockers are exact Logo ICA installation, rendered visual acceptance, CSS consolidation and final PO approval.

Current page outputs:
- `beta/cronache/index.html`
- `beta/cronache/style.css`
- `beta/cronache/m75.css`
- `beta/cronache/m100.css`
- `beta/cronache/m100-aesthetic.css`
- `beta/cronache/m100-orientation.css`
- `beta/cronache/main.js`
- `data/cronache-events.json`
- `docs/CRONACHE_DAILY_REVIEW_2026-09-17.md`

## PO interaction budget

- Deep-pass rendered review: **0–1** interaction.
- Final visual approval: **1** interaction.

Estimated remaining PO interactions under normal execution: **1–2**, excluding optional reviews requested by PO.

## Aesthetic asset register

| Asset ID | Asset | Type | Status | Storage / location | Notes |
|---|---|---|---|---|---|
| CRN-AST-001 | Logo ICA original | SVG | PROVIDED / IMMUTABLE | Conversation source `Logo di in Cerca di Avventura.svg` | Exact source recovered; never alter artwork |
| CRN-AST-001-PNG | Logo ICA lossless working representation | PNG | PROVIDED / IMMUTABLE_WORKING_COPY | Conversation source `logo_ica_lossless.png` | Do not redraw logo |
| CRN-AST-001-R | Existing emblem proxy | WEBP | TEMPORARY_LAYOUT_PROXY | `assets/logo-emblem.webp` | Retire when original Logo ICA is installed |
| CRN-AST-010 | Architectural frame | CSS | INSTALLED_PREVIEW | `beta/cronache/style.css` + `m100.css` + `m100-aesthetic.css` | Deepened rails / shell |
| CRN-AST-011 | Logo host | CSS | INSTALLED_PREVIEW | `beta/cronache/m100-aesthetic.css` | Architectural niche; diamond reduced after PO review |
| CRN-AST-012 | Archive threshold | CSS | INSTALLED_PREVIEW | `beta/cronache/m100-aesthetic.css` + `m100-orientation.css` | Four corners explicitly oriented |
| CRN-AST-013 | Search/filter ledger | CSS | INSTALLED_PREVIEW | `beta/cronache/m100-aesthetic.css` + `m100-orientation.css` | Oriented corners; summary shifted +0.5 cm right |
| CRN-AST-014 | Season ornament | SVG | GENERATED / INSTALLED | `assets/ui/cronache/season-ornament.svg` | Reusable |
| CRN-AST-015 | Event record frame | CSS | INSTALLED_PREVIEW | `beta/cronache/m100-aesthetic.css` + `m100-orientation.css` | Oriented archival corner system |
| CRN-AST-016 | Skull FUTURA | SVG | GENERATED / INSTALLED | `assets/ui/cronache/status/skull-futura.svg` | Icon + text |
| CRN-AST-017 | Skull IN CORSO | SVG | GENERATED / INSTALLED | `assets/ui/cronache/status/skull-in-corso.svg` | Ember treatment |
| CRN-AST-018 | Skull CONCLUSA | SVG | GENERATED / INSTALLED | `assets/ui/cronache/status/skull-conclusa.svg` | Flaming eyes |
| CRN-AST-019A | Metadata date | SVG | GENERATED / INSTALLED | `assets/ui/cronache/icons/date.svg` | Event metadata |
| CRN-AST-019B | Metadata place | SVG | GENERATED / INSTALLED | `assets/ui/cronache/icons/place.svg` | Event metadata |
| CRN-AST-019C | Metadata type/format | SVG | GENERATED / INSTALLED | `assets/ui/cronache/icons/format.svg` | Event metadata |
| CRN-AST-019D | Metadata players | SVG | GENERATED / INSTALLED | `assets/ui/cronache/icons/players.svg` | Completed results |
| CRN-AST-019E | Metadata winner | SVG | GENERATED / INSTALLED | `assets/ui/cronache/icons/winner.svg` | Completed results |
| CRN-AST-020 | Archive divider | SVG | GENERATED / INSTALLED | `assets/ui/cronache/archive-divider.svg` | Closing copy still ON HOLD |
| CRN-AST-021 | Reset-filter control styling | CSS | GENERATED / INSTALLED | `beta/cronache/m100.css` `.reset-filters` | Parchment/gold/iron |
| CRN-AST-022 | Architectural frame corner master TL | SVG | GENERATED / INSTALLED | `assets/ui/cronache/frame-corner.svg` | Master top-left ornament |
| CRN-AST-022TR | Architectural frame corner TR | SVG | GENERATED / INSTALLED | `assets/ui/cronache/frame-corner-tr.svg` | Horizontal mirror of master |
| CRN-AST-022BL | Architectural frame corner BL | SVG | GENERATED / INSTALLED | `assets/ui/cronache/frame-corner-bl.svg` | Vertical mirror of master |
| CRN-AST-022BR | Architectural frame corner BR | SVG | GENERATED / INSTALLED | `assets/ui/cronache/frame-corner-br.svg` | Horizontal + vertical mirror |
| CRN-AST-023 | Archival record corner master TL | SVG | GENERATED / INSTALLED | `assets/ui/cronache/record-corner.svg` | Master top-left ornament |
| CRN-AST-023TR | Archival record corner TR | SVG | GENERATED / INSTALLED | `assets/ui/cronache/record-corner-tr.svg` | Horizontal mirror of master |
| CRN-AST-023BL | Archival record corner BL | SVG | GENERATED / INSTALLED | `assets/ui/cronache/record-corner-bl.svg` | Vertical mirror of master |
| CRN-AST-023BR | Archival record corner BR | SVG | GENERATED / INSTALLED | `assets/ui/cronache/record-corner-br.svg` | Horizontal + vertical mirror |
| CRN-AST-024 | Archive sigil | SVG | GENERATED / INSTALLED | `assets/ui/cronache/archive-sigil.svg` | Nav / threshold / status / footer accent |
| CRN-AST-025 | Aesthetic Deep Pass layer | CSS | GENERATED / INSTALLED | `beta/cronache/m100-aesthetic.css` | Isolated final-art layer |
| CRN-AST-026 | Ornament orientation layer | CSS | GENERATED / INSTALLED | `beta/cronache/m100-orientation.css` | Explicit orientation mapping; loaded last |

## Current constraints

1. Logo ICA immutable; Copilot fictional crest never recreated.
2. Canonical nav shared with Home.
3. Subtitle: `Archivio di Adunanze, Leghe, Duelli e Giostre`.
4. Metrics: `Leghe Completate` / `Giostre Completate`, calculated from data.
5. Grouping: year/season; no city nesting.
6. Filters: Stagione / Stato / Luogo / Lega / Formato + search.
7. Lega → Duelli; La Giostra = standalone Giostra.
8. Closing copy remains ON HOLD.
9. Status grammar locked.
10. No fictional facts may appear as real.
11. `assets/hero-fantasy.webp` remains ON HOLD / DO NOT USE.
12. Visual quality remains a milestone gate.
13. Reset-control wording is `Ripristina i filtri`.
14. Corner families must use explicit orientation variants; do not repeat a TL master unchanged in other corners.

## Update discipline

Update this register whenever a task changes state, interaction estimate changes, an asset is generated/installed/relocated/replaced/deprecated, a milestone gate passes, or a factual dependency emerges.
