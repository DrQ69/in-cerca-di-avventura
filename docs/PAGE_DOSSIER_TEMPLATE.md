# In Cerca di Avventura — Page Dossier Template

**Document ID:** ICA-PAG-TPL-001  
**Status:** DRAFT TEMPLATE — Creative Canonical Lock  
**Version:** 1.0  
**Phase:** Creative Canonical Lock  
**Authority:** standard template for all active ICA Page Dossiers; each dossier remains subject to Product Owner review/approval.  
**Depends on:** `docs/NARRATIVE_ART_BIBLE.md`, `docs/TERMINOLOGY_BIBLE.md`, `docs/PRIMARY_INFORMATION_ARCHITECTURE.md`, `docs/EXPERIENCE_MAP.md`, `docs/RELATIONSHIP_MAP.md`, `docs/CONTENT_GOVERNANCE.md`, `docs/PAGE_STATE_MODEL.md`, `docs/CONTENT_READINESS_GATE.md`, `docs/VISUAL_HIERARCHY_MATRIX.md`, `docs/RESPONSIVE_ART_DIRECTION.md`, `docs/NARRATIVE_AESTHETIC_QA.md`, `docs/CREATIVE_DECISION_LOG.md`

> A Page Dossier translates ICA's writer-led world into a page that can be designed, implemented, populated and verified without inventing missing decisions downstream.

---

# 0. Usage rules

A Page Dossier is required for every active primary destination and every major subordinate destination whose identity, content or behavior differs materially from its parent.

The dossier must preserve four layers separately:

1. **Writer Intent** — what place / experience is being expressed;
2. **Art Direction** — how that intent becomes atmosphere, materials, imagery, hierarchy and visual emphasis;
3. **UX / Web Design** — how the visitor understands and operates the page;
4. **Technical / Content Contract** — which factual objects, states, relationships and components are required.

A dossier may be drafted before every detail is approved, but unresolved items must be explicitly marked `REVIEW`, `OPEN`, `BLOCKED`, `SUSPENDED` or `ON HOLD`. They must not be silently promoted into implementation.

No Page Dossier may override Product Owner-locked terminology or the factual/data model.

---

# 1. Document control

**Document ID:** `ICA-PAG-[PAGE]-001`  
**Page:** `[functional page name]`  
**Narrative identity:** `[approved / candidate narrative place title]`  
**Status:** `[DRAFT / REVIEW_REQUIRED / PRODUCT_OWNER_LOCKED / APPROVED]`  
**Version:** `[x.y]`  
**Primary owner:** `[role]`  
**Last reviewed:** `[YYYY-MM-DD]`  
**Primary dependencies:** `[document refs]`

## 1.1 Provenance summary

- `source_type`: `[ORIGINAL_SOURCE / RECONSTRUCTED / PROPOSED / DERIVED]`
- `source_ref`: `[Creative Decision Log / Bible section / decision note / rulebook / other]`
- `decision_status`: `[PROPOSED / REVIEW / PRODUCT_OWNER_LOCKED / APPROVED / SUPERSEDED / SUSPENDED / ON_HOLD]`
- `approved_by`: `[Product Owner / n.a.]`
- `approved_date`: `[YYYY-MM-DD / n.a.]`

---

# 2. Page identity

## 2.1 Functional identity

Define:

- real-world purpose of the page;
- primary user need(s);
- role in the Primary IA;
- role in the Experience Map;
- technical page family;
- main content/entity types.

## 2.2 Narrative identity

Define:

- where the visitor has arrived in the cittadella-crocevia;
- what the place means in ICA's narrative geography;
- whether the narrative name is canonical, candidate or intentionally absent;
- how the place remains understandable to a first-time visitor.

## 2.3 Functional descriptor

Provide the plain-language descriptor displayed where needed beneath or beside the narrative title.

---

# 3. Writer Intent

Describe the page as a writer would describe the place and its role in the world.

Required questions:

- What should the visitor feel on arrival?
- What is happening here?
- Why does this place exist?
- What traces of the real community are preserved or activated here?
- How does this place connect present activity to memory?
- What should never happen here narratively?

