# In Cerca di Avventura — Terminology Bible

**Document ID:** ICA-TERM-001  
**Status:** DRAFT — Creative Canonical Lock  
**Version:** 0.7  
**Depends on:** `docs/NARRATIVE_ART_BIBLE.md`  
**Primary external terminology source:** *Sorcery: Contested Realm Rulebook*, December 2025  

> This document separates four vocabularies that must never be conflated: official Sorcery terminology, ICA narrative language, visible UX labels, and technical/data identifiers.

---

# 1. Purpose

The Terminology Bible exists to prevent three recurring failures:

1. using an official Sorcery term with a different ICA meaning;
2. forcing technical/database terminology into the visible experience;
3. allowing poetic ICA language to make navigation or actions ambiguous.

Every important term must therefore be classified before it is promoted to the Canonical Spec, Page Dossiers, component copy or data model.

---

# 2. The four terminology layers

## 2.1 Official Sorcery terminology — `SORCERY`

Terms whose meaning is established by Sorcery: Contested Realm rules, cards or official documentation.

Rules:

- preserve the official meaning;
- do not reuse the term for a contradictory ICA concept;
- when used in factual game content, prefer the official English form unless an approved Italian editorial convention is later established;
- ICA narrative language may allude to these ideas, but cannot redefine them.

## 2.2 ICA narrative/editorial language — `ICA-NARRATIVE`

Terms that create the cittadella-crocevia, its places, ceremonies, social roles and atmosphere.

Examples: *Le Adunanze*, *Gli Annali*, *Il Libro dei Nomi*, *Il Campo delle Prove*, *Proclami*, *Tesori*.

Rules:

- must enrich meaning rather than merely rename ordinary UI;
- may be literary;
- must remain subordinate to factual truth and usability;
- must not impersonate official Sorcery terminology.

## 2.3 Visible UX labels — `UX`

Words the user must understand immediately in navigation, controls, filters, headings and actions.

Rules:

- clarity first;
- may use ICA language when the meaning remains immediate;
- may pair narrative title + functional descriptor;
- must remain short enough for responsive navigation;
- may differ from the technical identifier.

## 2.4 Technical / data identifiers — `TECH`

Stable internal names used in code, schemas, APIs, content models and component specifications.

Examples: `EVENT`, `PLAYER`, `ARTICLE`, `RESULT`, `DECK`.

Rules:

- semantic stability is more important than flavour;
- do not rename technical entities merely to mirror changing UX copy;
- one technical object may have several narrative presentations;
- one visible section may aggregate several technical entities.

---

# 3. Official Sorcery protected vocabulary

The December 2025 Rulebook establishes several terms that ICA must treat as protected semantic territory.

## 3.1 Realm

Official meaning: the shared principal game zone; the rulebook defines the realm as the twenty-square play area in which most cards are played. The glossary states that the Realm includes all squares in the game zone.

**ICA rule:** do not use `Reame` as a technical synonym for community, website, geographic chapter or organisation without clear narrative context.

**Current decision:** `Reame` remains allowed in controlled poetic/geographic expressions, but is not the primary structural metaphor of ICA. The foundational metaphor is **cittadella-crocevia**.

**Risk status:** HIGH — likely confusion with official game vocabulary if used generically.

## 3.2 Avatar

Official meaning: the card/entity representing the player and their connection to the realm.

**ICA rule:** never use `Avatar` as the name for the real community member or user profile.

**ICA real-person term:** `Avventuriero` represents the real community identity/person.

**TECH mapping:** real person = `PLAYER`; game card = Avatar within deck/card data.

## 3.3 Atlas / Spellbook

Official meaning: the two Sorcery decks. The rulebook describes the Atlas as the deck of site cards and the Spellbook as the deck of spell cards.

**ICA rule:** preserve these terms when displaying deck composition. Do not use them as generic names for ICA archives, libraries or resource hubs.

## 3.4 Site

Official meaning: a card type and locus of power within the Realm.

**ICA rule:** avoid using `Site` as a narrative label for an ICA venue or webpage when game context may be present.

**Preferred ICA venue term:** `Luogo` / `Sede` at UX level; `VENUE` technically.

## 3.5 Spell, Minion, Artifact, Aura, Magic

Official card/game meanings.

**ICA rule:** use as factual Sorcery vocabulary only, except for clearly metaphorical prose where no ambiguity can arise.

