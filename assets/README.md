# ICA Assets

Visual assets for **In Cerca di Avventura** are governed by:

1. `docs/ICA_CANONICAL_SPEC.md`
2. `docs/ASSET_SPECIFICATION.md`
3. `assets/manifest.json`

## Rules

- The historical Heraldry Kit is out of scope.
- Do not add, rename, replace or optimise a visual asset without updating `assets/manifest.json` in the same coherent work block.
- A binary file is not canonical merely because it exists in `assets/`.
- Only manifest entries with `status: "approved"` are canonical production assets.
- Planned asset families may appear in the manifest before binary creation.
- Keep navigation, titles, CTA labels and other important copy as HTML whenever possible.
- Generated reference sheets are reference material only; never slice them into production assets.
- Use genuine SVG only for genuine vector geometry.
- Respect component safe areas, file-size budgets, responsive behaviour, accessibility classification and provenance requirements from the asset specification.

## Current M6 state

The repository currently contains three root-level visual assets registered as **candidates**:

- `logo-emblem.webp`
- `hero-fantasy.webp`
- `favicon-32.png`

They may continue to serve the existing implementation while M6 defines the canonical P0 asset families. Do not migrate paths merely for tidiness; migration must be deliberate, references must be updated, and rendering must be tested.
