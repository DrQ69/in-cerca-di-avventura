# Project Context — In Cerca di Avventura

**Purpose:** current operational state only. This file is not a product specification and must not duplicate or override canonical rules.

For product, information architecture, content model, design, component, asset, responsive, completion, QA, workflow or visual-regression rules, use `docs/PROJECT_INDEX.md` to route to the authoritative document.

## Current repository state

- Public site: `https://drq69.github.io/in-cerca-di-avventura/`
- Repository: `DrQ69/in-cerca-di-avventura`
- Production branch: `main`
- Hosting: GitHub Pages
- Current stack: static HTML, shared CSS, lightweight JavaScript
- No framework, package-manager requirement, CMS, backend, database or authentication

Current implementation entry points:

- `index.html`
- `assets/css/style.css`
- `assets/js/main.js`
- `assets/manifest.json`

## Implementation status

The current public markup/CSS predates the canonical ICA architecture and is therefore a **legacy/prototype implementation**.

It may be used to inspect existing technical behaviour, but it is not a design, IA, responsive, component or visual-baseline precedent for new canonical work.

In particular, current navigation labels, legacy responsive breakpoints, prototype copy and rendered event data must not be promoted into new work merely because they exist on the current homepage.

The next production phase should progressively replace legacy patterns with canonical P0 components rather than treating the existing homepage as the target architecture.

## Governance status

Completed/established:

- M0 — Governance / Canonical Specification
- M1 — Vision Lock
- M2 — Information Architecture Lock
- M5 — Content Model Lock
- M3 — Design Foundation
- M4 — Component Baseline
- M6 — Asset Specification & Manifest
- M7 — Responsive Specification
- M7.1 — Responsive Conformance gate defined; real implementation validation remains pending
- M8 / M8.1 — Definition of Done and governance hardening
- M9 / M9.1 — QA Checklist and QA Execution Model
- M10 — GitHub Workflow
- M11 — Visual Regression system established; production baseline coverage pending canonical components/pages

M10/M11 operational assets:

- `docs/GITHUB_WORKFLOW.md`
- `.github/pull_request_template.md`
- `.github/ISSUE_TEMPLATE/defect.md`
- `.github/workflows/qa-baseline.yml`
- `scripts/qa_baseline.py`
- `docs/VISUAL_REGRESSION.md`
- `qa/visual-baselines.json`
- `qa/evidence/visual/README.md`

Next planned milestone:

- M12 — Technical Baseline

## Current known gaps

1. The legacy homepage does not yet implement the canonical primary navigation: Imprese / Campagne / Avventurieri / Cronache / Il Reame / Archivio.
2. The current CSS predates the canonical responsive system and must not be treated as M7-conformant evidence.
3. M7.1 cannot be fully verified until real canonical P0/P1 components exist and are tested.
4. Final production typography remains intentionally open pending real HTML fit/readability testing.
5. M12 is not yet implemented.
6. Canonical component production has not yet begun in a systematic P0-first sequence.
7. M11 has no production screenshots yet by design: the legacy/prototype homepage must not become the canonical baseline.
8. Screenshot capture/pixel-diff automation is not yet made mandatory; M11 remains hybrid until a stable capture engine is justified by canonical implementation work.

## Current implementation objective

After M12, begin the canonical implementation with the P0 system and verify it through M7.1/M9/M11 using the M10 workflow rather than incrementally polishing legacy patterns.

As canonical components/pages become VERIFIED and are accepted visually, populate `qa/visual-baselines.json` and the approved baseline evidence set progressively instead of freezing the current prototype.

Expected early P0 focus includes brand/navigation, primary banners/headers, core event/player/chronicle cards, entity headers, status badges, results/ranking tables and essential system states, following the approved component inventory embedded in the canonical architecture.

## Operational rule

Use this file only to answer **“what exists now, what is legacy, what is pending, and what comes next?”**

If this file conflicts with `docs/ICA_CANONICAL_SPEC.md` or an approved specialist specification, it is stale and must be updated; it never wins the conflict.
