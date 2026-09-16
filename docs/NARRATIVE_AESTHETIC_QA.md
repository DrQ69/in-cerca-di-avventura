# In Cerca di Avventura — Narrative & Aesthetic QA

**Document ID:** ICA-NAQA-001  
**Status:** DRAFT — Creative Canonical Lock  
**Version:** 0.1  
**Depends on:** `NARRATIVE_ART_BIBLE.md`, `TERMINOLOGY_BIBLE.md`, `VISUAL_HIERARCHY_MATRIX.md`, `RESPONSIVE_ART_DIRECTION.md`, `CONTENT_GOVERNANCE.md`

## 1. Purpose

This checklist adds a creative-quality domain to the existing technical QA system. A page may be technically correct and still fail ICA if it breaks the world, the terminology, the factual/narrative boundary or the intended hierarchy.

Result values follow the existing QA vocabulary:

`PASS / FAIL / N/A / BLOCKED`

A `FAIL` in a critical item prevents the object from advancing to approval/readiness even if code, accessibility and performance checks pass.

## 2. Critical narrative checks

### NAQ-01 — ICA is a place, not a fantasy skin
**Critical**

PASS when the page feels like a coherent part of the cittadella-crocevia through structure, language and art direction rather than decorative medieval assets applied to a generic interface.

FAIL when removing the decorations reveals an ordinary dashboard with no meaningful narrative structure.

### NAQ-02 — Reality is never falsified
**Critical**

PASS when narrative copy never invents results, achievements, relationships, histories, event status or provenance.

FAIL on any fabricated factual implication.

### NAQ-03 — Sorcery terminology is protected
**Critical**

PASS when official concepts such as Avatar, Realm, Atlas, Spellbook, Site, Artifact and Threshold are not reused with conflicting ICA meanings.

### NAQ-04 — Approved ICA terminology is respected
**Critical**

Check current decisions including:
- Le Adunanze = event/gathering umbrella;
- Giostre = ICA-organised competitive subset;
- Cronache = preserved/editorial memory;
- Proclami = News;
- Avventurieri = real people represented in ICA;
- Alleanze = represented/connected Sorcery realities;
- Reami d'Italia / d'Oltreconfine = geographic narrative groupings, not individual organisations.

Tesori remains suspended and Mercante on hold unless explicitly reopened.

## 3. Voice and language checks

### NAQ-05 — Correct register

Ceremonial language is concentrated at thresholds and major transitions. Factual and operational areas remain direct.

### NAQ-06 — Metaphor does not require decoding

Narrative titles are paired with sufficient functional context when the meaning is not self-evident.

### NAQ-07 — Microcopy remains usable

Buttons, forms, filters and system states use ordinary comprehensible language rather than forced fantasy synonyms.

### NAQ-08 — Narrative restraint

Repeated copy is not written like continuous fantasy prose. Atmospheric writing is earned by context.

## 4. Visual hierarchy checks

### NAQ-09 — Intensity follows hierarchy
**Critical for canonical visual review**

Hero/place identity may be expressive; repeated cards, tables and controls are quieter.

### NAQ-10 — Content remains protagonist

Real community content, artwork, photographs, results and stories are not visually subordinated to permanent chrome.

### NAQ-11 — One world, one design system
**Critical**

Pages may vary in environment and emblem but do not invent unrelated typography, spacing, controls or mini design systems.

### NAQ-12 — Ornament has a reason

Frames, banners, seals, emblems and decoration communicate identity, hierarchy, transition, status or provenance. Decorative filler alone is insufficient justification.

### NAQ-13 — Materials are semantically coherent

Stone, iron, gold, cloth, parchment and ink are used consistently with their role and not randomly.

## 5. Aesthetic anti-pattern checks

The object fails if its dominant visual language becomes:
- SaaS/dashboard-like;
- mobile-game fantasy;
- neon/futuristic fantasy;
- cartoon fantasy;
- generic over-ornamented gothic;
- pseudo-medieval parody;
- heavy videogame HUD;
- ruin/grimdark by default;
- excessive parchment everywhere;
- gratuitous particles, glow or effects.

## 6. Heraldry and iconography checks

### NAQ-14 — Symbols have controlled meaning

A symbol must represent identity, place, category, status, passage, provenance or achievement.

### NAQ-15 — Functional icons remain recognisable

Menu/search/filter/external-link/calendar controls remain understandable without ICA lore.

### NAQ-16 — Achievements are factual
**Critical when used**

Badges, seals and epithets must be supported by verifiable achievement rules/data.

### NAQ-17 — Crest is not overused

The ICA crest remains a primary identity anchor rather than a decorative stamp repeated on every component.

## 7. Responsive art-direction checks

### NAQ-18 — Mobile is recomposed, not miniaturised
**Critical**

Identity and hierarchy survive while ambient detail and ornament reduce.

### NAQ-19 — Fit problems are solved structurally

Typography and touch targets are not shrunk to preserve desktop ornament or navigation.

### NAQ-20 — Crop preserves meaning

Responsive crops do not remove the subject, alter editorial meaning or obscure informative content.

### NAQ-21 — Mobile remains recognisably ICA

Simplification must not result in a completely generic interface.

## 8. Content-governance checks

### NAQ-22 — Fact/editorial/narrative layers are distinguishable
**Critical**

The source of factual values remains clear and narrative treatment does not overwrite source-of-truth data.

### NAQ-23 — Missing content is handled honestly

No fabricated placeholder events, people, news or achievements appear in production to fill scenic areas.

### NAQ-24 — Stale or uncertain information is not presented as current certainty

Follow Content Governance verification/freshness state.

### NAQ-25 — Privacy boundary is respected
**Critical**

Only approved/public person information is surfaced; narrative presentation never expands the disclosure scope.

## 9. Page-state checks

### NAQ-26 — Empty state remains useful

An empty page does not become an ornamental room with no useful next action.

### NAQ-27 — Archive feels intentionally historical

Archived content is clearly historical without appearing broken or abandoned.

### NAQ-28 — Error states are direct

System problems are explained clearly; fantasy phrasing never obscures recovery steps.

## 10. Provenance and traceability checks

### NAQ-29 — Significant creative choices are traceable

Major naming, environment, symbolism and page-structure decisions must point to an approved/recorded source or be marked PROPOSED/DERIVED.

### NAQ-30 — Superseded directions do not silently return
**Critical**

Legacy concepts marked superseded, suspended or on hold must not reappear as canonical without a new Product Owner decision.

## 11. Review profile by object

### Page Dossier review
Minimum required: NAQ-01–13, 18–25, 29–30.

### Visual asset review
Minimum required: NAQ-09–17, 18–21, 29–30.

### Editorial content review
Minimum required: NAQ-02–08, 22–25, 29–30.

### Production page review
All applicable checks plus existing M9/M12 technical QA.

## 12. Failure handling

Every FAIL must record:
- check ID;
- object under review;
- evidence;
- severity;
- proposed correction;
- whether a canonical decision is required;
- recheck status.

Do not repair a canonical ambiguity by implementation guesswork. Mark `BLOCKED` and return it to the relevant upstream source.

## 13. Gate criterion

An object may move toward `VERIFIED` only when:
- all applicable critical NAQ items PASS;
- non-critical FAILs are corrected or explicitly accepted through project exception governance;
- technical QA remains independently satisfied.

Creative QA does not replace accessibility, performance, functional or factual QA. It complements them.

**Lifecycle:** `SPECIFIED (DRAFT)`  
**Readiness:** `REVIEW_REQUIRED`
