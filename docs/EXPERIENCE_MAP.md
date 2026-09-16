# In Cerca di Avventura — Experience & Journey Map

**Document ID:** ICA-EXP-001  
**Status:** DRAFT — Creative Canonical Lock  
**Version:** 0.1  
**Phase:** Creative Canonical Lock  
**Depends on:** `docs/NARRATIVE_ART_BIBLE.md`, `docs/TERMINOLOGY_BIBLE.md`, `docs/PRIMARY_INFORMATION_ARCHITECTURE.md`, `docs/CREATIVE_DECISION_LOG.md`  

> This document translates the approved ICA world and primary IA into visitor journeys. It defines what a person should be able to understand and do before page-level design decisions are frozen.

---

# 1. Purpose

The Experience Map prevents ICA from becoming a collection of individually attractive pages without coherent movement between them.

It answers:

- why a visitor arrives;
- what they need to understand first;
- which destination is appropriate;
- what factual objects connect the journey;
- how current activity becomes memory;
- where narrative intensity should rise or fall;
- which journeys are launch-critical.

This document does **not** define final layouts, component geometry, visual assets or final copy.

---

# 2. Foundational experience principle

The product-level rhythm remains:

**play -> participate -> tell -> remember**

The narrative equivalent is:

**arrival -> call -> participation -> account -> memory -> onward road**

The visitor should feel that ICA is both:

- a place where something is happening now;
- a place where what happened remains discoverable later.

The experience must never require understanding ICA lore before understanding the real function.

---

# 3. Primary visitor intents

## J01 — Find what is happening next

**User question:** What can I attend or play next?

Preferred route:

`Home -> Le Adunanze -> Adunanza detail -> registration / external information`

If the event is an ICA-organized competitive event:

`Home -> Le Adunanze -> Giostra -> registration / event details`

Required factual clarity:

- title;
- date/time;
- location / venue where applicable;
- organiser;
- event type;
- whether it is a Giostra;
- registration or information action.

Narrative role: invitation / call.  
Functional priority: very high.

## J02 — Discover ICA competitive activity

**User question:** Which competitive events are organized directly by ICA?

Route:

`Home or Le Adunanze -> Giostre -> Giostra detail -> results / participants / decks / Cronaca when available`

Rules:

- Giostre is always nested semantically inside Le Adunanze;
- an external tournament must not acquire the Giostra label;
- completed Giostre should naturally connect to preserved outcomes and Cronache.

Narrative role: trial / contest / community ritual.  
Functional priority: high.

## J03 — Understand what is new

**User question:** What changed recently?

Route:

`Home -> Proclami -> Proclamo detail -> related factual destination`

Possible relations:

- Proclamo -> Adunanza;
- Proclamo -> Giostra;
- Proclamo -> Alleanza;
- Proclamo -> ICA update;
- Proclamo -> external Sorcery development judged relevant by ICA.

Rule:

> Proclamo publishes news. Cronaca preserves and tells the record.

Narrative role: herald / announcement.  
Functional priority: high.

## J04 — Understand what happened

**User question:** What happened at that event, to that player, or in that moment?

Route examples:

`Adunanza/Giostra -> Cronaca -> results / Avventurieri / deck / gallery`

`Home -> Cronache -> Cronaca -> related factual objects`

Cronache should support retrospective discovery without becoming the News stream.

Narrative role: memory / record / interpretation.  
Functional priority: high.

## J05 — Discover the people

**User question:** Who are the people active in this community?

Route:

`Home -> Avventurieri -> Avventuriero -> participations / results / decks / Cronache / achievements`

Identity rule:

- nickname is the primary visible identity;
- Avatar is never used as a synonym for the real person;
- factual activity only; no invented biography or accomplishments.

Narrative role: recognition / memory of names.  
Functional priority: high.

## J06 — Discover communities, stores and organisations

**User question:** Which realities form or support the Sorcery ecosystem represented by ICA?

Route:

`Home -> Alleanze -> Reami d'Italia / Reami d'Oltreconfine -> Alleanza -> related venues/events/content`

Rules:

- Alleanza is an individual relevant organisation/reality;
- Reami d'Italia and Reami d'Oltreconfine are geographic narrative groupings, not single organisations;
- physical place remains a separate venue concept.

Narrative role: roads / alliances / connected territories.  
Functional priority: medium-high.

## J07 — Follow a person through community history

**User question:** What trace has this Avventuriero left?

Route:

`Avventuriero -> Adunanze/Giostre -> Results -> Decks -> Cronache -> Achievements`

This journey is important because it connects ICA's factual database with the narrative idea of memory.

Narrative role: personal trace through the cittadella.  
Functional priority: medium-high.

## J08 — Follow an event from announcement to memory

This is the core lifecycle journey.

`Proclamo / Home feature -> Adunanza -> participation -> Result -> Cronaca -> archive / linked Avventurieri / decks`

For ICA competitive events:

`Proclamo -> Le Adunanze -> Giostra -> Result -> Cronaca -> Avventurieri / decks / achievements`

This lifecycle should be preserved in data relationships and editorial workflow; it must not be simulated only through visual storytelling.

Narrative role: call -> undertaking -> record -> memory.  
Functional priority: critical.

---

# 4. Home as journey distributor

Home is not a sitemap and not a dashboard.

Its responsibility is to answer four questions quickly:

