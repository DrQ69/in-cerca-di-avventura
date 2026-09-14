# M8.1 — Definition of Done Governance Hardening

**Document ID:** ICA-DOD-GOV-001  
**Status:** Approved governance extension  
**Version:** 1.0  
**Milestone:** M8.1 — DoD Governance Hardening  
**Authority:** subordinate to `docs/ICA_CANONICAL_SPEC.md` and complementary to `docs/DEFINITION_OF_DONE.md`

## 1. Purpose

This document removes remaining ambiguity from the ICA Definition of Done so that Product Owner, ChatGPT, Claude, developers and future agents cannot use the same words to mean different things.

It governs approval authority, staging versus production readiness, verification evidence, exception tracking, source classification and approval invalidation.

## 2. Approval authority

Only the **Product Owner** may promote an object to `APPROVED`, unless a future written delegation matrix explicitly grants approval authority for a defined class of objects.

AI agents, automated checks and developers may:

- propose;
- specify;
- implement;
- test;
- verify;
- recommend approval.

They may not self-promote an object to `APPROVED` merely because all automated or manual checks pass.

Until a delegation matrix exists, no delegated approval is assumed.

## 3. Lifecycle and release-readiness are separate

Object lifecycle remains:

`SPECIFIED -> IMPLEMENTED -> VERIFIED -> APPROVED`

Release readiness is a separate property:

- `NOT_READY`
- `STAGING_READY`
- `PRODUCTION_READY`

### STAGING_READY

A deliverable may be STAGING_READY when:

- required implementation exists;
- blocking verification for the intended staging test has passed;
- unresolved issues are documented;
- no Critical defect is open;
- High defects are allowed only when the staging purpose specifically requires testing the affected area and the risk is documented.

### PRODUCTION_READY

A deliverable may be PRODUCTION_READY only when:

- all required P0 dependencies used in production are `APPROVED`;
- all applicable DoD criteria pass;
- no Critical or High defect is open;
- required evidence is recorded;
- required provenance/rights checks are complete;
- Product Owner approval exists for the production object/release.

A `VERIFIED` object is not automatically PRODUCTION_READY.

## 4. Dependency approval rule

A page, template or production release may not be `PRODUCTION_READY` if a required P0 component or required production asset is only `SPECIFIED`, `IMPLEMENTED` or `VERIFIED`.

For preview/staging work, required P0 dependencies may be `VERIFIED` if the purpose is explicitly to validate them before approval.

P1 dependencies may be accepted in a lower lifecycle state only when their absence or incompleteness does not undermine the intended production behaviour and the exception is documented.

## 5. Verification Record

Any claim of `VERIFIED` for non-trivial work must be backed by a Verification Record.

Canonical template:

`docs/VERIFICATION_RECORD_TEMPLATE.md`

Minimum evidence fields:

- verification ID;
- object ID/name;
- object version/commit;
- applicable specification/DoD references;
- environment;
- viewport/browser/device when relevant;
- test/check ID;
- result: pass/fail/not-applicable;
- evidence location;
- tester/agent;
- date;
- linked defects/exceptions;
- residual uncertainty.

For UI work, screenshots alone are insufficient evidence for keyboard, semantics, focus, overflow, responsive stress or factual integrity checks.

## 6. Exception Register

All active exceptions are stored in:

`docs/EXCEPTION_REGISTER.md`

Each exception must have a stable ID such as `EXC-0001` and record:

- affected object;
- waived criterion;
- rationale;
- severity/risk;
- mitigation;
- owner;
- approval authority;
- date accepted;
- review/expiry condition;
- status.

No exception may exist only in chat history or an untracked note.

### Exception policy by severity

- **Critical:** cannot be accepted for production.
- **High:** cannot be accepted for production. May be temporarily accepted only for staging/testing with explicit Product Owner acknowledgement.
- **Medium:** may proceed if logged and accepted; Product Owner acceptance is required when it affects P0 functionality, accessibility, factual integrity, brand identity or repeated/systemic behaviour.
- **Low:** may proceed if logged when relevant to release quality.

