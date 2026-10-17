# VR-0135 — ICA v1 root migration and governance lock

**Primary QA Profile:** QAP-PAG  
**Secondary profiles:** QAP-CODE, QAP-DAT, QAP-AST-P  
**Lifecycle claim:** IMPLEMENTED and VERIFIED on the release branch.  
**Release readiness:** READY_FOR_MERGE for the V1.1 + V1.2 scope; final ICA v1 release closure remains a later block.

## Product Owner decisions — 2026-10-17

For ICA v1:

- current navigation is consolidated: Adunanze / Avventurieri / Alleanze / Tesori / Proclami / Chi siamo;
- current section organization remains unchanged;
- the definitive public implementation moves to the repository root;
- Blaze of Glory standings remain maintained from Product Owner Excel data for now;
- Fair Play remains an explicit +3 points per recorded Fair Play win;
- Sorcery ingestion will use a controlled validate → QA → publish workflow, not continuous polling;
- Avventurieri remains a directory;
- unified Archivio is approved for the next v1 block;
- Proclami dedicated-page development is on hold;
- Alleanze feature expansion is on hold;
- International Adunanze is removed;
- ICA v1 has no analytics, tracking or non-essential cookies;
- Vercel is the future hosting/domain direction, deferred beyond v1 closure;
- the Product Owner-supplied ICA logo is the official v1 visual source.

## Root migration

Active public routes become:

- `/`
- `/adunanze/nazionale/`
- `/avventurieri/`
- `/cronache/`
- `/cronache/evento/`
- `/alleanze/`
- `/tesori/`

`/adunanze/` redirects to the National route.

Legacy `/beta/` HTML entry points are compatibility redirects to their root equivalents. Legacy runtime files may remain in the repository for compatibility/history but are not active public entry points.

## Brand closure

The Product Owner-supplied `Logo ICA.png` is installed as:

- `assets/brand/sigils/sig-01-source.png`

The current web runtime emblem and favicon are registered as approved v1 derivatives in `assets/manifest.json`.

Approval record:

- `docs/ASSET_APPROVAL_RECORD_2026-10-17_ICA_BRAND.md`

## International Adunanze

The two-gate portal is no longer a public v1 surface. `/adunanze/` redirects directly to `/adunanze/nazionale/`. No unavailable/in-development International choice is shown in v1.

## Automated verification evidence

Tested release-branch head: `f2fdd1aeb10b416e243a6764d4e1656faeed763c`.

- ICA baseline QA run 583 — **PASS**.
- Homepage visual QA run 148 — **PASS**.
- Adunanze visual QA run 215 — **PASS**.
- Adunanze performance QA run 195 — **PASS**.
- Avventurieri visual QA run 100 — **PASS**.
- Cronache visual QA run 186 — **PASS**.
- Alleanze visual QA run 83 — **PASS**.
- Tesori visual QA run 35 — **PASS**.
- Shared banner consistency QA run 199 — **PASS**.
- LCS-02 runtime QA run 192 — **PASS**.

Adunanze Lighthouse evidence after the mobile navigation optimization:
- desktop: performance **1.00**, accessibility **1.00**, SEO **1.00**, LCP **766 ms**, CLS **0**;
- mobile: performance **0.98**, accessibility **1.00**, SEO **1.00**, LCP **2130 ms**, CLS **0**.

The shared navigation mobile artwork now uses the approved optimized WebP derivative `assets/banners/navigation/bnr-beta-nav-mobile.webp` (960×321, 69,040 bytes) while desktop retains the full-resolution PNG. This removes the previous mobile LCP blocker without changing the Product Owner-approved artwork.

## Verification coverage

- ICA structural baseline;
- Homepage visual QA at 390 / 768 / 1280 / 1920;
- Adunanze visual QA including `/adunanze/` → National redirect;
- Avventurieri visual QA;
- Cronache visual QA including detailed E02/E03 results;
- Alleanze visual QA;
- Tesori visual QA;
- shared banner consistency QA;
- LCS-02 runtime QA;
- root/beta compatibility redirect checks;
- no horizontal overflow or browser console errors on tested surfaces.

All checks above passed on the tested release branch.

## Known non-blocking items outside this block

- Unified Archivio is the next approved v1 implementation block.
- Sorcery controlled publish workflow is the following v1 block.
- GitHub Issue #17 requires repository-admin branch protection.
- GitHub Issue #94 remains open until external-logo permission metadata is confirmed by the Product Owner.
