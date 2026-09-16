# In Cerca di Avventura — Creative Decision Log

**Document ID:** ICA-CDL-001  
**Status:** ACTIVE — Creative Canonical Lock support document  
**Version:** 1.3  
**Branch:** `governance/narrative-art-bible-v0-1`  
**Delivery status:** `COMPLETE`  
**Canonical readiness:** `PRODUCT_OWNER_LOCKED_SCOPE`  
**Purpose:** central provenance, Product Owner decision and operating-rule register for creative, terminology, IA and validation work.

> This log does not replace source documents. It records where a decision came from, what status it has, what it governs and when downstream material must be rechecked.

---

# 1. Provenance model

Allowed source types:

- `ORIGINAL_SOURCE` — directly supported by an original writer/source artifact.
- `RECONSTRUCTED` — recovered from prior project discussions when the original source artifact is not available.
- `PROPOSED` — newly proposed during the current design/reconciliation process.
- `DERIVED` — logically derived from one or more already locked project decisions or explicit governance rules.

Decision status values:

- `DRAFT`
- `REVIEW`
- `PRODUCT OWNER LOCKED`
- `SUSPENDED`
- `ON HOLD`
- `SUPERSEDED`
- `RECHECK_REQUIRED`

Required fields for a material entry:

`decision_id`, `decision`, `source_type`, `source_ref`, `status`, `approved_by`, `approved_date`, `downstream_impact`.

---

# 2. Two independent progress dimensions

From 2026-09-16 onward the project must report two separate dimensions.

## Delivery Progress

Measures whether the planned artifact/work product exists at the required level of completeness.

Examples:

- document drafted;
- Page Dossier structurally complete;
- fixture produced;
- QA check implemented.

Delivery Progress does **not** imply canonical approval.

## Canonical Readiness

Measures how far an artifact may be trusted as canonical downstream authority.

Working states:

`RECHECK_REQUIRED < DRAFT < REVIEW_REQUIRED < PRODUCT_OWNER_LOCKED_SCOPE < APPROVED`

A deliverable may therefore be:

> `Delivery status = COMPLETE`  
> `Canonical readiness = REVIEW_REQUIRED`

This distinction is mandatory in the Master Roadmap and machine registry.

Machine source: `qa/creative-canonical-status.json`.

---

# 3. Canonical Dependency Gate

A downstream artifact may not be promoted above an explicit **gating dependency**.

Rules:

1. a dependency is gating only when listed as such in `qa/creative-canonical-status.json`;
2. a downstream artifact can be fully written while still remaining `REVIEW_REQUIRED`;
3. `RECHECK_REQUIRED` upstream material blocks downstream canonical promotion until reconciled;
4. a Product Owner-locked **scope decision** may legitimately coexist with a broader parent document still in review, provided the locked decision is separately recorded in this log;
5. implementation status, content runtime state and canonical readiness remain separate dimensions.

The automated check is `scripts/creative_consistency_check.py`.

---

# 4. Framework freeze

**Product Owner instruction — 2026-09-16**

New transversal framework documents are frozen unless a concrete vertical-slice problem demonstrates a real missing control that cannot be added to an existing source of truth.

Allowed work during the freeze:

- Page Dossiers required by the active vertical slice;
- canonical sample fixtures;
- QA tooling/checks;
- Shared Component Registry entries derived from real Page Dossiers;
- required canonical propagation/fixes.

Do not create theoretical governance layers merely because they may be useful later.

---

# 5. Current decision register

