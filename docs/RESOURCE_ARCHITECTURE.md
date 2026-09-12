# Resource Architecture — In Cerca di Avventura

## Purpose

This document assigns each recurring project task to the **least expensive, least complex tool that can complete it reliably**.

The objective is not to maximise the number of AI agents. It is to maximise output quality while minimising duplicated work, token/context consumption and manual effort.

## Core principle

**Use deterministic automation first, specialised AI second, general AI only where judgement is required.**

Tools communicate primarily through **GitHub artifacts, files and Pull Requests**, not by trying to make AI products talk directly to one another.

## Sources of truth

### GitHub — technical source of truth

Use GitHub for:

- production HTML/CSS/JavaScript;
- web-ready assets;
- project governance documentation;
- branches, issues and Pull Requests;
- automated checks and review evidence.

`main` is production.

### OneDrive — creative/editorial source vault

Use OneDrive for source material that does not need to live in the public web repository, for example:

- high-resolution/master artwork;
- source design files;
- event source documents;
- spreadsheets and regulations;
- historical material;
- photographs and references;
- working documents not ready for publication.

Do not use a OneDrive-synchronised folder as the live Git working directory.

## Human authority

### Project owner — Alessandro

Final authority for:

- product direction;
- canonical visual identity;
- factual publication when source authority is ambiguous;
- approval of new canonical assets;
- material architecture/technology changes;
- production merge;
- infrastructure, credentials and external commitments.

## Tool responsibilities

### ChatGPT Plus — Gran Maestro / Art Director / final conceptual QA

Primary uses:

- translate high-level goals into scoped work;
- architecture and prioritisation;
- maintain Team 99 governance;
- artistic direction and visual critique;
- image generation/editing workflows;
- review Pull Requests and automated QA results;
- decide whether specialist escalation is worthwhile.

Avoid using ChatGPT for deterministic checks that scripts can perform.

### Codex — primary coding agent

Primary uses:

- implement coherent repository changes;
- bug fixes;
- refactoring within the approved architecture;
- repository exploration for coding tasks;
- test execution and PR-ready implementation.

Default coding choice for medium/large implementation work when available.

### Claude Pro / Claude Code — specialist and independent second opinion

Primary uses:

- difficult implementation or debugging problems;
- architecture critique;
- independent code review;
- alternative solution when Codex is blocked or quality is uncertain;
- complex repository reasoning where a second model adds material value.

Claude is **not** the default worker for routine tasks. Its context should be loaded on demand and kept narrow.

### Microsoft Copilot + OneDrive — Archivist / Source Librarian

Primary uses:

- find information in the owner's Microsoft/OneDrive documents;
- compare document versions;
- summarise source material;
- extract candidate facts from owner-controlled documents;
- reduce manual document browsing.

Information retrieved here is still subject to `CONTENT_SOURCES.md` before publication.

### GitHub Copilot Free — micro-coding assistant

Use for low-risk local work such as:

- autocomplete;
- tiny snippets;
- local explanation;
- simple renames/refactors;
- repetitive boilerplate.

Do not rely on it for project architecture or final review.

### GitHub Actions — deterministic QA engine

Preferred place for checks that can be automated reproducibly, such as:

- HTML/static validation;
- broken-link checks;
- asset/path checks;
- accessibility/performance checks when configured;
- browser tests/screenshots when Playwright is introduced;
- security/static-analysis checks where applicable.

A deterministic PASS is preferable to asking an AI to guess whether a machine-checkable condition is satisfied.

### macOS local tools — operator utilities

The project owner currently works on a MacBook Air M1 with 16 GB RAM.

Prefer lightweight local tooling:

- VS Code for editing;
- Git/GitHub Desktop for version control;
- macOS Shortcuts or small shell/Python scripts for simple local automation;
- browser developer tools for manual inspection.

Avoid adding local infrastructure unless a real requirement justifies it.

## Task router

Use this routing by default:

| Task | Preferred resource |
| --- | --- |
| Product decision / prioritisation | ChatGPT + owner |
| Art direction / new visual concept | ChatGPT + owner |
| Image generation/editing | ChatGPT image tools |
| Medium/large coding task | Codex |
| Tiny local code edit | GitHub Copilot Free or direct edit |
| Difficult coding / second review | Claude Pro |
| Search owner documents | Microsoft Copilot + OneDrive |
| Deterministic QA | GitHub Actions |
| Final conceptual/visual QA | ChatGPT |
| Production approval | Owner |

## Risk-based execution

### LOW risk

Examples:

- typo;
- link correction;
- tiny isolated CSS fix;
- documentation wording.

Preferred path:

`single implementation tool → direct verification → PR/review as appropriate`

Do not spawn multiple agents.

### MEDIUM risk

Examples:

- component/layout change;
- responsive behaviour;
- new content section using established patterns;
- asset integration.

Preferred path:

`Gran Maestro → implementation specialist → deterministic QA → conceptual QA → human review`

### HIGH risk

Examples:

- new architecture or technology;
- major visual system change;
- complex refactor;
- production/data/infrastructure change;
- uncertain factual publication.

Preferred path:

`Gran Maestro → specialist implementation → independent specialist review if valuable → automated QA → human approval`

A high-risk task may justify Claude as an independent reviewer. Low-risk work normally does not.

## Cross-tool communication

Preferred exchange format:

1. GitHub issue or task objective;
2. dedicated branch;
3. commits/diff;
4. automated check results;
5. Pull Request with assumptions/evidence;
6. human decision.

Do **not** build direct ChatGPT ↔ Claude ↔ Copilot API bridges unless a concrete future workflow proves that the added complexity and cost are justified.

## Cost/context policy

- Do not load full project documentation into every AI session.
- Read only the sources relevant to the current task.
- Do not use two premium models for a routine task.
- Do not use AI for checks that deterministic tooling can perform reliably.
- Use a second model only when independence, difficulty or uncertainty materially improves the result.
- Prefer concise task briefs that point to canonical repository sources instead of repeating them in prompts.

## Current recommended operating model

```text
Alessandro
    ↓
ChatGPT — Gran Maestro / Art Director
    ↓
Task router
    ├─ Codex — primary implementation
    ├─ Claude Pro — difficult specialist / second opinion
    ├─ Microsoft Copilot + OneDrive — source librarian
    └─ GitHub Copilot Free — micro coding
    ↓
GitHub branch / Pull Request
    ↓
GitHub Actions — deterministic QA
    ↓
ChatGPT — conceptual / visual QA
    ↓
Alessandro — approve / merge
```

## Evolution rule

Add a new tool, paid service or persistent agent only when all three are true:

1. a recurring task exists;
2. current tools handle it inefficiently or unreliably;
3. the new tool has a clearly bounded responsibility that does not duplicate an existing one.
