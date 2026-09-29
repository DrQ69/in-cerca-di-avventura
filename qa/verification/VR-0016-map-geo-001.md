# VR-0016 — MAP-GEO-001 Alleanze geographic calibration

## Record metadata
- **Verification ID:** VR-0016
- **Object:** `data/map-italia-calibration.json`, Alleanze pilot marker placement
- **Object type:** geographic data / map calibration / rendered QA
- **Tested implementation SHA:** `83f433b972e289a4874e6c9db68a3be3431de4da`
- **PR:** #99
- **Date:** 2026-09-29

## Reason

Previous attempts placed Il Regno di Cremos by visual guessing and then validated the guessed coordinate with a hard-coded envelope. This record verifies the replacement control model, which separates real geography from stylized-map placement.

## Verified inputs

- Crema — Lombardia — 45.36264 N, 9.68176 E
- Prato — Toscana — 43.8805 N, 11.09699 E
- Roma — Lazio — 41.891934 N, 12.511326 E

The current reviewed logical map anchors are stored only in `data/map-italia-calibration.json`.

## Evidence

Against tested implementation SHA:

- ICA baseline QA run **36628911393** — PASS
- Alleanze visual QA run **36628911367** — PASS
- MAP-GEO-001 audit step — PASS
- rendered visual regression — PASS
- geographic debug screenshot generated in the Alleanze QA artifact
- minimum marker separation — PASS
- latitude/map-y ordering — PASS
- longitude/map-x ordering — PASS
- rendered positions match reviewed calibration anchors — PASS

## Current Crema placement

- logical map x: **380**
- logical map y: **195**
- calibration: **MAP-GEO-001**

## Outcome

- **Verification result:** PASS
- **Lifecycle state supported:** VERIFIED for the current beta calibration/control scope
- **Canonical / PRODUCTION_READY:** no
- **Human Product Owner approval of future anchor changes:** still required
- **Map asset changed:** no
- **Exceptions used:** none

Documentation-only commits after the tested SHA do not alter the tested map rendering or calibration logic.

## Invalidation note — 2026-09-29

This verification record is **superseded / invalid for geographic correctness of the Crema anchor**. The Product Owner identified that the marker still did not visually fall in Lombardia on the actual map asset. The failure mode was circular validation: the reviewed community anchor and the QA registry agreed with each other, but both were derived from an incorrect placement. Corrective work requires an independent-landmark calibration and a new verification record.
