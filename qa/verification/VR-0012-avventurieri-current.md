# VR-0012 — Avventurieri current-state verification

## Record metadata
- **Verification ID:** VR-0012
- **Object:** `beta/avventurieri/` + public player registry
- **Object type:** page-template / content-data / privacy control
- **Tested implementation SHA:** `3504c4cb607f3a6170ac039cc7efbefd6f301376`
- **PR:** #92
- **Date:** 2026-09-29

## Scope
Verification of the current nickname-based Avventurieri directory after removing `real_name` and `event_display_name` from the public static player registry.

## Evidence
- ICA baseline QA run **36592080199** — PASS
- Avventurieri visual QA run **36592080494** — PASS
- baseline QA now fails if `real_name` or `event_display_name` reappear in `data/players.json`
- current page statistics remain derived from player IDs in `data/events.json` and `data/league-standings.json`

## Outcome
- **Verification result:** PASS
- **Public identity rule:** nickname-based registry preserved
- **Release readiness supported:** STAGING_READY beta scope
- **Canonical / APPROVED / PRODUCTION_READY:** no
- **Exceptions used:** none

Private/administrative name reconciliation must remain outside the public static player registry.
