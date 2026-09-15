# ICA Visual Regression

**Document ID:** ICA-VR-001  
**Status:** SPECIFIED  
**Version:** 1.0  
**Milestone:** M11 — Visual Regression  
**Authority:** subordinate to `docs/ICA_CANONICAL_SPEC.md`, M7/M7.1, M8/M8.1, M9/M9.1 and `docs/GITHUB_WORKFLOW.md`

## 1. Purpose

M11 defines how ICA detects unintended visual change without turning visual QA into a heavy testing platform.

The system protects approved visual behaviour while preserving the project principle:

**disciplined UI, expressive art.**

M11 does not replace responsive, accessibility, factual or interaction QA. A screenshot cannot prove keyboard behaviour, semantics, source integrity or correctness of data.

## 2. Current constraint

The current public homepage is legacy/prototype implementation and is **not** a canonical visual baseline.

Do not freeze legacy navigation, spacing, breakpoints, cards or prototype content merely because they currently render.

Production visual baselines begin only when a canonical component/page version has been implemented, verified and selected by the Product Owner as an acceptable reference.

Therefore M11 can be operationally established before the first production baseline exists.

## 3. What receives a baseline

Create visual baselines only for objects where visual regression would materially protect quality.

Priority:

1. approved P0 components;
2. approved P1 components with important visual/interaction behaviour;
3. canonical page/template compositions;
4. high-risk responsive states;
5. art-directed assets whose crop/safe-area relationship affects UI.

Do not baseline every decorative variation or every content record.

## 4. Baseline authority

A screenshot becomes a **production baseline** only when:

- the tested object/version is identifiable;
- the viewport/state/environment are recorded;
- the underlying object is at least `VERIFIED`;
- the screenshot is representative rather than accidental;
- the Product Owner explicitly accepts it as the reference visual state.

Agents may capture and recommend candidate baselines. They may not self-promote a candidate image to an approved production baseline.

Baseline approval is separate from merge status.

## 5. Registry

The machine-readable registry is:

`qa/visual-baselines.json`

Each baseline entry should identify at minimum:

- stable baseline ID;
- object/component/page ID;
- route or fixture;
- viewport width/height;
- state/variant;
- tested commit/version;
- baseline file path;
- status (`candidate`, `approved`, `deprecated`);
- Product Owner approval reference when approved;
- notes for dynamic/masked regions if any.

The registry may exist with an empty baseline set until canonical components are ready.

## 6. Evidence storage

Use:

`qa/evidence/visual/`

Recommended structure:

```text
qa/evidence/visual/
  baselines/
  current/
  diffs/
```

Baseline file naming:

`VB-<4 digits>-<object>-<state>-<width>x<height>.png`

Example:

`VB-0001-nav-01-default-1280x800.png`

Do not use names such as `final`, `ok`, `new`, `latest2`.

## 7. Required visual test matrix

A baseline set should be risk-driven, not mechanically exhaustive.

For P0 responsive UI, use the M7.1 viewport matrix as the source of truth. At minimum, a canonical component normally needs representative coverage of:

- small mobile;
- standard mobile;
- tablet/compact layout when behaviour changes;
- desktop;
- wide desktop when composition materially changes.

Short-landscape cases remain part of M7.1 responsive verification where relevant, but do not require permanent screenshot baselines unless they protect a known visual risk.

## 8. State coverage

Capture only meaningful visual states.

Examples:

- default;
- active/current;
- expanded mobile navigation;
- focus-visible when visually significant;
- registration-open / completed event variants;
- long-content stress state;
- error/empty state where presentation is important.

Do not multiply baselines for states that render identically.

## 9. Dynamic content discipline

Visual comparison must be deterministic enough to be useful.

When content is dynamic:

- prefer approved synthetic fixtures for layout stress;
- freeze dates/random values where possible;
- do not publish synthetic values as factual ICA data;
- mask or exclude unstable regions only when justified and documented;
- never hide a genuine regression by broadly masking the affected area.

## 10. Comparison model

