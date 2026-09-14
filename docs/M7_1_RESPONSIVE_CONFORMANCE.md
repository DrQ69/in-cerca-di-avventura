# M7.1 — Responsive Conformance & Stress Validation

**Document ID:** ICA-RSP-VAL-001  
**Status:** Required validation gate  
**Version:** 1.0  
**Parent milestone:** M7 — Responsive Specification  
**Authority:** subordinate to `docs/ICA_CANONICAL_SPEC.md` and complementary to `docs/RESPONSIVE_SPECIFICATION.md`

## 1. Purpose

M7 defined the responsive rules. M7.1 verifies that those rules survive contact with the real ICA interface, real content density, Sorcery-specific structures, painterly artwork and the current implementation.

M7 is not considered **verified** until this gate passes. A written responsive specification and an implemented responsive interface are distinct deliverables.

## 2. Context-specific principles

ICA must not degrade from **rich fantasy desktop -> generic mobile website**.

The intended transformation is:

**rich ICA desktop -> essential ICA mobile**.

At narrow widths decoration may reduce, but each major composition must preserve at least one recognisable ICA identity anchor, such as:

- official sigil/emblem;
- antique-gold / blackened-metal material cue;
- approved narrative typography treatment;
- a controlled heraldic border or ornament;
- a Sorcery-specific element marker where contextually relevant.

Identity anchors never take priority over readability, accessibility or content hierarchy.

## 3. Risk-ranked validation gates

The following risks are mandatory validation targets because they have both high likelihood and high impact in the ICA context.

### R1 — Specification / implementation divergence — CRITICAL

The legacy implementation currently uses responsive values that predate M7. M7.1 requires explicit conformance rather than assuming the existing CSS is compliant.

**Pass criteria**

- canonical breakpoint tokens are available to the implementation;
- page container behaviour matches M7 or an approved documented equivalent;
- obsolete one-off breakpoints are removed or documented as component-local exceptions;
- no new component is built against the old 620/900px logic by default;
- conformance is checked before visual polish.

### R2 — NAV-01 / BNR-01 fit failure — CRITICAL

Canonical labels are:

**Imprese · Campagne · Avventurieri · Cronache · Il Reame · Archivio**

The nominal `lg` breakpoint does not guarantee that the full decorative navigation fits.

**Required NAV fit test**

Test at minimum:

- 1024 px;
- 1100 px;
- 1180 px;
- 1280 px;
- 1440 px.

Use the approved production font and real six labels.

**Pass criteria**

- no text truncation;
- no label/frame collision;
- no overlap with the sigil or ornamental end caps;
- at least 8px internal control separation, preferably 12–16px;
- keyboard focus remains completely visible;
- target size remains compliant;
- no font-size reduction below the approved responsive type scale.

If the component fails at 1024px, `NAV-02` remains active above 1024px until the first width at which NAV-01 passes. That width becomes a documented component-local breakpoint.

### R3 — P0 component responsive behaviour only theoretical — CRITICAL

Every P0 component must receive an actual responsive contract and visual validation.

Minimum P0 verification set:

- `SIG-01`;
- `NAV-01` / `NAV-02`;
- `BNR-01`;
- `BNR-02`;
- `BTN-01`;
- `BOR-01`;
- `ORN-01` / `ORN-02` when used;
- `MED-HERO-01`;
- `CRD-01` Event/Impresa card;
- `CRD-02` Avventuriero card;
- `CRD-03` Chronicle card;
- `ENT-01`, `ENT-02`, `ENT-04`;
- `TBL-01`, `TBL-02`.

Each contract records: display mode, container behaviour, internal layout, hide/show rules, typography changes, ornament changes, image crop/focal point, interaction changes and known local breakpoint exceptions.

### R4 — Artwork crop / safe-area failure — CRITICAL

ICA relies on painterly fantasy artwork as identity, not as disposable filler.

For every hero/banner artwork used at P0:

- record desktop focal point;
- record mobile focal point;
- define text-safe region;
- test `object-fit` crop;
- create a dedicated mobile derivative when one crop cannot preserve both subject and text-safe area;
- verify readable contrast under real text.

Do not solve a bad crop by moving important text into unpredictable image space.

### R5 — Competitive / Sorcery data breaks narrow layouts — CRITICAL

Stress testing must use plausible difficult ICA content, not only short placeholders.

Required stress categories:

- long Avventuriero nickname;
- long Impresa narrative title;
- long venue / organisation name;
- multi-word format/status metadata;
- 3–4 digit campaign points;
- W/L/D values with two digits;
- long deck name;
- Avatar + Atlas + Spellbook labels and counts;
- long Sorcery card names;
- four elemental markers in combination;
- Chronicle title and excerpt with naturally long Italian words.

The canonical fixture lives at `tests/fixtures/responsive-stress.json`.

## 4. Mandatory viewport matrix

