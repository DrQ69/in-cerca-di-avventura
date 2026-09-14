# ICA Asset Specification

**Document ID:** ICA-ASSET-001  
**Status:** Approved specialist specification  
**Version:** 1.0  
**Milestone:** M6 — Asset Specification & Manifest  
**Authority:** subordinate to `docs/ICA_CANONICAL_SPEC.md`

## 1. Purpose

This document governs production, naming, storage, optimisation, accessibility, provenance and approval of all visual assets used by In Cerca di Avventura (ICA).

The historical Heraldry Kit is out of scope and must not influence current production.

## 2. Core principles

1. A **component** is structure/behaviour; an **asset** is a file used by a component.
2. Functional text, navigation and labels remain HTML whenever possible.
3. Assets are created from approved component/design specifications, not by cutting pieces from a reference sheet.
4. No file becomes production-approved only because it exists in the repository.
5. Responsive behaviour is defined by the component; asset pixel dimensions do not directly define CSS dimensions.
6. Accessibility and readability take precedence over ornament.
7. Reuse approved assets instead of generating near-duplicates.

## 3. Asset directory model

```text
assets/
  brand/
    sigils/
    logos/
  ui/
    buttons/
    frames/
    ornaments/
    heraldry/
    icons/
  backgrounds/
    textures/
    environments/
  banners/
    navigation/
    sections/
    campaigns/
  content/
    events/
    players/
    chronicles/
    venues/
    decks/
  system/
    favicon/
    social/
```

Existing root-level files may remain temporarily until migration is explicitly scheduled. Do not move or rename a production-used asset solely to satisfy this structure without updating every reference and validating rendering.

## 4. Naming

Documentation/component IDs use uppercase: `BTN-01`, `BNR-01`, `SIG-01`.

Filenames use lowercase:

```text
{component-or-entity-id}-{variant}[-{size}].{format}
```

Examples:

- `sig-01-primary.webp`
- `btn-01-default.webp`
- `btn-01-hover.webp`
- `bnr-01-left-lg.webp`
- `evt-2026-001-hero.webp`
- `ply-0001-portrait.webp`

Do not use ambiguous suffixes such as `final`, `new`, `best`, `definitivo`, `v2-final`.

Git preserves file history; version numbers belong in the manifest, not normally in filenames.

## 5. Formats

### SVG
Use only for genuine vector geometry. A raster image embedded inside an SVG wrapper is not an approved vector asset.

### WebP
Default raster format for UI art, banners, illustrations, textures and content derivatives.

### AVIF
Optional additional delivery format where it materially reduces weight without unacceptable visual degradation. WebP remains the fallback.

### PNG
Use only for justified technical/compatibility cases such as favicons or when workflow constraints require it.

### JPEG
May exist as source photography, but is not the preferred new UI delivery format.

## 6. Resolution and density

For raster UI assets:

- 1x may be used as fallback.
- 2x is the normal high-density target.
- 4K generation is not a default requirement.

The source should be large enough for the maximum real rendered size and intended crop, but should not be arbitrarily oversized.

## 7. Initial file-size budgets

| Asset type | Target | Maximum |
|---|---:|---:|
| Icon | 5–10 KB | 20 KB |
| Ornament | 10–25 KB | 50 KB |
| Raster button | 15–30 KB | 50 KB |
| Sigil/logo derivative | 20–50 KB | 80 KB |
| Card/content artwork | 80–160 KB | 220 KB |
| Section banner | 150–300 KB | 400 KB |
| Desktop hero | 250–400 KB | 500 KB |
| Mobile hero | 100–200 KB | 250 KB |

A justified exception must be documented in the manifest notes.

## 8. Safe areas and bounds

Every decorative structural asset must define:

- outer bounds;
- decorative bounds;
- content-safe area;
- bleed/crop allowance where relevant.

Default starting guidance when a component-specific specification does not exist:

- UI structural asset: 8% horizontal / 10% vertical safe margin;
- ornamental banner: 12% horizontal / 15% vertical safe margin;
- painterly hero: custom focal/safe area per artwork.

Buttons, navigation labels and other interactive controls must never overlap the ornamental border.

## 9. Transparency

Prefer transparent backgrounds for:

