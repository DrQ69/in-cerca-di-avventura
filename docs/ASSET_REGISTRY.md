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

Reserved families:

- `SIG` — sigils, crests, official identity marks;
- `BNR` — banners and banner systems;
- `HRD` — herald standards / araldi;
- `BTN` — decorative button families;
- `FRM` — frames and plaques;
- `ORN` — ornaments and separators;
- `HRO` — hero artwork families;
- `ICO` — interface icons.

The code is an identity, not a filename. Filenames may change for technical reasons while the asset code remains stable.

A registered identity may have named technical variants or components. Examples: `SIG-01-GLOW`, `BNR-01-L`, `BNR-01-C`, `BNR-01-R`, and `BTN-01-HOVER`. The base identity remains `SIG-01`, `BNR-01`, or `BTN-01`.

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

## Provenance rule

An asset can become canonical through explicit human approval even when the original native source/master is unavailable, but the registry must state that provenance accurately.

For **Heraldry Kit v1.0**, the approved transparent PNGs are AI-assisted reconstructions derived from the owner-supplied composite heraldry sheet. They are approved project assets, but they are **not represented as the lost/original native masters** from which the composite sheet was originally assembled.

## Canonical records

### SIG-01 — Official In Cerca di Avventura emblem

**Family:** SIG  
**Status:** APPROVED  
**Role:** Primary identity mark and heraldic anchor for the site.

**Current production derivative:**

- `assets/logo-emblem.webp`

**Approved Heraldry Kit v1.0 source-quality reconstruction:**

- `SIG-01.png` — 1161 × 1355 px, transparent PNG.

**Approved technical variant:**

- `SIG-01-GLOW.png` — 1161 × 1355 px, transparent PNG with blue luminous treatment.

**Repository usage currently confirmed:**

- site header/brand;
- decorative sigil treatment in section headers through CSS.

**Canonical rules:**

- preserve geometry and proportions;
- do not silently replace the current production emblem;
- do not recolour without explicit approval;
- do not crop essential emblem elements;
- do not bake destructive backgrounds into the canonical transparent reconstruction;
- derivatives may be resized/compressed for delivery but must remain faithful;
- `SIG-01-GLOW` is a visual variant of `SIG-01`, not a separate identity;
- where an approved araldo/herald standard is used, the official emblem is expected to appear unless the project owner explicitly approves an exception.

**Provenance / approval:**

The owner explicitly approved the reconstructed transparent Heraldry Kit v1.0 version on 2026-09-12. The pre-existing `assets/logo-emblem.webp` remains the active production derivative until a separate implementation change is reviewed.

---

### FRM-01 — Heraldic circular frame

**Family:** FRM  
**Status:** APPROVED  
**Approved filename:** `CRE-01.png`  
**Dimensions:** 1619 × 971 px  
**Format:** transparent PNG  
**Role:** Large ceremonial frame/plaque with circular opening, antique-gold metalwork, blue gems, dragon-wing ornamentation and blue drapery.

**Allowed uses:** featured heraldry, ceremonial callouts, profile/crest framing, special section compositions.  
**Rule:** preserve the open central aperture and overall left/right symmetry.

---

### BNR-01 — Modular heraldic banner system

**Family:** BNR  
**Status:** APPROVED  
**Role:** Primary modular section-header/banner family.

**Approved components:**

- `BNR-01-L` → approved filename `BAN-LEFT.png` — 1619 × 971 px, transparent PNG;
- `BNR-01-C` → approved filename `BAN-CENTER.png` — 2172 × 724 px, transparent PNG;
- `BNR-01-R` → approved filename `BAN-RIGHT.png` — 1619 × 971 px, transparent PNG.

**Composition rule:**

`BNR-01-L + BNR-01-C + BNR-01-R`

**Canonical rules:**

- treat the three files as components of one banner identity;
- preserve the blue velvet / antique-gold / blue-gem visual language;
- the center component is the preferred content-bearing region;
- important titles and functional copy should remain real HTML text where practical rather than being baked into the image;
- responsive implementations may overlap/crop/reposition components non-destructively, but must not deform them;
- simplified responsive derivatives require review before being treated as canonical.

---

### BTN-01 — Heraldic button family

**Family:** BTN  
**Status:** APPROVED  
**Role:** Primary decorative CTA/button frame family.

**Approved states:**

- default → `BTN-01.png` — 2172 × 724 px, transparent PNG;
- hover → `BTN-01-HOVER.png` — 2172 × 724 px, transparent PNG.

**Canonical rules:**

- default and hover are states of the same component, not separate button identities;
- button labels should remain accessible HTML text;
- do not stretch disproportionately;
- preserve sufficient central safe area for live text;
- interaction states must remain keyboard-accessible and must not rely on visual glow alone to communicate focus.

---

### ORN-01 — Heraldic raven, right-facing

**Family:** ORN  
**Status:** APPROVED  
**Approved filename:** `RAV-01.png`  
**Dimensions:** 1322 × 1190 px  
**Format:** transparent PNG  
**Role:** Black raven ornament holding a gold chain and blue jewel pendant.

---

### ORN-02 — Heraldic raven, left-facing

**Family:** ORN  
**Status:** APPROVED  
**Approved filename:** `RAV-02.png`  
**Dimensions:** 1322 × 1190 px  
**Format:** transparent PNG  
**Role:** Mirrored companion raven for symmetrical heraldic compositions.

**Pairing rule for ORN-01 / ORN-02:** preserve their opposing orientation when used as a matched pair.

