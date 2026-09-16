# In Cerca di Avventura — Page Dossier: Home

**Document ID:** ICA-PAG-HOME-001  
**Page:** Home  
**Narrative identity:** principal threshold of the cittadella-crocevia; poetic page title optional and not locked  
**Status:** `SPECIFIED (REVIEW_REQUIRED)`  
**Version:** 0.4  
**Phase:** Creative Canonical Lock — Product Owner composition lock recorded  
**Delivery status:** `COMPLETE`  
**Canonical readiness:** `REVIEW_REQUIRED`  
**Readiness:** `NOT_READY`  
**Primary owner:** Product / UX  
**Last reviewed:** 2026-09-16  
**Primary dependencies:** `docs/NARRATIVE_ART_BIBLE.md`, `docs/TERMINOLOGY_BIBLE.md`, `docs/PRIMARY_INFORMATION_ARCHITECTURE.md`, `docs/EXPERIENCE_MAP.md`, `docs/RELATIONSHIP_MAP.md`, `docs/CONTENT_GOVERNANCE.md`, `docs/PAGE_STATE_MODEL.md`, `docs/CONTENT_READINESS_GATE.md`, `docs/VISUAL_HIERARCHY_MATRIX.md`, `docs/RESPONSIVE_ART_DIRECTION.md`, `docs/NARRATIVE_AESTHETIC_QA.md`, `docs/CREATIVE_DECISION_LOG.md`

> The Home is the principal threshold into In Cerca di Avventura. It must make the visitor feel that they are entering a living cittadella-crocevia while making the next useful action obvious.

---

# 1. Provenance summary

- `source_type`: `DERIVED + DIRECT_PO_DECISION`
- `source_ref`: `CDL-001`, `CDL-002`, `CDL-003`, `CDL-014`, `CDL-021`, `CDL-022`, `CDL-023`, `CDL-025`, `CDL-026`
- `decision_status`: `PRODUCT OWNER LOCKED — composition/closing scope`
- `approved_by`: Product Owner
- `approved_date`: 2026-09-16

The Home macro-composition and default closing headline are Product Owner locked through `CDL-025` and `CDL-026`. The dossier as a whole remains `REVIEW_REQUIRED` because broader canonical dependencies, including the Narrative & Art Bible, are not yet fully locked.

---

# 2. Functional identity

**Primary role:** threshold, orientation, discovery and current-state overview  
**Navigation entry:** ICA crest  
**TECH role:** root landing page / editorial aggregation page

The Home should quickly answer:

- What is happening next?
- Is there an upcoming Giostra?
- Who and which communities form this scene?
- What else is happening?
- What is new?
- What happened and what remains in memory?
- Where should I continue?

The Home is not a sitemap and is not a dashboard.

---

# 3. Narrative identity / Writer Intent

The visitor reaches an inhabited place at twilight: old but maintained, solemn but welcoming, mysterious but legible.

The Home communicates:

1. arrival;
2. orientation;
3. current activity;
4. community presence;
5. invitation to participate/explore;
6. continuity from present activity into memory.

A poetic **Home page title** is optional. The page may launch without one. An older historical Home working title using `Reame` is non-canonical and must not return as the active page name.

The H08 closing headline is separate from the optional Home page title and is governed by `CDL-026`.

---

# 4. Emotional goals and anti-goals

| Goal | Visitor perception | Evidence | Priority |
|---|---|---|---|
| Arrival | “I entered a distinct place.” | expressive threshold, crest, environmental composition | Critical |
| Orientation | “I understand this is Sorcery + Italian community.” | clear functional descriptor | Critical |
| Activity | “Something is happening now or soon.” | featured Adunanza | Critical |
| Community | “Real people and realities inhabit this place.” | Avventurieri + Alleanze chapter | High |
| Invitation | “There is an obvious useful next step.” | single dominant CTA | Critical |
| Memory | “Past events remain meaningful.” | Cronache / Gli Annali | High |

Anti-goals:

- generic portal;
- SaaS dashboard;
- fantasy theme that obscures purpose;
- empty scenic rooms;
- several competing Hero CTAs;
- event-calendar dominance that hides the community identity.

---

# 5. Real user jobs

| User job | Success condition | Primary action | Journey |
|---|---|---|---|
| Find the next useful event | visitor reaches a verified Adunanza | `Scopri l'Adunanza` | current activity |
| Find ICA competition | visitor recognizes and opens a Giostra | `Scopri la Giostra` | participation |
| Discover people | readiness-qualified player preview or destination is reachable | `Esplora gli Avventurieri` | community |
| Discover communities | readiness-qualified alliance preview or destination is reachable | `Esplora le Alleanze` | network |
| Catch up on news | recent Proclamo is visible or reachable | `Leggi il Proclamo` | current information |
| Understand what happened | recent Cronaca/result route is visible | `Leggi la Cronaca` | memory |