- frames;
- ornaments;
- sigils;
- heraldic elements;
- separators.

Full-background painterly or environmental artwork may be opaque.

## 10. Text inside assets

Do not bake the following into raster assets when they can be HTML:

- navigation labels;
- page/section titles;
- CTA labels;
- dates;
- event metadata;
- body copy.

Text may be intrinsic to an official logo or intentionally part of an illustration.

## 11. Accessibility metadata

Every manifest entry must classify the asset as either:

- `decorative`: rendered with empty alt text or CSS background where appropriate;
- `informative`: requires meaningful alt text at usage point.

Essential state may not be encoded only by colour.

## 12. Provenance and rights

Where relevant, production assets record:

- source type;
- creator;
- licence/permission status;
- credit;
- generation method;
- source/master location if available.

Do not silently treat third-party or Sorcery artwork as reusable production art without an approved basis.

## 13. AI-generated assets

Required lifecycle:

`GENERATED -> VISUAL REVIEW -> CLEANUP/CROP -> SIZE/FORMAT -> OPTIMISE -> MANIFEST -> QA -> APPROVED`

Generated reference sheets are **reference only** and must not be sliced into production assets.

## 14. Asset statuses

Allowed manifest statuses:

- `planned`
- `concept`
- `candidate`
- `approved`
- `deprecated`
- `archived`

Only `approved` assets may be treated as canonical production assets.

## 15. Versioning

Use semantic-like asset versions such as `1.0`, `1.1`, `2.0` in the manifest.

Increment guidance:

- patch/minor: optimisation, crop or non-structural improvement preserving role;
- major: visual/structural change that may require QA or component reapproval.

## 16. P0 asset families

The first production asset set required to support the base ICA UI is:

1. `SIG-01` — official ICA sigil/emblem derivatives.
2. `BNR-01` — main navigation/banner structural asset family.
3. `BNR-02` — section hero/banner family.
4. `BOR-01` — primary reusable frame/border.
5. `ORN-01` — divider.
6. `ORN-02` — endpoint/corner/terminal ornament.
7. `BTN-01` — primary CTA visual treatment if raster support is actually required; prefer CSS where feasible.
8. `SYS-FAVICON-01` — favicon family.
9. `MED-HERO-01` — homepage hero artwork/derivatives.

P0 does **not** mean each item must be a raster image. The component may be implemented with CSS/SVG if that better satisfies performance, accessibility and responsive requirements.

## 17. Existing repository assets — current classification

At M6 start, the visible production branch contains:

- `assets/logo-emblem.webp` — **candidate** brand source/derivative; not automatically approved as a complete `SIG-01` family.
- `assets/hero-fantasy.webp` — **candidate** homepage hero; must pass visual and responsive QA before canonical approval.
- `assets/favicon-32.png` — **candidate** favicon derivative.

CSS and JavaScript directories are not asset-manifest entries.

## 18. Manifest requirements

Canonical manifest path:

`assets/manifest.json`

Each entry should record at minimum:

- stable asset ID;
- component/entity relation;
- path or planned path;
- role;
- category;
- format;
- status;
- version;
- responsive applicability;
- accessibility classification;
- provenance/source type;
- file-size budget category;
- notes/constraints.

For existing files, `exists` may be true. Planned assets may be registered before the binary exists with `exists: false` and `status: planned`.

## 19. Approval gate

An asset may move to `approved` only after all applicable checks pass:

- role and component relation are clear;
- filename/path comply;
- binary renders correctly;
- dimensions/crop are appropriate;
- file size is within budget or exception documented;
- safe area is known for structural art;
- desktop/mobile usage is validated where relevant;
- accessibility classification is correct;
- provenance/rights are documented where relevant;
- no important copy is unnecessarily baked into the image;
- asset matches ICA Design Foundation and Sorcery-specific visual language.

## 20. M6 exit criteria

M6 is complete when:

1. this specification is approved;
2. `assets/manifest.json` exists and validates as JSON;
3. all currently used visual assets are registered;
4. P0 missing asset families are registered as `planned`;
5. no historical Heraldry Kit dependency remains;
6. naming/status/provenance rules are unambiguous;
7. next production asset to create can be identified directly from the manifest without inventing requirements.
