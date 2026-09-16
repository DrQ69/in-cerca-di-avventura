# In Cerca di Avventura — Creative Decision Log

**Document ID:** ICA-CDL-001  
**Status:** ACTIVE — Creative Canonical Lock support document  
**Version:** 1.0  
**Branch:** `governance/narrative-art-bible-v0-1`  
**Purpose:** central provenance and Product Owner decision register for creative, terminology, IA and page-direction choices.

> This log does not replace the source documents. It records where a decision came from, what status it has, and which downstream documents must respect it.

---

# 1. Provenance model

Every creative/product decision must use one of these source types:

- `ORIGINAL_SOURCE` — directly supported by an original writer/source artifact.
- `RECONSTRUCTED` — recovered from prior project discussions when the original source artifact is not available.
- `PROPOSED` — newly proposed during the current design/reconciliation process.
- `DERIVED` — logically derived from one or more already approved/locked project decisions.

Decision status values:

- `DRAFT` — working material, not accepted.
- `REVIEW` — ready for Product Owner review.
- `PRODUCT OWNER LOCKED` — explicitly accepted by the Product Owner for the stated scope.
- `SUSPENDED` — direction recorded but intentionally not active.
- `ON HOLD` — no further work until explicitly reopened by the Product Owner.
- `SUPERSEDED` — retained for history but replaced by a later decision.
- `RECHECK_REQUIRED` — previously valid downstream material invalidated by a later upstream change.

Required fields for every new entry:

`decision_id`, `decision`, `source_type`, `source_ref`, `status`, `approved_by`, `approved_date`, `downstream_impact`.

---

# 2. Current decision register

| ID | Decision | Source type | Source ref | Status | Approved by | Date | Downstream impact |
|---|---|---|---|---|---|---|---|
| `CDL-001` | ICA is a **cittadella-crocevia**, living centre of the Italian Sorcery community, place of departure, encounter and preserved memory. | RECONSTRUCTED + PO confirmation | `docs/NARRATIVE_ART_BIBLE.md` §1.2 | PRODUCT OWNER LOCKED | Product Owner | 2026-09-15 | Governs narrative geography, page identity, art direction and experience design. |
| `CDL-002` | Narrative may transform presentation but must never alter factual truth. | RECONSTRUCTED / DERIVED | `docs/NARRATIVE_ART_BIBLE.md` §§1,4 | PRODUCT OWNER LOCKED | Product Owner | 2026-09-15 | Applies to all content, page dossiers, copy and data presentation. |
| `CDL-003` | Primary IA: **[ICA crest=Home] → Le Adunanze → Cronache → Avventurieri → Alleanze → Proclami**. | PROPOSED → PO accepted | `docs/PRIMARY_INFORMATION_ARCHITECTURE.md` | PRODUCT OWNER LOCKED | Product Owner | 2026-09-15 | Supersedes legacy primary navigation; downstream shell/canonical docs are RECHECK_REQUIRED. |
| `CDL-004` | **Le Adunanze** is the umbrella for real-world Sorcery events/gatherings represented by ICA. | PROPOSED → PO accepted | `docs/TERMINOLOGY_BIBLE.md` §5.1 | PRODUCT OWNER LOCKED | Product Owner | 2026-09-15 | Visible UX/event taxonomy and Page Dossier naming. |
| `CDL-005` | **Giostre** sits inside Le Adunanze and means only competitive events organized directly by ICA. | PROPOSED → PO accepted | `docs/TERMINOLOGY_BIBLE.md` §5.1 | PRODUCT OWNER LOCKED | Product Owner | 2026-09-15 | `EVENT` subtype semantics, filtering, badges and page structure. |
| `CDL-006` | **Proclami = News**. | PROPOSED → PO accepted | `docs/TERMINOLOGY_BIBLE.md` §5.2 | PRODUCT OWNER LOCKED | Product Owner | 2026-09-15 | `ARTICLE` + News classification; Home/news modules. |
| `CDL-007` | **Cronache = editorial memory**; narrative place identity **Gli Annali**. | PROPOSED → PO accepted | `docs/TERMINOLOGY_BIBLE.md` §5.5 | PRODUCT OWNER LOCKED | Product Owner | 2026-09-15 | Editorial taxonomy, Page Dossier and Home module. |
| `CDL-008` | Guides, regulations, documents and reference materials are **not yet assigned** to Cronache or Tesori. | DERIVED from PO suspension | `docs/creative-decisions/DECISION_TESORI_SCOPE.md` + Terminology Bible | REVIEW / UNRESOLVED | — | — | Content architecture remains open; no implementation assumption allowed. |
| `CDL-009` | **Avventuriero** identifies the real community person; never Sorcery Avatar. Nickname is primary visible identity. | PROPOSED → PO accepted | `docs/TERMINOLOGY_BIBLE.md` §5.4 | PRODUCT OWNER LOCKED | Product Owner | 2026-09-15 | `PLAYER` entity presentation, privacy/content governance and profiles. |
| `CDL-010` | **Alleanze** is the network of Sorcery realities represented/connected by ICA. | PROPOSED → PO accepted | `docs/TERMINOLOGY_BIBLE.md` §5.3 | PRODUCT OWNER LOCKED | Product Owner | 2026-09-15 | `ORGANIZATION` presentation and alliance browsing. |
| `CDL-011` | **Reami d'Italia** and **Reami d'Oltreconfine** are geographic narrative groupings of Alleanze, not individual organisations. | PROPOSED → PO accepted | `docs/TERMINOLOGY_BIBLE.md` §5.3 | PRODUCT OWNER LOCKED | Product Owner | 2026-09-15 | Geography/taxonomy only; `Reame` remains constrained by Sorcery terminology. |
| `CDL-012` | **Tesori** direction is collecting/rarity oriented; prior resources/guides interpretation is superseded. | PROPOSED by PO | `docs/creative-decisions/DECISION_TESORI_SCOPE.md` | SUSPENDED | Product Owner | 2026-09-15 | No active IA, data model, Page Dossier or assets until reopened. |
| `CDL-013` | **Mercante** is on hold. | Direct PO decision | `docs/creative-decisions/DECISION_MERCANTE_ON_HOLD.md` | ON HOLD | Product Owner | 2026-09-15 | Excluded from active IA, Page Dossiers, visual design, content model and implementation. |
| `CDL-014` | Home is the principal threshold into the cittadella-crocevia. | DERIVED | `docs/NARRATIVE_ART_BIBLE.md` §3.2 + `docs/pages/PAGE_HOME.md` | REVIEW | — | — | Page role accepted conceptually; detailed H01–H08 sequence still needs PO review. |
| `CDL-015` | Current Home sequence H01–H08 is a proposal, not canonical. | PROPOSED | `docs/pages/PAGE_HOME.md` §5 | REVIEW | — | — | Must not drive implementation until PO accepts/revises it. |
| `CDL-016` | Legacy navigation labels and P0 shell taxonomy are no longer canonical truth. | DERIVED | `docs/PRIMARY_INFORMATION_ARCHITECTURE.md` §5 | RECHECK_REQUIRED | — | 2026-09-15 | Canonical Spec, component specs and M7.1 label-fit evidence require propagation/revalidation. |
| `CDL-017` | UI/asset production remains frozen until Creative Canonical Lock. | Direct project governance decision | Roadmap T237 / current CR1 | PRODUCT OWNER LOCKED | Product Owner | 2026-09-15 | Prevents visual work from hardening stale terminology/art direction. |

