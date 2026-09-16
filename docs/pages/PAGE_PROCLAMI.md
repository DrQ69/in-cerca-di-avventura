# In Cerca di Avventura — Page Dossier: Proclami

**Document ID:** ICA-PAG-NEWS-001  
**Page:** Proclami  
**Narrative identity:** I Proclami dell'Araldo  
**Functional descriptor:** News e aggiornamenti  
**Status:** `SPECIFIED (REVIEW_REQUIRED)`  
**Version:** 0.1  
**Delivery status:** `COMPLETE`  
**Canonical readiness:** `REVIEW_REQUIRED`  
**Readiness:** `NOT_READY`  
**Last reviewed:** 2026-09-16  
**Primary dependencies:** `docs/TERMINOLOGY_BIBLE.md`, `docs/PRIMARY_INFORMATION_ARCHITECTURE.md`, `docs/EXPERIENCE_MAP.md`, `docs/RELATIONSHIP_MAP.md`, `docs/CONTENT_GOVERNANCE.md`, `docs/PAGE_STATE_MODEL.md`, `docs/CONTENT_READINESS_GATE.md`, `docs/VISUAL_HIERARCHY_MATRIX.md`, `docs/RESPONSIVE_ART_DIRECTION.md`, `docs/NARRATIVE_AESTHETIC_QA.md`

> Proclami is ICA's News domain. It informs about what is new, relevant or changing; Cronache preserves and tells the record.

---

# 1. Provenance summary

- `source_type`: `DERIVED`
- `source_ref`: `CDL-006`, `CDL-007`, Terminology Bible §5.2, Content Governance
- `decision_status`: `REVIEW`
- `approved_by`: n.a.
- `approved_date`: n.a.

Locked scope inherited from Product Owner decisions:

- `Proclami = News`;
- TECH object = `ARTICLE` with `editorial_type=NEWS` or equivalent;
- the same subject may legitimately have both a Proclamo and a Cronaca;
- publication date alone does not determine classification.

---

# 2. Page identity

## 2.1 Functional identity

Primary purpose:

- publish current news and updates about ICA, Sorcery activity, events, initiatives and community developments;
- let users distinguish recent/current information from preserved editorial memory;
- connect news to factual entities such as events, organisations and venues;
- provide a durable news archive without pretending old items are still urgent.

Primary user needs:

- see what is new;
- understand what changed and when;
- reach the related event/organisation/page;
- review older announcements/news when useful.

TECH base: `ARTICLE` + explicit `NEWS` classification.

## 2.2 Narrative identity

The page is the public board/voice of the cittadella-crocevia: recent messages are posted clearly, then recede into an ordered archive.

`I Proclami dell'Araldo` may frame the section, but ordinary news usability must remain immediate.

## 2.3 Functional descriptor

**Proclami**  
News e aggiornamenti.

---

# 3. Writer Intent

Proclami should feel timely and alive without becoming theatrical noise.

Desired perception:

- this is where current developments are announced;
- publication date and relevance are obvious;
- a Proclamo can point toward participation/action when still current;
- older Proclami remain trustworthy records of what was announced at the time.

Must never happen:

- stale news presented as urgent to fill the page;
- Cronache republished as News merely because they concern an event;
- speculative information presented as confirmed;
- fantasy proclamation language obscuring dates, actions or corrections;
- manually duplicated event facts diverging from `EVENT`.

---

# 4. Emotional and experiential goals

| Goal | Visitor perception | Evidence | Priority |
|---|---|---|---|
| Currency | “I can see what is new now.” | chronological current-news emphasis | Critical |
| Clarity | “I know what happened/changed and when.” | headline + date + direct summary | Critical |
| Actionability | “I know where to continue.” | related entity/action route | High |
| Trust | “Old news is not disguised as current.” | expiry/promotion rules + archive | Critical |
| ICA identity | “This still belongs to the cittadella.” | restrained araldo/bulletin framing | Medium |

Anti-goals:

- social feed clone;
- notification center;
- sensational headline wall;
- continuous ceremonial prose;
- duplicate Cronache archive.

