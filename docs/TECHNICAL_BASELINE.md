# ICA Technical Baseline

**Document ID:** ICA-TECH-001  
**Status:** VERIFIED — Product Owner Approval Pending  
**Version:** 1.1  
**Milestone:** M12 — Technical Baseline  
**Authority:** subordinate to `docs/ICA_CANONICAL_SPEC.md`, M7/M7.1, M8/M8.1, M9/M9.1, `docs/GITHUB_WORKFLOW.md` and `docs/VISUAL_REGRESSION.md`

## 1. Purpose

M12 defines the minimum measurable technical quality required for canonical ICA pages without introducing a framework, build system or heavy testing platform.

It closes the foundation phase by making accessibility, performance and SEO expectations explicit and repeatable.

M12 does not make the current legacy homepage canonical. Production enforcement begins progressively when canonical pages become real production candidates.

## 2. Operating principle

Use the lightest check that can reliably protect quality.

- deterministic source checks run automatically in CI;
- browser/runtime metrics are hybrid evidence;
- usability and semantic judgement remain manual where automation cannot prove correctness;
- no metric may be improved by hiding required content, removing accessibility or weakening ICA identity;
- thresholds are quality controls, not score-chasing targets.

## 3. Canonical page registry

Machine-readable configuration:

`qa/technical-baseline.json`

Only pages listed in `canonical_pages` are subject to the blocking M12 page checks, but a real canonical production candidate must not be omitted from the registry.

The registry may remain empty while the public site is still the legacy/prototype implementation.

Each registered page must record:

- `object_id` — stable ICA page/object ID;
- `path` — repository HTML path;
- `canonical_url` — absolute public HTTPS URL;
- `lang` — expected document language, normally `it`;
- `indexable` — whether indexing/SEO requirements apply;
- `shareable` — whether Open Graph requirements apply.

`object_id`, `path` and `canonical_url` must each be unique within the registry.

### Canonical marker guard

When an HTML page becomes a real canonical production candidate, add:

```html
<meta name="ica-status" content="canonical">
```

CI scans repository HTML files for this marker. A marked page that is not present in `qa/technical-baseline.json` is a blocking error.

Do **not** add this marker to legacy/prototype pages merely because they are publicly deployed.

## 4. Accessibility baseline

ICA targets **WCAG 2.2 AA** for canonical production UI.

Blocking expectations include:

- keyboard access to essential controls and interactions;
- visible, unobscured focus;
- logical focus/read order;
- semantic landmarks, headings, labels and native controls where practical;
- informative images have meaningful alternatives; decorative images use empty alternatives or equivalent non-announcement treatment;
- essential meaning is not conveyed by colour alone;
- non-essential motion respects `prefers-reduced-motion`;
- text contrast at least **4.5:1** for normal text and **3:1** for large text;
- non-text UI/component contrast at least **3:1** where WCAG requires it;
- ICA retains the stricter project target of **44×44 CSS px** for primary/repeated touch controls unless an accepted exception exists.

Automated accessibility tooling may support verification, but automated PASS never proves full accessibility by itself.

## 5. Performance baseline

For representative canonical public pages measured in a production-like mobile profile, quality targets are:

- **LCP ≤ 2.5 s**;
- **CLS ≤ 0.10**;
- **INP ≤ 200 ms** when meaningful interaction evidence exists;
- Lighthouse **Performance ≥ 90** as the normal diagnostic target.

Core Web Vitals thresholds are quality requirements. Lighthouse 90 is a diagnostic target, not an isolated pass/fail substitute for the whole technical baseline.

A Lighthouse score below 90 requires investigation and recording when material; it does not automatically become a High defect when Core Web Vitals, accessibility and functional evidence remain healthy and the reason is understood.

Static implementation expectations:

- likely LCP/hero imagery is not incorrectly lazy-loaded;
- below-the-fold non-critical imagery may lazy-load;
- image dimensions or aspect-ratio reservations prevent avoidable layout shift;
- responsive image sources avoid clearly wasteful desktop downloads on mobile;
- no unnecessary render-blocking scripts or large dependencies are introduced;
- M6 asset budgets remain applicable.

A canonical page materially below required Core Web Vitals or with repeated unexplained performance regression requires a defect, remediation or accepted exception before `PRODUCTION_READY`.

## 6. Runtime measurement protocol

When performance evidence is required, use a repeatable protocol rather than an arbitrary one-off result.

Record at minimum:

- tested URL/route;
- tested commit SHA;
- browser/tool and version;
- device/emulation profile;
- network/CPU throttling profile when used;
- cache condition where relevant;
- date/time of measurement;
- individual run results and selected representative result.

For Lighthouse/lab measurements:

- use a production or production-like build/environment;
- use mobile emulation unless the Verification Record documents a justified alternative;
- run **three comparable measurements** when practical;
- use the **median** as the representative value;
- save or reference the report in `qa/evidence/reports/`.

For INP:

- do not invent or force a number when meaningful interaction evidence does not exist;
- use real-user or representative interaction evidence when available;
- record `N/A` with rationale when INP is genuinely not meaningful for the tested page/state.

## 7. SEO and sharing baseline

Every **indexable** canonical public page must provide:

- valid HTML document structure and expected `lang`;
- UTF-8 charset and responsive viewport metadata;
- exactly one useful page `<title>`;
- one useful, non-conflicting meta description;
- exactly one primary `<h1>`;
- coherent heading hierarchy;
- exactly one absolute HTTPS canonical URL matching the registry;
- no broken local asset/script/stylesheet references;
- meaningful link text for navigation/actions where practical.

