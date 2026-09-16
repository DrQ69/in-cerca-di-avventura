# In Cerca di Avventura — Page Dossier: Alleanze

**Document ID:** ICA-PAG-ALLY-001  
**Page:** Alleanze  
**Narrative identity:** Reami Alleati / rete delle Alleanze  
**Functional descriptor:** Realtà Sorcery rappresentate, collegate o supportate da ICA  
**Status:** `SPECIFIED (REVIEW_REQUIRED)`  
**Version:** 0.1  
**Delivery status:** `COMPLETE`  
**Canonical readiness:** `REVIEW_REQUIRED`  
**Readiness:** `NOT_READY`  
**Last reviewed:** 2026-09-16  
**Primary dependencies:** `docs/TERMINOLOGY_BIBLE.md`, `docs/PRIMARY_INFORMATION_ARCHITECTURE.md`, `docs/EXPERIENCE_MAP.md`, `docs/RELATIONSHIP_MAP.md`, `docs/CONTENT_GOVERNANCE.md`, `docs/PAGE_STATE_MODEL.md`, `docs/CONTENT_READINESS_GATE.md`, `docs/VISUAL_HIERARCHY_MATRIX.md`, `docs/RESPONSIVE_ART_DIRECTION.md`, `docs/NARRATIVE_AESTHETIC_QA.md`

> Alleanze represents real Sorcery organisations, stores, communities and related realities connected to ICA. `Reami d'Italia` and `Reami d'Oltreconfine` are geographic narrative groupings, not individual organisations.

---

# 1. Provenance summary

- `source_type`: `DERIVED`
- `source_ref`: `CDL-010`, `CDL-011`, Terminology Bible §5.3, Relationship Map
- `decision_status`: `REVIEW`
- `approved_by`: n.a.
- `approved_date`: n.a.

Locked scope inherited from Product Owner decisions:

- `Alleanze` = network of Sorcery realities represented/connected by ICA;
- TECH object = `ORGANIZATION`;
- `Reami d'Italia` and `Reami d'Oltreconfine` = geographic presentation groups over organisations;
- an individual organisation is **not** itself a `Reame` by default.

---

# 2. Page identity

## 2.1 Functional identity

Primary purpose:

- help visitors discover relevant Sorcery organisations, stores, communities and partners;
- show where those realities are located;
- connect organisations to real events, venues and editorial content;
- make the social geography of the community understandable without inventing affiliations.

Primary user needs:

- find a Sorcery reality in Italy or abroad;
- understand what it is and where it operates;
- discover related events/venues/articles;
- reach an official external destination when available.

TECH base: `ORGANIZATION`, optionally related to `VENUE`, `EVENT`, `ARTICLE` and `PLAYER` where factual and appropriate.

## 2.2 Narrative identity

The visitor enters the network of roads and banners connecting the cittadella-crocevia to other real communities.

The narrative should communicate connection and geography, not feudal ownership, fictional borders or political hierarchy.

`Reami d'Italia` and `Reami d'Oltreconfine` are presentation groupings. They may frame the page but must not replace country/city/address facts.

## 2.3 Functional descriptor

**Alleanze**  
Realtà Sorcery rappresentate, collegate o supportate da ICA.

---

# 3. Writer Intent

The page should feel like opening a map of relationships rather than entering a sponsor directory.

Desired perception:

- ICA is connected to a wider living community;
- each organisation is a real entity with a real place/context;
- geography creates orientation, not fictional rank;
- the page invites discovery beyond ICA without obscuring ownership or source facts.

Must never happen:

- fictional diplomacy or alliances presented as fact;
- implied endorsements unsupported by a real relationship;
- organisations renamed as “Reami” as though that were their official identity;
- paid/commercial prominence silently presented as community significance;
- venue and organisation treated as the same entity when they differ.

---

# 4. Emotional and experiential goals

| Goal | Visitor perception | Evidence in page experience | Priority |
|---|---|---|---|
| Connection | “ICA belongs to a wider network.” | grouped organisation discovery + factual relations | Critical |
| Orientation | “I understand where each reality is.” | country/city/region visible where useful | Critical |
| Trust | “These are real organisations, not invented lore.” | explicit names, links, provenance and neutral facts | Critical |
| Discovery | “I can continue toward events, venues or official channels.” | relationship routes and external links | High |
| Atmosphere | “The network still feels part of ICA.” | restrained map/road/heraldic cues | Medium |

