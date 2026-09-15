# In Cerca di Avventura — Page Dossier: Home

**Document ID:** ICA-PAG-HOME-001  
**Status:** DRAFT — Product Owner review required  
**Version:** 0.1  
**Phase:** Creative Canonical Lock  
**Depends on:** `docs/NARRATIVE_ART_BIBLE.md`, `docs/TERMINOLOGY_BIBLE.md`, `docs/PRIMARY_INFORMATION_ARCHITECTURE.md`  

> The Home is the principal threshold into In Cerca di Avventura. It must make the visitor feel that they are entering a living cittadella-crocevia while simultaneously making the next useful actions obvious.

---

# 1. Page identity

## 1.1 Functional identity

**Page:** Home  
**Primary role:** threshold, orientation, discovery and current-state overview  
**Navigation entry:** ICA crest  
**TECH role:** root landing page / editorial aggregation page

## 1.2 Narrative identity

The Home is the **principal threshold of the cittadella-crocevia**.

The visitor should not feel that they have opened a dashboard or a collection of disconnected cards. They should feel that they have arrived somewhere: a living place from which roads depart toward events, people, stories, alliances and news.

A final poetic page title is **not yet locked**. The older working expression `La Soglia del Reame` must not be treated as canonical because `Reame` is protected semantic territory in Sorcery and the project's primary metaphor is now the cittadella-crocevia.

**Working creative direction:** `La Soglia` may be explored later as a page-level title, but Home must remain immediately identifiable as the site's entry point.

---

# 2. Writer intent

The Home should behave like the moment in a fantasy journey when a traveller reaches the gates of an inhabited place at twilight.

There is mystery, but not confusion. The place has age, but is not a ruin. There is ceremony, but the visitor is welcomed rather than intimidated. Beyond the threshold, there are signs of current life: gatherings being announced, travellers arriving, records being preserved, heralds publishing news, alliances connecting distant places.

The visitor should understand within the first screen that:

- ICA is dedicated to Sorcery: Contested Realm;
- ICA is a living centre for the Italian Sorcery community;
- something is happening now or soon;
- the site contains both current activity and preserved memory;
- they can immediately choose a meaningful path.

The narrative promise is:

**enter, discover what is happening, meet the people, follow the roads, preserve the memory.**

---

# 3. Emotional goals

The Home should communicate, in this order:

1. **arrival** — I have crossed into a distinct place;
2. **orientation** — I understand what this place is about;
3. **activity** — the community is alive now;
4. **invitation** — there is somewhere useful to go next;
5. **continuity** — today's activity becomes tomorrow's memory.

Required emotional qualities:

- solemn but welcoming;
- mysterious but legible;
- handcrafted and material;
- ancient but maintained;
- communal rather than institutional;
- exploratory rather than dashboard-like.

---

# 4. Real user functions

The Home must let a visitor quickly answer:

- What is the next relevant Sorcery event?
- Are there upcoming Giostre organized by ICA?
- What is new?
- What happened recently?
- Who are the people and communities behind this scene?
- Where can I continue exploring?

The Home is not intended to expose every function or taxonomy. It is an **editorial and navigational threshold**, not a sitemap.

---

# 5. Primary content architecture

The initial Home sequence is proposed as follows.

## H01 — Threshold / Hero

Purpose:

- establish ICA identity;
- establish atmosphere;
- make the Sorcery/community purpose clear;
- provide one immediate primary action.

Content:

- ICA crest / identity;
- short ceremonial headline;
- concise functional descriptor;
- one primary CTA, context-sensitive when possible.

Preferred CTA behavior:

- if a significant upcoming Adunanza exists: lead toward it;
- if an ICA Giostra is the dominant upcoming event: lead directly to that Giostra within Le Adunanze;
- otherwise: `Esplora le Adunanze`.

The Hero must not contain several competing CTAs.

## H02 — Prossima Adunanza

Purpose: answer “what is happening next?” immediately.

Shows the most relevant upcoming event according to future editorial/content rules.

Minimum factual content:

- title;
- date;
- location / venue where applicable;
- event type;
- organizer;
- whether it is a Giostra;
- registration/info action when available.

Narrative intensity: medium-high at the section opening, low in factual event metadata.

## H03 — Le Adunanze

Purpose: expose the wider event world without turning Home into a calendar.

May show a compact curated set such as:

- upcoming Giostre;
- selected external competitive events;
- conventions / community gatherings;
- direct route to the full Le Adunanze page.

`Giostre` is visually recognizable as a subset, never presented as a sibling domain independent of Le Adunanze.

## H04 — I Proclami

Purpose: show current News and updates.

Content:

