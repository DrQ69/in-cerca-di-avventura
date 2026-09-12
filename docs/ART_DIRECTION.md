# Art Direction — In Cerca di Avventura

## Purpose

This document defines the canonical artistic direction for **In Cerca di Avventura**.

It translates the approved visual work developed for the site — especially the dark-fantasy retro language and the modular banner system — into rules that humans and AI agents can apply consistently.

This is not a generic inspiration board. It is a production constraint.

## Authority order

When visual decisions conflict, use this order of authority:

1. the official **In Cerca di Avventura** emblem;
2. approved visual assets and approved banner/component families;
3. this `ART_DIRECTION.md`;
4. `DESIGN_SYSTEM.md` for web implementation rules;
5. new proposals.

A new proposal must adapt to the established identity, not redefine it.

## Visual north star

The site should feel like an **old-school dark-fantasy artefact brought to the web**.

Primary qualities:

- classic 1980s–1990s fantasy illustration atmosphere;
- gothic and medieval heraldry;
- ceremonial composition;
- painterly rather than synthetic surfaces;
- physical materiality: stone, dark metal, aged gold, fabric, carved/engraved details;
- mystery, nobility and adventure;
- restrained visual drama rather than constant spectacle.

Useful directional references include classic tabletop fantasy and the material, dark medieval atmosphere associated with late-1990s/early-2000s dark-fantasy games. These are mood references only; the site must maintain its own identity.

## What the site must NOT become

Avoid visual drift toward:

- SaaS or corporate dashboard UI;
- generic modern landing pages;
- mobile-game fantasy interfaces;
- neon/high-saturation HUDs;
- glossy plastic or toy-like surfaces;
- excessive glassmorphism;
- generic beige parchment used everywhere;
- decorative clutter that reduces readability;
- fantasy assets that look individually attractive but belong to a different visual world.

A component is not acceptable merely because it “looks fantasy”. It must look like it belongs beside the approved In Cerca di Avventura assets.

## Material language

Preferred materials and surface cues:

- blue-black / black stone;
- cracked or weathered deep-blue stone;
- blackened iron;
- aged steel;
- antique bronze and gold;
- dark velvet or heavy ceremonial fabric where appropriate;
- engraved and carved borders;
- restrained wood/leather only when contextually justified;
- small gem-like blue highlights;
- rare red heraldic accents.

Materials should feel worn, handcrafted and physically plausible. Avoid perfectly smooth, sterile digital surfaces.

## Lighting language

Lighting should reinforce physicality.

Preferred:

- deep shadow;
- cool blue atmospheric light;
- controlled gold/bronze reflections;
- occasional warm torch/candle accents;
- directional highlights that make metal, stone and fabric readable.

Avoid uniform front-lighting, excessive glow and neon effects.

## Working art palette

These values are an art-direction reference. `DESIGN_SYSTEM.md` remains the implementation source for active CSS tokens.

```text
Warm black / charcoal     #080706
Deep night blue           #07151F
Gem blue                  #075E89
Antique gold              #B98A36
Light aged gold           #E2C270
Dark iron / steel         #383A39
Parchment / warm ivory    #C9B78E
Rare blood-red accent     #651D18
```

Red is exceptional. It should communicate narrative or heraldic emphasis, not become a routine interface colour.

## Heraldic geometry

Preferred formal vocabulary:

- symmetry and balanced ceremonial composition;
- gothic arches and pointed forms;
- shields, standards, sigils and seals;
- diamonds and gem shapes;
- engraved frames;
- restrained corner ornaments;
- vertical or axial hierarchy;
- visual weight around a clear central content area.

Ornament must frame information rather than compete with it.

## Official emblem rule

The official **In Cerca di Avventura** emblem is the primary visual anchor.

Rules:

- do not redraw it;
- do not reinterpret its geometry;
- do not recolour it without explicit approval;
- do not distort its proportions;
- do not crop essential parts of it;
- do not apply destructive visual effects to the canonical master;
- use derivatives appropriate to web delivery while preserving the source identity.

Where an **araldo / herald standard** is part of the approved visual system, the official emblem must be present unless a specific exception is approved by the project owner.

## Modular banner principle

The approved banner direction is a **modular visual system**, not a single flattened image.

The system should allow composition from reusable parts such as:

- heraldic/emblem elements;
- central title area;
- side structures or standards;
- frames and borders;
- ornaments;
- background material layers;
- responsive variants.

Important navigation labels, section titles and functional copy should remain HTML whenever practical rather than being permanently baked into generated images.

This preserves accessibility, responsiveness, localisation and future editing flexibility.

## Buttons and interactive controls

Buttons must look as though they belong to the same artefact family as the banner and heraldic assets.

Preferred qualities:

- dark metal / aged gold construction;
- hard or lightly rounded geometry;
- engraved or framed feeling;
- restrained metallic highlight;
- readable states rather than flashy animation.

Reject controls that are “fantasy” in isolation but visibly inconsistent with the approved banner/material language.

## Typography relationship

Typography must support the artefact rather than imitate it excessively.

- monumental fantasy/display type for major headings;
- clear secondary serif/display typography for labels/navigation;
- highly readable body type for paragraphs and data;
- important textual information should remain real text in the DOM.

See `DESIGN_SYSTEM.md` for current font families and implementation details.

## Asset creation principle

When generating or commissioning a new visual asset:

1. identify the functional role first;
2. check whether an approved asset already solves it;
3. consult `ASSET_REGISTRY.md`;
4. preserve established materials, lighting and geometry;
5. create the smallest reusable asset that solves the need;
6. evaluate it beside existing approved assets, not in isolation;
7. prepare responsive or simplified variants when required;
8. register an approved asset before treating it as canonical.

## Coherence test

Every significant new asset or component should pass these questions:

- Could this physically belong to the same world as the official emblem?
- Are materials and lighting consistent with the existing visual language?
- Is the hierarchy of black/blue, iron and antique gold respected?
- Does it feel old-school dark fantasy rather than contemporary mobile-game fantasy?
- Would it look natural beside the approved banner system?
- Is ornament supporting function rather than adding noise?
- Is important information still readable?
- Can it work or degrade gracefully on mobile?
- Is it reusable rather than unnecessarily bespoke?

If several answers are “no”, the component should be revised before approval.

## Approval states

Visual work should be treated as one of:

- **CONCEPT** — exploratory; not approved for production;
- **CANDIDATE** — coherent enough for review/testing;
- **APPROVED** — accepted as part of the canonical visual system;
- **DEPRECATED** — retained for history but no longer used;
- **REJECTED** — must not be reintroduced without new review.

Only **APPROVED** assets should be treated by agents as canonical references.

## Relationship with other documents

- `PROJECT_CONTEXT.md` explains what the product is.
- `ART_DIRECTION.md` explains what its world should look and feel like.
- `DESIGN_SYSTEM.md` translates that world into usable web UI rules.
- `ASSET_REGISTRY.md` records the concrete approved assets.
- `CONTENT_SOURCES.md` governs factual content.
- `AGENT_TEAM.md` governs who may do what.
