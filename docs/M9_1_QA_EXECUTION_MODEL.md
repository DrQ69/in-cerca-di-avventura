# M9.1 — QA Execution Model

**Document ID:** ICA-QA-EXEC-001  
**Status:** Approved specialist extension  
**Version:** 1.0  
**Milestone:** M9.1 — QA Execution Model  
**Authority:** subordinate to `docs/ICA_CANONICAL_SPEC.md`, `docs/DEFINITION_OF_DONE.md`, `docs/M8_1_DOD_GOVERNANCE_HARDENING.md` and `docs/QA_CHECKLIST.md`

## 1. Purpose

M9 defines the canonical QA checks. M9.1 defines how they are executed so that QA does not become a mechanical checklist exercise, duplicated effort, or inconsistent evidence across agents.

The execution model adds:

- QA Profiles;
- a `test once, reference many` rule;
- check-method classification (`manual`, `automated`, `hybrid`);
- canonical evidence storage and naming;
- explicit N/A rationale;
- dependency-driven recheck scope;
- cumulative defect review before release.

## 2. QA Profiles

A Verification Record must select one primary profile and may add secondary families where needed.

### QAP-CMP-I — Interactive P0/P1 Component

Required families: `GEN`, `CMP`, `TEC`, `A11Y`; add `VIS` for branded/narrative components, `PERF` for image/script-heavy components.

Mandatory focus: states, keyboard/focus, touch targets, semantics, responsive contract, canonical viewport matrix, stress content when relevant, no page overflow.

### QAP-CMP-V — Visual / Narrative Component

Required families: `GEN`, `CMP`, `VIS`; add `A11Y` for interactive/informative content and `PERF` for art-heavy assets.

Mandatory focus: hierarchy, ICA identity anchor, ornament/function balance, safe areas, mobile identity preservation.

### QAP-AST-P — Production Asset

Required families: `GEN`, `AST`; add `VIS`, `PERF`, `A11Y` as applicable.

Mandatory focus: manifest, path/name, dimensions, weight, art direction, safe areas, accessibility classification, provenance/rights.

### QAP-PAG — Page / Template

Required families: `GEN`, `PAG`, `TEC`, `A11Y`, `VIS`; add `DAT` when factual entities are rendered and `PERF` for image-heavy pages.

Mandatory focus: IA, entity relations, approved P0 dependencies, semantic hierarchy, responsive matrix, keyboard order, factual/narrative separation, no horizontal page overflow.

### QAP-DAT — Content / Data Entity

Required families: `GEN`, `DAT`.

Mandatory focus: permanent IDs/slugs, source class, privacy separation, correct entity ownership, valid references, no synthetic data leakage, reproducible derived values.

### QAP-CODE — Code / Technical Change

Required families: `GEN`, `TEC`; add affected domain families (`CMP`, `PAG`, `A11Y`, `PERF`, `DAT`, `VIS`) according to impact.

Mandatory focus: smallest coherent change, no unapproved dependency, paths/assets resolve, console state, regression on affected behaviour.

### QAP-REL — Release

Required families: `GEN`, `REL` plus all domain families touched by the release.

Mandatory focus: object versions, current verification evidence, no unresolved Critical/High defects, cumulative Medium review, smoke matrix, approval/readiness rules.

## 3. Applicability rule

Do not execute every M9 check mechanically.

For each Verification Record:

1. select the primary QA Profile;
2. identify changed/affected domains;
3. include all required checks for the selected profile;
4. add conditional checks when their trigger applies;
5. mark genuinely irrelevant checks `N/A` with a short rationale;
6. never omit a blocking check merely because it is inconvenient to execute.

Every `N/A` in a Verification Record requires a rationale. `N/A` is not a substitute for `BLOCKED`.

## 4. Test once, reference many

A check should be executed at the lowest correct level and referenced by higher-level QA while its evidence remains valid.

Examples:

- keyboard/focus verified on `NAV-02` may be referenced by a page using that exact approved component version;
- asset provenance verified in the manifest does not need to be manually re-proven on every page;
- component responsive evidence may be referenced by page QA, but page composition/overflow still requires page-level testing.

Evidence may be reused only when:

- object version is unchanged;
- relevant dependencies are unchanged;
- environment difference does not invalidate the claim;
- no `RECHECK_REQUIRED` trigger applies.

A reused check must cite the originating Verification Record/check ID.

## 5. Execution method classification

