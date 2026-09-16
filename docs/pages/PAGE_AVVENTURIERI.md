# In Cerca di Avventura — Page Dossier: Avventurieri

**Document ID:** ICA-PAG-PLY-001  
**Page:** Avventurieri  
**Narrative identity:** `Il Libro dei Nomi` — candidate expressive identity, not required for launch  
**Functional descriptor:** Persone della community rappresentate in ICA  
**Status:** `SPECIFIED (REVIEW_REQUIRED)`  
**Version:** 0.2  
**Delivery status:** `COMPLETE`  
**Canonical readiness:** `REVIEW_REQUIRED`  
**Readiness:** `NOT_READY`  
**Primary owner:** Community data / UX  
**Last reviewed:** 2026-09-16  
**Primary dependencies:** `docs/TERMINOLOGY_BIBLE.md`, `docs/PRIMARY_INFORMATION_ARCHITECTURE.md`, `docs/EXPERIENCE_MAP.md`, `docs/RELATIONSHIP_MAP.md`, `docs/CONTENT_GOVERNANCE.md`, `docs/PAGE_STATE_MODEL.md`, `docs/CONTENT_READINESS_GATE.md`, `docs/VISUAL_HIERARCHY_MATRIX.md`, `docs/RESPONSIVE_ART_DIRECTION.md`, `docs/NARRATIVE_AESTHETIC_QA.md`, `docs/CREATIVE_DECISION_LOG.md`

> An Avventuriero is a real person represented through verified public community activity. It is never the Sorcery `Avatar` game/card concept.

---

# 1. Provenance and locked boundary

- `source_type`: `DERIVED`
- `source_ref`: `CDL-009`, Content Governance, Relationship Map, vertical-slice evidence
- `decision_status`: `REVIEW`

Locked semantic rules:

- visible identity = Avventuriero;
- TECH object = `PLAYER`;
- nickname = primary visible identity;
- official Sorcery `Avatar` meaning remains protected and is never used for a person/profile;
- no invented biography, affiliation, title, achievement or participation.

`Il Libro dei Nomi` remains candidate expressive place language only. The functional destination name `Avventurieri` is sufficient and must remain understandable without it.

---

# 2. Page identity

## 2.1 Functional identity

Avventurieri is ICA's governed people index and profile destination. It must let visitors:

- discover public community profiles represented by ICA;
- understand a person's verified activity without exposing unnecessary personal data;
- move from results, Cronache and decks to the relevant person;
- revisit public event participation/results/decks where supportable;
- distinguish missing data from absence of achievement or affiliation.

Primary IA role: primary destination `Avventurieri`.

Experience role: human continuity across events, results and memory; tested chain `RESULT → PLAYER ← ARTICLE:Cronaca` with optional `PLAYER → DECK → EVENT`.

Main objects: `PLAYER`, related `EVENT`, `RESULT`, `DECK`, `ARTICLE`, `ORGANIZATION`, `ACHIEVEMENT` only when verified.

## 2.2 Narrative identity

The visitor reaches a maintained record of real people who have left a trace in the community. The feeling is recognition and continuity, not a fictional adventurer roster.

If `Il Libro dei Nomi` is later accepted as expressive identity, it must remain paired with `Avventurieri` / a plain descriptor.

## 2.3 Functional descriptor

**Persone della community rappresentate in ICA.**

---

# 3. Writer Intent

A profile should feel like a respectful record of participation and contribution. The person is not turned into a fantasy character; ICA may frame the profile narratively but the visible evidence must remain real.

The page should reward genuine activity and memory without creating status pressure through empty decoration, invented titles or forced completeness.

Narratively prohibited:

- fictional biographies or epithets presented as fact;
- treating missing profile fields as a deficiency to disguise;
- confusing a real person with a Sorcery game concept;
- exposing private/contact data merely to make a profile look complete.

---

# 4. Emotional and experiential goals

