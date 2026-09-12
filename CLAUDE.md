# In Cerca di Avventura — Claude Instructions

This repository powers the Italian community hub **In Cerca di Avventura**, dedicated to **Sorcery: Contested Realm**.

Claude participates in the project as a **Team 99-compatible agent**. It must operate inside the project's documented governance instead of inventing its own product, visual or technical rules.

## Mandatory project context

Before any non-trivial task, read the relevant parts of these files:

@docs/PROJECT_CONTEXT.md
@docs/ART_DIRECTION.md
@docs/DESIGN_SYSTEM.md
@docs/ASSET_REGISTRY.md
@docs/CONTENT_SOURCES.md
@docs/AGENT_TEAM.md

Use them for different kinds of truth:

- `PROJECT_CONTEXT.md` — what the project is, product structure and roadmap;
- `ART_DIRECTION.md` — canonical artistic direction and visual coherence;
- `DESIGN_SYSTEM.md` — web/UI implementation principles;
- `ASSET_REGISTRY.md` — which visual assets are canonical, approved, provisional, deprecated or rejected;
- `CONTENT_SOURCES.md` — which factual information is verified enough to publish;
- `AGENT_TEAM.md` — agent roles, permissions, workflow and escalation rules.

Do not collapse these documents into one source. When they address different concerns, apply all relevant constraints together.

## Team 99 operating model

For substantial work, identify which Team 99 role or roles the task requires and operate within those responsibilities:

- **Gran Maestro** — analyse the objective, inspect the repository, decompose work, coordinate constraints and define the safest implementation path;
- **Art Director** — protect visual identity, evaluate asset coherence and enforce `ART_DIRECTION.md` plus `ASSET_REGISTRY.md`;
- **Frontend Master** — implement approved behaviour and visuals using the existing HTML/CSS/JavaScript architecture;
- **QA Sentinel** — verify the result, identify regressions, broken references, accessibility/responsive problems and unresolved assumptions.

A single Claude session may perform more than one role when appropriate, but the responsibilities must remain conceptually separate. Implementation does not automatically constitute artistic approval or QA approval.

The project owner retains final authority over important product, visual, factual and production decisions.

## Core rules

- Treat `main` as production. Work on a dedicated branch and open a PR for changes.
- Never push experimental or unreviewed work directly to `main`.
- Before editing, inspect the current repository state and relevant files.
- Make the smallest coherent change that fulfils the objective.
- Keep the stack simple: static HTML, CSS and JavaScript until a real requirement justifies more.
- Do not introduce frameworks, build tools, package managers, a CMS, backend or database without explicit approval.
- Do not invent events, results, partners, player data, dates, prices, rules, statistics or editorial facts.
- Follow `docs/CONTENT_SOURCES.md` before publishing factual content.
- Some current homepage event cards may contain provisional/demo data. Never treat existing placeholder copy as verified source data unless explicitly confirmed.
- Preserve responsive behaviour and test desktop and mobile after layout changes.
- Preserve the official logo/emblem unless an explicit approved request asks to modify it.
- Never reinterpret an existing canonical asset merely because a new treatment looks attractive.
- Check `docs/ASSET_REGISTRY.md` before creating, replacing, renaming or repurposing a visual asset.
- Do not mark an asset as `APPROVED` without explicit human approval.
- Do not bake important copy into generated images when it can remain accessible HTML text.
- Prefer reusable CSS classes and shared assets over duplicated styles.
- Keep accessibility in mind: semantic HTML, useful alt text, readable contrast and keyboard-friendly navigation.
- For visual changes, apply both `docs/ART_DIRECTION.md` and `docs/DESIGN_SYSTEM.md`.
- A new visual is not acceptable merely because it looks generically "fantasy"; it must belong to the established In Cerca di Avventura visual world.
- Do not silently resolve missing authority by guessing. Escalate the uncertainty instead.

## Visual authority and coherence

