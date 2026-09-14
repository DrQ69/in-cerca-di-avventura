# In Cerca di Avventura — Agent Instructions

This repository powers the Italian Sorcery: Contested Realm community ecosystem **In Cerca di Avventura**.

## Mandatory reading order

Before any non-trivial task, read:

1. `docs/ICA_CANONICAL_SPEC.md` — **authoritative source of truth**.
2. `docs/PROJECT_CONTEXT.md` — current project/implementation context.
3. `docs/DESIGN_SYSTEM.md` — visual implementation guidance.
4. `docs/DEFINITION_OF_DONE.md` and `docs/M8_1_DOD_GOVERNANCE_HARDENING.md` — completion, verification, approval, readiness, evidence and exception rules.
5. For any task that creates, edits, renames, optimises, selects or integrates visual assets: `docs/ASSET_SPECIFICATION.md` and `assets/manifest.json`.
6. For any task that affects layout, navigation, component composition, spacing, responsive imagery, tables, mobile/tablet behaviour or UI implementation: `docs/RESPONSIVE_SPECIFICATION.md` and `docs/M7_1_RESPONSIVE_CONFORMANCE.md`.
7. For responsive validation, use `tests/fixtures/responsive-stress.json` as synthetic stress content. Never publish fixture values as factual ICA data.
8. The specific source files/data relevant to the task.

If these documents conflict, **`docs/ICA_CANONICAL_SPEC.md` wins** unless the Product Owner explicitly approves a newer decision and the repository documentation is updated. Specialist specifications refine the canonical rules but may not override them.

Do not use chat history, generated images, prototype copy or historical local asset kits as higher authority than the canonical specification.

## Core operating rules

- Treat `main` as production. Work on a dedicated branch and use a PR for coherent changes.
- Inspect the current repository and relevant files before editing.
- Never invent events, results, standings, dates, prices, partners, player data, card data or editorial facts.
- Prototype/demo content is not verified source data merely because it is currently rendered.
- For Sorcery rules/terminology, rely on an approved authoritative source such as the supplied official rulebook.
- Preserve the current simple stack: static HTML, shared CSS and lightweight JavaScript unless a documented requirement justifies more.
- Do not introduce frameworks, build tools, package managers, CMS, backend, database or authentication without explicit approval.
- Preserve the official ICA emblem unless explicitly asked to modify it.
- Keep essential navigation and copy as accessible HTML rather than baking it into raster images.
- Prefer reusable components/classes/tokens to one-off implementations.
- Preserve semantic HTML, readable contrast, visible focus, useful alt text and keyboard operability.
- Responsive work must be intentionally designed; mobile is not merely a scaled desktop.
- Use the canonical breakpoints and responsive contracts defined in `docs/RESPONSIVE_SPECIFICATION.md`; do not invent arbitrary breakpoints without documenting a component-specific need.
- M7 is **Specification Approved — Implementation Validation Pending** until the M7.1 gate passes. Do not describe responsive behaviour as verified merely because the written specification exists.
- The current legacy CSS/markup predates the canonical IA and M7. Do not copy its 620/900px breakpoints into new canonical components by default.
- Every P0/P1 component must have a responsive contract and pass the relevant M7.1 viewport/content stress checks before being treated as verified.
- For P0/P1 primary/repeated controls, a 44 × 44 CSS px target is mandatory unless a documented QA-approved exception exists.
- ICA mobile compositions must preserve at least one strong ICA identity anchor per major block while still prioritising readability and accessibility.
- If a request conflicts with a locked decision, surface the conflict before changing the system.
- For asset work, do not create a new binary until its role, component/entity relation, filename/path, status, accessibility classification and provenance expectations are clear in the M6 asset system.
- A generated reference sheet is not a production asset and must never be sliced into production files.
- Never call work “done”, “approved”, “verified” or “production-ready” merely because it exists or was merged. Apply the M8/M8.1 governance rules and use only the state supported by evidence.
- Only the Product Owner may assign `APPROVED` unless a future written delegation matrix explicitly grants authority for a defined object class.
- AI agents/developers may implement, test and reach/recommend `VERIFIED`, but may not self-approve.
- `STAGING_READY` and `PRODUCTION_READY` are release-readiness properties, not lifecycle states. A VERIFIED object is not automatically production-ready.
- No Critical or High defect is acceptable for production readiness.
- Use `docs/VERIFICATION_RECORD_TEMPLATE.md` for non-trivial verification claims until M9 provides a stronger equivalent.
- Record all exceptions in `docs/EXCEPTION_REGISTER.md`; no exception is valid if it exists only in chat history or an untracked note.
- When a material dependency changes, flag affected approved objects as `RECHECK_REQUIRED` and rerun the affected evidence before claiming current verification.