---

# 5. User jobs and success conditions

| User job | Success condition | Primary action | Journey |
|---|---|---|---|
| See latest news | recent published Proclami ordered clearly | Open article | current awareness |
| Understand a change/announcement | title/date/summary/source context are clear | Read detail | news comprehension |
| Act on event news | valid event/info/registration route is available when applicable | Open related event/action | Proclamo → EVENT |
| Find older news | archive/pagination/search when justified by volume | Browse archive | news history |
| Distinguish from Cronache | editorial type and page framing make purpose clear | navigate to Cronache separately | news vs memory |

---

# 6. Content scope

## 6.1 Required content

Each Proclamo requires:

- unique article identity;
- explicit NEWS classification;
- headline;
- publication date/time as appropriate;
- body or useful summary;
- editorial owner/author as governed;
- factual source context where claims depend on external/structured facts;
- publication status.

## 6.2 Optional content

- related `EVENT`;
- related `ORGANIZATION` / `VENUE`;
- related media with rights/provenance;
- urgency/promotion window;
- correction/update note;
- external source link when appropriate;
- related Cronaca after the subject becomes part of preserved memory.

## 6.3 Explicit exclusions

- long-form retrospective whose primary purpose is preservation (Cronaca);
- evergreen guides/reference docs by default;
- unverified rumours;
- generic social reposts with no ICA editorial value;
- hidden sponsored content;
- Tesori/Mercante content unless independently reopened.

## 6.4 Factual / editorial / narrative boundary

**FACTUAL:** dates, event status, organisation/venue identity, published links, quoted/attributed facts.  
**EDITORIAL:** headline, summary, selection, prominence, article body, archive grouping.  
**NARRATIVE:** threshold framing, araldo language in restrained introductions/transitions.

---

# 7. Information architecture inside the page

| Module ID | Role | Required? | Visual level | Content | Action |
|---|---|---:|---|---|---|
| `NEWS01` | threshold / page definition | Yes | V5 | identity + descriptor | enter news |
| `NEWS02` | latest / current Proclamo | Conditional | V3–V4 | ARTICLE:NEWS | open article/action |
| `NEWS03` | recent Proclami list | Yes when content exists | V2 | ARTICLE:NEWS | open article |
| `NEWS04` | archive/discovery controls | Conditional | V1–V2 | dates/categories only if useful | browse |
| `NEWS05` | Proclamo detail | Conditional | V3→V1 | article + related facts | related entity routes |
| `NEWS06` | empty/sparse state | Yes | V1 | truthful state | route elsewhere |

Default ordering: reverse chronological by publication date for normal news browsing.

Editorial pinning/featured treatment is allowed only through an explicit governed flag/window; it must not silently override freshness forever.

---

# 8. Web Designer Interpretation

The page should scan like a strong editorial news index, with ICA atmosphere concentrated at threshold and article openings.

Repeated news items remain restrained and legible. Avoid faux-scroll/parchment treatment for every item.

Current/important news may receive stronger hierarchy, but basic chronological ordering remains obvious.

The detail page should shift from atmosphere to reading comfort quickly.

---

# 9. Art Direction

## 9.1 Environmental direction

Mood: public notices, araldo board, ink/seal accents, maintained civic space rather than medieval theatre.

Use:

- cloth/board/parchment cues sparingly at threshold;
- seals only where they communicate editorial/provenance status;
- article imagery as content when sourced;
- high readability for headlines/body.

## 9.2 Visual intensity budget

- `NEWS01`: V5;
- `NEWS02`: V3–V4;
- `NEWS03`: V2;
- `NEWS04`: V1;
- `NEWS05`: V3 opening → V1 body/metadata;
- `NEWS06`: V1.

## 9.3 Negative constraints

Avoid:

- notification badges everywhere;
- red-alert visual language for ordinary news;
- pseudo-medieval unreadable type;
- urgent styling without a real urgency state;
- giant decorative seal repeated on cards;
- feed-like infinite novelty without archive structure.

---

# 10. Responsive Art Direction

