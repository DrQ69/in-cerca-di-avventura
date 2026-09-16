# CR1 Vertical Slice Verification — 2026-09-16

**Object:** Creative Canonical Lock vertical slice  
**Journey:** `Home → Adunanza/Giostra → Result → Cronaca → Avventuriero`  
**Status:** `PASS`  
**Evidence class:** specification/data/relationship QA; not production UI verification  
**CI:** initial gate PASS on ICA baseline QA run #37; final branch confirmation PASS on run #40  
**Branch:** `governance/narrative-art-bible-v0-1`

---

## Scope validated

The gate validates the current synthetic canonical fixture and the minimum dossiers required to traverse the journey:

- `docs/pages/PAGE_HOME.md` v0.3;
- `docs/pages/PAGE_ADUNANZE.md` v0.1;
- `docs/pages/PAGE_GIOSTRE.md` v0.1;
- `docs/pages/PAGE_CRONACHE.md` v0.1 vertical-slice minimum;
- `docs/pages/PAGE_AVVENTURIERI.md` v0.1 vertical-slice minimum;
- `tests/fixtures/canonical-sample.json`;
- `docs/components/SHARED_COMPONENT_REGISTRY.md` v0.2;
- Content Governance, Page State Model, Content Readiness Gate, Responsive Art Direction and Narrative & Aesthetic QA contracts.

The fixture is synthetic and must never be published as real community fact.

---

## Automated evidence

`python scripts/creative_consistency_check.py` → PASS  
`python scripts/vertical_slice_check.py` → PASS  
`python scripts/technical_baseline.py` → PASS  
Full workflow `ICA baseline QA` → PASS on run #37 and final confirmation run #40.

---

## Scenario results

| Scenario | Result | Evidence |
|---|---|---|
| Normal upcoming Giostra | PASS | competitive + ICA organizer invariant resolves |
| Sparse external Adunanza | PASS | missing format/registration/address detail remains truthful |
| Missing optional data | PASS | omission does not fabricate fallback values |
| Cancelled event | PASS | status explicit; no registration CTA |
| Completed Giostra → Result | PASS | `EVT-GIO-000 → RES-001` resolves |
| Result → Cronaca | PASS | completed event is preserved by `ART-CHR-001` without replacing RESULT authority |
| Cronaca → Avventurieri | PASS | player references resolve |
| Sparse Avventuriero | PASS | public nickname remains useful with optional affiliation absent |
| Deck relation | PASS | event/player relation resolves; Atlas/Spellbook structure present |
| Proclamo vs Cronaca | PASS | NEWS and CRONACA remain explicit distinct classifications |
| Home featured selector | PASS | nearest eligible upcoming Adunanza selected when no explicit override exists |

---

## Contract checks

### Content Governance — PASS

- structured facts remain source of truth;
- narrative does not overwrite event/result/player/deck facts;
- sparse fields are omitted instead of invented;
- synthetic data remains test-only;
- player privacy/public visibility is respected by the slice contract.

### Page States — PASS

- upcoming, completed, cancelled and sparse states are represented;
- valid empty/sparse behavior remains distinct from technical failure;
- completed events shift from registration toward result/memory.

### Content Readiness — PASS for vertical-slice validation

- Home has a deterministic next-event rule;
- Adunanze/Giostre have useful verified fixture records;
- one substantial Cronaca is sufficient for sparse editorial validation;
- sparse profile behavior is validated without claiming that the full Avventurieri directory is launch-ready.

### Responsive contract — PASS at specification level

- semantic priority is defined;
- mobile stacks instead of shrinking desktop layouts;
- no critical information depends on hover;
- touch targets remain >=44x44 by contract.

Runtime M7/M7.1 validation remains `RECHECK_REQUIRED` until canonical UI implementation resumes.

### Narrative & Aesthetic QA — PASS at specification/data level

- factual/diegetic boundary preserved;
- Sorcery protected terminology respected;
- Giostre/Adunanze/Cronache/Avventurieri semantics preserved;
- no suspended/on-hold domain re-entered scope;
- no fictional production content introduced.

---

## Upstream corrections discovered during the gate

1. Canonical status registry originally treated the synthetic fixture as a canonical gating dependency. This was corrected by separating `evidence_dependencies` from `gating_dependencies`.
2. Avventurieri dossier contained a QA shorthand that triggered protected-term detection. The wording was clarified to explicitly preserve the official Sorcery Avatar meaning.
3. Vertical-slice token checking was initially case-sensitive and falsely rejected the existing cancelled-state contract. The QA check was corrected to validate semantic presence rather than casing.

These were corrected upstream in governance/QA sources rather than patched inside a UI component.

---

## Shared Component Registry conclusion

The slice passed without proving the need for new generic component families.

Existing shared contracts are sufficient for the current slice. Cronaca article body/threshold and Avventuriero profile identity remain page-local. Registry v0.2 is therefore consolidated for the vertical slice without speculative expansion.

---

## Gate conclusion

**VERTICAL SLICE GATE: PASS**

This PASS means the current specifications, relationships, sample data and shared-component contracts are coherent enough to continue CR1.

It does **not** mean:

- Creative Canonical Lock is approved;
- production UI is verified;
- M7/M7.1 is revalidated;
- Canonical Spec has been propagated;
- any definitive artistic asset may be produced.

Next recommended work: use this evidence to complete the remaining Page Dossiers with less speculation, then reconcile Canonical Spec and specialist documents before shell/UI revalidation.
