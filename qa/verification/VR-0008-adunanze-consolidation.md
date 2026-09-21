# VR-0008 — Adunanze consolidation

## Record metadata

- **Verification ID:** VR-0008
- **Object ID / Name:** ADU-CONSOLIDATION-2026-09-21
- **Object type:** page-template / content-data / code-change / governance
- **Version label:** consolidation pass 1
- **Tested head SHA:** `8b5c969d9b3a9b3948673d1ad329036baf03700b`
- **PR:** #56
- **Merged main SHA:** pending
- **Tested-head vs merged-tree/content equivalence confirmed:** pending
- **Lifecycle state before verification:** IMPLEMENTED
- **Requested target state:** VERIFIED
- **Release readiness target:** STAGING_READY
- **Applicable specifications:** ICA-CANON-001 v1.2; ICA-RSP-001; M7.1; M8; M9; M11; M12; Asset Specification
- **Applicable QA families:** GEN / PAG / DAT / TEC / A11Y / VIS / PERF
- **Tester / Agent:** ChatGPT / GitHub Actions
- **Date:** 2026-09-21

## Environment

- **Environment:** GitHub Actions, local static server on PR head
- **Browser / Version:** Chromium via Playwright 1.55.0
- **OS / Device:** Ubuntu GitHub Actions runner
- **Viewport(s):** 360×800, 390×844, 768×1024, 1024×768, 1280×800, 1440×900, 1920×1080
- **Input mode:** automated keyboard focus plus rendered browser checks
- **Stress fixture used:** no

## Checks

| Check ID | Criterion | Result | Evidence | Defect / Exception | Notes / N/A rationale |
|---|---|---|---|---|---|
| QA-GEN-001 | Repository structural baseline remains valid | PASS | GitHub Actions run 35593715088 — ICA baseline QA | — | Required JSON and local references resolved |
| QA-PAG-ADU-001 | Portal keeps approved battlefield + International-left + National-right composition | PASS | GitHub Actions run 35593715165 screenshots/artifact | — | Desktop composition verified across required widths |
| QA-A11Y-ADU-001 | National gate is a keyboard-focusable link with visible focus | PASS | Adunanze visual QA, all viewport JSON evidence | — | Full gate is the target |
| QA-PAG-ADU-002 | International gate is not an active link | PASS | Adunanze visual QA | — | In-development state remains non-interactive |
| QA-DAT-ADU-001 | Adunanze Nazionale excludes completed events | PASS | Adunanze visual QA | — | Only `futura` and `in corso` are rendered |
| QA-DAT-ADU-002 | Upcoming National events render chronologically | PASS | Adunanze visual QA | — | Date order checked from rendered data attributes |
| QA-DAT-ADU-003 | Homepage derives next event from shared source | PASS | Adunanze visual QA homepage data check | — | Rendered event ID compared with `data/events.json` |
| QA-DAT-ADU-004 | Shared data contains no past-dated event still marked `futura` | PASS | Adunanze visual QA | — | Check is date-sensitive and intentionally guards stale status |
| QA-VIS-ADU-001 | No page-level horizontal overflow | PASS | Adunanze visual QA at all seven required viewports | — | Portal and National checked |
| QA-TEC-ADU-001 | Portal/National browser console remains error-free | PASS | Adunanze visual QA | — | All tested viewports |
| QA-PAG-CHR-001 | Cronache remains compatible after shared data/shell changes | PASS | GitHub Actions run 35593714850 — Cronache visual QA | — | Completed-only rendering retained |
| QA-DAT-ADU-005 | National empty state renders when the event source is empty | PASS | Adunanze visual QA intercepted empty source | — | 390×844 evidence captured |

## Defects and exceptions

No Critical or High defect was observed by the automated checks.

No exception is being used to claim APPROVED or PRODUCTION_READY status.

## Evidence summary

- `.github/workflows/adunanze-visual-qa.yml`
- `scripts/adunanze_visual_regression.mjs`
- GitHub Actions run **35593715165** — Adunanze visual QA — PASS
- GitHub Actions run **35593714850** — Cronache visual QA — PASS
- GitHub Actions run **35593715088** — ICA baseline QA — PASS
- workflow artifact: `adunanze-visual-qa-8b5c969d9b3a9b3948673d1ad329036baf03700b`
- shared source: `data/events.json`
- portal: `beta/adunanze/`
- National: `beta/adunanze/nazionale/`
- historical view: `beta/cronache/`

## Dependency freshness

- **Material dependencies checked:** shared event data, shared shell/navigation CSS, Adunanze portal assets, Home event rendering, National rendering, Cronache rendering
- **Any RECHECK_REQUIRED flag:** no
- **If yes, affected evidence rerun:** N/A

## Residual uncertainty

- The three Adunanze artworks remain **candidate** assets; formal Product Owner asset approval is not assigned by this record.
- No M11 approved visual baseline is created yet. Workflow screenshots are candidate evidence for Product Owner review.
- No M12 canonical-page marker/registry entry is added; the beta pages remain outside canonical production-page coverage until visual acceptance and final technical review.
- Responsive image derivatives were not introduced in this pass because the current WebP payload is moderate and no failing performance evidence yet justifies additional asset proliferation. This should be reassessed with Lighthouse/runtime measurements before production readiness.
- The International section remains intentionally unavailable.

## Outcome

- **Verification result:** PASS
- **Lifecycle state supported by evidence:** VERIFIED
- **Release readiness supported:** STAGING_READY
- **Critical defects open:** 0
- **High defects open:** 0
- **Medium defects open:** 0 known from automated scope
- **Approval recommendation:** yes, for Product Owner visual review
- **Product Owner approval recorded:** no
- **Approval date / reference:** pending

This record supports VERIFIED/STAGING_READY for the tested consolidation scope. It does not self-assign APPROVED or PRODUCTION_READY.
