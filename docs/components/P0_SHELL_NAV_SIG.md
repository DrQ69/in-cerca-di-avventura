# Canonical Shell v1 — SIG-01 / NAV-01 / NAV-02

**Document ID:** ICA-P0-SHELL-001  
**Status:** IMPLEMENTED — runtime validation partially passed; production-font/visual validation pending  
**Version:** 1.0  
**Scope:** first Canonical Implementation v1 work block  
**Authority:** subordinate to `docs/ICA_CANONICAL_SPEC.md`, `docs/DESIGN_SYSTEM.md`, M7/M7.1, M8/M8.1, M9/M9.1, M10, M11 and M12

## 1. Purpose

This contract implements the first canonical P0 shell slice without treating the legacy homepage as design precedent.

The work block contains:

- `SIG-01` — ICA emblem/home control;
- `NAV-01` — desktop primary navigation;
- `NAV-02` — mobile/tablet primary navigation;
- a reusable shell/container surface used to validate the components together.

`BNR-01` is **not** implemented by this work block. The navigation shell uses CSS material treatment only so the planned navigation-banner asset family is not invented or prematurely approved.

## 2. Canonical labels and destinations

Primary labels are exactly:

1. Imprese
2. Campagne
3. Avventurieri
4. Cronache
5. Il Reame
6. Archivio

The emblem links Home. There is no text `Home` item.

The QA fixture uses local section anchors only to exercise interaction without creating fake production routes. Production integration must bind the same labels to the approved stable routes when those routes exist.

## 3. SIG-01 contract

**Purpose:** persistent ICA identity anchor and Home control.

### Structure

- semantic `<a>` control;
- official/current ICA emblem candidate rendered as `<img>`;
- accessible link name supplied by HTML, with the image itself empty-alt in this context to avoid duplicate announcement.

### Asset dependency

Current implementation uses `assets/logo-emblem.webp`, registered as `SIG-01-CANDIDATE-ROOT` in `assets/manifest.json`.

This does **not** promote the asset from `candidate` to `approved`. Provenance/visual approval remains an independent M6/M8 decision.

### Responsive contract

| Range | Behaviour |
|---|---|
| xs/sm | 48×48 visual emblem inside a minimum 52×52 home target |
| md | 52×52 visual emblem inside a minimum 56×56 home target |
| lg+ | 56×56 visual emblem inside a minimum 60×60 home target |

The emblem remains fully visible and is never used as a background behind navigation text.

## 4. NAV-01 contract — desktop

**Activation:** `lg` / `>=1024px` provisionally, subject to M7.1 real fit validation.

### Structure

- semantic `<nav aria-label="Navigazione principale">`;
- unordered list of the six canonical labels;
- active/current item represented with `aria-current="page"` when applicable;
- HTML text only; no baked raster labels.

### Interaction states

- default;
- hover enhancement only on hover-capable pointers;
- visible `:focus-visible`;
- current page;
- active/pressed browser state.

### Fit requirements

Must be measured at 1024 / 1100 / 1180 / 1280 / 1440 with the working production-font candidate and real labels.

Pass requires:

- no truncation;
- no overlap with SIG-01;
- no control/frame collision;
- at least 8px separation between controls;
- visible focus ring;
- minimum 44px control height;
- no page-level horizontal overflow.

If 1024 fails, keep `NAV-02` active until the first measured passing width and document that local breakpoint.

### Current typography caveat

The fixture uses the approved **Cinzel-family working direction**, not a permanently locked production font. Font lock triggers `RECHECK_REQUIRED` for NAV fit.

A first browser geometry run recorded in `qa/verification/VR-0007-m7-1-shell-runtime.md` showed the six labels fitting at 1024 / 1100 / 1180 / 1280 / 1440 with minimum separation of 8px at 1024–1180 and 12px at 1280–1440. Because the validation environment could not resolve the external Cinzel font, these are **conditional geometry results only** and do not close the production-font fit requirement.

## 5. NAV-02 contract — mobile/tablet

**Activation:** `<1024px` unless NAV-01 fit validation later establishes a higher local breakpoint.

### Interaction model

