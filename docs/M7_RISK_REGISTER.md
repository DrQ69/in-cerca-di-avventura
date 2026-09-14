# M7 Responsive Risk Register

**Document ID:** ICA-RSP-RISK-001  
**Version:** 1.0  
**Updated:** 2026-09-14  
**Scoring:** Frequency (F) 1–5, Impact (I) 1–5, Risk = F × I

| ID | Risk | F | I | Score | Level | Mitigation / Control | Status |
|---|---|---:|---:|---:|---|---|---|
| RSP-R01 | M7 specification and legacy CSS diverge | 5 | 5 | 25 | Critical | Treat legacy CSS as non-conforming reference; new canonical components must use M7/M7.1 and old responsive rules are retired as components are replaced | Controlled, validation pending |
| RSP-R02 | NAV-01 / BNR-01 cannot contain six canonical labels at 1024px | 4 | 5 | 20 | Critical | Mandatory fit test at 1024/1100/1180/1280/1440 using production font, sigil and real safe areas; use NAV-02 until measured pass width | Open until BNR/NAV prototype exists |
| RSP-R03 | Responsive behaviour remains theoretical for P0 components | 5 | 4 | 20 | Critical | Mandatory responsive contract + viewport matrix + content stress per P0 component | Open |
| RSP-R04 | Painterly hero/banner artwork loses focal subject or text-safe area on mobile | 4 | 4 | 16 | Critical | Record focal points, safe zones, crop test and dedicated mobile derivative when required | Open until P0 art exists |
| RSP-R05 | Rankings/decklists/real Sorcery content break narrow layouts | 4 | 4 | 16 | Critical | Synthetic stress fixture + real-content QA before approval | Controlled, validation pending |
| RSP-R06 | Decorative navigation becomes too dense on laptop widths | 4 | 4 | 16 | Critical | Reduce ornament before spacing/text; content-driven breakpoint; preserve touch/focus bounds | Open |
| RSP-R07 | Global card 1/2/3 column pattern is applied blindly | 3 | 4 | 12 | Medium-high | Define min/max useful width and transitions per CRD family | Controlled by M7.1 |
| RSP-R08 | Avventuriero character-sheet becomes excessively long or unreadable on mobile | 3 | 4 | 12 | Medium-high | Mobile semantic order + stacked attribute groups; avoid compressed desktop sheet | Open until ENT-02 prototype |
| RSP-R09 | Decklist mobile rows are too dense | 3 | 4 | 12 | Medium-high | Dedicated compact row preserving Avatar + affinity + Atlas + Spellbook hierarchy | Open until DCK prototype |
| RSP-R10 | Horizontal table scroll is not discoverable/accessibly usable | 3 | 4 | 12 | Medium-high | Labelled contained scroll, keyboard test, optional sticky first column after usability test | Open until table prototype |
| RSP-R11 | Standard portrait tests miss short-landscape failures | 3 | 4 | 12 | Medium-high | Add 844×390, 667×375 and 915×412 mandatory stress viewports | Controlled by M7.1 |
| RSP-R12 | 44px target rule is treated as optional | 3 | 4 | 12 | Medium-high | 44×44 mandatory for primary/repeated P0/P1 controls; exceptions documented and QA-approved | Controlled by M7.1 |
| RSP-R13 | Final font changes invalidate nav/title fit | 4 | 3 | 12 | Medium-high | Re-run responsive fit after production font lock | Open until typography lock |
| RSP-R14 | Mobile downloads desktop-weight painterly assets | 3 | 4 | 12 | Medium-high | `srcset`/`sizes`/`picture`, M6 budgets, no unnecessary derivatives, LCP-specific handling | Open until asset integration |
| RSP-R15 | iOS safe area / dynamic viewport issues appear late | 3 | 3 | 9 | Medium | Test Safari/iOS later in QA; use dvh/svh and safe-area insets where relevant | Deferred to QA/browser phase |
| RSP-R16 | Mobile loses ICA identity after ornament reduction | 2 | 4 | 8 | Medium | Preserve at least one ICA identity anchor per major block | Controlled by M7.1 |

## Review rule

- Score **15–25**: must be controlled before relevant component can be approved.
- Score **9–14**: must have an explicit mitigation and be checked during component QA.
- Score **1–8**: monitor unless implementation evidence raises severity.

This register is context-specific to ICA and must be updated when canonical components, typography and artwork become real rather than theoretical.
