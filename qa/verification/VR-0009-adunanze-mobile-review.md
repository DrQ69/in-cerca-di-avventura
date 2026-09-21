# VR-0009 — Adunanze mobile visual review refinement

## Record metadata

- **Verification ID:** VR-0009
- **Object ID / Name:** ADU-MOBILE-REVIEW-2026-09-21
- **Object type:** page-template / accessibility / responsive refinement
- **Version label:** visual review follow-up 1
- **Tested runtime SHA:** `bfac6dad2b89bde82f15da8ee12f5f0c56d8a9c3`
- **PR:** #58
- **Merged main SHA:** pending
- **Lifecycle state before verification:** IMPLEMENTED
- **Requested target state:** VERIFIED
- **Release readiness target:** STAGING_READY
- **Applicable specifications:** ICA-CANON-001 v1.2; ICA-RSP-001; M7.1; M8; M9
- **Applicable QA families:** PAG / A11Y / VIS / TEC
- **Tester / Agent:** ChatGPT / GitHub Actions
- **Date:** 2026-09-21

## Reason for follow-up

Rendered evidence from VR-0008 showed that on small mobile viewports the inactive International gate appeared before the active National gate, forcing users to traverse the unavailable destination first. The same rendered artifact also made the skip-link treatment visually noisy in full-page evidence.

The follow-up keeps the approved desktop composition unchanged while improving mobile task priority and hardening the shared skip-link pattern.

## Checks

| Check ID | Criterion | Result | Evidence | Notes |
|---|---|---|---|---|
| QA-RSP-ADU-006 | Mobile shows National before International | PASS | Adunanze visual QA run 35595702121 | DOM and visual order align below 768 px |
| QA-RSP-ADU-007 | Tablet/desktop keeps International left and National right | PASS | Adunanze visual QA run 35595702121 | Approved portal hierarchy preserved from 768 px upward |
| QA-A11Y-ADU-002 | Skip link is concealed outside focus and visible when focused | PASS | Adunanze visual QA run 35595702121 | Clipped focusable pattern |
| QA-A11Y-ADU-003 | National gate remains keyboard focusable with visible focus | PASS | Adunanze visual QA run 35595702121 | Full-gate link retained |
| QA-VIS-ADU-002 | No page-level horizontal overflow after responsive reorder | PASS | Adunanze visual QA run 35595702121 | Seven canonical viewports |
| QA-GEN-002 | Repository structural baseline remains valid | PASS | ICA baseline QA run 35595702063 | Local references and required structures pass |

## Viewports

- 360×800
- 390×844
- 768×1024
- 1024×768
- 1280×800
- 1440×900
- 1920×1080

## Defects and exceptions

No Critical, High or Medium defect remains known from this refinement scope.

No exception is used.

## Dependency freshness

- Adunanze portal artwork unchanged.
- Shared event data unchanged.
- National event rendering unchanged.
- Cronache data rendering unchanged.
- Shared navigation visuals unchanged except skip-link accessibility treatment.

The runtime tested SHA differs from the final PR head only if this Verification Record itself is added after the test. That documentation-only delta does not alter runtime output.

## Outcome

- **Verification result:** PASS
- **Lifecycle state supported by evidence:** VERIFIED
- **Release readiness supported:** STAGING_READY
- **Product Owner visual approval recorded:** no
- **M11 approved baseline created:** no
- **M12 canonical page registration changed:** no

This record verifies the responsive/accessibility refinement only. Formal visual approval and any later canonical production promotion remain Product Owner decisions.