| ID | Decision | Source type | Source ref | Status | Approved by | Date | Downstream impact |
|---|---|---|---|---|---|---|---|
| `CDL-001` | ICA is a **cittadella-crocevia**, living centre of the Italian Sorcery community, place of departure, encounter and preserved memory. | RECONSTRUCTED + PO confirmation | `docs/NARRATIVE_ART_BIBLE.md` §1.2 | PRODUCT OWNER LOCKED | Product Owner | 2026-09-15 | Governs narrative geography, page identity, art direction and experience design. |
| `CDL-002` | Narrative may transform presentation but must never alter factual truth. | RECONSTRUCTED / DERIVED | `docs/NARRATIVE_ART_BIBLE.md` §§1,4 | PRODUCT OWNER LOCKED | Product Owner | 2026-09-15 | Applies to all content, page dossiers, copy and data presentation. |
| `CDL-003` | Primary IA: **[ICA crest=Home] → Le Adunanze → Cronache → Avventurieri → Alleanze → Proclami**. | PROPOSED → PO accepted | `docs/PRIMARY_INFORMATION_ARCHITECTURE.md` | PRODUCT OWNER LOCKED | Product Owner | 2026-09-16 | Supersedes legacy primary navigation; shell/canonical docs are RECHECK_REQUIRED. |
| `CDL-004` | **Le Adunanze** is the umbrella for real-world Sorcery events/gatherings represented by ICA. | PROPOSED → PO accepted | `docs/TERMINOLOGY_BIBLE.md` §5.1 | PRODUCT OWNER LOCKED | Product Owner | 2026-09-15 | Event taxonomy and Page Dossier naming. |
| `CDL-005` | **Giostre** sits inside Le Adunanze and means only competitive events organized directly by ICA. | PROPOSED → PO accepted | `docs/TERMINOLOGY_BIBLE.md` §5.1 | PRODUCT OWNER LOCKED | Product Owner | 2026-09-15 | `EVENT` subtype semantics, filtering, badges and page structure. |
| `CDL-006` | **Proclami = News**. | PROPOSED → PO accepted | `docs/TERMINOLOGY_BIBLE.md` §5.2 | PRODUCT OWNER LOCKED | Product Owner | 2026-09-15 | `ARTICLE` + News classification. |
| `CDL-007` | **Cronache = editorial memory**; narrative place identity **Gli Annali**. | PROPOSED → PO accepted | `docs/TERMINOLOGY_BIBLE.md` §5.5 | PRODUCT OWNER LOCKED | Product Owner | 2026-09-15 | Editorial taxonomy and Home module. |
| `CDL-008` | Guides, regulations, documents and reference materials are not yet assigned to Cronache or Tesori. | DERIVED | `docs/creative-decisions/DECISION_TESORI_SCOPE.md` | REVIEW | — | — | No implementation assumption allowed. |
| `CDL-009` | **Avventuriero** identifies the real community person; never Sorcery Avatar. Nickname is primary visible identity. | PROPOSED → PO accepted | `docs/TERMINOLOGY_BIBLE.md` §5.4 | PRODUCT OWNER LOCKED | Product Owner | 2026-09-15 | `PLAYER` presentation and privacy/content governance. |
| `CDL-010` | **Alleanze** is the network of Sorcery realities represented/connected by ICA. | PROPOSED → PO accepted | `docs/TERMINOLOGY_BIBLE.md` §5.3 | PRODUCT OWNER LOCKED | Product Owner | 2026-09-15 | `ORGANIZATION` presentation. |
| `CDL-011` | **Reami d'Italia** and **Reami d'Oltreconfine** are geographic narrative groupings of Alleanze, not individual organisations. | PROPOSED → PO accepted | `docs/TERMINOLOGY_BIBLE.md` §5.3 | PRODUCT OWNER LOCKED | Product Owner | 2026-09-15 | Geography/taxonomy only. |
| `CDL-012` | **Tesori** direction is collecting/rarity oriented; prior resources/guides interpretation is superseded. | Direct PO direction | `docs/creative-decisions/DECISION_TESORI_SCOPE.md` | SUSPENDED | Product Owner | 2026-09-15 | No active IA, data model, dossier or assets until reopened. |
| `CDL-013` | **Mercante** is on hold. | Direct PO decision | `docs/creative-decisions/DECISION_MERCANTE_ON_HOLD.md` | ON HOLD | Product Owner | 2026-09-15 | Excluded from active work until reopened. |
| `CDL-014` | Home is the principal threshold into the cittadella-crocevia. | DERIVED | `docs/NARRATIVE_ART_BIBLE.md` + `docs/pages/PAGE_HOME.md` | REVIEW | — | — | Page role is stable; final canonical acceptance remains pending. |
| `CDL-015` | UI/asset production remains frozen until Creative Canonical Lock; vertical-slice work is specification/data/component validation only. | Direct PO instruction | current CR1 | PRODUCT OWNER LOCKED | Product Owner | 2026-09-16 | Prevents premature visual production. |
| `CDL-016` | Legacy primary navigation and associated shell label-fit evidence are `RECHECK_REQUIRED`. | DERIVED | `docs/PRIMARY_INFORMATION_ARCHITECTURE.md` | RECHECK_REQUIRED | — | 2026-09-16 | Canonical Spec, shell spec and M7.1 must be propagated/revalidated later. |
| `CDL-017` | New transversal framework creation is frozen unless a concrete vertical-slice gap proves it necessary. | Direct PO instruction | current validation prompt | PRODUCT OWNER LOCKED | Product Owner | 2026-09-16 | Prevents over-engineering. |
| `CDL-018` | Delivery Progress and Canonical Readiness are reported separately. | Direct PO instruction | current validation prompt | PRODUCT OWNER LOCKED | Product Owner | 2026-09-16 | Roadmap/status reporting and dependency checks. |
| `CDL-019` | Canonical Dependency Gate blocks downstream canonical promotion above explicit gating dependencies. | Direct PO instruction | current validation prompt | PRODUCT OWNER LOCKED | Product Owner | 2026-09-16 | QA and status registry. |
| `CDL-020` | Validate a vertical slice before completing all remaining Page Dossiers. | Direct PO instruction | current validation prompt | PRODUCT OWNER LOCKED | Product Owner | 2026-09-16 | Sequence becomes Home → Adunanze → Giostre → fixture → relationships/components. |
| `CDL-021` | `Prossima Adunanza` uses a deterministic selector: a verified explicit editorial Home override wins; otherwise select the nearest eligible upcoming event, using Giostra then ICA-organized status only as tie-breakers. | DERIVED | Experience Map + usability + current validation prompt | REVIEW | — | — | Removes repeated PO selection decisions and is testable against fixture data. |
| `CDL-022` | Home Avventurieri/Alleanze previews are readiness-driven optional modules rather than a launch yes/no Product Owner decision. | DERIVED | Page State Model + Content Readiness Gate | REVIEW | — | — | Modules hide truthfully when not ready. |
| `CDL-023` | Home may launch without a poetic page title; a future poetic title is non-blocking and cannot replace functional orientation. | DERIVED | Narrative Bible naming rule + usability | REVIEW | — | — | Removes poetic naming from the implementation critical path. |
| `CDL-024` | The canonical sample dataset is explicitly synthetic and can validate structure/states only; it may never be presented as real community fact. | DERIVED | Content Governance + factual/diegetic contract | REVIEW | — | — | Allows realistic testing without fabricating production facts. |
| `CDL-025` | Home adopts the **community-first composition**: **Hero → Prossima Adunanza → Avventurieri + Alleanze → Adunanze + Proclami → Cronache / Gli Annali → Chiusura**. Existing Home module IDs remain stable semantic identifiers; display grouping/order is governed by this composition. | Direct PO decision | Product Owner visual-reference review 2026-09-16 + `docs/pages/PAGE_HOME.md` | PRODUCT OWNER LOCKED | Product Owner | 2026-09-16 | Locks Home macro-composition; Page Dossier and later implementation must follow this grouping unless explicitly superseded. |
| `CDL-026` | Home closing uses **“Trova la tua prossima Adunanza.”** as the default closing headline when the Adunanze route is available; the functional CTA remains direct and routes to Le Adunanze. Non-canonical `Reame` closing wording must not return. | Direct PO decision | Product Owner visual-reference review 2026-09-16 + `docs/pages/PAGE_HOME.md` | PRODUCT OWNER LOCKED | Product Owner | 2026-09-16 | Locks the default H08 closing message and removes the visible terminology conflict from the visual reference. |
| `CDL-027` | Product Owner accepts the **Narrative & Art Bible v0.4 creative direction** as the governing creative baseline: cittadella-crocevia, reality/diegesis boundary, atmospheric/material principles, voice ladder, restrained ornament, one-world visual coherence and responsive art-direction principles. Secondary expressive labels remain governed by their own explicit status: `Gli Annali` is locked; `Il Libro dei Nomi` and `Il Campo delle Prove` remain candidates; `I Reami Alleati` and `I Proclami dell'Araldo` remain optional/conditional page-level expressions unless separately locked. | Direct PO approval | Product Owner final review 2026-09-16 + `docs/NARRATIVE_ART_BIBLE.md` v0.4 | PRODUCT OWNER LOCKED | Product Owner | 2026-09-16 | Promotes the Narrative & Art Bible creative direction to `PRODUCT_OWNER_LOCKED_SCOPE`; downstream canonical propagation may proceed without silently promoting candidate expressive labels. |