Writer Intent must not contain implementation decisions disguised as prose.

---

# 4. Emotional and experiential goals

List the intended emotional sequence in priority order.

For each goal define:

| Goal | Visitor perception | Evidence in page experience | Priority |
|---|---|---|---|
| `[example]` | `[what user should perceive]` | `[how experience demonstrates it]` | `[Critical/High/Medium]` |

Also define explicit anti-goals: what the page must not feel like.

---

# 5. Real user jobs and success conditions

Document the concrete questions/tasks the page must answer.

For each job:

| User job | Success condition | Primary action | Related journey |
|---|---|---|---|
| `[job]` | `[observable outcome]` | `[CTA/action]` | `[Experience Map journey ID/ref]` |

A page is not ready if its narrative purpose is clear but its real user jobs are not.

---

# 6. Content scope

## 6.1 Required content

List content that must exist for the page to be publishable.

For each content block identify:

- object/entity type;
- factual fields;
- optional editorial fields;
- source of truth;
- verification requirement;
- owner;
- update/freshness rule.

## 6.2 Optional content

List enhancements that may appear when available but must not be required for baseline readiness.

## 6.3 Explicit exclusions

List domains or content types that must not appear here unless a later Product Owner decision changes scope.

## 6.4 Factual / editorial / narrative boundary

State clearly which fields are:

- `FACTUAL`;
- `EDITORIAL`;
- `NARRATIVE`.

No narrative field may overwrite factual truth.

---

# 7. Information architecture inside the page

Define the proposed sequence of page modules.

| Module ID | Module role | Required? | Visual level | Primary content | Destination / action |
|---|---|---:|---|---|---|
| `[PAG-MOD-01]` | `[role]` | `Yes/No` | `V6–V1` | `[content]` | `[action]` |

Rules:

- module order must support the Experience Map;
- modules must not exist only to preserve scenery;
- duplicate data must point to one source of truth;
- repeated modules must use restrained visual intensity;
- optional modules must declare their empty/not-ready behavior.

---

# 8. Web Designer Interpretation

Translate Writer Intent into web behavior without inventing new product semantics.

Define:

- page composition and rhythm;
- spatial hierarchy;
- content density;
- reading/scanning pattern;
- transitions between modules;
- where atmosphere may be strongest;
- where function/data must dominate;
- what is shared with the ICA design system;
- what is page-specific.

Use the principle:

**Fantasy in perception. Clarity in interaction.**

---

# 9. Art Direction

## 9.1 Environmental direction

Define setting, time/light, material emphasis and environmental cues.

## 9.2 Material hierarchy

Specify allowed emphasis among:

- stone / architecture;
- iron / metalwork;
- antique gold;
- fabric / velvet;
- parchment / paper;
- ink / seals;
- content photography / artwork.

## 9.3 Visual intensity budget

Map each major module to `V6–V1` using `VISUAL_HIERARCHY_MATRIX.md`.

## 9.4 Symbolic / heraldic language

Define page-specific symbols only when they communicate identity, place, category, status, provenance or achievement.

State whether a new emblem is required, optional or prohibited.

## 9.5 Negative constraints

List page-specific anti-patterns in addition to global Narrative & Art Bible prohibitions.

---

# 10. Responsive Art Direction

For each major module define what happens at:

- wide desktop;
- standard desktop;
- tablet;
- mobile portrait;
- mobile landscape where relevant.

Use one of the following actions for every significant visual element:

- `PRESERVE`;
- `CROP`;
- `RECOMPOSE`;
- `SIMPLIFY`;
- `SUBSTITUTE`;
- `REMOVE_DECORATIVE_ONLY`.

Rules:

- remove ornament before reducing legibility;
- do not shrink narrative compositions into unreadable miniatures;
- do not change factual content hierarchy merely because the screen is smaller;
- no critical information may depend on hover;
- touch targets remain >= 44x44.

---

# 11. Page states

Map the page to `PAGE_STATE_MODEL.md`.

Define behavior for applicable states:

