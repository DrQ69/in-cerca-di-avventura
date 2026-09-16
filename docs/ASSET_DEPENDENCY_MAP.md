# In Cerca di Avventura — Asset Dependency Map

**Document ID:** ICA-AST-MAP-001  
**Status:** `SPECIFIED (REVIEW_REQUIRED)`  
**Version:** 0.1  
**Delivery status:** `COMPLETE`  
**Canonical readiness:** `REVIEW_REQUIRED`  
Production asset authorization: `FROZEN`  
**Last reviewed:** 2026-09-16  
**Primary dependencies:** `docs/components/SHARED_COMPONENT_REGISTRY.md`, all seven active Page Dossiers, `docs/ASSET_SPECIFICATION.md`, `docs/RESPONSIVE_ART_DIRECTION.md`, `docs/NARRATIVE_AESTHETIC_QA.md`

> This map identifies which visual assets are actually required, optional, source-governed, deferred or legacy/recheck. It does **not** authorize creation of definitive artwork. Production remains frozen until Creative Canonical Lock.

---

# 1. Purpose

The map prevents two failure modes:

1. producing art before a real page/component need exists;
2. allowing legacy asset plans to dictate the new creative/canonical architecture.

The current Shared Component Registry is semantic and intentionally does not require decorative art for repeated components. Most repeated event, article, player and organization UI can be implemented structurally with HTML/CSS and source-governed content media.

---

# 2. Dependency classes

- `REQUIRED_FOR_IMPLEMENTATION` — needed for identity/function once implementation is authorized.
- `OPTIONAL_ENHANCEMENT` — may improve atmosphere but the page remains valid without it.
- `CONTENT_GOVERNED` — real editorial/community media whose provenance/rights belong to the content object.
- `LEGACY_RECHECK` — existing/planned asset tied to stale canonical assumptions; cannot be adopted without reconciliation.
- `DEFERRED` — no proven need yet; do not produce.

Asset families also belong to one usage class:

- `SHARED_BRAND`;
- `SHARED_UI`;
- `PAGE_ENVIRONMENT`;
- `CONTENT_MEDIA`;
- `SYSTEM`.

---

# 3. Global dependencies

| Candidate / family | Usage class | Dependency class | Proven need | Current source/status | Decision |
|---|---|---|---|---|---|
| ICA crest / primary brand mark | SHARED_BRAND | REQUIRED_FOR_IMPLEMENTATION | Home entry + global identity | `assets/logo-emblem.webp` candidate | retain as candidate; source/rights and final derivative family require review |
| favicon/system identity | SYSTEM | REQUIRED_FOR_IMPLEMENTATION | browser/system identity | `assets/favicon-32.png` candidate | retain candidate; complete family later if approved |
| functional icons | SHARED_UI | REQUIRED_FOR_IMPLEMENTATION only where native/text control is insufficient | menu/search/filter/external-link/calendar | no new canonical family yet | prefer recognisable SVG/CSS/system icons; no fantasy reinterpretation that harms usability |
| general frame/border family | SHARED_UI | DEFERRED | not required by semantic registry | old `BOR-01` plan | do not produce until implementation proves a structural need |
| general divider/ornament family | SHARED_UI | DEFERRED | spacing/simple rules may suffice | old `ORN-01/02` plan | no production until demonstrated need |
| raster/button artwork | SHARED_UI | DEFERRED | CTA semantics do not require bitmap art | old `BTN-01` plan | CSS-first; create asset only if visual QA proves value |
| desktop navigation structural banner | SHARED_UI | LEGACY_RECHECK | old shell only | old `BNR-01` plan in manifest | stale because it encodes superseded navigation; do not use as current dependency |
| generic section banner family | SHARED_UI / PAGE_ENVIRONMENT | OPTIONAL_ENHANCEMENT | thresholds may benefit, but local semantics differ | old `BNR-02` plan | do not assume one banner fits every destination; re-derive after canonical visual review |

---

# 4. Page-level dependency map

## Home

| Asset candidate | Class | Dependency | Responsive requirement | Notes |
|---|---|---|---|---|
| ICA crest | SHARED_BRAND | REQUIRED_FOR_IMPLEMENTATION | preserve across all viewports | Home entry and identity anchor |
| Home threshold/environment artwork | PAGE_ENVIRONMENT | OPTIONAL_ENHANCEMENT | desktop/tablet/mobile crop or alternate source if needed | `assets/hero-fantasy.webp` remains a legacy candidate, not automatically adopted |
| section identity imagery | PAGE_ENVIRONMENT | OPTIONAL_ENHANCEMENT | simplify/remove on mobile | only when it improves chapter recognition without card-grid decoration |

The Home can remain functionally valid without new decorative art. Its atmosphere is important, but final artwork follows PO acceptance of the Home composition.

## Le Adunanze

- event imagery: `CONTENT_GOVERNED`, optional per event;
- threshold environment: `OPTIONAL_ENHANCEMENT`;
- status/calendar/location icons: `SHARED_UI` only if recognisable and useful;
- no bespoke card frames required for launch.

## Giostre