---

# 3. Superseded / historical directions

The following directions may remain visible in historical files for provenance but must not be treated as active:

- `Convocazioni` / `Le Convocazioni del Reame` as event umbrella → **SUPERSEDED by Le Adunanze**.
- `La Soglia del Reame` as current Home name → **SUPERSEDED / non-canonical working history**; `Reame` remains controlled terminology.
- `Tesori = guides/tools/documents/resources` → **SUPERSEDED** by suspended collecting-oriented direction.
- `Mercante = DEFERRED/P2 active future page` → **SUPERSEDED by ON HOLD**.
- legacy primary IA `IMPRESE / CAMPAGNE / AVVENTURIERI / CRONACHE / IL REAME / ARCHIVIO` → **RECHECK_REQUIRED / superseded for navigation purposes**.

---

# 4. Open Product Owner decisions

These remain unresolved and must stay visible instead of being inferred downstream:

- final PO approval of `NARRATIVE_ART_BIBLE.md` v0.4;
- Home H01–H08 sequence and Home poetic title, if any;
- rule for selecting the featured `Prossima Adunanza`;
- exact internal taxonomy of Le Adunanze beyond Giostre;
- exact internal taxonomy/archive behavior of Cronache;
- final destination of guides, regulations, documents and reference material;
- final `Luoghi` / `Sedi` label for physical venues;
- launch content-readiness thresholds for each major page/module;
- final Italian/English treatment of official Sorcery terminology in editorial content;
- Tesori reopening criteria and final scope;
- Mercante reopening only after explicit PO decision.

---

# 5. Traceability rule

Every Page Dossier and later Component/Asset specification must reference applicable `CDL-*` decisions.

Required chain:

`CDL decision → Narrative/Terminology/IA source → Page Dossier decision → Component ID → Asset ID → implementation → QA/evidence`

A downstream object must be marked `RECHECK_REQUIRED` when an upstream `CDL-*` decision it depends on is superseded, suspended or materially changed.

---

# 6. Governance rule

- Only explicit Product Owner acceptance may create `PRODUCT OWNER LOCKED` status.
- Agent/model proposals stay `DRAFT` or `REVIEW` until accepted.
- Historical wording is preserved when useful for provenance, but must be clearly marked `SUPERSEDED`.
- Suspended/on-hold concepts cannot silently re-enter IA, components or assets.
- This log should be updated in the same workstream whenever a material creative/product decision changes.
