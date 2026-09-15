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
- future M10 document — GitHub workflow
- future M11 document — visual regression
- future M12 document — technical baseline

### Layer 3 — Operational records

- `docs/PROJECT_CONTEXT.md` — current state / legacy / next step
- `docs/M7_RISK_REGISTER.md` — responsive risk history
- `docs/EXCEPTION_REGISTER.md` — accepted exceptions
- `docs/VERIFICATION_RECORD_TEMPLATE.md` — verification record format
- `qa/verification/` — verification records
- `qa/evidence/` — non-sensitive evidence
- milestone status files such as `docs/M7_STATUS.md`, `docs/M8_STATUS.md`, `docs/M9_STATUS.md`

Operational records never override Layer 1 or Layer 2 rules.

## 3. Task routing

| Task | Minimum reading |
|---|---|
| Understand ICA / answer architecture question | Canonical Spec + Project Context |
| Change product scope / IA / locked content rules | Canonical Spec; stop for Product Owner decision if conflict exists |
| Build/edit UI component | Canonical Spec + Design System + Responsive Spec + M7.1 + relevant Component rules + M9 profile |
| Build navigation/banner/hero | UI set above + Asset Spec/Manifest |
| Create/edit production asset | Canonical Spec + Asset Spec + Manifest + relevant Design guidance + QAP-AST-P |
| Build/edit page/template | Canonical Spec + Design + Responsive + M7.1 + QAP-PAG |
| Add/edit factual content or data | Canonical content rules + QAP-DAT + verified source data |
| Work on results/rankings | Canonical content/results rules + campaign scoring source + QAP-DAT |
| Work on deck data/UI | Canonical Sorcery model + relevant component/page QA |
| Modify code/technical implementation | Canonical technical constraints + QAP-CODE + affected specialist systems |
| Claim VERIFIED | DoD + QA Checklist + QA Execution Model + Verification Record |
| Claim APPROVED | Product Owner decision required; DoD/M8.1 applies |
| Prepare release | DoD/M8.1 + QAP-REL + current Verification Records; M10 when available |
| Check what exists now / what is legacy | Project Context |

## 4. Do not over-read

Agents should read the **minimum sufficient set** for the task, then inspect the actual files being changed.

Do not load every specialist document mechanically.

Examples:

- editing a factual RESULT record does not require reading the full Asset Specification;
- optimising an image does not require reading the complete Content Model discussion;
- changing a responsive component does require Responsive + M7.1 and the relevant QA profile.

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
- AI/developers may verify, but only the Product Owner may approve unless a future written delegation exists.

## 6. Current milestone state

See `docs/PROJECT_CONTEXT.md` for the live operational status.

At the time this index was introduced:

- M0–M6 governance/foundation work is established;
- M7 responsive specification exists, with M7.1 implementation validation still dependent on real canonical components;
- M8/M8.1 DoD/governance is established;
- M9/M9.1 QA system is established;
- next planned milestone is M10 GitHub Workflow, then M11 Visual Regression and M12 Technical Baseline.

## 7. Lifecycle language

Formal object lifecycle:

`SPECIFIED -> IMPLEMENTED -> VERIFIED -> APPROVED -> DEPRECATED`

`CONCEPT`, `DESIGNED` and `QA IN PROGRESS` may be used as workflow labels, but they are not additional formal lifecycle states.

Release readiness is separate:

`NOT_READY -> STAGING_READY -> PRODUCTION_READY`

A merge does not automatically mean VERIFIED, APPROVED or PRODUCTION_READY.

## 8. Agent interaction principle

The target user experience is:

**Product Owner states the desired outcome -> ChatGPT/agent selects the required rules automatically -> implementation -> QA -> concise report -> Product Owner approves when appropriate.**

The Product Owner should not have to remind agents to read responsive rules, update the manifest, run QA or respect lifecycle terminology. Those are system responsibilities.

## 9. Update rule

Update this index only when:

- a new authoritative specialist system is added;
- a document is renamed/replaced;
- task routing changes materially;
- lifecycle/readiness terminology changes.

Do not turn this file into another detailed specification.