- small number of recent/high-priority Proclami;
- publication date;
- clear headline;
- short summary;
- route to all Proclami.

Narrative presentation may use the herald/proclamation metaphor, but headlines and dates remain direct.

## H05 — Gli Annali / Cronache

Purpose: show that ICA preserves memory, not only current activity.

Content may include:

- recent event report;
- interview;
- retrospective;
- community story;
- other approved Cronaca type.

The module should feel calmer and more archival/editorial than the Proclami module.

## H06 — Il Libro dei Nomi / Avventurieri

Purpose: make the community human and discoverable.

Possible Home treatment:

- featured Avventurieri;
- recent notable participants tied to factual activity;
- rotating editorial spotlight;
- direct route to the Avventurieri index.

No fictional achievements or biographies may be invented for visual flavour.

## H07 — I Reami Alleati / Alleanze

Purpose: show the social/geographic network around ICA.

Content may present:

- selected Alleanze;
- a balanced path toward Reami d'Italia and Reami d'Oltreconfine;
- location/community identity without implying that an individual organization is itself a `Reame`.

## H08 — Closing threshold / onward road

Purpose: end the Home as a journey rather than a feed.

The closing section should reconnect the visitor to the broader exploration of ICA and may use a restrained road/firelight/gate/crossroads motif.

It should not introduce a new major content domain.

A simple return-to-exploration action is preferred.

---

# 6. Content explicitly excluded from Home v0.1

Until reopened or canonically resolved:

- `Tesori` — suspended;
- `Mercante` — on hold;
- guides, documents, rules and reference resources — destination unresolved;
- login/account modules — not part of launch model;
- generic user-generated content feeds — not part of launch model;
- a giant literal fantasy map as mandatory navigation mechanism.

---

# 7. UX / web-design translation

## 7.1 Core principle

The Home must feel **spatial and editorial**, not like vertically stacked SaaS cards.

Recommended behavior:

- expressive hero / threshold;
- strong chapter transitions;
- varied but controlled section rhythm;
- fewer, larger editorial modules rather than many small widgets;
- factual details rendered with restrained typography and clear hierarchy;
- direct paths into the primary IA.

## 7.2 One design system, many places

Each Home section may hint at the identity of its destination page through material, image or symbolic treatment, but all sections must clearly belong to one ICA design system.

Do not create a different mini-interface for every destination.

## 7.3 Fantasy-density rule

Narrative intensity decreases as interaction density increases.

- Hero / threshold: highest expressive intensity;
- major section introductions: medium;
- event cards / news cards / profiles: restrained;
- metadata, dates, filters, controls: functional and direct.

---

# 8. Initial component decomposition

These IDs are provisional Page-Dossier identifiers and do not replace the Shared Component Registry.

| ID | Role | Shared candidate? | Notes |
|---|---|---:|---|
| `HOME-HERO-01` | principal threshold hero | no / page-specific | may compose shared crest, heading, CTA components |
| `HOME-FEAT-EVT-01` | featured next Adunanza | yes | likely reusable featured-event pattern |
| `HOME-EVT-LIST-01` | curated Adunanze preview | yes | must support Giostra subtype marker |
| `HOME-NEWS-01` | Proclami preview | yes | editorial list/card pattern |
| `HOME-CHR-01` | Cronache preview | yes | richer editorial card pattern |
| `HOME-PLY-01` | Avventurieri preview | yes | person/profile card/index teaser |
| `HOME-ALLY-01` | Alleanze preview | yes | organization/community teaser |
| `HOME-END-01` | closing onward-road module | no / page-specific | quiet narrative closing |

Component IDs must be reconciled with the Shared Component Registry before implementation.

---

# 9. Responsive art direction

## Desktop / wide

- Hero may use broad environmental composition and stronger spatial depth.
- Primary navigation remains visible if label-fit passes reconciled M7/M7.1 rules.
- Section layouts may alternate text/image emphasis to create journey rhythm.

## Tablet

- Preserve chapter hierarchy and primary imagery;
- reduce lateral ornament and secondary environmental detail;
- avoid forcing desktop cinematic compositions into narrow columns.

## Mobile

Mobile is **ICA essenziale**, not a compressed desktop painting.

Rules:

- preserve crest, title, orientation and primary CTA;
- crop or replace decorative environment before shrinking critical content;
- reduce ornament before typography;
- one clear content flow;
- no horizontal overflow;
- no cramped five-item fantasy-navigation bar;
- touch targets >= 44x44;
- all information remains available without relying on hover.

---

# 10. Accessibility and interaction requirements