| Goal | Visitor perception | Evidence | Priority |
|---|---|---|---|
| Recognition | “This is a real person in the community.” | nickname-first identity + verified activity | Critical |
| Trust | “What I see is public and supportable.” | governed relations and privacy rules | Critical |
| Continuity | “I can follow their history across events/stories.” | event/result/Cronaca/deck relations | High |
| Respect | “The profile is not exploitative or overexposed.” | minimal public identity model | Critical |
| Discovery | “I can find another relevant person.” | useful index/filtering when volume permits | High |

Anti-goals: social-media profile, gamified ranking wall, fictional character sheet, mandatory portrait gallery, personal-data directory.

---

# 5. User jobs

| User job | Success condition | Primary action | Journey |
|---|---|---|---|
| Find a community person | nickname is easy to locate | open profile | community discovery |
| Understand verified activity | events/results are clear | open event/result | R03 |
| Read related stories | Cronache are reachable | open Cronaca | memory |
| Inspect a known deck | verified deck relation is reachable | open deck | R03 |
| Understand affiliation | only factual public relation is shown | open organization if available | relationship map |

---

# 6. Content scope

## Required for a routable profile

- stable `PLAYER.id`;
- public nickname;
- publication/privacy eligibility;
- at least one useful verified/public relation or editorial reason for representation.

## Optional

- public name when intentionally appropriate;
- portrait/image with rights/provenance;
- organization/community association;
- event participation;
- results;
- decks;
- related Cronache;
- verified achievements governed by explicit rules.

## Explicit exclusions

- contact data;
- private identity details;
- inferred affiliation;
- invented biography or personality traits;
- narrative achievements without factual rules;
- synthetic fixture people in production.

## Factual / editorial / narrative boundary

- `FACTUAL`: nickname/public identity scope, event participation, results, deck relations, governed organization relations, achievements.
- `EDITORIAL`: spotlight selection, short contextual intro, ordering of related stories.
- `NARRATIVE`: page/profile framing and restrained place language.

Narrative treatment never expands the disclosure scope.

---

# 7. Page information architecture

## Index

| Module | Role | Required | Visual level | Content | Action |
|---|---|---:|---|---|---|
| `PLY-I01` | page threshold / orientation | Yes | V5 | Avventurieri + descriptor | orient |
| `PLY-I02` | index/list | Yes | V2 | public eligible players | open profile |
| `PLY-I03` | discovery controls | Conditional | V1–V2 | search/filter/sort | narrow list |
| `PLY-I04` | optional editorial spotlight | Conditional | V3 | eligible PLAYER + ARTICLE context | open profile/story |
| `PLY-I05` | sparse/empty state | Yes | V1 | direct explanation | explore other areas |

Default index order: nickname alphabetical, case-insensitive. This is deterministic, neutral and avoids silently ranking people by perceived importance.

Search/filter controls appear only when volume justifies them. Candidate filters must be derived from governed data, e.g. event participation or public organization relation. Do not expose filters that imply unsupported status categories.

## Profile detail

`PLY-D01` identity/nickname → `PLY-D02` verified activity/results → `PLY-D03` related Cronache → `PLY-D04` decks → `PLY-D05` organization relation/verified achievements when available.

---

# 8. Web Designer Interpretation

The index should feel like a readable register, not a leaderboard.

- repeated profiles are quiet and consistent;
- nickname is the dominant scanning key;
- portrait is optional, never structurally required;
- data-heavy relations use compact factual blocks;
- profile threshold may carry more identity, while results/decks remain restrained;
- spotlight treatment may be editorial but never imply rank unless explicitly governed.

**Fantasy in perception. Clarity in interaction.**

---

# 9. Art Direction

Environmental cue: maintained names/register hall inside the cittadella-crocevia; engraved/inked record language rather than trophies or heroic portrait gallery.

Material priority:

1. readable identity/data surfaces;
2. ink/metal nameplate cues;
3. dark stone/wood structural framing;
4. antique gold as restrained emphasis;
5. portrait/content imagery only when real and governed.

Visual intensity:

- `PLY-I01` V5;
- optional spotlight V3;
- repeated index rows/cards V1–V2;
- profile identity V4;
- results/decks/relations V1–V2.

No new emblem is required. Avoid shields/medals that imply achievements unless backed by explicit achievement rules.

---

# 10. Responsive Art Direction

- desktop index may use 2–3 columns only if scanning remains clear;
- tablet reduces columns and ornament;
- mobile uses one-column list; nickname and useful activity precede imagery;
- filters collapse into accessible controls, not hidden hover interactions;
- profile relations stack vertically;
- results remain readable without horizontal overflow for core facts;
- missing portrait never creates a decorative placeholder portrait;
- touch targets >=44x44 and visible focus preserved.

---

# 11. Page states

- `NOT_READY`: privacy/governance unresolved or too little useful public content.
- `PRELAUNCH_READY`: controlled staging with verified sample/public profiles.
- `LIVE_SPARSE`: small but genuinely useful set of public profiles; page must not imply mature directory scale.
- `LIVE_NORMAL`: enough profiles and relations for normal index browsing.
- `LIVE_RICH`: search/filter/related discovery justified by volume.
- `STALE_REVIEW`: profile relations may need factual/privacy review.
- `ARCHIVAL`: a profile may preserve historical activity even without recent participation if publication remains appropriate.
- `TEMPORARILY_UNAVAILABLE`: direct system message; no invented lore fallback.

Profile module states: sparse, normal, no-image, no-organization, no-deck, no-related-Cronaca, privacy-blocked/unpublished.

---

# 12. Content Readiness Gate

`PASS_STAGING_ONLY` requires at least one privacy-safe profile with resolved event/result/article relations and testable states.

`PASS_LIVE` for the destination requires:

- a small but meaningful set of verified/privacy-safe profiles;
- nickname rules respected;
- no invented biography/achievement/affiliation;
- profile routes only for publishable people;
- index behavior truthful at current volume;
- missing optional data handled without filler;
- critical relations resolve or corresponding links are omitted.

A single profile can be valid, but does not make the index a mature directory.

Re-gate on privacy/consent changes, identity corrections, affiliation/result changes, taxonomy changes or significant loss of useful profiles.

---

# 13. Relationships and navigation

| From | Relationship | To | Layer | Link |
|---|---|---|---|---|
| PLAYER | participates in | EVENT | factual | Conditional |
| PLAYER | has result | RESULT | factual | Conditional |
| PLAYER | uses/owns deck record | DECK | factual | Conditional |
| PLAYER | featured/mentioned in | ARTICLE:Cronaca | factual/editorial | Conditional |
| PLAYER | associated with | ORGANIZATION | factual/privacy-governed | Conditional |
| PLAYER | earns | ACHIEVEMENT | factual/derived | Conditional |
| Result/Cronaca | routes to | PLAYER | navigation | Yes when profile is publishable |

Mandatory journey continuity for the tested slice: Result/Cronaca may identify a player without creating a broken profile route; link only when the profile is publication-ready.

---

# 14. Components

Shared:

- `CMP-PLAYER-REF`;
- `CMP-RESULT-SUMMARY`;
- `CMP-ARTICLE-TEASER`;
- `CMP-FILTER-BAR` when index volume warrants it;
- `CMP-ORG-REF` where public relation exists;
- `CMP-CTA-LINK`;
- `CMP-EMPTY-STATE`.

Local:

- `PLY-INDEX-ROW/CARD` remains local until another directory proves semantic reuse;
- `PLY-PROFILE-IDENTITY`;
- `PLY-ACTIVITY-STACK` composition.

No new generic shared component is justified by this dossier alone.

---

# 15. Asset dependencies

Candidates only:

- index/profile threshold environment art: optional;
- portrait: content asset, never mandatory, rights/provenance required;
- profile decorative mark/nameplate: optional and non-semantic;
- verified achievement badge assets only after Achievement rules exist.

Final asset IDs wait for Asset Dependency Map. No production asset generation is authorized here.

