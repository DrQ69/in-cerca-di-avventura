# In Cerca di Avventura — Shared Component Registry

**Document ID:** ICA-CMP-REG-001  
**Status:** `IN_PROGRESS — VERTICAL SLICE ONLY`  
**Version:** 0.1  
**Delivery status:** `IN_PROGRESS`  
**Canonical readiness:** `REVIEW_REQUIRED`  
**Scope:** only components proven necessary by Home + Adunanze + Giostre and the canonical sample fixture.

> This registry is deliberately narrow. New shared components are added only when at least two real Page Dossiers need the same semantics/state behavior. Cosmetic similarity alone is insufficient.

---

# 1. Component rules

- shared semantics before shared styling;
- state behavior is part of the component contract;
- page-specific atmosphere may wrap a shared component without changing its factual meaning;
- no production artwork is authorized here;
- components remain `SPECIFIED (REVIEW_REQUIRED)` until implemented and verified later.

---

# 2. Vertical-slice registry

| ID | Role | Proven by | Core states | Required data |
|---|---|---|---|---|
| `CMP-EVT-FEATURED` | featured event presentation | Home + Giostre | upcoming, ongoing, unavailable | EVENT |
| `CMP-EVT-CARD` | repeated event preview | Home + Adunanze + Giostre | upcoming, cancelled, completed, sparse | EVENT |
| `CMP-EVT-STATUS` | explicit event status label | Adunanze + Giostre | upcoming, ongoing, cancelled, completed | status |
| `CMP-EVT-META` | date/venue/organizer/format block | Home + Adunanze + Giostre | complete, missing-optional | EVENT/VENUE/ORG |
| `CMP-FILTER-BAR` | conditional filtering control | Adunanze | collapsed, expanded, inactive | taxonomy/filter config |
| `CMP-RESULT-SUMMARY` | factual result/standing teaser | Giostre | final, partial/not-published | RESULT |
| `CMP-ARTICLE-TEASER` | Proclamo/Cronaca teaser | Home + Giostre | normal, sparse | ARTICLE |
| `CMP-PLAYER-REF` | compact Avventuriero reference | Home + Giostre | sparse, normal | PLAYER |
| `CMP-ORG-REF` | compact Alleanza/organizer reference | Home + Adunanze | sparse, normal | ORGANIZATION |
| `CMP-EMPTY-STATE` | truthful empty/error messaging | all vertical-slice pages | empty, error | state/recovery action |
| `CMP-CTA-LINK` | primary/secondary functional action | all vertical-slice pages | enabled, unavailable/external | label + destination |

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

A sparse `PLAYER` or `ORGANIZATION` is allowed only when the visible fields are truthful and useful. Do not manufacture biography/affiliation.

---

# 4. Responsive contract

Repeated vertical-slice components follow:

- semantic priority before ornament;
- mobile stacking, not shrink-to-fit;
- no horizontal overflow for basic event/result understanding;
- controls >= 44x44;
- status/date/action remain visible;
- hover never carries unique information.

---

# 5. Fixture coverage

`tests/fixtures/canonical-sample.json` validates:

- complete upcoming Giostra;
- sparse external Adunanza;
- cancelled Adunanza;
- completed Giostra with Result;
- sparse Avventuriero;
- Proclamo and Cronaca;
- Atlas/Spellbook deck structure.

The fixture validates component semantics and state behavior only. It is not production content.

---

# 6. Next validation step

Do not expand this registry to every future page yet.

First validate:

`Home → Adunanza/Giostra → Result → Cronaca → Avventuriero`

Then add/revise components only when the slice reveals a real reuse/state need.
