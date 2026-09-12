# Content Sources — In Cerca di Avventura

## Purpose

This document governs factual integrity for **In Cerca di Avventura**.

The site contains a mixture of confirmed information, historical content, work-in-progress concepts and prototype copy. Humans and AI agents must not treat all visible text as equally authoritative.

The goal is simple: **nothing factual should be published because an agent guessed, inferred or copied an unverified placeholder.**

## Source hierarchy

Use this hierarchy when deciding whether factual content can be published.

### Tier 1 — Owner-confirmed source

Highest authority.

Examples:

- information explicitly confirmed by the project owner;
- documents/data supplied by the project owner as authoritative;
- corrections explicitly approved by the project owner.

Use directly, preserving meaning.

### Tier 2 — Official primary source

Authoritative external or first-party material relevant to the fact being published.

Examples may include:

- official event registration information;
- official venue/store information;
- official tournament/result exports;
- official partner/community pages;
- first-party rules or announcements.

Record or link the source when practical.

### Tier 3 — Repository documentation marked as confirmed

Project documentation may be used when it clearly identifies information as established rather than conceptual/provisional.

Important: the existence of text in the repository does not automatically make it verified.

### Tier 4 — Existing live/prototype site copy

Treat as **provisional unless independently confirmed**.

This is especially important for current event cards, dates, prices, schedules, results, partner names and other data introduced during prototyping.

Do not cite the live site itself as proof that the underlying fact is correct.

### Tier 5 — Agent-generated or inferred content

Never a factual source.

AI-generated summaries, proposed copy, guessed metadata or inferred relationships may help draft content, but must not be used as evidence for publication.

## Verification states

Structured content should be thought of as one of:

- **CONFIRMED** — supported by an accepted source;
- **PROVISIONAL** — supplied for design/testing but not publication as fact;
- **UNKNOWN** — not yet known;
- **DISPUTED** — conflicting sources require owner review;
- **ARCHIVED** — historical information retained with provenance.

Agents must never silently convert `PROVISIONAL` or `UNKNOWN` into `CONFIRMED`.

## Content categories requiring verification

Always verify before publishing or updating:

- event names;
- dates and times;
- venues and addresses;
- entry fees;
- tournament formats;
- number of rounds;
- registration links;
- prize structures;
- standings and results;
- player records/statistics;
- partner/alliance names and relationships;
- external links;
- biographies/profiles;
- quotes/testimonials;
- rules/scoring systems;
- season/finale information;
- commercial claims.

## Event content template

When an event becomes structured content, record as many of these fields as relevant:

```text
Event ID:
Title:
Series/League:
Date:
Start time:
Check-in time:
Venue:
City:
Format:
Rounds:
Entry fee:
Registration URL:
Status:
Source:
Verified by:
Last verified:
Notes:
```

Unknown fields should remain unknown rather than being guessed.

## Results content template

```text
Event ID:
Results status:
Source:
Published date:
Placement:
Player/Avventuriero ID:
Record/score:
Achievement/prize:
Verification notes:
```

A player result should eventually reference a persistent Avventuriero identity rather than duplicate biographical information in every event.

## Avventurieri content

For player profiles, distinguish clearly between:

- public identity/nickname;
- explicitly supplied profile information;
- competitive statistics derived from verified results;
- narrative/lore presentation;
- private or unpublished information.

Fantasy presentation may embellish tone, but must not invent real-world facts or competitive achievements.

## Alleanze content

Before publishing an alliance/partner relationship, verify:

- correct official name;
- relationship/category;
- location if shown;
- logo/crest permission or supplied asset;
- destination URL;
- short description.

Do not infer a formal partnership merely from social interaction, event attendance or a mention in another source.

## Editorial and Cronache content

Narrative writing may be creative, but factual statements inside it must remain grounded.

Agents may dramatise atmosphere, not history.

If a Chronicle describes a real event, results, participant achievements, dates and locations must be sourced from confirmed data.

## Placeholder rules

When data is missing:

Preferred options:

- omit the field;
- label the section as forthcoming;
- use an explicit non-factual placeholder in a development branch;
- request owner confirmation before production publication.

Do not fabricate realistic-looking values merely to make a layout appear complete.

## Provenance rule

For meaningful factual updates, the PR description or content record should state where the information came from.

A minimal provenance note can be:

```text
Source: owner-confirmed / official event page / verified result export / other primary source
Verified: YYYY-MM-DD
```

## Conflict handling

If two credible sources disagree:

1. do not choose one silently;
2. mark the fact `DISPUTED`;
3. present the conflict to the project owner;
4. publish only after resolution.

## Agent publication rules

AI agents must:

- separate facts from proposed copy;
- preserve uncertainty explicitly;
- never invent missing data;
- never use another AI answer as a factual source;
- verify links and identifiers before proposing production publication;
- flag stale information when dates or statuses may have changed;
- avoid exposing private information not intended for the public site.

## Relationship with other documents

- `PROJECT_CONTEXT.md` defines product scope.
- `CONTENT_SOURCES.md` defines factual authority.
- `ART_DIRECTION.md` defines artistic authority.
- `ASSET_REGISTRY.md` defines visual asset authority.
- `AGENT_TEAM.md` defines operational authority.
