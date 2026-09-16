# In Cerca di Avventura — Page Dossier: Le Adunanze

**Document ID:** ICA-PAG-ADU-001  
**Page:** Le Adunanze  
**Narrative identity:** Le Adunanze  
**Functional descriptor:** Eventi e appuntamenti Sorcery  
**Status:** `SPECIFIED (REVIEW_REQUIRED)`  
**Version:** 0.1  
**Phase:** Creative Canonical Lock — vertical-slice validation  
**Delivery status:** `COMPLETE`  
**Canonical readiness:** `REVIEW_REQUIRED`  
**Readiness:** `NOT_READY`  
**Last reviewed:** 2026-09-16  
**Primary dependencies:** `docs/TERMINOLOGY_BIBLE.md`, `docs/PRIMARY_INFORMATION_ARCHITECTURE.md`, `docs/EXPERIENCE_MAP.md`, `docs/RELATIONSHIP_MAP.md`, `docs/CONTENT_GOVERNANCE.md`, `docs/PAGE_STATE_MODEL.md`, `docs/CONTENT_READINESS_GATE.md`, `docs/VISUAL_HIERARCHY_MATRIX.md`, `docs/RESPONSIVE_ART_DIRECTION.md`, `docs/NARRATIVE_AESTHETIC_QA.md`

> Le Adunanze is the single active umbrella for real-world Sorcery gatherings represented by ICA. Giostre is a strict subset, not a sibling taxonomy.

---

# 1. Provenance

- `source_type`: `DERIVED`
- `source_ref`: `CDL-003`, `CDL-004`, `CDL-005`
- `decision_status`: `REVIEW`

---

# 2. Functional identity

Purpose:

- discover upcoming and recent Sorcery events;
- distinguish ICA Giostre from external competitive/community events;
- reach factual event detail, venue, organizer, registration/info and later memory;
- preserve completed/cancelled records truthfully.

TECH base: `EVENT`.

Primary user questions:

- What can I attend?
- When and where?
- Who organizes it?
- Is it a Giostra?
- Is it still active, cancelled or completed?
- What happened afterward?

---

# 3. Writer Intent

This is where roads and people converge before departure.

The page may feel like an active gathering place or notice hall, but it must never become a literal bulletin-board gimmick that hides dates, locations or status.

Narrative intensity belongs to the page opening; event browsing itself is functional.

---

# 4. Launch taxonomy

Locked invariant:

- `Giostra`: `EVENT` + competitive=true + organizer=ICA + approved Giostra subtype.

Working operational classes for vertical-slice validation:

- `COMPETITIVE_EXTERNAL`;
- `COMMUNITY`;
- `CONVENTION_DEMO`;
- `OTHER`.

These classes are **PROPOSED operational taxonomy**, not Product Owner-locked narrative terms. They may be simplified or renamed in the Content Model without changing the Giostra invariant.

No separate Product Owner decision is required before testing the slice.

---

# 5. User jobs

| Job | Success |
|---|---|
| Find next event | relevant upcoming list is visible and sortable/scannable |
| Identify Giostra | Giostra marker and organizer semantics are unambiguous |
| Understand status | upcoming/cancelled/completed state is explicit text |
| Reach practical info | date, venue, organizer and registration/info route are accessible |
| Explore memory | completed event can route to results/Cronache |

---

# 6. Page architecture

| Module | Role | Required | Visual level |
|---|---|---:|---|
| `ADU01` | threshold + descriptor | Yes | V5 |
| `ADU02` | upcoming events | Yes | V3 |
| `ADU03` | filters/sort when useful | Conditional | V1 |
| `ADU04` | Giostre shortcut/filter | Yes | V2 |
| `ADU05` | recent/completed events | Yes when available | V2 |
| `ADU06` | valid empty/error state | Yes | V1 |

Default ordering is chronological, nearest upcoming first.

Filters activate only when content volume justifies them; do not display decorative controls for a list of two events.

---

# 7. Event presentation contract

Minimum factual fields for a normal event card:

