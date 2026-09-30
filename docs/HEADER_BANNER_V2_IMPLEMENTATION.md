# ICA-HEADER-BANNER-V2 — experimental handoff

**Status:** Implementation ready for review; **binary assets and official external destinations pending**.
**Scope:** isolated /beta/header-v2/ preview. Existing shared header remains unchanged.

## Files
- beta/header-v2/index.html — accessible HTML navigation and eight functional zones (six plaques, two social spheres), plus a central Home hotspot.
- beta/header-v2/header-v2.css — 1536×512 responsive art, hotspot geometry, hover layers and mobile navigation.
- beta/header-v2/header-v2.js — hover/focus/pointerdown state management and external URL configuration.
- Pending exact binary paths:
  - assets/header-v2/banner-base.webp
  - assets/header-v2/banner-youtube-hover.webp
  - assets/header-v2/banner-instagram-hover.webp

The three optimized WebP files are supplied in the attached conversation handoff archive ICA_Header_V2_Preview_Package.zip. GitHub connector text-file write actions do not accept container binary paths. **Do not merge this draft before the three binaries are uploaded** to the above paths.

## Asset consistency finding

The supplied banner base and supplied Instagram-hover JPEG are **byte-identical** (1536×512), although the YouTube-hover JPEG differs. The Instagram hover mechanism is built and responds to hover/focus, but cannot produce additional glow until a genuinely different Instagram asset is supplied. Never assert that Instagram illumination has been visually verified while the two source files remain identical.

## Tested local behaviour

Using the three optimized WebP files embedded in a browser test:
- all three decode at 1536×512;
- YouTube mouse-hover updates banner state to youtube;
- Instagram mouse-hover updates banner state to instagram (visual asset still pending);
- unconfigured social click is safely intercepted and displays a status message rather than navigating to a fabricated URL;
- 390px viewport shows separate touch navigation, no body-level horizontal overflow, and minimum link target height 44px.

## Destinations

Verified internal routes:
- Adunanza → ../adunanze/nazionale/
- Cronache → ../cronache/
- Avventurieri → ../avventurieri/
- Alleanze → ../alleanze/
- Proclami → ../#proclami
- embedded central logo → ../ (Home; no second logo inserted)

Not verified / intentionally not fabricated:
- SOCIAL_URLS.youtube
- SOCIAL_URLS.instagram
- Contatti destination

## Acceptance gate before shared-shell promotion

1. Upload exact binary assets; replace the Instagram placeholder with an actually illuminated variant.
2. Supply and verify YouTube, Instagram and Contatti destinations.
3. Re-run rendered QA against actual GitHub Pages preview, including hover/focus and asset loading at 390, 768, 1280 and 1920 px.
4. Product Owner reviews typography and hotspot alignment.
5. Only then plan separate shared-shell replacement. No current page header is modified by this PR.

## Parallel preview deployment update (2026-09-30)
This earlier handoff described a draft without binary assets. Subsequent branch feature/ica-beta-v2-parallel-preview (PR #103) now contains all five SHA-verified WebP binaries and six mirrored /beta-v2/ pages. Follow docs/BETA_V2_PARALLEL_PREVIEW.md for the current deployment status. Instagram glow is a distinct approved alpha overlay; official external URLs and Contatti destination remain unconfigured. The original /beta/ shared header is unchanged.
