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
| CRN-50-03 | 50% | Exact Logo ICA production-source transfer | IN_DEVELOPMENT | 0–1 | Original SVG recovered from conversation files; repo transfer still pending due binary-source handling |
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
| CRN-75-09 | 75% | Runtime visual QA at target widths | NOT_STARTED | 0–1 | Requires rendered comparison; major subjective differences only escalate |
| CRN-75-10 | 75% | Functional QA register | COMPLETED | 0 | `docs/CRONACHE_M75_FUNCTIONAL_QA.md` |
| CRN-100-01 | 100% | Final ornamental / illustrative refinement | NOT_STARTED | 0–1 | After runtime visual review |
| CRN-100-02 | 100% | Empty / loading / error states | COMPLETED | 0 | Implemented in M75 |
| CRN-100-03 | 100% | Event-detail routing hooks / contract | IN_DEVELOPMENT | 0 | Official-result links exist for concluded events; native detail pages later |
| CRN-100-04 | 100% | SEO / metadata / social preview QA | NOT_STARTED | 0 | Production gate |
| CRN-100-05 | 100% | Performance / asset-weight optimization | NOT_STARTED | 0 | Preserve fidelity |
| CRN-100-06 | 100% | Final visual regression | NOT_STARTED | 0 | Cross-width/states |
| CRN-100-07 | 100% | Final content-truth audit | IN_DEVELOPMENT | 0 | M75 truth checks passed; final audit later |
| CRN-100-08 | 100% | PO final visual review | NOT_STARTED | 1 | Final approval gate |

## Milestone snapshot

- **25%:** COMPLETED and merged.
- **50%:** visual baseline completed; exact Logo ICA production-source transfer remains open.
- **75% functional implementation:** COMPLETED in branch `feature/cronache-m75-functional-beta`; runtime visual comparison remains the only M75 visual gate not yet executed.
- **100%:** partial groundwork only.

Current page outputs:
- `beta/cronache/index.html`
- `beta/cronache/style.css`
- `beta/cronache/m75.css`
- `beta/cronache/main.js`
- `data/cronache-events.json`

## PO interaction budget

- Remaining M75 visual gate: **0–1** interaction.
- M75 → M100: **1–2** interactions including final visual review.

Estimated remaining PO interactions under normal execution: **1–3**, excluding optional reviews requested by PO.

## Aesthetic asset register

| Asset ID | Asset | Type | Status | Storage / location | Notes |
|---|---|---|---|---|---|
| CRN-AST-001 | Logo ICA original | SVG | PROVIDED / IMMUTABLE | Conversation source `Logo di in Cerca di Avventura.svg` | Recovered; never alter artwork |
| CRN-AST-001-R | Existing emblem proxy | WEBP | TEMPORARY_LAYOUT_PROXY | `assets/logo-emblem.webp` | Host/layout only |
| CRN-AST-010 | Architectural frame | CSS | INSTALLED_PREVIEW | `beta/cronache/style.css` | Shell / rails |
| CRN-AST-011 | Logo host | CSS | INSTALLED_PREVIEW | `beta/cronache/style.css` `.logo-host` | No logo alteration |
| CRN-AST-012 | Archive threshold | CSS | INSTALLED_PREVIEW | `beta/cronache/style.css` | Reference-led |
| CRN-AST-013 | Search/filter ledger | CSS | INSTALLED_PREVIEW | `beta/cronache/style.css` | Semantic controls |
| CRN-AST-014 | Season ornament | SVG | GENERATED / INSTALLED | `assets/ui/cronache/season-ornament.svg` | Reusable |
| CRN-AST-015 | Event record frame | CSS | INSTALLED_PREVIEW | `beta/cronache/style.css` `.event-record` | Data stays HTML |
| CRN-AST-016 | Skull FUTURA | SVG | GENERATED / INSTALLED | `assets/ui/cronache/status/skull-futura.svg` | Icon + text |
| CRN-AST-017 | Skull IN CORSO | SVG | GENERATED / INSTALLED | `assets/ui/cronache/status/skull-in-corso.svg` | Ember treatment |
| CRN-AST-018 | Skull CONCLUSA | SVG | GENERATED / INSTALLED | `assets/ui/cronache/status/skull-conclusa.svg` | Flaming eyes |
| CRN-AST-019A | Metadata date | SVG | GENERATED / INSTALLED | `assets/ui/cronache/icons/date.svg` | Event metadata |
| CRN-AST-019B | Metadata place | SVG | GENERATED / INSTALLED | `assets/ui/cronache/icons/place.svg` | Event metadata |
| CRN-AST-019C | Metadata type/format | SVG | GENERATED / INSTALLED | `assets/ui/cronache/icons/format.svg` | Event metadata |
| CRN-AST-019D | Metadata players | SVG | GENERATED / INSTALLED | `assets/ui/cronache/icons/players.svg` | Completed results |
| CRN-AST-019E | Metadata winner | SVG | GENERATED / INSTALLED | `assets/ui/cronache/icons/winner.svg` | Completed results |
| CRN-AST-020 | Archive divider | SVG | GENERATED / INSTALLED | `assets/ui/cronache/archive-divider.svg` | Closing copy still ON HOLD |

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

## Update discipline

Update this register whenever a task changes state, interaction estimate changes, an asset is generated/installed/relocated/replaced/deprecated, a milestone gate passes, or a factual dependency emerges.
