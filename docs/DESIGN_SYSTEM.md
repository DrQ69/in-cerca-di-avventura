# Design System — In Cerca di Avventura

**Document role:** specialist design guidance subordinate to `docs/ICA_CANONICAL_SPEC.md`.

This file consolidates the approved visual direction without duplicating the responsive, asset or QA specifications. When a topic is governed elsewhere, this document points to that system rather than redefining it.

## Visual north star

ICA should feel like an **old-school fantasy artefact brought to the web**: traditional fantasy illustration, medieval heraldry, blackened metal, antique gold, deep blue, stone, parchment and restrained arcane accents.

The interface should feel handcrafted and physical while being implemented with systematic modern web discipline.

Avoid:

- SaaS/dashboard aesthetics;
- glossy corporate landing pages;
- generic mobile-game fantasy UI;
- neon/high-saturation HUD styling;
- excessive rounded cards;
- generic parchment everywhere;
- decorative clutter that reduces legibility;
- arbitrary per-page visual languages.

## Core principle

**Disciplined UI, expressive art.**

UI structure, spacing, interaction and hierarchy must remain systematic and reusable. Illustration may be painterly, atmospheric and more visually expressive.

Function and factual clarity always outrank ornament.

## Brand anchor

The official ICA emblem is the primary identity anchor. Preserve it unless the Product Owner explicitly requests a change.

Do not distort, casually recolour, redraw or reinterpret it.

The wider system should remain recognisably ICA even when the emblem is absent from a specific block.

## Material semantics

Use materials according to role:

- **Night / Void / deep blue:** primary atmosphere and page foundation;
- **blackened iron / steel / dark stone:** structural frames, bars and support surfaces;
- **antique gold / bronze:** hierarchy, precious detail, selected states and restrained emphasis;
- **parchment / warm ivory:** reading surfaces where appropriate;
- **Air / Earth / Fire / Water accents:** Sorcery-specific secondary markers, never the replacement for ICA’s foundation palette.

Gold should communicate hierarchy and value, not cover every surface.

## Working colour direction

Exact final production token values remain subject to in-browser validation. Do not invent new palette systems casually.

The canonical direction is:

- deep near-black / night background;
- deep blue secondary surfaces;
- dark panel surfaces;
- antique gold with lighter/darker support tones;
- bronze and steel structural neutrals;
- restrained arcane blue;
- warm parchment/ivory reading tones;
- readable light primary/secondary text.

Any implementation token change must preserve this semantic structure and pass contrast/accessibility checks.

## Typography

Current approved direction:

- display/narrative: **Cinzel-family treatment**;
- reading/interface: **a highly readable text face**.

The final production font pairing is intentionally **not permanently locked** until tested in real HTML across desktop/mobile, including navigation fit, headings, cards and long-form reading.

Do not treat current prototype fonts as permanently canonical merely because they are already loaded by `index.html`.

Uppercase is appropriate for selected menu labels, small labels and heraldic headings, not for long reading text.

Body text must remain practical and readable.

## Typography scale and reading behaviour

Use the responsive typography rules from `docs/RESPONSIVE_SPECIFICATION.md` rather than redefining breakpoint-specific sizes here.

General principles:

- strong display hierarchy;
- body text never reduced merely to force layout fit;
- long-form reading width kept controlled;
- readable line-height for editorial copy;
- title treatment may be monumental, but not at the expense of scanability.

## Layout and spacing

Use systematic spacing, contained widths and clear vertical rhythm.

Canonical responsive layout rules, breakpoint boundaries, grid progression, page padding, max widths and viewport test matrix live in:

- `docs/RESPONSIVE_SPECIFICATION.md`
- `docs/M7_1_RESPONSIVE_CONFORMANCE.md`

Do not use this file to invent alternate breakpoints.

## Responsive design principle

Mobile is a deliberate composition, not a scaled desktop.

When space decreases:

1. remove non-essential flourishes;
2. reduce decorative terminal/corner prominence;
3. simplify frames;
4. reduce decorative background contrast;
5. remove secondary art;
6. only then reduce spacing within approved limits.

Do not sacrifice readable text, touch targets, focus visibility or factual clarity to preserve ornament.

A major mobile block should preserve at least one strong ICA identity anchor so the result becomes **ICA essenziale**, not generic mobile UI.

