# ICA QA Checklist

**Document ID:** ICA-QA-001  
**Status:** Approved specialist specification  
**Version:** 1.0  
**Milestone:** M9 — QA Checklist  
**Authority:** subordinate to `docs/ICA_CANONICAL_SPEC.md`, `docs/DEFINITION_OF_DONE.md` and `docs/M8_1_DOD_GOVERNANCE_HARDENING.md`

## 1. Purpose

This document turns the ICA Definition of Done into repeatable QA checks. It defines what must be checked, how results are recorded, which checks are blocking, and what evidence is required before a non-trivial object can be considered VERIFIED or release-ready.

M9 does not replace M8. M8 defines what “done” means; M9 defines the operational checks used to prove it.

## 2. QA result vocabulary

Every check uses exactly one result:

- `PASS` — criterion satisfied and evidence exists;
- `FAIL` — criterion not satisfied;
- `N/A` — criterion genuinely does not apply; rationale required for blocking checks;
- `BLOCKED` — check cannot currently be executed because of a missing dependency/environment/decision.

Do not use ambiguous results such as “mostly”, “looks fine”, “probably” or “acceptable”.

## 3. Severity and blocking

Use M8 severity rules:

- Critical — blocks production and normally blocks staging unless the staging exercise specifically exists to investigate the failure;
- High — blocks production; staging requires an accepted exception;
- Medium — log and assess; Product Owner acceptance is required when it affects P0 functionality, accessibility, factual integrity, brand identity or systemic behaviour;
- Low — polish/non-blocking unless cumulative impact becomes material.

A failed blocking check must link to a defect or accepted exception. No check may be silently skipped.

## 4. Evidence rule

For non-trivial verification, execute the applicable checklist and record results in a Verification Record based on `docs/VERIFICATION_RECORD_TEMPLATE.md`.

Evidence may include repository paths/commits, screenshots or renders, viewport matrices, browser/devtools observations, keyboard interaction notes, console output, manifest records, source/provenance records, automated test results, factual source references, and defect/exception IDs.

Screenshots alone do not prove keyboard, semantics, source integrity or data correctness.

## 5. QA execution levels

### Level A — Object QA
Use for an individual component, asset, data object or code change.

### Level B — Page / Template QA
Use when multiple objects are composed into a page/template.

### Level C — Release QA
Use before a release can be considered STAGING_READY or PRODUCTION_READY.

Higher-level QA does not eliminate lower-level evidence.

## 6. Universal checks — `QA-GEN-*`

| ID | Check | Blocking |
|---|---|---|
| QA-GEN-001 | Object purpose, ID/name, version and lifecycle state are identifiable. | Yes |
| QA-GEN-002 | Applicable canonical/specialist specifications are identified. | Yes |
| QA-GEN-003 | No conflict with `ICA_CANONICAL_SPEC.md` is known. | Yes |
| QA-GEN-004 | Required dependencies exist and are at the lifecycle state required by M8/M8.1. | Yes |
| QA-GEN-005 | No approved solution is duplicated without documented justification. | Yes |
| QA-GEN-006 | No factual content has been invented, silently inferred or copied from synthetic QA data. | Yes |
| QA-GEN-007 | Known uncertainties are explicitly recorded. | Yes |
| QA-GEN-008 | Active exceptions are linked to `EXCEPTION_REGISTER.md`. | Yes |
| QA-GEN-009 | Critical/High defects are absent for production readiness. | Yes |
| QA-GEN-010 | Verification evidence is current for the tested version/dependencies; no unresolved `RECHECK_REQUIRED` flag invalidates it. | Yes |

## 7. Component QA — `QA-CMP-*`

