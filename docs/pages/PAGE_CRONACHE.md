# In Cerca di Avventura — Page Dossier: Cronache

**Document ID:** ICA-PAG-CHR-001  
**Page:** Cronache  
**Narrative identity:** Gli Annali  
**Functional descriptor:** Memoria editoriale della community  
**Status:** `SPECIFIED (REVIEW_REQUIRED)`  
**Version:** 0.2  
**Delivery status:** `COMPLETE`  
**Canonical readiness:** `REVIEW_REQUIRED`  
**Readiness:** `NOT_READY`  
**Primary owner:** Editorial / UX  
**Last reviewed:** 2026-09-16  
**Primary dependencies:** `docs/TERMINOLOGY_BIBLE.md`, `docs/PRIMARY_INFORMATION_ARCHITECTURE.md`, `docs/EXPERIENCE_MAP.md`, `docs/RELATIONSHIP_MAP.md`, `docs/CONTENT_GOVERNANCE.md`, `docs/PAGE_STATE_MODEL.md`, `docs/CONTENT_READINESS_GATE.md`, `docs/VISUAL_HIERARCHY_MATRIX.md`, `docs/RESPONSIVE_ART_DIRECTION.md`, `docs/NARRATIVE_AESTHETIC_QA.md`, `docs/CREATIVE_DECISION_LOG.md`

> Cronache preserves and tells the record. It does not replace the factual EVENT, RESULT, PLAYER or DECK objects it references.

---

# 1. Provenance and locked boundary

- `source_type`: `DERIVED`
- `source_ref`: `CDL-007`, `CDL-008`, Content Governance, Relationship Map, vertical-slice evidence
- `decision_status`: `REVIEW`

Locked semantic rules:

- `Cronaca` = editorial memory / account / report / retrospective;
- `Gli Annali` = approved narrative place identity;
- TECH base = `ARTICLE` with explicit `editorial_type=CRONACA` or equivalent;
- Proclami = News; Cronache = memory, interpretation, retrospective and preservation;
- a real subject may have both a Proclamo and a Cronaca;
- guides, regulations, documents and reference material are not assigned here by default.

Sources: `CDL-006`, `CDL-007`, `CDL-008`.

---

# 2. Page identity

## 2.1 Functional identity

Cronache is ICA's editorial-memory destination. It must let visitors:

- discover recent and historical Cronache;
- understand why a piece matters and what real subjects it relates to;
- move from an event/result/player/deck into a durable editorial account;
- revisit past community moments without confusing editorial interpretation with factual authority.

Primary IA role: primary destination `Cronache`.

Experience role: preserves the final part of `play → participate → tell → remember` and the tested chain `EVENT → RESULT → ARTICLE:Cronaca → PLAYER`.

Main objects: `ARTICLE`, with relationships to `EVENT`, `RESULT`, `PLAYER`, `DECK`, `ORGANIZATION`, `VENUE`, `GALLERY/IMAGE` where applicable.

## 2.2 Narrative identity

The visitor enters **Gli Annali**: a maintained record, not a dusty archive and not a generic blog.

The place should suggest continuity, testimony and memory. It may feel older and quieter than Adunanze/Giostre, but never abandoned, cryptic or ceremonial at the expense of reading.

## 2.3 Functional descriptor

**Cronache della community** / **Memoria editoriale della community**.

Use the plain descriptor whenever `Gli Annali` would otherwise be opaque.

---

# 3. Writer Intent

The page should feel like opening the record after the noise of the event has faded. The important thing is not fictional lore but the trace left by real activity: what happened, who was there, what was learned, what remains worth remembering.

A Cronaca may be evocative, personal and interpretive, but it must remain anchored to supportable subjects. It must never invent scores, achievements, affiliations, biographies, dates, attendance or provenance for narrative effect.

Narratively prohibited:

- turning all factual event records into Cronache automatically;
- writing every article as heroic fantasy prose;
- using fake testimony or fabricated quotations;
- using Cronache as the default home for regulations/reference documentation.

