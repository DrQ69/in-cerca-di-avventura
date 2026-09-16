# In Cerca di Avventura — Page Dossier: Home

**Document ID:** ICA-PAG-HOME-001  
**Page:** Home  
**Narrative identity:** principal threshold of the cittadella-crocevia; final poetic title not yet locked  
**Status:** REVIEW_REQUIRED — Product Owner decisions remain open  
**Version:** 0.2  
**Phase:** Creative Canonical Lock  
**Primary owner:** Product / Creative Direction  
**Last reviewed:** 2026-09-16  
**Primary dependencies:** `docs/NARRATIVE_ART_BIBLE.md`, `docs/TERMINOLOGY_BIBLE.md`, `docs/PRIMARY_INFORMATION_ARCHITECTURE.md`, `docs/EXPERIENCE_MAP.md`, `docs/RELATIONSHIP_MAP.md`, `docs/CONTENT_GOVERNANCE.md`, `docs/PAGE_STATE_MODEL.md`, `docs/CONTENT_READINESS_GATE.md`, `docs/VISUAL_HIERARCHY_MATRIX.md`, `docs/RESPONSIVE_ART_DIRECTION.md`, `docs/NARRATIVE_AESTHETIC_QA.md`, `docs/CREATIVE_DECISION_LOG.md`, `docs/PAGE_DOSSIER_TEMPLATE.md`

> The Home is the principal threshold into In Cerca di Avventura. It must make the visitor feel that they are entering a living cittadella-crocevia while simultaneously making the next useful actions obvious.

---

# 0. Provenance summary

- `source_type`: `DERIVED + PROPOSED`
- `source_ref`: Narrative & Art Bible; Terminology Bible; Primary IA v1; Experience Map; Relationship Map; Creative Decision Log; Page Dossier v0.1
- `decision_status`: mixed — Product Owner locked foundations + page-level decisions still in review
- `approved_by`: Product Owner for locked terminology/IA decisions only
- `approved_date`: 2026-09-16 for the decisions explicitly recorded as locked

This dossier does **not** convert remaining page-level proposals into canonical decisions. Any item marked `REVIEW` or `OPEN` remains outside implementation authority.

---

# 1. Page identity

## 1.1 Functional identity

**Primary role:** threshold, orientation, discovery and current-state overview.  
**Navigation entry:** ICA crest.  
**Role in Primary IA:** root entry point linking the five active primary destinations: Le Adunanze, Cronache, Avventurieri, Alleanze and Proclami.  
**Role in Experience Map:** first orientation surface and launch point into the major visitor journeys; also a return surface after a visitor completes a deeper journey.  
**TECH family:** root landing page / editorial aggregation page.  
**Main entity types:** `EVENT`, `ARTICLE`, `PLAYER`, `ORGANIZATION`, `VENUE`, with derived references to `RESULT`, `DECK`, `GALLERY` only where a downstream module needs them.

The Home is not a sitemap, dashboard or dense portal. It should expose enough of the living community to orient and invite, then send the visitor toward the appropriate dedicated destination.

## 1.2 Narrative identity

The Home is the **principal threshold of the cittadella-crocevia**.

The visitor should feel that they have arrived somewhere inhabited: a place from which roads depart toward gatherings, people, chronicles, alliances and news, and to which traces of those activities return as memory.

A final poetic page title is **not yet locked**. `La Soglia del Reame` is superseded as a working label because `Reame` is protected semantic territory in Sorcery and the approved structural metaphor is the cittadella-crocevia. `La Soglia` may still be evaluated as a page-level poetic title, but it is not canonical.

## 1.3 Functional descriptor

**Working functional descriptor:**  
`Sorcery: Contested Realm — community italiana, eventi, cronache e persone.`

This descriptor is functional copy, not final marketing copy. Its purpose is to ensure immediate comprehension for first-time visitors and search engines.

---

# 2. Writer Intent

The Home should behave like the moment in a fantasy journey when a traveller reaches the gates of an inhabited place at twilight.

There is mystery, but not confusion. The place has age, but is not a ruin. There is ceremony, but the visitor is welcomed rather than intimidated. Beyond the threshold there are signs of current life: gatherings being announced, travellers arriving, records being preserved, heralds publishing news and alliances connecting distant places.

