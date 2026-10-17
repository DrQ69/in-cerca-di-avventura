# VR-0137 — ICA v1 controlled Sorcery publication

**Primary QA Profile:** QAP-CODE  
**Secondary profiles:** QAP-DAT, QAP-REL  
**Lifecycle claim:** IMPLEMENTED candidate; PR verification pending.  
**Release readiness:** NOT_READY — offline QA and workflow validation pending.

## Product Owner decision — 2026-10-17

Sorcery ingestion for ICA v1 uses a controlled manual workflow:

`FETCH -> NORMALIZE -> VALIDATE -> MATCH -> COMPARE -> TEST -> PR -> QA -> MERGE`

There is no scheduled or continuous polling.

## Publication boundary

The live Sorcery source remains external and read-only.

The controlled workflow has two modes:

- `validate_only` — produces evidence only;
- `prepare_publish_pr` — prepares a dedicated publication branch and Pull Request.

No workflow mode writes directly to `main`.

## Fail-closed gates

A publication PR is not prepared unless:

- the event ID is valid;
- the normalized snapshot passes schema validation;
- the Sorcery event status is `Complete`;
- an existing ICA event can be matched by Sorcery event URL;
- offline importer / overlay / publication-gate tests pass.

Differences against current ICA values are reported for review rather than silently reconciled.

## Data mutation allowed

The controlled publication PR may contain only the normalized external event snapshot and registration in:

- `data/external/sorcery/events/<EVENT_ID>.json`;
- `data/external/sorcery/events/index.json`.

The workflow does not automatically edit `data/events.json`.

## Planned verification

- importer fixtures;
- overlay tests;
- publication gate tests;
- duplicate manifest registration is idempotent;
- missing ICA event fails closed;
- provisional Sorcery event fails closed;
- invalid snapshot fails closed;
- normal ICA baseline.
