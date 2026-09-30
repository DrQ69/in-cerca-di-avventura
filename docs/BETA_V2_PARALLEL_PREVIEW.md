# ICA Beta V2 — parallel preview deployment plan

Status: branch feature/ica-beta-v2-parallel-preview, derived from feature/ica-header-banner-v2-preview (PR #102). Source Beta pages under /beta/ are never modified by this feature.

## Routes
- /beta-v2/ — Home
- /beta-v2/adunanze/ — Adunanze
- /beta-v2/adunanze/nazionale/ — Adunanze Nazionali
- /beta-v2/cronache/ — Cronache
- /beta-v2/avventurieri/ — Avventurieri
- /beta-v2/alleanze/ — Alleanze

Each page is a mirrored structural copy of its /beta/ original; page CSS and JS still use the original Beta files, while the legacy site-nav header is replaced by the single dynamic shared module beta-v2/shared/header-v2.js and stylesheet beta-v2/shared/header-v2.css.

## Asset status — uploaded and SHA verified
The original banner's EXTERNAL white backdrop was removed in the new alpha versions while protecting ivory lettering plaques and surrounding art. The approved Instagram glow is an aligned feathered transparent layer.

| Asset | Size | SHA-256 |
|---|---:|---|
| assets/header-v2/banner-base.webp | 163460 | 1805ca98a419e54cc916a69c1f235c01a7b8f9df1c29a5512e0b36b815106778 |
| assets/header-v2/banner-youtube-hover.webp | 154304 | 1edf4e126bf557113b6665e63866c4463b6bc9b5804b8a7b424c25a2b5196a9f |
| assets/header-v2/banner-base-alpha.webp | 244908 | eb14ab715e4733ff3d8b4cebdff3c1ff1f3102916ae82aa3bb49add6be84a205 |
| assets/header-v2/banner-youtube-hover-alpha.webp | 234214 | 9de069ff1b5b59650335fd6fbd1e47168ab17489bebb80ccff66b194d90d17c9 |
| assets/header-v2/banner-instagram-hover.webp | 245686 | bdd95cd548893303f88be77ad19fc18cfbc939de7cdd0bda3d04c0dc2edbf1ba |

All five were committed via verified binary Git blobs, so no manual image upload is needed.

## Visual controls preserved

Banner canvas: 1536x512, ratio 3:1.
Original six plaque hitbox coordinates from PR #102; text positions after optical calibration preserved.
Locked: Adunanza, Avventurieri, Alleanze. The remaining labels Cronache/Proclami/Contatti remain at last working positions; no new optical adjustment made.

YouTube / Instagram use separate hover or focus activation; on /beta-v2/ base art is transparent and Instagram overlay changes only the orb region.
At <=900px, the artwork is decorative and a separate 44px-minimum navigation provides functional links; no cropped-end click targets.

## UX/SEO
- /beta-v2/ pages use noindex,nofollow while preview is under review.
- A visual preview notice contains a direct comparison link to corresponding /beta/ page.
- Shared module resolves root-relative section routes using import.meta.url.
- Main content uses original Beta CSS/JS; data URLs remain at identical depth.
- Official YouTube URL, Instagram URL, and Contatti destination are unknown and deliberately not fabricated. The hotspot hover works but clicking an unconfigured link displays status instead.

## Test / deployment gates

1. Run `python scripts/beta_v2_header_qa.py` and existing baseline workflows.
2. Review responsive rendered pages at widths 390, 768, 1024, 1280, 1536, 1920 in GitHub Pages after publication.
3. Validate each route, page-data loading, hero spacing, text and globe hover/focus.
4. Obtain design approval before replacing /beta/ global shared header.

This branch may be merged to expose /beta-v2/ as a parallel review environment after green CI. The existing Beta remains unchanged.
