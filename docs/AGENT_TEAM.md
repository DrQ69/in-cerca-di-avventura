# Team 99 — Agent Operating Model

## Purpose

**Team 99** is the operating model for developing and maintaining **In Cerca di Avventura** with humans, AI assistants and deterministic automation.

Its goal is not maximum autonomy. Its goal is **high-quality work with minimal duplicated effort, minimal unnecessary AI context/token use, clear evidence and human control of production**.

## Core operating principle

**Human sets direction. The task is routed to the cheapest reliable specialist. Machines verify what machines can verify. GitHub records the work. Human retains final authority.**

## Roles are not products

Team 99 roles are logical responsibilities, not permanent AI instances.

A role may be performed by different tools depending on the task. A single session may perform several roles when that is efficient, provided implementation, approval and verification are not falsely conflated.

Consult `docs/RESOURCE_ARCHITECTURE.md` for current tool assignments.

## Current active roles

1. **Gran Maestro** — orchestration, scope and architecture;
2. **Art Director** — visual coherence and asset governance;
3. **Frontend Master** — implementation in the approved technical stack;
4. **QA Sentinel** — evidence-based verification and regression control;
5. **Archivist / Source Librarian** — retrieval/synthesis of owner-controlled source material.

Additional named roles should be introduced only when recurring work justifies them.

## Current preferred tool mapping

This mapping is a default, not a permanent vendor lock-in:

- **Gran Maestro** → ChatGPT + project owner;
- **Art Director** → ChatGPT + image tools + project owner;
- **Frontend Master** → Codex by default; Claude Pro for difficult/specialist cases; GitHub Copilot for micro-edits;
- **QA Sentinel** → GitHub Actions/deterministic tools first, ChatGPT conceptual review second, independent Claude review only when risk/value justifies it;
- **Archivist / Source Librarian** → Microsoft Copilot + OneDrive when relevant source material lives there.

Never use multiple premium models simply to simulate a team when one capable session plus deterministic QA is sufficient.

## Governing sources

Use only the documents relevant to the current task:

- `PROJECT_CONTEXT.md` — product and roadmap;
- `ART_DIRECTION.md` — canonical visual direction;
- `DESIGN_SYSTEM.md` — web/UI implementation rules;
- `ASSET_REGISTRY.md` — asset identity/status;
- `CONTENT_SOURCES.md` — factual provenance;
- `RESOURCE_ARCHITECTURE.md` — tool routing and cost/context strategy;
- `SECURITY_POLICY.md` — permissions, filesystem, credentials and safety;
- this document — role/workflow governance.

Do not load every document into every AI session by default.

## Shared hard boundaries

Unless the project owner explicitly authorises otherwise, no agent/tool may:

- commit experimental work directly to `main`;
- merge significant production changes without human approval;
- force-push production history;
- expose or redistribute secrets;
- grant itself broader filesystem/account permissions;
- use `sudo` merely for convenience;
- introduce a framework, build tool, CMS, backend or database;
- replace the official emblem;
- invent factual content;
- promote a concept/candidate asset to canonical `APPROVED` status;
- bypass failed QA/security checks to finish a task;
- perform destructive or difficult-to-reverse production/infrastructure changes without approval.

Security-specific rules live in `SECURITY_POLICY.md` and take precedence over convenience.

## Task classification

Before choosing tools, classify the work.

### LOW risk

Examples:

- typo/documentation correction;
- known link update;
- tiny isolated CSS fix;
- small refactor with obvious behaviour.

Default approach:

`one implementation resource → direct/deterministic verification → review as appropriate`

No multi-agent choreography by default.

### MEDIUM risk

Examples:

- UI/component/layout work;
- asset integration;
- responsive changes;
- new content section using established patterns;
- non-trivial interaction changes.

Default approach:

`Gran Maestro → relevant specialist → deterministic QA → conceptual/visual QA → human review`

### HIGH risk

Examples:

- architecture/technology changes;
- major visual-system changes;
- complex refactors;
- uncertain public factual claims;
- deployment/infrastructure/security-sensitive work.

Default approach:

`Gran Maestro → specialist implementation → independent review when valuable → deterministic QA → human approval`

High-risk work is the primary case where using a second premium model can be justified.

## Standard workflow

For non-trivial work:

```text
1. Receive objective
2. Classify risk and task type
3. Inspect only the relevant repository/source context
4. Route the task using RESOURCE_ARCHITECTURE.md
5. Define the smallest coherent change and acceptance criteria
6. Work on a dedicated branch
7. Implement
8. Run deterministic checks first
9. Run specialist/conceptual review only where needed
10. Open/update Pull Request with evidence and assumptions
11. Human reviews/approves
12. Merge only after approval
```

Do not interpret “finish the task” as “use every available agent”.

# Role 1 — Gran Maestro

## Mission

Translate the owner's objective into the smallest safe executable plan and route work to the appropriate resource.

## May

- inspect repository state, issues, branches and PRs;
- decompose objectives;
- classify task/risk;
- define acceptance criteria;
- decide which specialist/tool is actually needed;
- create/update branches, issues and PRs within authorised scope;
- request rework when evidence fails;
- maintain project governance.

## Must

- minimise scope and unnecessary model use;
- preserve established architecture unless change is approved;
- distinguish factual, visual, technical and mixed tasks;
- prefer deterministic automation for deterministic checks;
- route visual decisions through Art Direction;
- route facts through Content Sources;
- route permissions/security through Security Policy;
- document unresolved assumptions.

## Must not

- call multiple premium agents when one is sufficient;
- declare unverified content factual;
- override explicit Art Direction/Content/Security constraints;
- introduce technology because it is fashionable;
- merge significant work to production without owner approval.

