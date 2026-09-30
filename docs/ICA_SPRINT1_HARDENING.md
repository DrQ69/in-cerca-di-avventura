# Sprint 1 hardening — activation simulation and technical audit log

This branch continues Sprint 1 after PR #109 was merged code-only. It does **not** activate the manifest or modify competitive datasets.

## Synthetic activation E2E
`tests/league-release-network.test.mjs` creates a temporary local HTTP server from synthetic public data, publishes a generated manifest and three immutable files, then exercises the real `readSiteBundle(..., {useManifest:true})` path. It verifies successful coherent loading and hard failure on a tampered file. No real Blaze of Glory data are written.

## Public technical audit log
`scripts/league-release-audit.mjs` defines an allowlisted entry shape for release and rollback traceability. `docs/ICA_RELEASE_AUDIT_LOG.schema.json` is a documentation/template object with an empty `entries` array. It is **not** evidence that any release occurred.

Allowed fields are version IDs, timestamp, commit SHA, previous version, four QA verdicts, action, a non-sensitive authorization reference, and rollback source/target when applicable. Unknown fields are rejected. Never store workbook paths, real names, Excel/private IDs, notes, raw diffs or source document identifiers.

## Remaining release gates
A real activation still requires a new XLSX export in chat, freshness/cache checks, private reconciliation, officiality decisions, private visual preview, desktop/mobile QA, final owner authorization, immutable file upload + manifest activation, and post-release smoke test. Fair Play DEC-09.7 remains unresolved.

## XLSX overwrite boundary hardening
The preview layer now distinguishes between fields that the approved XLSX workflow may propose changing and other existing public fields that must be preserved. For example, nickname/date/venue/format/standings may enter the normal approval path; profile city/avatar/slug and event registration URLs or similar operational fields are blocked if an XLSX-derived candidate attempts to overwrite them. This prevents the workbook workflow from silently expanding beyond DEC-09.4/.21. Human review remains necessary for string contents and all owner gates.

## Private candidate packager
`league-build-private-candidate.mjs` turns an already sanitized candidate into the exact immutable release directory + manifest inside a NEW PRIVATE LOCAL directory outside the repo, marked NOT PUBLISHED. It never performs GitHub or network writes. This makes the future owner review inspect the same files that would later be proposed for publication, while preserving the explicit publication gate.
