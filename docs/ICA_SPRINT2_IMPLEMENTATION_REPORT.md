# ICA — SPRINT 2 IMPLEMENTATION REPORT
**Sprint:** Adunanze & Leghe · **Stato:** REVIEW / PO-LIVE · **PR:** #112 · **Head:** 7ef291c90093810a2a924fa3a0d54d92a0bea557

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
- Fair Play DEC-09.7 invariato OPEN.
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

## Definition of Done
Il pacchetto è code-complete e QA-complete sulla PR. Non è DONE/live perché il merge su main può pubblicare GitHub Pages e richiede PO-LIVE.

## Gate corrente
**PO-LIVE:** autorizzazione Dottor Q al merge della PR #112. Dopo il merge: smoke test live obbligatorio. Eventuale rollback richiede PO-ROLLBACK separato.