---

# 4. Emotional and experiential goals

| Goal | Visitor perception | Evidence | Priority |
|---|---|---|---|
| Continuity | “What happened remains accessible.” | archive + related-object links | Critical |
| Trust | “Story and facts are distinguishable.” | factual context sourced from structured objects | Critical |
| Editorial depth | “This adds meaning beyond the result table.” | substantial body, context, interpretation | High |
| Human memory | “People and community are visible.” | related Avventurieri and testimony where governed | High |
| Discoverability | “I can find another relevant story.” | archive/filtering when volume justifies it | High |

Anti-goals: generic news feed, SEO content farm, fantasy fiction archive, result database disguised as articles, parchment-heavy wall of text.

---

# 5. User jobs

| User job | Success condition | Primary action | Journey |
|---|---|---|---|
| Read a Cronaca | article is immediately readable and contextualised | open/read article | event→memory |
| Understand what it refers to | event/result/player relationships are explicit | open factual source object | R01/R02 |
| Find past stories | archive/list can be scanned chronologically | browse archive | memory discovery |
| Follow a person or deck | verified related objects are reachable | open Avventuriero/deck | R03 |
| Distinguish News from memory | type and context are explicit | none required | Proclami↔Cronache boundary |

---

# 6. Content scope

## Required

A publishable Cronaca requires:

- title;
- publication date;
- author/editorial ownership where policy requires it;
- substantial body content;
- explicit `CRONACA` classification;
- at least one meaningful governed subject/relation unless the article is intentionally broader community reflection;
- provenance/rights for media used.

Structured facts referenced in prose must derive from their source objects where feasible.

## Optional

- deck context;
- gallery/media;
- quotes/interviews with attribution;
- organization/venue context;
- related Cronache;
- editorial tags/facets;
- featured image.

## Explicit exclusions

- Proclami/news as the same content type;
- unresolved guides/regulations/reference material;
- fictional achievements or titles;
- synthetic fixture data in production;
- automatic conversion of every result into an article.

## Factual / editorial / narrative boundary

- `FACTUAL`: dates, event identity, results, standings, player nickname, deck composition, venue/organization identity.
- `EDITORIAL`: title, dek/summary, body, selection, ordering, interpretation, interview framing.
- `NARRATIVE`: page/place framing, restrained transitions, Annali metaphor.

Precedence: factual accuracy → usability → editorial framing → narrative flourish.

---

# 7. Page information architecture

| Module | Role | Required | Visual level | Content | Action |
|---|---|---:|---|---|---|
| `CHR01` | page threshold / Gli Annali identity | Yes | V5 | title + descriptor + restrained intro | orient |
| `CHR02` | featured/recent Cronaca | Conditional | V3–V4 | one eligible article | read |
| `CHR03` | recent Cronache list | Yes when >=2 items | V2 | article teasers | read |
| `CHR04` | archive / discovery controls | Conditional | V1–V2 | date/facet controls | filter/browse |
| `CHR05` | archive/results | Yes | V1–V2 | chronological older articles | read |
| `CHR06` | valid sparse/empty state | Yes | V1 | direct explanation | return/explore |

### Detail-page architecture

`CHR-D01` article identity → `CHR-D02` body → `CHR-D03` factual context → `CHR-D04` related people/decks/events → `CHR-D05` related reading.

Default archive order is reverse chronological by publication date. This is deterministic and does not require Product Owner intervention.

Filters are activated only when content volume makes them useful. Candidate facets are derived from structured relations (year, related event, people, deck/format context) rather than invented lore categories.

---

# 8. Web Designer Interpretation

Cronache is editorial before ornamental.

- wide reading column for article body;
- stronger environmental framing at page/detail threshold only;
- recent/archive lists remain scan-friendly;
- factual context is visually quieter and structured;
- long-form reading never sits inside heavy decorative chrome;
- transitions can use small manuscript/annal cues rather than repeated large banners.

**Fantasy in perception. Clarity in interaction.**

