# Design System — In Cerca di Avventura

## Visual north star

The site should feel like an **old-school fantasy artefact brought to the web**: a meeting point between classic 1980s fantasy illustration, dark medieval atmosphere, engraved metal, carved stone and restrained heraldic ornament.

The target mood is closer to:

- classic tabletop fantasy;
- old-school Dungeons & Dragons atmosphere;
- dark-fantasy adventure;
- Diablo II-era materiality and lighting;
- fantasy saga title treatments.

The site must **not** drift toward:

- SaaS/dashboard UI;
- glossy corporate landing pages;
- generic beige parchment everywhere;
- mobile-game fantasy UI;
- neon/high-saturation game HUDs;
- excessive ornamental clutter that hurts readability.

## Brand anchor

The official **In Cerca di Avventura** emblem is the primary visual reference.

Key characteristics to preserve in the broader interface:

- deep blue/black atmosphere;
- cracked blue-stone feeling;
- antique gold framing/details;
- dark metal/armour;
- small red accents;
- blue gem accents;
- heraldic/fantasy silhouette.

Do not redraw, recolour, distort or reinterpret the logo unless explicitly requested.

## Core palette

Current CSS tokens are a useful starting point, not an immutable final palette:

```css
--bg: #08090a;
--panel: #111419;
--panel2: #161b20;
--gold: #d4a84f;
--gold2: #f0cb79;
--blue: #12628e;
--text: #efe7d4;
--muted: #b7aa90;
```

### Usage principles

- **Black / blue-black**: page background and depth.
- **Deep stone blue**: secondary light, atmospheric gradients, subtle emphasis.
- **Antique gold**: titles, borders, important controls and selected accents.
- **Warm ivory**: main readable text.
- **Muted parchment/beige**: secondary text only.
- **Red**: very limited accent, used intentionally.
- **Steel**: borders, metallic secondary details and neutral ornament.

Avoid using gold on every element. Gold should communicate hierarchy and preciousness.

## Typography

Current families:

- **Cinzel Decorative** — major display headings;
- **Cinzel** — navigation, labels, fantasy-flavoured secondary headings;
- **Inter** — readable body/interface copy.

### Display headings

Major titles should feel monumental and carved:

- uppercase where appropriate;
- antique gold/metallic treatment;
- subtle bevel/relief illusion;
- dark outline/stroke;
- deep shadow;
- restrained ornament.

The effect should evoke a fantasy saga title, not a glowing game logo.

### Body text

Body copy must prioritise readability. Decorative serif/display fonts should not be used for long paragraphs.

## Layout

The interface should use strong, readable composition:

- wide atmospheric sections;
- clear vertical rhythm;
- strong section titles;
- contained content widths;
- generous negative space around decorative elements;
- symmetrical or heraldic framing where useful;
- responsive behaviour that remains usable on narrow screens.

Do not solve every section with identical rounded cards. The site can use variation: banners, stone panels, framed plaques, scroll-like strips, crests and character-sheet layouts, provided the system remains coherent.

## Surfaces and materials

Preferred visual materials:

- dark stone;
- cracked blue stone;
- blackened iron;
- aged steel;
- antique bronze/gold;
- engraved borders;
- restrained leather/wood only when contextually useful;
- smoke, night sky and warm torchlight as atmosphere.

Use material cues as subtle texture and framing, not as heavy photographic backgrounds behind body text.

## Cards

Event/result/alliance cards should eventually feel more like **fantasy plaques or artefacts** than generic web cards.

Recommended pattern:

- dark readable base;
- thin gold/steel border;
- small blue atmospheric highlight;
- optional corner/crest detail;
- clear hierarchy for date/title/metadata;
- enough padding for mobile readability;
- hover state that feels like light catching metal rather than a SaaS lift animation.

## Buttons

Primary buttons:

- antique gold / bronze treatment;
- dark text;
- hard or lightly rounded corners;
- subtle metallic highlight;
- restrained hover brightening.

Secondary buttons:

- dark surface;
- gold/steel border;
- gold/ivory text.

Avoid pill-shaped controls unless the content genuinely behaves like a tag/filter.

## Tags and metadata

Tags may be compact and capsule-like, but should remain visually secondary. Formats, locations, times and rounds should be scan-friendly and should not compete with the event title.

## Section ornaments

Preferred reusable assets/components:

- heraldic dividers;
- small sigils/crests;
- thin engraved separators;
- stone or metal header frames;
- subtle corner ornaments;
- banners/plaques for key section labels.

Generated decorative graphics are welcome when they support the design system, but important text must remain HTML wherever possible.

## Hero area

The hero should establish the world immediately:

- full-width fantasy artwork;
- strong focal subject;
- readable overlay controls;
- dark gradient for text legibility;
- preserve image composition across desktop/mobile using deliberate `object-position` adjustments.

If a hero image fails, the section should still look intentional through a dark/blue atmospheric fallback rather than an empty white or broken-image state.

## Avventurieri visual language

The Avventuriero profile should resemble a fantasy character sheet rather than a social profile card.

Possible structure:

- portrait/caricature as the hero identity;
- player name/nickname as character title;
- Sorcery Avatar as a primary attribute;
- record and event stats as compact attributes;
- titles/achievements as badges/insignia;
- result history as a readable table/list;
- preferred archetypes/decks as secondary lore-like information.

Keep real competitive data readable even when surrounded by decorative fantasy framing.

## Results visual language

Results should prioritise information clarity:

- ranking number must be obvious;
- player name clickable;
- record/score aligned consistently;
- podium positions may receive richer gold/silver/bronze treatment;
- do not sacrifice table readability for ornament.

## Accessibility

- Maintain readable contrast on dark surfaces.
- Keep body text at practical sizes.
- Use semantic HTML for titles, lists, tables and navigation.
- Give meaningful images appropriate alt text.
- Decorative images should use empty alt text or CSS backgrounds.
- Do not encode essential information through colour alone.
- Interactive targets must remain usable on mobile.

## Responsive design

Every significant visual change should be checked at least at:

- desktop around 1400px width;
- tablet around 768–900px;
- mobile around 390px width.

When a desktop ornament does not scale cleanly, simplify or hide the ornament rather than shrinking important content.

## Asset rules

- Prefer WebP/AVIF for large photographic/illustrative assets when supported by the workflow.
- Keep source-quality originals outside the public bundle when practical.
- Validate that binary assets are complete and actually render before merging.
- Avoid enormous images when a correctly sized derivative can be used.
- Do not place essential navigation or body copy only inside images.

## Change control

Before introducing a new visual language, ask:

1. Does it look like it belongs beside the official emblem?
2. Does it reinforce old-school dark fantasy rather than generic fantasy UI?
3. Is the information still easy to read?
4. Does it work on mobile?
5. Can the pattern be reused elsewhere?

If the answer to several of these is no, the component should be redesigned before merging.
