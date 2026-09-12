---
name: ui-qa
description: Verify a medium or high-impact ICA UI change for regressions, responsiveness, accessibility basics, interactions and asset/path integrity.
---

# UI QA

1. Inspect the changed files/diff and the intended acceptance criteria.
2. Prefer deterministic checks when available before visual judgment.
3. Verify paths/assets, navigation/interactions, semantic structure and obvious accessibility regressions.
4. For significant UI work, actually test desktop (~1400 px), tablet (~768–900 px) and mobile (~390 px) when browser tooling is available.
5. Never infer a viewport/browser PASS from source code alone. Use `NOT VERIFIED` when a check was not actually executed.
6. Report only: `PASS`, `FAIL`, `PARTIALLY VERIFIED`, or `BLOCKED`, followed by concise evidence and required corrections.