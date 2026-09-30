# ICA — ROADMAP NORMALIZATION AUDIT
**Data:** 2026-09-30 · **Scopo:** consolidare la Roadmap dopo DEC-09 e la transizione alla modalità Sprint.

## Esito
La normalizzazione è COMPLETATA per il livello operativo:
- `docs/ICA_CURRENT_RULES.md` è la fonte primaria delle regole vigenti.
- `docs/ICA_NICK_ROADMAP_MASTER.md` conserva storico + roadmap, mentre il registro task operativo è semplificato.
- DEC-09 è congelata salvo vere decisioni future di prodotto/governance.
- Le implementazioni tecniche usano ID `S*-TECH-*`.
- I soli gate Product Owner sono PO-UX, PO-DATA, PO-LIVE e PO-ROLLBACK.

## Incoerenze rilevate e trattamento
| Incoerenza | Rischio | Trattamento |
|---|---|---|
| Vecchio snapshot E02→IV / E04→II | Critico: modifica errata calendario/lega | Marcato HISTORICAL/SUPERSEDED. Regola vigente: E02=II, E04=IV. |
| Vecchio modello “ogni merge code-only richiede conferma” | Alto: moltiplicazione gate tecnici | Marcato SUPERSEDED. Le PR tecniche sono autonome salvo uno dei quattro gate. |
| PR #111 descritta come “pronta al merge” dopo integrazione | Medio: stato roadmap incoerente | Corretto a COMPLETED/MERGED. |
| Roadmap usata insieme come spec, changelog e task list | Alto: carico cognitivo | Current Rules separata + task operative semplificate; storico resta nel Master. |
| Fair Play +2/+3 | Medio/alto sui punteggi | Resta OPEN; nessuna scelta autonoma. |
| Merge su main con GitHub Pages | Alto: code merge può diventare pubblicazione live | Esplicitato: se il merge pubblica automaticamente, scatta PO-LIVE. |

## Baseline vigente verificata
- E02 — Peasant = Tappa II.
- E04 — Constructed Full = Tappa IV.
- Dr. Q = PLY-0000.
- PLY-0002 = legacy reserved.
- Fair Play DEC-09.7 = OPEN.
- Dataset live: legacy JSON; manifest versionato non attivo.
- Primo import XLSX reale: non eseguito.
- Google Sheet: non modificare.

## Stato Sprint
- Sprint 1: DONE. Report: `ICA_SPRINT1_COMPLETION_REPORT.md`.
- Sprint 2: implementazione completata in PR #112 e QA verde; in attesa del solo gate PO-LIVE perché il merge su main alimenta GitHub Pages.
- Sprint 3: PLANNED.
- Sprint 4: PLANNED.

## Rischi residui
1. **PO-LIVE:** merge di PR #112 renderebbe visibile la nuova architettura Adunanze/Leghe.
2. **PO-DATA:** qualunque primo import XLSX o modifica ai dataset richiede approvazione separata.
3. **Fair Play:** non usare +2/+3 finché non risolto.
4. **Storico Master:** contiene volutamente note superate; gli agenti devono seguire Current Rules e ignorare le voci marcate SUPERSEDED.
5. **GitHub Pages:** trattare ogni merge UI su main come possibile rilascio live e verificare sempre il meccanismo di deploy prima del merge.

## Regola operativa
Non aprire nuove DEC per scelte tecniche ordinarie. Correggere autonomamente bug, test, refactoring e implementazioni già approvate; fermarsi solo ai quattro gate Product Owner.