## Ornament density

Use ornament according to hierarchy:

- major hero/banner: high;
- section heading: medium-high;
- card: medium;
- table/data: low;
- body text: minimal.

Prefer one strong focal decorative treatment to many competing flourishes.

## Components

Component IDs and ownership follow the canonical Component System.

Visual variation is not automatically a new component. If purpose and semantic structure remain the same, prefer a documented variant.

Do not define an alternative component lifecycle in this file; use the lifecycle and completion rules from the Canonical Spec and M8/M8.1.

## Buttons and controls

Primary actions should use ICA hierarchy without becoming image-only controls.

Expected characteristics:

- dark/deep-blue or restrained precious treatment depending on hierarchy;
- clear border/contrast;
- visible default, hover where relevant, focus-visible, active and disabled states;
- no essential hover-only behaviour;
- no pill treatment unless the control genuinely behaves like a tag/filter;
- primary/repeated P0/P1 controls meet the M7.1 touch-target requirement unless an accepted exception exists.

Important labels remain accessible HTML.

## Cards

Cards should feel like fantasy plaques/artefacts rather than generic rounded dashboard cards, while preserving information hierarchy.

Use dark readable surfaces, restrained metal/gold framing and atmosphere appropriate to the component’s importance.

Event cards must prioritise factual information such as title, date, venue, format and status before narrative decoration.

Player cards/profiles must preserve the distinction between **Avventuriero** (community player) and **Avatar** (Sorcery card).

Deck presentation follows **Avatar + Atlas + Spellbook**.

## Results and data UI

Tables and rankings prioritise readability over ornament.

- ranking/position must remain obvious;
- labels and values remain associable;
- horizontal scrolling is allowed only inside a deliberate semantic data container when necessary;
- page-level horizontal scrolling is a defect;
- element colours never become the sole carrier of meaning.

## Editorial / Cronache

Editorial reading should feel atmospheric without becoming difficult to read.

Use controlled reading width, restrained ornaments, strong image/caption treatment and narrative openings that do not obscure factual context.

## Imagery

Preferred image direction:

- traditional/painterly fantasy illustration;
- atmospheric fantasy worldbuilding;
- authentic event photography for real community activity.

Do not transform authentic documentary photography into faux fantasy painting unless that treatment is explicitly intended and approved.

Hero and banner art must use deliberate focal points, safe areas and mobile art direction where needed.

Asset path, format, provenance, safe-area and lifecycle rules live in `docs/ASSET_SPECIFICATION.md` and `assets/manifest.json`.

## Sorcery layer

Sorcery contributes a secondary design grammar:

- Four Elements: Air, Earth, Fire, Water;
- Realm 5×4 grid as a restrained compositional/metaphorical motif;
- Avatar / Atlas / Spellbook hierarchy;
- Sites, spells and appropriate category/icon language.

The Sorcery layer enriches ICA; it does not replace ICA’s core material/brand system.

## Accessibility

Accessibility outranks ornament.

At minimum preserve:

- semantic headings/landmarks/controls;
- keyboard operability;
- visible focus;
- readable contrast;
- useful alt text for informative imagery;
- decorative image silence;
- no colour-only essential meaning;
- reduced-motion handling when motion exists;
- logical DOM/focus order.

Operational checks live in `docs/QA_CHECKLIST.md` and `docs/M9_1_QA_EXECUTION_MODEL.md`.

## Visual acceptance

Before a visual result can be recommended as VERIFIED, QA must be able to explain observable reasons rather than only state that it “looks good”.

Evaluate at least:

- hierarchy;
- ICA identity;
- ornament/function balance;
- mobile identity preservation;
- safe areas/overlap;
- factual readability;
- Sorcery-specific terminology and concept separation.

M11 will later add approved visual baselines and repeatable regression comparison.

## Change-control rule

Before introducing a new visual treatment, ask:

1. Does it belong beside the official ICA identity?
2. Does it reinforce old-school fantasy without becoming generic game UI?
3. Is information easier or equally easy to understand?
4. Does it work under canonical responsive behaviour?
5. Can it be represented as a reusable component/variant/token?
6. Does it avoid duplicating a rule already owned by another specialist specification?

If several answers are no, redesign before approval.