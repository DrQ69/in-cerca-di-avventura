# In Cerca di Avventura — Canonical Project Specification

**Document ID:** ICA-CANON-001  
**Status:** Canonical  
**Version:** 1.1  
**Purpose:** single source of truth for product, content, design, asset and implementation decisions.

> If another repository document, prototype, screenshot, generated image, placeholder, previous asset kit or AI conversation conflicts with this file, this file wins unless the Product Owner explicitly approves a newer decision and this file is updated.

---

## 1. Authority hierarchy

Use this order when resolving conflicts:

1. Explicit current Product Owner decision.
2. `docs/ICA_CANONICAL_SPEC.md`.
3. Approved specialist specifications referenced by this file.
4. Verified source data supplied for a specific task.
5. Current implementation.
6. Prototype copy, generated visuals and historical drafts.

The repository, not chat history, is the long-term source of truth.

### Source integrity

- Never invent events, dates, fees, results, standings, prizes, player data, partner data, card data or editorial facts.
- Prototype or demo content is not factual merely because it is rendered on the live site.
- For Sorcery game terminology and mechanics, use the supplied official Sorcery: Contested Realm rulebook or another explicitly approved authoritative source.
- When information is missing, mark it as unknown/provisional or ask for confirmation.

---

## 2. Product identity

**In Cerca di Avventura (ICA)** is an Italian community ecosystem dedicated **exclusively to Sorcery: Contested Realm**.

It must not evolve into a general TCG portal.

ICA exists to connect four functions:

1. inform;
2. organise;
3. narrate;
4. preserve community memory.

ICA should feel like a living fantasy place — part archive, gathering hall, chronicle, map and campaign world — rather than a generic events website.

### Community principle

ICA is intended to be perceived as **heritage of the community**, not primarily as a personal site.

### Initial operating model

The first product phase is centrally administered.

Do **not** introduce without explicit approval:

- public registration;
- login;
- self-service user profiles;
- user-generated publishing;
- comments/forum;
- messaging;
- public uploads;
- marketplace;
- payments;
- multi-user editorial workflows.

The administrator creates and maintains player profiles, events, results, chronicles and related content.

### Future commercial scope

Future partnerships, sponsorships, services and marketplace functions are allowed as future possibilities, but they are **not current requirements** and must not drive present architecture.

Commercial additions must not undermine community trust, editorial independence, usability or the perception of ICA as a community asset.

---

## 3. Narrative model

ICA uses a real-world layer and a diegetic layer at the same time.

Examples:

- Event -> **Impresa**
- Player -> **Avventuriero**
- Article/report -> **Cronaca**
- Season/circuit -> **Campagna / Era**
- Community geography -> **Il Reame**

Narrative language may reinterpret and celebrate real activity, but it must never alter factual results, people, dates or events.

### Core editorial principle

Sorcery itself treats gameplay as a story unfolding through events. ICA extends that principle at community scale:

**partite -> Imprese -> Campagne -> Ere -> storia della community**.

The site should feel like a persistent chronicle, not a disposable news feed.

---

## 4. Approved information architecture

Primary navigation:

1. **Imprese**
2. **Campagne**
3. **Avventurieri**
4. **Cronache**
5. **Il Reame**
6. **Archivio**

The ICA emblem/logo links to Home.

Institutional/legal content belongs in secondary navigation/footer unless there is a specific reason otherwise.

### Home

Home is an editorial dashboard of the current ICA world, not a directory of every page.

Recommended composition:

1. ICA hero;
2. next Impresa;
3. active Campagna;
4. latest Cronache;
5. featured Avventurieri;
6. content from Il Reame;
7. Archive entry point;
8. footer.

### Imprese

An Impresa is a persistent Event entity. Its page evolves across its lifecycle rather than being replaced.

Lifecycle:

`announced -> registration_open -> upcoming -> ongoing -> completed -> archived`

Possible event types include league stage, final, standalone, special and community event.

Possible formats include constructed, draft, chaos draft, sealed, team and other.

### Campagne

A Campagna is a persistent hub for a league, circuit or structured series of events. It may contain an Era, calendar, Imprese, ranking, Avventurieri, Cronache, statistics and final outcome.

Each Campagna may use a **different scoring system**. Never assume Blaze of Glory scoring is universal.

### Avventurieri

Public player identity is based **only on nickname**.

Do not expose real names, email addresses, phone numbers or private notes in public data.

