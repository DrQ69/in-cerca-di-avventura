# VR-0018 — Beta shared navigation banner integration

## Record metadata
- **Verification ID:** VR-0018
- **Object:** shared beta navigation banner
- **Object type:** beta UI / asset / interaction change
- **Tested implementation SHA:** `750e98c0cd9d75bff9ebd13b28bdad77543a9dfa`
- **Date:** 2026-10-02
- **Lifecycle target:** beta implementation only
- **Release readiness target:** STAGING_READY beta scope

## Scope

Replace the former beta `site-nav` header on all current beta surfaces with the Product Owner-calibrated ICA banner while preserving semantic HTML navigation and a dedicated mobile/tablet navigation treatment.

Affected beta pages:

- `beta/`
- `beta/adunanze/`
- `beta/adunanze/nazionale/`
- `beta/avventurieri/`
- `beta/alleanze/`
- `beta/cronache/`
- `beta/tesori/`

Shared implementation:

- `beta/shared/ica-banner.css`
- `beta/shared/ica-banner.js`
- `assets/banners/navigation/bnr-beta-nav-primary.png`
- `assets/manifest.json`

## Product Owner calibrated states

- six desktop labels remain HTML and use the approved 80×32 positioning method;
- label centres: H23; midpoint R23/S23; AC23; AZ23; midpoint BJ23/BK23; BU23;
- label hover uses the approved gold/orange illumination without geometry change;
- Instagram hover uses the approved purple/magenta/orange glow;
- YouTube hover uses the approved red/crimson glow;
- central ICA emblem area links Home;
- Instagram and YouTube remain external semantic links.

## Evidence

Static inspection against implementation SHA `750e98c0cd9d75bff9ebd13b28bdad77543a9dfa`:

- all seven beta pages contain the shared banner mount;
- all seven beta pages load the shared banner stylesheet and module;
- former `site-nav` markup is removed from those seven pages;
- banner binary resolves on branch at `assets/banners/navigation/bnr-beta-nav-primary.png`;
- binary SHA: `ff6e31bfa88197de58897d5083531550f26d5dfa`;
- binary size: **306,897 bytes**, within the 400 KB section-banner maximum;
- `assets/manifest.json` parses as valid JSON and registers `BNR-BETA-NAV-20261002`;
- desktop banner is enabled at >=1024px;
- below 1024px a dedicated mobile/tablet menu is used instead of scaling the desktop banner;
- mobile repeated controls use a minimum 44px height;
- hover enhancement is gated by `(hover:hover) and (pointer:fine)`;
- `:focus-visible` treatment is present;
- `prefers-reduced-motion` is handled;
- navigation labels are not baked into the raster asset.

Product Owner visual calibration was completed interactively before repository integration. Repository/browser CI evidence is attached through the PR once available.

## Outcome

- **Static verification result:** PASS
- **Implementation state supported:** IMPLEMENTED for beta scope
- **Canonical / PRODUCTION_READY:** no
- **M11 approved baseline created:** no
- **M12 canonical-page registration changed:** no
- **Exceptions used:** none
- **Post-merge requirement:** live desktop/mobile smoke check after GitHub Pages deployment

## Residual uncertainty

Runtime/browser rendering on the deployed beta must still be smoke-tested after merge. This record does not promote the beta surfaces to canonical status and does not replace canonical `BNR-01` governance.
