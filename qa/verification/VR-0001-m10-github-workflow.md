# VR-0001 — M10 GitHub Workflow

- **Object ID / Name:** ICA-WF-001 / M10 GitHub Workflow
- **Object type:** governance + code/technical change
- **Version / Commit:** branch `governance/m10-github-workflow`
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
| QA-GEN-001 | PASS | manual | M10 has stable ID `ICA-WF-001`, version 1.0 and explicit authority. |
| QA-GEN-002 | PASS | manual | Dependencies and authority are explicitly referenced in `docs/GITHUB_WORKFLOW.md`. |
| QA-GEN-003 | PASS | manual | Workflow preserves Canonical authority and does not redefine product architecture. |
| QA-GEN-005 | PASS | manual | M10 operationalises M8/M9 rather than duplicating them. |
| QA-GEN-007 | PASS | manual | Deferred M11/M12 responsibilities are explicitly stated. |
| QA-TEC-001 | PASS | manual | Scope limited to workflow specification, templates, baseline CI/script and routing updates. |
| QA-TEC-002 | PASS | manual | No framework, package manager, backend or new runtime dependency introduced; CI uses Python stdlib and GitHub Actions. |
| QA-TEC-003 | PASS | automated | Baseline CI validates required JSON and local `index.html` asset/script/stylesheet references. |
| QA-TEC-005 | PASS | automated | `ICA baseline QA` GitHub Actions run #1 completed successfully. |
| QA-TEC-013 | PASS | manual | Legacy implementation is not promoted to canonical workflow precedent. |
| QA-TEC-014 | PASS | manual | PR #15 documents scope and the workflow files make remaining M11/M12 boundaries explicit. |

## Defects and exceptions

- Critical: 0
- High: 0
- Medium: 0 known
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
- GitHub Actions `ICA baseline QA` run #1: success

## Dependency freshness

- M8/M8.1 and M9/M9.1 were current at implementation time.
- No `RECHECK_REQUIRED` flag identified for this governance change.

## Residual uncertainty

- M11 visual regression and M12 formal accessibility/performance/SEO thresholds are intentionally not part of M10.
- Branch protection/ruleset enforcement is not required by M10 v1.0; workflow rules are currently repository conventions plus CI evidence.

## Outcome

- **Verification result:** PASS
- **Lifecycle state supported by evidence:** VERIFIED
- **Release readiness supported:** NOT_READY / not applicable as a governance object
- **Critical defects open:** 0
- **High defects open:** 0
- **Approval recommendation:** yes

`APPROVED` remains a Product Owner decision under M8.1.