**Desktop:** one strong latest item plus restrained recent-news list when content supports it.  
**Tablet:** reduce lateral decoration; keep dates and headlines prominent.  
**Mobile:** single-column chronological list; headline/date/type before imagery; body reading width prioritised.

Actions:

- `PRESERVE`: headline, date, classification, primary related route;
- `RECOMPOSE`: featured/latest arrangement;
- `SIMPLIFY`: thumbnail/media framing;
- `REMOVE_DECORATIVE_ONLY`: seals/board ornament.

No important update/action may depend on hover.

---

# 11. Page states

- `NOT_READY`: no governed published news;
- `PRELAUNCH_READY`: structure validated with controlled content;
- `LIVE_SPARSE`: at least one useful current/recent Proclamo;
- `LIVE_NORMAL`: healthy recent stream + archive behavior;
- `LIVE_RICH`: richer archive/discovery/relations;
- `STALE_REVIEW`: latest promoted content is stale or source needs recheck;
- `ARCHIVAL`: older news remains searchable/browsable historically;
- `TEMPORARILY_UNAVAILABLE`: editorial/data issue.

Module behavior:

- `NEWS02` hides when no item deserves featured treatment;
- archive controls hide when volume does not justify them;
- related CTA disappears when target/action is no longer valid;
- corrected article stays readable with update/correction note when appropriate.

---

# 12. Content Readiness Gate

`PASS_STAGING_ONLY` requires:

- at least one governed sample NEWS article;
- chronology, featured rule and empty state defined;
- factual references resolve;
- Cronache distinction is explicit.

`PASS_LIVE` requires:

- at least one verified published news item;
- headline/date/source context appropriate;
- no stale item represented as urgent merely to fill space;
- current actions/links valid;
- article classification explicit;
- archive behavior truthful when older items exist.

Re-gate when a promoted item expires, underlying event status changes, a source is corrected/disputed, or a primary CTA becomes invalid.

---

# 13. Relationships and navigation

| From | Relationship | To | Type | Required link? | Source |
|---|---|---|---|---:|---|
| ARTICLE:NEWS | related to | EVENT | editorial + factual refs | No | ARTICLE relation + EVENT |
| ARTICLE:NEWS | related to | ORGANIZATION | editorial relation | No | ARTICLE relation |
| ARTICLE:NEWS | related to | VENUE | editorial relation | No | ARTICLE relation |
| ARTICLE:NEWS | later related to | ARTICLE:CRONACA | editorial | No | editorial governance |
| Home | previews | ARTICLE:NEWS | editorial selection | Conditional | Home rule |

A Proclamo may link to a Cronaca about the same subject, but neither changes the other's classification.

---

# 14. Components

Existing shared components:

- `CMP-ARTICLE-TEASER`;
- `CMP-EVT-STATUS` only when showing related event status, not as article status;
- `CMP-CTA-LINK`;
- `CMP-EMPTY-STATE`;
- `CMP-EVT-META` only for a clearly separate related-event context, not to duplicate article metadata.

Potential page-local compositions:

- latest-news feature;
- article header/body;
- archive grouping heading.

The page does not justify a generic “notification” component.

---

# 15. Asset dependencies

Candidates only:

| Candidate | Role | Required? | Module | Responsive | Status |
|---|---|---:|---|---|---|
| `AST-NEWS-ENV` | threshold public-board/araldo environment | No | NEWS01 | alternate crop/removable | DRAFT |
| article media | editorial content | No | NEWS02/03/05 | responsive source | SOURCE-GOVERNED |
| seal/ink accent | section identity | No | NEWS01 | simplify/remove | DRAFT |

No production assets before global Asset Dependency Map.

---

# 16. Interaction and microcopy

Primary actions:

- `Leggi il Proclamo` or plain `Leggi` depending context;
- `Vai all'Adunanza` / factual related route when applicable;
- `Visita la fonte` for explicit external source where useful;
- `Vedi le Cronache` only as a separate domain route, not as forced continuation.

Direct system language for corrections, expiration and unavailable actions.

