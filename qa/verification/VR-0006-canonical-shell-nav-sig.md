# VR-0006 — Canonical Shell v1 / SIG-01 / NAV-01 / NAV-02

- **Object ID / Name:** ICA-P0-SHELL-001 / Canonical Shell v1
- **Object type:** P0 interactive component set + QA fixture
- **Version label:** 1.0
- **Tested implementation head SHA:** `d4cbc73d9eb25e548ce6fcb022b74a416f59bac0`
- **Final PR head SHA:** `d9ec28f79154af0534e95292875a4fa41922c2e7`
- **PR:** #21
- **Merged implementation SHA:** `fc7014e1a29dd72477f357eec38590129e75c454`
- **Final PR tree / merged implementation tree:** `2ededb1afcf536a56bb17d09534a72e77012198d`
- **Final PR vs squash-merge tree/content equivalence confirmed:** yes
- **Lifecycle state before verification:** SPECIFIED / IMPLEMENTED
- **Requested target state:** IMPLEMENTED; do not promote to VERIFIED until M7.1 runtime/visual evidence passes
- **Release readiness target:** NOT_READY / fixture-only implementation slice
- **Applicable specifications:** Canonical Spec, Design System, Asset Specification, M7/M7.1, M8/M8.1, M9/M9.1, M10, M11, M12
- **Applicable QA families:** GEN / CMP / TEC / A11Y / VIS
- **Primary QA Profile:** QAP-CMP-I
- **Tester / Agent:** ChatGPT
- **Date:** 2026-09-15

## Checks

| Check ID | Criterion | Result | Method | Evidence | Defect / Exception | Notes |
|---|---|---|---|---|---|---|
| QA-GEN-001 | Object purpose/IDs/version/lifecycle identifiable | PASS | manual | `docs/components/P0_SHELL_NAV_SIG.md` | — | Stable object and component IDs recorded. |
| QA-GEN-002 | Applicable specifications identified | PASS | manual | component contract + PR #21 | — | Routing followed Project Index. |
| QA-GEN-003 | No canonical conflict known | PASS | manual | source review | — | Uses exact canonical labels; logo returns Home; no Home text item. |
| QA-GEN-006 | No synthetic QA content presented as fact | PASS | manual | fixture source | — | Fixture explicitly identifies all content as synthetic test material. |
| QA-CMP-002 | Required variants/states defined | PASS | manual | component contract | — | Desktop/mobile, focus/current/hover rules recorded. |
| QA-CMP-003 | Default/focus/current states represented | PASS | source review | `canonical-shell.css` | — | Runtime appearance still requires M7.1 visual check. |
| QA-CMP-004 | Essential behaviour does not depend on hover | PASS | source review | native links + details/summary | — | Hover treatment gated to hover-capable pointers. |
| QA-CMP-005 | Keyboard operation complete/logical | BLOCKED | runtime | M7.1 pending | — | Native semantics support keyboard operation, but runtime traversal evidence is still required. |
| QA-CMP-006 | Focus visible | PASS | source review | explicit `:focus-visible` rule | — | Runtime clipping/visibility still included in M7.1 matrix. |
| QA-CMP-007 | Primary/repeated controls meet 44×44 target | PASS | source review | CSS min-height/min-size rules | — | Runtime confirmation pending. |
| QA-CMP-008 | Semantic HTML / native semantics appropriate | PASS | manual | header/nav/list + details/summary | — | No custom ARIA widget introduced. |
| QA-CMP-010 | No page-level horizontal overflow | BLOCKED | runtime | M7.1 pending | — | Cannot be proven from source alone across mandatory viewport matrix. |
| QA-CMP-011 | Responsive contract exists | PASS | manual | `P0_SHELL_NAV_SIG.md` | — | Contract includes activation and recheck triggers. |
| QA-CMP-012 | Canonical viewport matrix passes | BLOCKED | runtime | M7.1 pending | — | Required next validation step. |
| QA-CMP-013 | Short-landscape test passes | BLOCKED | runtime | M7.1 pending | — | Fixture includes contained `100dvh` panel behaviour but needs observation. |
| QA-CMP-NAV-001 | Canonical labels exact | PASS | automated/manual | fixture source | — | Imprese / Campagne / Avventurieri / Cronache / Il Reame / Archivio. |
| QA-CMP-NAV-002 | Sigil links Home; no redundant Home item | PASS | manual | fixture source | — | Fixture Home target is its own top anchor only. |
| QA-CMP-NAV-003 | NAV-01 real-label fit passes | BLOCKED | runtime | 1024/1100/1180/1280/1440 matrix pending | — | Production-font lock also triggers recheck. |
| QA-CMP-NAV-004 | NAV-02 retained if desktop fit fails | PASS | design/source | contract + CSS | — | Nominal switch is 1024; local breakpoint will change only if measured fit requires it. |
| QA-CMP-NAV-005 | Mobile menu keyboard/touch without focus loss/overflow | BLOCKED | runtime | M7.1 pending | — | Native details/summary reduces risk but does not replace testing. |
| QA-TEC-001 | Smallest coherent change | PASS | manual | PR #21 | — | Production homepage intentionally untouched. |
| QA-TEC-002 | No unapproved framework/build dependency | PASS | automated/manual | source + CI | — | HTML/CSS only; Google Fonts load is fixture typography support, not build dependency. |
| QA-TEC-003 | Referenced files/assets exist | PASS | automated | `ICA baseline QA` runs #21 and #22 | — | CI succeeded before and after adding the Verification Record. |
| QA-TEC-013 | Legacy assumptions not silently promoted | PASS | manual | isolated fixture + contract | — | Legacy CSS/IA not reused as canonical precedent. |
| QA-A11Y-001 | Essential controls reachable by keyboard | BLOCKED | runtime | M7.1 pending | — | Requires observed traversal. |
| QA-A11Y-003 | Focus indicator exists | PASS | source review | CSS focus rule | — | Visibility in all viewports pending. |
| QA-A11Y-005 | Landmarks/controls use semantics | PASS | manual | fixture source | — | Header/nav/details/summary/list/link semantics. |
| QA-A11Y-010 | Touch target requirement represented | PASS | source review | CSS | — | Runtime confirmation pending. |
| QA-VIS-001 | Result recognisably ICA | BLOCKED | visual | M7.1/M11 candidate review pending | — | Requires rendered visual evidence. |
| QA-VIS-002 | Function/facts outrank ornament | PASS | source/design review | CSS-only restrained shell | — | No decorative banner asset introduced. |
| QA-VIS-007 | Ornament does not overlap controls | BLOCKED | visual | M7.1 pending | — | Runtime visual evidence required. |
| QA-VIS-008 | Mobile remains ICA essenziale | BLOCKED | visual | M7.1 pending | — | SIG-01 remains the identity anchor; final judgement requires render. |

