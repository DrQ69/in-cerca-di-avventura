# ICA GitHub Workflow

**Document ID:** ICA-WF-001  
**Status:** Approved specialist specification  
**Version:** 1.1  
**Milestone:** M10 — GitHub Workflow  
**Product Owner approval recorded:** 2026-09-15  
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
8. Squash merge is the default for ordinary ICA PRs so `main` preserves one coherent history entry per work block.

## 3. Trivial vs non-trivial changes

A change is normally **non-trivial** when it affects product behaviour, canonical content/data, reusable UI, responsive behaviour, assets, accessibility, public pages, governance or deployment-relevant code.

Examples include new/changed P0/P1 components, page/template changes, factual event/result/deck/player data, production assets, responsive/navigation changes, JavaScript interactions, governance/specification changes, or any change requiring a Verification Record under M8/M9.

A change may be treated as **trivial** only when it is clearly low-risk, isolated and does not affect behaviour or canonical meaning, for example a typo in non-factual documentation.

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

Branch names describe the outcome, not the person/tool. Short-lived branches are preferred and should be retired after merge when practical.

## 5. Agent authorisation rule

For repository-specific work, instructions such as **“procedi”**, **“implementa”**, **“fai le modifiche”**, **“continua”** or equivalent authorise the agent to complete the normal M10 flow — branch, implementation, QA, PR and merge — when all of the following remain true:

- the requested outcome is already clear;
- no locked/canonical decision must be changed;
- no new material product/design/content choice requires Product Owner judgement;
- no exception requiring Product Owner acceptance is needed;
- M8/M9 merge conditions are satisfied.

The agent must stop and request a Product Owner decision when any of those conditions fail. This rule removes routine Git orchestration from the Product Owner without granting agents approval authority they do not have.

## 6. Standard agent flow

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
11. merge using **squash** by default when authorised and M8/M9 rules permit it;
12. report changed files, verification status, remaining risk and any Product Owner decision still needed.

Do not ask the Product Owner to repeat workflow rules already defined in the repository.

## 7. Pull Request contract

Every non-trivial PR should answer only:

- **Scope:** what changed?
- **Affected objects/files:** which IDs or paths?
- **Why:** what outcome does this achieve?
- **QA:** which QA Profile / Verification Record applies?
- **Defects / Exceptions:** what remains open?
- **Uncertainty:** what was not verified?
- **Approval required:** is a Product Owner decision needed?

Use `.github/pull_request_template.md`. Do not duplicate full QA evidence in the PR body when it already exists in `qa/verification/` or linked evidence.

## 8. Defect handling

Use the lightest mechanism that preserves traceability.

A defect may remain only in the PR/Verification Record when it is found and fixed in the same work block, does not survive merge and needs no future owner/action.

Create a GitHub Issue when a Medium-or-higher defect survives the current PR, work must be deferred/assigned, durable reproduction/history is needed, or a Critical/High defect is identified.

Defect workflow vocabulary is:

`Open -> In Progress -> Fixed -> Closed`

Do not use `Verified` as a defect status; verification evidence belongs in the Verification Record and object lifecycle.

Critical/High defects block production readiness under M8/M8.1. Accepted exceptions use stable `EXC-XXXX` entries in `docs/EXCEPTION_REGISTER.md`; an Issue does not replace the Exception Register.

## 9. Verification Records

A non-trivial claim of `VERIFIED` requires a Verification Record under M8/M9 in `qa/verification/`.

Verification Records must identify immutable repository state where available:

- tested head SHA;
- PR number;
- merged `main` SHA once known;
- whether tested-head and merged-tree/content equivalence has been confirmed.

A branch name alone is not sufficient version evidence. If a post-merge SHA cannot yet be known when the record is first written, update the record after merge or record the follow-up reference in the next governance verification.

Do not create a Verification Record for every trivial documentation edit.

## 10. Merge policy

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

A PR must not be merged merely because GitHub reports it mergeable. A successful merge does **not** automatically promote objects to `VERIFIED`, `APPROVED` or `PRODUCTION_READY`.

**Default merge method:** squash. Use another method only when preserving intermediate commit history has a concrete documented benefit.

## 11. Product Owner decision points

The Product Owner is required when an object is promoted to `APPROVED`, a locked/canonical decision changes, an exception needs Product Owner acceptance, unresolved ambiguity materially changes product/design/content intent, or a release is represented as `PRODUCTION_READY` when approval is required.

The Product Owner is not required to manually approve routine branch creation, QA execution, defect logging, PR creation or ordinary technical merge mechanics when the task already authorises implementation/integration under section 5.

## 12. Lightweight CI baseline

M10 uses deterministic, low-maintenance automated checks suitable for the current static architecture.

The baseline CI verifies:

- key JSON files parse correctly;
- registered M11 visual-baseline files resolve;
- local asset/script/stylesheet references resolve across **all repository HTML pages**, not only the homepage;
- obviously missing referenced repository paths fail the check.

This CI is an automated QA aid, not the full quality gate. M11 owns visual-regression evidence; M12 owns final accessibility/performance/SEO thresholds.

## 13. CI enforcement and branch protection

A failing required baseline CI check blocks merge until fixed or the check is proven invalid and the workflow itself is corrected.

The target repository setting for `main` is minimal protection:

- require the `ICA baseline QA` status check before merge;
- disallow force-push to `main`;
- disallow deletion of `main`;
- do **not** require a human review for every routine PR at this stage.

These settings are repository-admin controls. If the active agent connection cannot change branch protection, the gap must be tracked durably as a GitHub Issue rather than silently treated as enforced.

## 14. Recheck after dependency changes

When M8.1/M9.1 identifies `RECHECK_REQUIRED`, the PR states which dependency changed, which evidence became stale, which targeted checks were rerun and which higher-level objects may reference refreshed evidence. Do not rerun unrelated QA mechanically.

## 15. Release handling

ICA does not require a separate permanent release branch. Because `main` is production-facing, only production-safe changes should be merged. Staging/preview validation occurs on branch/PR/local or preview environment before merge; a dedicated staging environment is introduced only when real release complexity justifies it.

## 16. Relationship to M11 and M12

M10 provides the workflow hooks. M11 adds repeatable visual-regression evidence; M12 adds formal technical thresholds. They may add required checks while preserving this minimal operational model unless a real need requires more process.

## 17. Success criterion

M10 is successful when the Product Owner can request an outcome without managing GitHub procedure, and agents consistently:

**route -> branch -> implement -> verify -> PR -> merge/report**

with enough evidence to protect ICA quality and without unnecessary bureaucracy.
