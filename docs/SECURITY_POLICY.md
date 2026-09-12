# Security & Permissions Policy — In Cerca di Avventura

## Purpose

This policy defines the minimum security boundaries for humans, AI agents, local developer tools and automations working on **In Cerca di Avventura**.

The goal is to keep the workflow productive without giving tools broader access than they need.

## Core principle

**Least privilege, reversible changes, explicit human approval for sensitive actions.**

## Approved working boundaries

### Repository workspace

AI coding agents and developer tools should normally operate only inside the local checkout of:

`DrQ69/in-cerca-di-avventura`

They may read/write files in that repository when the current task requires it.

Do not grant broader filesystem access merely for convenience.

### OneDrive source vault

OneDrive is a separate source/archive area.

Default policy:

- no unrestricted agent access to the entire OneDrive account;
- read only the specific project folder/files needed for the task;
- do not allow coding agents to reorganise, rename or delete the wider OneDrive library;
- do not keep the active Git repository inside a synced OneDrive folder;
- preserve original/master assets separately from web derivatives.

## macOS permissions

### Full Disk Access

Do not grant **Full Disk Access** to VS Code, Claude Code, terminal tools, AI agents or utilities unless a specific requirement is understood and explicitly approved.

Project development should normally work without it.

### Other sensitive permissions

Grant only when clearly necessary:

- Accessibility;
- Screen Recording;
- Automation/control of other apps;
- microphone/camera;
- Contacts/Calendars;
- protected folders.

Review and revoke permissions that are no longer required.

## Command execution policy

### Allowed by default inside the repository

Low-risk examples:

- read/list/search files;
- `git status`, `git diff`, `git log`;
- create/edit project files on a feature branch;
- run approved project checks;
- start a local static server;
- non-destructive format/validation commands.

### Human approval required

Agents must stop before:

- `sudo` or privilege escalation;
- destructive filesystem commands outside a tightly scoped temporary/project path;
- force pushes;
- rewriting shared Git history;
- deleting branches with unmerged work;
- deleting or overwriting canonical/master assets;
- mass rename/move operations in OneDrive;
- changing hosting, domain, DNS or deployment credentials;
- installing system-wide software solely to complete a task;
- enabling new third-party integrations with broad account permissions.

### Forbidden shortcuts

Do not disable macOS security controls, Gatekeeper or browser protections to make a development tool work.

Do not bypass a failed security/QA check simply to complete a task.

## Git safety model

- `main` is production.
- Work on dedicated branches.
- Use Pull Requests for non-trivial changes.
- Do not force-push `main`.
- Do not let an implementation agent merge its own significant production work without human approval.
- Prefer small, reviewable commits.
- Use Git history as the primary recovery mechanism for source changes.

## Secrets and credentials

Never place secrets in:

- repository files;
- Markdown documentation;
- committed `.env` files;
- screenshots intended for public/issues/PRs;
- AI prompts when the secret itself is not required;
- source code or client-side JavaScript.

Examples include:

- API keys;
- passwords;
- private tokens;
- session cookies;
- recovery codes;
- private certificates.

If a future service requires secrets, use the platform's secret store (for example GitHub repository/environment secrets) and document only the secret **name**, never its value.

If a secret is accidentally exposed, treat it as compromised and rotate/revoke it rather than merely deleting it from the latest file.

## Public repository rule

This repository is public. Therefore:

**Anything committed must be considered publicly readable.**

Before committing, confirm that the change contains no:

- personal confidential information;
- private contact data not intended for publication;
- commercial/work secrets;
- private correspondence;
- credentials;
- restricted/licensed source assets that cannot be redistributed.

## Third-party software and extensions

### Installation source

Prefer official/vendor sources or well-known package registries.

Avoid download aggregators and unknown installers.

### VS Code extensions

Keep the extension set minimal.

Before adding an extension, check:

- publisher identity;
- necessity for the project;
- permissions/trust implications;
- whether existing tools already provide the capability.

Do not install extension bundles merely for convenience.

### Dependencies/package managers

The current site intentionally has no package-manager/build dependency.

Do not introduce npm/Node packages into the production project unless explicitly justified and approved.

If future QA tooling uses Node/Playwright/Lighthouse, prefer running it in GitHub Actions when practical rather than expanding the local production stack.

Review lockfiles and avoid unpinned/unnecessary dependencies.

## AI agent permission policy

### ChatGPT

May inspect/review GitHub resources through approved connections and propose or perform scoped repository actions when explicitly requested.

Must not expose credentials or bypass human production gates.

### Codex

May implement scoped coding work inside the repository/approved cloud environment.

Should receive only the repository/context needed for the task.

### Claude Code

May read/write and run commands inside the project workspace when required.

Do not give it blanket access to unrelated home-directory or OneDrive content.

Do not approve dangerous commands merely because the agent requests them.

### Microsoft Copilot / OneDrive

Use as a source/document assistant.

Do not assume source material is automatically approved for public publication; apply `CONTENT_SOURCES.md`.

### GitHub Copilot

Treat suggestions as untrusted draft code until reviewed/tested.

## Automation security

GitHub Actions and future automation should:

- request the minimum permissions required;
- pin or carefully select trusted third-party actions;
- avoid printing secrets to logs;
- avoid write permissions when read-only checks are sufficient;
- separate validation jobs from deployment privileges;
- require human approval for sensitive production actions when applicable.

## Asset safety

Canonical masters must not be destructively edited by automated conversion workflows.

Preferred pattern:

`master/original → derivative copy → optimise/convert → web asset`

Never overwrite the only high-quality source file as part of an automated web optimisation step.

## Risk classification

### LOW

Reversible repository edits with no credentials, production infrastructure or private data involved.

### MEDIUM

New tooling, generated assets, automated workflows, broad file operations, or changes affecting publication behaviour.

Requires explicit review and verification.

### HIGH

Credentials, domains/DNS, deployment permissions, destructive operations, privacy-sensitive data, public disclosure risk or security-control changes.

Requires explicit human approval before execution.

## Incident rule

If an agent or human notices a possible security mistake:

1. stop the affected operation;
2. preserve evidence without publishing more sensitive data;
3. determine whether a credential/data exposure occurred;
4. revoke/rotate exposed credentials when applicable;
5. restore/revert repository state if needed;
6. document the cause and prevention action.

## Review cadence

Review this policy when:

- a new AI agent/integration is introduced;
- a new hosting/deployment system is added;
- repository visibility changes;
- a backend/database/authentication system is introduced;
- sensitive/private user data begins to be processed.