M11 starts as a **hybrid** verification system.

A comparison may use automated pixel/image difference when tooling is available, but the final interpretation of a visual regression remains manual/hybrid because:

- anti-aliasing and font rendering can create harmless pixel differences;
- deliberate art changes may be visually large but correct;
- small hierarchy/overlap defects may be important even when pixel percentage is low;
- ICA identity and ornament/function balance require human interpretation.

Until a stable screenshot engine is explicitly adopted, do not introduce a package-manager/build dependency solely for M11.

## 11. Visual regression outcomes

Use M9 result language:

- `PASS` — no unintended material visual change;
- `FAIL` — unintended visual regression exists;
- `N/A` — comparison genuinely does not apply, with rationale;
- `BLOCKED` — required comparison cannot be completed.

A changed screenshot is not automatically a failure. The question is whether the visual change is **intended and acceptable**.

## 12. Review rules

Visual review must explicitly consider:

- hierarchy and legibility;
- overlap/clipping/overflow;
- ICA identity anchor;
- ornament vs function balance;
- typography fit and wrapping;
- safe areas and art direction;
- card/table density;
- factual information priority;
- mobile preservation of ICA identity;
- unintended disappearance/reflow of important UI.

“Looks fine” is not sufficient evidence for a blocking check.

## 13. Change classification

When a baseline differs, classify the change:

### Intended

The visual change is part of the requested scope and passes applicable QA. Update the baseline only after the new reference is accepted by the Product Owner.

### Regression

The visual change is unintended or degrades approved behaviour. Fix before production readiness unless handled under M8 exception rules.

### Baseline stale

The old baseline belongs to an invalidated dependency/version. Mark `RECHECK_REQUIRED`, regenerate candidate evidence and obtain approval for the replacement baseline when appropriate.

## 14. Test once, reference many

Visual evidence follows M9.1.

A component baseline may support composing pages while:

- component version is unchanged;
- relevant font/design/responsive dependencies remain valid;
- no `RECHECK_REQUIRED` trigger applies.

Page-level composition still requires page-level visual checking; component evidence cannot prove page composition by itself.

## 15. Relationship to CI

M10 CI continues to provide deterministic baseline checks.

M11 adds two lightweight responsibilities now:

1. `qa/visual-baselines.json` must remain valid JSON;
2. any registered baseline file path must exist.

Actual screenshot capture and pixel comparison are not made mandatory until a stable capture engine is justified by canonical implementation work.

This avoids introducing tooling complexity before there are canonical visuals worth freezing.

## 16. Relationship to M7.1 and M9

- M7.1 defines responsive conformance and the viewport/content stress obligations.
- M9 defines visual QA checks and evidence language.
- M9.1 defines evidence reuse and QA profiles.
- M11 provides persistent approved visual references for those checks.

M11 cannot make M7.1 `VERIFIED` by itself. Real canonical components still have to pass responsive validation.

## 17. Baseline invalidation

At minimum, reconsider affected baselines when any of these change materially:

- production font metrics;
- responsive breakpoint/contract;
- component structure;
- design tokens/material system;
- production asset/crop;
- content-density contract;
- accessibility treatment that changes layout;
- page composition.

Use targeted regeneration rather than replacing all baselines mechanically.

## 18. M11 completion model

M11 has two distinct outcomes:

### System established

Complete when:

- this specification exists;
- baseline registry/schema exists;
- evidence locations/naming exist;
- baseline approval/invalidation rules are defined;
- M10 CI validates the registry structurally;
- agent routing includes M11.

### Production baseline coverage

Begins later, as canonical components/pages become `VERIFIED`/`APPROVED`.

M11 must not be described as having full visual baseline coverage while the canonical P0 implementation does not yet exist.

## 19. Success criterion

The Product Owner should not need to manage screenshot tooling.

When a canonical visual object changes, agents should automatically determine whether an approved baseline exists, capture/compare the relevant states with available tooling, classify the difference, preserve evidence and surface only material regressions or baseline-approval decisions.