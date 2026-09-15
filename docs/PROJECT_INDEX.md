# ICA Project Index

**Purpose:** one routing page for the Product Owner, ChatGPT, Claude and future agents.

This file is not another specification. It tells you **what to read for the task at hand** so ICA can keep strong governance without forcing every agent to load every document.

## 1. Authority model

When sources conflict, use this order:

1. explicit current Product Owner decision;
2. `docs/ICA_CANONICAL_SPEC.md`;
3. approved specialist specifications;
4. verified task/source data;
5. current implementation;
6. prototypes, generated visuals and historical drafts.

`main` is production. The repository, not chat history, is the long-term source of truth.

## 2. Three documentation layers

### Layer 1 — Constitution

- `docs/ICA_CANONICAL_SPEC.md`

Use for product identity, locked IA/content/design/technical decisions, source integrity and conflict resolution.

### Layer 2 — Specialist systems

- `docs/DESIGN_SYSTEM.md` — visual language and design guidance
- `docs/ASSET_SPECIFICATION.md` + `assets/manifest.json` — asset governance
- `docs/RESPONSIVE_SPECIFICATION.md` — responsive rules
- `docs/M7_1_RESPONSIVE_CONFORMANCE.md` — responsive verification gate
- `docs/DEFINITION_OF_DONE.md` + `docs/M8_1_DOD_GOVERNANCE_HARDENING.md` — completion, approval and readiness
- `docs/QA_CHECKLIST.md` + `docs/M9_1_QA_EXECUTION_MODEL.md` — QA checks and execution model
- `docs/GITHUB_WORKFLOW.md` — branch, PR, defect, CI and merge workflow
- `docs/VISUAL_REGRESSION.md` + `qa/visual-baselines.json` — visual baseline/regression system
- `docs/TECHNICAL_BASELINE.md` + `qa/technical-baseline.json` — measurable accessibility/performance/SEO baseline

### Layer 3 — Operational records

- `docs/PROJECT_CONTEXT.md` — current state / legacy / next step
- `docs/M7_RISK_REGISTER.md` — responsive risk history
- `docs/EXCEPTION_REGISTER.md` — accepted exceptions
- `docs/VERIFICATION_RECORD_TEMPLATE.md` — verification record format
- `qa/verification/` — verification records
- `qa/evidence/` — non-sensitive evidence
- milestone status files already present, such as `docs/M7_STATUS.md`, `docs/M8_STATUS.md`, `docs/M9_STATUS.md`

Operational records never override Layer 1 or Layer 2 rules.

## 3. Task routing

| Task | Minimum reading |
|---|---|
| Understand ICA / answer architecture question | Canonical Spec + Project Context |
| Change product scope / IA / locked content rules | Canonical Spec; stop for Product Owner decision if conflict exists |
| Build/edit UI component | Canonical Spec + Design System + Responsive Spec + M7.1 + relevant Component rules + M9 profile; add Technical Baseline when production technical behaviour is affected |
| Build navigation/banner/hero | UI set above + Asset Spec/Manifest |
| Create/edit production asset | Canonical Spec + Asset Spec + Manifest + relevant Design guidance + QAP-AST-P |
| Build/edit page/template | Canonical Spec + Design + Responsive + M7.1 + QAP-PAG + Technical Baseline |
| Add/edit factual content or data | Canonical content rules + QAP-DAT + verified source data |
| Work on results/rankings | Canonical content/results rules + campaign scoring source + QAP-DAT |
| Work on deck data/UI | Canonical Sorcery model + relevant component/page QA |
| Modify code/technical implementation | Canonical technical constraints + QAP-CODE + affected specialist systems + GitHub Workflow + Technical Baseline when applicable |
| Compare or update approved visual appearance | Visual Regression + relevant Design/Responsive rules + applicable QA profile |
| Create/replace a visual baseline | Visual Regression + Verification Record + Product Owner baseline approval |
| Register/verify a canonical public page | Technical Baseline + QAP-PAG + M7.1 + M11 when visual baselines apply; add canonical marker + registry entry together |
| Claim VERIFIED | DoD + QA Checklist + QA Execution Model + Verification Record |
| Claim APPROVED | Product Owner decision required; DoD/M8.1 applies |
| Open/prepare/merge non-trivial PR | GitHub Workflow + relevant DoD/QA records |
| Prepare release | DoD/M8.1 + QAP-REL + current Verification Records + GitHub Workflow + M11/M12 for affected canonical scope |
| Check what exists now / what is legacy | Project Context |

