# In Cerca di Avventura — Page Dossier: Giostre

**Document ID:** ICA-PAG-GIO-001  
**Page:** Giostre  
**Parent:** Le Adunanze  
**Narrative identity:** Giostre; `Il Campo delle Prove` may be used as page-level expressive language only if later accepted  
**Functional descriptor:** Eventi competitivi organizzati direttamente da In Cerca di Avventura  
**Status:** `SPECIFIED (REVIEW_REQUIRED)`  
**Version:** 0.1  
**Delivery status:** `COMPLETE`  
**Canonical readiness:** `REVIEW_REQUIRED`  
**Readiness:** `NOT_READY`  
**Last reviewed:** 2026-09-16  
**Primary dependencies:** `docs/pages/PAGE_ADUNANZE.md`, `docs/TERMINOLOGY_BIBLE.md`, `docs/RELATIONSHIP_MAP.md`, `docs/PAGE_STATE_MODEL.md`, `docs/CONTENT_READINESS_GATE.md`

> A Giostra is not a generic tournament label. It is a competitive Adunanza organized directly by ICA.

---

# 1. Locked semantic invariant

An event may be presented as a Giostra only when all are true:

- technical base object = `EVENT`;
- `competitive=true`;
- organizer/ownership = ICA;
- ICA event subtype/flag = Giostra.

Therefore:

- every Giostra is an Adunanza;
- an external tournament is not a Giostra;
- promotion by ICA does not make an externally organized event a Giostra.

Source: `CDL-005`.

---

# 2. Functional purpose

The Giostre page/subdestination must:

- surface upcoming ICA competitive events;
- preserve completed Giostre;
- connect competition to results, decks, players and Cronache;
- distinguish action-before-event from memory-after-event.

---

# 3. Writer Intent

This is the competitive field of the cittadella, but competition is represented through real event facts and community memory, not invented combat lore.

Threshold may be more ceremonial than the event list. Results and standings remain plain and exact.

---

# 4. User jobs

| Job | Success |
|---|---|
| Find next ICA competition | upcoming Giostra is immediately visible |
| Understand practical details | date, venue, format and status are clear |
| Register/get info | active CTA only when valid |
| Review completed Giostra | result and related Cronaca are reachable |
| Explore participants | Avventurieri and decks link from verified relationships |

---

# 5. Page architecture

| Module | Role | Required | Visual level |
|---|---|---:|---|
| `GIO01` | threshold / definition | Yes | V5 |
| `GIO02` | next/upcoming Giostra | Conditional | V4 |
| `GIO03` | upcoming Giostre list | Conditional | V2–V3 |
| `GIO04` | recent results / completed Giostre | Yes when available | V2 |
| `GIO05` | archive route | Conditional | V1–V2 |
| `GIO06` | valid no-upcoming state | Yes | V1 |

If no future Giostra exists, the page may remain useful as an archival competition destination.

---

# 6. Event lifecycle

`UPCOMING → ONGOING → COMPLETED → RESULT/CRONACA ENRICHMENT → ARCHIVAL`

Rules:

- upcoming: registration/info may be primary;
- cancelled: registration removed, status explicit;
- completed: registration removed; result/Cronaca may become primary;
- archival: event record remains accessible without pretending to be current.

---

# 7. Results / memory contract

For a completed Giostra, prefer this progression when data exists:

1. event facts;
2. final result/standing;
3. related Avventurieri;
4. deck(s) where published;
5. Cronaca/editorial memory.

Result is factual. Cronaca is editorial. Neither replaces the other.

---

# 8. States / readiness

`LIVE_SPARSE` may mean:

- one future verified Giostra; or
- no future Giostra, but enough verified completed history to make the page useful.

No “coming soon” fiction.

A Giostra detail cannot be promoted if the invariant is not machine-verifiable.

---

# 9. Relationships

Required vertical-slice relationships:

- Giostra → parent Adunanze;
- Giostra → Organizer ICA;
- Giostra → Venue;
- completed Giostra → Result;
- Result → Players;
- Giostra/Result → Deck where available;
- Giostra → Proclamo;
- completed Giostra → Cronaca.

---

# 10. Components

Uses shared vertical-slice components:

- `CMP-EVT-FEATURED`;
- `CMP-EVT-CARD`;
- `CMP-EVT-STATUS`;
- `CMP-EVT-META`;
- `CMP-RESULT-SUMMARY`;
- `CMP-PLAYER-REF`;
- `CMP-ARTICLE-TEASER`;
- `CMP-EMPTY-STATE`;
- `CMP-CTA-LINK`.

No page-specific component is justified yet beyond threshold composition.

---

# 11. Responsive behavior

Mobile priority:

1. status/date;
2. title;
3. venue/format;
4. action;
5. result links after completion.

Standings/result summaries must not require horizontal overflow for basic understanding.

---

# 12. Data contract

Fixture validation requires:

- `EVENT.is_giostra=true`;
- `EVENT.competitive=true`;
- `EVENT.organizer_id="ORG-ICA"`;
- result references resolve;
- deck/player/article references resolve;
- cancelled Giostra would have no active registration URL.

---

# 13. Traceability

| Decision ID | Decision | Source | Status |
|---|---|---|---|
| `PAG-GIO-001` | Giostra is competitive + ICA-organized + Adunanza. | `CDL-005` | PRODUCT OWNER LOCKED |
| `PAG-GIO-002` | Giostre is subordinate to Le Adunanze. | `CDL-003`, `CDL-005` | PRODUCT OWNER LOCKED |
| `PAG-GIO-003` | no-future state can remain archival when useful. | Page State Model | REVIEW |
| `PAG-GIO-004` | completed event shifts emphasis from registration to result/memory. | Experience Map | REVIEW |
| `PAG-GIO-005` | result and Cronaca remain separate factual/editorial objects. | Content Governance | REVIEW |

---

# 14. Product Owner decisions

No new PO decision blocks vertical-slice validation.

`Il Campo delle Prove` remains optional expressive language and is not required for implementation.

---

# 15. Definition of Ready

**Vertical-slice specification state:** `READY_FOR_VALIDATION`  
**Canonical state:** `REVIEW_REQUIRED`  
**Production readiness:** `NOT_READY`