| ID | Check | Blocking |
|---|---|---|
| QA-CMP-001 | Component ID, purpose and Content Model bindings match the Component Inventory. | Yes |
| QA-CMP-002 | Required/optional content, variants and states are defined. | Yes |
| QA-CMP-003 | Default, hover where applicable, focus-visible, active and disabled states behave as specified. | Yes for interactive components |
| QA-CMP-004 | Essential functionality does not depend on hover. | Yes |
| QA-CMP-005 | Keyboard operation is complete and logical. | Yes |
| QA-CMP-006 | Visible focus is present and not obscured. | Yes |
| QA-CMP-007 | Primary/repeated controls meet the 44×44 CSS px target or have a documented accepted exception. | Yes |
| QA-CMP-008 | Semantic element/ARIA use is appropriate; native semantics are preferred. | Yes |
| QA-CMP-009 | Important text remains HTML unless an approved exception exists. | Yes |
| QA-CMP-010 | No page-level horizontal overflow is introduced. | Yes |
| QA-CMP-011 | Responsive contract exists and matches M7/M7.1. | Yes for P0/P1 |
| QA-CMP-012 | Canonical viewport matrix passes where applicable: 360, 390, 768, 1024, 1280, 1440 and 1920 px. | Yes for P0/P1 |
| QA-CMP-013 | Short-landscape/orientation test passes when component height or overlays can be critical. | Yes when applicable |
| QA-CMP-014 | Responsive stress fixture has been used when text/data density can affect layout. | Yes when applicable |
| QA-CMP-015 | Text does not collide, clip, become unreadable or overflow decorative safe areas. | Yes |
| QA-CMP-016 | ICA identity remains recognisable on mobile without sacrificing clarity/accessibility. | Yes for brand/narrative-heavy components |
| QA-CMP-017 | Decorative density reduces before essential text/control size. | Yes |
| QA-CMP-018 | Reduced-motion behaviour exists when motion is present. | Yes when applicable |
| QA-CMP-019 | Colour is not the sole carrier of essential state/meaning. | Yes |
| QA-CMP-020 | Visual result matches the Design Foundation and Sorcery-specific layer without undocumented tokens/styles. | Yes |

### Navigation-specific checks

| ID | Check | Blocking |
|---|---|---|
| QA-CMP-NAV-001 | Canonical labels are exactly Imprese, Campagne, Avventurieri, Cronache, Il Reame, Archivio. | Yes |
| QA-CMP-NAV-002 | Crest/sigil links Home; no redundant Home text item is introduced. | Yes |
| QA-CMP-NAV-003 | NAV-01 fit test passes with production font, six labels, sigil and ornamental safe areas before desktop activation width is accepted. | Yes |
| QA-CMP-NAV-004 | If NAV-01 fails at 1024 px, NAV-02 remains active until the measured passing width. | Yes |
| QA-CMP-NAV-005 | Mobile menu can be opened, traversed and closed by keyboard and touch without focus loss or page-level overflow. | Yes |

## 8. Asset QA — `QA-AST-*`

| ID | Check | Blocking |
|---|---|---|
| QA-AST-001 | Asset has stable ID, role, component/entity relation and manifest entry. | Yes |
| QA-AST-002 | Filename/path follow M6 conventions. | Yes |
| QA-AST-003 | File exists, loads and renders correctly. | Yes |
| QA-AST-004 | Format is appropriate: SVG only true vector; WebP primary raster unless justified otherwise. | Yes |
| QA-AST-005 | Dimensions/resolution suit maximum rendered use without arbitrary oversizing. | Yes |
| QA-AST-006 | File weight meets M6 budget or documented exception exists. | Yes |
| QA-AST-007 | Safe area / decorative bounds / bleed are documented when structural. | Yes when applicable |
| QA-AST-008 | Desktop/mobile focal point or derivative is appropriate when art direction matters. | Yes when applicable |
| QA-AST-009 | Functional copy is not unnecessarily baked into raster artwork. | Yes |
| QA-AST-010 | Accessibility classification is correct: decorative vs informative. | Yes |
| QA-AST-011 | Source, creator, rights/licence basis, permission/attribution and commercial-use status are documented where required. | Yes for production |
| QA-AST-012 | AI generation method is recorded when applicable. | Yes |
| QA-AST-013 | Asset is not merely a crop from a generated reference sheet. | Yes |
| QA-AST-014 | Responsive derivative set is justified by real need, not generated mechanically for every breakpoint. | Yes |
| QA-AST-015 | Manifest status/version match actual approval state. | Yes |

