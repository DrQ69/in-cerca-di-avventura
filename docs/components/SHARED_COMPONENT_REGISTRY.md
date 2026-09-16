# In Cerca di Avventura — Shared Component Registry

**Document ID:** ICA-CMP-REG-001  
**Status:** `VERTICAL_SLICE_CONSOLIDATED — REVIEW_REQUIRED`  
**Version:** 0.2  
**Delivery status:** `COMPLETE_FOR_VERTICAL_SLICE`  
**Canonical readiness:** `REVIEW_REQUIRED`  
**Scope:** components proven necessary by Home + Adunanze + Giostre + minimum Cronache/Avventurieri slice and the canonical sample fixture.

> This registry remains deliberately narrow. The vertical-slice gate passed without requiring speculative component families. New shared components are added only when at least two real Page Dossiers need the same semantics/state behavior. Cosmetic similarity alone is insufficient.

---

# 1. Component rules

- shared semantics before shared styling;
- state behavior is part of the component contract;
- page-specific atmosphere may wrap a shared component without changing factual meaning;
- no production artwork is authorized here;
- components remain `SPECIFIED (REVIEW_REQUIRED)` until later implementation and verification;
- page-local threshold/body/profile compositions remain local unless reuse evidence appears.

---

# 2. Vertical-slice registry — consolidated

| ID | Role | Proven by | Core states | Required data |
|---|---|---|---|---|
| `CMP-EVT-FEATURED` | featured event presentation | Home + Giostre | upcoming, ongoing, unavailable | EVENT |
| `CMP-EVT-CARD` | repeated event preview | Home + Adunanze + Giostre | upcoming, cancelled, completed, sparse | EVENT |
| `CMP-EVT-STATUS` | explicit event status label | Adunanze + Giostre | upcoming, ongoing, cancelled, completed | status |
| `CMP-EVT-META` | date/venue/organizer/format block | Home + Adunanze + Giostre | complete, missing-optional | EVENT/VENUE/ORG |
| `CMP-FILTER-BAR` | conditional filtering control | Adunanze | collapsed, expanded, inactive | taxonomy/filter config |
| `CMP-RESULT-SUMMARY` | factual result/standing teaser | Giostre + Cronache + Avventurieri context | final, partial/not-published | RESULT |
| `CMP-ARTICLE-TEASER` | Proclamo/Cronaca teaser | Home + Giostre + Avventurieri | normal, sparse | ARTICLE |
| `CMP-PLAYER-REF` | compact Avventuriero reference | Home + Giostre + Cronache | sparse, normal | PLAYER |
| `CMP-ORG-REF` | compact Alleanza/organizer reference | Home + Adunanze | sparse, normal | ORGANIZATION |
| `CMP-EMPTY-STATE` | truthful empty/error messaging | all vertical-slice pages | empty, error | state/recovery action |
| `CMP-CTA-LINK` | primary/secondary functional action | all vertical-slice pages | enabled, unavailable/external | label + destination |

No additional shared component was justified by the minimum Cronache or Avventurieri dossiers. Their article body/threshold and profile identity compositions remain page-local until another page proves reuse.

---

# 3. Validated behavioral rules

## Event status

Status must always be readable as text. Color/icon may support it but never replace it.

Cancelled:

- no active registration CTA;
- status visible before action;
- factual record may remain.

Completed:

- registration removed;
- result/Cronaca routes may replace it.

## Missing optional data

`CMP-EVT-META` does not invent replacements.

Examples:

- missing street address → show city/venue name if verified;
- missing format → omit format row;
- missing registration URL → show detail/info route only if one exists.

## Sparse person/org

A sparse `PLAYER` or `ORGANIZATION` is allowed only when visible fields are truthful and useful. Do not manufacture biography/affiliation.

## Editorial-memory boundary

`CMP-ARTICLE-TEASER` may represent either News/Proclamo or Cronaca, but the editorial classification and visible context must remain explicit. The component cannot collapse the semantic distinction.

## Result relationship

`CMP-RESULT-SUMMARY` exposes factual result data and may link toward related players/Cronaca; it does not turn editorial memory into result authority.

---

# 4. Responsive contract — validated at specification level

Repeated vertical-slice components follow:

- semantic priority before ornament;
- mobile stacking, not shrink-to-fit;
- no horizontal overflow for basic event/result understanding;
- controls >= 44x44;
- status/date/action remain visible;
- hover never carries unique information;
- article/profile local compositions may simplify decorative treatment before content hierarchy.

This is contract validation, not visual/runtime verification. M7/M7.1 implementation remains RECHECK_REQUIRED until canonical propagation and real UI revalidation.

---

# 5. Fixture coverage and gate evidence

`tests/fixtures/canonical-sample.json` validates:

- complete upcoming Giostra;
- sparse external Adunanza;
- cancelled Adunanza;
- completed Giostra with Result;
- sparse Avventuriero;
- Proclamo and Cronaca;
- Atlas/Spellbook deck structure;
- Home deterministic featured-event selection;
- event/result/article/player relationship integrity.

Automated gate: `scripts/vertical_slice_check.py`.

CI result: **PASS** on ICA baseline QA run **#37** (2026-09-16).

The fixture validates component semantics/state behavior only and is not production content.

---

# 6. Consolidation decision

The vertical slice did **not** prove a need for new generic components beyond the v0.1 registry.

Therefore:

- keep the current shared set;
- keep Cronaca body/threshold local;
- keep Avventuriero profile identity local;
- defer component JSON schema until these contracts survive later real implementation;
- do not add decorative shared components or asset families at this stage.

**Vertical-slice registry delivery:** `COMPLETE_FOR_VERTICAL_SLICE`  
**Canonical readiness:** `REVIEW_REQUIRED`  
**Production implementation:** not authorized.
