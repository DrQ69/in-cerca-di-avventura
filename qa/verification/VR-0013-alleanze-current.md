# VR-0013 — Alleanze current-state verification

## Record metadata
- **Verification ID:** VR-0013
- **Object:** `beta/alleanze/`, `data/alliances.json`, `assets/alleanze/`
- **Object type:** page-template / asset-integrity / content-data
- **Tested implementation SHA:** `3504c4cb607f3a6170ac039cc7efbefd6f301376`
- **PR:** #92
- **Date:** 2026-09-29

## Scope
Verification of the three-community pilot map after the 2026-09-29 map/logo/medallion incident and subsequent corrective work.

## Evidence
- ICA baseline QA run **36592080199** — PASS
- Alleanze visual QA run **36592080332** — PASS
- visual QA checks exact source geometry:
  - Italy map: **900×563**
  - Bronze medallion: **360×351**
  - Ordinary Mortals logo: **320×320**
- expected markers: Il Regno di Cremos / Crema, Team Void / Prato, Ordinary Mortals / Roma
- merchant filter currently yields no placed merchant entities, as intended

## Outcome
- **Verification result:** PASS
- **Release readiness supported:** STAGING_READY beta scope
- **Canonical / APPROVED / PRODUCTION_READY:** no
- **M11 approved baseline created:** no
- **Exceptions used:** none

The asset identity checks are intended to prevent a repeat of the wrong-map or substituted-logo failure.