- threshold/competitive-field environment: `OPTIONAL_ENHANCEMENT`;
- event imagery: `CONTENT_GOVERNED`;
- result/standing presentation requires no visual asset family;
- no trophies, coats of arms or achievement symbols unless factual rules later justify them.

## Cronache / Gli Annali

- Annali threshold environment/mark: `OPTIONAL_ENHANCEMENT`;
- article images/gallery: `CONTENT_GOVERNED` with rights/provenance;
- no image is mandatory for a valid Cronaca;
- paper/ink/divider treatments should be CSS-first until a reusable asset need is proven.

## Avventurieri

- portraits: `CONTENT_GOVERNED`, optional, permission/provenance required;
- no generated placeholder portraits;
- profile nameplate/decorative mark: `OPTIONAL_ENHANCEMENT`;
- achievement badges: `DEFERRED` until explicit achievement rules exist.

## Alleanze

- organization logos/photos: `CONTENT_GOVERNED` and never replaced with invented heraldry;
- map/cartographic layer: `OPTIONAL_ENHANCEMENT`, not sole navigation method;
- threshold road/map atmosphere: `OPTIONAL_ENHANCEMENT`;
- external organization identity remains source-owned.

## Proclami

- article media: `CONTENT_GOVERNED`;
- threshold public-board/araldo environment: `OPTIONAL_ENHANCEMENT`;
- seal/ink accents: `OPTIONAL_ENHANCEMENT`, only when communicating section/provenance hierarchy;
- no generic notification-badge asset family.

---

# 5. Shared-component relationship

The v0.3 Shared Component Registry does not prove a need for dedicated decorative assets for:

- `CMP-EVT-CARD`;
- `CMP-EVT-STATUS`;
- `CMP-EVT-META`;
- `CMP-FILTER-BAR`;
- `CMP-RESULT-SUMMARY`;
- `CMP-ARTICLE-TEASER`;
- `CMP-PLAYER-REF`;
- `CMP-ORG-REF`;
- `CMP-EMPTY-STATE`;
- `CMP-CTA-LINK`.

These components should first be implemented through structure, typography, spacing, CSS materials and accessible controls. Asset dependencies may be added later only after implementation/visual QA proves a real reusable need.

`CMP-EVT-FEATURED` may consume event/content imagery but does not own that imagery.

---

# 6. Legacy manifest reconciliation

`assets/manifest.json` remains useful as a historical M6 inventory, but parts of its planned P0 set are now `RECHECK_REQUIRED`.

Most importantly, the `BNR-01-STRUCTURE` entry explicitly depends on the superseded navigation labels `Imprese, Campagne, Avventurieri, Cronache, Il Reame, Archivio`. That entry cannot be treated as a current production dependency.

Rules until canonical propagation:

- do not delete historical manifest entries merely to hide the conflict;
- do not mark stale planned entries `approved`;
- do not produce binaries from stale constraints;
- reconcile/update the manifest once the Canonical Spec and shell direction are locked;
- current active IA remains `[ICA crest=Home] → Le Adunanze → Cronache → Avventurieri → Alleanze → Proclami`.

---

# 7. Responsive dependency rules

For every expressive raster asset considered later, the specification must define:

- focal subject;
- safe crop region;
- desktop/tablet/mobile action (`PRESERVE`, `CROP`, `RECOMPOSE`, `SIMPLIFY`, `SUBSTITUTE`, `REMOVE_DECORATIVE_ONLY`);
- whether a dedicated mobile derivative is justified;
- accessibility classification;
- file-size budget.

Mobile never downloads/retains heavy decorative art merely to imitate desktop composition.

---

# 8. Provenance and rights gate

Before a real asset may become production-approved, its source must be classifiable and rights/permission status documented.

Special attention:

- Sorcery/card artwork is not automatically reusable as site decoration;
- player portraits require appropriate publication permission/provenance;
- organization logos remain owned/source-governed;
- AI-assisted project-original art follows the lifecycle in `docs/ASSET_SPECIFICATION.md`;
- synthetic vertical-slice fixture content is never an image/content source for production.

---

# 9. Future production order — after Creative Canonical Lock only

If/when production is authorized, recommended order is:

1. confirm ICA brand source/rights and required sigil derivatives;
2. establish only necessary system/functional icon assets;
3. produce/validate Home threshold art because it carries the strongest environmental identity;
4. validate whether a reusable threshold treatment is actually shared;
5. produce page-specific environmental assets in priority order only where Page Dossiers justify them;
6. process real content media as content is sourced;
7. add decorative frames/ornaments only where implementation QA demonstrates a need.

This order is planning guidance, not present authorization.

---

# 10. Exit condition

This map is complete for CR1 when:

- every active destination has its required/optional/content-governed asset needs classified;
- shared semantic components are not assigned speculative art;
- stale M6/legacy dependencies are explicitly identified;
- no suspended/on-hold domain creates an asset dependency;
- the Asset Specification schema can be derived without inventing usage contexts;
- production remains frozen until Creative Canonical Lock.

**Delivery:** `COMPLETE`  
**Canonical readiness:** `REVIEW_REQUIRED`  
**Production assets:** `NOT AUTHORIZED`
