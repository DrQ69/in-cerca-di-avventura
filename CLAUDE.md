# In Cerca di Avventura — Claude Kernel

This repository powers the Italian **In Cerca di Avventura** community hub for **Sorcery: Contested Realm**.

Claude is a Team 99 specialist. Keep context small, inspect before acting, and load only the project guidance relevant to the current task.

## Non-negotiable defaults

- `main` is production. Work on a dedicated branch and use a Pull Request.
- Inspect the repository and relevant files before making claims or edits.
- Make the smallest coherent change that satisfies the objective.
- Current stack: static HTML, shared CSS, plain JavaScript, GitHub Pages.
- Do not introduce frameworks, package managers, build tooling, a CMS, backend or database without explicit owner approval.
- Do not invent events, results, partners, player data, dates, prices, rules, statistics or editorial facts.
- Preserve the official emblem and canonical visual assets. Never mark a new asset `APPROVED` without human approval.
- Keep important copy as accessible HTML text when practical.
- Preserve semantic HTML, keyboard usability, readable contrast and responsive behaviour.
- Never expose secrets, add secrets to the repository, use `sudo` for convenience, request unnecessary Full Disk Access, or perform destructive production actions without explicit approval.
- Never merge significant work to `main` without human review.

## Context routing — read on demand

Do **not** preload all governance documents. Read only the source(s) needed for the task:

- product, information architecture, roadmap → `docs/PROJECT_CONTEXT.md`
- artistic direction or visual coherence → `docs/ART_DIRECTION.md`
- web/UI implementation principles → `docs/DESIGN_SYSTEM.md`
- asset identity, status or reuse → `docs/ASSET_REGISTRY.md`
- factual provenance/publication → `docs/CONTENT_SOURCES.md`
- Team 99 roles/workflow → `docs/AGENT_TEAM.md`
- tool/resource allocation → `docs/RESOURCE_ARCHITECTURE.md`
- permissions, local machine, secrets or infrastructure → `docs/SECURITY_POLICY.md`

Path-scoped rules under `.claude/rules/` apply automatically when relevant files are opened. Use project skills under `.claude/skills/` for task-specific procedures instead of expanding this file.

## Claude usage policy

Use **one Claude session by default**. Do not create an Agent Team or subagent for routine work.

Use a subagent only when at least one is true:

- independent review materially increases confidence;
- the task is large enough that context isolation is useful;
- parallel investigation saves meaningful time;
- the task is HIGH risk and benefits from separation between implementation and review.

Prefer deterministic checks/scripts over AI judgment for machine-checkable conditions.

## Risk-based verification

### LOW
Examples: typo, copy-only documentation change, tiny local CSS fix, link correction.

- inspect the affected file;
- make the minimal change;
- verify directly;
- no subagent or full QA workflow unless something unexpected appears.

### MEDIUM
Examples: component/layout change, interaction change, asset integration, factual content update.

- read the relevant governing document(s);
- use the relevant skill when available;
- verify affected behaviour and regressions;
- use independent review only when it adds value.

### HIGH
Examples: architecture change, canonical visual identity change, security/deployment change, destructive action, major information-architecture change, uncertain public claim.

- stop before irreversible or production-sensitive action;
- consult the relevant governance documents;
- prepare a reviewable proposal/branch;
- use independent review where useful;
- require explicit human authorization for the gated decision.

## Stop / escalate

Escalate instead of guessing when the task requires:

- changing the official emblem or canonical identity;
- approving a new canonical asset;
- publishing factual information without sufficient provenance;
- changing the technology stack or information architecture materially;
- changing hosting, deployment, DNS, credentials, billing or secrets;
- destructive or hard-to-reverse production action;
- merging significant work without owner review.

## Completion

A task is complete when the objective is satisfied, relevant constraints were applied, verification was actually performed, and assumptions or unverified items are stated explicitly.

Never describe something as verified unless it was actually checked.