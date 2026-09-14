# ICA Exception Register

**Purpose:** persistent register for accepted deviations from canonical/specialist requirements.

No exception is valid if it exists only in chat history, a local note or an unmerged branch.

## Status values

- `OPEN`
- `MITIGATED`
- `EXPIRED`
- `CLOSED`

## Active exceptions

_No active exceptions at M8.1 creation._

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