An Avventuriero profile may aggregate results, events, decks, achievements, chronicles and narrative identity.

### Cronache

Cronache are editorial/narrative content and should link bidirectionally to relevant entities when useful.

### Il Reame

Il Reame represents the physical and social geography of the Sorcery community: venues, stores, clubs, associations, communities, organisers and future partners.

### Archivio

Archivio is a cross-cutting historical discovery/search layer. It may later filter by year, Era, Campagna, venue, format, Avventuriero and content type.

### Relationship rule

Important relationships should be navigable in both directions in the UI whenever useful, even when the underlying data is stored only once.

Examples:

- Avventuriero <-> Impresa
- Impresa <-> Venue
- Impresa <-> Cronaca
- Campagna <-> Impresa
- Campagna <-> Avventuriero

---

## 5. Content model principles

### Permanent IDs

Every persistent entity receives a stable internal ID that is never reused.

Recommended prefixes:

- `ERA-`
- `CAM-`
- `EVT-`
- `PLY-`
- `VEN-`
- `ORG-`
- `CHR-`
- `RES-`
- `DEK-`
- `ACH-`

Public URLs use stable readable slugs, separate from internal IDs.

### Single source of truth

Do not duplicate information that can be derived from another entity relation.

Primary ownership examples:

- nickname -> PLAYER
- event facts -> EVENT
- venue facts -> VENUE
- result -> RESULT
- decklist -> DECK
- campaign scoring rules -> CAMPAIGN
- chronicle body -> ARTICLE/CHRONICLE

### Results

The first version records only:

- event;
- player;
- final position;
- wins;
- losses;
- draws;
- campaign points where applicable;
- deck used where known;
- notes.

Do **not** introduce a MATCH entity or round-by-round pairing model unless explicitly approved later.

### Campaign rankings

Rankings should be derived from RESULT records plus that Campaign's scoring rules wherever possible. Bonus, penalty and discard rules must be represented explicitly rather than silently editing totals.

---

## 6. Sorcery-specific model

Do not treat Sorcery decks like generic TCG decks.

A Sorcery deck presentation must distinguish:

- exactly one **Avatar**;
- **Atlas** containing Sites;
- **Spellbook** containing Spells.

The supplied rulebook establishes a minimum of 30 Sites in the Atlas and 60 Spells in the Spellbook for constructed deck building. Card rarity also constrains permitted copy counts.

Spell categories include:

- Minion;
- Artifact;
- Aura;
- Magic.

### Avventuriero vs Avatar

These are never synonyms in ICA:

- **Avventuriero** = community player identity / nickname.
- **Avatar** = Sorcery game card used by a deck.

### Four Elements

The Sorcery-specific visual/data layer recognises:

- Air;
- Earth;
- Fire;
- Water.

Use them as a secondary system for deck affinity, filters, statistics, badges and restrained visual accents. They must not replace the core ICA palette.

### Realm grammar

The Sorcery Realm is a 5x4 grid of twenty squares and distinguishes regions such as Void, Surface, Underground and Underwater. ICA may borrow this as a visual/compositional metaphor for community geography, mapping and patterns, but must not imply that the website UI itself is the literal game board.

---

## 7. Design foundation

### Visual north star

ICA should feel like an **old-school fantasy artefact brought to the web**: traditional fantasy illustration, medieval heraldry, blackened metal, antique gold, deep blue, stone, parchment and restrained arcane accents.

The design should feel handcrafted and physical while being implemented with modern systematic precision.

### Avoid

- SaaS/dashboard aesthetics;
- glossy corporate landing-page language;
- generic mobile-game fantasy UI;
- neon/high-saturation HUD styling;
- excessive rounded cards;
- decorative clutter that reduces legibility;
- generic beige parchment covering everything;
- arbitrary visual styles introduced per page.

### Material system

Core materials:

- Night / Void darkness;
- deep blue / velvet-blue surfaces;
- blackened iron / steel;
- dark stone;
- antique gold / bronze;
- parchment / warm ivory reading surfaces;
- restrained elemental accents.

Gold communicates hierarchy and preciousness and must not cover every element.

### UI vs art

**Disciplined UI, expressive art.**

UI must remain systematic, readable and reusable. Illustration may be more painterly, colourful and atmospheric.

### Typography

Current working direction:

- display/narrative: Cinzel-family treatment;
- reading/interface: a highly readable text face.

Typography is not considered permanently locked until tested in real HTML at desktop and mobile sizes. Do not introduce new font families casually.