## 4. Do not over-read

Agents should read the **minimum sufficient set** for the task, then inspect the actual files being changed.

Do not load every specialist document mechanically.

Examples:

- editing a factual RESULT record does not require reading the full Asset Specification;
- optimising an image does not require reading the complete Content Model discussion;
- changing a responsive component does require Responsive + M7.1 and the relevant QA profile;
- opening a routine PR does not require rereading every visual specification if the implementation QA already references them;
- a non-visual data correction does not require Visual Regression unless it changes rendered layout covered by an approved baseline;
- M12 is required for canonical page/release technical claims, not for a documentation-only typo.

## 5. Core non-negotiables

Regardless of task:

- ICA is exclusively for Sorcery: Contested Realm;
- never invent factual community/game data;
- public Avventuriero identity is nickname-only;
- Avventuriero and Avatar are not synonyms;
- decks use Avatar + Atlas + Spellbook;
- primary navigation is Imprese / Campagne / Avventurieri / Cronache / Il Reame / Archivio;
- the logo/sigil returns Home;
- narrative may enrich facts but never alter them;
- important UI text remains accessible HTML where practical;
- historical Heraldry Kit is out of scope;
- static HTML/CSS/lightweight JS remains the technical baseline until a real requirement justifies change;
- mobile is deliberately composed, not scaled desktop;
- no Critical/High defect is acceptable for production readiness;
- AI/developers may verify, but only the Product Owner may approve unless a future written delegation exists;
- legacy/prototype UI must not be frozen into M11 production baselines or registered as M12 canonical-page coverage merely because it is public;
- canonical production UI targets WCAG 2.2 AA and the measurable thresholds defined by M12;
- a real canonical production-candidate page must carry the M12 canonical marker and be registered in the same coherent change.

## 6. Current milestone state

See `docs/PROJECT_CONTEXT.md` for the live operational status.

Current governance/foundation position:

- M0–M6 governance/foundation work is established;
- M7 responsive specification exists, with M7.1 implementation validation still dependent on real canonical components;
- M8/M8.1 DoD/governance is established;
- M9/M9.1 QA system is established;
- M10 GitHub Workflow is established;
- M11 Visual Regression system is established, while production baseline coverage waits for canonical components/pages;
- M12 Technical Baseline v1.1 is VERIFIED at system level and awaits explicit Product Owner APPROVED status; canonical-page compliance begins with Canonical Implementation v1.

## 7. Lifecycle language

Formal object lifecycle:

`SPECIFIED -> IMPLEMENTED -> VERIFIED -> APPROVED -> DEPRECATED`

`CONCEPT`, `DESIGNED` and `QA IN PROGRESS` may be used as workflow labels, but they are not additional formal lifecycle states.

Release readiness is separate:

`NOT_READY -> STAGING_READY -> PRODUCTION_READY`

A merge does not automatically mean VERIFIED, APPROVED or PRODUCTION_READY.

## 8. Agent interaction principle

The target user experience is:

**Product Owner states the desired outcome -> ChatGPT/agent selects the required rules automatically -> branch/implementation -> QA -> PR/merge when permitted -> concise report -> Product Owner approves only when appropriate.**

The Product Owner should not have to remind agents to create branches, read responsive rules, update the manifest, run QA, compare affected visual baselines, validate M12 technical requirements, open a PR or respect lifecycle terminology. Those are system responsibilities.

## 9. Update rule

Update this index only when:

- a new authoritative specialist system is added;
- a document is renamed/replaced;
- task routing changes materially;
- lifecycle/readiness terminology changes.

Do not turn this file into another detailed specification.