## 3.6 Elemental Affinity / Threshold

Official game concepts tied to casting requirements and card/site properties.

**ICA rule:** do not reuse `affinità` or `threshold` as generic reputation, ranking or profile metrics.

## 3.7 Storyline

Official meaning: sequence of events currently resolving during play.

**ICA rule:** do not name the editorial chronology, news stream or site history `Storyline`.

## 3.8 Event

The rulebook uses `event` within the Storyline as a rules-resolution unit.

This does **not** prevent ICA from using the common-language concept of a real-world event for tournaments and gatherings, but the visible ICA umbrella term is now **Adunanza / Le Adunanze** and implementation/editorial context must keep it distinct from the rules meaning.

---

# 4. Core ICA vocabulary — working classification

| Concept | Sorcery official conflict | ICA narrative term | Candidate UX label | TECH identifier | Status |
|---|---|---|---|---|---|
| Real community member | Avatar conflict if misnamed | Avventuriero / Il Libro dei Nomi | Avventurieri | `PLAYER` | PRODUCT OWNER LOCKED |
| Real Sorcery event / gathering of interest | low | Adunanza / Le Adunanze | Le Adunanze | `EVENT` | PRODUCT OWNER LOCKED |
| ICA-organized competitive event | low | Giostra / Il Campo delle Prove | Giostre | `EVENT` + organiser=`ICA` + competitive subtype | PRODUCT OWNER LOCKED |
| Editorial memory / account / retrospective | Storyline must be avoided | Cronaca / Gli Annali | Cronache | `ARTICLE` (+ relations/editorial classification) | PRODUCT OWNER LOCKED |
| News item | low | Proclamo / Proclami dell'Araldo | Proclami | `ARTICLE` + editorial_type=`NEWS` | PRODUCT OWNER LOCKED |
| Allied reality / group / organisation | Realm caution | Alleanza / Reami Alleati | Alleanze | `ORGANIZATION` | PRODUCT OWNER LOCKED |
| Italian geographic alliance grouping | Realm caution | Reami d'Italia | Reami d'Italia | geography/taxonomy over `ORGANIZATION` | PRODUCT OWNER LOCKED |
| Foreign geographic alliance grouping | Realm caution | Reami d'Oltreconfine | Reami d'Oltreconfine | geography/taxonomy over `ORGANIZATION` | PRODUCT OWNER LOCKED |
| Collecting / rare Sorcery material area | Artifact caution | Tesori | Tesori | TBD | SUSPENDED — DIRECTION RECORDED |
| Future commercial/artisanal area | none material | Mercante / Bottega del Viandante | Mercante | future commerce object | ON HOLD |
| Venue/store physical place | Site conflict | luogo della cittadella / alleato | Luoghi / Sedi | `VENUE` | STRONG CANDIDATE |
| Competitive outcome | none | esito / memoria della Giostra | Risultati | `RESULT` | STABLE |
| Player deck | Atlas/Spellbook official structure | grimorio/deck only in prose if useful | Deck | `DECK` | STABLE |
| Individual card entry | official card vocabulary | none required | Carta | `CARD_ENTRY` | STABLE |

---

# 5. High-risk terminology decisions

## 5.1 Le Adunanze / Giostre — Product Owner decision locked

### Canonical semantic boundary

**Le Adunanze** is the ICA umbrella for real-world Sorcery events and gatherings that ICA decides to list, report, promote or connect to the community.

**Giostre** sits **inside Le Adunanze** and identifies only **competitive events organized directly by In Cerca di Avventura**.

Therefore:

- every Giostra is an Adunanza;
- not every Adunanza is a Giostra;
- a Giostra is always competitive;
- a Giostra is always organized directly by ICA;
- a competitive event organized by another entity is an Adunanza/evento competitivo, not automatically a Giostra;
- `Giostra` is not a generic synonym for tournament across the wider Sorcery ecosystem.

### TECH mapping

Both remain technically based on `EVENT`.

A Giostra requires explicit attributes that identify at minimum:

- organiser / ownership = ICA;
- competitive nature = true;
- approved ICA event subtype = Giostra.

The exact schema field names are to be defined in the Content Model/Page Dossier and must not be inferred from this terminology document alone.

### UX implication

The visible hierarchy is:

