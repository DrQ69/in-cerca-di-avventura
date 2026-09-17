# Cronache — Rendered Visual QA — 2026-09-17

## Scope

Rendered full-page QA performed after the ornamental-orientation cleanup using the automated Playwright harness.

Target viewports:
- 1440 × 1200
- 1024 × 1200
- 768 × 1200
- 390 × 844

The run also captured JSON diagnostics for horizontal overflow, browser-console errors, resolved result count, logo/eyebrow position, reset control position and pending-detail position.

## Automated findings

- Result count resolved correctly at all four widths: `9 eventi registrati`.
- No horizontal overflow detected at 1440, 1024, 768 or 390 px.
- No browser-console errors detected.
- Ornament-orientation cleanup renders consistently across ledger and event records.
- The logo host no longer overlaps the eyebrow text in the tested render.
- `Ripristina i filtri` and the result count remain inside the ledger safe area.
- `Dettagli in preparazione` remains inside the event action region in the tested render.

## Visual assessment

### 1440 px

PASS with observations.

Strengths:
- page-wide architecture reads coherently;
- hierarchy Hero → ledger → season chapters → records is clear;
- season headings and record plates feel part of one archive system;
- corner orientation is now coherent;
- no visible clipping or structural collision.

Open visual issues:
- the current proxy logo remains the most important identity mismatch;
- `Dettagli in preparazione` is safe but visually very small in the narrow desktop action column;
- the page can accept one more refinement pass, but additional decoration should be selective rather than global.

### 1024 px

PASS with observations.

- responsive navigation transition works;
- no horizontal overflow;
- ledger controls remain readable;
- event records remain stable.

Primary risk is density rather than collision: ornamental additions should not reduce the available text width further.

### 768 px

PASS with observations.

- records recompose rather than merely shrink;
- filter register remains usable;
- action wording is contained;
- season separation remains strong.

The layout is already visually dense. Deep Pass 2 must avoid adding decorative layers inside the record body at this width.

### 390 px

PASS structurally, REQUIRES POLISH before final approval.

- no horizontal overflow;
- records stack correctly;
- status grammar remains recognizable;
- filter controls remain operable.

However, the mobile page is long and visually dense. Future refinement should prioritize spacing, legibility and simplification instead of adding ornament. The mobile treatment should be considered a reduced ceremonial mode, not a scaled desktop page.

## Decision for Deep Pass 2

Deep Pass 2 is allowed, but only as a **targeted refinement pass**.

Allowed priorities:
1. install the original immutable Logo ICA in place of the proxy;
2. improve the desktop action-cell proportion so pending/detail labels can remain legible without collision;
3. refine season/header authority and archive rhythm without increasing card-body density;
4. simplify ornament selectively at 768/390;
5. consolidate CSS layers after visual direction is accepted.

Not allowed before final PO review:
- adding new decorative families merely for richness;
- reducing content width to make room for ornament;
- adding animated fire/glow or game-HUD effects;
- introducing raster decoration where CSS/SVG is sufficient;
- changing event data, taxonomy or filtering behavior for visual reasons.

## Current risk rating after rendered QA

| Risk | Level | Comment |
|---|---|---|
| Horizontal overflow | Low | Automated checks passed all target widths |
| Text/cornice collisions | Low–Medium | Known collisions corrected; continue regression coverage |
| Ornament orientation | Low | Explicit TL/TR/BL/BR variants now verified in rendered page |
| Over-decoration | Medium | Main visual risk for next pass |
| Mobile density | Medium | Structurally valid, but needs restrained polish |
| CSS override complexity | Medium–High | Five visual CSS layers in Beta; consolidation required before production-ready |
| Logo identity mismatch | High | Proxy still present; original immutable Logo ICA remains open blocker |
| Functional regression from styling | Low | Visual layers are isolated; automated rendered QA now provides a gate |

## Gate result

**Rendered regression gate: PASS WITH FOLLOW-UP.**

The page is stable enough for a targeted Deep Pass 2, but it is not yet ready for final PO visual approval because the original Logo ICA is still not installed and mobile/desktop micro-proportions require one restrained refinement cycle.
