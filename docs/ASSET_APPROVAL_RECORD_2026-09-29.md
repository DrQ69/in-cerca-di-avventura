# Asset Approval Record — 2026-09-29

**Record ID:** ICA-ASSET-APP-2026-09-29  
**Authority:** Product Owner  
**Scope:** governance cleanup of current beta production dependencies without intentional rendering changes.

## 1. Approval decision

The Product Owner directed closure of remaining governance / asset-approval gaps on 2026-09-29.

This record therefore promotes only assets for which the repository already contains sufficient role, source-class, QA and project-use evidence. It does **not** promote beta pages to canonical status, create an M11 visual baseline, register an M12 canonical page or assign PRODUCTION_READY to any page.

## 2. Assets approved by this record

The following project-generated / project-directed assets are approved for ICA project use at version 1.0:

- `MED-ADU-01-BATTLEFIELD`
- `MED-ADU-02-GATE-INTERNATIONAL`
- `MED-ADU-03-GATE-NATIONAL` — subject to `EXC-0001`
- `MED-ADU-01-BATTLEFIELD-512`
- `MED-ADU-02-GATE-INTERNATIONAL-512`
- `MED-ADU-03-GATE-NATIONAL-512`
- `MED-CRN-01-BACKGROUND`
- `POR-AVV-NICK-01`
- `MAP-ALL-ITA-01`
- `MED-ALL-BRONZE-01`
- current Cronache ornamental SVG dependencies registered in `assets/manifest.json` by this cleanup.

Approval is based on the current binaries and current roles. A material replacement or provenance change triggers recheck under M8.1.

## 3. Explicitly not approved

The following remain non-approved because the repository does not yet contain enough evidence to satisfy the asset DoD:

### ICA brand proxy and favicon
- `SIG-01-CANDIDATE-ROOT`
- `SYS-FAVICON-01-32`

Reason: the current root WebP remains a runtime/layout proxy while exact canonical ICA source installation/identity closure is still open. The favicon depends on the same unresolved canonical brand family.

### External community logos
- `LOGO-ALL-VOID-01`
- `LOGO-ALL-MORTALS-01`

Reason: these are externally supplied community marks. Production-use permission/owner evidence is not documented in the repository. They remain valid for current beta evaluation but are not canonical production-approved assets.

## 4. Archived / removed from approval path

- `MED-HERO-01-CANDIDATE-ROOT` is archived because it is explicitly on hold / do not use.
- the three registered Cronache status WebP files are archived because the current Cronache rendering does not reference them.

Archiving means they are not current production dependencies; it does not delete the binary.

## 5. Budget and performance

All approved raster assets checked by this cleanup are within their assigned nominal budget except:

- `MED-ADU-03-GATE-NATIONAL` — 603,688 bytes versus the 400 KB section-banner maximum.

This is covered by `EXC-0001`. The mobile derivative is approximately 95 KB and existing Adunanze Lighthouse verification passed. No binary was recompressed or replaced in this cleanup.

## 6. Rendering constraint

This governance block intentionally changes no page markup, layout, CSS, JavaScript, image binary or user-visible content. It changes manifest/governance state only.

## 7. Remaining external decisions

Canonical production promotion remains blocked by issues outside this approval record, including:

- exact canonical ICA brand-source installation/verification;
- documented permission evidence for external community logos;
- canonical beta-to-IA promotion decision;
- repository branch protection administration.

Those items must not be silently interpreted as approved by this record.
