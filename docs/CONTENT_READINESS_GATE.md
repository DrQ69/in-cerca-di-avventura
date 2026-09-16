# In Cerca di Avventura — Content Readiness Gate

**Document ID:** ICA-CRG-001  
**Status:** DRAFT — Creative Canonical Lock  
**Version:** 0.1  
**Branch:** `governance/narrative-art-bible-v0-1`  
**Depends on:** `docs/CONTENT_GOVERNANCE.md`, `docs/PAGE_STATE_MODEL.md`, `docs/EXPERIENCE_MAP.md`, `docs/RELATIONSHIP_MAP.md`, `docs/PRIMARY_INFORMATION_ARCHITECTURE.md`

> This gate determines when an ICA page or module contains enough truthful, useful and governed content to be exposed at launch or promoted as a normal destination.

---

# 1. Gate principle

A page is not ready because its layout exists.

A page is ready only when the visitor can obtain real value from it without ICA fabricating content, exposing unresolved facts or forcing decorative emptiness.

The gate therefore evaluates **usefulness + truthfulness + governance + navigability**, not content volume alone.

---

# 2. Gate outcomes

- `PASS_LIVE` — sufficient for public launch in at least `LIVE_SPARSE` state.
- `PASS_STAGING_ONLY` — sufficient for controlled staging/review but not public launch.
- `FAIL_CONTENT` — insufficient useful content.
- `FAIL_GOVERNANCE` — source/ownership/privacy/verification unresolved.
- `FAIL_DEPENDENCY` — required linked page/entity/component is not ready.
- `BLOCKED_DECISION` — Product Owner or canonical decision still open.

A gate failure does not require placeholder content; it means the module/page remains hidden or not launched.

---

# 3. Universal launch criteria

A page/module may pass only if all critical criteria are satisfied:

1. **Purpose is explicit** — the visitor can understand what the destination is for.
2. **Core content exists** — at least the minimum content defined by its Page Dossier is real and useful.
3. **Facts are governed** — critical factual fields have an owner/source and required verification.
4. **Privacy is resolved** — real-person/media content is appropriate for public display.
5. **No fabricated filler** — examples/mock data are not presented as production content.
6. **Empty behavior is defined** — optional absent content does not break the page.
7. **Primary actions work** — core CTA or onward route is valid.
8. **Relationships are navigable** — required links to related active entities/pages are available or intentionally omitted.
9. **Current-state semantics are correct** — upcoming/completed/cancelled/archive distinctions are truthful.
10. **Responsive/accessibility baseline is testable** — no critical content depends on hover, hidden imagery or unreadable ornament.

---

# 4. Page-level minimums

These are baseline rules; Page Dossiers may strengthen them but not weaken factual/privacy requirements.

## Home

Minimum `PASS_LIVE`:

- ICA identity + clear Sorcery/community purpose;
- primary navigation available;
- at least one meaningful current or discovery path;
- no empty preview module shown solely for symmetry;
- any “Prossima Adunanza” module must be driven by a verified event selection rule and real event data.

Home does not require every primary destination to have a rich preview at launch.

## Le Adunanze

Minimum `PASS_LIVE`:

- page purpose/filters or browsing structure understandable;
- at least one verified useful event record **or** an intentional valid empty/upcoming state plus useful historical/current context;
- event status, date, organiser and venue handled truthfully where applicable;
- Giostra classification only when approved semantic conditions are satisfied.

## Giostre

Minimum `PASS_LIVE`:

- at least one real ICA-organised competitive event in current or historical scope;
- organiser/competitive subtype verified;
- future registration CTA only when valid;
- completed Giostre can support archival/results-led presentation.

## Cronache

Minimum `PASS_LIVE`:

- at least one substantial published Cronaca plus enough page structure to explain the editorial domain;
- underlying factual references checked where claims depend on events/results/people;
- article provenance/media rights handled.