Anti-goals:

- sponsor wall;
- medieval faction picker;
- pseudo-political map;
- logo cloud with no useful context;
- overdecorated directory.

---

# 5. User jobs and success conditions

| User job | Success condition | Primary action | Journey |
|---|---|---|---|
| Find an Italian Sorcery reality | relevant organisation is discoverable under `Reami d'Italia` | Open organisation detail / official link | community discovery |
| Find a foreign reality | relevant organisation is discoverable under `Reami d'Oltreconfine` | Open organisation detail / official link | community discovery |
| Understand an organisation | type, geography and relationship to ICA are clear when publishable | Read detail | organisation discovery |
| Find related activity | related events/venues/articles are reachable | Open relation | organisation → activity |
| Visit official external presence | verified link is clearly marked external | Open official site/social | outbound discovery |

---

# 6. Content scope

## 6.1 Required content

For an organisation card/detail:

- official/public organisation name;
- organisation type/category where governed;
- country;
- city/region when relevant and verified;
- short factual descriptor;
- official/public external link when available;
- relationship to ICA only when factual and appropriate.

Source of truth: `ORGANIZATION`.

## 6.2 Optional content

- logo or authorised imagery;
- associated venue(s);
- related Adunanze/Giostre;
- related Proclami/Cronache;
- public community contacts/channels intended for publication;
- factual player/community association where governed;
- map position derived from verified geography.

## 6.3 Explicit exclusions

- fictional allegiance/rank;
- unverified partnership labels;
- private contact details;
- reviews/ratings by default;
- paid prominence without explicit governance;
- Tesori/Mercante content;
- treating stores, communities, organisers and physical venues as interchangeable.

## 6.4 Factual / editorial / narrative boundary

**FACTUAL:** name, type, address/geography, official links, relationships, events/venues.  
**EDITORIAL:** short description, selection/order, spotlight, related-story framing.  
**NARRATIVE:** geographic chapter framing (`Reami d'Italia`, `Reami d'Oltreconfine`), threshold copy, restrained road/map metaphor.

---

# 7. Information architecture inside the page

| Module ID | Role | Required? | Visual level | Primary content | Action |
|---|---|---:|---|---|---|
| `ALLY01` | threshold / page definition | Yes | V5 | identity + descriptor | begin exploration |
| `ALLY02` | geographic grouping switch/index | Yes | V2 | Italy / abroad | change group |
| `ALLY03` | organisation listing | Yes when content exists | V2 | ORGANIZATION cards | open detail |
| `ALLY04` | featured/spotlight organisation | Optional | V3 | governed editorial selection | open detail |
| `ALLY05` | organisation detail | Conditional | V3→V1 | facts + relations | event/venue/article/external routes |
| `ALLY06` | empty/sparse state | Yes | V1 | truthful state | back to other discovery paths |

Grouping rule:

- `Reami d'Italia` = organisations whose verified country/geography falls in Italy;
- `Reami d'Oltreconfine` = organisations outside Italy;
- grouping is derived from geography, not manual prestige/affiliation.

---

# 8. Web Designer Interpretation

The page should behave as a **geographic/social directory with narrative framing**, not a literal fantasy map application.

Desktop may use a restrained map/road composition around lists or grouped sections, but the canonical browsing unit remains the organisation record.

A map is optional. It must not become required for usability, especially on mobile or when address precision is incomplete.

Primary scanning pattern:

1. understand the two geographic groups;
2. scan names and locations;
3. open an organisation;
4. follow real related activity.

---

# 9. Art Direction

## 9.1 Environmental direction

Mood: connected roads beyond the cittadella, distant lights/banners, cartographic restraint.

Use:

- parchment/map cues sparingly;
- antique gold for hierarchy, not every card;
- stone/iron for ICA framing;
- organisation logos/photos as content, not decoration.

## 9.2 Visual intensity budget

- `ALLY01`: V5;
- `ALLY02`: V2;
- `ALLY03`: V2;
- `ALLY04`: V3;
- `ALLY05`: V3 opening, V1 factual relations;
- `ALLY06`: V1.

## 9.3 Symbolic language