## 9. Page / Template QA — `QA-PAG-*`

| ID | Check | Blocking |
|---|---|---|
| QA-PAG-001 | Page role and URL match approved IA. | Yes |
| QA-PAG-002 | Primary navigation and contextual navigation lead to correct destinations. | Yes |
| QA-PAG-003 | Content follows the Content Model and does not duplicate authoritative facts unnecessarily. | Yes |
| QA-PAG-004 | Important entity relations are navigable in expected directions. | Yes when applicable |
| QA-PAG-005 | Factual information remains clear without narrative decoration. | Yes |
| QA-PAG-006 | Narrative treatment does not alter or obscure facts. | Yes |
| QA-PAG-007 | Required production P0 components/assets are APPROVED before PRODUCTION_READY. | Yes |
| QA-PAG-008 | 360/390/768/1024/1280/1440/1920 width checks pass. | Yes |
| QA-PAG-009 | Relevant short-landscape tests pass. | Yes when applicable |
| QA-PAG-010 | No page-level horizontal overflow exists. | Yes |
| QA-PAG-011 | Heading hierarchy and landmarks are semantically coherent. | Yes |
| QA-PAG-012 | Keyboard order follows visual/logical reading order. | Yes |
| QA-PAG-013 | Images have correct alt/decorative treatment. | Yes |
| QA-PAG-014 | Links resolve and there are no broken internal asset paths. | Yes |
| QA-PAG-015 | Loading/empty/error states exist where the page can encounter them. | Yes when applicable |
| QA-PAG-016 | Synthetic/demo content is visibly isolated from production content and cannot be mistaken for fact. | Yes |
| QA-PAG-017 | Reading-width rules are respected for long-form Cronache. | Yes when applicable |
| QA-PAG-018 | Tables remain semantically understandable; contained horizontal scroll does not create page overflow. | Yes when applicable |

## 10. Content / Data QA — `QA-DAT-*`

| ID | Check | Blocking |
|---|---|---|
| QA-DAT-001 | Permanent ID and slug match conventions and are not reused. | Yes |
| QA-DAT-002 | Required fields for the entity type are present. | Yes |
| QA-DAT-003 | Each fact belongs to the correct entity/source of truth. | Yes |
| QA-DAT-004 | Public/private separation is respected. | Yes |
| QA-DAT-005 | PLAYER public identity is nickname-only. | Yes |
| QA-DAT-006 | Source class is recorded where relevant. | Yes |
| QA-DAT-007 | `unknown-unverified` information is not published as fact. | Yes |
| QA-DAT-008 | Conflicting sources are escalated rather than silently reconciled. | Yes |
| QA-DAT-009 | RESULT follows final position + W/L/D model. | Yes |
| QA-DAT-010 | Campaign points/ranking follow that Campaign’s documented scoring rules. | Yes |
| QA-DAT-011 | Deck structure follows Avatar + Atlas + Spellbook. | Yes |
| QA-DAT-012 | Narrative and factual fields remain separate. | Yes |
| QA-DAT-013 | Referenced IDs resolve to existing canonical entities. | Yes |
| QA-DAT-014 | `synthetic-test` fixtures are excluded from production data/publication paths. | Yes |
| QA-DAT-015 | Derived values are reproducible from verified source data and documented rules. | Yes when applicable |

## 11. Code / Technical QA — `QA-TEC-*`

