# ICA Responsive Specification

**Document ID:** ICA-RSP-001  
**Status:** Approved specialist specification  
**Version:** 1.0  
**Milestone:** M7 — Responsive Specification  
**Authority:** subordinate to `docs/ICA_CANONICAL_SPEC.md`

## 1. Purpose

This document defines the responsive behaviour of In Cerca di Avventura (ICA): viewport ranges, layout grids, containers, spacing, navigation changes, component recomposition, image art direction, data-table behaviour, interaction rules and responsive QA.

The objective is not to make desktop smaller. The objective is to preserve hierarchy, clarity, atmosphere and functionality at every supported viewport.

## 2. Core responsive principles

1. **Mobile is a deliberate composition, not a scaled desktop.**
2. Content hierarchy is preserved even when decoration is reduced.
3. Functional content has priority over ornaments, atmospheric art and secondary metadata.
4. No component may depend on hover for essential functionality.
5. No essential control may be clipped, overlap another control or escape its container.
6. No page-level horizontal scrolling is allowed.
7. Horizontal scrolling is allowed only inside deliberately scrollable data components such as wide tables.
8. Images use art direction when a simple crop would damage the focal subject or text-safe area.
9. Typography may scale fluidly within defined limits, but body readability must not be sacrificed.
10. Responsive behaviour belongs to the component specification; assets support it but do not dictate it.

## 3. Canonical breakpoint system

ICA uses a mobile-first breakpoint model.

| Token | Range | Typical use |
|---|---:|---|
| `xs` | 0–479 px | small phones |
| `sm` | 480–767 px | large phones |
| `md` | 768–1023 px | tablets / narrow landscape |
| `lg` | 1024–1279 px | compact desktop / laptop |
| `xl` | 1280–1535 px | standard desktop |
| `2xl` | 1536 px and above | large desktop |

Canonical CSS query boundaries:

```css
@media (min-width: 480px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

Do not introduce arbitrary one-off breakpoints unless a documented component failure requires one. If a component needs a local breakpoint, record it in that component's specification.

## 4. Required QA viewports

Every substantial UI change must be checked at least at:

- **360 × 800** — small mobile;
- **390 × 844** — primary mobile;
- **768 × 1024** — tablet portrait;
- **1024 × 768** — compact desktop/tablet landscape;
- **1280 × 800** — laptop/desktop;
- **1440 × 900** — primary desktop;
- **1920 × 1080** — large desktop sanity check for excessive stretching.

The exact viewport height may differ when reproducing a device, but width coverage is mandatory.

## 5. Page container system

Use a centered content container with responsive inline padding.

| Range | Inline page padding | Main max width |
|---|---:|---:|
| `xs` | 16 px | fluid |
| `sm` | 20 px | fluid |
| `md` | 24 px | fluid |
| `lg` | 32 px | 1200 px |
| `xl` | 32 px | 1280 px |
| `2xl` | 40 px | 1280 px |

Recommended token direction:

```css
:root {
  --ica-page-pad: 16px;
  --ica-content-max: 1280px;
  --ica-reading-max: 720px;
}

