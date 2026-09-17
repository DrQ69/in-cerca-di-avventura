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
| CRN-25-03 | 25% | Define immutable Logo ICA integration requirement | COMPLETED | 0 | Actual host is built at M50 |
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
| CRN-25-14 | 25% | Resolve closing inscription | WAITING_PO | 1 | Candidate only; non-blocking |
| CRN-25-15 | 25% | Seed Avventurieri display-name registry | COMPLETED | 0 | `data/avventurieri-seed.json` |
| CRN-50-01 | 50% | Build page-wide architectural frame system | COMPLETED | 0 | CSS architectural shell integrated in Cronache preview |
| CRN-50-02 | 50% | Build Logo ICA host and integrate original logo unchanged | IN_DEVELOPMENT | 0–1 | Host completed; preview currently points to existing project-owned `assets/logo-emblem.webp`. Exact supplied source SVG remains immutable and must replace/confirm production source before final gate |
| CRN-50-03 | 50% | Build Hero / Archive Threshold visual system | COMPLETED | 0 | Compact archive threshold, not marketing hero |
| CRN-50-04 | 50% | Build Search + Filter Register visual system | COMPLETED | 0 | Parchment ledger; controls remain semantic HTML |
| CRN-50-05 | 50% | Build Season / Year chapter header | COMPLETED | 0 | Reusable ornament + heading |
| CRN-50-06 | 50% | Build Event Record component | COMPLETED | 0 | Responsive document-like record implemented |
| CRN-50-07 | 50% | Generate status icon family | COMPLETED | 0–1 | FUTURA / IN CORSO / CONCLUSA SVG set generated and integrated |
| CRN-50-08 | 50% | Generate/reconstruct dividers, corners, seals and restrained ornaments | IN_DEVELOPMENT | 0–1 | Archive divider + season ornament generated; frame corners currently CSS-first |
| CRN-50-09 | 50% | Establish typography/material/border/spacing tokens | COMPLETED | 0 | Tokenized in `beta/cronache/style.css` |
| CRN-50-10 | 50% | Define responsive simplification rules | COMPLETED | 0 | Desktop/tablet/mobile recomposition encoded in CSS |
| CRN-50-11 | 50% | Visual QA against Copilot reference and ICA rules | NOT_STARTED | 0 | Next internal gate |
| CRN-75-01 | 75% | Implement Cronache Beta page in repository | IN_DEVELOPMENT | 0 | Early preview exists at `beta/cronache/`; M75 status not passed until QA/data integration gates close |
| CRN-75-02 | 75% | Populate La Giostra real data | IN_DEVELOPMENT | 0 | Preview uses verified winner/player count; date remains visibly unverified |
| CRN-75-03 | 75% | Populate BOG#1 real data | IN_DEVELOPMENT | 0 | Preview uses real concluded Duello I data |
| CRN-75-04 | 75% | Add sufficiently verified future BOG stages | IN_DEVELOPMENT | 0–1 | Preview includes Duello II from PO-known schedule; full future schedule not yet added |
| CRN-75-05 | 75% | Implement functional search and filters | IN_DEVELOPMENT | 0 | Preview JS implements search + status/place/league/format filters; season currently one-value prototype |
| CRN-75-06 | 75% | Implement conditional event states | IN_DEVELOPMENT | 0 | Future and completed states represented; ongoing visual asset exists but no real ongoing event currently inserted |
| CRN-75-07 | 75% | Implement desktop/tablet/mobile layouts | IN_DEVELOPMENT | 0 | CSS recomposition implemented; visual QA pending |
| CRN-75-08 | 75% | Accessibility/keyboard/focus/reduced-motion QA | NOT_STARTED | 0 | Functional gate |
| CRN-75-09 | 75% | Visual QA at target widths | NOT_STARTED | 0–1 | Escalate only major subjective choice |
| CRN-100-01 | 100% | Refine final ornamental/illustrative assets | NOT_STARTED | 0–1 | Final art polish |
| CRN-100-02 | 100% | Add empty/no-results/loading/error states | IN_DEVELOPMENT | 0 | No-results state implemented in preview; loading/error remain |
| CRN-100-03 | 100% | Add event-detail routing hooks/contract | NOT_STARTED | 0 | Detail pages may follow later |
| CRN-100-04 | 100% | SEO/metadata/share-preview QA | NOT_STARTED | 0 | No held assets |
| CRN-100-05 | 100% | Performance and asset-weight optimization | NOT_STARTED | 0 | Preserve fidelity |
| CRN-100-06 | 100% | Final visual regression pass | NOT_STARTED | 0 | Cross-width/states |
| CRN-100-07 | 100% | Final content-truth audit | NOT_STARTED | 0 | No fictional data as real |
| CRN-100-08 | 100% | PO final visual review | NOT_STARTED | 1 | Final approval gate |