1. **Where am I?** — ICA / Sorcery / Italian community context.
2. **What is happening?** — next relevant Adunanza and current Proclami.
3. **What has happened?** — selected Cronache.
4. **Who and what form this world?** — Avventurieri and Alleanze.

The Home should distribute journeys toward the primary IA without presenting every taxonomy or every secondary object.

The exact Home module sequence remains governed by `docs/pages/PAGE_HOME.md` and is still under Product Owner review.

---

# 5. Journey-state model

Every journey may cross these generic states:

1. **Discover** — user encounters a destination or object.
2. **Orient** — user understands what it is and why it matters.
3. **Inspect** — user reads factual details.
4. **Act** — user registers, follows an external link, filters, searches or opens a related object.
5. **Connect** — user moves to related people, events, organisations, results or articles.
6. **Remember** — completed activity becomes preserved editorial/factual history.

Not every page needs all six states, but Page Dossiers must identify which states they support.

---

# 6. Narrative intensity across journeys

Narrative intensity should decrease as factual/task density increases.

| Journey moment | Narrative intensity | Functional density |
|---|---:|---:|
| Arrival / page threshold | High | Medium |
| Section orientation | Medium | Medium |
| Featured content | Medium | Medium-high |
| Lists / filters / metadata | Low | High |
| Registration / factual action | Minimal | Very high |
| Historical editorial reading | Medium | Medium |
| Results / standings / technical data | Minimal | Very high |

This rule applies across all Page Dossiers.

---

# 7. Launch-critical journeys

The following journeys are considered launch-critical unless a later Product Owner decision changes scope:

- J01 Find what is happening next;
- J02 Discover ICA Giostre;
- J03 Understand what is new;
- J04 Understand what happened;
- J05 Discover Avventurieri;
- J06 Discover Alleanze;
- J08 Follow an event from announcement to memory.

A page or component should not be prioritized merely because it is visually attractive if it does not support one of the launch-critical journeys or a necessary system function.

---

# 8. Deferred / non-critical journeys

## Tesori

Collecting-oriented direction is recorded but suspended. No active visitor journey is required for Creative Canonical Lock.

## Mercante

On hold. No visitor journey, conversion funnel or commercial UX may be designed until explicitly reopened by the Product Owner.

## Guides / documents / rules / references

Destination remains unresolved. Do not force them into Cronache or Tesori until a dedicated decision is made.

---

# 9. Cross-device principle

The journey must survive device changes even when the presentation changes.

Desktop may provide richer environmental context. Mobile should preserve:

- orientation;
- hierarchy;
- factual content;
- primary actions;
- cross-links;
- access to all critical destinations.

Mobile may remove decorative context before removing useful information.

---

# 10. Search, direct entry and external entry

ICA cannot assume every journey begins at Home.

Visitors may enter from:

- search engines;
- shared Proclamo/Cronaca links;
- event registration links;
- Avventuriero profile links;
- Alleanza or venue links;
- external community/social posts.

Every major landing/detail page must therefore independently answer:

- where am I;
- what is this;
- what can I do next;
- which related ICA objects are meaningful.

The narrative world must remain coherent even on direct entry.

---

# 11. Provenance

| ID | Statement | Source type | Source | Status |
|---|---|---|---|---|
| `EXP-001` | ICA journey rhythm is play -> participate -> tell -> remember | DERIVED | Narrative & Art Bible | REVIEW |
| `EXP-002` | Primary destinations are Adunanze, Cronache, Avventurieri, Alleanze, Proclami | DERIVED | Primary IA v1 | PRODUCT OWNER LOCKED |
| `EXP-003` | Giostre is nested inside Le Adunanze | DERIVED | Terminology Bible / Primary IA | PRODUCT OWNER LOCKED |
| `EXP-004` | Proclami = News; Cronache = preserved editorial memory | DERIVED | Terminology Bible | PRODUCT OWNER LOCKED |
| `EXP-005` | Avventuriero is real person identity; nickname primary | DERIVED | Terminology Bible | PRODUCT OWNER LOCKED |
| `EXP-006` | Alleanze grouped into Reami d'Italia / d'Oltreconfine | DERIVED | Terminology Bible | PRODUCT OWNER LOCKED |
| `EXP-007` | Event lifecycle announcement -> participation -> result -> memory is a core product journey | DERIVED | Narrative Bible + Content Model concepts | REVIEW |
| `EXP-008` | Tesori/Mercante excluded from launch-critical journeys | DERIVED | PO decision notes | PRODUCT OWNER LOCKED |

---

# 12. Open decisions

This document does not decide:

- the detailed taxonomy inside Le Adunanze beyond Giostre;
- final filtering/search behavior per destination;
- whether every Avventuriero receives all possible related-content modules;
- detailed archive pagination/sorting;
- destination of guides/documents/rules/reference materials;
- exact launch content thresholds;
- final page URLs/slugs.

Those decisions belong to Page Dossiers, Content Governance, Content Model reconciliation and Canonical Spec propagation.

---

# 13. Acceptance criteria

The Experience Map is ready to support Page Dossiers when:

- each active primary destination supports at least one explicit visitor intent;
- the event lifecycle can be traced from current activity to preserved memory;
- no critical journey depends on Tesori or Mercante;
- factual actions remain understandable without narrative decoding;
- direct-entry behavior is accounted for;
- journey links can be represented in the Relationship Map;
- unresolved decisions are not silently assumed.

**Current lifecycle:** `SPECIFIED (DRAFT)`  
**Readiness:** `REVIEW_REQUIRED`.