---

### ORN-03 — Gothic gem divider

**Family:** ORN  
**Status:** APPROVED  
**Approved filename:** `ORN-03.png`  
**Dimensions:** 1774 × 887 px  
**Format:** transparent PNG  
**Role:** Horizontal antique-gold thorn/filigree divider with central blue gemstone.

---

### ORN-04 — Heraldic compass star

**Family:** ORN  
**Status:** APPROVED  
**Approved filename:** `STA-01.png`  
**Dimensions:** 1254 × 1254 px  
**Format:** transparent PNG  
**Role:** Eight-point antique-gold star/compass ornament.

---

### ORN-05 — Blue gem, large

**Family:** ORN  
**Status:** APPROVED  
**Approved filename:** `GEM-01.png`  
**Dimensions:** 971 × 1619 px  
**Format:** transparent PNG  
**Role:** Large faceted blue jewel in antique-gold setting.

---

### ORN-06 — Blue gem, medium

**Family:** ORN  
**Status:** APPROVED  
**Approved filename:** `GEM-02.png`  
**Dimensions:** 948 × 1659 px  
**Format:** transparent PNG  
**Role:** Medium faceted blue jewel in antique-gold setting.

---

### ORN-07 — Blue gem, small

**Family:** ORN  
**Status:** APPROVED  
**Approved filename:** `GEM-03.png`  
**Dimensions:** 887 × 1774 px  
**Format:** transparent PNG  
**Role:** Small faceted blue jewel in antique-gold setting.

**Gem-family rule for ORN-05 / ORN-06 / ORN-07:** use the appropriate approved size family rather than arbitrarily distorting one gem to extreme proportions.

---

### ORN-08 — Hanging blue-gem pendant

**Family:** ORN  
**Status:** APPROVED  
**Approved filename:** `PEN-01.png`  
**Dimensions:** 887 × 1774 px  
**Format:** transparent PNG  
**Role:** Short gold chain with hanging blue jewel pendant.

---

### ORN-09 — Decorative gold chain

**Family:** ORN  
**Status:** APPROVED  
**Approved filename:** `GHA-01.png`  
**Dimensions:** 2172 × 724 px  
**Format:** transparent PNG  
**Role:** Curved antique-gold chain for heraldic compositions and suspended ornamentation.

---

### ORN-10 — Blue magical glow ring

**Family:** ORN  
**Status:** APPROVED  
**Approved filename:** `GLOW-01.png`  
**Dimensions:** 1254 × 1254 px  
**Format:** transparent PNG  
**Role:** Circular electric-blue luminous ring/halo effect.

**Rule:** use as a secondary effect; it must not become the dominant visual language or introduce a generic neon aesthetic inconsistent with `ART_DIRECTION.md`.

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

## Heraldry Kit v1.0 — approval record

**Status:** APPROVED  
**Owner approval date:** 2026-09-12  
**Approved item count:** 18 PNG files  
**Technical property checked before approval:** all 18 reconstructed files contain alpha transparency.

The approved kit comprises:

- 2 SIG files/states (`SIG-01`, `SIG-01-GLOW`);
- 1 FRM asset (`FRM-01`, approved source filename `CRE-01.png`);
- 3 BNR components forming `BNR-01`;
- 2 BTN states forming `BTN-01`;
- 10 ORN assets (`ORN-01` through `ORN-10`).

**Source/master location:** not yet committed to the repository. The reviewed approval package exists outside GitHub as `Heraldry_Kit_v1_CANDIDATE.zip` and should be treated as the approved source package for the next import step.

**Important provenance note:** these approved PNGs are reconstructed project masters derived from the supplied composite sheet. They are canonical for this project by explicit owner approval, but they are not claimed to be the original native source files used to create that sheet.

## Production derivative policy

For approved source-quality PNGs:

1. retain the approved transparent PNG without destructive editing;
2. create web delivery derivatives separately, normally WebP or optimized PNG as appropriate;
3. record derivative paths here when committed;
4. never replace the source-quality approved reconstruction with a compressed delivery file;
5. visual fidelity takes priority over marginal byte savings for identity-defining assets;
6. verify responsive behaviour before production use.

## Asset intake workflow

For each new visual asset:

1. determine whether an existing registered asset already fulfils the need;
2. assign a stable three-letter code only when the role is clear;
3. mark new work `CONCEPT` or `CANDIDATE` first;
4. verify visual coherence against `ART_DIRECTION.md`;
5. verify web usability and responsive behaviour against `DESIGN_SYSTEM.md`;
6. record production derivatives separately from masters;
7. change status to `APPROVED` only after explicit human review;
8. update this registry in the same PR that introduces an approved asset or records its approval.

## Agent rules

AI agents must:

- consult this registry before creating or replacing visual assets;
- prefer approved existing assets over unnecessary regeneration;
- never silently replace an `APPROVED` asset;
- never promote a concept to `APPROVED` on their own;
- state clearly when a required master/source asset is unavailable;
- keep asset identity codes stable across technical file-format changes;
- distinguish approved reconstructed masters from original native source files when provenance differs.

## Next inventory / implementation work

- import the 18 approved Heraldry Kit v1.0 PNGs into an explicit source/master asset location;
- create reviewed web-delivery derivatives without overwriting the approved sources;
- integrate `BNR-01` and `BTN-01` first;
- test responsive behaviour and accessibility;
- record final repository paths and derivatives in this registry;
- catalogue future herald standards (`HRD`) when introduced.
