# VR-0017 — Crema / Lombardia independent landmark correction

## Record metadata
- **Verification ID:** VR-0017
- **Object:** Il Regno di Cremos marker in `beta/alleanze/`
- **Object type:** geographic calibration / rendered map placement
- **Tested implementation SHA:** `5fd22ba34cfd4ef0a623bb101632d572e2d09979`
- **PR:** #100
- **Date:** 2026-09-29

## Reason

VR-0016 produced a false positive because the community anchor and the QA registry agreed with the same incorrect placement. This corrective verification uses independent geographic landmarks on the actual map asset.

## Correction

- previous reviewed Crema anchor: x=380, y=195
- corrected reviewed Crema anchor: x=344.5, y=144.6
- map asset: unchanged
- logo/medallion: unchanged

## Independent validation

The MAP-GEO-001 registry now contains independent landmarks for Genova, Venezia and Napoli. An affine estimate derived from those landmarks is used as an independent check for Crema's real latitude/longitude.

## Evidence

Against tested implementation SHA `5fd22ba34cfd4ef0a623bb101632d572e2d09979`:

- ICA baseline QA run **36630576655** — PASS
- Alleanze visual QA run **36630576606** — PASS
- MAP-GEO-001 geographic audit — PASS
- independent landmark-affine Crema check — PASS
- rendered Alleanze visual regression — PASS
- debug screenshot artifact generated on the actual map asset

## Outcome

- **Verification result:** PASS
- **VR-0016 geographic placement claim:** superseded
- **Current Crema placement:** VERIFIED for the current beta map/calibration scope
- **Canonical / PRODUCTION_READY:** no
- **Map asset changed:** no