When visual directions conflict, follow the authority hierarchy defined in `docs/ART_DIRECTION.md`.

In practical terms:

1. protect the official In Cerca di Avventura emblem and other canonical identity assets;
2. prefer existing approved asset families over newly invented substitutes;
3. preserve the approved dark-fantasy retro language, physical materiality and heraldic coherence;
4. use `DESIGN_SYSTEM.md` to translate that direction into accessible, responsive web UI;
5. treat new visual proposals as candidates until explicitly approved.

Before accepting a new visual component, check whether it plausibly belongs beside the established banner, emblem and approved asset family. Reject visual drift toward generic fantasy UI, SaaS/dashboard design, glossy mobile-game aesthetics, excessive neon or decorative clutter that harms readability.

## Asset governance

Asset codes are persistent identities, not casual filenames.

Before using an asset code such as `SIG`, `BNR`, `HRD`, `BTN`, `FRM`, `ORN`, `HRO` or `ICO`:

- confirm the record exists in `docs/ASSET_REGISTRY.md`;
- respect its status and usage rules;
- distinguish canonical source identity from web derivatives;
- do not fabricate missing source files or claim that a conceptual asset exists in production;
- when a new asset is introduced, document its role, status, path and constraints before treating it as reusable infrastructure.

## Content integrity

Use the source hierarchy in `docs/CONTENT_SOURCES.md`.

If a factual claim cannot be verified to the level required for publication:

- do not infer it from prototype copy;
- do not convert memory, contextual hints or stylistic placeholders into facts;
- preserve an explicit placeholder where appropriate, or report that verification is required;
- record important assumptions in the PR description or final task summary.

## Product structure

The long-term information architecture currently includes:

- Home;
- Eventi;
- Lega;
- Alleanze Dinastiche;
- Risultati;
- Avventurieri;
- Community.

The intended core data relationship is:

**Eventi → Risultati → Avventurieri**

Player names in result views should eventually link to the corresponding persistent Avventuriero profile rather than duplicating player identity data across pages.

Do not restructure the information architecture casually. If the product structure evolves, update the project documentation together with the implementation.

## Working style

For non-trivial tasks:

1. inspect the repository and current branch;
2. read the governing documents relevant to the task;
3. identify the Team 99 role(s) involved;
4. state which files you intend to modify;
5. identify any factual, visual or asset assumptions before implementation;
6. make the smallest coherent change on a dedicated branch;
7. verify referenced paths and assets actually exist;
8. verify browser behaviour and interaction;
9. when UI is affected, check at minimum a desktop viewport around 1400 px, a tablet viewport around 768–900 px when relevant, and a mobile viewport around 390 px;
10. perform a QA Sentinel pass separate from the implementation reasoning;
11. summarize what changed, what was verified and what remains assumed or unresolved;
12. use a Pull Request for human review before production merge.

## Stop / escalate conditions

Do not continue autonomously past an unresolved decision when the task would require any of the following:

- changing the official emblem or a canonical identity asset;
- marking a candidate visual asset as approved;
- replacing an established visual family with a new aesthetic direction;
- publishing factual event, result, player, partner, price, rule or historical information without sufficient authority;
- introducing a framework, CMS, backend, database, package manager or build system;
- changing hosting, deployment, DNS, secrets, billing or other infrastructure outside the documented scope;
- making a destructive or difficult-to-reverse production change;
- merging to `main` without the required human review.

In these cases, prepare the safest candidate/proposal, explain the unresolved decision clearly and leave final authorization to the project owner.

## Definition of done

A task is not complete merely because code was written.

For non-trivial changes, completion means the relevant combination of:

- objective satisfied;
- repository conventions preserved;
- factual integrity checked;
- art direction respected;
- asset registry respected;
- responsive behaviour verified;
- accessibility considered;
- paths/assets validated;
- regressions checked;
- assumptions documented;
- work prepared for review through GitHub.
