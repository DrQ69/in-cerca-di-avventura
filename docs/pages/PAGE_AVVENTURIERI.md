# In Cerca di Avventura — Page Dossier: Avventurieri

**Document ID:** ICA-PAG-PLY-001  
**Page:** Avventurieri  
**Narrative identity:** Il Libro dei Nomi  
**Functional descriptor:** Persone della community rappresentate in ICA  
**Status:** `SPECIFIED (REVIEW_REQUIRED)`  
**Version:** 0.1 — vertical-slice minimum  
**Delivery status:** `COMPLETE_FOR_VERTICAL_SLICE`  
**Canonical readiness:** `REVIEW_REQUIRED`  
**Readiness:** `NOT_READY`  
**Last reviewed:** 2026-09-16  
**Primary dependencies:** `docs/TERMINOLOGY_BIBLE.md`, `docs/RELATIONSHIP_MAP.md`, `docs/CONTENT_GOVERNANCE.md`, `docs/PAGE_STATE_MODEL.md`, `docs/CONTENT_READINESS_GATE.md`, `docs/NARRATIVE_AESTHETIC_QA.md`, `docs/RESPONSIVE_ART_DIRECTION.md`

> An Avventuriero is a real person represented through verified public community activity. It is never the Sorcery Avatar.

---

# 1. Locked semantic boundary

- visible identity = Avventuriero;
- TECH object = `PLAYER`;
- nickname = primary visible identity;
- `Avatar` remains the official Sorcery game/card concept;
- no invented biography, affiliation, title, achievement or participation.

Source: `CDL-009`.

---

# 2. Vertical-slice purpose

For the active slice, Avventurieri must prove that a user can move from a completed Giostra/result/Cronaca to a real-person profile/reference without requiring a fully mature directory.

Minimum journey:

`RESULT -> PLAYER <- ARTICLE:Cronaca`

Optional supporting relation:

`PLAYER -> DECK -> EVENT`

---

# 3. Writer Intent / UX contract

The page should feel like a maintained record of people who have left a trace in the community, not a fictional character roster.

For the vertical slice, function is intentionally modest:

- nickname is clear and primary;
- public/verified activity is shown where available;
- sparse profiles remain truthful rather than padded;
- no personal-data completeness pressure;
- a missing portrait, real name, organization or biography does not make a profile invalid if useful verified activity remains.

---

# 4. Minimum profile architecture

| Module | Role | Required | Visual level |
|---|---|---:|---|
| `PLY01` | profile identity / nickname | Yes | V4 |
| `PLY02` | verified participation/results | Conditional but preferred | V1–V2 |
| `PLY03` | related Cronache | Conditional | V1 |
| `PLY04` | related deck(s) | Conditional | V1 |
| `PLY05` | organization/community relation | Conditional | V1 |

The full Avventurieri index/search/filter experience is not required to pass the current vertical slice.

---

# 5. Content Governance / Privacy

- nickname may be public when governed for publication;
- real name is not required;
- contact information is excluded;
- organization relation appears only when factual and appropriate;
- results/participation must resolve to factual objects;
- imagery appears only with appropriate provenance/permission;
- sparse optional data is omitted without narrative substitution.

For the sample fixture, `profile_visibility=PUBLIC` is required for a routable profile.

---

# 6. Page States / Readiness

Vertical-slice states:

- `SPARSE` profile: nickname + at least one useful verified relation, with optional organization/portrait absent;
- `NORMAL` profile: nickname + multiple verified event/result/article/deck relations;
- unverified/private profile: no public detail route;
- missing optional fields do not create errors or placeholders.

A single profile can validate profile behavior, but it does not make the future Avventurieri index launch-ready as a mature directory.

---

# 7. Responsive contract

Mobile priority:

1. nickname / identity;
2. factual activity;
3. current relevant result/event;
4. related Cronache;
5. deck/organization references.

No portrait or ornamental frame may displace critical identity/activity. Relationships stack vertically; no horizontal overflow is required for basic comprehension.

---

# 8. Narrative & Aesthetic QA

Critical checks:

- `NAQ-02` no invented facts;
- `NAQ-03` protects the official Sorcery `Avatar` game/card meaning and forbids using it for a real-person profile;
- `NAQ-04` Avventurieri terminology respected;
- `NAQ-22` factual/editorial/narrative separation;
- `NAQ-23` missing content honest;
- `NAQ-25` privacy boundary respected;
- `NAQ-29–30` provenance and superseded language controlled.

---

# 9. Shared-component evidence

Existing shared components cover most of the slice:

- `CMP-PLAYER-REF` for compact references;
- `CMP-RESULT-SUMMARY` for outcome context;
- `CMP-ARTICLE-TEASER` for related Cronache;
- `CMP-CTA-LINK` for event/deck/article routes;
- `CMP-EMPTY-STATE` for missing optional relations.

The profile identity block remains page-local. The slice does not justify a new shared profile component yet.

---

# 10. Data contract for fixture

A routable sample Avventuriero must:

- have a unique `PLAYER.id`;
- have a non-empty `nickname`;
- have `profile_visibility=PUBLIC`;
- be referenced by at least one result or Cronaca for the journey under test;
- allow organization/public name to be null;
- never derive affiliation/biography from absence.

`PLY-003` intentionally validates the sparse profile case.

---

# 11. Traceability

| Decision ID | Decision | Source | Status |
|---|---|---|---|
| `PAG-PLY-001` | Avventuriero = real person; Avatar is reserved to Sorcery. | `CDL-009` | PRODUCT OWNER LOCKED |
| `PAG-PLY-002` | Nickname is the primary visible identity. | `CDL-009` | PRODUCT OWNER LOCKED |
| `PAG-PLY-003` | Sparse truthful profiles are valid for the vertical slice. | Content Governance + Page State Model | REVIEW |
| `PAG-PLY-004` | Full directory maturity is not required to validate the profile journey. | Content Readiness Gate | REVIEW |

---

# 12. Product Owner decisions

No new PO decision blocks the vertical slice.

The full Avventurieri index taxonomy/search/filter experience remains outside this minimum dossier.

**Vertical-slice specification state:** `READY_FOR_VALIDATION`  
**Canonical state:** `REVIEW_REQUIRED`  
**Production readiness:** `NOT_READY`
