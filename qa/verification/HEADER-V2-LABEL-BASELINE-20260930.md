# HEADER-V2 — Visual baseline and label refactor QA (2026-09-30)

## Scope
PR #102, isolated beta/header-v2 preview. The existing public site shell is untouched. This refactor separates the visual text position from each unchanged click target; **no new aesthetic offsets have been applied**.

## Source of truth
Read latest index.html and header-v2.css from branch feature/ica-header-banner-v2-preview. The earlier uploaded standalone file labelled Adunanza_Corretta_v2 is NOT the latest position baseline.

## Browser-measured baseline
Chromium, screenshot canvas 1536 × 512, label centres relative to the banner's top-left; text bounding ranges, not the full hitbox:

| Label | X centre (px) | Y centre (px) | Status |
| --- | ---: | ---: | --- |
| Adunanza | 216.63 | 148.27 | APPROVED LOCKED |
| Cronache | 212.75 | 267.23 | Working position; future optical approval |
| Avventurieri | 191.99 | 391.53 | APPROVED LOCKED |
| Alleanze | 1332.66 | 150.14 | APPROVED LOCKED |
| Proclami | 1338.33 | 267.23 | Working position; future optical approval |
| Contatti | 1343.99 | 391.53 | Working position; future optical approval |

The source screenshot uses the 1536px-wide banner image. Typeface uses the existing Cinzel CSS; no typographic properties were changed.

## Implementation detail

Legacy flex content padding (all percentage padding is resolved against the width of the containing block, including padding-top) was replaced by a nested .ica-nav-label span and container-relative CSS translation values in cqw:
- Adunanza: X +1.6045cqw, Y +.3705cqw (LOCKED).
- Cronache: X +1.3515cqw.
- Avventurieri: no shift (LOCKED).
- Alleanze: X -.738cqw (LOCKED).
- Proclami: X -.369cqw.
- Contatti: no shift.

The underlying --x/--y/--w/--h of ALL SIX click targets are unchanged. The existing background, central logo, orbs, hover CSS, JS and mobile routes were not modified.

## Visual browser QA

Chromium was run on real inline-page reconstruction using the actual supplied WebP assets, comparing before and after. Viewport widths: 390, 768, 1024, 1280, 1536, 1920.

At all six widths:
- No body-level horizontal overflow detected.
- All six click target rectangles unchanged (within 0.01 CSS px).
- At rendered desktop widths 1024/1280/1536/1920 every visible text centre differs by less than 0.02 CSS px on both axes. This includes all three approved/locked labels, exceeding the <=1px acceptance criterion.
- At mobile/tablet widths 390/768, the unchanged accessible mobile nav is visible and the desktop hitbox overlay remains hidden.
- Static screenshot before/after: identical at 390, 768 and 1536; a small font rasterization difference remains at 1280 and 1920 without measurable label centre movement (cannot state all viewport screenshots are pixel identical).

These results are LOCAL rendered browser tests and do not replace published GitHub Pages visual QA.

## Optically assessed aesthetics — proposals only; not applied

- Adunanza: balanced within the upper left parchment; LOCKED.
- Cronache: readable, no frame collision. Current slight rightwards bias relative to geometric lower plaque is subtle; recommend NO automatic displacement. If the Product Owner requests another optical trial, compare a separate -2px X candidate only (not applied).
- Avventurieri: longer label fits and preserves comfortable ornament clearance; LOCKED.
- Alleanze: text appears centered within the irregular upper right parchment; LOCKED.
- Proclami: good text weight, no frame collision; can optionally preview a separate +2px X optical trial, not applied.
- Contatti: legible and comfortably contained; no movement advised (ΔX=0, ΔY=0).

No font-family, font-size, letter-spacing, color or decorative effect changed. Any suggested future movement must be presented for explicit approval, with baseline snapshot comparisons.

## Remaining blockers for promoting this draft PR

- Real binary WebP assets are not yet in the branch; repository baseline QA consequently reports missing paths.
- Instagram-hover image provided was byte-identical to base, so an actual illuminated Instagram art asset is required.
- Official social URLs and Contatti destination are unknown and deliberately not invented.
- Re-run on actual deployed preview after binary upload. **Do not merge PR #102 or change shared shell yet.**
