# Asset Registry — In Cerca di Avventura

## Purpose

This registry is the canonical inventory of visual assets used by **In Cerca di Avventura**.

It exists so humans and AI agents can distinguish between:

- canonical assets;
- approved web derivatives;
- concepts still under development;
- deprecated or rejected assets;
- files that exist in the repository but are not authoritative design references.

An asset must not be treated as canonical merely because a file exists.

## Naming convention

Stable asset codes use a three-letter family prefix plus a numeric identifier.

Initial reserved families:

- `SIG` — sigils, crests, official identity marks;
- `BNR` — banners and banner systems;
- `HRD` — herald standards / araldi;
- `BTN` — decorative button families;
- `FRM` — frames and plaques;
- `ORN` — ornaments and separators;
- `HRO` — hero artwork families;
- `ICO` — interface icons.

The code is an identity, not a filename. Filenames may change for technical reasons while the asset code remains stable.

## Status values

Use one of:

- **CONCEPT** — exploratory only;
- **CANDIDATE** — ready for review/testing;
- **APPROVED** — canonical and safe for production use;
- **DEPRECATED** — historical; do not use for new work;
- **REJECTED** — explicitly rejected; do not reintroduce without review.

## Required record fields

Every canonical asset should eventually record:

- code;
- name;
- family;
- status;
- role;
- source/master location;
- production derivative(s);
- file format(s);
- dimensions/aspect ratio where relevant;
- transparency/background rules;
- colour/lighting constraints;
- safe area / crop rules;
- responsive behaviour;
- allowed uses;
- forbidden transformations;
- dependencies;
- approval notes/version.

## Canonical records

### SIG-01 — Official In Cerca di Avventura emblem

**Family:** SIG  
**Status:** APPROVED  
**Role:** Primary identity mark and heraldic anchor for the site.

**Current production derivative:**

- `assets/logo-emblem.webp`

**Repository usage currently confirmed:**

- site header/brand;
- decorative sigil treatment in section headers through CSS.

**Canonical rules:**

- preserve geometry and proportions;
- do not redraw or reinterpret;
- do not recolour without explicit approval;
- do not crop essential emblem elements;
- do not bake destructive shadows/backgrounds into the canonical master;
- derivatives may be resized/compressed for delivery but must remain faithful;
- where an approved araldo/herald standard is used, the official emblem is expected to appear unless the project owner explicitly approves an exception.

**Source/master note:**

The currently committed `assets/logo-emblem.webp` is the active web derivative. A separately catalogued source-quality master with transparent background should be added when available and then recorded here without changing the identity code `SIG-01`.

---

### HRO-01 — Current homepage hero artwork

**Family:** HRO  
**Status:** APPROVED FOR CURRENT SITE USE  
**Role:** Homepage atmospheric hero artwork.

**Current production derivative:**

- `assets/hero-fantasy.webp`

**Rules:**

- preserve the current identity/world-building role;
- crop responsively through CSS rather than destructively modifying the only source;
- maintain readable overlay contrast;
- do not infer that this asset establishes a new visual language independent of `ART_DIRECTION.md`.

---

### ICO-01 — Current favicon

**Family:** ICO  
**Status:** APPROVED FOR CURRENT SITE USE  
**Role:** Browser/favicon identity derivative.

**Current production derivative:**

- `assets/favicon-32.png`

## Visual systems pending full inventory

### Modular banner system

The modular banner work is considered an established **design direction**, but its individual production-ready component files have not yet been fully catalogued in this repository.

Until individual files are added and approved:

- do not invent missing banner components;
- do not assume screenshots or flattened composites are canonical source assets;
- preserve the principle that the banner is assembled from reusable visual parts;
- preserve central text areas for real HTML text where practical;
- maintain visual coherence with `SIG-01` and `ART_DIRECTION.md`.

When the banner assets are introduced, assign stable `BNR`, `HRD`, `FRM`, `ORN` and/or `BTN` codes as appropriate.

## Asset intake workflow

For each new visual asset:

1. determine whether an existing registered asset already fulfils the need;
2. assign a stable three-letter code only when the role is clear;
3. mark new work `CONCEPT` or `CANDIDATE` first;
4. verify visual coherence against `ART_DIRECTION.md`;
5. verify web usability and responsive behaviour against `DESIGN_SYSTEM.md`;
6. record production derivatives separately from masters;
7. change status to `APPROVED` only after explicit review;
8. update this registry in the same PR that introduces an approved asset.

## Agent rules

AI agents must:

- consult this registry before creating or replacing visual assets;
- prefer approved existing assets over unnecessary regeneration;
- never silently replace an `APPROVED` asset;
- never promote a concept to `APPROVED` on their own;
- state clearly when a required master/source asset is unavailable;
- keep asset identity codes stable across technical file-format changes.

## Future inventory work

The next asset-inventory pass should catalogue the modular banner work in detail, including:

- herald standards;
- banner frame/body;
- side ornaments;
- button family;
- decorative separators;
- responsive/simplified variants;
- source-quality masters and delivery derivatives.