| ID | Check | Blocking |
|---|---|---|
| QA-TEC-001 | Change scope is the smallest coherent change required. | Yes |
| QA-TEC-002 | No unapproved framework/backend/database/auth/build dependency is introduced. | Yes |
| QA-TEC-003 | Referenced files and assets exist. | Yes |
| QA-TEC-004 | No new browser console errors are introduced in tested flows. | Yes |
| QA-TEC-005 | Internal links/paths touched by the change resolve. | Yes |
| QA-TEC-006 | Semantic HTML is preserved or improved. | Yes |
| QA-TEC-007 | UI change passes relevant responsive and stress checks. | Yes when applicable |
| QA-TEC-008 | Interaction change passes keyboard/focus check. | Yes when applicable |
| QA-TEC-009 | Motion change respects reduced-motion preference. | Yes when applicable |
| QA-TEC-010 | Image dimensions/aspect ratio prevent obvious avoidable layout shift. | Yes when applicable |
| QA-TEC-011 | Above-the-fold hero/LCP candidate is not incorrectly lazy-loaded. | Yes when applicable |
| QA-TEC-012 | Mobile does not clearly download oversized desktop imagery without justification. | Yes when applicable |
| QA-TEC-013 | Legacy implementation assumptions are not silently promoted into new canonical work. | Yes |
| QA-TEC-014 | Changed files and residual uncertainty are documented in the PR/Verification Record. | Yes |

## 12. Accessibility interim QA — `QA-A11Y-*`

| ID | Check | Blocking |
|---|---|---|
| QA-A11Y-001 | All essential interactive controls are reachable by keyboard. | Yes |
| QA-A11Y-002 | All essential interactions can be completed by keyboard. | Yes |
| QA-A11Y-003 | Focus indicator is visible. | Yes |
| QA-A11Y-004 | Focus order is logical and no unintended trap exists. | Yes |
| QA-A11Y-005 | Landmarks/headings/controls use appropriate semantics. | Yes |
| QA-A11Y-006 | Informative images have meaningful alternatives; decorative images do not create noise. | Yes |
| QA-A11Y-007 | Essential text and states have readable contrast under the interim baseline. | Yes |
| QA-A11Y-008 | Essential meaning is not conveyed by colour alone. | Yes |
| QA-A11Y-009 | Reduced-motion is respected for non-essential movement. | Yes when applicable |
| QA-A11Y-010 | Touch target requirements from M7.1 are respected. | Yes |

M12 may add measurable WCAG/performance thresholds; it must not silently weaken these checks.

## 13. Visual / Brand QA — `QA-VIS-*`

| ID | Check | Blocking |
|---|---|---|
| QA-VIS-001 | Result feels recognisably ICA even without relying only on the logo. | Yes for P0 visual components/pages |
| QA-VIS-002 | Visual hierarchy prioritises function/facts over ornament. | Yes |
| QA-VIS-003 | Materials follow approved semantics: night/blue primary, iron/stone structural, antique gold/bronze precious, parchment for reading, elements as secondary magical system. | Yes when applicable |
| QA-VIS-004 | Gold is not used as a dominant flat field without justification. | No unless it damages hierarchy/brand |
| QA-VIS-005 | Sorcery Four Elements are secondary identity markers and do not replace ICA foundation palette. | Yes |
| QA-VIS-006 | AVVENTURIERO and AVATAR are not visually/content-wise conflated. | Yes |
| QA-VIS-007 | Decorative frames/ornaments do not overlap controls or factual copy. | Yes |
| QA-VIS-008 | Mobile remains “ICA essenziale”, not generic UI stripped of all identity anchors. | Yes |
| QA-VIS-009 | Authentic event photography is not faux-painted unless explicitly intended and approved. | Yes |
| QA-VIS-010 | New visuals do not resurrect the historical Heraldry Kit as an implicit reference system. | Yes |

## 14. Performance interim QA — `QA-PERF-*`

| ID | Check | Blocking |
|---|---|---|
| QA-PERF-001 | M6 asset budgets are met or approved exception exists. | Yes |
| QA-PERF-002 | No obviously unnecessary blocking script/asset is introduced. | Yes |
| QA-PERF-003 | Responsive images use appropriate `srcset`/`sizes`/`picture` where beneficial. | Yes when applicable |
| QA-PERF-004 | Below-the-fold non-critical images may lazy-load; likely LCP hero is not degraded by lazy-loading. | Yes when applicable |
| QA-PERF-005 | Explicit dimensions or aspect ratio prevent obvious image-driven layout shift. | Yes when applicable |

