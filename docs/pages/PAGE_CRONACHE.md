# In Cerca di Avventura — Page Dossier: Cronache

**Document ID:** ICA-PAG-CHR-001  
**Page:** Cronache  
**Narrative identity:** Gli Annali  
**Functional descriptor:** Memoria editoriale della community  
**Status:** `SPECIFIED (REVIEW_REQUIRED)`  
**Version:** 0.1 — vertical-slice minimum  
**Delivery status:** `COMPLETE_FOR_VERTICAL_SLICE`  
**Canonical readiness:** `REVIEW_REQUIRED`  
**Readiness:** `NOT_READY`  
**Last reviewed:** 2026-09-16  
**Primary dependencies:** `docs/TERMINOLOGY_BIBLE.md`, `docs/RELATIONSHIP_MAP.md`, `docs/CONTENT_GOVERNANCE.md`, `docs/PAGE_STATE_MODEL.md`, `docs/CONTENT_READINESS_GATE.md`, `docs/NARRATIVE_AESTHETIC_QA.md`, `docs/RESPONSIVE_ART_DIRECTION.md`

> Cronache preserves and tells the record. It does not replace the factual EVENT, RESULT, PLAYER or DECK objects it references.

---

# 1. Locked semantic boundary

- `Cronaca` = editorial memory / account / report / retrospective.
- `Gli Annali` = narrative place identity.
- TECH base = `ARTICLE` with explicit `editorial_type=CRONACA` or equivalent.
- A Proclamo is News; a Cronaca preserves and tells the record.
- Guides, regulations, documents and reference materials are not assigned here by default.

Source: `CDL-007`, `CDL-008`.

---

# 2. Vertical-slice purpose

For the active slice, Cronache must prove that a completed Giostra can move from factual outcome into durable editorial memory without duplicating or altering source facts.

The minimum journey is:

`EVENT[completed Giostra] -> RESULT -> ARTICLE:Cronaca -> PLAYER`

Optional supporting relation:

`ARTICLE:Cronaca -> DECK`

---

# 3. Writer Intent / UX contract

The Cronaca detail is quieter and more editorial than the event page. It should feel like entering the preserved record after the competition has ended.

Function wins over atmosphere:

- title, publication date and article type remain explicit;
- related event/result/player links are factual;
- narrative copy may contextualise but never restate changed scores, standings, dates or affiliations;
- no invented epithets, achievements or biographies.

---

# 4. Minimum vertical-slice architecture

| Module | Role | Required | Visual level |
|---|---|---:|---|
| `CHR01` | article threshold / identity | Yes | V4 |
| `CHR02` | article body / editorial account | Yes | V2 |
| `CHR03` | factual context references | Yes | V1 |
| `CHR04` | related Avventurieri | Conditional | V1 |
| `CHR05` | related deck/result route | Conditional | V1 |

No archive/filter taxonomy is required to pass the current vertical slice.

---

# 5. Content Governance checks

For every factual statement that depends on structured objects:

- event facts come from `EVENT`;
- standings/result facts come from `RESULT`;
- player identity comes from `PLAYER`;
- deck composition comes from `DECK`;
- missing optional data is omitted, not invented;
- synthetic fixture content remains test-only and must never be published as real community fact.

---

# 6. Page States / Readiness

For the vertical slice:

- `LIVE_SPARSE` is valid with one substantial published Cronaca and verified related facts;
- missing related deck is acceptable;
- missing related player profile route means show the nickname/reference without a broken CTA;
- withdrawn/unverified article = not eligible for normal live presentation;
- archive state remains editorially valid after urgency is gone.

Vertical-slice readiness requires one valid `CRONACA` article tied to the completed Giostra and resolvable event/player relations.

---

# 7. Responsive contract

Mobile order:

1. article type / title;
2. publication date;
3. body;
4. factual context;
5. related player/event/deck routes.

Decorative Annali framing may simplify or disappear before body text, references or actions. No critical relation is hover-only.

---

# 8. Narrative & Aesthetic QA

Critical checks for the slice:

- `NAQ-02` reality not falsified;
- `NAQ-03` Sorcery vocabulary protected;
- `NAQ-04` Cronache terminology respected;
- `NAQ-05–08` editorial register and restraint;
- `NAQ-22` factual/editorial/narrative layers distinguishable;
- `NAQ-23–25` missing content/privacy handled honestly;
- `NAQ-29–30` traceability and superseded directions controlled.

---

# 9. Shared-component evidence

Existing shared components are sufficient for the minimum slice:

- `CMP-ARTICLE-TEASER` for preview/entry;
- `CMP-PLAYER-REF` for related Avventurieri;
- `CMP-RESULT-SUMMARY` when result context is displayed;
- `CMP-CTA-LINK` for event/player/deck routes;
- `CMP-EMPTY-STATE` for unavailable related content.

A Cronaca article body/threshold remains page-local for now; no new shared component is justified solely by this dossier.

---

# 10. Data contract for fixture

The canonical sample must provide a Cronaca where:

- `editorial_type=CRONACA`;
- at least one `related_event_id` resolves to the completed Giostra;
- related player IDs resolve;
- the article is distinct from the `RESULT` object;
- no synthetic fixture field is treated as production truth.

---

# 11. Traceability

| Decision ID | Decision | Source | Status |
|---|---|---|---|
| `PAG-CHR-001` | Cronaca preserves/tells the record and remains distinct from News. | `CDL-007` | PRODUCT OWNER LOCKED |
| `PAG-CHR-002` | Factual context remains sourced from structured objects. | Content Governance | REVIEW |
| `PAG-CHR-003` | One substantial Cronaca is sufficient for vertical-slice sparse validation. | Content Readiness Gate | REVIEW |
| `PAG-CHR-004` | No new shared component is added unless reuse/state evidence appears. | Framework freeze + Shared Registry rule | REVIEW |

---

# 12. Product Owner decisions

No new PO decision blocks the vertical slice.

The full future Cronache taxonomy/archive behavior remains outside this minimum dossier and must not be inferred from this slice.

**Vertical-slice specification state:** `READY_FOR_VALIDATION`  
**Canonical state:** `REVIEW_REQUIRED`  
**Production readiness:** `NOT_READY`