### Ornament density

Use ornament according to hierarchy:

- major hero/banner: high;
- section heading: medium-high;
- card: medium;
- table/data: low;
- body text: minimal.

One strong focal point is preferable to many competing ornaments.

### Responsive art direction

Mobile is not a scaled-down desktop. A component may simplify, rearrange, hide decorative elements or use a dedicated mobile variant.

---

## 8. Component system

Component IDs follow `FAMILY-NUMBER[-VARIANT]`.

Examples:

- `NAV-01`
- `BTN-01`
- `BNR-01`
- `CRD-01`
- `ENT-01`
- `TBL-01`
- `BDG-01`
- `DCK-01`
- `SYS-01`

### Primary families

- `SIG` brand/sigil
- `NAV` navigation
- `BTN` buttons
- `BNR` banners
- `HDR` section headers
- `CRD` cards
- `ENT` entity headers
- `BDG` badges/status
- `ELM` element markers
- `RLM` Realm-related visuals
- `TBL` tables
- `DCK` deck/decklist components
- `EDT` editorial components
- `MED` media/gallery
- `FRM` form controls
- `FLT` filters
- `SYS` system/empty/error states
- `ORN` ornaments
- `BOR` visual borders/frames

**Important:** `FRM` is reserved for forms. Use `BOR` for visual frames/borders.

### Formal object lifecycle

ICA uses one formal lifecycle across components and other governed objects:

`SPECIFIED -> IMPLEMENTED -> VERIFIED -> APPROVED -> DEPRECATED`

`CONCEPT`, `DESIGNED` and `QA IN PROGRESS` may be used as workflow labels, but they are not additional formal lifecycle states.

AI agents, automated checks and developers may support/recommend `VERIFIED`; only the Product Owner may assign `APPROVED` unless a future written delegation explicitly grants authority.

An AI-generated image is never automatically an approved component.

### Variant rule

If purpose and semantic structure remain the same, prefer a variant of an existing component over a new component ID.

---

## 9. Asset system

### Ignore historical Heraldry Kit

Any prior local or historical Heraldry Kit is **out of scope** and must not influence current decisions, naming or implementation unless explicitly reintroduced by the Product Owner.

### Asset vs component

A component is behaviour/structure. An asset is a file used by that component.

Example:

- `BTN-01` = component;
- `btn-01-default.webp` = asset.

### Recommended asset structure

```text
assets/
  brand/
  ui/
    buttons/
    frames/
    ornaments/
    heraldry/
    icons/
  backgrounds/
  banners/
  content/
  system/
```

### Naming

Use lowercase filenames based on component/entity IDs:

`{component-id}-{variant}-{size}.{format}`

Examples:

- `btn-01-default.webp`
- `bnr-01-left-lg.webp`
- `evt-2026-001-hero.webp`

Do not use names such as `final`, `new2`, `best`, `definitivo3`.

### Format rules

- SVG only for genuinely vector geometry.
- WebP is the default complex raster format.
- AVIF may supplement WebP where useful.
- PNG only for justified compatibility/technical transparency cases.
- JPG may remain for source photography but is not preferred for new UI assets.

Never claim a raster image wrapped in SVG is a true vector asset.

### Text in images

Keep navigation, headings, body copy and important labels in HTML whenever possible. Rasterised text is allowed only when intrinsic to a logo or intentional artwork.

### Safe area

Every structural decorative asset must define content-safe boundaries. Controls and text must remain inside the safe zone and must never overlap ornamental borders.

### AI-generated asset workflow

`GENERATED -> VISUAL REVIEW -> CLEANUP/CROP -> SIZE/FORMAT -> OPTIMISE -> MANIFEST -> QA -> APPROVED`

Reference sheets are inspiration/specification aids, not cut-apart production asset sheets.

### Provenance

Production assets should be able to record source, creator, licence/permission, credit and generation method where relevant.

---

## 10. Technical constraints

Until a documented requirement proves otherwise:

- static HTML;
- shared CSS;
- lightweight JavaScript;
- GitHub Pages;
- no framework;
- no package manager requirement;
- no CMS;
- no backend;
- no database;
- no authentication.

Do not introduce React, Next.js, Astro, Eleventy or other frameworks simply because they are convenient. Reassess only when actual maintenance burden or functional requirements justify the change.

Prefer semantic HTML, reusable CSS classes, shared tokens and data structures over copied markup and one-off styles.

