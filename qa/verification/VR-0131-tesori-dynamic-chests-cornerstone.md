# VR-0131 — Tesori Dynamic Chests + Cornerstone Rewards

**Primary QA Profile:** QAP-PAG  
**Secondary profiles:** QAP-CODE, QAP-DAT, VIS, A11Y  
**Lifecycle claim:** IMPLEMENTED; Tesori-specific automated and visual verification passed on the tested branch.  
**Release readiness:** READY_FOR_MERGE — Product Owner authorized continuation/merge after visual review on 2026-10-17.

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

## Automated evidence

Tested branch head: `23684307aabb4cb9396f3e99cb4fd8646cfa0746`.

- ICA baseline QA run 552 — **PASS**.
- Sprint 1 league dataset core run 93 — **PASS**.
- LCS-02 runtime QA run 164 — **PASS**.
- Homepage visual QA run 117 — **PASS**.
- Shared banner consistency QA run 171 — **PASS**.
- Cronache visual QA run 157 — **PASS**.
- Tesori visual QA run 6 — **PASS**.

Tesori visual QA verifies:
- archive at 1440 / 768 / 390 px;
- BOG E02 at 23 participants resolves to the 20–39 chest;
- chest image loads successfully;
- Cornerstone does not infer capacity 50 as attendance and shows a pending chest state;
- Cornerstone detail contains 17 catalog entries and the announced special rewards;
- keyboard dialog open/focus/Escape-close behavior;
- no horizontal overflow or browser console errors.

Two repository-wide checks currently fail for reasons outside this Tesori change:
- Adunanze visual QA: `bog-2026-duello-03` is dated 2026-10-14 but still marked `futura` in shared event data; no event-status guess was made in this PR.
- Adunanze performance QA: existing mobile LCP thresholds fail on the Adunanze portal/national pages; this PR does not modify those pages or their assets.

## Previous automated evidence planned

All planned Tesori checks above were executed by Tesori visual QA run 6 and passed.

## Residual risk

- The optimized WebP derivatives are delivery assets; the original supplied PNGs remain the visual source.
- Cornerstone chest tier cannot be selected until a verified participant/registration count is stored for the event.

No canonical participant count has been invented.


## Product Owner acceptance

On 2026-10-17, after the desktop/mobile Tesori and Cornerstone preview screenshots were provided, the Product Owner instructed to resume and proceed. This is recorded as authorization to complete the normal branch → PR → merge workflow for this scope.
