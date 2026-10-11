# VR-0130 — Sorcery Event Results UI V1

**Primary QA Profile:** QAP-PAG  
**Secondary profiles:** QAP-CODE, QAP-DAT  
**Lifecycle claim:** IMPLEMENTED; verification evidence passed for the tested branch state.  
**Release readiness:** NOT_READY — beta implementation; Product Owner visual approval remains separate.

## Scope

Adds a detailed completed-event results page under `/beta/cronache/evento/`, a read-only Sorcery snapshot overlay for completed Cronache, and a Cronache link to detailed results.

Tested branch head: `cf75072534ae05ea57a19687f8647b0dabe2480a`.

## Data behaviour and source integrity

- `data/events.json` remains unchanged and remains the ICA event record.
- Normalized Sorcery snapshots are stored separately under `data/external/sorcery/events/<id>.json`.
- `data/external/sorcery/events/index.json` explicitly registers snapshots available to public beta rendering, preventing missing-snapshot requests.
- Attendance uses `participation_status: played`.
- `registered_no_show` records remain available in source/aggregate metrics but are excluded from participant standings.
- Detailed standings expose final position, Avatar, W-D-L, points, OMW and CMP.
- Raw Sorcery deck board values remain unchanged in the stored snapshot.
- Public deck display derives ICA Sorcery presentation without mutating source data: `Avatar => Avatar`, `Main + Site => Atlas`, `Main + non-Site => Spellbook`; `Collection` remains explicitly labelled with the Sorcery source term.
- The beta site never fetches `sorcerytcg.com` at visitor runtime; it reads the repository snapshot only.

## BOG Stage II evidence

Source event: `cmua2gkxc00090agm7qvfrh45`  
ICA event: `bog-2026-duello-02`

The live importer successfully ran from GitHub Actions and installed the normalized snapshot on the branch.

Verified source/result state:

- registrations: **24**;
- Sorcery standings entries: **24**;
- played participants: **23**;
- no-show registrations: **1** — Alberto I, zero rounds;
- source deck snapshots: **24 available / 0 missing / 0 error**;
- played participant deck actions rendered: **23/23**;
- winner: Michele S;
- ICA ranks 1–23 names/points matched the Sorcery source during importer comparison.

## Automated QA evidence

Applicable families: GEN + PAG + TEC + DAT + A11Y + VIS.

On tested head `cf75072534ae05ea57a19687f8647b0dabe2480a` / equivalent runtime content:

- **ICA baseline QA** — PASS;
- **Sorcery event importer QA** — PASS;
- **Sprint 1 league dataset core** — PASS;
- latest prior equivalent-runtime **Shared banner consistency QA** — PASS;
- latest prior equivalent-runtime **Adunanze visual QA** — PASS;
- latest prior equivalent-runtime **LCS-02 runtime QA** — PASS;
- **Cronache visual QA run 149 capture step** — PASS.

Cronache visual/runtime checks cover the detail page at **1440 / 768 / 390 px** and verify:

- 23 played standings rows;
- 24 online registrations;
- 1 no-show;
- 23 played-player deck buttons;
- Avatar / Atlas / Spellbook / Collection sections;
- no page/dialog horizontal overflow;
- no browser console errors;
- deck dialog opens from keyboard, receives focus, and closes with Escape.

The same visual workflow also continues to exercise the existing Cronache archive view.

## Defects found and resolved during the work block

1. Missing snapshots for other completed events initially generated browser 404 console errors. Resolved with the explicit snapshot manifest.
2. An initial Adunanze overlay delayed its critical render path and created performance risk. The Adunanze runtime change was removed; `beta/adunanze/nazionale/main.js` is not part of the final PR diff.
3. One visual-QA assertion combined label/value text too rigidly. The assertion was corrected; this was a test defect, not a production UI defect.

## Residual risk

- Sorcery tRPC endpoints remain undocumented and can drift or disappear; this affects future imports, not rendering of already captured snapshots.
- Snapshot refresh/publication remains controlled rather than an unattended write into canonical ICA data.
- This beta UI is not automatically canonical, APPROVED or PRODUCTION_READY.
- No Critical or High defect is known in this PR scope.

No canonical ICA event data is automatically overwritten by this change.