---

# 6. Content scope

Required for a useful Home:

- identity/descriptor;
- at least one useful current or recent route;
- verified event/news/memory data when surfaced;
- global primary navigation.

Optional and readiness-driven:

- Avventurieri preview;
- Alleanze preview;
- Proclami preview;
- Cronache preview;
- richer imagery.

Excluded:

- `Tesori` while `SUSPENDED`;
- `Mercante` while `ON HOLD`;
- login/account modules;
- fictional sample content in production;
- a literal fantasy map as mandatory navigation.

Factual fields remain factual. Narrative copy may contextualize but not alter dates, organizer, location, status, results or identity.

---

# 7. Home module architecture — Product Owner locked community-first composition

The stable semantic module IDs remain `H01`–`H08`, but their display grouping/order is governed by the Product Owner-locked community-first composition in `CDL-025`.

Canonical macro-sequence:

**Hero → Prossima Adunanza → Avventurieri + Alleanze → Adunanze + Proclami → Cronache / Gli Annali → Chiusura**

| Display chapter | Module(s) | Role | Required | Visual level | Content |
|---|---|---|---:|---|---|
| 1 | `H01` | threshold / Hero | Yes | V6 | identity, descriptor, one CTA |
| 2 | `H02` | Prossima Adunanza | Yes when eligible content exists | V4 | featured EVENT |
| 3 | `H06 + H07` | community chapter | readiness-driven | V3 | PLAYER + ORGANIZATION |
| 4 | `H03 + H04` | activity + current information | Adunanze required for normal launch; Proclami readiness-driven | V3 | EVENT + NEWS ARTICLE |
| 5 | `H05` | Cronache / Gli Annali | readiness-driven | V3 | CRONACA ARTICLE |
| 6 | `H08` | onward road / closing | Yes | V3→V2 | direct closing headline + functional CTA |

Interpretation:

- `H01` establishes place and identity;
- `H02` proves the place is alive now;
- `H06 + H07` make the community visible before the broader activity catalogue;
- `H03 + H04` show what is happening and what is being announced;
- `H05` closes the editorial arc through memory;
- `H08` returns the visitor to participation.

`H06` and `H07` remain readiness-driven. The Product Owner has locked their **relative placement** in the community-first composition, not an obligation to fabricate them when content is not ready.

---

# 8. Deterministic featured-event rule

`H02 — Prossima Adunanza` must not require repeated Product Owner selection.

Eligible event:

- public/publishable;
- factual core verified;
- status `UPCOMING` or `ONGOING`;
- not cancelled/withdrawn;
- start time known;
- passes event-level Content Governance.

Selection:

1. if exactly one eligible event has a verified editorial `home_featured=true`, select it;
2. if several have that flag, select the nearest start time;
3. otherwise select the nearest eligible start time;
4. if start time ties, prefer Giostra;
5. if still tied, prefer ICA-organized Adunanza;
6. if still tied, stable event ID order.

A manual override must be explicit, sourced and removable. It cannot select a cancelled or unverified event.

Fixture expectation: `tests/fixtures/canonical-sample.json` selects `EVT-ADU-002` because it is the nearest eligible upcoming event.

---

# 9. Closing rule — Product Owner locked default

When Le Adunanze is at least `LIVE_SPARSE`, `H08` uses the Product Owner-locked closing headline:

> **Trova la tua prossima Adunanza.**

The associated functional CTA remains direct and routes to Le Adunanze, e.g. `Esplora le Adunanze`.

Truthful fallback:

1. if Le Adunanze is at least `LIVE_SPARSE`, use the locked headline above and an Adunanze CTA;
2. otherwise if Cronache is at least `LIVE_SPARSE`, suppress the Adunanza-specific headline and use a direct Cronache fallback such as `Leggi le Cronache`;
3. otherwise no invented promise or CTA is shown; global navigation remains.

Atmosphere may use road/firelight/crossroads cues. Non-canonical closing wording using `Reame` must not return.

---

# 10. Web Designer Interpretation

Composition should be spatial and editorial, not a grid of equal cards.

- strong threshold;
- current activity visible immediately after arrival;
- community presence appears before the broader event/news catalogue;
- visible shift from present activity toward memory;
- fewer, larger modules;
- restrained repeated cards;
- clear factual metadata;
- each section may hint at its destination identity without becoming a separate mini-design-system.

Principle:

> **Fantasy in perception. Clarity in interaction.**

---

# 11. Art Direction / Visual Hierarchy

- `H01`: V6, strongest painterly/environmental expression;
- `H02`: V4, featured but factual metadata quiet;
- `H06 + H07`: V3 community chapter;
- `H03 + H04`: V3 activity/news chapter;
- `H05`: V3 editorial-memory chapter, atmospheric but not louder than H02;
- `H08`: V3 intro, V2 action.