The visitor should understand within the first screen that:

- ICA is dedicated to Sorcery: Contested Realm;
- ICA is a living centre for the Italian Sorcery community;
- something is happening now or soon;
- the site contains both current activity and preserved memory;
- there are clear paths into the community rather than decorative rooms to decode.

The narrative promise is:

**enter, discover what is happening, meet the people, follow the roads, preserve the memory.**

The Home must never pretend that ICA is a fictional kingdom detached from the real community. It frames real activity; it does not replace it with lore.

---

# 3. Emotional and experiential goals

| Goal | Visitor perception | Evidence in page experience | Priority |
|---|---|---|---|
| Arrival | “I have entered a distinct place.” | Expressive threshold hero, ICA crest, controlled environmental art | Critical |
| Orientation | “I understand what ICA is and what I can do here.” | Functional descriptor, clear primary nav, one dominant CTA | Critical |
| Activity | “The community is alive now.” | Prossima Adunanza and current Proclami | Critical |
| Invitation | “There is an obvious path worth following.” | Direct routes into active sections, restrained CTA hierarchy | High |
| Continuity | “What happens here becomes memory.” | Transition from current events/news to Cronache and people | High |
| Community warmth | “This belongs to people, not an institution.” | Avventurieri/Alleanze content and real imagery where available | High |

**Anti-goals:**

- generic fantasy portal;
- SaaS dashboard;
- game launcher;
- over-gothic or grimdark interface;
- dense wall of cards;
- literal map required to navigate;
- decorative home page whose sections are visually rich but empty of useful content.

---

# 4. Real user jobs and success conditions

| User job | Success condition | Primary action | Related journey |
|---|---|---|---|
| Understand what ICA is | Visitor can identify Sorcery + Italian community context within first screen | Read descriptor / use primary navigation | New visitor orientation |
| Find what is happening next | Visitor reaches one relevant upcoming event without scanning the entire site | Open Prossima Adunanza | Event discovery |
| Find ICA competitive events | Visitor can reach Giostre through Le Adunanze without treating Giostre as a sibling domain | Enter Le Adunanze / Giostre | Competition journey |
| See what is new | Visitor can identify recent news and updates | Open a Proclamo | Current-information journey |
| Understand what happened | Visitor can reach preserved editorial memory | Open a Cronaca | Post-event / memory journey |
| Discover the people | Visitor can enter the Avventurieri area from a real community context | Open Avventurieri | Player discovery |
| Discover connected communities | Visitor can reach Alleanze and understand the network around ICA | Open Alleanze | Community-network journey |
| Continue exploring | Visitor can move from one Home module into a dedicated page without dead ends | Follow contextual route | Cross-site exploration |

The Home succeeds when the visitor can move from **orientation to one meaningful destination** without decoding ICA lore first.

---

# 5. Content scope

## 5.1 Required content

### Home identity / orientation

Required:

- ICA crest / identity mark;
- clear Sorcery: Contested Realm reference;
- Italian community context;
- one primary CTA;
- primary navigation.

Owner/source: ICA editorial/product source of truth.  
Verification: terminology and brand QA.  
Freshness: stable, reviewed when positioning or IA changes.

### Featured upcoming event

Entity: `EVENT`.  
Required factual fields:

- title;
- start date/time where available;
- venue/location where applicable;
- organizer;
- event type;
- Giostra flag only when the approved Giostra boundary is satisfied;
- registration/info route when available.

Owner/source: canonical EVENT object and verified event source.  
Verification: Content Governance `VERIFIED` or permitted equivalent for publication.  
Freshness: evaluated whenever event schedule changes.

### News preview

Entity: `ARTICLE` classified as Proclamo / News.  
Required fields:

- headline;
- publication date;
- short summary/deck;
- destination URL.

### Cronache preview

Entity: `ARTICLE` classified as Cronaca.  
Required fields:

- title;
- editorial type/classification;
- publication date;
- related factual subject where applicable;
- destination URL.

## 5.2 Optional content

