# ICA — Tesori: Product & Data Specification

**Document ID:** ICA-TES-001  
**Status:** Product Owner approved direction  
**Version:** 1.0  
**Date:** 2026-10-10  
**Scope:** /beta/tesori/ design and data model; no live implementation in this document.

## 1. Purpose

**Tesori** is the visual archive of prizes that have been announced, confirmed or awarded in ICA events.

The section is not a generic collectibles catalogue and not a marketplace. Its purpose is to preserve the prize history of Adunanze, Leghe, Tappe and special events in a visually rich but searchable archive.

Every Tesoro remains linked to the event that gives it context.

## 2. Primary experience

The Tesori landing page shows a grid of event tiles. Each tile is represented visually by a fantasy treasure chest and remains fully clickable.

Each event tile shows, in accessible HTML:

- event title;
- League / Tappa context when applicable;
- verified date;
- number of catalogued prizes.

The chest is decorative/atmospheric, not the sole carrier of information.

Desktop: multi-column grid.  
Mobile: deliberate one/two-column composition; never a scaled desktop grid.

## 3. Event treasure page

Opening an event tile leads to a dedicated treasure view for that event.

The event view contains:

1. breadcrumb back to Tesori;
2. event title;
3. League / Tappa context when applicable;
4. date and place from the canonical event source;
5. count of catalogued prizes;
6. contextual filters by prize family/type;
7. photographic prize gallery;
8. link back to the related Adunanza;
9. link to the related Cronaca when one exists.

Event facts must come from the existing event source by `event_id`; they must not be duplicated inside the Tesori dataset.

## 4. Prize card

Each prize card prioritises the image and shows only essential information:

- prize name;
- prize family;
- concise relevant attributes;
- prize position / role when known;
- lifecycle state.

Selecting the card opens a lightbox/modal containing the complete available metadata.

The modal must be keyboard operable, focus-contained while open, closable with Escape, and return focus to the triggering card.

## 5. Search and filtering

The Tesori landing page provides a global search over:

- event title;
- prize name;
- card name;
- artist;
- expansion;
- prize family.

Primary filters:

- Tipo di premio;
- Espansione;
- Rarità;
- Foil / Non-Foil;
- Firma.

Filters are contextual. Irrelevant filters must be hidden or disabled based on the selected prize family. Example: rarity/signature filters do not apply to a sealed Box.

An **Azzera filtri** action must restore the complete archive.

Search/filter state may later be represented in the URL, but this is an implementation choice and not required by v1 unless needed for deep-linking.

## 6. Prize taxonomy

### 6.1 Prize family

Canonical initial values:

- `artist_proof` — Artist Proof
- `card` — Carta
- `champion_card` — Carta Champion
- `limited_print` — Stampa a serie limitata
- `box` — Box
- `precon` — Precon
- `booster` — Bustina

Future families require explicit addition to the taxonomy rather than free-text variants.

### 6.2 Champion type

Only for `champion_card`:

- `official` — Official
- `altered` — Altered

Champion is a special prize/card type, not a rarity.

### 6.3 Finish

For cards where applicable:

- `foil`
- `non_foil`

### 6.4 Signature state

- `unsigned`
- `signed`

When signed, signature style may be:

- `normal`
- `shadow`

Optional searchable metadata:

- signature colour;
- signing artist.

### 6.5 Card rarity

When applicable:

- `unique`
- `elite`
- `exceptional`
- `ordinary`

### 6.6 Expansion

Initial controlled values:

- Alpha
- Beta
- Arthurian Legends
- Gothic

The model must allow future Sorcery expansions without schema redesign.

Expansion is stored independently from prize family, so it can apply to cards, boxes, precons and boosters.

## 7. Prize lifecycle

Every prize/event association must distinguish:

- `announced` — publicly announced as a planned prize;
- `confirmed` — confirmed in the final prize pool;
- `awarded` — actually awarded after the event.

If a prize is withdrawn, replaced or moved to another event, the record must not silently remain `awarded`. Implementation may use an additional `withdrawn` / `reassigned` state when real cases require it.

A planned prize and an actually awarded prize are not equivalent.

## 8. Data ownership

Create a dedicated public Tesori dataset rather than embedding full prize objects in `events.json`.

Recommended path:

`data/treasures.json`

Each prize receives a stable ID:

`TRE-0001`, `TRE-0002`, ...

The event relationship is made through the existing stable `event_id`.

Do not duplicate event title/date/venue as authoritative data in `treasures.json`.

## 9. Recommended v1 record

Example structure:

```json
{
  "treasure_id": "TRE-0001",
  "event_id": "bog-2026-duello-02",
  "name": "Frost Nova",
  "family": "card",
  "expansion": "Beta",
  "rarity": "unique",
  "finish": "foil",
  "signature": {
    "status": "signed",
    "style": "shadow",
    "colour": "Gold",
    "artist": "Francesca Baerald"
  },
  "champion_type": null,
  "limited_print": null,
  "prize_position": "Premio speciale",
  "state": "awarded",
  "image": "assets/content/treasures/tre-0001.webp",
  "notes": null
}
```

Fields not applicable to a prize family remain null/absent rather than receiving invented defaults.

## 10. Limited prints

For `limited_print`, support:

- artist;
- title;
- signed / unsigned;
- copy number when known;
- total edition size when known.

Do not infer edition number or edition size.

## 11. Artist Proofs

For `artist_proof`, support:

- artist;
- related card / subject;
- expansion when relevant;
- AP variant notes;
- sketch / painted-back metadata when verified.

Do not impose normal card rarity/finish rules when they do not accurately describe the AP.

## 12. Sealed products

For `box`, `precon` and `booster`, primary attributes are:

- expansion;
- quantity;
- variant/edition when verified.

Rarity, foil and signature fields are normally not applicable.

## 13. Images

Prize photography is a first-class part of Tesori.

Production rules:

- use optimised WebP by default;
- generate thumbnails for grids;
- lazy-load off-screen images;
- load the larger derivative only for the event detail/lightbox;
- record provenance/rights for third-party imagery;
- do not use retailer/social images without an approved basis;
- meaningful prize photos receive useful alt text.

The archive must remain usable when an image is unavailable: use a deliberate placeholder plus textual prize identity, never a broken image.

## 14. Visual direction

Approved visual direction:

- dark fantasy / old-school fantasy artefact;
- deep blue / near-black foundation;
- bronze and antique-gold framing;
- treasure chest as the event-level visual metaphor;
- restrained warm glow on hover;
- avoid videogame-style loot UI, neon or excessive animation.

The mockup approved by the Product Owner on 2026-10-10 is a design-direction reference, not a pixel-perfect production baseline.

## 15. Accessibility and responsive rules

- all event tiles are semantic links;
- all important text remains HTML;
- keyboard navigation and visible focus are mandatory;
- primary/repeated controls target at least 44×44 CSS px;
- hover is enhancement only;
- modal/lightbox must be fully keyboard operable;
- no page-level horizontal scrolling;
- filters collapse/recompose on mobile rather than shrinking;
- images cannot be the only method of identifying a prize or event.

## 16. Relationships with the rest of ICA

Tesori should integrate bidirectionally:

- Adunanza → “Scopri i Tesori” when the event has published prize records;
- Tesori event → related Adunanza;
- Tesori event → related Cronaca when available;
- League/Tappa context is derived from the event model rather than duplicated.

A future artist exploration view is allowed but is not part of v1.

## 17. Explicitly out of scope for v1

- marketplace, sales or buying;
- price/value tracking;
- public user submissions;
- prize-owner/player identity unless independently verified and explicitly approved;
- global collection inventory unrelated to ICA events;
- automatic recognition of cards from images;
- statistics dashboards beyond simple archive counts;
- artist pages.

## 18. Main implementation risks and controls

1. **Event/prize duplication** — use `event_id` relationship only.
2. **Announced vs awarded confusion** — enforce lifecycle state.
3. **Taxonomy drift** — controlled enums for family/finish/signature/rarity.
4. **Image weight** — thumbnail/full derivative strategy + lazy loading.
5. **Unusable identical chest tiles** — event identity/date/count remain visible HTML.
6. **Filter overload** — contextual filters.
7. **Mobile density** — responsive recomposition, not desktop scaling.
8. **Rights/provenance** — asset governance before publication.
9. **Reassigned prizes** — lifecycle must support movement without falsifying history.
10. **Incomplete metadata** — null/unknown is preferable to invented data.

## 19. Implementation sequence

Recommended implementation order:

1. define and validate `data/treasures.json` schema;
2. create first verified sample dataset from one real event;
3. implement Tesori landing search/filter/grid;
4. implement event treasure detail/gallery;
5. implement prize lightbox;
6. connect Adunanza ↔ Tesori ↔ Cronaca;
7. responsive/accessibility QA;
8. asset optimisation/provenance QA;
9. Product Owner visual review;
10. only then request live publication.

No prize data should be invented merely to populate the first visual implementation.