Each check/evidence item is classified as one of:

- `manual` — human/agent observation or interaction is essential;
- `automated` — deterministic tool output is sufficient;
- `hybrid` — automated evidence plus manual interpretation/interaction is required.

Typical direction:

- links/paths, file existence, markup validation: `automated` candidate;
- keyboard usability, hierarchy, narrative/factual clarity: `manual`;
- responsive screenshots, visual regression, contrast, performance: usually `hybrid` until later milestones define automation.

M10 defines where automated checks run. M11 defines visual-regression automation. M12 defines final measurable accessibility/performance thresholds.

## 6. Canonical evidence storage

Verification Records and supporting evidence must be traceable to the tested version.

Canonical repository locations:

- Verification Records: `qa/verification/`
- screenshots/renders: `qa/evidence/visual/`
- logs/reports: `qa/evidence/reports/`
- data/source evidence when suitable for the public repo: `qa/evidence/data/`

Sensitive/private source evidence must not be committed to the public repository; record only a safe reference/location identifier.

### Naming

Verification Record:

`VR-<4 digits>-<object-id-or-slug>-<short-scope>.md`

Examples:

- `VR-0001-nav-01-responsive.md`
- `VR-0002-crd-01-interaction.md`
- `VR-0003-evt-2026-001-data.md`

Supporting evidence should begin with the Verification ID:

`VR-0001-390.png`, `VR-0001-1440.png`, `VR-0001-console.txt`.

Do not use filenames such as `final`, `new`, `ok`, `test2`.

## 7. Evidence validity

A `PASS` belongs to the tested object version/commit and declared dependencies; it is not timeless.

Recheck triggers follow M8.1. The minimum impact map is:

| Changed dependency | Minimum affected QA |
|---|---|
| Production font / typography metrics | navigation fit, headings, cards, overflow, visual hierarchy |
| Breakpoint / responsive rule | affected P0/P1 component and page responsive checks |
| Component contract | component checks plus composing pages/templates |
| Content Model field/relation | DAT checks plus affected page/component bindings |
| Production asset replacement | AST plus consuming component/page VIS/PERF checks |
| Scoring/rules | affected DAT derived values/rankings and display pages |
| Accessibility baseline | affected A11Y checks |
| Provenance/rights status | affected asset/release production readiness |

Targeted re-verification is preferred over rerunning unrelated QA.

## 8. Visual QA discipline

Subjective visual checks must identify observable reasons for PASS/FAIL. For example:

- hierarchy is clear because title/date/venue remain distinct at the tested viewport;
- ICA identity anchor is present through sigil/material/frame/typography rather than only logo presence;
- ornament does not overlap or visually outrank factual content;
- Four Elements remain secondary markers;
- Avventuriero and Avatar remain distinct concepts.

Until M11 provides approved visual baselines, visual PASS claims require at least one explicit observation, not only “looks good”.

## 9. Stress fixtures

Use stress content only where layout/content density can change the result.

At minimum:

- NAV: six canonical labels and production font;
- ranking/table: long nickname, multi-digit W/L/D and points;
- deck: long deck/card names, Avatar + Atlas + Spellbook, multi-element affinity;
- Chronicle: long heading/subtitle/body width;
- Player: long nickname/title and populated stats/relations.

Synthetic fixtures remain `synthetic-test` and must never enter production content paths.

## 10. Cumulative defect review

Before `PRODUCTION_READY`, the Release Verification Record must include a cumulative defect review:

- count open defects by severity;
- group Medium defects by affected critical area;
- determine whether repeated Medium defects together represent High risk;
- link accepted exceptions;
- record residual risk.

No release may hide systemic degradation by treating related Medium defects as isolated.

## 11. Relationship to M10–M12

- **M10** maps QA methods/checks into branch, PR and CI workflow.
- **M11** adds approved visual baselines and repeatable screenshot comparison.
- **M12** adds formal accessibility, performance and SEO thresholds.

M9.1 should be revised if later automation changes how evidence is produced, but stable M9 check IDs should be preserved whenever possible.

## 12. Exit criteria

M9.1 is complete when:

1. QA Profiles exist for component, asset, page, data, code and release work;
2. all N/A results require rationale;
3. `test once, reference many` is defined;
4. manual/automated/hybrid classification is defined;
5. evidence locations and naming are standardised;
6. recheck impact guidance exists;
7. cumulative defect review is required for production release;
8. agent instructions require the execution model.
