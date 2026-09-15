# VR-0007 — M7.1 Canonical Shell Runtime Validation

- **Object ID / Name:** ICA-P0-SHELL-001 / Canonical Shell v1
- **Objects:** `SIG-01`, `NAV-01`, `NAV-02`
- **Object type:** P0 interactive component set
- **Version label:** 1.0
- **Implementation under test:** merged shell implementation tree from PR #21
- **Lifecycle before validation:** IMPLEMENTED
- **Requested target:** determine whether runtime evidence is sufficient for VERIFIED
- **Primary QA Profile:** QAP-CMP-I
- **Applicable families:** CMP / TEC / A11Y / VIS
- **Tester / Agent:** ChatGPT
- **Date:** 2026-09-15

## Runtime environment

Automated browser measurements were executed in Chromium 144.0.7559.96, headless, on the canonical shell structure and the responsive CSS rules relevant to shell/navigation layout.

Important limitation: the validation environment could not resolve the external Google Fonts request or materialise the binary emblem asset. The browser run therefore used a dimension-equivalent SIG placeholder and the declared serif fallback for navigation text. For that reason this record **does not claim final NAV-01 production-font fit or final SIG-01 visual approval**.

## Viewport results

| Viewport | Active nav | Page overflow | Touch/menu containment | NAV fit/gap | Result |
|---|---|---|---|---|---|
| 360×800 | NAV-02 | none | 44px targets; panel contained | N/A | PASS |
| 390×844 | NAV-02 | none | 44px targets; panel contained | N/A | PASS |
| 480×900 | NAV-02 | none | 44px targets; panel contained | N/A | PASS |
| 768×1024 | NAV-02 | none | 44px targets; panel contained | N/A | PASS |
| 1024×768 | NAV-01 | none | N/A | labels fit; min gap 8px | CONDITIONAL PASS |
| 1100×800 | NAV-01 | none | N/A | labels fit; min gap 8px | CONDITIONAL PASS |
| 1180×800 | NAV-01 | none | N/A | labels fit; min gap 8px | CONDITIONAL PASS |
| 1280×800 | NAV-01 | none | N/A | labels fit; min gap 12px | CONDITIONAL PASS |
| 1440×900 | NAV-01 | none | N/A | labels fit; min gap 12px | CONDITIONAL PASS |
| 1920×1080 | NAV-01 | none | N/A | labels fit; min gap 12px | CONDITIONAL PASS |
| 844×390 | NAV-02 | none | open panel contained | N/A | PASS |
| 667×375 | NAV-02 | none | open panel contained | N/A | PASS |
| 915×412 | NAV-02 | none | open panel contained | N/A | PASS |

`CONDITIONAL PASS` means geometry passed with the declared fallback serif, but M7.1 still requires a recheck with the production Cinzel-family font candidate before NAV-01 fit can be closed.

## Keyboard / focus results

At tested NAV-02 widths, observed sequence was:

`SIG-01 -> Menu summary -> first navigation item`

The disclosure opened by keyboard, the first menu item became reachable by Tab, and the focused item had a visible non-zero outline. Source semantics remain native `details` / `summary` / `nav` / links.

## Check updates

| Check | Result after this run | Notes |
|---|---|---|
| QA-CMP-005 keyboard operation | PASS for NAV-02 runtime path | native traversal observed |
| QA-CMP-006 focus visible | PASS | runtime outline observed |
| QA-CMP-007 44×44 controls | PASS for repeated NAV-02 links/menu | measured bounds >=44px |
| QA-CMP-010 page overflow | PASS for tested matrix | none detected |
| QA-CMP-012 canonical viewport matrix | PARTIAL | geometry/interaction passed; final visual/font evidence pending |
| QA-CMP-013 short landscape | PASS for NAV-02 containment | 844×390, 667×375, 915×412 |
| QA-CMP-NAV-003 NAV-01 real-label fit | BLOCKED | must repeat with actual production font candidate |
| QA-CMP-NAV-005 NAV-02 keyboard/touch | PASS | runtime evidence obtained |
| QA-A11Y-001 keyboard reachability | PASS for tested shell path | observed |
| QA-A11Y-010 touch target | PASS for NAV-02 | measured |
| QA-VIS-001 recognisably ICA | BLOCKED | final emblem/font not rendered in validation environment |
| QA-VIS-007 ornament/control overlap | PARTIAL | CSS shell geometry clean; final visual asset review pending |
| QA-VIS-008 ICA essenziale mobile | BLOCKED | requires final SIG-01 rendering/PO visual review |

## Observations

The responsive switch behaves as designed: NAV-02 remains active below 1024px and NAV-01 activates at 1024px. No page-level horizontal overflow was detected. The mobile menu remains inside the viewport in the mandatory short-landscape cases and uses internal scrolling capacity rather than expanding page width.

No Critical, High or Medium runtime defect was found in this validation pass.

## Residual requirements before VERIFIED

1. repeat NAV-01 fit at 1024 / 1100 / 1180 / 1280 / 1440 using the actual current Cinzel-family production candidate;
2. render the real `SIG-01-CANDIDATE-ROOT` asset and perform observable visual review;
3. confirm ICA visual identity and mobile `ICA essenziale` judgement with the real emblem/font;
4. re-run NAV fit after final production typography lock;
5. Product Owner approval remains separate from verification.

## Outcome

- **Verification result:** PARTIAL PASS
- **Lifecycle supported:** remains `IMPLEMENTED`
- **Release readiness:** NOT_READY
- **M7.1 overall:** still `Specification Approved — Implementation Validation Pending`

The runtime mechanics of the first P0 shell slice are substantially validated, especially NAV-02 interaction, target size, containment and overflow. Final M7.1 closure is intentionally withheld until production-font fit and real visual identity evidence are available.