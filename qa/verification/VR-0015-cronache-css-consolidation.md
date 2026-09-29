# VR-0015 — Cronache CSS consolidation verification

## Record metadata
- **Verification ID:** VR-0015
- **Object:** `beta/cronache/` stylesheet consolidation
- **Object type:** code-change / visual-equivalence refactor
- **Tested implementation SHA:** `51df67f0d99e8ee71db4c94e4392c5072c593f02`
- **PR:** #93
- **Date:** 2026-09-29
- **Lifecycle target:** VERIFIED beta scope
- **Release readiness target:** STAGING_READY beta scope

## Scope

The active Cronache stylesheet stack was consolidated without intentional visual or behavioural change.

Former active cascade, preserved in the same order inside `beta/cronache/cronache-consolidated.css`:

1. `style.css`
2. `m75.css`
3. `m100.css`
4. `m100-aesthetic.css`
5. `m100-orientation.css`
6. `m100-deep2.css`
7. `m100-background-test.css`

The shared shell and summary styles remain separate and still load after the consolidated file:

- `assets/css/ica-shared-shell.css`
- `beta/cronache/cronache-summary.css`

The superseded layered files were removed after the consolidated source was installed.

## Evidence

Against tested implementation SHA `51df67f0d99e8ee71db4c94e4392c5072c593f02`:

- ICA baseline QA run **36593269393** — PASS
- Cronache visual QA run **36593269419** — PASS
- LCS-02 runtime QA run **36593269475** — PASS
- Shared banner consistency QA run **36593269568** — PASS
- Adunanze visual QA run **36593269443** — PASS

The Cronache visual regression harness covers the current rendered event archive, winner links, Google Maps links, target viewports, overflow and browser-console errors.

## Outcome

- **Verification result:** PASS
- **Visual/behavioural equivalence supported by current automated scope:** yes
- **Lifecycle state supported:** VERIFIED for the stylesheet-consolidation beta scope
- **Release readiness supported:** STAGING_READY beta scope
- **Product Owner visual approval:** not assigned by this record
- **Canonical / PRODUCTION_READY:** no
- **M11 approved baseline created:** no
- **M12 canonical-page registration changed:** no
- **Exceptions used:** none

Documentation-only commits added after the tested implementation SHA do not alter the verified rendering.
