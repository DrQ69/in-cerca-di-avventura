# ICA QA Evidence Storage

This directory stores non-sensitive evidence supporting M9/M9.1 Verification Records.

## Structure

- `qa/verification/` — Verification Records
- `qa/evidence/visual/` — screenshots/renders
- `qa/evidence/reports/` — logs and automated/manual reports
- `qa/evidence/data/` — non-sensitive source/data evidence suitable for the public repository

Sensitive or private evidence must not be committed. Record only a safe reference/location identifier in the Verification Record.

## Naming

Verification Records:

`VR-<4 digits>-<object-id-or-slug>-<short-scope>.md`

Supporting evidence begins with the same Verification ID:

`VR-0001-390.png`
`VR-0001-1440.png`
`VR-0001-console.txt`

Avoid ambiguous names such as `final`, `new`, `ok`, `test2`.

Evidence is valid only for the tested object version/commit and relevant dependencies. Reuse prior evidence only under the M9.1 `test once, reference many` rule.
