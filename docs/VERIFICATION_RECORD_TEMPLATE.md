# ICA Verification Record Template

Use one record for each non-trivial verification claim. M9 check IDs from `docs/QA_CHECKLIST.md` are the canonical criteria references.

## Record metadata

- **Verification ID:** VR-XXXX
- **Object ID / Name:**
- **Object type:** component / asset / page-template / content-data / code-change / release / governance
- **Version label:**
- **Tested head SHA:**
- **PR:**
- **Merged main SHA:** pending / SHA
- **Tested-head vs merged-tree/content equivalence confirmed:** yes / no / pending / N/A
- **Lifecycle state before verification:**
- **Requested target state:**
- **Release readiness target:** NOT_READY / STAGING_READY / PRODUCTION_READY
- **Applicable specifications:**
- **Applicable QA families:** GEN / CMP / AST / PAG / DAT / TEC / A11Y / VIS / PERF / REL / other
- **Tester / Agent:**
- **Date:**

A mutable branch name is useful context but is not sufficient immutable version evidence. Record commit SHAs whenever repository state is part of the claim.

## Environment

- **Environment:** local / preview / staging / production-like
- **Browser / Version:**
- **OS / Device:**
- **Viewport(s):**
- **Input mode:** keyboard / mouse / touch / screen-reader when relevant
- **Stress fixture used:** yes / no / N/A

## Checks

Use only `PASS`, `FAIL`, `N/A`, or `BLOCKED`. Every `N/A` requires a rationale.

| Check ID | Criterion | Result | Evidence | Defect / Exception | Notes / N/A rationale |
|---|---|---|---|---|---|
| QA-GEN-001 |  | PASS / FAIL / N/A / BLOCKED |  |  |  |

## Defects and exceptions

For every FAIL, record or link:

- defect ID;
- check ID;
- severity: Critical / High / Medium / Low;
- evidence/reproduction;
- owner;
- status;
- mitigation/fix.

For every accepted exception, link the stable `EXC-XXXX` record from `docs/EXCEPTION_REGISTER.md`.

## Evidence summary

List repository paths, screenshots/renders, logs, automated results, source records or other evidence sufficient to support the claim.

Screenshots alone do not prove keyboard, semantics, focus, source integrity or factual correctness.

## Dependency freshness

- **Material dependencies checked:**
- **Any RECHECK_REQUIRED flag:** yes / no
- **If yes, affected evidence rerun:**

## Residual uncertainty

State anything that was not fully verified or that depends on a future milestone, real asset, device/browser or Product Owner decision.

## Outcome

- **Verification result:** PASS / PARTIAL / FAIL
- **Lifecycle state supported by evidence:** SPECIFIED / IMPLEMENTED / VERIFIED
- **Release readiness supported:** NOT_READY / STAGING_READY / PRODUCTION_READY
- **Critical defects open:** 0 / count
- **High defects open:** 0 / count
- **Medium defects open:** 0 / count
- **Approval recommendation:** yes / no / not applicable
- **Product Owner approval recorded:** yes / no / not applicable
- **Approval date / reference:**

`APPROVED` may be assigned only by the Product Owner unless a future written delegation explicitly says otherwise.

A `PASS` Verification Record supports `VERIFIED`; it does not self-assign `APPROVED`.
