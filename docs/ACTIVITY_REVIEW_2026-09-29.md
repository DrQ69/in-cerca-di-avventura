# Activity Review — 2026-09-15 to 2026-09-29

**Purpose:** factual review of repository work completed during the last two weeks, with alignment checks against current governance and tracking documents.

**Review date:** 2026-09-29  
**Scope:** commits on `main`, current beta pages, shared data, assets, QA workflows and operational documentation.

## 1. Executive summary

The repository advanced substantially during the review window. The main workstreams were:

- Canonical shell and governance foundation;
- Home Beta rebuild and shared navigation;
- Cronache implementation, visual refinement and rendered QA;
- Adunanze portal/National consolidation, responsive refinement and performance verification;
- shared event source;
- Avventurieri directory, nickname mapping, player statistics and portrait support;
- Blaze of Glory schedule, standings and event results;
- Alleanze pilot map and its asset/visual QA pipeline.

The implementation progressed faster than the operational documentation. This created documentation drift, incomplete asset registration and gaps between VERIFIED scopes and later changes.

## 2. Verified repository facts

### Governance / canonical foundation
- `docs/ICA_CANONICAL_SPEC.md`, specialist specs, M7–M12 governance and QA infrastructure are present.
- Canonical shell fixture and runtime verification exist.
- `qa/visual-baselines.json` remains intentionally empty.
- `qa/technical-baseline.json` has no canonical public pages registered.

### Cronache
- Current page: `beta/cronache/`.
- Current event source: `data/events.json`.
- Product rule remains: Cronache shows concluded events.
- Rendered visual QA and automated regression workflow exist.
- The older task register still contains references to superseded files and pre-consolidation architecture.

### Adunanze
- `beta/adunanze/` still contains the two-gate portal implementation.
- Current beta navigation routes directly to `beta/adunanze/nazionale/`.
- National events and Cronache share `data/events.json`.
- VR-0008, VR-0009 and VR-0010 document consolidation, mobile refinement and performance verification as of 2026-09-21.
- Later content/UI changes after those records are not covered by a newer Verification Record.

### Avventurieri
- `beta/avventurieri/` is implemented.
- `data/players.json` contains the current nickname registry and event display-name mapping.
- `data/league-standings.json` contains the current Blaze of Glory standings snapshot.
- A visual-QA workflow exists.
- No dedicated Verification Record is present under `qa/verification/`.

### Alleanze
- `beta/alleanze/`, `data/alliances.json` and `assets/alleanze/` are implemented.
- The pilot currently contains Il Regno di Cremos, Team Void and Ordinary Mortals.
- All pilot community records use Bronze prestige.
- A visual-QA workflow exists.
- The map/asset mismatch reported on 2026-09-29 required corrective commits after initial publication.
- No dedicated Verification Record is present under `qa/verification/`.

### Home Beta
- `beta/` is now data-driven for events/standings/content.
- Shared navigation is implemented across active beta pages.
- A visual-QA workflow exists.
- The beta navigation is not the canonical navigation defined by the authoritative specification.

## 3. Documentation alignment findings

| Document / register | Current alignment | Finding |
|---|---|---|
| `README.md` | corrected in this review | Previous version still described a single-page root implementation and omitted the beta architecture. |
| `docs/PROJECT_CONTEXT.md` | corrected in this review | Previous state stopped at the 2026-09-21 Adunanze consolidation and did not reflect direct National routing, Avventurieri or Alleanze. |
| `docs/PROJECT_INDEX.md` | mostly aligned | Core authority model remains valid; this review adds links to the cross-project risk/review records. |
| `docs/CRONACHE_TASK_REGISTER.md` | partially stale | Contains superseded source-file references and does not fully reflect shared `data/events.json`. |
| `assets/manifest.json` | materially incomplete | Updated through 2026-09-21; missing several later production-candidate assets used by Cronache, Avventurieri and Alleanze. |
| `docs/M7_RISK_REGISTER.md` | valid but narrow | Remains useful for responsive risks but is not a cross-project operational risk register. |
| `qa/verification/` | incomplete for recent work | Ends at VR-0010 while Home/Avventurieri/Alleanze and later Adunanze changes continued afterwards. |
| `qa/visual-baselines.json` | aligned | Empty by design because beta/prototype UI is not yet an approved canonical baseline. |
| `qa/technical-baseline.json` | aligned | Empty canonical page list is still consistent with current beta status. |

## 4. Content alignment findings

### Aligned
- Cronache completed-event rule is preserved by the shared source/rendering architecture.
- National events and Cronache use one shared event source.
- Blaze of Glory standings are separated into `data/league-standings.json`.
- Alliance influence and prestige are separate dimensions in `data/alliances.json`.
- Community Bronze prestige is consistent with the current pilot implementation.

### Requires attention
- `data/players.json` is a publicly reachable static JSON file and contains `real_name` values even though the canonical public identity rule is nickname-only. This is a governance/privacy exposure and should be resolved before production promotion.
- `data/events.json` still has at least one concluded event with an unverified date (`La Giostra`), explicitly marked as such; the model is honest, but the fact remains incomplete.
- Beta navigation terminology diverges from the canonical IA. This is acceptable only while the beta remains explicitly non-canonical.
- The Alleanze merchant category is structurally present but still has no verified placed merchant entries.

## 5. Workflow / QA alignment

The repository governance requires non-trivial work to use branch → QA → PR → squash merge. During the review window some changes, including the final Alleanze repair sequence on 2026-09-29, were committed directly to `main`. This is a process deviation and must not become the normal path.

The latest verified Adunanze record is VR-0010 (2026-09-21). Later changes to:
- National event details,
- popovers,
- direct routing,
- shared navigation,
- Avventurieri,
- Home,
- Alleanze,

need either new Verification Records or an explicit decision that they remain unverified beta work.

## 6. Recommended next control actions

1. **Close documentation drift** — keep README, Project Context, task registers and asset manifest updated in the same PR as major feature changes.
2. **Create verification records for current beta slices** — Home, Avventurieri, Alleanze and post-VR-0010 Adunanze.
3. **Resolve public player data exposure** — remove real-name fields from public static data or redesign the mapping so only nickname-based public data is shipped.
4. **Complete asset registration** — register all active Cronache, Avventurieri and Alleanze assets with provenance/status.
5. **Keep beta/canonical distinction explicit** — do not add canonical markers or M11 approved baselines until the Product Owner deliberately promotes a page.
6. **Restore workflow discipline** — no direct non-trivial writes to `main`; use the documented branch/PR flow.
7. **Consolidate Cronache CSS after visual approval** — the task register already identifies layered CSS consolidation as open technical debt.
8. **Re-run cross-page shared-shell QA after navigation changes** — shared shell changes affect Home, Cronache, Adunanze, Avventurieri and Alleanze together.

## 7. Review outcome

The project is **functionally ahead of its tracking layer**. The most important immediate risks are governance/documentation drift, public-data exposure, incomplete asset governance and incomplete verification coverage. None of these requires discarding current work; they require controlled consolidation before any claim of canonical production readiness.