Multiple Medium defects affecting the same critical area may be treated as High due to cumulative risk.

## 7. Source classification

Factual/content verification must record source class where relevant.

Approved source classes:

- `primary-authoritative` — official rulebook, official organiser record, official publication, approved primary dataset;
- `organizer-confirmed` — directly confirmed by event organiser or responsible owner;
- `admin-entered` — manually entered by ICA administrator from a known source, with provenance recorded;
- `derived` — computed from verified primary data using documented rules;
- `third-party-reference` — external supporting source not authoritative for final truth;
- `synthetic-test` — fabricated strictly for QA/stress testing and never publishable as factual ICA data;
- `unknown-unverified` — insufficiently verified and therefore not publishable as fact.

When two sources conflict, do not silently reconcile them. Escalate to the Product Owner or authoritative source owner.

## 8. Provenance and rights minimum

Production visual assets that require provenance must record, where applicable:

- source;
- creator;
- ownership/licence basis;
- permission evidence or reference;
- attribution requirement;
- whether commercial use is permitted;
- generation method;
- source/master location.

An asset with uncertain production rights may be used for internal evaluation only and cannot be PRODUCTION_READY.

## 9. Approval invalidation

Approval is not permanent when a dependency materially changes.

A previously `APPROVED` object becomes `RECHECK_REQUIRED` when a change may invalidate evidence used for approval.

Typical invalidators include:

- major typography/font change affecting fit or hierarchy;
- breakpoint/responsive-rule change;
- component contract change;
- major Design System token or material change;
- Content Model change affecting bindings/fields;
- replacement of a required asset;
- accessibility baseline change;
- scoring/rules change affecting calculated data;
- major browser/platform implementation change;
- provenance/rights status change.

`RECHECK_REQUIRED` is a verification flag, not a fifth lifecycle state. The last approved version remains historical record, but the changed/current version cannot be represented as fully verified until affected checks rerun.

## 10. Verification scope after dependency change

Reverification should be targeted, not indiscriminate.

For each invalidating change:

1. identify dependent objects;
2. identify which previous evidence is no longer valid;
3. rerun only the affected checks plus any regression checks required by risk;
4. record new evidence;
5. restore normal verified/approval claims only when evidence is current.

## 11. Smallest coherent change

For ICA, "smallest coherent change" means:

- modify only files and rules required to fulfil the requested scope;
- do not introduce unrelated refactors, redesigns, dependencies or architecture changes;
- if an adjacent dependency must change for correctness, document why it is necessary;
- do not use a requested fix as justification for broad cleanup unless explicitly approved.

## 12. Interim accessibility baseline before M12

Until M12 establishes the formal technical baseline, UI work must at minimum verify:

- keyboard reachability and operation;
- visible focus;
- semantic landmarks/headings/controls;
- informative vs decorative image treatment;
- readable contrast for essential text/control states;
- no colour-only essential meaning;
- reduced-motion handling where motion exists;
- touch-target requirements from M7.1;
- logical DOM/focus order.

M12 may strengthen these requirements but must not weaken them without explicit Product Owner decision.

## 13. Performance before M12

Before formal M12 thresholds exist:

- M6 asset budgets remain binding;
- avoid unnecessary blocking assets/scripts;
- responsive images must not download clearly oversized desktop derivatives on mobile without justification;
- primary hero loading must not be degraded by lazy-loading when it is the likely LCP element;
- obvious layout shift caused by missing dimensions/aspect ratio is a defect.

## 14. M8.1 exit criteria

M8.1 is complete when:

1. approval authority is deterministic;
2. staging and production readiness are distinguished;
3. verification evidence has a standard record format;
4. exceptions have a persistent register;
5. source classes are defined;
6. provenance/rights minimum is defined;
7. approval invalidation/recheck rules exist;
8. defect acceptance rules are unambiguous;
9. interim accessibility/performance expectations exist before M12;
10. agent instructions require these controls.