### Standard widths

- 360 × 800
- 390 × 844
- 480 × 900
- 768 × 1024
- 1024 × 768
- 1280 × 800
- 1440 × 900
- 1920 × 1080

### Short / landscape stress widths

These are mandatory for navigation, hero, overlays, sticky UI and above-the-fold compositions:

- 844 × 390
- 667 × 375
- 915 × 412

A component may pass normal portrait testing and still fail because of short viewport height; these cases must therefore be evaluated explicitly.

## 5. Touch target rule — strengthened

For primary and repeated interactive controls in P0/P1 components, **44 × 44 CSS px is mandatory**, not merely aspirational.

Exceptions require all of the following:

- documented reason;
- no realistic way to preserve 44 × 44 without harming another accessibility requirement;
- sufficient spacing from adjacent controls;
- explicit QA acceptance.

This applies especially to:

- primary navigation trigger;
- drawer/overlay close control;
- CTA buttons;
- filters;
- disclosure controls;
- pagination;
- card-level interactive controls.

## 6. Table / ranking validation

For rankings and results:

1. test full approved column set at desktop;
2. identify truly optional columns separately from core competitive facts;
3. if core data cannot fit, use a labelled horizontal-scroll region;
4. make scrollability discoverable without depending on animation;
5. verify keyboard access to content inside the scroll region;
6. test sticky first column only if it improves association between Avventuriero and values;
7. never allow table width to create page-level overflow.

## 7. Card density validation

The general 1/2/3-column model is a starting point, not a universal contract.

Each `CRD-*` family must independently confirm:

- minimum viable width;
- maximum useful width;
- number of columns by range;
- behaviour with long title and metadata;
- CTA position;
- whether artwork is retained, cropped, reduced or hidden.

A Chronicle card, Avventuriero card and Impresa card may legitimately use different column transitions.

## 8. Sorcery deck validation

Mobile deck presentation must preserve the Sorcery-specific model:

1. Avatar;
2. elemental affinity;
3. Atlas;
4. Spellbook.

Do not collapse this into a generic TCG `main deck / sideboard` representation.

Card rows must have a mobile compact pattern and must not rely on page-level horizontal scrolling.

## 9. Typography fit validation

Responsive verification must be repeated when the final production display and reading fonts are locked.

The following must be re-tested after font lock:

- NAV-01 fit;
- headings in BNR-02;
- long card titles;
- badges;
- table labels;
- numeric alignment;
- button labels.

A font change is considered a responsive-affecting change.

## 10. Performance-aware responsive images

For each major raster image:

- define actual rendered width ranges;
- generate only useful derivatives;
- use `srcset`/`sizes` or `<picture>` when appropriate;
- do not make mobile download the full desktop source without justification;
- do not lazy-load the LCP hero;
- preserve explicit dimensions/aspect ratio to minimise layout shift.

M6 file-size budgets remain authoritative.

## 11. Conformance matrix

For every verified component, record:

| Field | Required |
|---|---|
| Component ID | yes |
| 360 | pass/fail |
| 390 | pass/fail |
| 768 | pass/fail |
| 1024 | pass/fail |
| 1280 | pass/fail |
| 1440 | pass/fail |
| 1920 | sanity |
| short landscape | pass/fail where relevant |
| keyboard | pass/fail |
| touch targets | pass/fail |
| overflow | pass/fail |
| content stress | pass/fail |
| art-direction | pass/fail/N.A. |
| local breakpoint | value/N.A. |
| known exception | documented/N.A. |

The future automated/visual regression workflow may generate this evidence, but the contract exists before automation.

## 12. Legacy implementation policy

The current implementation predates the canonical IA and M7 responsive system. It is therefore **reference implementation / technical legacy**, not proof that M7 has passed.

Do not spend effort cosmetically aligning obsolete page structures merely to make historical CSS match M7.

Instead:

- prevent new work from copying legacy responsive assumptions;
- reuse technically sound patterns only when they comply with the Canonical Spec;
- validate new canonical components against M7/M7.1;
- retire obsolete responsive rules as canonical components replace old markup.

## 13. Exit criteria

M7 may be marked **APPROVED / VERIFIED** only when:

1. `RESPONSIVE_SPECIFICATION.md` is approved;
2. this M7.1 gate is approved;
3. canonical P0 components have documented responsive contracts;
4. NAV-01 fit breakpoint has been measured with real labels and production font;
5. P0 visual compositions pass the mandatory viewport matrix;
6. content stress fixture passes for affected components;
7. hero/banner art-direction decisions are recorded;
8. no page-level horizontal overflow is present;
9. primary P0/P1 controls meet the touch-target rule or approved exceptions are documented;
10. keyboard order follows semantic reading order;
11. implementation evidence is available through screenshots/tests/manual QA records.

Until those conditions are met, M7 status is:

**Specification Approved — Implementation Validation Pending**.