A route/road/standard motif may indicate connection. No coats of arms should be invented for external organisations unless the organisation itself supplies/owns such identity.

## 9.4 Negative constraints

Avoid:

- fantasy geopolitical borders;
- “kingdom” treatment of individual stores/communities;
- decorative pseudo-maps with fake precision;
- logo walls without hierarchy/context;
- ranking organisations by ornamental prominence.

---

# 10. Responsive Art Direction

**Desktop:** grouped directory can support two-column composition and optional cartographic context.  
**Tablet:** reduce map/ornament and keep group switch + list dominant.  
**Mobile:** single-column organisation list; geography/name/type visible before decorative media; external/detail actions remain obvious.

Action order:

- `PRESERVE`: organisation name, geography, type, primary route;
- `RECOMPOSE`: grouping/navigation and related links;
- `SIMPLIFY`: logos/image framing;
- `REMOVE_DECORATIVE_ONLY`: ambient map/road ornaments.

No horizontal map interaction is required to access core content.

---

# 11. Page states

- `NOT_READY`: organisation set or governance insufficient;
- `PRELAUNCH_READY`: structure validated with verified sample content;
- `LIVE_SPARSE`: small but useful verified set;
- `LIVE_NORMAL`: enough organisations for both browsing and relations;
- `LIVE_RICH`: richer network with events/venues/editorial relations;
- `STALE_REVIEW`: links/geography/relationship status needs review;
- `ARCHIVAL`: organisation retained historically but no longer active, only when factually justified;
- `TEMPORARILY_UNAVAILABLE`: data/source issue.

Module states:

- one geographic group may be empty while the other remains useful;
- map/spotlight hides when data/readiness is insufficient;
- broken external links never remain primary CTA.

---

# 12. Content Readiness Gate

`PASS_STAGING_ONLY` requires:

- page purpose and grouping rules defined;
- organisation records governed;
- at least one valid sample per intended live browsing behavior;
- empty states and external-link behavior defined.

`PASS_LIVE` requires:

- at least a small verified set of useful organisations;
- factual geography and identity;
- clear separation of organisation vs venue;
- no unsupported alliance/endorsement implication;
- valid onward route for each listed organisation (detail or official external link);
- geographic grouping derived deterministically.

A mature national directory is not required for initial live readiness.

Re-gate when organisation status, geography, official link or ICA relationship materially changes.

---

# 13. Relationships and navigation

| From | Relationship | To | Type | Required link? | Source |
|---|---|---|---|---:|---|
| ORGANIZATION | organizes/hosts/supports | EVENT | factual | No | event/organisation source |
| ORGANIZATION | operates/is associated with | VENUE | factual | No | verified organisation/venue source |
| ORGANIZATION | featured in | ARTICLE | editorial relation | No | ARTICLE relations |
| PLAYER | associated with | ORGANIZATION | factual/governed | No | profile source |
| ORGANIZATION | grouped into | Italy / outside Italy | derived geography | Yes for browsing | verified country |

No generic `related_to` relation should replace a more precise supported relation where UX meaning changes.

---

# 14. Components

Uses existing shared components where semantics fit:

- `CMP-ORG-REF`;
- `CMP-EVT-CARD` for related activity;
- `CMP-ARTICLE-TEASER` for related editorial content;
- `CMP-FILTER-BAR` only when content volume justifies it;
- `CMP-EMPTY-STATE`;
- `CMP-CTA-LINK`.

Potential page-local compositions:

- geographic group header;
- organisation detail identity block;
- optional map context.

Do not create a generic shared “map component” until another page proves identical semantics/state behavior.

---

# 15. Asset dependencies

Candidates only; no production asset creation yet:

| Candidate | Role | Required? | Module | Responsive | Status |
|---|---|---:|---|---|---|
| `AST-ALLY-ENV` | threshold environment | No | ALLY01 | alternate crop | DRAFT |
| organisation logo/photo | factual/content identity | No | ALLY03/05 | responsive media | SOURCE-GOVERNED |
| map/road motif | geographic atmosphere | No | ALLY01/02 | removable | DRAFT |

No invented organisation heraldry.

---

# 16. Interaction and microcopy

Primary actions:

- `Scopri l'Alleanza` / neutral detail equivalent;
- `Visita il sito ufficiale` or explicit external action;
- `Vedi le Adunanze` when related events exist.

