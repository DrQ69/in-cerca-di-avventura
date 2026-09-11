# In Cerca di Avventura — Claude Instructions

This repository powers the Italian community hub **In Cerca di Avventura**, dedicated to **Sorcery: Contested Realm**.

Read these files before making substantial changes:

@docs/PROJECT_CONTEXT.md
@docs/DESIGN_SYSTEM.md

## Core rules

- Treat `main` as production. Work on a dedicated branch and open a PR for changes.
- Before editing, inspect the current repository state and relevant files.
- Keep the stack simple: static HTML, CSS and JavaScript until a real requirement justifies more.
- Do not introduce frameworks, build tools, package managers, a CMS or a backend without explicit approval.
- Do not invent events, results, partners, player data, dates, prices or editorial content.
- Some current homepage event cards may contain provisional/demo data. Never treat existing placeholder copy as verified source data unless explicitly confirmed.
- Preserve responsive behaviour and test desktop and mobile after layout changes.
- Preserve the official logo unless an explicit request asks to modify it.
- Do not bake important copy into generated images when it can remain accessible HTML text.
- Prefer reusable CSS classes and shared assets over duplicated styles.
- Keep accessibility in mind: semantic HTML, useful alt text, readable contrast and keyboard-friendly navigation.
- When changing visuals, follow `docs/DESIGN_SYSTEM.md` rather than introducing a new aesthetic direction.

## Product structure

The long-term information architecture is:

- Home
- Eventi
- Lega
- Alleanze Dinastiche
- Risultati
- Avventurieri
- Community

The intended data relationship is:

**Eventi → Risultati → Avventurieri**

Player names in result views should eventually link to the corresponding Avventuriero profile.

## Working style

For non-trivial tasks:

1. inspect the repository;
2. state the files you intend to modify;
3. make the smallest coherent change;
4. verify paths/assets and browser behaviour;
5. test at least one desktop and one mobile viewport when UI is affected;
6. summarize what changed and any remaining assumptions.
