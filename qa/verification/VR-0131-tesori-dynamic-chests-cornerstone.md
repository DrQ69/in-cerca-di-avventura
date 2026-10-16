# VR-0131 — Tesori Dynamic Chests + Cornerstone Rewards

**Primary QA Profile:** QAP-PAG  
**Secondary profiles:** QAP-CODE, QAP-DAT, VIS, A11Y  
**Lifecycle claim:** IMPLEMENTED candidate; automated verification pending PR execution.  
**Release readiness:** NOT_READY — Product Owner visual review required.

## Scope

- Replace the synthetic CSS chest in Tesori with the five Product Owner-supplied chest artworks.
- Select chest artwork deterministically from the event participant count.
- Expand the Cornerstone Championship 2026 Tesori archive to the latest Product Owner prize grid.
- Preserve event capacity separately from participant count.

## Product Owner chest rule

| Actual participants | Chest |
| ---: | --- |
| 10–19 | scrigno-10-19-giocatori.webp |
| 20–39 | scrigno-20-39-giocatori.webp |
| 40–59 | scrigno-40-59-giocatori.webp |
| 60–79 | scrigno-60-79-giocatori.webp |
| 80–100 | scrigno-80-100-giocatori.webp |

The implementation does **not** use `capacity` as a participant-count fallback.

For BOG Stage II, `player_count: 23` must resolve to the 20–39 chest.

The Cornerstone event currently has no verified `player_count`; therefore the page intentionally shows “Partecipanti da aggiornare” instead of inferring 50 participants from its capacity.

## Cornerstone rewards

The Tesori archive contains 17 catalog entries for `cremos-cornerstone-2026`, covering:

- 1° — Crown of the Victor Alpha + Swap alternate art FOIL;
- 2° — Den of Evil alternate art FOIL;
- 3° — Ed Beard art print;
- 4° — Bodach Bogeyman;
- 5° — Frost Nova Beta FOIL signed Francesca Baerald + Belmotte Longbowmen Alpha FOIL signed Andrea Modesti;
- 6° — Dome of Osiris Beta First Wave FOIL signed Vincent Pompetti;
- 7° — Royal Bodyguard Alpha signed Danforth + Imperial Road Alpha signed Vincent Pompetti;
- 8° — Teleport Alpha signed Francesca Baerald + Verdant Knight Arthurian Legends FOIL signed Andrea Modesti;
- Community Champion — Ed Beard art print;
- special prize — The Returned King Gothic Unique Non-Foil to the best-placing Frost Mage or Lavamancer player;
- participation — Den of Evil alternate art Non-Foil for every participant;
- raffle — 25 Beta boosters;
- raffle — Cornerstone Beta FOIL signed by all participants and organizers.

The event prize note states that the grid may vary with actual registrations.

## Asset handling

The source PNGs were supplied directly by the Product Owner on 2026-10-16. The repository stores optimized native WebP derivatives of those exact artworks for responsive web delivery. The source artwork identity and Product Owner usage rule are preserved; no synthetic replacement chest is used.

## Automated evidence planned

- `node --test tests/treasure_chests.test.mjs`
- Tesori visual QA at 1440 / 768 / 390 px for the archive;
- E02 detail QA at 1440 / 390;
- Cornerstone detail QA at 1440 / 390;
- verify 23-player E02 resolves to 20–39 chest and image loads;
- verify Cornerstone does not infer capacity as attendance;
- verify 17 Cornerstone catalog entries and key special rewards;
- keyboard dialog open/focus/Escape close;
- horizontal overflow and browser console error checks.

## Residual risk

- The optimized WebP derivatives are delivery assets; the original supplied PNGs remain the visual source.
- Cornerstone chest tier cannot be selected until a verified participant/registration count is stored for the event.

No canonical participant count has been invented.
