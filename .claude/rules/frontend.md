---
paths:
  - "index.html"
  - "assets/css/**"
  - "assets/js/**"
---

# Frontend rule

- Preserve the static HTML/CSS/JavaScript architecture unless the owner explicitly approves a stack change.
- Inspect existing markup/styles/scripts before editing; reuse established classes and patterns where practical.
- For meaningful UI changes, consult `docs/DESIGN_SYSTEM.md`; consult `docs/ART_DIRECTION.md` when visual language is affected.
- Preserve semantic HTML, keyboard usability and readable contrast.
- Keep essential text in the DOM rather than baking it into images.
- Verify affected responsive behaviour. Significant UI work should cover desktop (~1400 px), tablet (~768–900 px) and mobile (~390 px) when tools allow actual verification.
- Report any viewport or browser behaviour that was not actually checked as `NOT VERIFIED`.