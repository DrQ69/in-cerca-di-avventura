# In Cerca di Avventura — Relationship Map

**Document ID:** ICA-REL-001  
**Status:** DRAFT — Creative Canonical Lock  
**Version:** 0.1  
**Phase:** Creative Canonical Lock  
**Depends on:** `docs/TERMINOLOGY_BIBLE.md`, `docs/PRIMARY_INFORMATION_ARCHITECTURE.md`, `docs/EXPERIENCE_MAP.md`, Content Model  

> This document maps how ICA's primary factual/editorial objects relate to one another. It exists to prevent Page Dossiers and implementation from inventing cross-links independently.

---

# 1. Scope

The active relationship model covers:

- `EVENT`;
- `PLAYER`;
- `ORGANIZATION`;
- `VENUE`;
- `ARTICLE`;
- `RESULT`;
- `DECK`;
- `ACHIEVEMENT`;
- `GALLERY` / `IMAGE` where relevant.

`Tesori` has no approved technical object while suspended.  
`Mercante` has no active technical relationship model while on hold.

---

# 2. Core semantic rules

## 2.1 EVENT

`EVENT` is the technical base object for real-world Sorcery appointments represented by ICA.

Visible narrative meanings may include:

- **Adunanza** — umbrella presentation;
- **Giostra** — only when the event is competitive and organized directly by ICA.

Required or likely relationships:

- EVENT -> ORGANIZATION (organiser / partner / host as applicable);
- EVENT -> VENUE (physical location where applicable);
- EVENT -> PLAYER (participants when known and publishable);
- EVENT -> RESULT (competitive outcomes where applicable);
- EVENT -> DECK (submitted/featured decks where applicable);
- EVENT -> ARTICLE (Proclami and/or Cronache);
- EVENT -> GALLERY / IMAGE (authorized media where applicable).

No relationship should be inferred solely from narrative copy.

## 2.2 PLAYER

`PLAYER` is the technical object behind an **Avventuriero**.

Relationships may include:

- PLAYER -> EVENT (participation);
- PLAYER -> RESULT (placement/outcome);
- PLAYER -> DECK (deck ownership/piloting where supportable);
- PLAYER -> ARTICLE (mentioned/featured in Cronache or Proclami);
- PLAYER -> ACHIEVEMENT (verified recognition only);
- PLAYER -> ORGANIZATION (community/Alleanza association where relevant and factual);
- PLAYER -> GALLERY / IMAGE (authorized imagery where applicable).

Rules:

- nickname remains primary visible identity;
- no fictional affiliation, title or achievement;
- relationships require factual support or editorial provenance.

## 2.3 ORGANIZATION

`ORGANIZATION` is the technical object behind an **Alleanza** or other organisational reality.

Relationships may include:

- ORGANIZATION -> VENUE (one or more physical locations where applicable);
- ORGANIZATION -> EVENT (organises, hosts, supports or partners);
- ORGANIZATION -> PLAYER (community association where factual and appropriate);
- ORGANIZATION -> ARTICLE (news/features/mentions);
- ORGANIZATION -> geographic grouping (`Reami d'Italia` / `Reami d'Oltreconfine`) as presentation/taxonomy, not as new entity.

Rules:

- an individual organization is not itself a `Reame` by default;
- geography and narrative grouping must not replace factual address/country data.

## 2.4 VENUE

`VENUE` represents a physical place.

Relationships may include:

- VENUE -> ORGANIZATION (owner/operator/host relation where factual);
- VENUE -> EVENT (events held there);
- VENUE -> ARTICLE (when editorially relevant).

A venue is not a Sorcery `Site` and must not use that official card term as a generic ICA label.

## 2.5 ARTICLE

`ARTICLE` is the technical base for editorial content.

At minimum, editorial classification must distinguish:

- **Proclamo / News**;
- **Cronaca / editorial memory / report / retrospective**.

ARTICLE may relate to:

- EVENT;
- PLAYER;
- ORGANIZATION;
- VENUE;
- RESULT;
- DECK;
- GALLERY / IMAGE.

Rules:

- classification is explicit; do not infer Proclamo vs Cronaca only from publication date;
- one real subject may legitimately have both a Proclamo and a Cronaca;
- factual fields referenced by an article should point to structured source objects where feasible.

## 2.6 RESULT

`RESULT` records competitive outcome information.