Every **shareable** canonical page must additionally provide:

- Open Graph title;
- Open Graph description;
- Open Graph type;
- `og:url` matching the canonical URL;
- absolute HTTPS `og:image`.

When the canonical multi-page site is established, `robots.txt` and `sitemap.xml` become release-level requirements for indexable production routes. They are not required merely to preserve the current legacy prototype.

## 8. Static CI checks

`scripts/technical_baseline.py` validates the registry and each registered canonical page using Python standard library only.

Blocking checks include:

- registry schema/document ID are valid;
- all required threshold keys exist and values match M12 v1.1;
- `object_id`, `path` and `canonical_url` are unique;
- marked canonical HTML pages are registered;
- registered file exists and is HTML;
- expected `lang` matches the document;
- charset and viewport metadata exist;
- exactly one non-empty `<title>` exists;
- meta description is present and non-duplicated for indexable pages;
- exactly one `<h1>` exists;
- exactly one canonical link exists for indexable pages and matches the registry URL;
- required Open Graph metadata exists only when `shareable: true`;
- `og:url` matches the canonical URL;
- `og:image` is absolute HTTPS;
- every `<img>` has an `alt` attribute;
- local stylesheet/script/image/icon references resolve.

These source checks complement, but do not replace, browser accessibility/performance/runtime tests.

## 9. Threshold registry contract

`qa/technical-baseline.json` is not a convenient place to relax quality requirements.

For schema version 2, CI requires exactly these baseline values unless M12 itself is deliberately revised through governance:

- `wcag_target`: `2.2-AA`
- `contrast_normal_text_min`: `4.5`
- `contrast_large_text_min`: `3.0`
- `contrast_non_text_ui_min`: `3.0`
- `touch_target_css_px`: `44`
- `lcp_seconds_max`: `2.5`
- `cls_max`: `0.1`
- `inp_milliseconds_max`: `200`
- `lighthouse_performance_min`: `90`

A threshold change without a corresponding approved M12 revision must fail CI.

## 10. Runtime/browser checks

For a page to claim canonical `PRODUCTION_READY`, applicable verification must also cover:

- no new browser console errors in tested flows;
- keyboard/focus behaviour;
- responsive M7.1 checks;
- accessibility checks from M9/M12;
- performance evidence under Section 6;
- M11 visual-regression comparison when approved baselines exist.

Record evidence in the Verification Record and `qa/evidence/reports/` or another M9-approved location.

## 11. Threshold interpretation

Use thresholds as quality gates, not optimisation theatre.

- Small measurement noise does not justify redesign by itself.
- Repeated or material failures require a defect.
- Critical/High accessibility or functional failures block production regardless of Lighthouse score.
- A high Lighthouse score does not compensate for broken semantics, keyboard use, facts or visual hierarchy.
- Product Owner-approved exceptions follow M8/M8.1 and `EXCEPTION_REGISTER.md`.

## 12. Relationship to M9

M12 makes the interim `QA-A11Y-*` and `QA-PERF-*` expectations measurable where possible and adds the SEO baseline needed for production pages.

It does not weaken M9. If M9 and M12 both apply, satisfy both.

Primary profiles remain defined by M9.1; M12 is an additional technical evidence source for `QAP-CMP-I`, `QAP-PAG`, `QAP-CODE` and `QAP-REL` when relevant.

## 13. Relationship to M10 and M11

- M10 supplies branch/PR/CI mechanics.
- M11 protects approved visual state.
- M12 protects measurable technical state.

The existing `ICA baseline QA` workflow runs both structural QA and M12 deterministic checks without requiring a package manager.

Browser screenshot tooling, Lighthouse or accessibility scanners may be added later only when they reduce real manual effort and remain proportionate to the static architecture.

## 14. Legacy transition rule

The current legacy/prototype `index.html` is not automatically entered into `canonical_pages` and must not receive the canonical marker merely because it is public.

As Canonical Implementation v1 replaces legacy pages/components:

1. add the canonical marker only when a page is genuinely a production candidate;
2. register the page in `qa/technical-baseline.json` in the same coherent change;
3. make M12 checks blocking for it.

This prevents both freezing legacy shortcomings and silently bypassing technical QA.

## 15. Release requirement

A release represented as `PRODUCTION_READY` must have, for its canonical public scope:

- every canonical-marked production page registered;
- registered pages passing deterministic M12 checks;
- applicable accessibility checks passing;
- applicable performance targets measured with current evidence;
- no unresolved Critical/High defects;
- SEO/share metadata complete according to `indexable`/`shareable` flags;
- any deviations linked to accepted exceptions.

## 16. Completion model

M12 **system established** is complete when:

- this specification exists;
- the technical registry exists;
- deterministic static checks run in CI;
- task routing/agent instructions include M12;
- a Verification Record proves the system implementation.

Actual canonical-page compliance begins with Canonical Implementation v1 and must not be claimed while `canonical_pages` is empty.

## 17. Success criterion

The Product Owner should not need to remember SEO tags, Core Web Vitals, keyboard rules, registry details or CI commands.

When a canonical page is created or changed, agents should register/mark it coherently, route it through the relevant M7/M9/M11/M12 checks, surface only material defects or decisions, and preserve evidence automatically.
