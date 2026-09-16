# In Cerca di Avventura — Shared Component Registry

**Document ID:** ICA-CMP-REG-001  
**Status:** `ACTIVE_DOSSIERS_CONSOLIDATED — REVIEW_REQUIRED`  
**Version:** 0.3  
**Delivery status:** `COMPLETE_FOR_ACTIVE_DOSSIERS`  
**Canonical readiness:** `REVIEW_REQUIRED`  
**Scope:** components proven necessary by Home, Le Adunanze, Giostre, Cronache, Avventurieri, Alleanze and Proclami.

> The registry is evidence-driven. A shared component exists only when multiple page dossiers need the same semantics and state behavior. Cosmetic similarity alone does not justify a shared family.

---

# 1. Component rules

- shared semantics before shared styling;
- state behavior is part of the contract;
- factual meaning cannot change between pages;
- page-specific atmosphere may wrap a shared component without changing semantics;
- no production artwork is authorized here;
- local compositions remain local until reuse evidence appears;
- responsive simplification cannot remove required factual meaning or actions.

---

# 2. Consolidated active-destination registry

| ID | Role | Proven by | Core states | Required data |
|---|---|---|---|---|
| `CMP-EVT-FEATURED` | featured/current event presentation | Home + Giostre | upcoming, ongoing, unavailable | EVENT |
| `CMP-EVT-CARD` | repeated event preview | Home + Adunanze + Giostre + Alleanze related activity | upcoming, cancelled, completed, sparse | EVENT |
| `CMP-EVT-STATUS` | explicit event status label | Adunanze + Giostre + Proclami related-event context | upcoming, ongoing, cancelled, completed | status |
| `CMP-EVT-META` | date/venue/organizer/format block | Home + Adunanze + Giostre + Proclami related-event context | complete, missing-optional | EVENT/VENUE/ORG |
| `CMP-FILTER-BAR` | conditional filter/search/sort controls | Adunanze + Avventurieri + Alleanze when volume justifies it | collapsed, expanded, inactive | taxonomy/filter config |
| `CMP-RESULT-SUMMARY` | factual result/standing teaser | Giostre + Cronache + Avventurieri | final, partial/not-published | RESULT |
| `CMP-ARTICLE-TEASER` | Proclamo/Cronaca preview | Home + Giostre + Cronache/Avventurieri relations + Proclami | normal, sparse | ARTICLE |
| `CMP-PLAYER-REF` | compact Avventuriero reference | Home + Giostre + Cronache | sparse, normal | PLAYER |
| `CMP-ORG-REF` | compact organisation/Alleanza reference | Home + Adunanze + Alleanze | sparse, normal | ORGANIZATION |
| `CMP-EMPTY-STATE` | truthful empty/error messaging | all active destinations | empty, error, not-ready | state/recovery action |
| `CMP-CTA-LINK` | primary/secondary functional action | all active destinations | enabled, unavailable, external | label + destination |

---

# 3. Consolidation findings

No additional generic component family is justified by Alleanze or Proclami.

Keep local for now:

- Home threshold/closing compositions;
- Cronaca article threshold/body;
- Avventuriero profile identity and index framing;
- Alleanze geographic group header and organisation-detail identity;
- Proclami latest-news feature and article header/body;
- any map/cartographic presentation;
- any decorative heraldic/banner treatment.

Reason: their semantics are page-specific or reuse is not yet proven.

---

# 4. Validated behavioral contracts

## 4.1 Event status

Status is always readable as text. Color/icon may support but never replace it.

Cancelled:

- no active registration CTA;
- cancellation visible before action;
- record may remain for history/context.

Completed:

- registration removed;
- result/Cronaca routes may replace action emphasis.

## 4.2 Missing optional data

Do not invent replacements.

Examples:

- missing street address → show verified venue/city if useful;
- missing format → omit format;
- missing registration → show detail route only if valid;
- missing organisation logo → show text identity;
- missing player portrait/real name → nickname and verified activity remain valid.

## 4.3 Editorial classification

`CMP-ARTICLE-TEASER` can represent NEWS/Proclamo or CRONACA only when classification remains explicit in context. The component may share structure but cannot erase semantic distinction.

## 4.4 Organisation/geography

`CMP-ORG-REF` represents the factual organisation. `Reami d'Italia` / `Reami d'Oltreconfine` are grouping context, not a property that renames the organisation itself.

## 4.5 Filtering controls

`CMP-FILTER-BAR` appears only when real content volume makes filtering/search/sort useful. It must not be rendered as decorative complexity on sparse content.

## 4.6 External links

`CMP-CTA-LINK` distinguishes external routes accessibly where needed. Broken or stale official links are removed/reviewed rather than left as primary actions.

---

# 5. Responsive contract

Shared components follow:

- mobile stacking before shrink-to-fit;
- semantic priority before ornament;
- no horizontal overflow for basic understanding;
- controls >= 44x44;
- status/date/title/action remain legible;
- hover never carries unique information;
- images/logos/maps are never the sole carrier of identity or navigation;
- page-local atmosphere may simplify before shared factual content.

This remains specification-level validation; runtime/visual verification is still pending canonical propagation and M7/M7.1 revalidation.

---

# 6. Accessibility contract

All shared components must support:

- semantic text identity independent of imagery;
- visible focus;
- keyboard navigation;
- status not communicated by color alone;
- explicit labels for icon-only controls;
- external-link indication where appropriate;
- readable dates, locations, results and metadata;
- reduced-motion compatibility.

---

# 7. Data/provenance boundary

Shared components consume structured objects but do not become sources of truth.

Examples:

- event card reads `EVENT`;
- result summary reads `RESULT`;
- player reference reads `PLAYER`;
- organisation reference reads `ORGANIZATION`;
- article teaser reads `ARTICLE`.

Selection/order may be editorial or derived, but source facts remain governed upstream.

---

# 8. Evidence base

Vertical-slice evidence:

- `tests/fixtures/canonical-sample.json`;
- `scripts/vertical_slice_check.py`;
- `qa/verification/CR1_VERTICAL_SLICE_2026-09-16.md`;
- ICA baseline QA run #40 PASS.

Additional dossier evidence:

- `docs/pages/PAGE_CRONACHE.md` v0.2;
- `docs/pages/PAGE_AVVENTURIERI.md` v0.2;
- `docs/pages/PAGE_ALLEANZE.md` v0.1;
- `docs/pages/PAGE_PROCLAMI.md` v0.1.

---

# 9. Next step

The shared semantic inventory is sufficiently stable to proceed to the next CR1 layer without inventing new component families.

Next work:

1. define the machine-readable Component Specification schema from this registry;
2. create Asset Dependency Map only after component semantics are encoded;
3. define Asset Specification schema from proven component/asset needs;
4. then propagate locked decisions to Canonical Spec and specialist documents.

No production UI or definitive artwork is authorized by this registry.

**Delivery:** `COMPLETE_FOR_ACTIVE_DOSSIERS`  
**Canonical readiness:** `REVIEW_REQUIRED`  
**Production implementation:** not authorized.