- semantic heading order;
- visible keyboard focus;
- navigation fully keyboard-operable;
- text contrast compatible with WCAG 2.2 AA targets;
- images require meaningful alt text when informational;
- decorative art must not create redundant screen-reader content;
- reduced-motion preference must remove non-essential movement;
- no critical meaning communicated solely by colour, glow or heraldic symbol;
- dates, locations and actions must remain explicit text;
- CTA labels use clear verbs/nouns rather than obscure fantasy synonyms.

---

# 11. Data / factual integrity

Home editorial modules may aggregate factual objects including:

- `EVENT`;
- `ARTICLE` classified as News / Proclamo;
- `ARTICLE` classified as Cronaca;
- `PLAYER`;
- `ORGANIZATION`;
- `VENUE` where related to events/organizations.

Rules:

- Home does not duplicate source-of-truth data manually where a structured object exists;
- dates, results, organizers and locations must come from factual content sources;
- narrative copy may contextualize but never change factual fields;
- a Giostra marker may only appear when the event satisfies the approved Giostra semantic boundary.

---

# 12. Empty, loading and low-content states

The Home must remain credible before every destination has a large content catalogue.

Rules:

- do not show empty decorative rooms solely to preserve narrative geography;
- hide or simplify secondary preview modules that lack useful content;
- never fabricate sample news, events, players or alliances in production;
- the Hero and core orientation remain valid even with sparse downstream content;
- Content Readiness Gate determines whether a module appears at launch.

---

# 13. SEO / share intent

The Home title and description must clearly state the real subject:

- In Cerca di Avventura;
- Sorcery: Contested Realm;
- Italian community context.

Narrative terminology should enrich page copy but must not make the site's purpose opaque to search engines or first-time visitors.

Open Graph/social artwork should reflect the approved ICA visual identity and must not imply official publisher ownership or endorsement.

---

# 14. Provenance and decision register

| ID | Decision | Source type | Source | Status |
|---|---|---|---|---|
| `PAG-HOME-001` | Home is principal threshold | DERIVED | Narrative & Art Bible §3.2 + PO-approved cittadella-crocevia | REVIEW |
| `PAG-HOME-002` | Crest is Home navigation entry | DERIVED | Primary IA v1 | PRODUCT OWNER LOCKED |
| `PAG-HOME-003` | Primary destinations: Adunanze, Cronache, Avventurieri, Alleanze, Proclami | DERIVED | Primary IA v1 | PRODUCT OWNER LOCKED |
| `PAG-HOME-004` | Giostre appears only within Le Adunanze | DERIVED | Terminology Bible + Primary IA v1 | PRODUCT OWNER LOCKED |
| `PAG-HOME-005` | Tesori excluded while suspended | DERIVED | PO decision note | PRODUCT OWNER LOCKED / SUSPENDED |
| `PAG-HOME-006` | Mercante excluded while on hold | DERIVED | PO decision note | PRODUCT OWNER LOCKED / ON HOLD |
| `PAG-HOME-007` | Proposed Home content sequence H01–H08 | PROPOSED | Page Dossier v0.1 | REVIEW |
| `PAG-HOME-008` | `La Soglia` as possible poetic title | PROPOSED | derived from threshold metaphor | REVIEW — NOT CANONICAL |

---

# 15. Open Product Owner decisions

Before this Page Dossier can become approved, confirm or revise:

1. the H01–H08 Home content sequence;
2. whether `La Soglia` should be explored as the Home's poetic title or whether Home remains unnamed narratively;
3. which Adunanza-selection rule drives `Prossima Adunanza` when several events compete for prominence;
4. whether Avventurieri and Alleanze should both have Home preview modules at launch or one should be secondary;
5. whether the Home closing section should be purely atmospheric or contain a specific CTA;
6. launch content readiness thresholds for each preview module.

These are page-level creative/product decisions. They must not be silently promoted to canonical implementation.

---

# 16. Definition of Ready for implementation

The Home can move from DRAFT toward implementation only when:

- Writer Intent is Product Owner accepted;
- H01–H08 or its replacement sequence is approved;
- primary destination copy is aligned with Terminology Bible;
- unresolved Home poetic-title decision is closed or explicitly omitted;
- content sources for launch modules are known;
- component shared/local boundaries are resolved in the Shared Component Registry;
- responsive behavior is reconciled with M7/M7.1;
- accessibility rules are testable;
- asset dependencies are enumerated;
- no suspended/on-hold domain has re-entered the page;
- Canonical Spec is reconciled before production implementation.

**Current lifecycle:** `SPECIFIED (DRAFT)`  
**Readiness:** `NOT_READY`  
**Production implication:** none — this document is a review artifact, not implementation authorization.