- curated Adunanze set beyond the featured event;
- featured Avventurieri;
- selected Alleanze;
- editorial imagery / event photography;
- recent Giostra highlight inside the Adunanze context;
- contextual route from a Cronaca toward related EVENT/PLAYER/DECK.

Optional content appears only if it passes module readiness. Absence must not create a decorative empty chamber.

## 5.3 Explicit exclusions

Until reopened or canonically resolved:

- `Tesori` — suspended;
- `Mercante` — on hold;
- guides, documents, rules and reference resources — destination unresolved;
- login/account modules — outside launch model;
- generic UGC feeds — outside launch model;
- literal fantasy map as mandatory primary navigation;
- invented player achievements, fictional event descriptions or simulated community content.

## 5.4 Factual / editorial / narrative boundary

**FACTUAL:** dates, venues, organizers, result references, player identity, organization identity, article publication date, event classification, Giostra eligibility.  
**EDITORIAL:** headline, article summary, curation order, featured selection, explanatory text.  
**NARRATIVE:** section-opening language, environmental framing, symbolic transitions, optional poetic page title.

Narrative or editorial copy may contextualize factual objects but may not alter them.

---

# 6. Information architecture inside the page

The following sequence remains a **review proposal**, not a locked Product Owner decision.

| Module ID | Module role | Required? | Visual level | Primary content | Destination / action |
|---|---|---:|---|---|---|
| `HOME-H01` | Threshold / Hero | Yes | V6 | ICA identity + functional descriptor | One primary CTA |
| `HOME-H02` | Prossima Adunanza | Yes when a qualified event exists | V5 | Featured EVENT | Event detail / Le Adunanze |
| `HOME-H03` | Le Adunanze preview | Conditional | V4 | Curated EVENT set | Le Adunanze |
| `HOME-H04` | I Proclami | Yes if module readiness passes | V3 | News ARTICLE | Proclami |
| `HOME-H05` | Gli Annali / Cronache | Yes if module readiness passes | V4 | Cronaca ARTICLE | Cronache |
| `HOME-H06` | Avventurieri preview | Review | V3 | PLAYER | Avventurieri |
| `HOME-H07` | Alleanze preview | Review | V3 | ORGANIZATION | Alleanze |
| `HOME-H08` | Closing threshold / onward road | Review | V4 | Narrative closure + route | CTA or quiet closure |

Rules:

- H02 and H03 must not become two competing event taxonomies;
- Giostre is always represented as a subtype/context inside Le Adunanze;
- H04 and H05 must remain semantically distinct: Proclami = current news, Cronache = preserved editorial memory;
- H06/H07 may be hidden or reduced if launch content is insufficient;
- H08 must not introduce a new domain;
- module order is subject to Product Owner review before implementation.

---

# 7. Web Designer Interpretation

The Home should feel **spatial and editorial**, not like vertically stacked SaaS cards.

Recommended page rhythm:

- a strong environmental arrival;
- immediate factual/current activity near the top;
- controlled alternation between current activity and editorial memory;
- progressively quieter modules as repetition increases;
- a deliberate closing gesture rather than an endless feed.

The visitor's eye should not encounter equal visual weight across all sections. The hero establishes the world; featured activity proves the world is alive; editorial modules deepen it; repeated previews become restrained.

**Shared with ICA design system:** grid, typography hierarchy, control language, focus states, gold/iron/blue relationships, metadata conventions, accessibility behavior.  
**Home-specific:** threshold hero composition, top-of-page narrative transition, closing onward-road module, exact editorial sequence.

Core principle:

**Fantasy in perception. Clarity in interaction.**

---

# 8. Art Direction

## 8.1 Environmental direction

Suggested setting: the approach to or interior threshold of an inhabited cittadella-crocevia at twilight / early evening.

Environmental cues may include:

- stone and architectural mass framing the threshold;
- blackened iron and antique-gold identity details;
- cool exterior blue contrasted with warm inhabited light;
- distant signs of activity rather than empty monumental scenery;
- restrained fabric/banner movement;
- roads, arches or sightlines suggesting onward routes.

The threshold should feel maintained, active and welcoming, not fortified against the visitor.

## 8.2 Material hierarchy

Primary:

- stone / architecture;
- blackened iron;
- antique gold.

Secondary:

- dark fabric / velvet at ceremonial headings;
- parchment/paper only where the content metaphor is actually editorial or proclamatory;
- real community photography/artwork where content deserves visual priority.

## 8.3 Visual intensity budget

- H01 Hero: `V6`;
- H02 Featured event: `V5`;
- H03 Adunanze preview: `V4`;
- H04 Proclami: `V3`;
- H05 Cronache: `V4`;
- H06 Avventurieri: `V3`;
- H07 Alleanze: `V3`;
- H08 Closing threshold: `V4`;
- metadata, dates, venue, organizer, tags: `V1–V2`.

No repeated card grid may inherit hero-level ornament.

## 8.4 Symbolic / heraldic language

The ICA crest is permitted as the Home identity anchor. A new Home-specific emblem is **not required** and should not be created unless the final poetic Home identity justifies it.

Destination symbols may appear as secondary recognition aids only after the Shared Component Registry / iconographic system defines them.

## 8.5 Negative constraints

Do not:

- turn the Home into a fantasy dashboard;
- use one ornate framed card per section as the default composition;
- repeat the ICA crest on every module;
- use parchment as a universal surface;
- use generic castle/map imagery as a substitute for content structure;
- use animated particles/glow to create false atmosphere;
- make current factual information visually subordinate to decorative scenery;
- imply `Tesori` or `Mercante` is active through background signage or links.

---

# 9. Responsive Art Direction

## 9.1 Wide desktop

- `PRESERVE` broad threshold composition and environmental depth;
- `PRESERVE` visible primary navigation only if reconciled M7.1 label-fit passes;
- `RECOMPOSE` modules into varied editorial rhythms rather than a uniform grid;
- `PRESERVE` real content imagery where it carries meaning.

## 9.2 Standard desktop

- `CROP` non-essential peripheral environment;
- `SIMPLIFY` decorative transitions before reducing text scale;
- `PRESERVE` module hierarchy and data density.

## 9.3 Tablet

- `RECOMPOSE` hero into a shallower composition;
- `SIMPLIFY` lateral ornament;
- `SUBSTITUTE` complex panoramic backgrounds when focal content becomes unclear;
- `PRESERVE` featured event prominence;
- `RECOMPOSE` multi-column previews into 2-column or single editorial rows.

## 9.4 Mobile portrait

Mobile is **ICA essenziale**.

- `PRESERVE` crest, page identity, functional descriptor and primary CTA;
- `CROP` or `SUBSTITUTE` background environment before shrinking critical typography;
- `REMOVE_DECORATIVE_ONLY` side ornaments, secondary frames and excessive texture;
- `RECOMPOSE` every preview into a single clear vertical flow;
- `PRESERVE` dates, venue, organizer and action labels as explicit text;
- primary navigation becomes the approved compact/mobile pattern rather than five cramped labels;
- all touch targets >= 44x44;
- no hover-dependent information.

## 9.5 Mobile landscape

- avoid preserving wide-desktop composition merely because width increases;
- keep mobile interaction pattern if height remains constrained;
- ensure the hero does not consume the majority of usable viewport height.

---

# 10. Page states

The Home follows `PAGE_STATE_MODEL.md`.

## `NOT_READY`

Home implementation may exist in staging, but production publication is blocked if orientation content, primary navigation or required destination readiness is insufficient.

## `PRELAUNCH_READY`

Core identity, nav and at least one valid current-content route exist; modules not ready are hidden rather than filled with placeholders.

## `LIVE_SPARSE`

Allowed when the Home remains useful with a reduced module set. At minimum:

- threshold/orientation works;
- primary navigation works;
- at least one meaningful current route exists;
- no visible empty decorative modules.

## `LIVE_NORMAL`

Expected launch/steady-state condition: current event/news plus memory/editorial route and sufficient destination coverage.

## `LIVE_RICH`

Multiple current events, Proclami, Cronache, people and alliances can be curated without increasing visual density indiscriminately.

## `STALE_REVIEW`

Triggered when featured current content is outdated, event selection no longer valid, or a primary destination materially changes scope.

## `ARCHIVAL`