**Le Adunanze**  
Eventi e appuntamenti Sorcery

→ **Giostre**  
Eventi competitivi organizzati direttamente da In Cerca di Avventura

Other tournaments, conventions, meetups, store events and community appointments may appear inside Le Adunanze according to future taxonomy and Page Dossier rules.

### Examples

- Blaze of Glory event organized directly by ICA -> **Giostra**, therefore also Adunanza.
- Competitive Sorcery tournament organized by an independent store -> **Adunanza / evento competitivo**, not Giostra.
- Convention, meetup or non-competitive gathering -> **Adunanza**, not Giostra.
- Partner event promoted by ICA but organized by another entity -> **Adunanza**, unless ICA is formally the organizer and the event meets the Giostra criteria.

**Status:** `PRODUCT OWNER LOCKED`.

## 5.2 Proclami — Product Owner decision locked

### Canonical semantic boundary

**Proclami** is the ICA term for **News**.

A Proclamo is therefore a published news item concerning ICA, Sorcery activity, the community, events, initiatives, updates or other subjects considered newsworthy for the site.

`Proclamo` is not limited to urgent announcements or future-facing notices. It is the narrative/editorial name of the site's News content type.

### UX implication

Where the user would conventionally expect a `News` section, ICA may present the visible label **Proclami**.

A functional descriptor may be used where clarity benefits from it, for example:

**I Proclami dell'Araldo**  
News e aggiornamenti

### TECH mapping

A Proclamo should remain an editorial content object, currently mapped to `ARTICLE` with an explicit news/editorial classification.

Suggested semantic mapping:

- visible/narrative term = `Proclamo`;
- conventional product meaning = `News`;
- technical base object = `ARTICLE`;
- editorial classification = `NEWS` or equivalent field to be defined in the Content Model.

The exact schema field name remains a Content Model decision.

### Relationship with Cronache

- **Proclamo** = News content.
- **Cronaca** = editorial record, account, report, retrospective or narrative preservation of something that happened.

A Proclamo can concern past, present or future facts if it is being treated editorially as news. A Cronaca exists primarily to document, recount and preserve.

Practical rule:

> **Proclamo publishes news. Cronaca preserves and tells the record.**

The same subject may legitimately generate both.

**Status:** `PRODUCT OWNER LOCKED`.

## 5.3 Alleanze / Reami d'Italia / Reami d'Oltreconfine — Product Owner decision locked

### Canonical semantic boundary

**Alleanze** identifies the realities, groups and organisations that compose, support or connect to the Sorcery ecosystem represented by ICA.

An individual store, club, community, association, organiser or other relevant entity may therefore be presented as an **Alleanza** when it belongs to this network.

**Reami d'Italia** and **Reami d'Oltreconfine** are not names for individual organisations. They are the two controlled geographic narrative groupings used to organise and tell the Alleanze:

- **Reami d'Italia** = Italian realities;
- **Reami d'Oltreconfine** = realities outside Italy.

### Realm conflict control

Because `Realm` is a formal Sorcery game term, this use of `Reami` is allowed only as a clearly narrative geographic grouping inside the Alleanze domain.

Rules:

- do not call an individual store/community a `Reame` by default;
- do not use `Reame` as a technical identifier;
- do not use `Il Reame` as an ambiguous generic top-level UX label;
- ICA itself remains structurally a **cittadella-crocevia**, not a single Reame.

### TECH mapping

- individual allied entity = `ORGANIZATION`;
- physical location, when applicable = `VENUE`;
- real geography = country / region / city fields or equivalent;
- narrative geographic grouping = `Reami d'Italia` / `Reami d'Oltreconfine`, implemented as taxonomy or derived presentation logic over `ORGANIZATION`.

The exact schema field names remain a Content Model decision.

### UX implication

The hierarchy is:

**Alleanze**  
Le realtà che animano e sostengono l'ecosistema Sorcery

→ **Reami d'Italia**  
→ **Reami d'Oltreconfine**

Within each grouping appear the individual allied organisations/entities.

**Status:** `PRODUCT OWNER LOCKED`.

## 5.4 Avventurieri / Avatar — Product Owner decision locked

### Canonical semantic boundary

**Avventuriero** is the ICA term used to identify a **real person belonging to, participating in, or represented within the Sorcery community covered by ICA**.

An Avventuriero is therefore not a fictional role and is not the player's in-game Avatar.