@media (min-width: 480px) { :root { --ica-page-pad: 20px; } }
@media (min-width: 768px) { :root { --ica-page-pad: 24px; } }
@media (min-width: 1024px) { :root { --ica-page-pad: 32px; } }
@media (min-width: 1536px) { :root { --ica-page-pad: 40px; } }
```

The visual background may span full width; readable content usually remains inside the main container.

## 6. Grid system

Canonical layout grid:

- `xs` / `sm`: **4 columns**;
- `md`: **8 columns**;
- `lg` / `xl` / `2xl`: **12 columns**.

Default grid gaps:

- mobile: 16 px;
- tablet: 20 px;
- desktop: 24 px;
- large editorial/hero compositions may use 32 px when justified.

Do not expose the grid visually unless it is part of a deliberate Realm-inspired motif.

## 7. Vertical spacing

The 4 px spacing baseline remains authoritative.

Recommended section spacing:

| Context | Mobile | Tablet | Desktop |
|---|---:|---:|---:|
| compact section | 32 px | 40 px | 48 px |
| normal section | 48 px | 64 px | 80 px |
| major narrative transition | 64 px | 80 px | 96 px |

Decorative separators do not replace sufficient whitespace.

## 8. Typography scaling

Typography must remain readable first and atmospheric second.

Use `clamp()` where useful, but do not let type exceed approved design ranges.

Recommended responsive targets:

| Role | Mobile | Desktop |
|---|---:|---:|
| Display XL | 36–42 px | 56–64 px |
| Display L | 32–36 px | 44–52 px |
| H1 | 30–34 px | 38–44 px |
| H2 | 26–30 px | 30–36 px |
| H3 | 21–24 px | 24–28 px |
| Body Large | 18 px | 18–20 px |
| Body | 16–17 px | 17–18 px |
| Small | 14 px | 14–15 px |
| Micro | 12–13 px | 12–13 px |

Long-form reading width should normally remain between **650 and 760 px**, with **720 px** as the default target.

No body copy should be reduced below 16 px merely to fit a layout.

## 9. Navigation behaviour

### Desktop — `NAV-01`

`NAV-01` is the primary desktop navigation and is used at `lg` (1024 px) and above unless real implementation testing proves the labels cannot fit without compromising accessibility.

Canonical labels:

**Imprese · Campagne · Avventurieri · Cronache · Il Reame · Archivio**

The ICA sigil/emblem links to Home and is not an extra text navigation item.

If `BNR-01` provides the decorative navigation structure, all clickable labels remain completely inside the inner safe zone.

### Mobile / tablet — `NAV-02`

Below 1024 px, use `NAV-02` rather than shrinking the full desktop banner.

Requirements:

- persistent brand/sigil trigger area;
- one clearly labelled menu control;
- menu entries shown at comfortable touch size;
- no horizontal scrolling of the primary navigation;
- current-page state remains visible;
- keyboard and screen-reader operation preserved;
- opening the menu must not cause uncontrolled horizontal layout shift;
- decorative complexity is reduced before text size or touch target size is reduced.

A drawer, overlay or expanding panel may be used; the chosen interaction must be implemented consistently across the site.

## 10. Touch and pointer interaction

Minimum interactive target:

- target size **44 × 44 CSS px** where practical;
- adjacent controls require enough separation to avoid accidental activation.

Hover treatment is enhancement only and must be wrapped conceptually by pointer capability, e.g. `@media (hover: hover) and (pointer: fine)` where appropriate.

Focus-visible is mandatory at every breakpoint.

## 11. Ornament reduction hierarchy

When space decreases, simplify in this order:

1. remove non-essential flourishes;
2. reduce corner/terminal ornament prominence;
3. simplify borders/frame layers;
4. reduce decorative background contrast;
5. remove non-essential secondary art;
6. only then reduce spacing within approved limits.

Never respond to narrow screens by shrinking essential text or controls below accessible size.

### Ornament density by viewport

- `xl` / `2xl`: full approved decorative treatment;
- `lg`: full or slightly simplified;
- `md`: medium ornament density;
- `sm`: low ornament density;
- `xs`: minimal ornament, preserving only identity anchors.

## 12. Hero behaviour — `MED-HERO-01`

Hero art is full-bleed visual atmosphere with content positioned in a controlled safe zone.

Rules:

- use `object-fit: cover` only when the focal subject remains intact;
- record desktop and mobile focal points when they differ;
- use a separate mobile derivative when crop quality is unacceptable;
- apply a readable overlay/gradient where text sits over artwork;
- text remains HTML;
- avoid fixed pixel heights that crop unpredictably across aspect ratios.

Initial height guidance:

- `xs` / `sm`: approximately 320–420 px depending on copy;
- `md`: approximately 400–500 px;
- `lg+`: approximately 480–620 px.

These are constraints, not mandatory identical heights for every hero.

## 13. Banner behaviour

### `BNR-01` — main navigation banner

- active at `lg+`;
- not merely scaled to mobile;
- ornamental end-caps may have fixed decorative widths while the central safe area expands;
- all labels remain HTML;
- no label/control may touch or overlap the gold/ornamental frame;
- minimum internal control gap is 8 px, normally 12–16 px;
- if the approved design cannot hold six labels at 1024 px without compression, `NAV-02` may remain active until a documented local breakpoint above 1024 px.

### `BNR-02` — section hero/banner

- may remain full-width across all viewports;
- title and metadata reflow independently of artwork;
- mobile may use a simplified frame or different crop;
- decorative side elements may disappear below `md`.

## 14. Card systems

Default card-grid behaviour for `CRD-*` listings:

- `<768`: 1 column;
- `768–1279`: 2 columns;
- `>=1280`: 3 columns when content length and card design support it.

Featured cards may span multiple columns at desktop.

A grid does not have to fill every available column; content density and legibility take precedence.

### Card internal behaviour

At narrow widths:

- metadata may wrap onto multiple lines;
- secondary decorative art may reduce or disappear;
- CTA remains fully visible;
- status badge remains readable;
- title is never truncated solely to preserve a decorative layout unless a deliberate list pattern defines truncation.

## 15. Entity headers — `ENT-*`

At `lg+`:

- two-area composition allowed: identity/art + factual metadata;
- portrait/art may occupy roughly 4–5 of 12 columns, content 7–8 columns.

Below `lg`:

- stack vertically;
- factual title/status/date information appears before optional narrative support content;
- portrait/image may reduce in height but must not push essential metadata excessively below the fold.

## 16. Event and Campaign layouts

For Impresa and Campagna detail pages:

- primary facts stay visible near the top at every width;
- desktop may use a metadata rail or side panel;
- below `lg`, side metadata moves into the main reading flow;
- CTA/registration controls appear before long narrative text when registration is active;
- rankings and result data remain functionally separate from decorative content.

## 17. Avventuriero profile

`ENT-02` / Player profile follows a character-sheet concept, but responsive priority is factual clarity.

Desktop may show portrait + identity/stats in parallel.

Below `lg`:

1. nickname and narrative title;
2. portrait;
3. key stats/achievements;
4. recent results;
5. decks/chronicles/secondary material.

Do not compress a character-sheet grid until labels become unreadable; recompose it into stacked attribute groups.

## 18. Deck / decklist responsive behaviour

The Sorcery deck model remains **Avatar + Atlas + Spellbook**.

At `lg+`:

- Avatar summary may sit above or beside the two deck zones;
- Atlas and Spellbook may be displayed side by side when useful.

Below `lg`:

- Avatar first;
- Atlas block;
- Spellbook block;
- elemental affinity summary near the top;
- no horizontal card-list layout that requires page-level sideways scrolling.

Card rows may wrap metadata or use a compact list pattern on mobile.

## 19. Tables — `TBL-*`

Tables remain semantic HTML tables.

For result/ranking tables:

- desktop shows the full approved column set;
- at `md` and below, non-critical columns may be hidden only if the same information remains available elsewhere or is genuinely optional;
- if core columns cannot fit, place the table inside a labelled horizontal-scroll container;
- do not transform competitive data into unrelated decorative cards by default;
- row labels and player names must remain easy to associate with values;
- first column may be sticky if testing confirms it improves usability.

Page-level horizontal scrolling caused by a table is a defect.

## 20. Editorial / Cronache layout

Long-form article content uses the reading-width container, normally max **720 px**.

Full-bleed imagery may break out of the reading column only when deliberate.

At mobile:

- pull quotes and figures remain within the viewport;
- floated side content becomes block content;
- decorative drop caps must not cause line collisions;
- captions remain at least 14 px where practical.

## 21. Realm visualisations

Realm-inspired 5×4 geometry is a visual/data metaphor, not a requirement to preserve a literal 5×4 grid at all widths.

For P2 Realm visualisations:

- desktop may show richer spatial relationships;
- mobile may switch to zoom/pan, list + map, or stacked location representations;
- labels must not become illegible merely to retain the desktop map shape;
- critical location information must be available outside purely visual geometry.

## 22. Forms and filters

Below `md`:

- form fields normally stack to one column;
- filter groups may become disclosure panels or a dedicated filter drawer;
- labels stay visible and associated with controls;
- no two-column form layout if either control becomes too narrow.

At desktop, related short controls may share rows.

## 23. Status badges and element markers

Badges must wrap or move; they must not shrink text below readable size.

Air/Earth/Fire/Water markers may use colour and iconography, but meaning cannot rely on colour alone.

Multiple element markers may wrap into a second row rather than overflowing.

## 24. Images and responsive delivery

Use HTML responsive-image features where appropriate:

- `srcset` / `sizes` for raster content;
- `<picture>` for art direction or AVIF/WebP choice;
- `loading="lazy"` for below-the-fold non-critical images;
- explicit width/height or `aspect-ratio` to reduce layout shift.

Do not lazy-load the primary above-the-fold hero if it harms LCP.

Asset derivatives should be generated only for real responsive needs, not automatically for every breakpoint.

## 25. Background textures

Textures must not become denser or higher-contrast on small screens.

Large texture assets may use:

- smaller derivatives;
- CSS gradients/colour fallbacks;
- reduced opacity;
- omission on low-value contexts.

Background imagery must never be required for content comprehension.

## 26. Reduced motion

All non-essential animations must respect `prefers-reduced-motion: reduce`.

Responsive transitions should not rely on large parallax movements.

Menu open/close motion should remain short and understandable and have a reduced-motion alternative.

## 27. Orientation and dynamic viewport height

Avoid relying on legacy `100vh` for critical mobile layouts where browser chrome can cause clipping.

Prefer modern dynamic viewport units (`dvh`, `svh`) where appropriate with safe fallbacks.

Do not create critical interfaces that only work in portrait or landscape orientation.

## 28. Safe-area insets

Where fullscreen or edge-to-edge mobile UI is introduced, account for device safe areas using `env(safe-area-inset-*)` as needed.

The base site does not require edge-to-edge fixed controls unless explicitly designed.

## 29. Content reordering

CSS visual reordering must not create a keyboard/screen-reader order that contradicts the visible layout.

Prefer semantic DOM order matching mobile reading priority, then enhance desktop layout with Grid.

## 30. Component responsive contract

Every P0/P1 component specification must declare:

- `xs` behaviour;
- `sm` behaviour where distinct;
- `md` behaviour;
- `lg+` behaviour;
- content that may hide;
- content that must never hide;
- whether artwork changes/crops;
- whether component switches to another component (e.g. `NAV-01` -> `NAV-02`);
- overflow policy;
- touch/keyboard behaviour;
- minimum practical width if relevant.

No component is considered fully specified without this responsive contract.

## 31. Responsive failure conditions

A responsive implementation fails QA if any of the following occurs:

- page-level horizontal overflow;
- clipped or overlapping text;
- navigation label overlap;
- ornamental border covering an interactive element;
- touch target becomes impractically small;
- focus indicator is clipped/invisible;
- critical information disappears at a breakpoint;
- image focal subject is unintentionally lost;
- table causes page-level overflow;
- layout order becomes confusing or semantically inconsistent;
- text becomes unreadably small to preserve desktop composition;
- state depends on hover on touch devices;
- decorative asset causes a large cumulative layout shift.

## 32. Implementation guidance

Use modern CSS layout before JavaScript:

- CSS Grid for page/component structure;
- Flexbox for local alignment;
- `minmax()`, `clamp()`, `auto-fit/auto-fill` where controlled;
- logical properties (`margin-inline`, `padding-inline`) where practical;
- media queries based on width/capability, not device names.

JavaScript must not be used merely to calculate ordinary responsive layout that CSS can handle.

## 33. M7 decisions locked

- `RSP-D001` — Mobile-first CSS strategy.
- `RSP-D002` — Canonical breakpoint boundaries: 480 / 768 / 1024 / 1280 / 1536 px.
- `RSP-D003` — 4 / 8 / 12 column grid progression.
- `RSP-D004` — Main content max width 1280 px; reading width target 720 px.
- `RSP-D005` — `NAV-01` desktop and `NAV-02` below `lg` by default.
- `RSP-D006` — No page-level horizontal scrolling.
- `RSP-D007` — Tables may use contained horizontal scrolling when necessary.
- `RSP-D008` — Decoration simplifies before content/text/control size is compromised.
- `RSP-D009` — Responsive images use art direction when focal composition requires it.
- `RSP-D010` — DOM order should follow reading priority; avoid accessibility-breaking visual reorder.
- `RSP-D011` — Minimum 44 × 44 px target guidance for touch controls.
- `RSP-D012` — P0/P1 components require explicit responsive contracts.

## 34. M7 exit criteria

M7 is complete when:

1. canonical breakpoints are defined;
2. container/grid/spacing rules are defined;
3. navigation transformation is defined;
4. P0 component families have a responsive direction;
5. image/art-direction rules are defined;
6. tables and content-overflow policies are defined;
7. touch, keyboard and reduced-motion constraints are defined;
8. canonical QA viewports are defined;
9. responsive failure conditions are explicit;
10. future agents are instructed to read this specification for UI work.
