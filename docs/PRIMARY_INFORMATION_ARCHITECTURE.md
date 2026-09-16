# In Cerca di Avventura — Primary Information Architecture

**Document ID:** ICA-IA-001  
**Status:** DRAFT — Product Owner direction locked, pending Creative Canonical Lock  
**Version:** 1.1  
**Branch:** `governance/narrative-art-bible-v0-1`  
**Delivery status:** `COMPLETE`  
**Canonical readiness:** `PRODUCT_OWNER_LOCKED_SCOPE`  
**Depends on:** `docs/NARRATIVE_ART_BIBLE.md`, `docs/TERMINOLOGY_BIBLE.md`

> This document records the Product Owner-approved primary navigation direction emerging from the creative and terminology reconciliation. It does not yet update the legacy Canonical Spec or authorize production implementation.

---

# 1. Primary navigation — Product Owner approved

The primary navigation is:

**[ICA crest = Home] → Le Adunanze → Cronache → Avventurieri → Alleanze → Proclami**

Rules:

- the ICA crest functions as the Home entry point;
- `Home` does not need to appear as a separate textual navigation item;
- `Giostre` is not a primary-navigation sibling of `Le Adunanze`;
- `Tesori` is excluded while suspended;
- `Mercante` is excluded while on hold;
- the legacy P0 shell navigation remains `RECHECK_REQUIRED` until downstream canonical and responsive documents are reconciled.

**Scope status:** `PRODUCT OWNER LOCKED — PRIMARY IA v1`.

---

# 2. Hierarchy

## 2.1 Le Adunanze

Primary event/gathering destination for the Sorcery ecosystem represented by ICA.

`Le Adunanze` contains:

- **Giostre** — competitive events organized directly by In Cerca di Avventura;
- other competitive Sorcery events organized by external stores, communities, partners or organizers;
- conventions, meetups and other relevant gatherings;
- future event taxonomies refined by the Page Dossier and Content Model.

Canonical relationship:

**Every Giostra is an Adunanza; not every Adunanza is a Giostra.**

## 2.2 Cronache

Editorial memory of ICA.

Narrative place identity: **Gli Annali**.

Includes content whose purpose is to recount, deepen and preserve community memory, such as event reports, interviews, retrospectives, stories, editorial features and context-rich deck/community content.

Guides, rules, documents and reference materials are **not automatically assigned to Cronache**; their final destination remains unresolved.

## 2.3 Avventurieri

Public identity/index for real people represented by ICA.

Narrative place identity: **Il Libro dei Nomi**.

Technical entity: `PLAYER`.

The visible identity is primarily the nickname. `Avatar` remains reserved for the official Sorcery game concept.

## 2.4 Alleanze

Network of Sorcery-related realities represented, supported or connected by ICA.

Internal geographic narrative groupings:

- **Reami d'Italia** — Italian realities;
- **Reami d'Oltreconfine** — realities outside Italy.

Technical object for individual allied entities: `ORGANIZATION`; physical places remain `VENUE`.

## 2.5 Proclami

ICA term for **News**.

Narrative place identity may use **I Proclami dell'Araldo** where appropriate.

A Proclamo publishes news; a Cronaca preserves and tells the record.

---

# 3. Primary navigation rendering intent

Desktop conceptual order:

`[ICA CREST]  LE ADUNANZE  ·  CRONACHE  ·  AVVENTURIERI  ·  ALLEANZE  ·  PROCLAMI`

This sequence is semantic, not a final visual specification. Responsive behavior remains subject to M7/M7.1 reconciliation after label-fit revalidation.

---

# 4. Explicit exclusions

## Tesori

`Tesori` is `SUSPENDED`. A collecting-oriented direction is recorded separately, but it is not part of active IA until explicitly reopened and defined.

See `docs/creative-decisions/DECISION_TESORI_SCOPE.md`.

## Mercante

`Mercante` is `ON HOLD` and must not appear in active navigation planning or implementation.

See `docs/creative-decisions/DECISION_MERCANTE_ON_HOLD.md`.

---

# 5. Downstream consequences

This Primary IA v1 deliberately conflicts with legacy documents that still encode the old navigation taxonomy.

Before production implementation resumes, reconcile at minimum:

- `docs/ICA_CANONICAL_SPEC.md`;
- `docs/components/P0_SHELL_NAV_SIG.md`;
- `docs/M7_1_RESPONSIVE_CONFORMANCE.md`;
- active Page Dossiers;
- Content Model mappings where visible taxonomy has changed;
- future visual-regression baselines after canonical pages exist.

No legacy label set is final canonical truth while reconciliation is in progress.

---

# 6. Vertical-slice rule

The current validation strategy does **not** change Primary IA.

The first end-to-end slice is intentionally narrower:

`Home → Le Adunanze / Giostra → Result → Cronaca → Avventuriero`

Its purpose is to test the information architecture, data relationships, page states, readiness rules, responsive behavior, component reuse and Narrative/Aesthetic QA before every remaining Page Dossier is fully developed.

A successful vertical slice validates the architecture; it does not promote unreviewed documents to `APPROVED`.

---

# 7. Remaining IA decisions

Primary-level structure is locked. The following can remain open while the vertical slice is validated:

- detailed internal taxonomy of Le Adunanze beyond the Giostre invariant;
- internal taxonomy and archive behavior of Cronache;
- final destination of guides, documents, rules and reference materials;
- exact Alleanze browsing/filtering behavior;
- Proclami archive/filtering behavior;
- final mobile presentation pattern;
- page URLs/slugs after Canonical Spec reconciliation.

These are not blockers for the current vertical-slice work unless a tested journey requires them.

---

# 8. Approval record

**Decision:** Primary IA v1  
**Source type:** `PROPOSED` → explicitly accepted by Product Owner  
**Status:** `PRODUCT OWNER LOCKED` for the scope recorded here  
**Approved by:** Product Owner  
**Approval date:** 2026-09-16

This approval locks the direction recorded here but does not move the overall Creative Canonical Lock or legacy Canonical Spec to `APPROVED`.
