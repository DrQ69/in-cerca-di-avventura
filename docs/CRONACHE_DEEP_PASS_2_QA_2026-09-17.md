# Cronache — Aesthetic Deep Pass 2 / Rendered QA

Date: 2026-09-17

## Scope
Targeted refinement only after the first rendered regression gate. No new ornament families, no data changes, no taxonomy changes and no filtering changes.

## Changes applied
- Rebalanced desktop event-record column proportions.
- Reduced status-icon footprint and improved title hierarchy.
- Increased clarity of the action cell without turning it into modern button chrome.
- Calmed tablet record layout and action positioning.
- Reduced mobile decorative pressure before reducing readable content.
- Tightened season-heading rhythm and mobile spacing.
- Increased pending-detail legibility while keeping it inside the action cell.

## Rendered QA
Automated Playwright capture passed at 1440, 1024, 768 and 390 px.

Observed diagnostics:
- horizontal overflow: none at all target widths;
- browser console errors: none;
- result counter resolves correctly;
- reset control remains within safe bounds;
- logo/eyebrow separation remains intact;
- pending-detail content remains within its action region.

## Visual assessment
Desktop reads more like an archival register: record density is lower, title hierarchy is clearer and the action column is less visually accidental. Tablet is calmer and no longer relies on a narrow action treatment. Mobile retains the material atmosphere while dropping nonessential decorative pressure; event records are easier to scan vertically.

## Remaining visual risk
1. The production Logo ICA original is still not installed; the proxy remains the largest identity mismatch.
2. The CSS stack is now intentionally layered for Beta validation and must be consolidated before declaring production-ready.
3. Pending-action copy is still intentionally small on desktop; if PO judges it too weak visually, the next change should alter action-cell anatomy rather than simply increasing font size.
4. Final PO visual approval remains open.

## Gate
**PASS** for the targeted Deep Pass 2. No further ornamental expansion is recommended before Logo ICA installation and CSS consolidation.
