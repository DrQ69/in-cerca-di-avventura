# Project Context — In Cerca di Avventura

**Purpose:** current operational state only. This file is not a product specification and must not duplicate or override canonical rules.

For product, information architecture, content model, design, component, asset, responsive, completion, QA, workflow, visual-regression or technical-baseline rules, use `docs/PROJECT_INDEX.md` to route to the authoritative document.

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

It may be used to inspect existing technical behaviour, but it is not a design, IA, responsive, component, visual-baseline or canonical technical-compliance precedent for new work.

In particular, current navigation labels, legacy responsive breakpoints, prototype copy and rendered event data must not be promoted into new work merely because they exist on the current homepage.

Canonical Implementation v1 has begun P0-first in an isolated validation fixture rather than by cosmetically refactoring the legacy homepage.

First implementation slice:

- `docs/components/P0_SHELL_NAV_SIG.md` — responsive/accessibility contract for Canonical Shell v1, `SIG-01`, `NAV-01`, `NAV-02`;
- `assets/css/canonical-shell.css` — canonical shell/component styles;
- `tests/fixtures/canonical-shell.html` — non-production QA fixture;
- `qa/verification/VR-0007-m7-1-shell-runtime.md` — first browser/runtime M7.1 evidence.

The legacy public homepage remains unchanged by this first slice.

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
- M7.1 — Responsive Conformance gate defined; first shell runtime validation partially passed, full implementation validation still pending
- M8 / M8.1 — Definition of Done and governance hardening
- M9 / M9.1 — QA Checklist and QA Execution Model
- M10 — GitHub Workflow, hardened to v1.1 and Product Owner approved
- M11 — Visual Regression system established; production baseline coverage pending canonical components/pages
- M12 — Technical Baseline v1.1 hardened and VERIFIED at system level; explicit Product Owner APPROVED status remains pending; canonical-page compliance begins with Canonical Implementation v1

Operational assets now include:

- `docs/GITHUB_WORKFLOW.md`
- `.github/pull_request_template.md`
- `.github/ISSUE_TEMPLATE/defect.md`
- `.github/workflows/qa-baseline.yml`
- `scripts/qa_baseline.py`
- `docs/VERIFICATION_RECORD_TEMPLATE.md`
- `docs/VISUAL_REGRESSION.md`
- `qa/visual-baselines.json`
- `qa/evidence/visual/README.md`
- `docs/TECHNICAL_BASELINE.md`
- `qa/technical-baseline.json`
- `scripts/technical_baseline.py`

## Adunanze consolidation status — 2026-09-21

The Product Owner has approved the current Adunanze access architecture for the beta implementation:

- `/beta/adunanze/` is the portal;
- International remains unavailable/in development;
- National is the active branch;
- `/beta/adunanze/nazionale/` is the operational view for ongoing/future events;
- `/beta/cronache/` is the historical view for completed events;
- Home, National and Cronache are being consolidated onto a shared `data/events.json` source.

The three portal artworks under `assets/adunanze/` are selected production candidates, not formally APPROVED assets yet.

This consolidation is implementation work inside the broader canonical programme; it does not by itself mark the beta pages PRODUCTION_READY or M12 canonical.

## Current known gaps

1. The legacy homepage does not yet implement the canonical primary navigation: Imprese / Campagne / Avventurieri / Cronache / Il Reame / Archivio.
2. The current CSS predates the canonical responsive system and must not be treated as M7-conformant evidence.
3. M7.1 is not fully verified yet: NAV-02 runtime mechanics have passed the tested matrix, while NAV-01 still needs fit verification with the actual Cinzel-family production candidate and final visual evidence.
4. Final production typography remains intentionally open pending real HTML fit/readability testing and therefore triggers NAV fit recheck.
5. `SIG-01`, `NAV-01` and `NAV-02` remain formally IMPLEMENTED, not VERIFIED or APPROVED.
6. `SIG-01` currently uses the registered candidate emblem asset; asset provenance/approval and real-asset visual review remain pending.
7. M11 has no production screenshots yet by design: the legacy/prototype homepage must not become the canonical baseline.
8. M12 `canonical_pages` starts empty by design: legacy/prototype pages and QA fixtures must not be counted as canonical technical compliance.
9. M12 v1.1 guards against future registry omission: a page carrying `<meta name="ica-status" content="canonical">` must be registered or CI fails.
10. Browser/runtime performance and accessibility evidence will be generated progressively with canonical pages; static M12 CI does not pretend to measure Core Web Vitals or full WCAG conformance by itself.
11. Minimal technical protection of `main` is not yet enforced; GitHub Issue #17 tracks the required admin settings (`ICA baseline QA` required, no force-push, no branch deletion).

## Current implementation objective

Continue **Canonical Implementation v1**, P0-first.

The first shell runtime pass now confirms NAV-02 keyboard path, visible focus, 44px targets, mobile/short-landscape containment and no page-level horizontal overflow across the tested matrix. Conditional NAV-01 geometry also fits at the tested desktop widths, but final fit closure requires the real production-font candidate.

Immediate next work should therefore focus on closing the remaining shell evidence efficiently: real `SIG-01` rendering + production-font NAV fit + visual acceptance. Once that is done, the shell slice can be considered for VERIFIED and M11 baseline candidacy.

After shell closure, proceed to the next P0 visual/structural components such as `BNR-01`/`BNR-02`, buttons and headers, then core cards/entity/table/system components.

As canonical components/pages become VERIFIED and are accepted visually, populate `qa/visual-baselines.json`. As canonical public pages become real production candidates, add the M12 canonical marker and the corresponding `qa/technical-baseline.json` entry in the same coherent change.

## Operational rule

Use this file only to answer **“what exists now, what is legacy, what is pending, and what comes next?”**

If this file conflicts with `docs/ICA_CANONICAL_SPEC.md` or an approved specialist specification, it is stale and must be updated; it never wins the conflict.