A larger editorial catalogue is desirable, not mandatory.

## Avventurieri

Minimum `PASS_LIVE`:

- enough verified/privacy-safe profiles to make the index non-misleading;
- nickname identity rules respected;
- no invented biography/achievement/affiliation;
- profile relations shown only when supported.

A single profile may be technically publishable, but the index should not be promoted as a mature community directory until it is meaningfully useful.

## Alleanze

Minimum `PASS_LIVE`:

- at least a small verified set of organisations relevant to ICA;
- geography and organisation identity are accurate;
- `Reami d'Italia` / `Reami d'Oltreconfine` grouping is derived from real geography, not invented affiliation.

## Proclami

Minimum `PASS_LIVE`:

- at least one verified published news item;
- date/headline/source context appropriate;
- no stale item presented as urgent merely to fill the page.

---

# 5. Module readiness

A module passes independently when:

- it has enough real content for its intended layout;
- its absence does not prevent understanding of the parent page;
- it has a defined empty/hide rule;
- any ranking/featured logic is documented and deterministic or explicitly editorially curated;
- linked destination exists or the CTA is omitted.

If an optional Home module fails, **hide the module** rather than fail the whole Home unless the module is essential to the approved Home purpose.

---

# 6. Featured-selection governance

Featured content requires a declared rule.

Possible rule classes:

- chronological next eligible object;
- editorially curated from an eligible pool;
- priority flag governed by editorial policy;
- significance rule derived from structured data.

The system must not silently select content based on visual convenience.

For `Prossima Adunanza`, the final Page Dossier must define eligibility/tie-breaking before the module can pass `PASS_LIVE`.

---

# 7. Dependency rule

A page may reference a non-ready related domain only when the reference does not create a broken promise.

Examples:

- a Cronaca can mention a player before the Avventurieri index launches, but should not link to a nonexistent profile;
- an event can name a venue even if a dedicated venue page does not yet exist;
- Home should not expose a CTA to a primary destination that is intentionally unavailable without a clear alternative.

---

# 8. Quality over volume

The gate explicitly rejects numeric content quotas as the only readiness measure.

Three verified, meaningful items can be more launch-ready than twenty weak or duplicated entries.

Volume thresholds may be added per Page Dossier where discovery UX requires them, but quality/governance remain mandatory.

---

# 9. Staleness and re-gating

Readiness is not permanent.

Re-run the relevant gate when:

- key source ownership changes;
- privacy/rights status changes;
- primary links break;
- a page loses most of its useful content;
- taxonomy/canonical semantics change;
- the page's critical module becomes stale or invalid;
- a major Page Dossier revision changes the minimum state.

A previously live page may move to `STALE_REVIEW` or be hidden if it no longer provides truthful/useful value.

---

# 10. Evidence record

For each launch candidate, the readiness record should capture:

- page/module ID;
- gate outcome;
- date;
- reviewer;
- required content present/missing;
- source/governance status;
- privacy/media status where applicable;
- unresolved dependencies;
- exception reference if any;
- next recheck trigger.

This may later be integrated with the project's existing QA verification records.

---

# 11. Relation to implementation lifecycle

Passing Content Readiness does not mean the page is technically `VERIFIED` or `APPROVED`.

The page still requires:

- approved Page Dossier/canonical semantics;
- component/asset implementation;
- technical QA;
- responsive/accessibility validation;
- visual/narrative QA;
- Product Owner approval where required.

Content Readiness answers only: **is there enough governed, useful real content to justify exposing this experience?**

---

# 12. Suspended/on-hold domains

- `Tesori` is excluded from launch readiness evaluation until Product Owner reopens and defines its scope.
- `Mercante` is excluded while on hold.

They do not block active-domain readiness.

---

# 13. Status

**Current status:** `DRAFT / REVIEW_REQUIRED`  
The gate is sufficiently specified for Page Dossier work but remains part of the Creative Canonical Lock review set.
