# VR-0001 — M10 GitHub Workflow

- **Object ID / Name:** ICA-WF-001 / M10 GitHub Workflow
- **Object type:** governance + code/technical change
- **Version label:** M10 v1.0 original verification, hardened to v1.1 on 2026-09-15
- **Tested head SHA:** `3e75216a0b4a79d272e33763860e00ea0a4a6e2d`
- **PR:** #15
- **Merged main SHA:** `fd3743216cbb37babcb09c76fd32447a4ebebe4d`
- **Tested-head vs merged-tree/content equivalence confirmed:** yes — both commits reference tree `d122355291d678337b2641807cec5c4eb5e4cbfc`
- **Lifecycle state before verification:** SPECIFIED / IMPLEMENTED
- **Requested target state:** VERIFIED
- **Release readiness target:** NOT_READY (governance object; production-readiness is not the primary claim)
- **Applicable specifications:** `ICA_CANONICAL_SPEC.md`, `DEFINITION_OF_DONE.md`, `M8_1_DOD_GOVERNANCE_HARDENING.md`, `QA_CHECKLIST.md`, `M9_1_QA_EXECUTION_MODEL.md`
- **Primary QA Profile:** QAP-CODE
- **Tester / Agent:** ChatGPT
- **Date:** 2026-09-15

## Checks

| Check ID | Result | Method | Evidence / Notes |
|---|---|---|---|
| QA-GEN-001 | PASS | manual | M10 has stable ID `ICA-WF-001`, explicit authority and versioned workflow specification. |
| QA-GEN-002 | PASS | manual | Dependencies and authority are explicitly referenced in `docs/GITHUB_WORKFLOW.md`. |
| QA-GEN-003 | PASS | manual | Workflow preserves Canonical authority and does not redefine product architecture. |
| QA-GEN-005 | PASS | manual | M10 operationalises M8/M9 rather than duplicating them. |
| QA-GEN-007 | PASS | manual | Deferred M11/M12 responsibilities are explicitly stated. |
| QA-TEC-001 | PASS | manual | Scope is limited to workflow specification, templates, baseline CI/script and routing updates. |
| QA-TEC-002 | PASS | manual | No framework, package manager, backend or new runtime dependency introduced. |
| QA-TEC-003 | PASS | automated | Baseline CI validates required JSON and repository-local references within its defined scope. |
| QA-TEC-005 | PASS | automated | `ICA baseline QA` completed successfully for the original M10 PR. |
| QA-TEC-013 | PASS | manual | Legacy implementation is not promoted to canonical workflow precedent. |
| QA-TEC-014 | PASS | manual | PR #15 documents scope and workflow boundaries. |

## Defects and exceptions

- Critical: 0
- High: 0
- Medium: 0 known in the original M10 implementation
- Low: 0 known
- Exceptions: none

## Evidence summary

- `docs/GITHUB_WORKFLOW.md`
- `.github/pull_request_template.md`
- `.github/ISSUE_TEMPLATE/defect.md`
- `.github/workflows/qa-baseline.yml`
- `scripts/qa_baseline.py`
- `docs/PROJECT_INDEX.md`
- `CLAUDE.md`
- `docs/PROJECT_CONTEXT.md`
- PR #15
- tested head tree: `d122355291d678337b2641807cec5c4eb5e4cbfc`
- merged main tree: `d122355291d678337b2641807cec5c4eb5e4cbfc`

## Dependency freshness

- M8/M8.1 and M9/M9.1 were current at original implementation time.
- M11 later extended the baseline QA script without invalidating the M10 workflow model.
- M10 v1.1 hardening adds immutable version fields, explicit agent authorisation semantics, squash-default merge policy, clearer defect states and stronger CI coverage.

## Residual uncertainty

- M12 formal accessibility/performance/SEO thresholds remain intentionally outside M10.
- Minimal `main` branch protection is a repository-admin control. It is required by M10 v1.1 as a target setting but cannot be considered enforced until GitHub reports it active.

## Outcome

- **Verification result:** PASS
- **Lifecycle state supported by evidence:** VERIFIED
- **Release readiness supported:** NOT_READY / not applicable as a governance object
- **Critical defects open:** 0
- **High defects open:** 0
- **Approval recommendation:** yes
- **Product Owner approval recorded:** yes
- **Approval date / reference:** 2026-09-15 — Product Owner explicitly authorised the requested M10 hardening while retaining M10 as the accepted workflow.

**M10 lifecycle state: APPROVED.**
