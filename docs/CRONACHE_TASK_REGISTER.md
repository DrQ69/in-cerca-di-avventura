# Cronache — Task & Asset Register

**Purpose:** persistent execution register for the Cronache page. Tracks work state, estimated PO interactions and aesthetic assets with storage locations.

**Current product rule:** **Cronache = Events / Stages page** for the current phase.

**Visual priority:** visual quality has equal weight to functional correctness.

**Latest PO alignment:** navigation / terminology / grouping / filters / domain relationships / status grammar resolved on 2026-09-17. See `docs/CRONACHE_DECISIONS_2026-09-17.md`.

## Status legend

`NOT_STARTED` · `IN_DEVELOPMENT` · `WAITING_PO` · `BLOCKED` · `COMPLETED` · `RECHECK_REQUIRED`

## Milestone register

| ID | Milestone | Task | Status | PO interactions estimated | Note |
|---|---|---|---|---:|---|
| CRN-25-01 | 25% | Consolidate Cronache functional purpose and terminology | COMPLETED | 0 | Cronache = Eventi/Tappe; functional clarity first |
| CRN-25-02 | 25% | Lock canonical navigation | COMPLETED | 0 | Le Adunanze / Cronache / Avventurieri / Alleanze / Proclami; Logo ICA = Home |
| CRN-25-03 | 25% | Define immutable Logo ICA integration requirement | COMPLETED | 0 | Actual architectural host is built at M50 |
| CRN-25-04 | 25% | Define subtitle | COMPLETED | 0 | `Archivio di Adunanze, Leghe, Duelli e Giostre` |
| CRN-25-05 | 25% | Define archive metrics | COMPLETED | 0 | `Leghe Completate` / `Giostre Completate`, data-derived only |
| CRN-25-06 | 25% | Rationalize search/filter set | COMPLETED | 0 | Search + Stagione / Stato / Luogo / Lega / Formato |
| CRN-25-07 | 25% | Lock grouping strategy | COMPLETED | 0 | Year/season primary; no city nesting |
| CRN-25-08 | 25% | Lock `Lega -> Duelli` and standalone `Giostra` semantics | COMPLETED | 0 | Blaze of Glory = Lega; each stage = Duello; La Giostra = Giostra |
| CRN-25-09 | 25% | Map real **La Giostra** data | COMPLETED | 0 | `data/cronache-events.json`; date intentionally unverified/null |
| CRN-25-10 | 25% | Map real **Gothic Draft BOG#1** data | COMPLETED | 0 | `data/cronache-events.json` |
| CRN-25-11 | 25% | Lock FUTURA / IN CORSO / CONCLUSA grammar | COMPLETED | 0 | Plain skull / ember / flaming eyes + explicit text |
| CRN-25-12 | 25% | Produce definitive shell/component production specification | COMPLETED | 0 | `docs/CRONACHE_IMPLEMENTATION_SPEC.md` |
| CRN-25-13 | 25% | Preserve season event count | COMPLETED | 0 | Small count in season header |
| CRN-25-14 | 25% | Resolve closing inscription | WAITING_PO | 1 | Candidate only; **non-blocking**: `Altre Cronache attendono le future adunanze.` |
| CRN-25-15 | 25% | Seed Avventurieri display-name registry from real event sources | COMPLETED | 0 | `data/avventurieri-seed.json` |
| CRN-50-01 | 50% | Build page-wide architectural frame system | NOT_STARTED | 0–1 | First visual production family |
| CRN-50-02 | 50% | Build Logo ICA host and integrate original logo unchanged | NOT_STARTED | 0 | Logo itself immutable |
| CRN-50-03 | 50% | Build Hero / Archive Threshold visual system | NOT_STARTED | 0–1 | Reference-led |
| CRN-50-04 | 50% | Build Search + Filter Register visual system | NOT_STARTED | 0 | HTML/CSS-first |
| CRN-50-05 | 50% | Build Season / Year chapter header | NOT_STARTED | 0 | Reusable |
| CRN-50-06 | 50% | Build Event Record component | NOT_STARTED | 0 | Responsive reusable component |
| CRN-50-07 | 50% | Generate status icon family | NOT_STARTED | 0–1 | First integrated set may need PO visual review |
| CRN-50-08 | 50% | Generate/reconstruct dividers, corners, seals and restrained ornaments | NOT_STARTED | 0–1 | Escalate only identity-level alternatives |
| CRN-50-09 | 50% | Establish typography/material/border/spacing tokens | NOT_STARTED | 0 | Derived from ICA direction + reference |
| CRN-50-10 | 50% | Define responsive simplification rules | NOT_STARTED | 0 | Desktop/tablet/mobile |
| CRN-50-11 | 50% | Visual QA against Copilot reference and ICA rules | NOT_STARTED | 0 | Internal 50% gate |
| CRN-75-01 | 75% | Implement Cronache Beta page in repository | NOT_STARTED | 0 | Branch -> QA -> PR -> merge |
| CRN-75-02 | 75% | Populate La Giostra real data | NOT_STARTED | 0 | No inference of winner/date |
| CRN-75-03 | 75% | Populate BOG#1 real data | NOT_STARTED | 0 | Preserve Lega -> Duello |
| CRN-75-04 | 75% | Add sufficiently verified future BOG stages | NOT_STARTED | 0–1 | Ask only on genuine factual uncertainty |
| CRN-75-05 | 75% | Implement functional search and filters | NOT_STARTED | 0 | Search + five locked filters |
| CRN-75-06 | 75% | Implement conditional event states | NOT_STARTED | 0 | No final outcome for future/ongoing |
| CRN-75-07 | 75% | Implement desktop/tablet/mobile layouts | NOT_STARTED | 0 | True recomposition |
| CRN-75-08 | 75% | Accessibility/keyboard/focus/reduced-motion QA | NOT_STARTED | 0 | Functional gate |
| CRN-75-09 | 75% | Visual QA at target widths | NOT_STARTED | 0–1 | Escalate only major subjective choice |
| CRN-100-01 | 100% | Refine final ornamental/illustrative assets | NOT_STARTED | 0–1 | Final art polish |
| CRN-100-02 | 100% | Add empty/no-results/loading/error states | NOT_STARTED | 0 | Same visual system |
| CRN-100-03 | 100% | Add event-detail routing hooks/contract | NOT_STARTED | 0 | Detail pages may follow later |
| CRN-100-04 | 100% | SEO/metadata/share-preview QA | NOT_STARTED | 0 | No held assets |
| CRN-100-05 | 100% | Performance and asset-weight optimization | NOT_STARTED | 0 | Preserve fidelity |
| CRN-100-06 | 100% | Final visual regression pass | NOT_STARTED | 0 | Cross-width/states |
| CRN-100-07 | 100% | Final content-truth audit | NOT_STARTED | 0 | No fictional data as real |
| CRN-100-08 | 100% | PO final visual review | NOT_STARTED | 1 | Final approval gate |

