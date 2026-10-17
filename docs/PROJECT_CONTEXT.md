# Project Context — In Cerca di Avventura

**Purpose:** current operational state only. This file is not a product specification and must not duplicate or override canonical rules.

For product, information architecture, content model, design, component, asset, responsive, completion, QA, workflow, visual-regression or technical-baseline rules, use `docs/PROJECT_INDEX.md` to route to the authoritative document.

## Current repository state

- Active public homepage: `https://drq69.github.io/in-cerca-di-avventura/`
- Repository: `DrQ69/in-cerca-di-avventura`
- Production branch: `main`
- Hosting for ICA v1: GitHub Pages
- Future approved hosting/domain direction: Vercel, explicitly deferred beyond v1 closure
- Current stack: static HTML, shared CSS, lightweight JavaScript
- No framework, package-manager requirement, CMS, backend, database or authentication
- No analytics, tracking or non-essential cookies in ICA v1

Current public implementation entry points:

- `index.html` — ICA v1 Home
- `style.css` / `main.js` — Home runtime
- `shared/` — shared ICA shell/runtime
- `adunanze/nazionale/` — Adunanze Nazionali
- `avventurieri/` — Avventurieri directory
- `cronache/` — completed-event archive and detailed results
- `alleanze/` — current Alleanze surface; feature expansion on hold
- `tesori/` — Tesori archive
- `beta/` — compatibility redirects only
- `assets/manifest.json` — governed asset registry

## Implementation status

The Product Owner consolidated the current navigation and section organization for ICA v1 on 2026-10-17. The former plan to replace the public navigation with Imprese / Campagne / Il Reame / Archivio taxonomy is superseded.

ICA v1 is promoted to the repository root. Legacy `/beta/` public URLs remain only as compatibility redirects and must not be treated as the active implementation.

The current navigation is:

- Adunanze
- Avventurieri
- Alleanze
- Tesori
- Proclami
- Chi siamo

The supplied ICA logo is the official v1 brand source and is installed under the governed brand path. International Adunanze is removed from v1; `/adunanze/` routes directly to the National area.

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

The three portal artworks under `assets/adunanze/` are APPROVED for ICA project use as of 2026-09-29 under `docs/ASSET_APPROVAL_RECORD_2026-09-29.md`; the National gate carries the documented asset-budget exception `EXC-0001`. This does not promote the beta page itself to canonical/PRODUCTION_READY.

This consolidation is implementation work inside the broader canonical programme; it does not by itself mark the beta pages PRODUCTION_READY or M12 canonical.

## Beta implementation status — 2026-09-29

Since the 2026-09-21 Adunanze consolidation, the beta implementation has advanced materially:

- beta navigation now routes **Le Adunanze** directly to `/beta/adunanze/nazionale/`; the two-gate portal remains in the repository but is operationally on hold;
- `data/events.json` is the shared event source for Home / Adunanze / Cronache;
- `/beta/avventurieri/` and `data/players.json` provide the current Avventurieri directory and event-name mapping;
- `data/league-standings.json` provides the current Blaze of Glory standings snapshot;
- `/beta/alleanze/` and `data/alliances.json` provide the pilot Alleanze map with Cremos, Team Void and Ordinary Mortals;
- Alleanze map, medallion and community logo assets are stored under `assets/alleanze/`;
- the shared beta shell is `assets/css/ica-shared-shell.css`;
- dedicated visual-QA workflows exist for Homepage, Adunanze, Cronache, Avventurieri and Alleanze.

These beta pages remain implementation/prototype surfaces. They are not automatically canonical, APPROVED or PRODUCTION_READY.

## Current known gaps

1. **Unified Archivio:** approved for ICA v1 but not yet implemented; it must search/filter events, Cronache, Avventurieri, Tesori, decks and Proclami.
2. **Sorcery controlled publishing workflow:** importer exists and is verified, but the v1 operator workflow still needs the final validate → snapshot → QA → publish command/workflow.
3. **Adunanze mobile performance:** the known mobile LCP gate remains open and must be resolved before final PRODUCTION_READY.
4. **M11/M12 v1 closure:** root pages still need final Product Owner visual acceptance, production visual baselines and canonical technical registry closure.
5. **Branch protection:** GitHub Issue #17 remains an administrator action — require ICA baseline QA, disallow force-push and branch deletion, without mandatory review for every routine PR.
6. **External Alleanze logo permissions:** the Product Owner believes permission exists, but Issue #94 remains open until attribution/commercial-use/source details are confirmed.
7. **Proclami dedicated page:** approved in principle but intentionally on hold; it is not a v1 release blocker.
8. **Alleanze expansion:** intentionally on hold; the current verified surface may remain in v1.
9. **Public contact channel:** deferred by Product Owner decision and not a v1 blocker.
10. **Vercel/custom domain migration:** approved future direction, explicitly deferred and not a v1 blocker.

## Current implementation objective

The active programme is **ICA v1 closure**, with scope frozen by Product Owner decisions on 2026-10-17.

The shortest complete path is:

1. root migration + governance/brand closure;
2. unified Archivio;
3. controlled Sorcery publishing workflow;
4. production hardening (performance, accessibility, SEO/system files, privacy);
5. M11/M12 release closure and Product Owner final approval.

Do not reopen navigation, section taxonomy, Avventurieri profile expansion, Proclami page development, Alleanze feature expansion, analytics, International Adunanze, contact-channel design or hosting migration during v1 closure unless the Product Owner explicitly changes scope.

## Documentation freshness note — 2026-09-29

The beta implementation moved faster than several operational records between 2026-09-22 and 2026-09-29. The review in `docs/ACTIVITY_REVIEW_2026-09-29.md` and the cross-project `docs/PROJECT_RISK_REGISTER.md` track the resulting gaps. README, asset registration, Cronache references, Adunanze routing and verification coverage have since been synchronised; remaining governance blockers are now explicit rather than silent.

## Operational rule

Use this file only to answer **“what exists now, what is legacy, what is pending, and what comes next?”**

If this file conflicts with `docs/ICA_CANONICAL_SPEC.md` or an approved specialist specification, it is stale and must be updated; it never wins the conflict.