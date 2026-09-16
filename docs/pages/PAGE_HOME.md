# In Cerca di Avventura — Page Dossier: Home

**Document ID:** ICA-PAG-HOME-001  
**Page:** Home  
**Narrative identity:** principal threshold of the cittadella-crocevia; poetic title optional and not locked  
**Status:** `SPECIFIED (REVIEW_REQUIRED)`  
**Version:** 0.3  
**Phase:** Creative Canonical Lock — vertical-slice validation  
**Delivery status:** `COMPLETE`  
**Canonical readiness:** `REVIEW_REQUIRED`  
**Readiness:** `NOT_READY`  
**Primary owner:** Product / UX  
**Last reviewed:** 2026-09-16  
**Primary dependencies:** `docs/NARRATIVE_ART_BIBLE.md`, `docs/TERMINOLOGY_BIBLE.md`, `docs/PRIMARY_INFORMATION_ARCHITECTURE.md`, `docs/EXPERIENCE_MAP.md`, `docs/RELATIONSHIP_MAP.md`, `docs/CONTENT_GOVERNANCE.md`, `docs/PAGE_STATE_MODEL.md`, `docs/CONTENT_READINESS_GATE.md`, `docs/VISUAL_HIERARCHY_MATRIX.md`, `docs/RESPONSIVE_ART_DIRECTION.md`, `docs/NARRATIVE_AESTHETIC_QA.md`, `docs/CREATIVE_DECISION_LOG.md`

> The Home is the principal threshold into In Cerca di Avventura. It must make the visitor feel that they are entering a living cittadella-crocevia while making the next useful action obvious.

---

# 1. Provenance summary

- `source_type`: `DERIVED`
- `source_ref`: `CDL-001`, `CDL-002`, `CDL-003`, `CDL-014`, `CDL-021`, `CDL-022`, `CDL-023`
- `decision_status`: `REVIEW`
- `approved_by`: n.a.
- `approved_date`: n.a.

This v0.3 is the working Home contract for the vertical slice. It does not by itself authorize production implementation.

---

# 2. Functional identity

**Primary role:** threshold, orientation, discovery and current-state overview  
**Navigation entry:** ICA crest  
**TECH role:** root landing page / editorial aggregation page

The Home should quickly answer:

- What is happening next?
- Is there an upcoming Giostra?
- What is new?
- What happened recently?
- Who and which communities form this scene?
- Where should I continue?

The Home is not a sitemap and is not a dashboard.

---

# 3. Narrative identity / Writer Intent

The visitor reaches an inhabited place at twilight: old but maintained, solemn but welcoming, mysterious but legible.

The Home communicates:

1. arrival;
2. orientation;
3. current activity;
4. invitation to participate/explore;
5. continuity from present activity into memory.

A poetic Home title is **optional**. The page may launch without one. An older historical Home working title using `Reame` is non-canonical and must not return as the active page name.

---

# 4. Emotional goals and anti-goals

| Goal | Visitor perception | Evidence | Priority |
|---|---|---|---|
| Arrival | “I entered a distinct place.” | expressive threshold, crest, environmental composition | Critical |
| Orientation | “I understand this is Sorcery + Italian community.” | clear functional descriptor | Critical |
| Activity | “Something is happening now or soon.” | featured Adunanza | Critical |
| Invitation | “There is an obvious useful next step.” | single dominant CTA | Critical |
| Memory | “Past events remain meaningful.” | Cronache / results route | High |

Anti-goals:

- generic portal;
- SaaS dashboard;
- fantasy theme that obscures purpose;
- empty scenic rooms;
- several competing Hero CTAs.

---

# 5. Real user jobs

| User job | Success condition | Primary action | Journey |
|---|---|---|---|
| Find the next useful event | visitor reaches a verified Adunanza | `Scopri l'Adunanza` | current activity |
| Find ICA competition | visitor recognizes and opens a Giostra | `Scopri la Giostra` | participation |
| Catch up on news | recent Proclamo is visible or reachable | `Leggi il Proclamo` | current information |
| Understand what happened | recent Cronaca/result route is visible | `Leggi la Cronaca` | memory |
| Discover people | readiness-qualified player preview or destination is reachable | `Esplora gli Avventurieri` | community |
| Discover communities | readiness-qualified alliance preview or destination is reachable | `Esplora le Alleanze` | network |

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

# 7. Home module architecture

Working vertical sequence:

| Module | Role | Required | Visual level | Content |
|---|---|---:|---|---|
| `H01` | threshold / Hero | Yes | V6 | identity, descriptor, one CTA |
| `H02` | Prossima Adunanza | Yes when eligible content exists | V4 | featured EVENT |
| `H03` | Le Adunanze preview | Yes for normal launch | V3 | compact upcoming list |
| `H04` | Proclami | Optional/readiness-driven | V3 | NEWS ARTICLE |
| `H05` | Cronache / Gli Annali | Optional/readiness-driven | V3 | CRONACA ARTICLE |
| `H06` | Avventurieri | Optional/readiness-driven | V2 | PLAYER |
| `H07` | Alleanze | Optional/readiness-driven | V2 | ORGANIZATION |
| `H08` | onward road / closing | Yes | V3→V2 | one contextual CTA |