## 15. Release QA — `QA-REL-*`

| ID | Check | Blocking |
|---|---|---|
| QA-REL-001 | Release scope and included object versions are recorded. | Yes |
| QA-REL-002 | Required object-level Verification Records exist and are current. | Yes |
| QA-REL-003 | Required P0 production dependencies are APPROVED for PRODUCTION_READY. | Yes |
| QA-REL-004 | No Critical/High production defect is open. | Yes |
| QA-REL-005 | Medium defects/exceptions requiring Product Owner acceptance have that acceptance recorded. | Yes |
| QA-REL-006 | Active exceptions are reviewed for applicability/expiry. | Yes |
| QA-REL-007 | No `RECHECK_REQUIRED` dependency affecting release remains unresolved. | Yes |
| QA-REL-008 | Main navigation and core discovery paths work. | Yes |
| QA-REL-009 | Representative mobile/tablet/desktop smoke test passes. | Yes |
| QA-REL-010 | Representative keyboard smoke test passes. | Yes |
| QA-REL-011 | Production data contains no synthetic-test fixture. | Yes |
| QA-REL-012 | Documentation/manifest/status/version records changed by the release are current. | Yes |
| QA-REL-013 | Product Owner approval is recorded before PRODUCTION_READY. | Yes |

## 16. Minimum smoke matrix

Until M10/M11 automate more of this, a release-level UI smoke test should include at least:

| Area | Mobile | Tablet | Desktop | Keyboard |
|---|---:|---:|---:|---:|
| Global navigation | 390 | 768 | 1440 | Yes |
| Homepage critical path | 390 | 768 | 1440 | Yes |
| Impresa detail | 390 | 768 | 1440 | Yes |
| Campagna/ranking | 390 | 768 | 1440 | Yes |
| Avventuriero profile | 390 | 768 | 1440 | Yes |
| Cronaca article | 390 | 768 | 1440 | Yes |
| Decklist | 390 | 768 | 1440 | Yes |
| Archive/filter flow | 390 | 768 | 1440 | Yes |

If a page/type has not yet been implemented, mark it `N/A — not implemented`, not PASS.

## 17. Checklist selection rule

Do not execute every check mechanically for every change. Select all applicable families, and record why a blocking family/check is N/A when it could reasonably be expected to apply.

Examples:

- new navigation component: GEN + CMP + NAV + A11Y + VIS + relevant PERF;
- new hero asset: GEN + AST + VIS + relevant PERF;
- new Impresa page: GEN + PAG + CMP dependencies + A11Y + VIS + relevant DAT/TEC/PERF;
- data import: GEN + DAT + TEC if code changed;
- release: REL + representative integrated smoke checks plus evidence from underlying object Verification Records.

## 18. Defect recording

Every FAIL creates or links to a defect with:

- defect ID;
- affected object;
- check ID;
- severity;
- reproduction/description;
- evidence;
- proposed fix/mitigation;
- owner;
- status.

M10 will determine the canonical GitHub workflow/location for defect tracking. Until then, Verification Records and PRs may carry the defect reference, but Critical/High issues must not remain only in chat.

## 19. M9 exit criteria

M9 is complete when:

1. stable QA check IDs exist;
2. result vocabulary is unambiguous;
3. blocking logic maps to M8 severities;
4. repeatable check families cover components, assets, pages/templates, content/data, code and releases;
5. responsive M7.1 checks are operationalised;
6. interim accessibility/performance checks exist before M12;
7. ICA-specific visual/brand checks are explicit;
8. Verification Records are the evidence carrier for non-trivial checks;
9. release smoke matrix exists;
10. future M10/M11/M12 can automate or strengthen checks without creating parallel conflicting rules.
