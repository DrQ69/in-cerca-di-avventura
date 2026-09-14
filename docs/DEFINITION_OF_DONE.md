# ICA Definition of Done

**Document ID:** ICA-DOD-001  
**Status:** Approved specialist specification  
**Version:** 1.0  
**Milestone:** M8 — Definition of Done  
**Authority:** subordinate to `docs/ICA_CANONICAL_SPEC.md`

## 1. Purpose

This document defines when work in In Cerca di Avventura (ICA) may be considered finished. A deliverable is not complete merely because it exists, renders once, looks convincing in a screenshot, or has been generated. Completion requires evidence appropriate to the object being completed.

## 2. Completion states

ICA distinguishes four states:

`SPECIFIED -> IMPLEMENTED -> VERIFIED -> APPROVED`

- **SPECIFIED**: role, requirements, dependencies and acceptance criteria are documented.
- **IMPLEMENTED**: the object exists in a usable form and can be tested.
- **VERIFIED**: applicable checks have been performed and recorded.
- **APPROVED**: the Product Owner, or an explicitly authorised approval rule, accepts the object as canonical for production use.

These states are not interchangeable.

## 3. Global Definition of Done

Before any non-trivial object can be marked APPROVED, all applicable conditions must be true:

1. It does not conflict with `docs/ICA_CANONICAL_SPEC.md`.
2. Its purpose and owning component/entity/workstream are clear.
3. No factual content was invented or silently inferred.
4. Dependencies and related specifications have been checked.
5. Naming and IDs follow approved conventions.
6. It does not duplicate an approved solution without justification.
7. Desktop/mobile behaviour is defined when UI is involved.
8. Accessibility requirements are satisfied when applicable.
9. Source/provenance/permission requirements are satisfied when relevant.
10. Known exceptions are documented.
11. The final state is recorded in the repository or another explicitly approved source of truth.
12. The object has an identifiable version/status.

## 4. Component Definition of Done

A reusable P0/P1 component is APPROVED only when:

- ID, purpose and content bindings are documented;
- required/optional content, variants and states are defined;
- interaction states are implemented where applicable;
- keyboard operation and focus-visible work;
- essential behaviour does not depend on hover;
- its responsive contract is complete and tested according to M7/M7.1;
- canonical widths and stress-content fixtures are tested where relevant;
- no page-level horizontal overflow is introduced;
- primary controls meet the 44×44 CSS px target unless a documented exception exists;
- semantics are appropriate;
- important text remains HTML unless explicitly justified;
- decorative assets respect safe areas;
- visual treatment matches ICA Design Foundation and Sorcery layer;
- at least one ICA identity anchor survives on mobile for brand/narrative-heavy components;
- no Critical/High defect remains unresolved.

## 5. Asset Definition of Done

An asset governed by M6 may move to `approved` only when:

- stable asset ID and component/entity relation exist;
- canonical path/filename comply;
- binary exists and renders correctly;
- format, dimensions, crop and focal point are appropriate;
- safe area is documented where needed;
- file size is within budget or exception is documented;
- responsive derivatives exist only where genuinely needed;
- desktop/mobile art direction has been checked when relevant;
- accessibility classification is correct;
- provenance and production-use rights are documented to the required level;
- AI generation method is recorded when applicable;
- functional copy is not unnecessarily baked into raster art;
- manifest status/version are updated.

Reference sheets, raw generations and candidate images are not approved production assets.

## 6. Page / Template Definition of Done

A page/template is APPROVED only when:

- role and URL follow the approved IA;
- content ownership follows the Content Model rather than duplicated hard-coded facts;
- important relations are navigable where relevant;
- hierarchy remains understandable without decorative art;
- factual information is prioritised correctly;
- narrative language does not obscure facts;
- required P0 components are at least VERIFIED;
- responsive layout passes canonical widths and relevant orientation/short-height tests;
- page-level horizontal overflow is absent;
- keyboard order and heading/landmark semantics are valid;
- images have correct informative/decorative treatment;
- loading/empty/error states are handled where relevant;
- links and asset paths resolve;
- factual content is verified;
- prototype content is not presented as real content.

