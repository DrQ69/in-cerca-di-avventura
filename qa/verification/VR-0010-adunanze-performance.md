# VR-0010 — Adunanze performance and responsive asset verification

## Record metadata
- **Verification ID:** VR-0010
- **Object ID / Name:** ADU-PERF-2026-09-21
- **Object type:** performance / responsive assets / accessibility
- **Version label:** performance consolidation pass
- **Tested runtime SHA:** `cae14f47e34a41d096d5cd3540bc220e99847f41`
- **PR:** #59
- **Merged main SHA:** `7a2200825f83f9360c9c7173bdf6df93d69f36ec`
- **Lifecycle state before verification:** VERIFIED / STAGING_READY
- **Applicable specifications:** ICA-RSP-001; M7.1; M8; M9; M12 thresholds
- **Tester / Agent:** ChatGPT / GitHub Actions
- **Date:** 2026-09-21

## Scope
Verification of the final Lighthouse failure remediation, responsive image derivatives, National-page CLS remediation, portal LCP optimization and accessibility/SEO regressions.

## Evidence
- ICA baseline QA run **35600939354** — PASS
- Adunanze visual QA run **35600939337** — PASS
- Adunanze performance QA run **35600939342** — PASS

The performance gate enforces:
- Lighthouse performance score >= 0.90
- LCP <= 2500 ms
- CLS <= 0.10

The passing runtime includes the National shell loading-state correction that prevents the footer from entering the initial mobile layout while asynchronous event cards are inserted.

## Responsive assets
Registered candidate derivatives:
- `assets/adunanze/adunanze-battlefield-512.webp` — 512×219
- `assets/adunanze/adunanze-gate-international-512.webp` — 512×640
- `assets/adunanze/adunanze-gate-national-512.webp` — 512×640

These are technical derivatives only; the approved artwork composition is unchanged.

## Outcome
- **Verification result:** PASS
- **Lifecycle state supported by evidence:** VERIFIED
- **Release readiness supported:** STAGING_READY
- **Product Owner visual approval recorded:** no
- **M11 approved baseline created:** no
- **M12 canonical page registration changed:** no
- **Exceptions used:** none

The final PR head `ea8b8d5f2c5ffdc400460900bdd4301e29a6cdbe` reran baseline, visual and performance QA successfully. The squash-merged tree is equivalent to that verified PR content for this scope. The manifest update, removal of the temporary generator workflow and this verification record do not alter page rendering.
