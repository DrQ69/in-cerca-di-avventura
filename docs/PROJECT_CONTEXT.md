# Project Context — In Cerca di Avventura

## Mission

**In Cerca di Avventura** is an Italian community hub dedicated to **Sorcery: Contested Realm**. The site should bring together events, league information, results, player identities and community partnerships in a coherent fantasy world rather than feeling like a generic event portal.

Public site:

`https://drq69.github.io/in-cerca-di-avventura/`

Repository:

`DrQ69/in-cerca-di-avventura`

## Current technical state

The project is intentionally simple:

- static GitHub Pages site;
- `index.html` as the current main page;
- shared CSS in `assets/css/style.css`;
- shared JavaScript in `assets/js/main.js`;
- image assets under `assets/`;
- no framework;
- no build step;
- no backend;
- no database.

This simplicity should be preserved until product requirements make a more complex architecture worthwhile.

## Product areas

### Home

The homepage introduces the identity of In Cerca di Avventura and gives immediate access to the principal areas of the project.

### Eventi

Event cards/pages should eventually contain real event information such as date, format, venue, timing, registration information and links to results after the event.

**Important:** existing event information in the current homepage must not automatically be considered verified. Some values were introduced during early prototyping. Before publishing or expanding event data, confirm the source data with the project owner.

### Lega

A key league is **Blaze of Glory — La Lega di Cremos**, identified as the **Prima Era 2026/2027**.

The league area is expected to evolve toward:

- calendar/tappe;
- formats;
- rules;
- standings;
- scoring system;
- links to event results;
- season finale information.

Do not publish detailed dates, fees, prizes or rules unless they are explicitly confirmed.

### Risultati

Each event should eventually have a result view containing, where available:

- final standings;
- wins/losses or event record;
- placement;
- format;
- prizes/achievements;
- links to participant profiles.

### Avventurieri

Players are presented in-world as **Avventurieri**.

The long-term concept is a fantasy character-sheet style profile, potentially including:

- name or nickname;
- fantasy caricature/portrait;
- most-played Sorcery Avatar;
- city/community when appropriate;
- events played;
- wins and podiums;
- overall record;
- titles/achievements;
- preferred decks/archetypes;
- result history;
- badges or notable accomplishments.

The player profile should feel like a character sheet from a fantasy campaign, but the information itself must remain clear and easy to scan.

### Alleanze Dinastiche

Partnerships are framed as **Alleanze**.

Current conceptual categories:

- **Mercanti & Botteghe** — stores and sellers;
- **Community Italiane** — Italian communities and organizers;
- **Alleanze Oltreconfine** — international communities and partners.

A future alliance card may contain crest/logo, name, city/country, short description and destination link.

### Community

The site also represents the broader In Cerca di Avventura identity: art, collecting, events, stories and community activity around Sorcery: Contested Realm.

## Information architecture

The preferred long-term relationship is:

**Eventi → Risultati → Avventurieri**

An event creates a result set; result rows reference players; player names link back to persistent Avventuriero profiles.

Avoid creating duplicated player information separately inside every event page when the same information belongs in the persistent profile.

## Content integrity

This project should distinguish clearly between:

- confirmed factual data;
- placeholders/demo copy;
- future concepts.

Rules:

1. Do not invent event data, partner names, results, standings, prizes or player statistics.
2. Do not infer that prototype text is confirmed simply because it is currently rendered on the live site.
3. When source information is incomplete, use an explicit placeholder or ask for confirmation rather than fabricating details.
4. Preserve Italian as the primary public language unless a page is explicitly intended to be bilingual/international.

## Architecture guidance

For the near term, continue with static HTML/CSS/JS.

Consider a static-site generator such as Astro or Eleventy only when repeated page creation becomes genuinely burdensome, for example when:

- many Avventuriero profiles must be maintained;
- event/result pages become numerous;
- shared templates are being copied manually;
- structured content needs to generate multiple pages.

A true backend/database should come later and only if required by features such as account login, self-service registration, live standings, multi-user editorial workflows or frequent data updates.

## Development workflow

- `main` is production and deploys to GitHub Pages.
- Use a dedicated feature/chore branch for changes.
- Prefer one coherent PR per work block.
- Before merging UI changes, verify desktop and mobile rendering.
- Check that referenced assets exist and actually render, not merely that the HTTP request succeeds.
- Keep PR descriptions explicit about assumptions and provisional content.

## Near-term roadmap

1. Maintain a stable technical foundation.
2. Consolidate design language and reusable visual components.
3. Replace prototype event data with confirmed information.
4. Refine Home/Eventi/Lega sections.
5. Define the first real Avventuriero character-sheet template.
6. Define reusable Results and Alliance card patterns.
7. Reassess whether static HTML remains sufficient before introducing new technology.
