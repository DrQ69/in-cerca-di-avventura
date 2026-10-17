# VR-0133 — BOG Stage III results and league standings

**Primary QA Profile:** QAP-DAT  
**Secondary profiles:** QAP-PAG, QAP-CODE  
**Lifecycle claim:** IMPLEMENTED candidate; PR verification pending.  
**Release readiness:** NOT_READY — automated PR QA and Product Owner review pending.

## Source material

Product Owner supplied on 2026-10-17:

- official Sorcery event URL: `https://sorcerytcg.com/events/cmushy4be000806qo24af6nv1`;
- workbook `BLAZE OF GLORY-2.xlsx`, including:
  - `TAPPA 3` official event standings;
  - Stage III BOG points;
  - `CLASSIFICA GENERALE` after three stages;
  - `REGISTRO` / `EVENTI` supporting context.

The public Sorcery importer independently captured the normalized event snapshot on 2026-10-17.

## Event facts

ICA event: `bog-2026-duello-03`  
Sorcery event: `cmushy4be000806qo24af6nv1`

Verified:

- title: CREMOS - Chaos Draft - BOG#3 / ICA Chaos Draft;
- status: Complete;
- registrations: **15**;
- played participants: **12**;
- zero-round registered no-shows: **3**;
- no-shows: Matteo Z, Tommaso M, Matteo M;
- winner: **Andrea P**;
- format: Chaos Draft / 3 Swiss rounds;
- Sorcery `track_decks=false`, therefore deck snapshots are not available and public detail correctly shows 0/12 decklists.

The existing ICA rule remains authoritative: registrations with zero recorded rounds are `registered_no_show` and are not counted as actual participants.

## Official played standings

1. Andrea P — 9 — 3-0-0 — OMW 44.44 — CMP 18
2. Michele S — 9 — 3-0-0 — OMW 44.44 — CMP 18
3. Mohamed A — 6 — 2-1-0 — OMW 66.66 — CMP 15
4. Rocco G — 6 — 2-1-0 — OMW 66.66 — CMP 12
5. Simone C — 6 — 2-1-0 — OMW 44.44 — CMP 9
6. Andrea R — 6 — 2-1-0 — OMW 44.44 — CMP 9
7. Alessandro Q — 3 — 1-2-0 — OMW 66.66 — CMP 6
8. Niccolò C — 3 — 1-2-0 — OMW 66.66 — CMP 3
9. Jonni R — 3 — 1-2-0 — OMW 55.55 — CMP 9
10. Alessandro S — 0 — 0-2-1 — OMW 66.66 — CMP 0
11. Daniele Carlo Giuseppe S — 0 — 0-3-0 — OMW 55.55 — CMP 0
12. Alessandro U — 0 — 0-2-1 — OMW 44.44 — CMP 0

Workbook and normalized Sorcery snapshot agree on the played standings above.

## Stage III league points

The workbook awards Stage III league totals as follows:

- Andrea P 25;
- Michele S 25;
- Mohamed A 22;
- Rocco G 22;
- Simone C 20;
- Andrea R 20;
- Alessandro Q 18;
- Niccolò C 18;
- Jonni R 17;
- Alessandro S 16;
- Daniele Carlo Giuseppe S 15;
- Alessandro U 14.

These values are preserved on the E03 standings as `league_stage_points`; the workbook's separate `Punti BOG` value is preserved as `league_bog_points`.

## General league standings

`data/league-standings.json` is updated to `after_stage: 3` from the workbook's `CLASSIFICA GENERALE`.

Top ten after Stage III:

1. Mikininja — 70
2. AchaMoh — 57
3. Nick the Wizard — 57
4. Curjo — 49
5. TERRONATOR — 49
6. ROCCODDIO — 40
7. Sazerac — 36
8. Daniele Carlo Giuseppe S — 35
9. Sir Bes — 34
10. Andrea P — 34

Fair Play is preserved as +3 GP per recorded Fair Play win; Michele S / Mikininja and Mohamed A / AchaMoh each have one recorded Fair Play win in the supplied workbook.

## Public player IDs

The current standings validator requires every league-standing entry to resolve to a public player ID. Ten nickname-only public records are therefore added for league participants not already present in `data/players.json`. No real names, email, Play Network IDs or other private workbook fields are published.

## Visual / functional checks planned

- ICA structural baseline;
- league current-data validation;
- Avventurieri visual QA, including updated player count and league points;
- Cronache archive visual QA;
- E03 detailed Cronache QA at 1440 / 768 / 390 px;
- E03 12 participants / 15 registrations / 3 no-shows;
- E03 winner Andrea P;
- E03 no deck buttons because deck tracking was disabled;
- no horizontal overflow / browser console errors.

No workbook file is committed to the public repository.
