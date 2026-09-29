# ICA Exception Register

**Purpose:** persistent register for accepted deviations from canonical/specialist requirements.

No exception is valid if it exists only in chat history, a local note or an unmerged branch.

## Status values

- `OPEN`
- `MITIGATED`
- `EXPIRED`
- `CLOSED`

## Active exceptions

### EXC-0001 — National Adunanze gate exceeds section-banner asset budget

- **Affected object:** `MED-ADU-03-GATE-NATIONAL` / `assets/adunanze/adunanze-gate-national.webp`
- **Criterion waived:** M6 section-banner maximum file-size budget (400 KB).
- **Observed size:** 603,688 bytes (~589.5 KiB).
- **Reason:** The current selected National gate artwork is visually accepted and already has a dedicated 512px mobile derivative; changing/recompressing the desktop asset would violate the current governance-cleanup constraint of not altering rendering.
- **Severity:** Medium
- **Risk:** Higher desktop transfer weight than the nominal section-banner budget.
- **Mitigation:** Mobile uses `adunanze-gate-national-512.webp` (~95 KB); VR-0010 Lighthouse performance gate passed; retain the current desktop binary until a future no-visible-difference optimisation is explicitly scheduled.
- **Owner:** Product Owner / implementation team
- **Approval authority:** Product Owner
- **Accepted on:** 2026-09-29
- **Review / expiry condition:** Reassess before canonical PRODUCTION_READY promotion or if runtime performance evidence regresses.
- **Status:** OPEN
- **Linked PR / verification record:** asset approval cleanup PR; VR-0010 / VR-0014

No other active asset-budget exception is recorded by this cleanup.

## Exception template

### EXC-0001 — Short title

- **Affected object:**
- **Criterion waived:**
- **Reason:**
- **Severity:** Critical / High / Medium / Low
- **Risk:**
- **Mitigation:**
- **Owner:**
- **Approval authority:** Product Owner / delegated authority if formally defined
- **Accepted on:**
- **Review / expiry condition:**
- **Status:** OPEN
- **Linked PR / verification record:**

### Policy reminders

- Critical exceptions are never valid for production.
- High exceptions are never valid for production; they may be accepted only for staging/testing with explicit Product Owner acknowledgement.
- Medium exceptions affecting P0, accessibility, factual integrity, brand identity or repeated/systemic behaviour require Product Owner acceptance.
- Multiple Medium defects affecting the same critical area may be escalated to High.