## Milestone snapshot

**M25:** functionally complete / ready for QA and merge. Closing inscription remains intentionally non-blocking and ON HOLD.

Current M25 outputs:
- `docs/CRONACHE_IMPLEMENTATION_SPEC.md`
- `data/cronache-events.json`
- `data/avventurieri-seed.json`

## PO interaction budget

- To M25 merge: **0 required** unless QA exposes a genuine product conflict.
- M25 -> M50: **0–2** likely interactions.
- M50 -> M75: **0–1** likely interaction.
- M75 -> M100: **1–2**, including final visual review.

Estimated remaining PO interactions under normal execution: **1–5**, excluding optional reviews requested by PO.

## Aesthetic asset register

| Asset ID | Asset | Type | Status | Source / generated by | Storage / location | Notes |
|---|---|---|---|---|---|---|
| CRN-AST-001 | **Logo ICA** | SVG | PROVIDED / IMMUTABLE | Product Owner | Source attachment: `Logo di in Cerca di Avventura.svg`; repo production location assigned during M50 integration | Must not be altered |
| CRN-REF-001 | Copilot Cronache visual reference | PNG | REFERENCE_ONLY | Copilot / Designer | Source attachment: `Designer (1).png` | Visual benchmark only |
| CRN-REF-002 | Copilot Cronache reference | PDF | REFERENCE_ONLY | Copilot / Designer | Source attachment: `Designer.pdf` | Inspection backup |
| CRN-REF-003 | Copilot functional brief | DOCX | REFERENCE_ONLY | Copilot | Source attachment: `Copilot-Cronache-part 1.docx` | Reconciled with PO decisions |
| CRN-REF-004 | Copilot art direction + reverse engineering | DOCX | REFERENCE_ONLY | Copilot | Source attachment: `Copilot-Cronache - part 2.docx` | Evidence, not canon by itself |
| CRN-AST-010 | Architectural outer frame system | CSS/SVG + optional raster texture | NOT_STARTED | M50 production | `assets/ui/cronache/` | Exact filename assigned at generation |
| CRN-AST-011 | Logo ICA architectural host | CSS/SVG | NOT_STARTED | M50 production | `assets/ui/cronache/` + CSS | Does not modify logo |
| CRN-AST-012 | Hero/archive threshold ornaments | SVG/CSS | NOT_STARTED | M50 production | `assets/ui/cronache/` | Restrained density |
| CRN-AST-013 | Search/filter frame ornaments | SVG/CSS | NOT_STARTED | M50 production | `assets/ui/cronache/` | Inputs stay HTML |
| CRN-AST-014 | Season chapter ornament | SVG | NOT_STARTED | M50 production | `assets/ui/cronache/` | Reusable |
| CRN-AST-015 | Event record frame/corners | SVG/CSS | NOT_STARTED | M50 production | `assets/ui/cronache/` | Data stays HTML |
| CRN-AST-016 | Status skull — FUTURA | SVG preferred | NOT_STARTED | M50 production | `assets/ui/cronache/status/` | Always paired with text |
| CRN-AST-017 | Status skull — IN CORSO | SVG preferred / raster only if needed | NOT_STARTED | M50 production | `assets/ui/cronache/status/` | Restrained ember |
| CRN-AST-018 | Status skull — CONCLUSA | SVG + restrained effect / raster only if needed | NOT_STARTED | M50 production | `assets/ui/cronache/status/` | Flaming eyes, non-cartoon |
| CRN-AST-019 | Metadata icon set | SVG | NOT_STARTED | M50 production | `assets/ui/cronache/icons/` | Date/place/format/players/winner |
| CRN-AST-020 | Archive divider / closing ornament | SVG | NOT_STARTED | M50 production | `assets/ui/cronache/` | Optional if CSS sufficient |

## Asset storage rule

Every generated aesthetic asset is registered here in the same coherent change that creates/installs it, with stable ID, exact path, type, status, provenance and dependent component.

## Current constraints

1. Logo ICA is immutable.
2. Copilot fictional crest is removed, never recreated.
3. Canonical nav is shared with Home.
4. Subtitle favors functional clarity.
5. Metrics are only Leghe Completate / Giostre Completate and data-derived.
6. Grouping is year/season; no city nesting.
7. Filters are Stagione / Stato / Luogo / Lega / Formato + search.
8. Lega -> Duelli; La Giostra = standalone Giostra.
9. Season event count retained.
10. Closing copy remains ON HOLD / candidate.
11. Status visual grammar locked.
12. Copilot mock facts are not sources.
13. Real event records use verified source material.
14. `assets/hero-fantasy.webp` remains ON HOLD / DO NOT USE.
15. Visual quality is a milestone gate.

## Update discipline

Update this register whenever a task changes state, interaction estimate changes, an asset is generated/installed/relocated/replaced/deprecated, a milestone gate passes, or a factual dependency emerges.