Microcopy remains functional. Avoid role-play verbs for ordinary navigation.

Geographic switch labels remain exactly:

- `Reami d'Italia`;
- `Reami d'Oltreconfine`.

---

# 17. Accessibility

- semantic headings for geographic groups;
- organisation cards must not rely on logo alone for identity;
- external links identified accessibly;
- map, if present, cannot be sole navigation method;
- status/type/geography readable as text;
- keyboard/focus order follows list order;
- 44x44 minimum interactive targets;
- logo alt text follows informational/decorative role;
- no color-only differentiation between group/type/status.

---

# 18. SEO / discoverability / sharing

Functional title intent:

**Alleanze — Community, negozi e realtà Sorcery | In Cerca di Avventura**

Narrative grouping may appear in headings but should not obscure discoverability by organisation name/location.

Organisation detail pages, if implemented, should use real organisation name and geography in title/meta. External official source attribution remains visible where relevant.

---

# 19. Data and technical contract

| Object | Field | Requirement | Source | Verification | Context |
|---|---|---|---|---|---|
| ORGANIZATION | id | Required | content model | unique | all |
| ORGANIZATION | name | Required | organisation/public source | verified | list/detail |
| ORGANIZATION | type | Recommended | governed taxonomy | verified | list/detail/filter |
| ORGANIZATION | country | Required for grouping | official/public source | verified | grouping |
| ORGANIZATION | city/region | Optional | official/public source | verified | list/detail |
| ORGANIZATION | external_url | Optional | official source | verified/current | detail |
| ORGANIZATION | relation_to_ica | Optional | ICA governance | verified | detail |
| VENUE | relation | Optional | relationship map | verified | detail |
| EVENT | relation | Optional | event data | verified | detail |
| ARTICLE | relation | Optional | editorial relation | governed | detail |

Derived grouping:

- country = Italy → `Reami d'Italia`;
- otherwise → `Reami d'Oltreconfine`;
- unknown country → no false grouping; record remains pending or excluded from grouped live presentation.

---

# 20. Machine-readable specification placeholder

No page JSON yet. Human decisions remain source of truth until registry/component semantics stabilise after all active dossiers.

---

# 21. Traceability

| Decision ID | Decision | Source | Status |
|---|---|---|---|
| `PAG-ALLY-001` | Alleanze represents real Sorcery organisations/realities. | `CDL-010` | PRODUCT OWNER LOCKED |
| `PAG-ALLY-002` | Reami d'Italia / d'Oltreconfine are geographic groupings, not organisations. | `CDL-011` | PRODUCT OWNER LOCKED |
| `PAG-ALLY-003` | grouping is derived from verified geography. | Content Governance + Terminology | REVIEW |
| `PAG-ALLY-004` | map is optional and never sole navigation. | Responsive + accessibility | REVIEW |
| `PAG-ALLY-005` | no invented heraldry/endorsement/relationship. | Content Governance + NAQ | REVIEW |

---

# 22. Narrative & Aesthetic QA profile

Critical:

- NAQ-02 factual truth;
- NAQ-03 Realm/Site terminology protected;
- NAQ-04 Alleanze/Reami semantics respected;
- NAQ-06 metaphor remains understandable;
- NAQ-10 content organisations remain protagonist;
- NAQ-14 symbols controlled;
- NAQ-18–21 responsive identity without map dependency;
- NAQ-22–25 factual/privacy/governance boundary;
- NAQ-29–30 provenance/superseded directions.

---

# 23. Open Product Owner decisions

No new Product Owner decision blocks dossier delivery.

Future decisions that may arise only if implementation/content proves the need:

- whether a geographic map should exist at launch;
- whether any commercial/partner prominence policy is needed;
- whether an organisation detail page is required for every record or only richer records.

These are intentionally non-blocking until real content demonstrates the need.

---

# 24. Definition of Ready

**Delivery:** `COMPLETE`  
**Canonical readiness:** `REVIEW_REQUIRED`  
**Production readiness:** `NOT_READY`

Ready for canonical review when:

- organisation taxonomy is grounded in real content;
- sample organisation records pass Content Governance;
- grouping derivation is testable;
- Shared Component Registry has absorbed only proven reusable semantics;
- no unsupported relation or fictional geography remains.
