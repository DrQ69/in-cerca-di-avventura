# ICA Project Risk Register

**Document ID:** ICA-PROJ-RISK-001  
**Version:** 1.0  
**Updated:** 2026-09-29  
**Scope:** cross-project implementation, content, governance and release risks.  
**Scoring:** Frequency (F) 1–5, Impact (I) 1–5, Risk = F × I.

| ID | Risk | F | I | Score | Level | Mitigation / control | Status |
|---|---|---:|---:|---:|---|---|---|
| PRJ-R01 | Beta implementation advances faster than operational documentation | 5 | 4 | 20 | Critical | Update README, Project Context, task registers and asset manifest in the same coherent PR as major changes; quarterly-style review is not enough | Open / being corrected |
| PRJ-R02 | Non-trivial direct writes to `main` bypass branch/PR evidence | 4 | 5 | 20 | Critical | Enforce documented branch → QA → PR → squash flow; complete minimal branch protection tracked by Issue #17 | Open |
| PRJ-R03 | Public static player JSON exposes real-name mapping despite nickname-only public identity rule | 4 | 5 | 20 | Critical | Remove real-name fields from publicly shipped JSON or move matching logic to a non-public source; verify UI and raw file exposure | Open — decision/action required |
| PRJ-R04 | Beta navigation is mistaken for canonical IA | 4 | 4 | 16 | Critical | Keep beta explicitly non-canonical; require deliberate IA migration before canonical marker / production-ready claim | Controlled, promotion blocked |
| PRJ-R05 | Asset manifest does not cover active late-September assets | 5 | 3 | 15 | Critical | Register Cronache/Avventurieri/Alleanze assets, provenance, status, dimensions and constraints | Open |
| PRJ-R06 | Visual asset identity/path/cache errors reach public beta | 3 | 5 | 15 | Critical | Add asset identity assertions to visual QA; cache-bust only as secondary control; manifest asset IDs should map to exact files | Open after Alleanze incident |
| PRJ-R07 | Verification records lag behind implementation | 4 | 4 | 16 | Critical | Add VRs for Home, Avventurieri, Alleanze and post-2026-09-21 Adunanze changes; do not reuse stale VERIFIED claims | Open |
| PRJ-R08 | Shared shell change causes cross-page regression | 3 | 4 | 12 | Medium-high | Shared-shell change triggers all page workflows; maintain header consistency test and smoke matrix | Controlled, monitor |
| PRJ-R09 | Cronache layered CSS becomes hard to maintain | 4 | 3 | 12 | Medium-high | Consolidate M75/M100/deep-pass layers after final visual acceptance; preserve regression evidence before cleanup | Open |
| PRJ-R10 | Incomplete event facts are accidentally presented as verified | 2 | 5 | 10 | Medium-high | Preserve explicit truth/date status fields; UI must omit or label unknown facts rather than infer them | Controlled |
| PRJ-R11 | Beta pages are promoted without M11/M12 evidence | 2 | 5 | 10 | Medium-high | Keep visual baseline and canonical-page registries empty until explicit Product Owner promotion; enforce marker/registry coupling | Controlled |
| PRJ-R12 | Asset provenance/licensing remains unresolved for selected AI-assisted or legacy assets | 3 | 3 | 9 | Medium | Close provenance/permission fields before production approval | Open |
| PRJ-R13 | Only some pages have performance gates equivalent to Adunanze | 3 | 3 | 9 | Medium | Extend runtime/Lighthouse checks when pages become production candidates, especially image-heavy Home/Alleanze/Avventurieri | Open |
| PRJ-R14 | Merchant/Alliance data model grows before governance fields are defined | 2 | 3 | 6 | Medium | Keep merchant placement pending until verified location/category data exists; version schema before expansion | Controlled |

## Review rules

- Score **15–25**: must be controlled before production promotion of the affected surface.
- Score **9–14**: explicit mitigation and verification are required before approval.
- Score **1–8**: monitor and escalate if implementation evidence worsens.

This register complements, and does not replace, the specialist `docs/M7_RISK_REGISTER.md`.
