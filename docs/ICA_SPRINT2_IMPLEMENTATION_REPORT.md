# ICA — SPRINT 2 IMPLEMENTATION REPORT
**Sprint:** Adunanze & Leghe · **Stato:** DONE / LIVE · **PR:** #112 · **Merge:** 51b58c46b179c0721898a23f4e258077d1f33dd7

## Deliverable pronti
- calendario Adunanze unificato con eventi in corso, futuri e conclusi dalla stessa sorgente;
- distinzione eventi autonomi / Tappe;
- terminologia visibile “Tappa” senza rinominare ID legacy;
- area Leghe nella pagina Adunanze;
- accordion esclusivo, chiuso di default;
- Blaze of Glory: Presentazione → Tappe → Classifica → Cronache;
- 8 Tappe numerate correnti, incluse E02=II ed E04=IV;
- Top 3 e classifica completa nella Lega;
- deep-link #lega-blaze-of-glory-2026-2027 con auto-open;
- homepage senza Top 3; CTA “Scopri la Lega” verso deep-link;
- fix popover lungo per viewport intermedi.

## Dati
- Nessun file data/* modificato.
- Nessun nuovo dato competitivo o contenuto inventato.
- Fair Play DEC-09.7 **RISOLTA: +3 GP**.
- Manifest live invariato/disattivato.

## QA realmente eseguito
| Controllo | Run | Esito |
|---|---:|---|
| ICA baseline | 36780367322 | PASS |
| Dataset/core + model Sprint 2 | 36780367309 | PASS |
| Homepage visual | 36780367393 | PASS |
| Adunanze visual + keyboard + deep-link | 36780367366 | PASS |
| Runtime LCS-02 | 36780367413 | PASS |
| Shared banner consistency | 36780367374 | PASS |
| Lighthouse Adunanze | 36780367311 | PASS al retry |

Il primo campione Lighthouse portal-mobile è risultato 0.92 / LCP 2788 ms; è stato ripetuto senza cambiare codice o soglie. Retry: portal-mobile 0.99 / 1954 ms, national-mobile 0.94 / 1969 ms, national-desktop 1.00 / 633 ms, portal-desktop 0.96 / 1384 ms.

## Rilascio live
- PO-LIVE autorizzato da Dottor Q.
- Merge PR #112: `51b58c46b179c0721898a23f4e258077d1f33dd7`.
- GitHub Pages deployment: run `36841003715` — **SUCCESS**.
- URL live: https://drq69.github.io/in-cerca-di-avventura/
- Smoke live: run `36841839539` — **SUCCESS**.
- Evidenza smoke: artifact `11151900290` (retention 14 giorni).
- Nessuna regressione critica; nessun rollback eseguito.

## Smoke live realmente eseguito
- Homepage desktop/mobile: PASS.
- Portale Adunanze desktop/mobile: PASS.
- Adunanze Nazionali desktop/mobile: PASS.
- Blaze deep-link auto-open: PASS.
- Keyboard/interazioni pertinenti: PASS.
- Runtime e console errors: PASS.

## Definition of Done
**RAGGIUNTA per Sprint 2.** Deliverable integrato in `main`, deploy Pages riuscito, QA push verde e smoke test live desktop/mobile PASS.

## Gate residuo
Nessun gate residuo per Sprint 2. Qualunque futuro rollback richiede **PO-ROLLBACK** separato.
