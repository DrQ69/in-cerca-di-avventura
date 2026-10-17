# ICA Project Risk Register

**Document ID:** ICA-PROJ-RISK-001  
**Version:** 1.0  
**Updated:** 2026-10-17  
**Scope:** cross-project implementation, content, governance and release risks.  
**Scoring:** Frequency (F) 1–5, Impact (I) 1–5, Risk = F × I.

| ID | Risk | F | I | Score | Level | Mitigation / control | Status |
|---|---|---:|---:|---:|---|---|---|
| PRJ-R01 | Beta implementation advances faster than operational documentation | 5 | 4 | 20 | Critical | README, Project Context, Cronache tracking, verification records and asset manifest were synchronised during the 2026-09-29 consolidation; keep same-PR documentation updates as a standing control | Mitigated; ongoing control |
| PRJ-R02 | Non-trivial direct writes to `main` bypass branch/PR evidence | 4 | 5 | 20 | Critical | Enforce documented branch → QA → PR → squash flow; complete minimal branch protection tracked by Issue #17 | Open |
| PRJ-R03 | Public static player JSON exposes real-name mapping despite nickname-only public identity rule | 4 | 5 | 20 | Critical | Public `data/players.json` now excludes `real_name` and `event_display_name`; baseline QA forbids their reintroduction. Private reconciliation must remain outside the public static registry | Mitigated in beta-consolidation change; monitor |
| PRJ-R04 | Legacy `/beta/` URLs are mistaken for active ICA v1 surfaces | 3 | 4 | 12 | Medium-high | Root is the v1 implementation; legacy beta HTML entry points redirect to root and are marked noindex | Controlled by root migration |
| PRJ-R05 | Asset manifest does not cover active late-September assets | 5 | 3 | 15 | Critical | Active late-September raster assets and current Cronache ornamental SVG dependencies are registered; inactive hold/status assets are explicitly archived | Mitigated and tracked |
| PRJ-R06 | Visual asset identity/path/cache errors reach public beta | 3 | 5 | 15 | Critical | Alleanze visual QA now pins exact source dimensions for the Italy map, Bronze medallion and Ordinary Mortals logo; cache-busting remains secondary | Mitigated for current Alleanze pilot; monitor |
| PRJ-R07 | Verification records lag behind implementation | 4 | 4 | 16 | Critical | VR-0011 through VR-0014 now cover Home, Avventurieri, Alleanze and post-VR-0010 Adunanze against the 2026-09-29 tested implementation | Mitigated for current beta snapshot; repeat on material change |
| PRJ-R08 | Shared shell change causes cross-page regression | 3 | 4 | 12 | Medium-high | Shared-shell change triggers all page workflows; maintain header consistency test and smoke matrix | Controlled, monitor |
| PRJ-R09 | Cronache layered CSS becomes hard to maintain | 4 | 3 | 12 | Medium-high | Former base/M75/M100/aesthetic/orientation/deep-pass/background layers consolidated in-order into `beta/cronache/cronache-consolidated.css`; VR-0015 confirms rendered/runtime QA PASS after consolidation | Mitigated and verified for current Cronache beta snapshot |
| PRJ-R10 | Incomplete event facts are accidentally presented as verified | 2 | 5 | 10 | Medium-high | Preserve explicit truth/date status fields; UI must omit or label unknown facts rather than infer them | Controlled |
| PRJ-R11 | Root v1 pages are declared PRODUCTION_READY before final M11/M12 closure | 2 | 5 | 10 | Medium-high | Root migration requires visual QA now; final M11 baseline + M12 canonical-page registration remain a separate release-closure gate | Controlled; final gate pending |
| PRJ-R12 | Asset provenance/licensing remains unresolved for selected external assets | 3 | 3 | 9 | Medium | ICA brand source/runtime family approved on 2026-10-17; external Team Void and Ordinary Mortals permission details remain tracked in Issue #94 | Brand mitigated; external permission metadata pending |
| PRJ-R13 | Only some pages have performance gates equivalent to Adunanze | 3 | 3 | 9 | Medium | Extend runtime/Lighthouse checks when pages become production candidates, especially image-heavy Home/Alleanze/Avventurieri | Open |
| PRJ-R14 | Merchant/Alliance data model grows before governance fields are defined | 2 | 3 | 6 | Medium | Keep merchant placement pending until verified location/category data exists; version schema before expansion | Controlled |
| PRJ-R15 | Alleanze marker is placed in the wrong Italian region because coordinates are guessed visually | 4 | 4 | 16 | Critical | MAP-GEO-001 now requires independent geographic landmarks on the actual map asset, not only community-to-community anchors; Crema is rechecked against a landmark-affine estimate plus rendered QA | Corrected and VERIFIED by VR-0017; VR-0016 superseded |

## Review rules

- Score **15–25**: must be controlled before production promotion of the affected surface.
- Score **9–14**: explicit mitigation and verification are required before approval.
- Score **1–8**: monitor and escalate if implementation evidence worsens.

This register complements, and does not replace, the specialist `docs/M7_RISK_REGISTER.md`.
