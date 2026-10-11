# VR-0129 — Sorcery Event Importer V1

**Primary QA Profile:** QAP-CODE  
**Secondary family:** DAT  
**Lifecycle claim:** IMPLEMENTED; offline automated QA and local live-source validation passed.  
**Release readiness:** NOT_READY / non-runtime tooling only.

## Scope

Read-only importer for public Sorcery event data using isolated tRPC adapter, normalized external snapshots, validation, read-only ICA comparison, offline fixtures and manual GitHub Actions workflow.

## Applicable checks

- QA-GEN-001..010
- QA-TEC-001, 002, 003, 013, 014
- QA-DAT-003, 004, 006, 007, 008, 011, 014, 015

UI/browser checks are N/A: this PR adds repository tooling/data import only and does not change rendered pages or production runtime behaviour.

## Evidence

Current tested head before this record update: `4f4203ae6d7fbd6e865ce6b2d1628c4fbd1ca8cb`.

Automated PR checks on that head:

- `ICA baseline QA` run 526 — **PASS**;
- `Sorcery event importer QA` run 1 — **PASS**.

Offline importer coverage:

- tRPC response-shape parsing;
- privacy minimization;
- exact preservation of `Avatar` / `Main` / `Collection` board values;
- registrations / standings / played-participant separation;
- read-only comparison reporting;
- fail-closed schema drift handling.

A first local execution on macOS exposed invalid reduced fixture encoding: 1/5 passed. This was treated as a real QA defect, the fixtures were corrected, and PR-level importer QA now passes. No production/canonical data had been modified.

## Live BOG Stage II evidence

Command executed locally against the public source:

`node scripts/import_sorcery_event.mjs cmua2gkxc00090agm7qvfrh45 --dry-run --compare`

Observed live source result:

- registrations: **24**;
- Sorcery standings entries: **24**;
- players with at least one recorded round: **23** (derived from the source player/round data);
- decklists: **24 available / 0 missing / 0 error**;
- winner Michele S: **MATCH**;
- ICA ranks 1–23 display names and points: **MATCH**;
- Sorcery additionally lists Alberto I at rank 24, 0 points, with no recorded rounds.

The earlier working assumption “24 registrations / 23 standings entries” was therefore incorrect. The implementation now preserves all three concepts instead of using standings count as attendance.

## Source / privacy evidence

Captured browser requests and the successful live run establish:

- event ID `cmua2gkxc00090agm7qvfrh45`;
- event status `Complete`;
- `event.playerSnapshot` exposes event snapshot cards with `Avatar`, `Main`, `Collection` boards;
- all 24 event registrations returned a deck snapshot in this event;
- calls used no cookie or Authorization header.

Normalized public output excludes Sorcery username, ELO, authentication/user IDs and source deck IDs. No Sorcery user is mapped automatically to an ICA Avventuriero.

## Residual risk

- Sorcery endpoints remain undocumented and may drift or disappear.
- GitHub-hosted live runner reachability is not yet proven; local live access is proven.
- Sorcery `Main`/`Collection` semantics are intentionally not mapped to ICA Atlas/Spellbook.
- The Alberto I source discrepancy remains a data-governance decision; this PR does not alter `data/events.json`.

No Critical/High defect is known in the implemented importer scope.