Primary material language: blackened iron, midnight blue, antique gold, selective fabric/parchment according to content role.

Home visual identity should survive without optional side guardians, decorative banners, player portraits, organization marks or event imagery. The ICA crest and environmental Hero remain identity-critical.

No final production asset is authorized by this dossier while the broader Creative Canonical Lock remains open.

---

# 12. Responsive Art Direction

Desktop:

- broad Hero composition;
- preserve the community-first chapter order;
- `H06 + H07` may share a row;
- `H03 + H04` may share a row;
- factual blocks remain constrained/readable.

Tablet:

- reduce/remove lateral ornament before compressing content;
- recompose Hero;
- preserve chapter order;
- paired chapters may become asymmetric stacks if required by content length.

Mobile:

- preserve crest, orientation, primary CTA and status;
- simplify/crop/substitute environment before typography;
- single content flow in the same community-first order;
- `H02` stacks image/facts/action;
- `H06`, `H07`, `H03`, `H04`, `H05` stack as semantic sections;
- no hover dependency;
- no horizontal overflow;
- targets >= 44x44;
- optional preview modules can collapse/hide only through readiness rules, never merely because the viewport is narrow.

---

# 13. Page states

`NOT_READY`:
- IA/core rules unresolved or no useful route exists.

`PRELAUNCH_READY`:
- dossier and fixture validation pass, but canonical review/production content incomplete.

`LIVE_SPARSE`:
- Hero + at least one useful current/recent path;
- optional modules may be hidden.

`LIVE_NORMAL`:
- Hero + featured/current Adunanza + broader Adunanze route + at least one community or editorial route.

`LIVE_RICH`:
- multiple useful modules pass readiness without becoming visually dense.

`STALE_REVIEW`:
- featured/current modules rely on overdue verification.

`TEMPORARILY_UNAVAILABLE`:
- source/data failure distinct from valid emptiness.

---

# 14. Content Readiness

`PASS_STAGING_ONLY` requires:

- this dossier remains traceable;
- fixture supports complete/sparse/cancelled paths;
- `H01`, `H02/H03` logic validated;
- community-first grouping can recompose without semantic loss;
- no suspended/on-hold domain enters the page.

`PASS_LIVE` additionally requires:

- production event/news/memory/community sources verified;
- at least one useful Home route;
- no synthetic fixture content rendered;
- accessibility/technical QA passes;
- required canonical conflicts propagated.

---

# 15. Relationships

Required routes for the vertical slice:

- Home → Adunanza;
- Home → Giostra when selected/listed;
- Home → Avventuriero when readiness-qualified preview is shown;
- Home → Alleanza when readiness-qualified preview is shown;
- completed Giostra → Result;
- completed Giostra → Cronaca;
- Result/Cronaca → Avventuriero;
- Proclamo → related Adunanza.

Home only aggregates; source-of-truth facts remain on underlying objects.

---

# 16. Component decomposition

| Component ID | Role | Shared/local | Level | Key states |
|---|---|---|---|---|
| `HOME-HERO-01` | principal threshold | Local | V6 | normal/reduced-motion |
| `CMP-EVT-FEATURED` | featured Adunanza | Shared candidate | V4 | upcoming/ongoing/cancelled not eligible |
| `CMP-EVT-CARD` | event preview | Shared candidate | V2–V3 | upcoming/cancelled/completed |
| `CMP-ARTICLE-TEASER` | Proclamo/Cronaca preview | Shared candidate | V2–V3 | normal/sparse |
| `CMP-PLAYER-REF` | Avventuriero teaser/ref | Shared candidate | V2–V3 | sparse/normal/no-image |
| `CMP-ORG-REF` | Alleanza teaser/ref | Shared candidate | V2–V3 | sparse/normal/no-logo |
| `CMP-EMPTY-STATE` | truthful empty state | Shared | V1 | empty/error distinct |
| `HOME-END-01` | closing route | Local | V2–V3 | Adunanze/default, Cronache fallback |

Shared definitions are consolidated in `docs/components/SHARED_COMPONENT_REGISTRY.md`.

---

# 17. Asset dependencies

Asset production remains frozen pending broader Creative Canonical Lock.

Identity-critical candidates:

- ICA crest, governed separately;
- Home environmental Hero artwork.

Expected reusable structural families after final asset reconciliation:

- modular frame/divider SVG primitives;
- small seal/ornament SVG primitives.

Home-specific candidates:

- environmental Hero;
- closing environment.

Optional enhancements:

- guardian pair;
- hanging heraldic banners.

Content-governed media, never generic invented production assets:

- event media;
- player portraits;
- organization logos/marks;
- editorial/article imagery.