`NAV-02` uses native `<details>/<summary>` disclosure rather than a custom JavaScript drawer in v1.

Reasons:

- native keyboard operation;
- native open/close behaviour;
- no framework or runtime dependency;
- simple predictable focus order;
- functional without JavaScript.

### Requirements

- SIG-01 remains persistent;
- menu control is text-labelled `Menu`;
- summary target is at least 44×44 CSS px;
- six canonical labels appear vertically at comfortable touch size;
- current-page state remains visible;
- no horizontal scrolling;
- panel uses contained vertical scroll in short landscape when necessary;
- no page-level layout shift or overflow caused by opening the menu;
- decorative complexity is reduced before control/text size.

The panel intentionally has no large animation, so reduced-motion behaviour is satisfied without a separate animated path.

### Runtime validation obtained

`VR-0007` records PASS for:

- 360×800;
- 390×844;
- 480×900;
- 768×1024;
- 844×390;
- 667×375;
- 915×412;
- no page-level horizontal overflow;
- menu panel contained within viewport;
- repeated menu links meeting the 44px minimum;
- keyboard sequence `SIG-01 -> Menu -> first navigation item`;
- visible focus outline.

These results validate NAV-02 mechanics but do not replace the pending final visual review with the real SIG-01 asset.

## 6. Shell/container contract

The shell follows M7 container rules:

- xs: 16px inline padding;
- sm: 20px;
- md: 24px;
- lg/xl: 32px;
- 2xl: 40px;
- max content width: 1280px;
- safe-area insets respected where available.

Material language is CSS-only in this slice:

- night/deep-blue foundation;
- blackened-metal structural surface;
- restrained antique-gold rules/highlights;
- no rounded SaaS card treatment;
- no decorative asset dependency beyond SIG-01.

## 7. Accessibility contract

- semantic header/navigation/list structure;
- visible focus on every interactive element;
- 44×44 minimum repeated/primary targets;
- keyboard-operable mobile menu;
- no hover-only functionality;
- active state is not colour-only (`aria-current` + border/shape treatment);
- emblem has a clear accessible Home name;
- mobile and desktop DOM variants are mutually hidden by responsive CSS so only the active navigation is exposed/rendered.

## 8. Fixture

Canonical QA fixture:

`tests/fixtures/canonical-shell.html`

Styles:

`assets/css/canonical-shell.css`

The fixture is intentionally **not** a canonical production page:

- no M12 canonical marker;
- `noindex` metadata;
- no claim of production readiness;
- no factual event/player/community data.

It exists to validate the first P0 components before production integration.

## 9. M7.1 validation status

Runtime mechanics have partially passed M7.1. Evidence: `qa/verification/VR-0007-m7-1-shell-runtime.md`.

Validated in-browser:

- mobile/tablet NAV-02 geometry and containment at mandatory standard widths;
- mandatory short-landscape menu containment;
- keyboard traversal for the shell/menu path;
- visible focus;
- 44px NAV-02 targets;
- no page-level horizontal overflow across the tested matrix;
- conditional NAV-01 geometry at 1024 / 1100 / 1180 / 1280 / 1440 and sanity at 1920.

Still required before these components may be recommended as `VERIFIED`:

- repeat NAV-01 fit with the actual current Cinzel-family production-font candidate;
- render and review the real `SIG-01-CANDIDATE-ROOT` asset in the validation environment;
- observable final ICA visual review, including `ICA essenziale` on mobile;
- repeat NAV fit when final production typography is locked.

## 10. Lifecycle/readiness

Current lifecycle after partial runtime validation:

- `SIG-01`: `IMPLEMENTED`, real-asset visual/provenance approval pending;
- `NAV-01`: `IMPLEMENTED`, geometry conditionally passed but production-font fit/visual validation pending;
- `NAV-02`: `IMPLEMENTED`, runtime interaction/containment checks passed; final visual validation pending;
- Canonical Shell v1 fixture: `IMPLEMENTED`, validation fixture only.

No object in this work block is automatically `VERIFIED`, `APPROVED` or `PRODUCTION_READY` because runtime mechanics passed. Final visual/font evidence remains required.