---

## 11. Responsive baseline

Canonical responsive width boundaries are defined by `docs/RESPONSIVE_SPECIFICATION.md`:

- 480px;
- 768px;
- 1024px;
- 1280px;
- 1536px.

Required QA width coverage includes 360, 390, 768, 1024, 1280, 1440 and 1920px where applicable, plus relevant short-landscape/orientation tests.

Component-specific local breakpoints are allowed only when a documented fit failure justifies them.

No page-level horizontal overflow is acceptable unless explicitly required by a deliberate contained data-table interaction pattern.

---

## 12. Accessibility baseline

Required principles:

- semantic headings and landmarks;
- keyboard-operable navigation and controls;
- visible focus states;
- readable colour contrast;
- useful alt text for informative images;
- empty alt/CSS background for decorative images;
- do not communicate essential state through colour alone;
- practical text sizes and line lengths;
- respect `prefers-reduced-motion` for non-essential animation.

Accessibility takes precedence over ornament.

---

## 13. Content and editorial rules

Italian is the default public language unless a page is explicitly international/bilingual.

Narrative terminology must not make basic functions unclear. Pair diegetic language with functional context when needed.

Example:

**Il Rituale**  
Gothic Draft — 16 settembre 2026 — Game Lover, Crema

Narrative copy may be evocative, solemn or lightly ironic, but must not become opaque pseudo-medieval language.

---

## 14. Change-control protocol

Before any non-trivial change:

1. read this canonical specification;
2. use `docs/PROJECT_INDEX.md` to select the specialist specifications required by the task;
3. inspect the current repository state and relevant implementation files;
4. identify affected entities/components/assets;
5. state assumptions and unknowns;
6. make the smallest coherent change;
7. preserve approved architecture, data ownership and component IDs;
8. run applicable responsive/accessibility/QA checks;
9. verify that referenced assets actually exist and render;
10. summarise exactly what changed and any remaining uncertainty.

### Never silently reinterpret a locked decision

If a task appears to require breaking a locked decision, stop and surface the conflict before implementing it.

---

## 15. Completion and QA model

The dedicated completion and QA systems supersede the former interim Definition of Done.

Use:

- `docs/DEFINITION_OF_DONE.md`;
- `docs/M8_1_DOD_GOVERNANCE_HARDENING.md`;
- `docs/QA_CHECKLIST.md`;
- `docs/M9_1_QA_EXECUTION_MODEL.md`.

Formal lifecycle:

`SPECIFIED -> IMPLEMENTED -> VERIFIED -> APPROVED -> DEPRECATED`

Release readiness is separate:

`NOT_READY -> STAGING_READY -> PRODUCTION_READY`

A merged PR is not automatic evidence of VERIFIED, APPROVED or PRODUCTION_READY.

Non-trivial verification requires current structured evidence. No Critical or High defect is acceptable for production readiness.

---

## 16. Current locked project decisions

The following are locked until explicitly changed by the Product Owner and documented here:

- ICA is Sorcery-only.
- Initial administration is centralised; no public accounts.
- Public Avventuriero identity is nickname-only.
- Future commercial features are possible but not current scope.
- ICA is community heritage, not primarily a personal site.
- The narrative layer is a true persistent diegetic universe grounded in real facts.
- Primary navigation is Imprese / Campagne / Avventurieri / Cronache / Il Reame / Archivio.
- Important entity URLs should remain stable.
- Results are W/L/D + placement, not round-by-round matches.
- Each Campagna may define its own scoring system.
- Decklists are complete and structured as Avatar + Atlas + Spellbook.
- Sorcery Air/Earth/Fire/Water form a secondary visual/data layer.
- UI is disciplined; art may be expressive and painterly.
- Historical Heraldry Kit is ignored.
- Static HTML/CSS/JS remains the current technical baseline.
- Responsive architecture follows the approved M7 specification and is verified through M7.1/M9 evidence rather than legacy CSS assumptions.

---

## 17. Known items not yet permanently locked

Do not invent final answers for these until explicitly approved:

- final production font pairing;
- final exact colour token values after in-browser validation;
- final production dimensions for individual banner/button/frame assets;
- content-driven NAV-01 desktop activation width if real production-fit testing requires a local breakpoint above 1024px;
- future search implementation;
- future CMS/static-site-generator decision;
- future account, marketplace, sponsorship or payment architecture.

These are deliberate open items, not omissions.