Not normally applicable to the Home as a whole. Individual modules may surface archival content; the Home itself remains current.

## `TEMPORARILY_UNAVAILABLE`

Critical route failures or content-source failures must degrade gracefully. Stable navigation and identity remain if technically possible.

Module-level behavior: modules failing readiness are hidden or simplified; no fake content is shown.

---

# 11. Content Readiness Gate

## `PASS_STAGING_ONLY`

Requires:

- approved primary IA reflected correctly;
- threshold identity and functional descriptor present;
- all modules use verified/test data clearly isolated from production publication;
- mobile and keyboard paths operational;
- unresolved Product Owner decisions still visibly marked in documentation.

## `PASS_LIVE`

Requires universal Content Readiness criteria plus Home-specific conditions:

- primary navigation destinations that appear as active links meet their own readiness gate or have an approved safe sparse state;
- at least one useful current route exists (normally a qualified upcoming EVENT or current Proclamo);
- no module displays invented placeholder content;
- Proclami/Cronache distinction is preserved;
- Giostre is not surfaced as an independent primary taxonomy;
- event feature fields are verified and not stale;
- any optional Avventurieri/Alleanze module shown at launch has enough real content to be useful;
- Home remains useful when optional preview modules are omitted.

Re-gating triggers:

- primary IA change;
- event selection logic change;
- active destination suspended/on hold;
- significant terminology change;
- page module architecture change;
- content-source or privacy-rule change.

The exact numeric/content thresholds for optional Home preview modules remain a Product Owner/content decision if not already governed globally.

---

# 12. Relationships and navigation

| From | Relationship | To | Type | Required link? | Owner/source |
|---|---|---|---|---:|---|
| Home | primary route | Le Adunanze | navigational | Yes | Primary IA |
| Home | primary route | Cronache | navigational | Yes | Primary IA |
| Home | primary route | Avventurieri | navigational | Yes | Primary IA |
| Home | primary route | Alleanze | navigational | Yes | Primary IA |
| Home | primary route | Proclami | navigational | Yes | Primary IA |
| Featured EVENT | organized-by | ORGANIZATION | factual | When available/useful | EVENT source |
| Featured EVENT | held-at | VENUE | factual | When available | EVENT source |
| Featured EVENT | subtype | Giostra | factual classification | When true | EVENT governance |
| Cronaca preview | relates-to | EVENT/PLAYER/DECK/etc. | editorial relationship over factual refs | Optional on Home, required downstream where defined | ARTICLE source |
| Proclamo preview | announces/updates | EVENT/other subject | editorial/factual | When relevant | ARTICLE source |

Mandatory journey-continuity links: Home → active primary destinations; featured EVENT → event detail/info; preview ARTICLE → article detail.

---

# 13. Components

| Component ID | Role | Shared / local | Visual level | Required states | Data dependencies |
|---|---|---|---|---|---|
| `HOME-HERO-01` | principal threshold hero | Local composition | V6 | default / sparse / reduced-motion | identity copy |
| `HOME-FEAT-EVT-01` | featured next Adunanza | Shared candidate | V5 | event present / hidden / stale-review | EVENT, VENUE, ORGANIZATION |
| `HOME-EVT-LIST-01` | curated Adunanze preview | Shared candidate | V4 | list / sparse / hidden | EVENT |
| `HOME-NEWS-01` | Proclami preview | Shared candidate | V3 | populated / sparse / hidden | ARTICLE News |
| `HOME-CHR-01` | Cronache preview | Shared candidate | V4 | populated / sparse / hidden | ARTICLE Cronaca |
| `HOME-PLY-01` | Avventurieri preview | Shared candidate | V3 | populated / hidden | PLAYER |
| `HOME-ALLY-01` | Alleanze preview | Shared candidate | V3 | populated / hidden | ORGANIZATION |
| `HOME-END-01` | onward-road closure | Local composition | V4 | atmospheric / CTA variant | none or nav ref |

IDs remain provisional until the Shared Component Registry is created.

Shared candidates must be generalized from semantics and state behavior, not from visual resemblance alone.

---

# 14. Asset dependencies

