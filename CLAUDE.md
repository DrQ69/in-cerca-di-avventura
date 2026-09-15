# In Cerca di Avventura — Agent Instructions

This repository powers **In Cerca di Avventura (ICA)**, the Italian Sorcery: Contested Realm community ecosystem.

## 1. Start here

For every non-trivial task:

1. read `docs/PROJECT_INDEX.md`;
2. use it to select the **minimum sufficient authoritative documents** for the task;
3. inspect the actual repository files/data you will change;
4. do not rely on chat history, prototypes or legacy implementation as higher authority than the repository specifications.

`docs/ICA_CANONICAL_SPEC.md` remains the authoritative project specification.

If documents conflict, follow the authority hierarchy defined there.

## 2. Core non-negotiables

- ICA is dedicated exclusively to **Sorcery: Contested Realm**.
- Never invent events, dates, fees, results, standings, prizes, partners, player data, card data or editorial facts.
- Prototype/demo content is not factual merely because it is rendered.
- Public Avventuriero identity is **nickname-only**.
- **Avventuriero** = community player; **Avatar** = Sorcery card. Never conflate them.
- Sorcery decks use **Avatar + Atlas + Spellbook**.
- Primary navigation is exactly: **Imprese / Campagne / Avventurieri / Cronache / Il Reame / Archivio**.
- The ICA emblem/sigil links Home; do not add a redundant Home navigation item.
- Narrative language may enrich facts but never alter or obscure them.
- Preserve the official ICA emblem unless explicitly asked to modify it.
- The historical Heraldry Kit is out of scope and must be ignored.
- Important navigation, headings, controls and factual copy remain accessible HTML where practical.
- Accessibility and factual clarity take precedence over ornament.
- Static HTML + shared CSS + lightweight JavaScript + GitHub Pages remain the technical baseline until a documented requirement justifies change.
- Do not introduce frameworks, CMS, backend, database, authentication, package-manager/build requirements or major dependencies without explicit approval.

## 3. Current implementation status

The current `index.html` and legacy CSS/markup predate the canonical ICA architecture.

Treat them as **legacy/prototype implementation**, not as design/IA/responsive precedent for new canonical work.

Do not copy legacy navigation labels, 620/900px media-query assumptions, prototype copy or rendered data into new canonical work merely because they exist.

Use `docs/PROJECT_CONTEXT.md` for current implementation status and next milestones.

## 4. Lifecycle and authority

Formal object lifecycle:

`SPECIFIED -> IMPLEMENTED -> VERIFIED -> APPROVED -> DEPRECATED`

Workflow labels such as `CONCEPT`, `DESIGNED` or `QA IN PROGRESS` may be used operationally but are not formal lifecycle states.

Release readiness is separate:

`NOT_READY -> STAGING_READY -> PRODUCTION_READY`

Rules:

- AI agents, automated checks and developers may implement, test and support/recommend `VERIFIED`.
- Only the Product Owner may assign `APPROVED` unless a future written delegation explicitly grants authority.
- A merged PR is not automatic proof of `VERIFIED`, `APPROVED` or `PRODUCTION_READY`.
- No Critical or High defect is acceptable for production readiness.
- Material dependency changes may trigger `RECHECK_REQUIRED` and targeted re-verification.

## 5. Responsive rules

For responsive/layout work, use:

- `docs/RESPONSIVE_SPECIFICATION.md`
- `docs/M7_1_RESPONSIVE_CONFORMANCE.md`

Canonical width boundaries are **480 / 768 / 1024 / 1280 / 1536 px**, with the QA viewport matrix defined by M7/M9.

Mobile is deliberately composed, not scaled desktop.

For P0/P1 work:

- responsive contract required;
- no page-level horizontal overflow;
- primary/repeated controls meet the 44×44 CSS px target unless an accepted exception exists;
- decoration reduces before essential text/control size;
- brand/narrative-heavy mobile blocks preserve at least one strong ICA identity anchor;
- use `tests/fixtures/responsive-stress.json` when content density can affect layout.

M7 responsive specification is approved, but real implementation validation remains pending until canonical components pass M7.1.

## 6. Asset rules

For asset work, use:

- `docs/ASSET_SPECIFICATION.md`
- `assets/manifest.json`

Before creating or integrating a production binary, its role, component/entity relation, path/name, status, accessibility classification and provenance expectations must be clear.

Generated reference sheets are not production assets and must not be sliced into production files.

## 7. QA rules

For non-trivial verification, use:

- `docs/DEFINITION_OF_DONE.md`
- `docs/M8_1_DOD_GOVERNANCE_HARDENING.md`
- `docs/QA_CHECKLIST.md`
- `docs/M9_1_QA_EXECUTION_MODEL.md`

Select one primary QA Profile from M9.1 and only the applicable families/check IDs.

Use only:

`PASS / FAIL / N/A / BLOCKED`

Every `N/A` needs a rationale.

Every `FAIL` must link to a defect or accepted exception.

Apply **test once, reference many**: reuse evidence only while object version, dependencies and environment still support the claim and no `RECHECK_REQUIRED` trigger applies.

Classify evidence as `manual`, `automated` or `hybrid` where appropriate.

Store non-sensitive evidence according to `qa/evidence/README.md`.

Record accepted exceptions in `docs/EXCEPTION_REGISTER.md`.

## 8. Standard working flow

For a non-trivial task:

1. read `docs/PROJECT_INDEX.md`;
2. load only the required authoritative documents;
3. inspect current repository state and affected files;
4. identify affected components/entities/assets/dependencies;
5. state material assumptions/unknowns instead of guessing;
6. make the smallest coherent change;
7. preserve approved architecture, IDs, data ownership and terminology;
8. run the applicable responsive/accessibility/QA checks;
9. verify referenced assets and paths actually exist/render;
10. create/attach structured verification evidence when claiming `VERIFIED`;
11. record defects/exceptions and any `RECHECK_REQUIRED` impact;
12. distinguish lifecycle state from release readiness;
13. summarise changed files, evidence, remaining risks and decisions needed from the Product Owner.

## 9. Git discipline

- Treat `main` as production.
- Use a dedicated branch for coherent non-trivial work.
- Prefer one coherent PR per work block.
- Do not use unrelated refactors or redesigns as part of a requested fix without approval.
- Do not overwrite newer approved work knowingly.

M10 will formalise branch/PR/CI/merge conventions; until then use the existing repository practice plus M8/M9 evidence rules.

## 10. Product Owner interaction goal

The Product Owner should state the desired outcome, not manually orchestrate internal governance.

Agents are responsible for selecting the correct specifications, applying responsive/asset/QA rules and returning a concise result for review.

Do not ask the Product Owner to repeat rules that are already authoritative in the repository.

If a request conflicts with a locked decision, surface the conflict before changing the system.