## Locked product structure

Primary navigation:

- Imprese
- Campagne
- Avventurieri
- Cronache
- Il Reame
- Archivio

The logo/emblem returns to Home.

Key relationships are entity-based rather than duplicated page copy. Important UI relations should be navigable in both directions when useful.

## Locked content principles

- ICA is dedicated exclusively to Sorcery: Contested Realm.
- Public Avventuriero profiles use nickname-only identity.
- Initial administration is centralised; there are no public accounts or self-service profiles.
- Results use final position plus W/L/D; round-by-round MATCH data is not part of v1.
- Each Campagna may have its own scoring rules.
- Sorcery decks are modelled as Avatar + Atlas + Spellbook, not as a generic TCG deck.
- Narrative language may reinterpret real activity but must never alter facts.
- The historical Heraldry Kit is out of scope and must be ignored.

## Responsive baseline

Canonical width boundaries are **480 / 768 / 1024 / 1280 / 1536 px** using a mobile-first strategy.

Grid progression is **4 / 8 / 12 columns**. Main content max width is **1280 px** and editorial reading width target is **720 px**.

`NAV-01` is the desktop navigation candidate at 1024 px and above, but the real activation width is content-driven: it must pass the NAV fit test with the six canonical labels, the production font, sigil and ornamental safe areas. If it fails at 1024, `NAV-02` remains active until the measured passing width.

Page-level horizontal scrolling is a defect; deliberate contained horizontal scroll is allowed for wide semantic data tables.

Every P0/P1 component must define its responsive contract before it is considered fully specified.

## Completion model

Object lifecycle:

`SPECIFIED -> IMPLEMENTED -> VERIFIED -> APPROVED`

Release readiness:

`NOT_READY -> STAGING_READY -> PRODUCTION_READY`

- **SPECIFIED** means requirements and acceptance criteria are documented.
- **IMPLEMENTED** means the object exists in a testable form.
- **VERIFIED** means applicable checks have been performed and recorded.
- **APPROVED** means Product Owner approval is recorded.
- **STAGING_READY** permits controlled preview/testing under M8.1 rules.
- **PRODUCTION_READY** requires approved P0 dependencies, current evidence, no Critical/High defects and Product Owner approval.

A merged PR does not automatically promote contained objects to APPROVED or PRODUCTION_READY.

## Working style for non-trivial tasks

1. Read the canonical specification.
2. Read M8/M8.1 and specialist specifications required by the task.
3. Inspect repository state and relevant source/data files.
4. Identify affected components/entities/assets and dependencies.
5. State assumptions or unknowns instead of guessing.
6. Make the smallest coherent change; avoid unrelated cleanup/refactors.
7. Test the canonical responsive widths plus short-landscape cases where relevant.
8. Use the responsive stress fixture for content-sensitive components.
9. Verify referenced assets actually exist and render.
10. Preserve accessibility and source integrity.
11. Create/attach structured verification evidence for non-trivial verification claims.
12. Record exceptions in the Exception Register when needed.
13. Check whether dependency changes invalidate prior approvals/evidence.
14. Classify the result accurately and distinguish lifecycle state from release readiness.
15. Summarise changed files, evidence, remaining defects, exceptions and uncertainty.
