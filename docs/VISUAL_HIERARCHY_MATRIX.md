# In Cerca di Avventura — Visual Hierarchy Matrix

**Document ID:** ICA-VHM-001  
**Status:** DRAFT — Creative Canonical Lock  
**Version:** 0.1  
**Depends on:** `NARRATIVE_ART_BIBLE.md`, `DESIGN_SYSTEM.md`, `PAGE_STATE_MODEL.md`, `CONTENT_READINESS_GATE.md`

## 1. Purpose

This matrix translates the Narrative & Art Bible principle of disciplined fantasy density into a practical visual hierarchy. It governs how expressive each interface layer may become without reducing clarity, accessibility or factual legibility.

Core rule:

**The higher the semantic importance and the lower the repetition, the greater the permitted narrative/visual intensity.**

Repeated, data-heavy and task-oriented surfaces must become progressively quieter.

## 2. Intensity scale

| Level | Name | Typical use | Narrative intensity | Ornament | Artwork | Motion |
|---|---|---|---|---|---|---|
| V6 | Threshold | Home hero, exceptional ceremonial opening | Maximum | High but disciplined | Hero/environmental | Minimal, atmospheric only |
| V5 | Place identity | Primary page opening | High | Strong | Page identity art | Optional restrained |
| V4 | Section chapter | Major section header / featured editorial block | Medium-high | Moderate | Supporting art | Rare |
| V3 | Feature object | Featured event, chronicle, person, alliance | Medium | Restrained | Content-led | No decorative dependency |
| V2 | Repeated object | Card, row, list item, teaser | Low | Light | Optional thumbnail | None by default |
| V1 | Data / utility | Tables, metadata, filters, forms, system messages | Minimal | Minimal | None unless informational | None |

## 3. Rules by layer

### V6 — Threshold

Allowed:
- broad environmental composition;
- ICA crest as identity anchor;
- ceremonial typography;
- one primary action;
- painterly or atmospheric framing.

Not allowed:
- multiple competing CTAs;
- dense metadata;
- decorative text embedded in artwork;
- interaction that depends on interpreting the scene.

### V5 — Major place identity

Used for Le Adunanze, Cronache, Avventurieri, Alleanze and Proclami landing-page openings.

Rules:
- each place may have a distinct environmental accent or emblem;
- typography, spacing, controls and interaction remain shared-system elements;
- functional descriptor must remain visible when narrative naming is used;
- place identity must not become a separate mini design system.

### V4 — Section chapter

Rules:
- section changes may use banners, separators, art crops or material shifts;
- ornament must explain hierarchy or transition;
- repeated occurrence of V4 treatment on one page should be limited;
- section headings remain HTML text.

### V3 — Featured object

Rules:
- one clear content protagonist;
- real imagery/content should dominate decorative framing;
- metadata remains direct and compact;
- featured status must be supported by editorial or factual rules, not visual preference alone.

### V2 — Repeated object

Rules:
- cards and list items are primarily information surfaces;
- use the smallest amount of framing necessary to preserve ICA identity;
- no unique bespoke ornament per item;
- no large drop shadows, glow, bevel or heavy frame repetition;
- hover/focus treatment must not shift layout.

### V1 — Data and utility

Rules:
- clarity first;
- standard interaction conventions;
- high information density allowed where appropriate;
- dates, results, standings, filters and controls use functional language;
- fantasy styling is limited to typography accents, borders, spacing or subtle material cues;
- accessibility requirements override decorative intent.

## 4. Page composition budget

A normal primary page should generally contain:
- at most one V5 opening;
- a small number of V4 chapter transitions;
- selected V3 features;
- most operational content in V2/V1.

Home may contain one V6 threshold and then descend through V4/V3/V2.

The page should visually become calmer as the visitor moves from orientation toward task completion or factual detail.

## 5. Material hierarchy

| Semantic role | Preferred material language |
|---|---|
| Structure / environment | Stone, dark architectural surfaces |
| Navigation / durable frame | Blackened or burnished iron |
| Identity / hierarchy | Antique gold |
| Ceremony / chapter | Velvet, banners, cloth |
| Editorial / archival | Parchment, paper, ink |
| Verification / provenance | Seals, stamps, subtle marks |

Materials are semantic cues, not mandatory skins. No component should imitate a physical object so literally that usability suffers.

## 6. Typography hierarchy

- Display typography is reserved for V6–V4.
- Repeated card titles must remain highly readable and compact.
- Metadata and system text use functional type treatment.
- Typography must not be reduced below accessibility/readability targets to preserve a decorative composition.

## 7. Colour hierarchy

- Gold: hierarchy, identity, active or ceremonial emphasis.
- Midnight/mineral blue: depth and atmosphere.
- Near-black/iron: structural field.
- Parchment: documentary/editorial contexts only.
- Crimson/oxblood: rare signal, never default accent everywhere.
- Content artwork may carry richer colour than permanent UI chrome.

## 8. State hierarchy

Empty, error, stale, archived and unavailable states must not receive higher visual drama than populated content unless the state itself requires immediate user action.

System severity is communicated first through clear text and standard structure, not theatrical styling.

## 9. Responsive rule

When available space decreases, reduce in this order:
1. ambient ornament;
2. secondary environmental detail;
3. decorative framing depth;
4. optional imagery;
5. layout complexity.

Do **not** reduce:
- content meaning;
- heading hierarchy;
- touch target size;
- body text legibility;
- focus visibility;
- factual labels.

## 10. Acceptance checks

A screen fails this matrix when:
- every surface has similar visual weight;
- repeated components are as ornate as the hero;
- data presentation resembles a fantasy prop more than usable information;
- important content is visually weaker than decorative framing;
- mobile preserves decoration by sacrificing legibility;
- different pages appear to use unrelated design systems.

**Lifecycle:** `SPECIFIED (DRAFT)`  
**Readiness:** `REVIEW_REQUIRED`
