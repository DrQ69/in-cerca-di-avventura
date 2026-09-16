# In Cerca di Avventura — Page State Model

**Document ID:** ICA-PSM-001  
**Status:** DRAFT — Creative Canonical Lock  
**Version:** 0.1  
**Branch:** `governance/narrative-art-bible-v0-1`  
**Depends on:** `docs/CONTENT_GOVERNANCE.md`, `docs/EXPERIENCE_MAP.md`, `docs/RELATIONSHIP_MAP.md`, `docs/PRIMARY_INFORMATION_ARCHITECTURE.md`

> This document defines the states that active ICA pages and modules may occupy before, during and after launch so that empty, partial, stale or archival content never forces improvised UX.

---

# 1. Why page states exist

ICA pages are not always equally populated. A robust design must behave correctly when content is:

- not yet available;
- sparse;
- actively current;
- complete;
- stale;
- historical;
- temporarily unavailable.

A page is therefore not designed only for its “ideal full” state.

---

# 2. Core page states

## `NOT_READY`

The page has not met its content/design/readiness requirements and must not be exposed as a normal launch destination.

Typical causes:

- core purpose unresolved;
- Page Dossier not approved;
- required data source unknown;
- required content absent;
- critical governance/privacy questions unresolved.

## `PRELAUNCH_READY`

The page structure and minimum launch content are sufficient for controlled staging/review but it is not yet production-ready.

## `LIVE_SPARSE`

The page is useful and truthful with a small amount of content. Empty secondary areas are hidden or simplified rather than padded with placeholders.

## `LIVE_NORMAL`

The page has enough current content to express its intended experience and normal navigation relationships.

## `LIVE_RICH`

The page has substantial content and may expose richer discovery/filtering/editorial modules without overwhelming the user.

## `STALE_REVIEW`

The page remains accessible but one or more current-state assumptions may be outdated and require editorial verification.

## `ARCHIVAL`

The page or object primarily serves historical memory. Current-action CTAs are removed or reinterpreted appropriately.

## `TEMPORARILY_UNAVAILABLE`

A normally available page cannot be served reliably because of a technical or source-data problem. The state must be explicit and must not mimic a legitimate empty page.

---

# 3. Page state is not lifecycle status

Do not conflate:

- **document/component lifecycle** (`SPECIFIED`, `IMPLEMENTED`, `VERIFIED`, `APPROVED`);
- **production readiness** (`NOT_READY`, `STAGING_READY`, `PRODUCTION_READY`);
- **content/page runtime state** defined here.

A technically `APPROVED` component can appear inside a `LIVE_SPARSE` page. A page can be `LIVE_NORMAL` while one optional module remains hidden.

---

# 4. Module states

Every nontrivial page module should support an appropriate subset of:

- `HIDDEN_NOT_READY` — not shown because content/readiness threshold is not met;
- `EMPTY_ACTIONABLE` — empty but the absence is meaningful and a useful next action exists;
- `SPARSE` — limited content, still useful;
- `NORMAL` — normal intended content range;
- `RICH` — high-volume content may activate additional browsing controls;
- `STALE` — shown with review/update requirement where necessary;
- `ERROR` — source/data failure distinct from legitimate emptiness.

Decorative empty-room states are prohibited.

---

# 5. Active-page baseline states

## Home

- `NOT_READY` until primary IA, core modules and launch content rules are resolved.
- `LIVE_SPARSE` is allowed if Hero/orientation + at least one useful current path exists.
- Optional previews (Avventurieri, Alleanze, Cronache, Proclami) may be hidden independently if not ready.

## Le Adunanze

- `LIVE_SPARSE` allowed with a small number of verified upcoming or recent events.
- If no upcoming events exist, the page should distinguish “nessuna Adunanza imminente” from data failure and may expose recent/past events if useful.

## Giostre

- If no future Giostra is scheduled, the section may remain available as historical/archival competition content if useful.
- Do not create fictional “coming soon” tournaments merely to preserve visual balance.

## Cronache

- `LIVE_SPARSE` allowed with a small but meaningful set of published pieces.
- If historical content dominates, page may function naturally as an archival editorial destination.

## Avventurieri

- Requires enough privacy-safe, verified profiles to make discovery useful.
- A single or trivial index should not be promoted as a mature directory unless intentionally staged.

## Alleanze

- May launch sparsely if the represented organisations are verified and geographic grouping remains truthful.

## Proclami

- Can launch with a small number of current/recent news items.
- Absence of new news is not an error; stale prominence rules should prevent old items appearing “urgent”.

---

# 6. Object-state propagation

Object state can affect page state.

Examples:

- cancelled `EVENT` changes CTA and event presentation but does not necessarily make Le Adunanze stale;
- withdrawn `ARTICLE` may remove one module item without invalidating the page;
- unverified `PLAYER` data should not be promoted into an Avventuriero profile;
- inaccessible external registration link may block a CTA without blocking the event page if the event facts remain valid.

Pages aggregate object states; they do not blindly inherit the worst state unless the affected object is critical to page purpose.

---

# 7. Current vs historical transition

ICA must intentionally transition content from action to memory.

For events:

`UPCOMING → LIVE/ONGOING (if represented) → COMPLETED → RESULTS/CHRONICLE ENRICHMENT → ARCHIVAL`

After completion:

- registration CTA disappears;
- factual event record remains;
- results may become primary;
- related Cronache, Decks, Players and media may become richer;
- Home prominence typically decreases unless editorially significant.

---

# 8. Empty-state rules

Good empty state:

- says what is absent in plain language;
- does not imply a technical failure when none exists;
- offers a relevant path only when useful;
- does not invent lore to disguise missing data.

Bad empty state:

- large decorative chamber with no function;
- fictional notice presented as real content;
- “mystery” copy that prevents the user understanding there is simply no content yet.

---

# 9. Error-state rules

Technical/source errors must be visibly distinct from valid empty content.

Minimum behavior:

- plain explanation;
- retry/alternative route where useful;
- preserve global navigation;
- no false factual fallback;
- no raw technical diagnostics exposed to ordinary users.

---

# 10. Staleness rules

A page enters `STALE_REVIEW` when its critical content depends on time-sensitive information that has exceeded the defined review interval or has a known unresolved change.

Staleness thresholds are content-governance rules, not visual-design choices.

Historical facts do not become stale merely because they are old.

---

# 11. Responsive rule

Page state must not change semantic meaning by viewport.

Mobile may hide secondary decoration or collapse modules, but it must not:

- conceal critical empty/error/status information;
- remove factual status such as cancellation;
- turn a sparse page into an apparently complete one;
- make unavailable functions look active.

---

# 12. Page Dossier requirement

Every Page Dossier must define:

- minimum `LIVE_SPARSE` state;
- intended `LIVE_NORMAL` state;
- which modules may be independently hidden;
- empty states;
- archival behavior;
- stale-data behavior;
- technical error behavior;
- transitions caused by content lifecycle.

---

# 13. Status

**Current status:** `DRAFT / REVIEW_REQUIRED`  
The model is ready to govern Page Dossiers but requires Product Owner approval as part of the Creative Canonical Lock.