| Asset candidate | Role | Required? | Component/module | Responsive variants | Provenance / source | Status |
|---|---|---:|---|---|---|---|
| `AST-HOME-HERO-*` | threshold environmental art | Yes for final expressive design; not required for structural prototype | H01 | desktop/tablet/mobile crops or substitutes | Narrative Bible + Home dossier | REVIEW |
| `AST-ICA-CREST` | identity anchor | Yes | H01/nav | scalable vector preferred | approved ICA identity | existing / verify production source |
| `AST-HOME-DIV-*` | chapter transition ornament | No | H02–H08 | simplify/remove on mobile | derived | DRAFT |
| destination imagery | content-led preview imagery | Conditional | H03–H07 | content-responsive | source content / verified media | DRAFT |
| `AST-HOME-END-*` | closing road/firelight/crossroads motif | No | H08 | substitute/remove decorative variants | derived | REVIEW |

No production asset should be generated solely because this table contains a candidate. Final IDs/specs wait for component consolidation and Asset Dependency Map.

---

# 15. Interaction and microcopy

## Primary CTA

One dominant CTA in H01.

Working behavior proposal:

- if a clearly qualified featured Adunanza exists, CTA may lead to it;
- if an ICA Giostra is selected as that featured event, it is still presented within the Adunanze hierarchy;
- otherwise default to `Esplora le Adunanze`.

The exact selection policy remains `OPEN`.

## Secondary actions

- `Vedi tutte le Adunanze`;
- `Leggi i Proclami`;
- `Esplora le Cronache`;
- `Scopri gli Avventurieri`;
- `Esplora le Alleanze`.

These are functional working labels, not all necessarily simultaneous CTAs.

## Empty/sparse behavior

- hide optional module when below readiness;
- do not show “coming soon” fantasy rooms unless Product explicitly approves a prelaunch pattern;
- where current event content is absent, keep orientation and route toward Le Adunanze without implying an event exists.

## Error recovery

Critical navigation remains available if one content feed fails. A failed feed should not collapse the whole Home.

Microcopy follows the register ladder: ceremonial only at threshold; direct at buttons, dates, metadata and system states.

---

# 16. Accessibility requirements

- one logical `h1` for the Home identity/functional heading structure;
- semantic landmarks for header/nav/main/footer;
- keyboard order follows visual/read order;
- visible focus on all interactive elements;
- WCAG 2.2 AA target for text and controls;
- alternative text for informational artwork/photography;
- environmental/decorative art hidden from assistive technology when it adds no information;
- no status communicated only through gold, glow, badge shape or heraldic icon;
- reduced motion removes non-essential atmospheric animation;
- target size >= 44x44;
- explicit text for dates, locations, organizer and actions;
- compact mobile navigation has an accessible name and deterministic open/close state;
- headings remain understandable without decorative narrative subtitles.

---

# 17. SEO / discoverability / sharing

**Functional title intent:** `In Cerca di Avventura — Sorcery: Contested Realm Italia` or equivalent clear variant.  
**Narrative title:** may appear visually if approved, but must not replace the functional SEO identity.  
**Meta description intent:** communicate Italian Sorcery community, events, chronicles, players and connected communities in plain language.  
**Indexability:** indexable when production-ready.  
**Structured data opportunities:** future `Event` / article markup belongs to destination/detail pages; Home may aggregate but should not duplicate misleading structured records.  
**Open Graph:** ICA identity + representative art; must not imply official publisher ownership/endorsement.  
**Attribution:** real community photography/artwork follows Content Governance provenance and rights rules.

---

# 18. Data and technical contract

