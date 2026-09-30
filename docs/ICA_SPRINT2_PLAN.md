# ICA — SPRINT 2 PLAN | Adunanze & Leghe
**Stato:** AVVIATO · **Fonte dati iniziale:** dataset pubblici correnti.

## Obiettivo
Portare a risultato visibile l’architettura Adunanze/Leghe già approvata, senza attendere il primo import XLSX reale.

## Work packages tecnici
| ID | Deliverable | Gate PO? |
|---|---|---|
| S2-TECH-01 | Normalizzare calendario Adunanze come vista unica di eventi autonomi + Tappe, preservando card e URL esistenti | No |
| S2-TECH-02 | Area Leghe in Adunanze con accordion esclusivo e stati vuoti | No |
| S2-TECH-03 | Blaze of Glory: Presentazione → Tappe → Classifica → Cronache, usando dataset correnti | No |
| S2-TECH-04 | Deep-link stabile a Blaze of Glory con auto-scroll/auto-open | No |
| S2-TECH-05 | Spostare Top 3 dalla homepage alla Lega e aggiornare la CTA “Scopri la Lega” | No |
| S2-TECH-06 | QA CI/regressione/desktop/mobile/keyboard/deep-link/accessibilità pertinente | No |
| S2-TECH-07 | Eventuali nuovi/modificati dati pubblici o variazioni UX significative emerse durante build | **Sì, solo se realmente necessarie** |

## Definition of Done
- calendario unico funzionante;
- area Leghe conforme a DEC-06.1–.8;
- Blaze of Glory renderizzata dai dati pubblici correnti;
- Top 3 assente dalla homepage e presente nella Lega;
- deep-link auto-open verificato;
- eventi autonomi distinti dalle Tappe;
- URL esistenti preservati;
- CI + regression + desktop + mobile + keyboard/accessibilità + deep-link PASS;
- nessun nuovo dataset o contenuto non approvato introdotto.