Hard boundary:

- **Avventuriero** = real person / community identity;
- **Avatar** = official Sorcery game/card entity;
- `PLAYER` = technical person object.

`Avatar` must never be used as the ICA label for a real-person profile.

### Identity rule

The **nickname is the primary visible identity** of the Avventuriero.

Rules:

- the profile must not become a personal registry or civil-identity record;
- real name or other personal details may appear only when intentionally public and appropriate to the site's content rules;
- public presentation should privilege the Sorcery/community identity rather than personal-data completeness.

The precise consent/privacy mechanics remain a Content Governance decision, but the terminology layer must preserve this identity principle.

### Profile scope

The Avventuriero profile may progressively connect verified public activity such as:

- nickname;
- community / Alleanza association where relevant;
- Adunanze participated in, including Giostre where applicable;
- results;
- decks;
- Cronache in which the person appears;
- achievements / recognitions;
- authorised images or galleries;
- participation history.

Availability of a field does not imply that every profile must contain it.

### Reality / narrative rule

An Avventuriero profile records real, supportable community activity.

Narrative presentation may celebrate or contextualise that activity, but must not invent:

- participations;
- results;
- titles;
- achievements;
- affiliations;
- biographical facts.

### UX implication

The visible destination may use:

**Il Libro dei Nomi**  
Avventurieri della community

At functional level, `Avventurieri` should remain sufficiently clear as the index/list label.

### TECH mapping

- visible/narrative singular = `Avventuriero`;
- visible plural = `Avventurieri`;
- place-level narrative title = `Il Libro dei Nomi`;
- technical base entity = `PLAYER`;
- in-game Sorcery Avatar = separate card/game concept, never a synonym for `PLAYER`.

**Status:** `PRODUCT OWNER LOCKED`.

## 5.5 Cronache / Gli Annali — Product Owner decision locked

### Canonical semantic boundary

**Cronache** is the editorial memory of In Cerca di Avventura.

It identifies content created to **tell, deepen and preserve the memory** of the Sorcery community represented by ICA.

Cronache may include, according to future editorial taxonomy:

- reports and accounts of Giostre and other Adunanze;
- interviews;
- retrospectives;
- community stories;
- editorial features and thematic deep dives;
- decks told in their real competitive/community context;
- photographs, galleries and testimony when connected to a documented subject;
- people, places and significant moments worthy of preservation.

This scope does not convert every factual record into a Cronaca. Results, rankings, event records and player data remain factual objects; a Cronaca is the editorial layer that may relate to them.

### Narrative place identity

The approved place-level narrative title is:

**Gli Annali**  
Cronache della community

`Cronache` remains the functional/section term; `Gli Annali` is the narrative place identity.

### Relationship with Proclami

The distinction is hard:

- **Proclami** = News;
- **Cronache** = memory, account, interpretation, retrospective and preservation.

Practical rule:

> **Proclamo publishes news. Cronaca preserves and tells the record.**

The same subject may produce both a Proclamo and a Cronaca without duplication of purpose.

### TECH mapping

A Cronaca remains editorial content based on `ARTICLE`, with relations to factual entities such as `EVENT`, `PLAYER`, `DECK`, `ORGANIZATION`, `VENUE`, `GALLERY` or others where appropriate.

The exact editorial classification field and taxonomy are Content Model/Page Dossier decisions and are not fixed by this document alone.

### Guides / documents / rules material

The possible placement of guides, documents, regulations and reference material inside Cronache is **not decided**.

They must not be silently classified as Cronache merely because the broader editorial section exists. Their final destination remains an explicit open product/content decision.

**Status:** `PRODUCT OWNER LOCKED` for the semantic boundary and `Gli Annali` narrative identity; internal taxonomy remains to be designed.

## 5.6 Tesori — suspended direction

The previous working assumption that `Tesori` was the umbrella for guides, tools, documents and printables is **not canonical** and is superseded by the Product Owner's later direction.

Current direction to preserve for future review:

- `Tesori` is better suited to the **collecting side of Sorcery**;
- possible subjects include the most precious and rare Sorcery cards, Curio, Artist Proofs, original paintings/artworks and other notable collectibles;
- the exact taxonomy, technical model, page identity and launch scope are not yet decided;
- guides, documents and rules material must **not** be assigned to Tesori by default.

