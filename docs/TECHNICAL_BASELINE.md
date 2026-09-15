# ICA Technical Baseline

**Document ID:** ICA-TECH-001  
**Status:** SPECIFIED  
**Version:** 1.0  
**Milestone:** M12 — Technical Baseline  
**Authority:** subordinate to `docs/ICA_CANONICAL_SPEC.md`, M7/M7.1, M8/M8.1, M9/M9.1, `docs/GITHUB_WORKFLOW.md` and `docs/VISUAL_REGRESSION.md`

## 1. Purpose

M12 defines the minimum measurable technical quality required for canonical ICA pages without introducing a framework, build system or heavy testing platform.

It closes the foundation phase by making accessibility, performance and SEO expectations explicit and repeatable.

M12 does not make the current legacy homepage canonical. Production enforcement begins progressively when canonical pages are registered in `qa/technical-baseline.json`.

## 2. Operating principle

Use the lightest check that can reliably protect quality.

- deterministic source checks run automatically in CI;
- browser/runtime metrics are hybrid evidence;
- usability and semantic judgement remain manual where automation cannot prove correctness;
- no metric may be improved by hiding required content, removing accessibility or weakening ICA identity.

## 3. Canonical page registry

Machine-readable configuration:

`qa/technical-baseline.json`

Only pages listed in `canonical_pages` are subject to the blocking M12 static page checks.

The registry may remain empty while the public site is still the legacy/prototype implementation. A canonical page must be added when it becomes a real production candidate; omission must not be used to bypass QA.

Each registered page records:

- repository HTML path;
- canonical public URL;
- page/object ID;
- lifecycle/readiness context where useful.

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

For representative canonical public pages measured in a production-like mobile profile, targets are:

- **LCP ≤ 2.5 s**;
- **CLS ≤ 0.10**;
- **INP ≤ 200 ms** when interaction data is meaningful;
- Lighthouse **Performance ≥ 90** as the normal production target.

A single synthetic run is evidence, not truth. Record environment/tool version and investigate material variance.

Static implementation expectations:

- likely LCP/hero imagery is not incorrectly lazy-loaded;
- below-the-fold non-critical imagery may lazy-load;
- image dimensions or aspect-ratio reservations prevent avoidable layout shift;
- responsive image sources avoid clearly wasteful desktop downloads on mobile;
- no unnecessary render-blocking scripts or large dependencies are introduced;
- M6 asset budgets remain applicable.

A canonical page below a target requires a documented defect, explanation and remediation/accepted exception before `PRODUCTION_READY`.

## 6. SEO and sharing baseline

Every indexable canonical public page must provide:

- valid HTML document structure and `lang` appropriate to the page, normally Italian;
- UTF-8 charset and responsive viewport metadata;
- one useful page `<title>`;
- one useful meta description;
- exactly one primary `<h1>`;
- coherent heading hierarchy;
- absolute HTTPS canonical URL via `<link rel="canonical">`;
- Open Graph title, description, type, URL and image for shareable pages;
- no broken local asset/script/stylesheet references;
- meaningful link text for navigation/actions where practical.

When the canonical multi-page site is established, `robots.txt` and `sitemap.xml` become release-level requirements for indexable production routes. They are not required merely to preserve the current legacy prototype.

## 7. Static CI checks

`scripts/technical_baseline.py` validates the registry and each registered canonical page using Python standard library only.

Blocking static checks include:

- registered file exists;
- page is HTML and parseable enough for required metadata extraction;
- `lang`, charset and viewport exist;
- non-empty title and meta description exist;
- exactly one `<h1>` exists;
- canonical link exists, uses HTTPS and matches the registry URL;
- required Open Graph metadata exists;
- every `<img>` has an `alt` attribute;
- local stylesheet/script/image references resolve.

These source checks complement, but do not replace, browser accessibility/performance/runtime tests.

## 8. Runtime/browser checks

For a page to claim canonical `PRODUCTION_READY`, applicable verification must also cover:

- no new browser console errors in tested flows;
- keyboard/focus behaviour;
- responsive M7.1 checks;
- accessibility checks from M9/M12;
- performance metrics from Section 5;
- M11 visual-regression comparison when approved baselines exist.

Record evidence in the Verification Record and `qa/evidence/reports/` or other M9-approved location.

## 9. Threshold interpretation

Use thresholds as quality gates, not optimisation theatre.

- Small measurement noise does not justify redesign by itself.
- Repeated or material failures require a defect.
- Critical/High accessibility or functional failures block production regardless of Lighthouse score.
- A high Lighthouse score does not compensate for broken semantics, keyboard use, facts or visual hierarchy.
- Product Owner-approved exceptions follow M8/M8.1 and `EXCEPTION_REGISTER.md`.

## 10. Relationship to M9

M12 makes the interim `QA-A11Y-*` and `QA-PERF-*` expectations measurable where possible and adds the SEO baseline needed for production pages.

It does not weaken M9. If M9 and M12 both apply, satisfy both.

Primary profiles remain defined by M9.1; M12 is an additional technical evidence source for `QAP-CMP-I`, `QAP-PAG`, `QAP-CODE` and `QAP-REL` when relevant.

## 11. Relationship to M10 and M11

- M10 supplies branch/PR/CI mechanics.
- M11 protects approved visual state.
- M12 protects measurable technical state.

The existing `ICA baseline QA` workflow runs both structural QA and M12 deterministic checks without requiring a package manager.

Browser screenshot tooling, Lighthouse or accessibility scanners may be added later only when they reduce real manual effort and remain proportionate to the static architecture.

## 12. Legacy transition rule

The current legacy/prototype `index.html` is not automatically entered into `canonical_pages` simply because it is public.

As Canonical Implementation v1 replaces legacy pages/components, register each real canonical page and make M12 checks blocking for it.

This prevents two opposite errors:

1. freezing legacy shortcomings as standards;
2. postponing technical quality until after the new site is already built.

## 13. Release requirement

A release represented as `PRODUCTION_READY` must have, for its canonical public scope:

- registered pages passing deterministic M12 checks;
- applicable accessibility checks passing;
- applicable performance targets measured with current evidence;
- no unresolved Critical/High defects;
- SEO/share metadata complete for indexable/shareable pages;
- any deviations linked to accepted exceptions.

## 14. Completion model

M12 **system established** is complete when:

- this specification exists;
- the technical registry exists;
- deterministic static checks run in CI;
- task routing/agent instructions include M12;
- a Verification Record proves the system implementation.

Actual canonical-page compliance begins with Canonical Implementation v1 and must not be claimed while `canonical_pages` is empty.

## 15. Success criterion

The Product Owner should not need to remember SEO tags, Core Web Vitals, keyboard rules or CI commands.

When a canonical page is created or changed, agents should route it through the relevant M7/M9/M11/M12 checks, surface only material defects or decisions, and preserve evidence automatically.