# Role 2 — Art Director

## Mission

Protect the canonical visual identity of **In Cerca di Avventura**.

## Primary sources

- `ART_DIRECTION.md`;
- `DESIGN_SYSTEM.md`;
- `ASSET_REGISTRY.md`;
- approved production assets.

## May

- evaluate visual proposals;
- reuse existing approved assets;
- define specifications/prompts for new assets;
- propose families/variants;
- review banners, heraldry, frames, ornaments, UI and responsive simplifications.

## Must

- compare new work against approved assets, not generic fantasy aesthetics;
- preserve `SIG-01` as identity anchor;
- enforce modular/reusable visual principles;
- protect readability and accessibility;
- keep concepts/candidates separate from approved canon.

## Must not

- alter the official emblem independently;
- self-approve newly generated assets as canonical;
- sacrifice usability for ornament;
- bake essential functional text into images when real HTML text is practical.

# Role 3 — Frontend Master

## Mission

Implement approved product and visual decisions using the simplest appropriate web solution.

## Current stack

- static HTML;
- shared CSS;
- plain JavaScript;
- GitHub Pages.

## Preferred execution

- Codex: medium/large implementation by default;
- Claude Pro/Claude Code: difficult debugging, architecture critique, second independent implementation/review when justified;
- GitHub Copilot/local editing: tiny low-risk changes.

## Must

- inspect current code before editing;
- change only the necessary files;
- preserve established behaviour unless intentionally changed;
- use approved assets/visual rules;
- maintain semantic HTML, keyboard usability and responsive behaviour;
- verify paths and actual asset rendering;
- avoid dependency/tooling expansion without approval.

## Must not

- introduce frameworks/package managers/backends casually;
- redesign outside approved direction;
- invent factual filler content;
- merge significant implementation directly into production.

# Role 4 — QA Sentinel

## Mission

Provide evidence that proposed work meets acceptance criteria.

## Verification order

1. **Deterministic checks first** — GitHub Actions/scripts/browser tooling where available;
2. **human/model judgement second** — visual coherence, product intent, ambiguity;
3. **independent second model only when the risk/value justifies it**.

## QA domains

- functionality;
- asset/path integrity;
- responsive layout;
- accessibility basics;
- content provenance;
- visual coherence;
- regression risk;
- navigation/link behaviour;
- security/permission assumptions.

For significant UI work, target checks around:

- desktop ~1400 px;
- tablet ~768–900 px when relevant;
- mobile ~390 px.

## Evidence labels

Use explicit states:

- **VERIFIED** — actually checked with appropriate evidence/tool;
- **PARTIALLY VERIFIED** — some checks completed; limits stated;
- **NOT VERIFIED** — not checked;
- **BLOCKED** — required evidence/input unavailable.

Never say “verified” when the result was only inferred.

# Role 5 — Archivist / Source Librarian

## Mission

Find and synthesise owner-controlled source material without turning unverified source text into public truth.

## Preferred execution

Use Microsoft Copilot + OneDrive when the relevant material is in the Microsoft/OneDrive source vault.

## May

- locate project documents;
- compare versions;
- summarise regulations/source files;
- extract candidate facts;
- identify conflicts between source versions.

## Must

- preserve source provenance;
- distinguish owner source material from already-approved public content;
- pass publishable claims through `CONTENT_SOURCES.md`;
- avoid broad access to unrelated OneDrive material.

## Must not

- edit/reorganise the wider OneDrive library without explicit task scope;
- treat AI summaries as authoritative evidence by themselves;
- move private or unrelated documents into the public GitHub repository.

## Review paths

### Visual change

```text
Gran Maestro → Art Direction → implementation → deterministic QA → visual QA → Human
```

### Pure technical fix

```text
implementation → deterministic QA → Human/review as appropriate
```

### Factual content update

```text
source retrieval → Content Sources verification → implementation → QA → Human
```

### Difficult/high-risk technical work

```text
Gran Maestro → primary coding specialist → optional independent specialist → automated QA → Human
```

## Pull Request minimum

A non-trivial Team 99 PR should state, proportionally to risk:

- objective;
- files changed;
- what was intentionally not changed;
- provenance for factual updates;
- asset IDs used/introduced for visual updates;
- verification actually performed;
- known limitations/assumptions;
- screenshots/preview evidence when useful;
- explicit human decision still required, if any.

Avoid bloated PR descriptions for trivial changes.

## Human gates

The project owner retains approval authority for:

- significant production merges;
- official visual identity changes;
- new canonical assets;
- material information-architecture changes;
- new technologies/platforms/paid services;
- external partnerships/public claims;
- uncertain/sensitive publication;
- domains, deployment, credentials or infrastructure;
- security-sensitive permission expansion.

## Failure and escalation

If evidence or authority is missing:

1. preserve the current production state;
2. do not fabricate a resolution;
3. record what is known;
4. mark what is not verified;
5. propose the smallest safe next action;
6. escalate only the decision that genuinely requires the owner.

## Future domain roles

Possible later roles include:

- Event Master;
- Chronicler;
- Adventurer Keeper;
- Alliance Keeper;
- SEO/Discoverability specialist;
- Security/Dependency Guardian;
- Release Manager.

Create them only when the recurring workload and structured data justify a distinct responsibility.

## Success condition

Team 99 succeeds when Alessandro can state a higher-level objective and the system reliably:

- selects the appropriate resource without unnecessary duplication;
- preserves artistic identity;
- protects factual integrity and private material;
- implements cleanly;
- uses automation for machine-checkable QA;
- escalates difficult work intelligently;
- presents reviewable evidence in GitHub;
- leaves production under human control.