## 7. Content / Data Definition of Done

A public record is APPROVED only when:

- permanent ID and slug follow conventions;
- required entity fields exist;
- data belongs to the correct entity;
- public/private separation is respected;
- Avventuriero public identity remains nickname-only;
- factual fields are verified from an approved source;
- RESULT uses the approved final-position + W/L/D model unless formally revised;
- Campaign scoring follows that Campaign's rules;
- deck data respects Avatar + Atlas + Spellbook;
- narrative and factual fields remain separate;
- relations reference valid IDs;
- synthetic QA fixtures are never published as real data;
- unknown information remains unknown instead of being guessed.

## 8. Code / Technical Change Definition of Done

A code change is VERIFIED only when:

- it is the smallest coherent change required;
- no framework/backend/database dependency is introduced without approval;
- referenced files/assets exist;
- no new console errors or broken internal paths are introduced;
- relevant responsive widths are tested for UI work;
- keyboard/focus behaviour is checked for interaction changes;
- reduced-motion behaviour is preserved where animation is involved;
- semantic HTML is preserved or improved;
- stress-content fixtures are used when text/data density can affect layout;
- legacy code is not silently treated as canonical merely because it predates the new system;
- changed files and residual uncertainty are summarised.

## 9. PR / Release Definition of Done

A coherent PR is ready to merge only when:

- scope is clear and limited;
- changed files match the declared scope;
- canonical/specialist specifications were respected;
- no unresolved Critical/High defect remains;
- required validation evidence exists;
- documentation is updated when a rule changes;
- status/version/manifest records are updated when applicable;
- PR description states what changed, why, how it was verified and what remains pending;
- the change is mergeable and does not knowingly overwrite newer approved work.

A merged PR is not automatic proof that every contained object is APPROVED; object-level status still follows its own lifecycle.

## 10. Defect severity

- **Critical**: breaks core function, factual integrity, primary navigation or creates a severe usability/accessibility failure. Approval blocked.
- **High**: materially breaks a P0/P1 component, responsive layout, key interaction, asset integrity or factual presentation. Approval blocked unless explicitly accepted as a temporary exception.
- **Medium**: degrades quality/consistency but has a workable path around it. May proceed only if logged and accepted.
- **Low**: minor polish or non-blocking refinement. May proceed if documented.

## 11. Exception rule

No agent or developer may silently waive a DoD criterion. If a criterion cannot be satisfied:

1. state the criterion;
2. explain why it cannot currently be met;
3. classify the risk;
4. propose mitigation/follow-up;
5. obtain explicit Product Owner acceptance for Critical/High-impact exceptions;
6. record the exception in the relevant PR/spec/status document.

Temporary acceptance does not rewrite the canonical rule.

## 12. Evidence standard

Completion claims require evidence appropriate to the claim, for example repository paths/commits, screenshots/renders, viewport matrices, keyboard checks, manifest entries, verified source records or automated checks once available.

“Looks correct” is not sufficient evidence for a blocking criterion.

## 13. Relationship to M7.1

M7/M7.1 define what responsive behaviour must be verified. M8 defines whether that verification is required before an object may be called done. For responsive P0/P1 components, M7.1 verification is therefore part of the component DoD.

## 14. Relationship to future milestones

- M9 — QA Checklist turns DoD criteria into repeatable checks.
- M10 — GitHub Workflow defines where and when checks run.
- M11 — Visual Regression supplies repeatable visual evidence.
- M12 — Technical Baseline adds performance/accessibility/SEO thresholds.

When later milestones add stricter checks, this document should be revised rather than allowing conflicting parallel rules.

## 15. M8 exit criteria

M8 is complete when:

1. this Definition of Done exists and is approved;
2. completion states are unambiguous;
3. separate DoD exists for component, asset, page/template, content/data, code and PR/release;
4. defect severity and blocking logic are defined;
5. exception handling cannot be silent;
6. M7.1 is explicitly connected to component completion;
7. future agents are instructed to use this DoD before declaring work complete.