`H06` and `H07` no longer require a separate launch yes/no Product Owner decision. Their visibility is controlled by Content Readiness.

Final canonical acceptance of the overall order remains part of Home review, but the order is sufficient for vertical-slice validation.

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

# 9. Closing CTA rule

`H08` uses one functional onward action.

Priority:

1. if Le Adunanze is at least `LIVE_SPARSE`: `Esplora le Adunanze`;
2. otherwise if Cronache is at least `LIVE_SPARSE`: `Leggi le Cronache`;
3. otherwise no invented CTA is shown; global navigation remains.

Atmosphere may use road/firelight/crossroads cues, but the action label remains direct.

---

# 10. Web Designer Interpretation

Composition should be spatial and editorial, not a grid of equal cards.

- strong threshold;
- visible shift from current activity toward memory;
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
- `H03–H05`: V3;
- `H06–H07`: V2;
- `H08`: V3 intro, V2 action.

Primary material language: blackened iron, midnight blue, antique gold, selective fabric/parchment according to content role.

No final production asset is authorized by this dossier.

---

# 12. Responsive Art Direction

Desktop:

- broad Hero composition;
- chapter rhythm may alternate spatial emphasis;
- factual blocks remain constrained/readable.

Tablet:

- reduce lateral ornament;
- recompose Hero;
- preserve module hierarchy.

Mobile:

- preserve crest, orientation, primary CTA and status;
- simplify/crop environment before typography;
- single content flow;
- no hover dependency;
- no horizontal overflow;
- targets >= 44x44;
- optional preview modules can collapse/hide only through readiness rules, never because of arbitrary viewport semantics.

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
- Hero + featured/current Adunanza + broader Adunanze route + at least one current/memory editorial route.

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
- no suspended/on-hold domain enters the page.

`PASS_LIVE` additionally requires:

- production event/news/memory sources verified;
- at least one useful Home route;
- no synthetic fixture content rendered;
- accessibility/technical QA passes;
- required canonical conflicts propagated.

---

# 15. Relationships

Required routes for the vertical slice:

- Home → Adunanza;
- Home → Giostra when selected/listed;
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
| `CMP-PLAYER-REF` | Avventuriero teaser/ref | Shared candidate | V2 | sparse/normal |
| `CMP-ORG-REF` | Alleanza teaser/ref | Shared candidate | V2 | sparse/normal |
| `CMP-EMPTY-STATE` | truthful empty state | Shared | V1 | empty/error distinct |
| `HOME-END-01` | closing route | Local | V2–V3 | Adunanze/Cronache fallback |

Shared definitions are consolidated in `docs/components/SHARED_COMPONENT_REGISTRY.md`.

---

# 17. Asset dependencies

Asset production remains frozen.

Candidates only:

- Home environmental Hero artwork;
- optional section identity imagery;
- ICA crest already governed separately.

No candidate receives a final production ID until component/page review proves the need.

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
| `PAG-HOME-007` | H01–H08 is the working vertical-slice order. | DERIVED | Experience Map | REVIEW |
| `PAG-HOME-008` | Featured Adunanza uses deterministic selector. | DERIVED | `CDL-021` | REVIEW |
| `PAG-HOME-009` | Avventurieri/Alleanze previews are readiness-driven optional modules. | DERIVED | `CDL-022` | REVIEW |
| `PAG-HOME-010` | Poetic Home title is non-blocking. | DERIVED | `CDL-023` | REVIEW |
| `PAG-HOME-011` | H08 CTA follows Adunanze→Cronache fallback. | DERIVED | Experience Map + readiness | REVIEW |

---

# 22. Narrative & Aesthetic QA

Apply the standard NAQ profile with emphasis on:

- threshold identity without opacity;
- current activity visible;
- no dashboard feel;
- correct Adunanza/Giostra relationship;
- truthful sparse modules;
- reduced fantasy density in repeated content;
- no synthetic fixture leakage.

---

# 23. Product Owner decisions still open

Only genuine Product Owner decisions remain:

1. final canonical acceptance/revision of the Home module composition after vertical-slice evidence;
2. optional poetic Home title if desired — **non-blocking**.

The featured-event rule, optional preview visibility, empty states, responsive behavior and CTA fallback are deterministic design rules and do not require repeated PO decisions.

---

# 24. Definition of Ready

For vertical-slice implementation/spec validation:

- Writer Intent documented;
- user jobs resolved;
- H01–H08 working order defined;
- deterministic featured event rule defined;
- content/state/readiness behavior defined;
- relationships mapped;
- components identified;
- fixture validates complete/sparse/cancelled paths;
- no suspended/on-hold domain enters scope.

**Vertical-slice specification state:** `READY_FOR_VALIDATION`  
**Canonical state:** `REVIEW_REQUIRED`  
**Production readiness:** `NOT_READY`