| Object | Field | Requirement | Source of truth | Verification | Display contexts |
|---|---|---|---|---|---|
| `EVENT` | title | Required for featured event | EVENT | verified | H02/H03 |
| `EVENT` | start date/time | Required for featured event | EVENT | verified/current | H02/H03 |
| `EVENT` | venue/location | Conditional | EVENT/VENUE | verified | H02/H03 |
| `EVENT` | organizer | Required where known | EVENT/ORGANIZATION | verified | H02/H03 |
| `EVENT` | event type | Required | EVENT | verified | H02/H03 |
| `EVENT` | Giostra classification | Conditional boolean/subtype | EVENT governance | strict semantic rule | H02/H03 |
| `ARTICLE` | classification | Required | ARTICLE | verified editorial classification | H04/H05 |
| `ARTICLE` | title | Required | ARTICLE | editorial QA | H04/H05 |
| `ARTICLE` | publication date | Required | ARTICLE | verified | H04/H05 |
| `ARTICLE` | summary | Optional/required by component | ARTICLE | editorial QA | H04/H05 |
| `PLAYER` | public display identity | Required if H06 shown | PLAYER | privacy/publication scope | H06 |
| `ORGANIZATION` | name/type/geography | Required if H07 shown | ORGANIZATION | verified | H07 |

Derived values, such as “next event,” must declare selection logic before implementation. No page-local hardcoded duplicate becomes source of truth.

---

# 19. Machine-readable specification placeholder

Future JSON should derive from this dossier only after page-level Product Owner decisions are stable.

Expected families:

- page metadata;
- H01–H08 module registry or approved replacement;
- component references;
- entity/data dependencies;
- responsive action matrix;
- page/module states;
- readiness rules;
- provenance IDs;
- QA profile references.

No JSON is authored in v0.2 because sequence, title and featured-event selection remain open decisions.

---

# 20. Narrative → Design → Implementation traceability

| Decision ID | Decision | Source type | Source ref | Status | Downstream refs |
|---|---|---|---|---|---|
| `PAG-HOME-001` | Home is principal threshold of cittadella-crocevia | DERIVED | Narrative & Art Bible | REVIEW / foundation consistent | H01, art direction |
| `PAG-HOME-002` | ICA crest is Home navigation entry | DERIVED | Primary IA v1 | PRODUCT_OWNER_LOCKED | nav / hero |
| `PAG-HOME-003` | Primary destinations are Adunanze, Cronache, Avventurieri, Alleanze, Proclami | DERIVED | Primary IA v1 | PRODUCT_OWNER_LOCKED | nav + previews |
| `PAG-HOME-004` | Giostre appears only within Le Adunanze hierarchy | DERIVED | Terminology Bible + Primary IA | PRODUCT_OWNER_LOCKED | H02/H03 |
| `PAG-HOME-005` | Tesori excluded while suspended | DERIVED | Creative Decision Log / decision note | SUSPENDED | exclusions |
| `PAG-HOME-006` | Mercante excluded while on hold | DERIVED | Creative Decision Log / decision note | ON_HOLD | exclusions |
| `PAG-HOME-007` | Proposed H01–H08 sequence | PROPOSED | Page Dossier v0.1/v0.2 | REVIEW | module architecture |
| `PAG-HOME-008` | `La Soglia` possible poetic title | PROPOSED | threshold metaphor | REVIEW — NOT CANONICAL | H01 copy/art |
| `PAG-HOME-009` | Home uses V6→V1 intensity hierarchy | DERIVED | Visual Hierarchy Matrix | SPECIFIED | all modules |
| `PAG-HOME-010` | Optional modules hidden when below readiness | DERIVED | Page State Model + Readiness Gate | SPECIFIED | H03–H07 |
| `PAG-HOME-011` | Mobile uses ICA essenziale principle | DERIVED | Responsive Art Direction | SPECIFIED | responsive implementation |
| `PAG-HOME-012` | Home must not publish fictional placeholders | DERIVED | Content Governance | SPECIFIED | all content modules |

---

# 21. Narrative & Aesthetic QA profile

Minimum applicable NAQ domains:

- world/metaphor coherence;
- terminology compliance;
- factual/diegetic separation;
- Proclami/Cronache distinction;
- Giostre hierarchy inside Adunanze;
- visual hierarchy V6→V1;
- anti-dashboard / anti-over-ornament checks;
- functional clarity of hero and CTA;
- responsive identity preservation;
- real-content-over-scenery rule;
- no generic fantasy iconography as place identity;
- provenance coverage for real media/content;
- suspended/on-hold domains absent;
- accessibility/function-before-ornament.

A critical NAQ failure blocks promotion even if technical QA passes.

---

# 22. Open Product Owner decisions

