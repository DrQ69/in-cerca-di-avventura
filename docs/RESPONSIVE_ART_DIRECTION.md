# In Cerca di Avventura — Responsive Art Direction

**Document ID:** ICA-RAD-001  
**Status:** DRAFT — Creative Canonical Lock  
**Version:** 0.1  
**Depends on:** `NARRATIVE_ART_BIBLE.md`, `VISUAL_HIERARCHY_MATRIX.md`, `RESPONSIVE_SPECIFICATION.md`, `M7_1_RESPONSIVE_CONFORMANCE.md`

## 1. Purpose

This document defines how ICA preserves identity across viewport sizes without treating mobile as a scaled-down desktop composition.

Core principle:

**Mobile is ICA essenziale, not ICA miniaturised.**

Responsive adaptation must protect function, readability and content before decorative continuity.

## 2. What must survive every viewport

Every canonical page must preserve:
- ICA identity anchors;
- page/place orientation;
- primary action;
- content hierarchy;
- factual completeness;
- semantic labels;
- keyboard/focus behaviour where applicable;
- touch targets >= 44x44;
- direct access to primary navigation.

## 3. What may change

The following may change substantially by breakpoint:
- crop and focal point of hero artwork;
- amount of environmental detail;
- ornament density;
- image aspect ratio;
- section composition;
- column count;
- alignment;
- use of banners/side ornaments;
- whether non-essential decoration is rendered at all.

Responsive art direction is therefore allowed to use alternate crops or alternate assets when a single image cannot preserve composition across all sizes.

## 4. Adaptation order

When space becomes constrained, simplify in this order:
1. remove ambient/non-semantic decoration;
2. crop or replace environmental artwork;
3. reduce frame complexity and layered depth;
4. reduce multi-column composition;
5. move secondary information below primary content;
6. collapse non-critical navigation into the approved compact pattern.

Never solve fit problems by making text illegibly small.

## 5. Hero / threshold behaviour

### Wide desktop
- environmental composition may be cinematic;
- artwork may use negative space intentionally around text;
- identity and one primary CTA remain clearly separated from decoration.

### Tablet
- preserve focal subject and orientation;
- reduce lateral ornament;
- allow text and CTA to detach from artwork when needed;
- avoid awkward middle-width crops that hide the subject or logo.

### Mobile
- use a dedicated crop or alternate asset if necessary;
- prioritise crest, title/descriptor and CTA;
- background image may become simpler or more abstract;
- no critical text inside the artwork;
- decorative overlap must not compromise readability.

## 6. Major page opening behaviour

V5 page identity should remain recognisable on mobile through a reduced set of signals:
- title;
- functional descriptor;
- local emblem or art accent if useful;
- material/colour cue;
- one clear next step.

A mobile user does not need every desktop architectural cue to understand the place.

## 7. Section behaviour

- desktop may alternate image/text arrangements;
- tablet may standardise alternating sections into simpler stacked compositions;
- mobile should use one clear vertical flow;
- section transition ornament can be reduced to a small divider, emblem or typography treatment.

## 8. Cards and repeated content

Repeated components must become more compact before becoming smaller.

Rules:
- one-column lists are preferred on narrow screens when two-column layouts reduce scanning clarity;
- metadata may wrap to multiple lines rather than shrink;
- thumbnails may move above content or disappear if not essential;
- CTA placement must remain predictable;
- no horizontal scrolling for ordinary cards or metadata.

## 9. Data-heavy interfaces

Tables, standings and structured factual content should adapt through:
- prioritised columns;
- stacked row detail where necessary;
- explicit labels in mobile row views;
- disclosure patterns for secondary data;
- preserved source values and meaning.

Do not convert structured data into decorative cards if that makes comparison harder.

## 10. Navigation

Current primary labels:
- Le Adunanze
- Cronache
- Avventurieri
- Alleanze
- Proclami

The desktop navigation may use the full label set only when actual label-fit passes reconciled M7.1 testing with final fonts.

Below the fit threshold, switch to the approved compact navigation pattern. Do not reduce type merely to preserve the desktop bar.

The ICA crest remains the Home entry point.

## 11. Imagery rules

Every expressive image used responsively should define:
- subject/focal point;
- safe crop region;
- whether alternate crop is required;
- whether an alternate mobile asset is justified;
- alt-text responsibility;
- decorative/informational classification.

Content images such as event photographs, player portraits and card imagery must not be cropped in a way that changes their factual/editorial meaning.

## 12. Motion

Motion is optional and subordinate.

On all sizes:
- no critical meaning depends on motion;
- reduced-motion preference removes non-essential animation;
- mobile should generally use less ambient motion than wide desktop;
- parallax and large background transforms require strong justification and performance validation.

## 13. Performance relationship

Responsive art direction must respect the Technical Baseline.

Mobile should not download high-resolution desktop decorative assets when smaller/alternate sources can be served. Art direction and performance are jointly responsible for perceived quality.

## 14. Page Dossier requirement

Each Page Dossier must state, for every major visual block:
- desktop composition;
- tablet adaptation;
- mobile adaptation;
- what disappears;
- what reflows;
- which asset crop/variant is used;
- what must never be lost.

## 15. Responsive QA questions

A responsive screen fails when:
- desktop art has merely been squeezed smaller;
- key subject matter is unintentionally cropped;
- labels or actions overflow;
- ornament forces smaller type or touch targets;
- mobile loses page identity completely;
- mobile reproduces excessive desktop decoration with poor performance;
- factual information disappears without an intentional disclosure route.

**Lifecycle:** `SPECIFIED (DRAFT)`  
**Readiness:** `REVIEW_REQUIRED`
