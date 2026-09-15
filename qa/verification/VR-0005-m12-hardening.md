# VR-0005 — M12 Technical Baseline Hardening v1.1

- **Object ID / Name:** ICA-TECH-001 / M12 Technical Baseline
- **Object type:** governance + code-change
- **Version label:** 1.1
- **Tested implementation head SHA:** `89e543ffc3bbc0f91ba296272f351b128e8c63ea`
- **PR:** #20
- **Merged main SHA:** pending at verification time
- **Final PR tree / merged tree:** pending
- **Lifecycle state before verification:** VERIFIED v1.0
- **Requested target state:** VERIFIED v1.1
- **Release readiness target:** NOT_READY / governance-system object
- **Applicable specifications:** `ICA_CANONICAL_SPEC.md`, M7/M7.1, M8/M8.1, M9/M9.1, `GITHUB_WORKFLOW.md`, `VISUAL_REGRESSION.md`, `TECHNICAL_BASELINE.md`
- **Applicable QA families:** GEN / TEC / A11Y / PERF
- **Primary QA Profile:** QAP-CODE
- **Tester / Agent:** ChatGPT
- **Date:** 2026-09-15

## Checks

| Check ID | Criterion | Result | Evidence | Defect / Exception | Notes |
|---|---|---|---|---|---|
| QA-GEN-001 | Object identity/version clear | PASS | `docs/TECHNICAL_BASELINE.md` | — | ICA-TECH-001 v1.1, status VERIFIED — Approval Pending. |
| QA-GEN-002 | Applicable specs identified | PASS | M12 authority header + Project Index | — | No new governance layer introduced. |
| QA-GEN-003 | No canonical conflict | PASS | manual review | — | M12 remains subordinate to Canonical/M7–M11. |
| QA-GEN-007 | Known uncertainty recorded | PASS | M12 runtime protocol + Context | — | Runtime/full WCAG evidence remains page-level hybrid work. |
| QA-TEC-001 | Smallest coherent scope | PASS | PR #20 | — | Hardening limited to M12 spec, registry, checker and routing. |
| QA-TEC-002 | No unapproved dependency | PASS | `scripts/technical_baseline.py` | — | Python standard library only. |
| QA-TEC-003 | Referenced files exist | PASS | `ICA baseline QA` run #17 | — | Structural and M12 deterministic checks completed successfully. |
| QA-TEC-005 | Internal paths/checks valid | PASS | `ICA baseline QA` run #17 | — | Schema v2, threshold contract and zero-page legacy transition pass. |
| QA-A11Y-007 | Accessibility thresholds preserved | PASS | registry + M12 §4 | — | WCAG 2.2 AA / 4.5:1 / 3:1 unchanged and now CI-protected. |
| QA-A11Y-010 | Touch target baseline preserved | PASS | registry + M12 §4 | — | 44×44 CSS px retained and CI-protected. |
| QA-PERF-002 | No unnecessary blocking dependency | PASS | implementation review | — | No browser/package-manager dependency added. |
| QA-PERF-004 | Performance measurement protocol defined | PASS | M12 §6 | — | Production-like mobile, three comparable runs when practical, median evidence. |
| QA-PERF-005 | Layout-shift/LCP rules preserved | PASS | M12 §5 | — | Existing performance implementation rules retained. |

## Hardening coverage

M12 v1.1 now:

- validates every configured threshold against the specification;
- rejects duplicate `object_id`, `path` or `canonical_url` entries;
- adds `lang`, `indexable` and `shareable` page semantics;
- requires canonical production candidates to carry `<meta name="ica-status" content="canonical">`;
- scans repository HTML so a canonical-marked page cannot escape the registry;
- rejects registered pages without the marker;
- validates exact title/canonical counts, expected language and non-duplicated metadata;
- requires `og:url` to match canonical URL and `og:image` to use absolute HTTPS for shareable pages;
- defines a repeatable runtime measurement protocol;
- distinguishes Core Web Vitals requirements from Lighthouse 90 as a diagnostic target.

## Defects and exceptions

- Critical: 0
- High: 0
- Medium: 0 new M12 defects
- Existing external governance gap: GitHub Issue #17 (`main` protection), not caused by M12
- Exceptions: none

## Coverage state

`qa/technical-baseline.json` intentionally still contains zero canonical pages. The current legacy homepage is not marked canonical and therefore does not falsely claim M12 compliance.

## Residual uncertainty

- Browser/runtime metrics and full WCAG evidence begin with Canonical Implementation v1.
- M12 v1.1 deliberately does not add Lighthouse/axe/Playwright dependencies before real canonical pages justify them.
- Explicit Product Owner `APPROVED` status for M12 remains pending; authorisation of this hardening does not silently promote lifecycle state.

## Outcome

- **Verification result:** PASS
- **Lifecycle state supported by evidence:** VERIFIED v1.1
- **Release readiness supported:** NOT_READY / not applicable as a governance-system object
- **Critical defects open:** 0
- **High defects open:** 0
- **Approval recommendation:** yes
- **Product Owner approval recorded:** no

M12 v1.1 is **VERIFIED — Product Owner Approval Pending**. Canonical-page compliance coverage begins with Canonical Implementation v1.
