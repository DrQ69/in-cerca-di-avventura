# Cronache — M100 Production Readiness Audit

Date: 2026-09-17

## Scope

This audit covers the current Cronache Beta production-readiness slice after the search/filter correction and M100 visual-refinement layer.

It does **not** constitute final PO visual approval and does not close the exact Logo ICA source-transfer dependency.

## SEO / metadata

Completed in this slice:

- unique page title;
- page description aligned with canonical ICA terminology;
- robots `index,follow`;
- canonical URL for the current Beta route;
- Open Graph locale/type/site/title/description/url;
- Twitter summary metadata;
- theme colour and favicon retained.

Deliberately omitted:

- `og:image` / `twitter:image`, because the current header emblem is still a temporary proxy and must not become a social-preview canonical asset.

## Search / filter readiness

The functional contract is now:

- free-text search is normalized and performs substring matching across event title, Lega, venue, city, format, structure, event type and winner when available;
- Stagione, Stato, Luogo, Lega and Formato use normalized exact matching;
- simultaneous controls combine with logical AND;
- result feedback reports visible events against total events;
- `Azzera filtri` is enabled only when at least one search/filter criterion is active;
- reset restores the full archive and returns focus to search.

Regression examples that must remain valid:

1. `Gothic Draft` -> only matching Gothic Draft event records.
2. Luogo `GameLover — Crema` -> only GameLover/Crema records.
3. Formato `Gothic Draft` -> exact Gothic Draft records only.
4. `Gothic Draft` + `GameLover — Crema` -> intersection only.
5. Reset -> full archive restored.

## Content-truth audit

Current JSON source: `data/cronache-events.json`.

Verified handling:

- La Giostra winner follows official final rank #1, not the tied points total.
- La Giostra date remains null/unpublished because it is not verified in the current source package.
- Gothic Draft BOG#1 is classified as a Duello of Blaze of Glory and has verified winner / player count.
- Future Blaze of Glory dates are PO-schedule-confirmed.
- Duelli V and VII keep format undefined instead of inventing one.
- Future events never display invented winner / player-count results.

No fictional Copilot mock-event data is used as production content.

## Performance discipline

Current production strategy remains CSS/SVG-first:

- architecture, borders, material depth and interaction polish are CSS;
- status/metadata/season/divider assets are SVG;
- no held `assets/hero-fantasy.webp` is used;
- no new large painterly raster was introduced in M100;
- Google Fonts use `display=swap` and existing preconnect hints.

The largest unresolved identity payload is the original Logo ICA source. It must be transferred unchanged; no lossy or redrawn substitute is acceptable.

## Accessibility / interaction

Current safeguards:

- semantic input/select/button controls;
- visible keyboard focus;
- skip link;
- icon states always paired with textual FUTURA / IN CORSO / CONCLUSA labels;
- result feedback uses a polite live region;
- error state uses assertive live region;
- reset button exposes true disabled state when inactive;
- reduced-motion media query removes nonessential motion.

## Remaining production gates

1. Rendered visual review at 1440 / 1024 / 768 / 390 px.
2. Exact production installation of original Logo ICA unchanged.
3. Final PO visual review.
4. Closing inscription remains ON HOLD and is non-blocking unless PO chooses to canonize it.

## Current readiness conclusion

Functional/data/metadata readiness is substantially complete. The remaining work is identity/visual acceptance rather than archive logic.