---

# 6. Superseded / historical directions

Historical wording may remain only for provenance:

- `Le Convocazioni del Reame` → **SUPERSEDED by Le Adunanze**.
- `La Soglia del Reame` → historical working title, non-canonical.
- `Tesori = guides/tools/documents/resources` → **SUPERSEDED**.
- `Mercante` as an active planned destination → **SUPERSEDED by ON HOLD**.
- legacy primary IA `IMPRESE / CAMPAGNE / AVVENTURIERI / CRONACHE / IL REAME / ARCHIVIO` → **RECHECK_REQUIRED / superseded for navigation purposes**.
- visual-reference closing copy using `Reame` → **SUPERSEDED by CDL-026**.

---

# 7. Product Owner decisions still genuinely necessary

The current vertical slice does **not** require the Product Owner to decide routine ranking, empty-state, responsive or component behavior when existing rules can derive them.

Still genuinely Product Owner-level:

1. any future poetic **Home page title** if the Product Owner wants one — non-blocking and separate from the locked H08 closing headline;
2. any future decision to canonize candidate expressive labels such as `Il Libro dei Nomi` or `Il Campo delle Prove`;
3. any change to the locked Home community-first composition in `CDL-025`;
4. any change to the locked semantic boundary of Le Adunanze/Giostre;
5. any reopening of Tesori or Mercante;
6. any final placement decision for guides/regulations/reference material when that area enters scope.

The Narrative & Art Bible creative direction, Home macro-composition and default closing headline are no longer open Product Owner decisions.

Everything else should be derived by the responsible design/technical rules unless a concrete ambiguity is discovered.

---

# 8. Traceability and recheck rule

Required chain:

`CDL decision → source document → Page Dossier decision → Component ID → Asset ID if any → implementation → QA/evidence`

A downstream object becomes `RECHECK_REQUIRED` when a governing locked decision is superseded, suspended or materially changed.

---

# 9. Governance rule

- Only explicit Product Owner acceptance creates `PRODUCT OWNER LOCKED`.
- Agent/model proposals remain `DRAFT` or `REVIEW` unless they are direct deterministic consequences of locked rules; even then they do not become `APPROVED`.
- Suspended/on-hold concepts cannot silently re-enter IA, components, fixtures or assets.
- Update this log in the same workstream whenever a material creative/product decision changes.