- title;
- start date/time;
- status;
- organizer;
- city / venue where available;
- event class;
- Giostra marker only if invariant passes.

Optional:

- format;
- registration/info URL;
- image;
- short editorial summary.

Missing optional data remains missing; no lore filler.

Cancelled event:

- prominent text status;
- no active registration CTA;
- may remain listed where historically/contextually useful.

Completed event:

- no registration CTA;
- may expose Result/Cronaca routes.

---

# 8. States / readiness

`LIVE_SPARSE` is allowed with a small set of verified events.

If there are no upcoming events:

- say so plainly;
- show recent/completed content only if useful;
- do not fabricate “coming soon”.

If the source fails:

- use `ERROR`, not a legitimate empty state.

`PASS_STAGING_ONLY` for this dossier requires the synthetic fixture to validate complete, sparse and cancelled event behavior.

---

# 9. Relationships

Required:

- EVENT → ORGANIZATION;
- EVENT → VENUE when known;
- EVENT → Proclamo when news exists;
- EVENT → RESULT when completed and results exist;
- EVENT → Cronaca when published;
- EVENT ↔ PLAYER through participation/result where available.

Giostre destination may be implemented as a subordinate page and/or stable filtered route, but its semantics are fixed.

---

# 10. Components

| Component | Role | Shared |
|---|---|---|
| `CMP-EVT-CARD` | event list item | Yes |
| `CMP-EVT-STATUS` | upcoming/cancelled/completed | Yes |
| `CMP-EVT-META` | date/venue/organizer/format | Yes |
| `CMP-FILTER-BAR` | conditional browsing control | Yes |
| `CMP-EMPTY-STATE` | truthful absence/error | Yes |
| `CMP-CTA-LINK` | registration/info/detail | Yes |

No final visual asset is authorized.

---

# 11. Responsive behavior

Desktop:

- compact event rows/cards with clear status/date hierarchy;
- filters may sit inline if volume supports them.

Mobile:

- date/status/title first;
- metadata stacks;
- registration/info remains reachable;
- Giostra marker never replaces text;
- filters collapse into accessible controls;
- no horizontal event table.

---

# 12. Data contract

Required EVENT fields for vertical slice:

- `id`;
- `title`;
- `status`;
- `start_at`;
- `organizer_id`;
- `competitive`;
- `is_giostra`;
- `event_class`.

Conditional:

- `venue_id`;
- `end_at`;
- `format`;
- `registration_url`;
- `home_featured`.

Invariant:

`is_giostra=true` → `competitive=true` AND `organizer_id=ORG-ICA`.

---

# 13. Traceability

| Decision ID | Decision | Source | Status |
|---|---|---|---|
| `PAG-ADU-001` | Adunanze is the active event umbrella. | `CDL-004` | PRODUCT OWNER LOCKED |
| `PAG-ADU-002` | Giostre is a strict subset. | `CDL-005` | PRODUCT OWNER LOCKED |
| `PAG-ADU-003` | chronological upcoming list is default. | Experience Map | REVIEW |
| `PAG-ADU-004` | secondary filters activate only when useful. | usability/content density | REVIEW |
| `PAG-ADU-005` | cancelled events have no registration CTA. | Page State Model | REVIEW |
| `PAG-ADU-006` | working non-Giostra event classes are operational, not canonical narrative terms. | vertical-slice need | REVIEW |

---

# 14. Narrative/Aesthetic QA focus

- Adunanza/Giostra boundary correct;
- no official Sorcery terminology repurposed;
- event facts dominate repeated cards;
- no decorative empty hall;
- cancellation unmistakable;
- mobile keeps status/date/actions.

---

# 15. Product Owner decisions

No new Product Owner decision blocks the vertical slice.

The exact long-term internal taxonomy beyond the Giostra invariant can remain `REVIEW` until real content volume demonstrates what filters/categories are actually needed.

---

# 16. Definition of Ready

**Vertical-slice specification state:** `READY_FOR_VALIDATION`  
**Canonical state:** `REVIEW_REQUIRED`  
**Production readiness:** `NOT_READY`
