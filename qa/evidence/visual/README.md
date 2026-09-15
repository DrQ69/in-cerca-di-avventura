# ICA Visual Evidence

This directory stores non-sensitive visual evidence used by M11 and M9 Verification Records.

## Structure

```text
qa/evidence/visual/
  baselines/
  current/
  diffs/
```

- `baselines/` — Product Owner accepted reference screenshots.
- `current/` — current candidate/comparison captures.
- `diffs/` — generated or assembled visual-difference evidence when available.

## Naming

Approved/candidate visual baseline files:

`VB-<4 digits>-<object>-<state>-<width>x<height>.png`

Other Verification Record evidence may keep the `VR-XXXX-...` naming defined by M9.1.

## Rules

- Do not create canonical baselines from the legacy/prototype homepage.
- A candidate screenshot becomes an approved baseline only after Product Owner acceptance.
- Record the corresponding entry in `qa/visual-baselines.json`.
- Baselines are version/dependency sensitive and may become `RECHECK_REQUIRED`.
- Never mask unstable areas so broadly that a real regression can disappear.
- Synthetic stress fixtures remain test-only and must not become factual public content.