## Automated evidence

GitHub Actions `ICA baseline QA` runs #21 and #22 completed successfully. Run #22 passed on final PR head `d9ec28f79154af0534e95292875a4fa41922c2e7`.

Final PR head and squash-merge implementation commit both resolve to tree `2ededb1afcf536a56bb17d09534a72e77012198d`, confirming content equivalence for the merged implementation.

This confirms repository/HTML/path/M12 structural integrity for the work block. It does **not** prove browser responsive or visual conformance.

## Asset state

`SIG-01` currently renders the already registered `SIG-01-CANDIDATE-ROOT` asset.

- manifest status remains `candidate`;
- this implementation does not change asset approval state;
- provenance/permission confirmation remains pending;
- Product Owner visual acceptance remains pending.

## Residual validation required

Before lifecycle promotion to `VERIFIED`:

1. run M7.1 viewport matrix;
2. run explicit NAV fit widths 1024 / 1100 / 1180 / 1280 / 1440;
3. inspect 844×390 / 667×375 / 915×412 with NAV-02 open;
4. verify keyboard traversal and visible focus;
5. verify 44×44 targets in rendered CSS;
6. verify no page-level horizontal overflow;
7. perform observable ICA visual review;
8. repeat NAV fit when production typography is locked.

## Defects and exceptions

- Critical: 0 known
- High: 0 known
- Medium: 0 filed
- Exceptions: none
- BLOCKED checks above represent pending validation, not accepted failures.

## Outcome

- **Verification result:** PARTIAL
- **Lifecycle state supported by evidence:** IMPLEMENTED
- **Release readiness supported:** NOT_READY
- **APPROVED supported:** no
- **M7.1 status:** still `Specification Approved — Implementation Validation Pending`

Canonical Shell v1, `SIG-01`, `NAV-01` and `NAV-02` are implemented as an isolated P0 QA fixture. They are **not yet VERIFIED or APPROVED** pending browser/visual conformance evidence.