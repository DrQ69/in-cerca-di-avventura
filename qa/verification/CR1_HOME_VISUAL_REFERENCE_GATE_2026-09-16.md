# CR1 Home Visual Reference Gate — 2026-09-16

**Scope:** Home visual-reference composition and closing-copy Product Owner decisions  
**Branch:** `governance/narrative-art-bible-v0-1`  
**Result:** `PASS_SCOPE`  
**Production authorization:** `FROZEN`  
**Canonical artifact readiness:** remains governed by upstream dependencies

## Product Owner decisions locked

1. **Community-first Home composition**  
   `Hero → Prossima Adunanza → Avventurieri + Alleanze → Adunanze + Proclami → Cronache / Gli Annali → Chiusura`

2. **Default closing headline**  
   `Trova la tua prossima Adunanza.`

The closing headline is used only when Le Adunanze has a truthful live route. If that condition is not met, readiness rules suppress the Adunanza-specific promise and fall back to a direct available route.

## Reference-to-production controls retained

- visual reference is not a pixel-perfect implementation contract;
- ICA crest and environmental Hero are identity-critical;
- guardian figures and hanging banners are optional enhancements;
- event images, player portraits, organization marks and editorial media are content-governed;
- text, status, dates, labels and CTA copy remain semantic HTML rather than baked raster content;
- responsive layouts preserve chapter order and remove/simplify decorative environment before compressing typography or interaction targets;
- non-canonical `Reame` closing wording from the visual concept is superseded and must not return.

## Gate interpretation

`PASS_SCOPE` means the Product Owner questions specific to the Home visual composition are resolved.

It does **not** mean:

- the whole Home dossier is `APPROVED`;
- the Narrative & Art Bible is approved;
- production assets are authorized;
- runtime accessibility/performance is verified;
- Creative Canonical Lock is complete.

## Remaining blocker before production-asset authorization

Final Product Owner review of `docs/NARRATIVE_ART_BIBLE.md` v0.4 and subsequent canonical propagation/reconciliation.

## Traceability

- `CDL-025` — community-first Home composition;
- `CDL-026` — default H08 closing headline;
- `PAG-HOME-007` — Product Owner-locked composition;
- `PAG-HOME-011` — Product Owner-locked closing headline with readiness fallback.