A separate possibility exists to host guides, documents and regulations within `Cronache` or another editorial/resource structure, but that decision is explicitly unresolved.

See: `docs/creative-decisions/DECISION_TESORI_SCOPE.md`.

**Status:** `SUSPENDED — DIRECTION RECORDED, NOT CANONICAL`.

## 5.7 Mercante — on hold

`Mercante` remains a possible future commercial/artisanal concept, but the Product Owner has placed the entire topic **ON HOLD**.

Rules while on hold:

- do not define its scope further;
- do not include it in primary navigation planning;
- do not design a Page Dossier or implementation for it;
- do not assume a business model, catalogue or service proposition;
- reopen only after an explicit Product Owner decision.

See: `docs/creative-decisions/DECISION_MERCANTE_ON_HOLD.md`.

**Status:** `ON HOLD`.

---

# 6. Naming pattern for page identity

Where narrative naming would otherwise reduce clarity, use a two-level title:

**Narrative place title**  
*Functional descriptor*

Examples:

**Le Adunanze**  
Eventi e appuntamenti Sorcery

**Il Campo delle Prove**  
Giostre — eventi competitivi organizzati da In Cerca di Avventura

**Gli Annali**  
Cronache della community

**Il Libro dei Nomi**  
Avventurieri della community

**I Proclami dell'Araldo**  
News e aggiornamenti

**I Reami Alleati**  
Alleanze della community, in Italia e oltreconfine

This pattern allows ICA to preserve atmosphere while keeping the user oriented.

---

# 7. Technical identifier policy

The current content-model identifiers remain conceptually separate from UX naming.

Stable technical vocabulary includes:

`ERA`, `CAMPAIGN`, `EVENT`, `PLAYER`, `VENUE`, `ORGANIZATION`, `ARTICLE`, `RESULT`, `DECK`, `CARD_ENTRY`, `GALLERY`, `IMAGE`, `ACHIEVEMENT`.

Rules:

- no mass renaming merely because narrative labels change;
- narrative terms should map to technical objects through Page Dossiers;
- an `Adunanza` remains an `EVENT` at technical level;
- a `Giostra` remains an `EVENT` nested semantically inside Le Adunanze and qualified by ICA organisation/ownership plus competitive subtype;
- other competitive events remain `EVENT` without acquiring the Giostra label automatically;
- a `Proclamo` remains editorial content mapped to `ARTICLE` with explicit News classification;
- a `Cronaca` remains editorial content mapped to `ARTICLE`, with explicit editorial classification and relations to factual objects as required;
- `Cronaca` and `Proclamo` must be distinguishable through editorial type, not inferred only from publication date;
- an `Alleanza` remains an `ORGANIZATION`; `Reami d'Italia` / `Reami d'Oltreconfine` are geographic narrative groupings rather than new technical entities;
- an `Avventuriero` remains a `PLAYER`; the ICA narrative identity does not change the technical person entity;
- Sorcery `Avatar` and ICA `PLAYER` must remain semantically separate;
- `Tesori` has no approved technical mapping while suspended;
- `Mercante` has no active implementation scope while on hold;
- technical identifiers remain English uppercase singular unless the Content Model is formally revised.

---

# 8. Words to avoid as generic ICA UI labels

Unless a Page Dossier justifies them and ambiguity is absent:

- Realm / Reame as generic container;
- Avatar for a person;
- Site for a venue/page;
- Artifact / Artefatto for generic resources;
- Storyline for editorial chronology;
- Affinity / Affinità as reputation or user-profile metric;
- Threshold as a generic progress level;
- Cemetery as an archive metaphor.

These are too strongly defined by Sorcery gameplay.

---

# 9. Terminology decision protocol

Before a new visible term is approved, answer:

1. Is this already an official Sorcery term?
2. If yes, is ICA using exactly the same meaning?
3. Is the term narrative, functional UX or technical?
4. Can a first-time visitor understand the action/section without explanation?
5. Does a functional descriptor need to accompany it?
6. Does the term create overlap with another page or content type?
7. Can it survive mobile navigation without truncation or loss of meaning?
8. Is the term stable enough to become canonical, or should it remain Page-Dossier-level flavour?

Any unresolved answer means `RECHECK_REQUIRED` rather than silent implementation.

---

# 10. Decisions that can be treated as provisionally locked