## Milestone snapshot

**M25:** COMPLETED and merged.

**M50:** visual-system production is active. Most structural visual components are implemented; exact Logo ICA production-source integration and visual QA remain open before M50 can be declared complete.

Current preview outputs:
- `beta/cronache/index.html`
- `beta/cronache/style.css`
- `beta/cronache/main.js`

## PO interaction budget

- M50 completion: **0–1** likely interaction, only if exact logo-source transfer or visual direction requires PO intervention.
- M50 -> M75: **0–1** likely interaction.
- M75 -> M100: **1–2**, including final visual review.

Estimated remaining PO interactions under normal execution: **1–4**, excluding optional reviews requested by PO.

## Aesthetic asset register

| Asset ID | Asset | Type | Status | Source / generated by | Storage / location | Notes |
|---|---|---|---|---|---|---|
| CRN-AST-001 | **Logo ICA** | SVG source | PROVIDED / IMMUTABLE | Product Owner | Source attachment: `Logo di in Cerca di Avventura.svg` | Must not be altered. Exact production-source transfer/confirmation still open |
| CRN-AST-001-R | Existing project emblem render used by preview | WEBP | TEMPORARY_RENDER | Existing project asset | `assets/logo-emblem.webp` | Used only to exercise host/layout; not allowed to redefine Logo ICA |
| CRN-REF-001 | Copilot Cronache visual reference | PNG | REFERENCE_ONLY | Copilot / Designer | Source attachment: `Designer (1).png` | Visual benchmark only |
| CRN-REF-002 | Copilot Cronache reference | PDF | REFERENCE_ONLY | Copilot / Designer | Source attachment: `Designer.pdf` | Inspection backup |
| CRN-REF-003 | Copilot functional brief | DOCX | REFERENCE_ONLY | Copilot | Source attachment: `Copilot-Cronache-part 1.docx` | Reconciled with PO decisions |
| CRN-REF-004 | Copilot art direction + reverse engineering | DOCX | REFERENCE_ONLY | Copilot | Source attachment: `Copilot-Cronache - part 2.docx` | Evidence, not canon by itself |
| CRN-AST-010 | Architectural outer frame system | CSS | IMPLEMENTED_PREVIEW | Generated/reconstructed | `beta/cronache/style.css` | Page shell and side-rail treatment |
| CRN-AST-011 | Logo ICA architectural host | CSS | IMPLEMENTED_PREVIEW | Generated/reconstructed | `beta/cronache/style.css` `.logo-host` | Source logo remains untouched |
| CRN-AST-012 | Hero/archive threshold ornaments | CSS | IMPLEMENTED_PREVIEW | Generated/reconstructed | `beta/cronache/style.css` `.archive-threshold` | Low decorative density |
| CRN-AST-013 | Search/filter register frame | CSS | IMPLEMENTED_PREVIEW | Generated/reconstructed | `beta/cronache/style.css` `.ledger` | Semantic HTML controls |
| CRN-AST-014 | Season chapter ornament | SVG | GENERATED / INSTALLED_PREVIEW | Generated | `assets/ui/cronache/season-ornament.svg` | Reusable |
| CRN-AST-015 | Event record frame/corners | CSS | IMPLEMENTED_PREVIEW | Generated/reconstructed | `beta/cronache/style.css` `.event-record` | Data stays HTML |
| CRN-AST-016 | Status skull — FUTURA | SVG | GENERATED / INSTALLED_PREVIEW | Generated | `assets/ui/cronache/status/skull-futura.svg` | Plain engraved skull |
| CRN-AST-017 | Status skull — IN CORSO | SVG | GENERATED / INSTALLED_PREVIEW | Generated | `assets/ui/cronache/status/skull-in-corso.svg` | Restrained ember treatment |
| CRN-AST-018 | Status skull — CONCLUSA | SVG | GENERATED / INSTALLED_PREVIEW | Generated | `assets/ui/cronache/status/skull-conclusa.svg` | Flames from eyes, restrained |
| CRN-AST-019 | Metadata icon set | SVG | NOT_STARTED | M50/M75 production | `assets/ui/cronache/icons/` | Current preview uses text labels; add only if visual QA proves useful |
| CRN-AST-020 | Archive divider | SVG | GENERATED / INSTALLED_PREVIEW | Generated | `assets/ui/cronache/archive-divider.svg` | Closing copy remains on hold |

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
