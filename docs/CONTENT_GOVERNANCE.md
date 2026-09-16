# In Cerca di Avventura — Content Governance

**Document ID:** ICA-CG-001  
**Status:** DRAFT — Creative Canonical Lock  
**Version:** 0.1  
**Branch:** `governance/narrative-art-bible-v0-1`  
**Depends on:** `docs/NARRATIVE_ART_BIBLE.md`, `docs/TERMINOLOGY_BIBLE.md`, `docs/PRIMARY_INFORMATION_ARCHITECTURE.md`, `docs/EXPERIENCE_MAP.md`, `docs/RELATIONSHIP_MAP.md`, `docs/CREATIVE_DECISION_LOG.md`

> This document defines how factual, editorial and narrative content enters ICA, who owns it, how it is verified, how it is updated, and what must happen when information is missing, uncertain, stale or private.

---

# 1. Governance principles

1. **Facts have a source.** Dates, organisers, venues, results, rankings, deck data, affiliations and achievements must be supportable by a source or responsible owner.
2. **Narrative never overwrites facts.** The diegetic layer may frame or celebrate a fact but may not change it.
3. **Every content family has an owner.** Ownership may be editorial, event-operational, organisational or data-governance ownership.
4. **Structured facts are single-source where possible.** Home, landing pages and Cronache should reference structured entities instead of manually duplicating factual values.
5. **Uncertainty is explicit.** Unknown, pending, provisional or unverified values are not silently converted into certainty.
6. **Privacy beats completeness.** Real-person profiles expose only data appropriate for public presentation and consistent with consent/privacy rules.
7. **Content can age.** Every content type must define whether it is current, historical, evergreen or time-sensitive.

---

# 2. Content authority model

| Content family | TECH object | Primary factual owner | Typical source | Editorial owner | Update trigger |
|---|---|---|---|---|---|
| Adunanze / Giostre | `EVENT` | event organiser / ICA for Giostre | official organiser information, ICA event operations | ICA editorial | creation, date/time/location/status change, completion |
| Results | `RESULT` | organiser / tournament record | official standings/results | ICA editorial may contextualise | publication or correction |
| Avventurieri | `PLAYER` | ICA community data governance | public/consented profile data + verified activity | ICA editorial for spotlight copy | factual activity or explicit profile update |
| Alleanze | `ORGANIZATION` | organisation representative / ICA verification | public organisation information | ICA editorial | partner status, name, geography, link changes |
| Luoghi / Sedi | `VENUE` | venue/organiser | official venue data | ICA editorial | address/name/status changes |
| Proclami | `ARTICLE` + `NEWS` | author/editor | verified source appropriate to news item | ICA editorial | publication, correction, expiry when relevant |
| Cronache | `ARTICLE` + chronicle classification | author/editor | underlying events/people/results + interviews/media | ICA editorial | publication, correction, archival enrichment |
| Deck | `DECK` | player/source event where applicable | submitted/published deck record | ICA editorial | correction/version clarification |
| Achievement | `ACHIEVEMENT` | rule owner + factual evidence | result/event/history evidence | ICA editorial presentation | qualifying event/result changes |
| Gallery/Image | `GALLERY` / `IMAGE` | media rights/provenance owner | authorised source | ICA editorial | rights/provenance/caption changes |

Exact schema field names remain a Content Model decision; this document governs responsibility and verification, not implementation syntax.

---

# 3. Source classes

Use the strongest practical source available.

1. **PRIMARY** — ICA operational record for ICA-run activity, official organiser publication, official venue/organisation source, direct authorised submission.
2. **VERIFIED_SECONDARY** — reliable published source corroborating a fact when a primary source is unavailable.
3. **EDITORIAL_INTERVIEW** — statements supplied directly by an interviewed person; attributable as statements, not automatically universal facts.
4. **COMMUNITY_SUBMISSION** — useful but requires verification before becoming a hard factual field where material.
5. **DERIVED** — calculated or inferred from verified structured data; derivation rule must be known.

Narrative copy is not a factual source class.

---

# 4. Verification states

Every material factual object or field should support an equivalent of:

- `VERIFIED` — sufficiently supported for public factual display;
- `PENDING_VERIFICATION` — known candidate value, not ready for authoritative display;
- `DISPUTED` — conflicting credible inputs; display only with explicit qualification if necessary;
- `UNKNOWN` — value not available;
- `NOT_APPLICABLE` — field does not apply.