---

# 16. Interaction and microcopy

Primary actions: `Apri profilo`, `Vedi risultati`, `Vedi l'evento`, `Leggi la Cronaca`, `Vedi il deck` where valid.

Index default: alphabetical by nickname. Search uses plain-language placeholder/label such as `Cerca per nickname` when enabled.

Empty/privacy states are direct. Do not use fantasy wording to obscure why a profile or field is unavailable.

---

# 17. Accessibility

- list/index uses semantic list/grid patterns appropriate to interaction;
- nickname exposed as text, not image-only;
- portraits have meaningful alt only when informative;
- decorative profile art hidden from assistive tech;
- status/achievement meaning never color-only;
- keyboard/focus order follows scan/read order;
- filter/search labels explicit;
- touch targets >=44x44;
- dates/results/deck relations readable and labelled;
- reduced motion supported.

---

# 18. SEO / discoverability / sharing

Index SEO title uses `Avventurieri` plus ICA/Sorcery context; candidate narrative place name never replaces the functional subject.

Profile pages may be indexable only when publication/privacy policy permits and the profile has enough useful public content. Sparse/private/unverified profiles should not create low-value or privacy-risk indexing.

Open Graph profile imagery only when rights/provenance and publication scope permit it; otherwise use a generic ICA asset later.

---

# 19. Data / technical contract

Required PLAYER fields for routable profile: stable ID, nickname, profile/publication visibility state.

Optional: public name, organization relation, image refs, event/result/deck/article/achievement relations.

Derived index order: normalized nickname ascending. Any spotlight/featured selection must be explicit editorial metadata and must not imply rank.

Unknown/missing optional data is omitted. Relationships require factual source or editorial provenance where applicable.

---

# 20. Traceability

| Decision ID | Decision | Source | Status |
|---|---|---|---|
| `PAG-PLY-001` | Avventuriero = real person; Sorcery Avatar meaning protected. | `CDL-009` | PRODUCT OWNER LOCKED |
| `PAG-PLY-002` | Nickname is primary visible identity. | `CDL-009` | PRODUCT OWNER LOCKED |
| `PAG-PLY-003` | Sparse truthful profiles are valid when useful and privacy-safe. | Content Governance + Page State Model | REVIEW |
| `PAG-PLY-004` | Index default order is nickname alphabetical, not implicit ranking. | DERIVED usability/fairness rule | REVIEW |
| `PAG-PLY-005` | Search/filters appear only when volume and governed data justify them. | Content Readiness + framework freeze | REVIEW |
| `PAG-PLY-006` | `Il Libro dei Nomi` remains optional/candidate expressive identity. | provenance reconciliation | REVIEW |

---

# 21. Narrative & Aesthetic QA profile

Apply NAQ-01–13, 18–25, 29–30, with special emphasis on:

- NAQ-02 no invented facts;
- NAQ-03 protected Sorcery terms;
- NAQ-04 Avventurieri terminology;
- NAQ-10 real people/activity remain protagonist;
- NAQ-16 verified achievements only;
- NAQ-22 factual/editorial/narrative boundary;
- NAQ-23 missing content honest;
- NAQ-25 privacy boundary;
- NAQ-30 no return of superseded identity conventions.

---

# 22. Product Owner decisions

No new Product Owner decision blocks this dossier.

A future choice on whether to canonize `Il Libro dei Nomi` as the page's expressive title is non-blocking. A future permanent people taxonomy beyond factual/public relations should be decided only if real content volume proves it useful.

---

# 23. Definition of Ready

**Delivery status:** `COMPLETE`  
**Canonical readiness:** `REVIEW_REQUIRED`  
**Production readiness:** `NOT_READY`

Ready for canonical review because Writer Intent, index/profile architecture, privacy/content boundaries, sorting/filtering behavior, states/readiness, relationships, responsive/accessibility, data contract, components and provenance are defined. Production implementation remains frozen until Creative Canonical Lock and downstream canonical propagation.