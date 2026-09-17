# Cronache — M50 Visual QA

**Status:** REVIEWED — M50 refinement cycle
**Reference:** Copilot Cronache visual concept + PO alignment of 2026-09-17
**Scope:** visual-system implementation in `beta/cronache/`

## Gate principles

The page is not judged only by functional correctness. It must read as an ICA page: ceremonial archive, maintained citadel, restrained dark-fantasy editorial language, clear factual hierarchy, no SaaS/dashboard or videogame-HUD drift.

## Review results

| Area | Result | Notes |
|---|---|---|
| Canonical navigation | PASS | Home navigation retained: Le Adunanze / Cronache / Avventurieri / Alleanze / Proclami. |
| ICA identity host | PARTIAL | Architectural host is implemented. Preview still uses existing project render `assets/logo-emblem.webp`; exact supplied Logo ICA source remains immutable and pending production-source transfer. |
| Archive threshold | PASS | Compact threshold, strong `CRONACHE` hierarchy, functional subtitle, no marketing-hero behavior. |
| Archive metrics | PASS | Only Leghe Completate / Giostre Completate; no invented vanity metrics. |
| Search/filter register | PASS | Parchment-ledger treatment; semantic HTML controls; Stagione/Stato/Luogo/Lega/Formato + search. |
| Season hierarchy | PASS | Year/season is primary grouping and event count remains visible. |
| Event record grammar | PASS | Horizontal archival record rather than generic SaaS card. Data remains HTML, frame remains CSS-first. |
| Status icon system | PASS | FUTURA / IN CORSO / CONCLUSA family installed; icon always paired with text. |
| Metadata visual grammar | PASS | Dedicated restrained SVG family for date/place/type/players/winner now integrated. |
| Fact vs decoration | PASS | Factual event title/date/place/winner/player count remain semantically stronger than ornament. |
| Content truth | PASS WITH KNOWN GAP | La Giostra date stays visibly unverified rather than inferred. No Copilot mock event facts retained as truth. |
| Closing copy | PASS / ON HOLD | Decorative divider exists; candidate closing inscription is not rendered while PO decision remains suspended. |
| Responsive architecture | PASS AT CODE REVIEW | Desktop/tablet/mobile use structural recomposition; no fixed mural dependency. Runtime visual regression remains an M75/M100 gate. |
| Accessibility basics | PASS AT M50 | Focus visibility, 44px mobile targets, semantic labels, reduced-motion rule, icon+text status. Full keyboard/AT QA remains M75. |
| Held Hero asset | PASS | `assets/hero-fantasy.webp` is not used. |
| Copilot fictional crest | PASS | Not recreated. |

## M50 visual risks carried forward

1. **Exact Logo ICA source integration** — architectural host is ready, but the production page must ultimately reference the exact supplied Logo ICA source or an explicitly approved lossless web derivative. The logo artwork itself must never be redrawn, recoloured or altered.
2. **Runtime visual regression** — code-level responsive review passes, but screenshots at target widths remain required before M75 is declared complete.
3. **Status icon finish** — current SVG family is structurally correct and intentionally restrained; final polish may still be warranted if integrated runtime review shows insufficient distinction or excessive game-HUD character.
4. **Event-record density** — current desktop information hierarchy is deliberately dense to resemble an archive. M75 should verify scanning speed at 1024–1440px and simplify if the record becomes visually cramped.

## Decision

The visual system is sufficiently mature to continue into M75 implementation work. M50 is **not PO-approved art direction**; it is an implemented and internally reviewed production baseline. Exact Logo ICA production-source integration remains the only material identity dependency carried forward.
