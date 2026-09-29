# MAP-GEO-001 — Geographic Placement Standard for Alleanze

**Document ID:** MAP-GEO-001  
**Status:** Specialist operational standard  
**Version:** 1.0  
**Date:** 2026-09-29  
**Scope:** `beta/alleanze/`, `data/alliances.json`, `data/map-italia-calibration.json`

## Purpose

Prevent marker-placement errors caused by visual guessing on the stylized Italy map.

The geographic truth and the map-rendering position are separate data layers:

1. **real geography** — city, region, latitude, longitude;
2. **map calibration** — reviewed logical map coordinates;
3. **rendering** — CSS percentage position derived from logical map coordinates.

A rendered position must never become the source used to “prove” its own geographic correctness.

## Required data for every published community

Every published community marker must contain:

- city;
- region;
- verified latitude;
- verified longitude;
- geographic source note;
- logical map x/y;
- calibration ID;
- placement status.

Unknown or estimated positions must not be silently published as reviewed.

## Calibration registry

Canonical operational file:

`data/map-italia-calibration.json`

The registry records:

- map asset identity and dimensions;
- logical coordinate system;
- reviewed anchors;
- minimum marker separation;
- ordering rules;
- publication rules;
- calibration procedure.

At least three reviewed anchors are required before using geographic interpolation for a new marker. For region-sensitive placement, at least three **independent geographic landmarks on the actual map asset** must also be available so a community marker is not validated only against other community markers.

## Placement procedure

For a new community:

1. verify city and region from an approved geographic source;
2. record latitude/longitude;
3. estimate a logical map position from independent reviewed landmarks on the actual `map-italia.webp`;
4. compare that estimate with existing community anchors only as a secondary consistency check;
5. render the marker on the actual `map-italia.webp`;
6. inspect the QA overlay, not a different reference map;
7. confirm the marker is inside the intended geographic area and visually separated from neighboring markers;
8. only then change placement status to reviewed;
9. run MAP-GEO-001 audit and Alleanze visual QA.

## Independent-landmark rule

A community marker must not be used as the sole geographic reference for another community marker. The current independent landmark calibration uses recognizable locations on the underlying map (Genova, Venezia and Napoli) to produce an affine estimate. The published community position may differ slightly because the map is stylized, but the difference must remain within the configured tolerance and must be visually reviewed.

## QA principles

The QA must not define an arbitrary region envelope around an already-guessed position.

Automated checks must instead verify:

- entity data and calibration anchor match;
- real latitude/longitude ordering is consistent with map x/y ordering over the current Italy extent;
- marker center separation exceeds the configured minimum;
- map and marker asset identity remains valid;
- the rendered marker matches the reviewed anchor;
- a debug screenshot labels reviewed anchors with city, region and logical coordinates.

## Current reference geography

For the current pilot:

- Crema — Lombardia — approximately 45.36264 N, 9.68176 E;
- Prato — Toscana — approximately 43.8805 N, 11.09699 E;
- Roma — Lazio — approximately 41.891934 N, 12.511326 E.

These values are geographic truth inputs. The stylized map x/y values are separate reviewed calibration outputs.

## Change control

Changing a published marker position requires:

- an update to `data/alliances.json`;
- the matching anchor update in `data/map-italia-calibration.json`;
- MAP-GEO-001 audit PASS;
- Alleanze visual QA PASS;
- human inspection of the generated geographic debug screenshot for anchor changes.

Do not change the underlying map image to fix a marker-placement problem unless the map asset itself is wrong.
