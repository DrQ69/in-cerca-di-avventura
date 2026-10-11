# VR-0129 — Sorcery Event Importer V1

**Primary QA Profile:** QAP-CODE  
**Secondary family:** DAT  
**Lifecycle claim:** IMPLEMENTED; verification candidate pending repository CI/live external-network evidence.  
**Release readiness:** NOT_READY / non-runtime tooling only.

## Scope

Read-only importer for public Sorcery event data using isolated tRPC adapter, normalized external snapshots, validation, read-only ICA comparison, offline fixtures and manual GitHub Actions workflow.

## Applicable checks

- QA-GEN-001..010
- QA-TEC-001, 002, 003, 013, 014
- QA-DAT-003, 004, 006, 007, 008, 011, 014, 015

UI/browser checks are N/A: this PR adds repository tooling/data import only and does not change rendered pages or production runtime behaviour.

## Evidence

Automated offline test command:

`node --test tests/sorcery_event_importer.test.mjs`

Expected coverage:

- captured tRPC JSONL response-shape parsing;
- privacy minimization;
- exact preservation of `Avatar` / `Main` / `Collection` board values;
- registrations vs standings separation;
- read-only comparison reporting;
- fail-closed schema drift handling.

## Source evidence

Captured BOG Stage II browser responses established:

- event ID `cmua2gkxc00090agm7qvfrh45`;
- event status `Complete`;
- 24 registrations vs 23 ranked participants (one `DecklistSubmitted` registration with no rounds);
- `event.playerSnapshot` exposes event snapshot cards with `Avatar`, `Main`, `Collection` boards;
- calls contained no cookie or Authorization header.

The complete live import is intentionally not represented as verified until the branch workflow (or an equivalent Node environment with network access) successfully reaches `sorcerytcg.com`.

## Residual risk

High integration risk remains from undocumented endpoint/schema drift; mitigated by adapter isolation, fixture regression tests, validation and fail-closed behaviour. GitHub runner reachability is unknown until manual workflow execution.
