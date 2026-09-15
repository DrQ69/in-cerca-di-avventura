# ICA GitHub Workflow

**Document ID:** ICA-WF-001  
**Status:** Approved specialist specification  
**Version:** 1.0  
**Milestone:** M10 — GitHub Workflow  
**Authority:** subordinate to `docs/ICA_CANONICAL_SPEC.md`, `docs/DEFINITION_OF_DONE.md`, `docs/M8_1_DOD_GOVERNANCE_HARDENING.md`, `docs/QA_CHECKLIST.md` and `docs/M9_1_QA_EXECUTION_MODEL.md`

## 1. Purpose

M10 defines the smallest operational GitHub workflow needed to apply ICA governance reliably without forcing the Product Owner to manage branch, PR, QA and merge mechanics.

The intended interaction is:

**Product Owner states the outcome -> agent routes the task -> branch -> implementation -> verification -> PR -> merge -> concise report.**

M10 does not redefine lifecycle, QA, approval or release-readiness rules. Those remain owned by M8/M8.1 and M9/M9.1.

## 2. Core principles

1. `main` is production-facing and remains the canonical implementation branch.
2. Non-trivial work uses a short-lived branch and one coherent PR.
3. Agents perform Git mechanics automatically when authorised by the task; the Product Owner should not need to orchestrate them.
4. A merge is a repository action, not automatic proof of `VERIFIED`, `APPROVED` or `PRODUCTION_READY`.
5. QA evidence is produced once at the lowest correct level and referenced where still valid.
6. Do not introduce process steps that do not reduce meaningful risk.
7. No permanent `develop`, `release` or GitFlow-style branches are required at this stage.

## 3. Trivial vs non-trivial changes

A change is normally **non-trivial** when it affects product behaviour, canonical content/data, reusable UI, responsive behaviour, assets, accessibility, public pages, governance or deployment-relevant code.

Examples:

- new or changed P0/P1 component;
- page/template change;
- factual event/result/deck/player data;
- production asset replacement;
- responsive/layout/navigation change;
- JavaScript interaction change;
- governance/specification change;
- any change requiring a Verification Record under M8/M9.

A change may be treated as **trivial** when it is clearly low-risk, isolated and does not affect behaviour or canonical meaning, for example a typo in non-factual documentation.

When uncertain, treat the change as non-trivial. Do not split one coherent task into many PRs merely to reduce apparent scope.

## 4. Branch model

Create branches from current `main`.

Allowed prefixes:

- `feature/` — new functional capability or component;
- `fix/` — defect correction;
- `design/` — design-system, component or asset-system work;
- `content/` — editorial/data/content work;
- `qa/` — verification, test or evidence work;
- `governance/` — project rules, workflow or specification changes.

Examples:

- `feature/crd-02-player-card`
- `fix/nav-02-focus-trap`
- `design/bnr-01-navigation-banner`
- `content/evt-2026-001-update`
- `qa/nav-01-responsive-fit`
- `governance/m10-github-workflow`

Branch names should describe the outcome, not the person or tool performing the work.

Short-lived branches are preferred. Delete/retire after merge when practical.

## 5. Standard agent flow

For non-trivial work, the agent should:

1. read `docs/PROJECT_INDEX.md` and route the task;
2. inspect current `main` and affected files;
3. identify changed objects/IDs and required QA Profile;
4. create a branch from current `main`;
5. implement the smallest coherent change;
6. execute applicable M9/M9.1 checks;
7. create or update a Verification Record when required;
8. record defects/exceptions when required;
9. open one PR with concise scope and verification references;
10. confirm mergeability and blocking status;
11. merge when the task authorises repository integration and M8/M9 rules permit it;
12. report changed files, verification status, remaining risk and any Product Owner decision needed.

Do not ask the Product Owner to repeat workflow rules already defined in the repository.

## 6. Pull Request contract

Every non-trivial PR should answer only these questions:

- **Scope:** what changed?
- **Affected objects/files:** which IDs or paths are involved?
- **Why:** what outcome does this achieve?
- **QA:** which QA Profile / Verification Record applies?
- **Defects / Exceptions:** what remains open?
- **Uncertainty:** what was not verified?
- **Approval required:** does this require a Product Owner decision to become `APPROVED` or accept an exception?

Use `.github/pull_request_template.md`.

