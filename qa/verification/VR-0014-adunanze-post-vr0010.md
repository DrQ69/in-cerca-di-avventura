# VR-0014 — Adunanze post-VR-0010 verification

## Record metadata
- **Verification ID:** VR-0014
- **Object:** current `beta/adunanze/` portal + `beta/adunanze/nazionale/`
- **Object type:** page-template / content-data / responsive visual verification
- **Previous verification:** VR-0010, 2026-09-21
- **Tested implementation SHA:** `3504c4cb607f3a6170ac039cc7efbefd6f301376`
- **PR:** #92
- **Date:** 2026-09-29

## Reason for re-verification
After VR-0010, the beta received material event-content and interaction changes: direct National routing from the shared beta navigation, Peasant rules/prizes/signup content, and popover positioning fixes.

## Evidence
- ICA baseline QA run **36592080199** — PASS
- Adunanze visual QA run **36592080557** — PASS
- seven viewport matrix retained
- current QA checks:
  - portal composition and mobile priority;
  - National-only future/in-progress filtering;
  - chronological order;
  - Google Maps links;
  - check-in/start/rules/prizes/signup controls;
  - popover viewport containment;
  - Stage II Peasant title, check-in, start, Joker venue, deckbuilding rules, required decklist, prize anchors and Sorcery event signup URL;
  - no stale past event left marked `futura`.

## Outcome
- **Verification result:** PASS
- **Lifecycle state supported:** VERIFIED for the tested beta scope
- **Release readiness supported:** STAGING_READY beta scope
- **Canonical / APPROVED / PRODUCTION_READY:** no
- **M11/M12 promotion:** none

VR-0014 supersedes reliance on VR-0010 for the later Adunanze beta changes covered above.