These are the remaining decisions that cannot be safely derived downstream:

1. **Home module sequence** — approve H01–H08 as proposed or revise the order/number of modules.  
   **Impact:** page composition, component priorities, asset dependencies.  
   **Blocks implementation:** yes.

2. **Poetic Home title** — choose whether to explore/approve `La Soglia`, use another narrative title, or intentionally keep Home without a poetic place-name.  
   **Impact:** hero copy, identity art, possible symbol/emblem.  
   **Blocks implementation:** no for structural prototype; yes for final creative lock.

3. **Featured-event selection policy** — define how `Prossima Adunanza` is chosen when multiple events are upcoming. Options may include chronological-next, ICA-priority/editorial significance, nearest relevant event, or an explicit curated-feature rule.  
   **Impact:** data derivation, editorial governance, CTA behavior.  
   **Blocks implementation:** yes for final data behavior.

4. **Avventurieri + Alleanze at launch** — decide whether both preview modules are part of the Home baseline, one is secondary/conditional, or both remain readiness-driven optional modules.  
   **Impact:** launch density, content requirements, components/assets.  
   **Blocks implementation:** no if modules remain conditional; yes for locked final Home sequence.

5. **Closing threshold behavior** — atmospheric close only vs explicit onward CTA.  
   **Impact:** H08 interaction/copy/art.  
   **Blocks implementation:** no for upstream modules; yes for final Home completion.

6. **Optional-module readiness thresholds** — if global readiness rules are insufficient, confirm minimum useful quantity/quality for Home previews such as Avventurieri and Alleanze.  
   **Impact:** launch visibility rules.  
   **Blocks implementation:** only for those modules.

These decisions must be reviewed by the Product Owner; they are not delegated to implementation.

---

# 23. Definition of Ready for implementation

The Home may move toward implementation only when:

- Writer Intent is Product Owner accepted;
- Home module sequence is accepted;
- primary destination copy remains aligned with Terminology Bible / Primary IA;
- poetic-title decision is closed or explicitly deferred for structural implementation;
- featured-event selection logic is defined for production behavior;
- content sources and ownership are known;
- Page State and Content Readiness behavior is testable;
- relationships are mapped;
- shared/local component boundaries are reconciled with the future Shared Component Registry;
- responsive behavior follows the approved Responsive Art Direction;
- accessibility requirements are testable;
- asset dependencies are enumerated and not prematurely produced;
- provenance covers material decisions and real media;
- no suspended/on-hold domain has re-entered scope;
- Canonical Spec conflicts are identified for later propagation;
- critical Narrative & Aesthetic QA checks are satisfiable.

**Current lifecycle:** `SPECIFIED (REVIEW_REQUIRED)`  
**Readiness:** `NOT_READY`  
**Production implication:** none — this dossier is a review artifact, not implementation authorization.

---

# 24. Page Dossier completion checklist

- [x] functional purpose defined;
- [x] narrative identity defined at concept level;
- [x] user jobs documented;
- [x] content scope and exclusions documented;
- [x] factual/editorial/narrative boundary documented;
- [x] internal module architecture proposed;
- [x] Web Designer interpretation documented;
- [x] Art Direction documented;
- [x] Visual Hierarchy mapped;
- [x] Responsive Art Direction mapped;
- [x] Page State behavior mapped;
- [x] Content Readiness conditions documented;
- [x] relationships documented;
- [x] component decomposition drafted;
- [x] asset dependencies enumerated as candidates;
- [x] accessibility requirements documented;
- [x] SEO/discoverability intent documented;
- [x] data contract drafted;
- [x] provenance/traceability expanded;
- [x] Narrative & Aesthetic QA profile declared;
- [ ] Product Owner module-sequence decision closed;
- [ ] Product Owner poetic-title decision closed or explicitly deferred;
- [ ] Product Owner/event-governance featured-event selection rule closed;
- [ ] launch treatment of Avventurieri/Alleanze finalized;
- [ ] closing-threshold behavior finalized;
- [ ] Shared Component Registry reconciliation completed;
- [ ] Canonical Spec propagation completed.

The dossier is structurally complete for Product Owner review but is **not yet implementation-ready**.