Do not render `PENDING_VERIFICATION` as though it were verified.

---

# 5. Factual vs editorial vs narrative ownership

## Factual layer

Owns dates, people, organisers, venues, scores, standings, deck composition, links, status and other supportable fields.

## Editorial layer

Owns selection, ordering, headlines, summaries, interviews, emphasis, captions and context.

## Narrative layer

Owns page/place framing, ceremonial intros, transitions and restrained metaphor.

When layers conflict:

**factual accuracy → usability → editorial framing → narrative flourish**.

---

# 6. Content lifecycle

Recommended lifecycle:

`DRAFT → FACT_CHECK → EDITORIAL_REVIEW → READY → PUBLISHED → UPDATED/ARCHIVED`

Optional exceptional states:

- `BLOCKED` — missing required source/approval;
- `WITHDRAWN` — intentionally removed from publication;
- `CORRECTION_REQUIRED` — published content contains a material issue.

Publication readiness is governed by `CONTENT_READINESS_GATE.md`.

---

# 7. Time-sensitive content

## Events

Must distinguish at minimum:

- scheduled;
- postponed;
- cancelled;
- completed.

Past events transition from current-action emphasis toward memory/results/Cronache.

## Proclami

A news item may become historically useful after losing urgency. Expiry of prominence does not imply deletion.

## Cronache

Primarily durable editorial memory. Corrections should preserve trust and, where material, an update note.

---

# 8. Missing-content rules

Do not invent substitute content to fill a design.

When information is missing:

- omit optional fields;
- use clear neutral states such as “da confermare” only when operationally useful;
- hide nonessential modules that would otherwise be empty;
- never create fictional sample people, events, results or alliances in production;
- do not convert “unknown” into a narrative euphemism that appears factual.

---

# 9. Real-person privacy boundary

For `PLAYER` / Avventurieri:

- nickname is the primary public identity by default;
- real name and personal details appear only when intentionally public and appropriate;
- contact information is not a normal public-profile field;
- participation/results may be shown when legitimately public and sourced;
- images require appropriate permission/provenance;
- editorial copy must not invent biography, affiliation or achievements.

Detailed legal/privacy implementation remains subject to the site's final privacy framework.

---

# 10. Corrections and conflicts

When a factual error is identified:

1. confirm the strongest available source;
2. correct the structured source of truth first;
3. propagate to dependent pages/modules;
4. correct editorial prose if affected;
5. add a correction note when the error was material to the published story;
6. do not preserve an incorrect value merely for narrative continuity.

When sources conflict, mark the item `DISPUTED` or hold publication until resolved.

---

# 11. Derived content

Derived values are allowed only when the derivation is deterministic and based on verified data.

Examples:

- number of ICA Giostre attended from verified event participation;
- achievement eligibility from explicit rules + verified results;
- geographic grouping from verified organisation country.

Derived narrative labels must not masquerade as factual awards unless governed by a rule.

---

# 12. Governance by active domain

## Le Adunanze

Source truth is the event object. Home previews and Proclami reference the same event rather than recreating event facts.

## Giostre

A Giostra requires the approved semantic boundary: competitive + organised directly by ICA. The label cannot be assigned editorially to an external event for flavour.

## Cronache

May aggregate facts from events, players, results, decks, organisations and media, but does not become their authoritative source.

## Avventurieri

Profile facts derive from verified/public community activity and privacy-appropriate identity information.

## Alleanze

Organisation identity and geography must remain factual; `Reami d'Italia` / `Reami d'Oltreconfine` are presentation groupings.

## Proclami

News can point to source entities and may announce future, present or past developments. Headlines cannot create facts absent from the source.

---

# 13. Suspended/on-hold domains

- `Tesori` — governance details remain undefined until the collecting scope is reopened.
- `Mercante` — no commerce-content governance is designed while the domain is on hold.

Neither blocks launch governance for active domains.

---

# 14. Page Dossier requirements

Every active Page Dossier must declare:

- source entities used;
- factual owner for each critical data group;
- editorial owner;
- verification requirement;
- stale-data behaviour;
- empty/missing-data behaviour;
- privacy considerations;
- factual vs narrative separation;
- content readiness threshold.

---

# 15. Status and approval

**Current status:** `DRAFT / REVIEW_REQUIRED`  
This document defines the governance baseline for the Creative Canonical Lock but does not by itself approve any page for launch.
