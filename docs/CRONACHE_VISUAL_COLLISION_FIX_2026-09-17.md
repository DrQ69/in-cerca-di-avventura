# Cronache — Visual collision fix

Date: 2026-09-17

PO-reported issues:

1. Season event-count text could collide visually with the surrounding decorative frame.
2. `Dettagli in preparazione` could overflow its action cell and collide with the inner frame.
3. The reset control used browser/default visual treatment and the wording `Azzera filtri`, which was inconsistent with the ICA editorial register.

Corrections:

- rename reset control to **`Ripristina i filtri`**;
- apply a dedicated parchment/iron/gold control treatment, with no white/default browser background;
- reserve safe-area padding for season count text;
- constrain pending-detail copy inside its action cell, allow controlled wrapping, and prevent frame collision;
- preserve minimum 44 px interaction target and visible focus state;
- keep responsive behavior without horizontal overflow.

This is a precondition fix before the Aesthetic Deep Pass.