Do not duplicate full QA evidence in the PR body when it already exists in `qa/verification/` or linked evidence.

## 7. Defect handling

Use the lightest tracking mechanism that preserves traceability.

### Resolve inside the PR

A defect may remain only in the PR/Verification Record when:

- it is found and fixed in the same work block;
- it does not survive the merge;
- no future owner/action is required.

### Create a GitHub Issue

Create a defect Issue when:

- a Medium or higher defect survives the current PR;
- work must be assigned/deferred to another work block;
- the defect needs durable reproduction/ownership/history;
- a Critical or High defect is identified.

Critical/High defects block production readiness under M8/M8.1.

Accepted exceptions use stable `EXC-XXXX` entries in `docs/EXCEPTION_REGISTER.md`. An Issue does not replace the Exception Register.

## 8. Verification Records

A non-trivial claim of `VERIFIED` requires a Verification Record under M8/M9.

Canonical location:

`qa/verification/`

Use the naming and evidence rules in M9.1.

Do not create a Verification Record for every trivial documentation edit. Do create one when the state or release-readiness claim depends on actual verification evidence.

## 9. Merge policy

A PR may be merged when all applicable conditions are true:

- scope is coherent and matches changed files;
- no known conflict with Canonical/specialist specifications exists;
- required blocking checks pass;
- required Verification Record exists;
- no unresolved Critical/High defect blocks the intended destination;
- required exception approval exists where applicable;
- factual/synthetic boundaries are respected;
- documentation/manifest/status updates required by the change are included;
- the PR is mergeable and does not knowingly overwrite newer approved work.

A PR must not be merged merely because it is technically mergeable.

A successful merge does **not** automatically promote objects to `VERIFIED`, `APPROVED` or `PRODUCTION_READY`.

## 10. Product Owner decision points

The Product Owner is required when:

- an object is to be promoted to `APPROVED`;
- a locked/canonical decision would change;
- a required exception needs Product Owner acceptance under M8.1;
- unresolved ambiguity materially changes product/design/content intent;
- a release is to be represented as `PRODUCTION_READY` when Product Owner approval is required.

The Product Owner is **not** required to manually approve routine branch creation, standard QA execution, defect logging or ordinary technical merge mechanics when the requested task already authorises the agent to proceed.

## 11. Lightweight CI baseline

M10 introduces only deterministic, low-maintenance automated checks suitable for the current static architecture.

The baseline CI should verify:

- key JSON files parse correctly;
- local asset/script/stylesheet references in `index.html` resolve;
- obviously missing referenced repository paths fail the check.

This CI is an automated QA aid, not the full quality gate.

M10 intentionally does **not** define:

- visual-regression comparison — M11;
- final Lighthouse/Core Web Vitals budgets — M12;
- final automated WCAG threshold — M12;
- subjective ICA visual identity scoring — manual/hybrid QA.

## 12. CI failure rule

A failing required baseline CI check blocks merge until:

- the defect is fixed; or
- the check is proven invalid and the workflow itself is corrected.

Do not bypass a failing deterministic check by changing its result without understanding the cause.

## 13. Recheck after dependency changes

When M8.1/M9.1 identifies `RECHECK_REQUIRED`, the PR should state:

- which dependency changed;
- which prior evidence became stale;
- which targeted checks were rerun;
- which higher-level pages/components can safely reference the refreshed evidence.

Do not rerun unrelated QA mechanically.

## 14. Release handling

ICA does not require a separate permanent release branch at this stage.

Because `main` is production-facing:

- only production-safe changes should be merged into `main`;
- staging/preview validation should occur on the branch/PR/local or preview environment before merge;
- a future dedicated staging environment may be introduced only when real release complexity justifies it.

## 15. Relationship to M11 and M12

M10 provides the workflow hooks; later milestones deepen the evidence:

- **M11** adds repeatable screenshot/visual-regression evidence;
- **M12** adds formal technical thresholds for accessibility, performance and SEO.

M11/M12 may add required checks to PRs, but they should preserve this minimal operational model unless a real need requires more process.

## 16. Success criterion

M10 is successful when the Product Owner can request an outcome without managing GitHub procedure, and agents can consistently:

**route -> branch -> implement -> verify -> PR -> merge/report**

with enough evidence to protect ICA quality and without unnecessary bureaucracy.