No candidate receives final production authorization from this dossier alone.

---

# 18. Accessibility

Required:

- semantic landmarks/headings;
- visible focus;
- keyboard-operable navigation/actions;
- WCAG 2.2 AA target;
- meaningful alt text only for informative imagery;
- decorative imagery hidden from assistive tech;
- status text not icon/color-only;
- reduced motion;
- readable dates/locations;
- text sizes must not copy tiny raster-reference proportions literally;
- touch targets >= 44x44.

---

# 19. SEO / sharing

Functional subject must remain explicit:

- In Cerca di Avventura;
- Sorcery: Contested Realm;
- Italian community context.

Narrative naming can enrich but not hide the real subject. Social preview must not imply official Sorcery ownership/endorsement.

---

# 20. Data contract

Primary aggregated objects:

- `EVENT`;
- `ARTICLE` + editorial classification `NEWS` / `CRONACA`;
- `PLAYER`;
- `ORGANIZATION`;
- `VENUE`.

No page-local manual duplication of canonical factual fields.

---

# 21. Provenance / traceability decisions

| Decision ID | Decision | Source type | Source ref | Status |
|---|---|---|---|---|
| `PAG-HOME-001` | Home is principal threshold. | DERIVED | `CDL-014` | REVIEW |
| `PAG-HOME-002` | Crest is Home navigation entry. | DERIVED | `CDL-003` | PRODUCT OWNER LOCKED |
| `PAG-HOME-003` | Primary destination set/order follows Primary IA. | DERIVED | `CDL-003` | PRODUCT OWNER LOCKED |
| `PAG-HOME-004` | Giostre is presented only inside Adunanze semantics. | DERIVED | `CDL-005` | PRODUCT OWNER LOCKED |
| `PAG-HOME-005` | Tesori absent while suspended. | DERIVED | `CDL-012` | SUSPENDED |
| `PAG-HOME-006` | Mercante absent while on hold. | DERIVED | `CDL-013` | ON HOLD |
| `PAG-HOME-007` | Community-first macro-composition: H01 → H02 → (H06+H07) → (H03+H04) → H05 → H08. | DIRECT_PO_DECISION | `CDL-025` | PRODUCT OWNER LOCKED |
| `PAG-HOME-008` | Featured Adunanza uses deterministic selector. | DERIVED | `CDL-021` | REVIEW |
| `PAG-HOME-009` | Avventurieri/Alleanze previews are readiness-driven optional modules. | DERIVED | `CDL-022` | REVIEW |
| `PAG-HOME-010` | Poetic Home page title is non-blocking. | DERIVED | `CDL-023` | REVIEW |
| `PAG-HOME-011` | H08 default headline is “Trova la tua prossima Adunanza.” when Le Adunanze is available, with truthful fallback otherwise. | DIRECT_PO_DECISION + DERIVED_FALLBACK | `CDL-026` + readiness rules | PRODUCT OWNER LOCKED |
| `PAG-HOME-012` | Optional guardians/banners are not identity dependencies; crest and environmental Hero are identity-critical. | DERIVED | visual-reference risk review 2026-09-16 | REVIEW |

---

# 22. Narrative & Aesthetic QA

Apply the standard NAQ profile with emphasis on:

- threshold identity without opacity;
- current activity visible;
- community identity appears before the broader activity/news chapter;
- no dashboard feel;
- correct Adunanza/Giostra relationship;
- truthful sparse modules;
- reduced fantasy density in repeated content;
- no synthetic fixture leakage;
- Home identity survives without optional guardians, logos, portraits or event art;
- non-canonical `Reame` closing wording is absent.

---

# 23. Product Owner decisions still open

For the Home composition itself, **no blocking Product Owner decision remains**:

- community-first macro-composition is locked by `CDL-025`;
- default closing headline is locked by `CDL-026`.

Still non-blocking/future:

1. an optional poetic **Home page title**, if desired later;
2. any explicit future change to the locked composition or closing headline.

The broader project still requires final Product Owner review of `docs/NARRATIVE_ART_BIBLE.md` v0.4 before Creative Canonical Lock and production-asset authorization.

---

# 24. Definition of Ready

For vertical-slice implementation/spec validation:

- Writer Intent documented;
- user jobs resolved;
- community-first composition Product Owner locked;
- deterministic featured event rule defined;
- closing headline Product Owner locked with truthful fallback;
- content/state/readiness behavior defined;
- relationships mapped;
- components identified;
- fixture validates complete/sparse/cancelled paths;
- no suspended/on-hold domain enters scope.

**Vertical-slice specification state:** `READY_FOR_VALIDATION`  
**Home composition scope:** `PRODUCT_OWNER_LOCKED`  
**Canonical state:** `REVIEW_REQUIRED`  
**Production readiness:** `NOT_READY`