Subject to Product Owner confirmation of this document:

- ICA itself is a **cittadella-crocevia**, not `Il Reame` as sole metaphor;
- `Avatar` is reserved for Sorcery game meaning;
- **Avventuriero identifies the real person/community identity represented by ICA**;
- the Avventuriero's nickname is the primary visible identity;
- `PLAYER` remains the technical identifier for the real person;
- **Le Adunanze is the ICA umbrella for real-world Sorcery events and gatherings represented by the site**;
- **Giostre sits inside Le Adunanze and identifies competitive events organized directly by In Cerca di Avventura**;
- a competitive event organized by another entity is not automatically a Giostra;
- **Proclami is the ICA term for News**;
- **Cronache is the editorial memory of ICA, dedicated to account, interpretation, retrospective and preservation**;
- **Gli Annali** is the approved narrative place identity for the Cronache section;
- `Cronaca` and `Proclamo` remain distinct editorial forms even when they concern the same subject;
- **Alleanze identifies the network of Sorcery-related realities represented by ICA**;
- **Reami d'Italia** and **Reami d'Oltreconfine** are the controlled geographic narrative groupings of those Alleanze, never default names for single organisations;
- `Tesori` is suspended with a recorded collecting-oriented direction and no final scope;
- `Mercante` is ON HOLD and excluded from active planning until explicitly reopened;
- visible narrative terms do not force renaming of the technical content model.

---

# 11. Open decisions for v0.8

Product/UX decisions still requiring explicit resolution:

- primary navigation architecture;
- detailed internal taxonomy of **Le Adunanze** beyond the locked `Giostre` subset;
- whether `Proclami` appears in primary navigation, secondary navigation, or as a prominent editorial destination elsewhere in the experience;
- final Italian/English treatment of official Sorcery terms inside editorial content;
- definitive label for physical venues (`Luoghi`, `Sedi`, other);
- detailed internal taxonomy of `Cronache` / `Gli Annali`;
- final destination for guides, documents, rules and reference material;
- `Tesori` scope remains suspended;
- `Mercante` remains on hold.

The meanings/hierarchies of `Le Adunanze`, `Giostre`, `Cronache`, `Avventurieri`, `Proclami`, `Alleanze`, `Reami d'Italia` and `Reami d'Oltreconfine` are no longer open.

---

# 12. Source notes

The official terminology constraints in this document are grounded in the December 2025 *Sorcery: Contested Realm Rulebook* supplied to the project. In particular, the rulebook defines:

- Avatar as the player's representation and connection to the Realm;
- Realm as the shared twenty-square principal game zone;
- Atlas and Spellbook as the player's two decks;
- Site as an official card type/locus within the Realm;
- Elemental Affinity and Threshold as gameplay concepts;
- Storyline as the sequence of events resolving during play;
- Artifact as an official spell/card type.

No ICA term should silently override those meanings.

---

# 13. Acceptance criteria

The Terminology Bible may move from DRAFT to APPROVED when:

- official Sorcery semantic conflicts have been reviewed;
- Product Owner approves the hard boundaries around Realm, Avatar, Site, Artifact, Storyline, Affinity and Threshold;
- `Le Adunanze = event umbrella` is preserved consistently across IA, Page Dossiers, Content Model and UX copy;
- `Giostre` remains a nested subset of Le Adunanze reserved for ICA-organized competitive events;
- `Proclami = News` is preserved consistently across IA, Page Dossiers, Content Model and UX copy;
- `Cronache = editorial memory` is preserved consistently across IA, Page Dossiers, Content Model and UX copy;
- `Gli Annali` remains the narrative place identity for Cronache;
- the Cronache/Proclami editorial distinction remains unambiguous;
- `Avventuriero = real person/community identity` remains distinct from the official Sorcery Avatar concept;
- nickname remains the primary visible Avventuriero identity unless a later explicit Product Owner decision changes that rule;
- Alleanze/Reami wording remains consistent with the Product Owner-locked hierarchy;
- suspended/on-hold concepts are not silently reintroduced into active IA;
- every active Page Dossier can map narrative term -> UX label -> technical object without ambiguity;
- downstream QA can detect terminology violations mechanically or through checklist review.

Until then, visible navigation labels remain `RECHECK_REQUIRED` and the existing P0 shell labels must not be treated as final canonical truth.