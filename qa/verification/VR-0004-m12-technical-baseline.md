# VR-0004 — M12 Technical Baseline

- **Object ID / Name:** ICA-TECH-001 / M12 Technical Baseline
- **Object type:** governance + code-change
- **Version label:** 1.0
- **Tested head SHA:** `812a3eb83a508f41b7c586f913524f33cbdd9937`
- **PR:** #19
- **Merged main SHA:** pending at verification time
- **Tested-head vs merged-tree/content equivalence confirmed:** pending until squash merge
- **Lifecycle state before verification:** SPECIFIED / IMPLEMENTED
- **Requested target state:** VERIFIED
- **Release readiness target:** NOT_READY / governance-system object
- **Applicable specifications:** `ICA_CANONICAL_SPEC.md`, M7/M7.1, M8/M8.1, M9/M9.1, `GITHUB_WORKFLOW.md`, `VISUAL_REGRESSION.md`
- **Applicable QA families:** GEN / TEC / A11Y / PERF
- **Primary QA Profile:** QAP-CODE
- **Tester / Agent:** ChatGPT
- **Date:** 2026-09-15

## Checks

| Check ID | Criterion | Result | Evidence | Defect / Exception | Notes |
|---|---|---|---|---|---|
| QA-GEN-001 | Object identity/version clear | PASS | `docs/TECHNICAL_BASELINE.md` | — | Stable ID `ICA-TECH-001`, version 1.0. |
| QA-GEN-002 | Applicable specs identified | PASS | M12 authority header + Project Index | — | M12 explicitly remains subordinate to Canonical/M7–M11. |
| QA-GEN-003 | No canonical conflict | PASS | manual review | — | Does not change product/IA/design/content rules. |
| QA-GEN-007 | Known uncertainty recorded | PASS | M12 legacy transition/completion sections | — | Runtime evidence and canonical-page coverage are explicitly deferred to Canonical Implementation v1. |
| QA-TEC-001 | Smallest coherent scope | PASS | PR #19 | — | Adds one specialist spec, registry, stdlib checker, CI hook and routing updates. |
| QA-TEC-002 | No unapproved dependency | PASS | `scripts/technical_baseline.py` | — | Python standard library only; no package manager/framework/browser dependency. |
| QA-TEC-003 | Referenced files exist | PASS | `ICA baseline QA` run #13 | — | Structural QA and M12 script completed successfully. |
| QA-TEC-005 | Internal paths/checks valid | PASS | `ICA baseline QA` run #13 | — | Registry valid; canonical coverage intentionally zero. |
| QA-A11Y-007 | Measurable contrast baseline defined | PASS | `docs/TECHNICAL_BASELINE.md` §4 | — | 4.5:1 normal text, 3:1 large/non-text UI where applicable. |
| QA-A11Y-010 | Touch target baseline preserved | PASS | M12 §4 | — | Existing stricter ICA 44×44 CSS px target retained. |
| QA-PERF-002 | No unnecessary blocking dependency introduced | PASS | implementation review | — | CI remains lightweight and stdlib-only. |
| QA-PERF-004 | LCP loading rule preserved | PASS | M12 §5 | — | LCP/hero not incorrectly lazy-loaded; below-fold images may lazy-load. |
| QA-PERF-005 | Layout-shift rule preserved | PASS | M12 §5 | — | Dimensions/aspect-ratio reservation explicitly required. |

## Measurable baseline review

M12 defines the following production targets for canonical pages:

- WCAG target: 2.2 AA;
- normal-text contrast ≥ 4.5:1;
- large-text contrast ≥ 3:1;
- non-text UI contrast ≥ 3:1 where required;
- ICA primary/repeated touch target: 44×44 CSS px;
- LCP ≤ 2.5 s;
- CLS ≤ 0.10;
- INP ≤ 200 ms when meaningful;
- Lighthouse Performance ≥ 90 as normal production target.

Static CI does not claim to measure runtime Core Web Vitals or full WCAG conformance.

## Defects and exceptions

- Critical: 0
- High: 0
- Medium: 0 new M12 defects
- Low: 0 known
- Existing external governance gap: GitHub Issue #17 (`main` protection), not caused by M12
- Exceptions: none

## Evidence summary

- `docs/TECHNICAL_BASELINE.md`
- `qa/technical-baseline.json`
- `scripts/technical_baseline.py`
- `.github/workflows/qa-baseline.yml`
- `docs/PROJECT_INDEX.md`
- `CLAUDE.md`
- `docs/PROJECT_CONTEXT.md`
- PR #19
- GitHub Actions `ICA baseline QA` run #13: success

## Coverage state

`qa/technical-baseline.json` currently contains zero canonical pages by design.

This proves **M12 system establishment**, not canonical-page compliance. The current legacy/prototype homepage is intentionally excluded. Canonical pages must be registered as they become real production candidates.

## Dependency freshness

- M10 v1.1 and M11 are current.
- M12 preserves M11 registry checks and does not invalidate existing visual evidence.
- No unrelated dependency requires re-verification.

## Residual uncertainty

- Runtime Core Web Vitals require browser/production-like measurements during canonical page implementation.
- Full WCAG conformance requires manual/hybrid testing in addition to deterministic source checks.
- `robots.txt` and `sitemap.xml` become release requirements once the canonical multi-page site exists.

## Outcome

- **Verification result:** PASS
- **Lifecycle state supported by evidence:** VERIFIED for M12 system implementation
- **Release readiness supported:** NOT_READY / not applicable as a governance-system object
- **Critical defects open:** 0
- **High defects open:** 0
- **Medium defects open:** 0 new
- **Approval recommendation:** yes
- **Product Owner approval recorded:** no — explicit approval of M12 as a specialist specification remains a Product Owner decision

M12 v1.0 is **IMPLEMENTED + VERIFIED** at system level. Canonical-page compliance coverage remains pending Canonical Implementation v1.