---

# 17. Accessibility

- article headlines are semantic headings;
- publication date is machine/readable where possible;
- cards do not rely on image for meaning;
- urgency/current state is not color-only;
- correction/update notes are text;
- external links are identifiable;
- keyboard/focus order follows chronology;
- 44x44 minimum targets;
- body typography prioritises readability;
- reduced motion removes nonessential announcement effects.

---

# 18. SEO / discoverability / sharing

Functional title intent:

**Proclami — News e aggiornamenti Sorcery | In Cerca di Avventura**

Article SEO should use real headline/subject/date context. `Proclamo` can remain visible brand language while metadata makes the news subject clear.

Open Graph should prefer article-specific sourced imagery where available; fallback ICA art must not imply facts not present in the article.

---

# 19. Data and technical contract

| Object | Field | Requirement | Source | Verification | Context |
|---|---|---|---|---|---|
| ARTICLE | id | Required | content model | unique | all |
| ARTICLE | editorial_type | Required=`NEWS` | editorial model | governed | all |
| ARTICLE | title | Required | editorial | reviewed | list/detail |
| ARTICLE | published_at | Required | editorial | verified | list/detail/order |
| ARTICLE | status | Required | editorial lifecycle | governed | all |
| ARTICLE | summary/body | Required useful content | editorial | reviewed/fact checked | list/detail |
| ARTICLE | related_event_ids | Optional | relationship map | resolve | detail/action |
| ARTICLE | related_org_ids | Optional | relationship map | resolve | detail |
| ARTICLE | featured/promotion window | Optional derived/editorial | editorial governance | bounded/current | latest feature |
| ARTICLE | correction note | Optional | editorial governance | governed | detail |

Default sort:

1. active governed featured/pinned window if explicitly set;
2. otherwise `published_at DESC`;
3. deterministic ID tie-breaker.

A permanent manual pin with no expiry/review rule is not allowed.

---

# 20. Machine-readable specification placeholder

No page JSON yet. Human dossier remains source until all active destination semantics are consolidated.

---

# 21. Traceability

| Decision ID | Decision | Source | Status |
|---|---|---|---|
| `PAG-NEWS-001` | Proclami = News. | `CDL-006` | PRODUCT OWNER LOCKED |
| `PAG-NEWS-002` | Cronache remain editorial memory, not News. | `CDL-007` | PRODUCT OWNER LOCKED |
| `PAG-NEWS-003` | normal browsing is reverse chronological. | editorial usability | REVIEW |
| `PAG-NEWS-004` | featured/pinned news requires explicit bounded governance. | Content Governance | REVIEW |
| `PAG-NEWS-005` | stale news is archived, not cosmetically kept urgent. | Page State + Readiness | REVIEW |

---

# 22. Narrative & Aesthetic QA profile

Critical:

- NAQ-02 facts not invented;
- NAQ-04 Proclami/Cronache boundary respected;
- NAQ-05–08 functional/editorial register;
- NAQ-09–13 latest vs repeated item hierarchy;
- NAQ-18–21 mobile reading priority;
- NAQ-22–24 current/stale/factual layers;
- NAQ-29–30 provenance and superseded directions.

---

# 23. Open Product Owner decisions

No new Product Owner decision blocks dossier delivery.

Future editorial-policy decisions can remain deferred until real volume demonstrates need:

- whether named editorial categories beyond `NEWS` should exist;
- whether ICA wants a manual featured-news mechanism at launch;
- whether author bylines are public by default.

Until decided, the safe default is chronology + explicit relation/context, not invented taxonomy.

---

# 24. Definition of Ready

**Delivery:** `COMPLETE`  
**Canonical readiness:** `REVIEW_REQUIRED`  
**Production readiness:** `NOT_READY`

Ready for canonical review when:

- real sample Proclami validate chronology/staleness behavior;
- event/organisation relations resolve without duplicated facts;
- archive behavior is useful at actual content volume;
- Shared Component Registry contains only proven reusable semantics;
- no News/Cronaca ambiguity remains in visible copy or data classification.