- `NOT_READY`;
- `PRELAUNCH_READY`;
- `LIVE_SPARSE`;
- `LIVE_NORMAL`;
- `LIVE_RICH`;
- `STALE_REVIEW`;
- `ARCHIVAL`;
- `TEMPORARILY_UNAVAILABLE`.

Also define module-level states where content may be hidden, simplified or replaced.

No fictional placeholder content is permitted in production.

---

# 12. Content Readiness Gate

Document the page-specific conditions required for:

- `PASS_STAGING_ONLY`;
- `PASS_LIVE`.

Reference the universal criteria in `CONTENT_READINESS_GATE.md` and add only page-specific conditions.

Define:

- minimum useful content quantity;
- mandatory verified fields;
- mandatory routes/actions;
- acceptable sparse-state behavior;
- dependencies on other pages/entities;
- re-gating triggers.

---

# 13. Relationships and navigation

Reference `RELATIONSHIP_MAP.md` and document page-specific inbound/outbound relationships.

| From | Relationship | To | Factual or editorial | Required link? | Owner/source |
|---|---|---|---|---:|---|
| `[entity/page]` | `[relation]` | `[entity/page]` | `[type]` | `Yes/No` | `[source]` |

State which cross-links are mandatory for journey continuity.

---

# 14. Components

## 14.1 Component decomposition

| Component ID | Role | Shared / local | Visual level | Required states | Data dependencies |
|---|---|---|---|---|---|
| `[CMP-ID]` | `[role]` | `[Shared/Local]` | `[V6–V1]` | `[states]` | `[entities/fields]` |

IDs remain provisional until reconciled with the Shared Component Registry.

## 14.2 Shared-component rule

A component belongs in the Shared Component Registry when its function, semantics and state behavior recur across pages. Cosmetic similarity alone is not sufficient.

## 14.3 Local-component rule

A local component is allowed only when its page-specific role cannot be represented cleanly by an existing shared component.

---

# 15. Asset dependencies

Do not define production assets before the page/component need is known.

For every asset candidate state:

| Asset candidate | Role | Required? | Component/module | Responsive variants | Provenance / source | Status |
|---|---|---:|---|---|---|---|
| `[AST-ID candidate]` | `[role]` | `Yes/No` | `[ref]` | `[variants]` | `[source]` | `[DRAFT/REVIEW]` |

Final asset IDs/specifications belong in the Asset Registry / Asset JSON layer after component consolidation.

---

# 16. Interaction and microcopy

Define:

- primary CTA;
- secondary actions;
- filters/search/sort if any;
- expandable/collapsible behavior;
- external-link behavior;
- empty-state actions;
- error-recovery actions.

Microcopy must follow the register ladder:

- ceremonial at thresholds only;
- editorial in introductions;
- functional in actions;
- direct in data/system states.

Do not replace obvious verbs with obscure fantasy synonyms.

---

# 17. Accessibility requirements

At minimum document:

- semantic heading order;
- landmark structure;
- keyboard order;
- visible focus;
- text contrast;
- alternative text strategy;
- decorative-image handling;
- status communication not dependent on color/icon alone;
- reduced-motion behavior;
- touch-target compliance;
- readable dates, locations, scores and metadata;
- accessible labels for icons and controls.

Add page-specific requirements where needed.

---

# 18. SEO / discoverability / sharing

Define:

- functional page title;
- narrative title relationship to SEO title;
- meta description intent;
- indexability rules;
- structured-data opportunities if applicable;
- Open Graph / social preview intent;
- external-source attribution requirements.

Narrative naming must never make the real subject of the page opaque.

---

# 19. Data and technical contract

List the required entities/fields and whether they are mandatory, optional or derived.

| Object | Field | Requirement | Source of truth | Verification | Display contexts |
|---|---|---|---|---|---|
| `[EVENT]` | `[date]` | `[Required]` | `[source]` | `[rule]` | `[modules]` |

Rules:

- do not duplicate structured data in page-local prose when a canonical field exists;
- derived values must declare derivation logic;
- missing data must follow Content Governance fallback rules;
- page rendering must respect privacy/publication scope.

---

# 20. Machine-readable specification placeholder