---

# 9. Art Direction

Environmental cue: maintained archive/annal room within the cittadella-crocevia; warm low light, dark wood/stone/iron, paper and ink accents, restrained antique gold.

Material priority:

1. readable editorial surface;
2. ink/paper cues;
3. stone/iron structural framing;
4. antique gold as hierarchy accent;
5. cloth/velvet sparingly.

Visual intensity:

- `CHR01` V5;
- `CHR02` V3–V4;
- lists/archive V1–V2;
- article body V1–V2;
- factual context V1.

No new emblem is required. A page-specific Annali mark is optional and must not precede functional validation.

Negative constraints: no decorative manuscript page for every article, no illegible faux-calligraphy body copy, no archive-as-ruin metaphor, no badges implying unverified significance.

---

# 10. Responsive Art Direction

- desktop: editorial rhythm with optional side context;
- tablet: collapse side context below body; reduce lateral ornament;
- mobile: single reading column; article type/title/date/body first; factual context and related routes follow;
- images may crop/recompose but may not alter factual/editorial meaning;
- archive filters collapse into accessible controls only when present;
- decorative Annali framing is removed before typography or spacing is compromised;
- no hover-only relationships; touch targets >=44x44.

---

# 11. Page states

- `NOT_READY`: no substantial governed Cronaca or unresolved editorial ownership.
- `PRELAUNCH_READY`: dossier/content sufficient for staging review.
- `LIVE_SPARSE`: at least one substantial published Cronaca; page explains domain clearly; archive controls may be absent.
- `LIVE_NORMAL`: multiple Cronache support recent + archive browsing.
- `LIVE_RICH`: enough material for facets/related discovery without clutter.
- `STALE_REVIEW`: time-sensitive contextual claims need review; historical facts do not become stale merely by age.
- `ARCHIVAL`: fully valid normal behavior for older Cronache.
- `TEMPORARILY_UNAVAILABLE`: preserve navigation and distinguish technical failure from an empty archive.

Article module states: published, updated, withdrawn, correction-required, related-content unavailable.

---

# 12. Content Readiness Gate

`PASS_STAGING_ONLY` requires dossier compliance, one complete sample article, governed relationships, responsive/accessibility testability.

`PASS_LIVE` requires at minimum:

- one substantial verified/published Cronaca;
- clear page purpose;
- source/provenance for material factual claims and media;
- no broken required relationships;
- archive/list state appropriate to available volume;
- no fabricated filler;
- privacy boundary resolved for people/media.

Re-gate on taxonomy changes, rights/provenance changes, material correction, broken critical relationships, or canonical terminology changes.

---

# 13. Relationships and navigation

| From | Relationship | To | Layer | Link |
|---|---|---|---|---|
| Cronaca | relates to | EVENT | factual/editorial | Yes when destination exists |
| Cronaca | contextualises | RESULT | editorial over factual | Yes when relevant |
| Cronaca | features/mentions | PLAYER | factual/editorial | Conditional |
| Cronaca | discusses | DECK | editorial/factual | Conditional |
| Cronaca | relates to | ORGANIZATION/VENUE | factual/editorial | Conditional |
| Home/Giostra | routes to | Cronaca | navigation | Yes when article published |

Mandatory journey continuity for completed-Giostra memory: Event/Result → Cronaca and Cronaca → available related player/event routes.

---

# 14. Components

Shared:

- `CMP-ARTICLE-TEASER`;
- `CMP-PLAYER-REF`;
- `CMP-RESULT-SUMMARY`;
- `CMP-FILTER-BAR` when volume warrants;
- `CMP-CTA-LINK`;
- `CMP-EMPTY-STATE`.

Local:

- `CHR-THRESHOLD`;
- `CHR-ARTICLE-BODY`;
- `CHR-FACT-CONTEXT` composition.

No new generic shared component is justified by this dossier alone.

---

# 15. Asset dependencies

Candidates only; no production asset is authorized:

