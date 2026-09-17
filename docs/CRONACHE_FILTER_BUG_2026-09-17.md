# Cronache — Filter/search bug analysis (2026-09-17)

## Symptom

Typing `Gothic Draft` or choosing a filter such as `GameLover — Crema` did not reliably reduce the archive to matching event records.

## Root cause

`applyFilters()` compared several select values against lowercase sentinel strings (`tutti`, `tutte`) without normalizing the actual DOM value first. The `Stato` control still supplied `Tutti` with an uppercase `T`, so the default state was interpreted as an active filter for a nonexistent status `tutti`. That could hide every record and made search/filter behavior appear non-functional.

## Fix

All filter values are normalized once before comparison. Sentinel checks therefore work independently of presentation capitalization, while record values remain normalized exact matches. Search continues to use normalized substring matching over the event search index and rendered content.

Expected examples after the fix:
- Search `Gothic Draft` → only records whose indexed content contains `gothic draft`.
- Luogo `GameLover — Crema` → only events with normalized place `gamelover crema`.
- Formato `Gothic Draft` → only events whose normalized format is exactly `gothic draft`.
- Multiple filters combine with logical AND.