The Page Dossier remains the human-readable source. Machine-readable JSON is derived later and must not become a second independent narrative specification.

Required future JSON families:

- page metadata;
- module registry;
- component refs;
- content/data dependencies;
- responsive actions;
- page states;
- readiness rules;
- provenance IDs;
- QA profile refs.

Do not write JSON until the corresponding human decisions are sufficiently stable.

---

# 21. Narrative → Design → Implementation traceability

Each significant decision should be traceable through the chain:

`CDL decision / Bible rule -> Page Dossier decision ID -> Component ID -> Asset ID if any -> implementation -> QA evidence`

Use stable page decision IDs:

`PAG-[PAGE]-###`

For every decision record:

| Decision ID | Decision | Source type | Source ref | Status | Downstream refs |
|---|---|---|---|---|---|
| `PAG-[PAGE]-001` | `[decision]` | `[type]` | `[ref]` | `[status]` | `[refs]` |

---

# 22. Narrative & Aesthetic QA profile

Declare which NAQ controls apply and any page-specific extensions.

Minimum:

- world/metaphor coherence;
- terminology compliance;
- factual/diegetic separation;
- visual hierarchy compliance;
- anti-pattern check;
- responsive identity preservation;
- accessibility/function-before-ornament;
- provenance coverage.

Critical NAQ failure blocks promotion even if technical QA passes.

---

# 23. Open Product Owner decisions

List only decisions that genuinely require Product Owner judgment.

For each item specify:

- exact decision required;
- why it cannot be derived safely;
- available options if useful;
- downstream impact;
- whether it blocks implementation or can remain deferred.

Do not ask the Product Owner to decide implementation details that are already governed by the design system, accessibility requirements or technical standards.

---

# 24. Definition of Ready for implementation

A Page Dossier may move toward implementation only when:

- Writer Intent is accepted;
- functional purpose and user jobs are resolved;
- visible terminology is aligned with Terminology Bible;
- module architecture is accepted;
- content sources and ownership are known;
- page state behavior is defined;
- Content Readiness conditions are defined;
- relationships are mapped;
- shared/local component boundaries are resolved sufficiently for implementation;
- responsive behavior is defined;
- accessibility requirements are testable;
- asset dependencies are enumerated but not prematurely produced;
- provenance is complete for material decisions;
- no suspended/on-hold domain has re-entered scope silently;
- Canonical Spec conflicts are identified for propagation;
- required Product Owner decisions are closed or explicitly deferred without blocking the page.

Recommended lifecycle labels:

- `SPECIFIED (DRAFT)`;
- `SPECIFIED (REVIEW_REQUIRED)`;
- `SPECIFIED (PRODUCT_OWNER_LOCKED)`;
- `IMPLEMENTED`;
- `VERIFIED`;
- `APPROVED` — Product Owner only.

Readiness remains independent:

- `NOT_READY`;
- `STAGING_READY`;
- `PRODUCTION_READY`.

---

# 25. Page Dossier completion checklist

Before marking a dossier complete as a CR1 deliverable, verify:

- [ ] document control and provenance present;
- [ ] functional + narrative identity defined;
- [ ] Writer Intent complete;
- [ ] emotional goals and anti-goals documented;
- [ ] real user jobs documented;
- [ ] required/optional/excluded content defined;
- [ ] module architecture defined;
- [ ] Web Designer Interpretation documented;
- [ ] Art Direction and visual intensity assigned;
- [ ] Responsive Art Direction assigned;
- [ ] page/module states defined;
- [ ] Content Readiness criteria defined;
- [ ] relationships documented;
- [ ] component decomposition present;
- [ ] asset dependencies identified;
- [ ] interactions/microcopy covered;
- [ ] accessibility covered;
- [ ] SEO/discoverability covered;
- [ ] data contract covered;
- [ ] traceability register present;
- [ ] Narrative & Aesthetic QA profile declared;
- [ ] Product Owner decisions isolated explicitly;
- [ ] Definition of Ready evaluated.

A completed dossier may still be `REVIEW_REQUIRED`; completion of the document is not equivalent to Product Owner approval or production readiness.