- Annali threshold/environment art: optional, responsive variants likely;
- editorial divider/mark: optional;
- article imagery: content-owned, per-item provenance;
- no image is required for a Cronaca to be valid.

Final asset IDs wait for Asset Dependency Map.

---

# 16. Interaction and microcopy

Primary actions: `Leggi la Cronaca`, `Vedi l'evento`, `Vedi i risultati`, `Scopri l'Avventuriero` where routes exist.

Archive controls remain functional language. Avoid fantasy synonyms for filter/search/year/date.

Corrections or updated articles use direct editorial/system wording.

---

# 17. Accessibility

- semantic article/heading structure;
- readable body line length and text size;
- explicit publication/update dates;
- links distinguish destinations clearly;
- captions/alt text for informative media;
- decorative art hidden from assistive tech;
- focus visible; keyboard order follows reading order;
- no meaning by color alone;
- reduced motion removes ambient effects;
- long-form reading remains functional at zoom and mobile widths.

---

# 18. SEO / discoverability / sharing

Functional title should include `Cronache` and, when useful, `Sorcery: Contested Realm` / ICA context.

Individual Cronache use their editorial title with clear subject metadata. `Gli Annali` may appear as narrative identity but must not obscure the functional subject.

Structured-data opportunities: Article/NewsArticle-like semantics only when they accurately represent the content type; event/result facts remain sourced separately.

Open Graph uses article-specific media when rights/provenance permit it; otherwise a generic ICA social asset later.

---

# 19. Data / technical contract

Required ARTICLE fields: stable ID, editorial type, title, publication status, publication date, body/content reference, editorial owner/provenance.

Optional relationships: event IDs, result IDs, player IDs, deck IDs, organization/venue/media IDs.

Derived archive order: publication date descending. Any editorial feature flag must be explicit; visual convenience never determines prominence silently.

Missing optional relations are omitted; broken promised routes block the relevant CTA, not necessarily the article itself.

---

# 20. Traceability

| Decision ID | Decision | Source | Status |
|---|---|---|---|
| `PAG-CHR-001` | Cronaca preserves/tells the record and remains distinct from News. | `CDL-007` | PRODUCT OWNER LOCKED |
| `PAG-CHR-002` | Factual context remains sourced from structured objects. | Content Governance | REVIEW |
| `PAG-CHR-003` | `Gli Annali` is the narrative place identity; descriptor remains functional. | `CDL-007` | PRODUCT OWNER LOCKED |
| `PAG-CHR-004` | Archive defaults to reverse chronological publication order. | DERIVED usability rule | REVIEW |
| `PAG-CHR-005` | Filters activate only when volume justifies them and derive from governed relations. | Readiness + framework freeze | REVIEW |
| `PAG-CHR-006` | Article body/threshold remain local until reuse evidence appears. | Shared Registry v0.2 | REVIEW |

---

# 21. Narrative & Aesthetic QA profile

Apply NAQ-01–13, 18–25, 29–30, with special emphasis on:

- NAQ-02 factual truth;
- NAQ-04 Cronache/Proclami distinction;
- NAQ-05–08 editorial register;
- NAQ-10 content as protagonist;
- NAQ-22 factual/editorial/narrative layers;
- NAQ-23 missing content;
- NAQ-30 superseded directions.

---

# 22. Product Owner decisions

No new Product Owner decision blocks the dossier.

The dossier deliberately avoids inventing a rigid editorial taxonomy. If future content volume proves a need for named permanent categories beyond `Cronaca`, that taxonomy becomes a separate PO/content decision based on evidence.

---

# 23. Definition of Ready

**Delivery status:** `COMPLETE`  
**Canonical readiness:** `REVIEW_REQUIRED`  
**Production readiness:** `NOT_READY`

Ready for canonical review because Writer Intent, page architecture, archive behavior, states/readiness, relationships, component boundaries, responsive/accessibility, data contract and provenance are defined. Production implementation remains frozen until Creative Canonical Lock and downstream canonical propagation.