Relationships:

- RESULT -> EVENT (required);
- RESULT -> PLAYER (required where individual outcome is represented);
- RESULT -> DECK (optional, when deck association is known and publishable).

Rules:

- result data is factual and must not be altered for narrative effect;
- narrative titles/achievements derived from results require explicit rules and provenance.

## 2.7 DECK

`DECK` represents a player's deck and preserves official Sorcery structure such as Avatar, Atlas and Spellbook where used.

Relationships may include:

- DECK -> PLAYER;
- DECK -> EVENT;
- DECK -> RESULT;
- DECK -> ARTICLE.

Rules:

- official Sorcery deck terminology remains protected;
- deck data and editorial commentary must remain distinguishable.

## 2.8 ACHIEVEMENT

`ACHIEVEMENT` represents a verified recognition or milestone.

Relationships:

- ACHIEVEMENT -> PLAYER;
- ACHIEVEMENT -> EVENT and/or RESULT where the achievement derives from competitive activity;
- ACHIEVEMENT -> ARTICLE where documented editorially.

No achievement exists merely because a narrative treatment would benefit from a badge or title.

---

# 3. Relationship types

The Content Model should distinguish relationship meaning where ambiguity would otherwise arise.

Recommended semantic categories for future schema reconciliation:

- `organizes`;
- `hosts`;
- `partners_with`;
- `participates_in`;
- `has_result`;
- `uses_deck` / `deck_at_event`;
- `featured_in`;
- `related_to` only as a last-resort editorial relation;
- `located_at`;
- `member_of` / `associated_with` only when factual and governance-approved;
- `earns_achievement`.

Exact field names are not locked by this document. The rule is that materially different meanings must not be collapsed into a vague relation if they affect UX, data integrity or provenance.

---

# 4. Primary journey chains

## R01 — Event lifecycle

`ARTICLE:Proclamo -> EVENT -> PLAYER -> RESULT -> ARTICLE:Cronaca`

Optional branches:

`EVENT -> VENUE`  
`EVENT -> ORGANIZATION`  
`RESULT -> DECK`  
`EVENT -> GALLERY`

This is the principal current-activity-to-memory chain.

## R02 — Giostra chain

`EVENT[Giostra] -> PLAYER -> RESULT -> DECK -> ARTICLE:Cronaca`

A Giostra inherits all EVENT relationships but must satisfy the locked Giostra semantic conditions.

## R03 — Avventuriero chain

`PLAYER -> EVENT -> RESULT -> DECK -> ARTICLE -> ACHIEVEMENT`

The profile should expose only relations with factual support and launch-ready content.

## R04 — Alleanza chain

`ORGANIZATION -> VENUE -> EVENT -> ARTICLE`

Optional:

`ORGANIZATION -> PLAYER` when community association is factual, appropriate and governed.

## R05 — Editorial chain

`ARTICLE -> one or more factual objects`

The article should not become the sole source of truth for event dates, results, organiser, location or player identity when those are structured entities.

---

# 5. Cardinality guidance

These are design/data expectations, not final database constraints.

| Source | Relation | Target | Expected cardinality |
|---|---|---|---|
| EVENT | organiser | ORGANIZATION | one or more possible |
| EVENT | venue | VENUE | zero or one primary, possibly more in exceptional cases |
| EVENT | participants | PLAYER | zero to many |
| EVENT | results | RESULT | zero to many |
| PLAYER | events | EVENT | zero to many |
| PLAYER | decks | DECK | zero to many |
| ORGANIZATION | venues | VENUE | zero to many |
| ORGANIZATION | events | EVENT | zero to many |
| ARTICLE | subjects | factual entities | one to many |
| RESULT | player | PLAYER | normally one represented competitor/team member context depending on format |
| RESULT | event | EVENT | one |
| DECK | player | PLAYER | one or more only if format/team model later requires it |
| ACHIEVEMENT | player | PLAYER | one represented recipient unless achievement model explicitly supports teams |

Team/2v2-specific schema must be decided explicitly if introduced; this document does not invent a team entity.

---

# 6. Ownership and source-of-truth principle

Each fact should have one authoritative structured home where feasible.

Examples:

- event date -> EVENT;
- event organiser -> EVENT / ORGANIZATION relation;
- physical address -> VENUE;
- player nickname -> PLAYER;
- placement -> RESULT;
- deck list -> DECK;
- news classification -> ARTICLE metadata;
- narrative account -> ARTICLE body/content;
- achievement -> ACHIEVEMENT with supporting provenance.

Pages may aggregate these facts, but must not create conflicting manual duplicates.

---

# 7. Factual vs editorial relationship

A relationship can be:

- **factual** — participation, result, organiser, venue, deck attribution;
- **editorial** — featured in, discussed in, related reading;
- **narrative presentation** — visual or textual framing only.

These must remain distinguishable.

Example:

A Cronaca may poetically describe an Avventuriero as having “left a mark on the field,” but the factual relationship is participation/result, not a new achievement unless a defined achievement rule exists.

---

# 8. Privacy / publication boundary

The existence of a technical relationship does not automatically mean it should be public.

Before exposing PLAYER-related relationships, Content Governance must define:

- what is public by default;
- what requires consent or intentional publication;
- what can be inferred from public event records;
- image/gallery authorization;
- handling of real names vs nickname;
- correction/removal workflow.

Until then, Page Dossiers should use the relationship model without assuming every edge is visible.

---

# 9. Empty and partial relationships

ICA must support sparse data.

Rules:

- do not fabricate missing relations;
- do not show empty ornamental modules solely to imply a rich world;
- hide or simplify related-content sections when no meaningful relation exists;
- preserve direct navigation even when cross-link density is low;
- Content Readiness Gate controls launch exposure.

---

# 10. Deferred relationships

## Tesori

No approved relationship graph is defined while scope remains suspended. Potential future relations to cards, artists, artworks, editions or collections must be decided later.

## Mercante

No commerce/catalogue/cart/order relationship model may be created while on hold.

## Guides / documents / rules / reference material

No permanent relationship type is assigned until their destination and content object model are resolved.

---

# 11. Provenance

| ID | Relationship rule | Source type | Source | Status |
|---|---|---|---|---|
| `REL-001` | Giostra is an EVENT subtype/presentation constrained by ICA organiser + competitive nature | DERIVED | Terminology Bible | PRODUCT OWNER LOCKED |
| `REL-002` | Avventuriero maps to PLAYER | DERIVED | Terminology Bible | PRODUCT OWNER LOCKED |
| `REL-003` | Alleanza maps to ORGANIZATION | DERIVED | Terminology Bible | PRODUCT OWNER LOCKED |
| `REL-004` | Reami are geographic presentation groups over ORGANIZATION, not separate organisations | DERIVED | Terminology Bible | PRODUCT OWNER LOCKED |
| `REL-005` | Proclami and Cronache share ARTICLE base but require distinct editorial classification | DERIVED | Terminology Bible | PRODUCT OWNER LOCKED |
| `REL-006` | Event-to-memory chain connects EVENT, RESULT, PLAYER, DECK and ARTICLE | DERIVED | Experience Map + Content Model concepts | REVIEW |
| `REL-007` | Structured objects remain source of truth for factual fields | DERIVED | Narrative factual contract + Content Model | REVIEW |
| `REL-008` | Tesori/Mercante relationship graphs are deferred | DERIVED | PO decision notes | PRODUCT OWNER LOCKED |

---

# 12. Open schema decisions

To be resolved later in Content Model reconciliation / Page Dossiers:

- exact relationship field names;
- event organiser vs host vs partner cardinality;
- team/2v2 representation if required;
- whether PLAYER <-> ORGANIZATION association has formal membership semantics or lighter affiliation;
- image/gallery ownership and consent metadata;
- achievement rule engine / manual governance;
- deck attribution in team formats;
- archive sorting and relation ranking;
- whether VENUE can host multiple ORGANIZATION identities simultaneously and how that is presented.

---

# 13. Acceptance criteria

The Relationship Map is sufficient to support Page Dossiers when:

- every launch-critical journey has a valid entity chain;
- page teams know which object owns each fact;
- editorial relations are distinguishable from factual relations;
- Giostra, Avventuriero, Alleanza, Proclamo and Cronaca mappings remain consistent with locked terminology;
- sparse-data behavior is explicit;
- privacy/publication is not assumed from technical linkage;
- deferred domains do not leak into active schema.

**Current lifecycle:** `SPECIFIED (DRAFT)`  
**Readiness:** `REVIEW_REQUIRED`.