# ICA — ROADMAP NORMALIZATION AUDIT
**Data:** 2026-09-30 · **Scopo:** ridurre complessità DEC-09 e separare regole vigenti, storico e implementazione.

## 1. Incoerenze rilevate
| Area | Rischio rilevato | Normalizzazione |
|---|---|---|
| E02/E04 | Più sezioni storiche riportavano E02=IV / E04=II, in conflitto con la rettifica finale | Marcate SUPERSEDED; baseline vigente E02=II, E04=IV |
| Governance PR | Workflow precedente chiedeva approvazione del PO per ogni merge code-only | Sostituito dai quattro soli gate PO-UX / PO-DATA / PO-LIVE / PO-ROLLBACK |
| Task operative | T-task contenevano lunghi duplicati delle DEC, incluse decisioni obsolete | Tabella riscritta con obiettivo/dipendenze/stato/deliverable/DoD/riferimenti |
| DEC-09 | Crescita fino a decine di microdecisioni tecniche | Serie congelata; nuove scelte tecniche usano S*-TECH-* |
| Sprint 1 | Infrastruttura tecnica rischiava di diventare prerequisito infinito prima del sito visibile | Sprint 1 chiuso dopo #109/#110/#111; XLSX reale/manifest live restano gate futuri ma non bloccano Sprint 2 |
| QA | Alcuni test riflettevano vecchi comportamenti e potevano bloccare implementazioni già approvate | Test aggiornati solo quando la vecchia aspettativa è esplicitamente SUPERSEDED; soglie non abbassate |
| Dati vs UI | Rischio di attendere il primo import XLSX per costruire Leghe | Sprint 2 usa dataset pubblici correnti; nessun nuovo dato introdotto |

## 2. Analisi del lavoro svolto oggi
### Punti positivi
- Consolidato un sistema dati più sicuro: validazione, diff, release versionate, hash, hard-fail, rollback sintetico, audit log, candidate packager e intake gate.
- Scoperti difetti reali nella CI della PR #110: tre suite non venivano eseguite; la correzione ha poi trovato un bug nel test rollback. Il processo ha aumentato la qualità effettiva.
- Separato definitivamente dati privati/pubblici e mantenuto Google Sheet immutato.
- Formalizzato mapping stabile PLY e vincoli E02/E04.
- Passaggio da microdecisioni a Sprint con autonomia tecnica.

### Costi / inefficienze osservate
- DEC-09 ha assorbito troppo tempo in dettagli implementativi che non erano decisioni di prodotto.
- La stessa regola è stata copiata in Roadmap, task, diario, handoff e audit, aumentando il rischio di contraddizioni.
- Diversi gate merge erano organizzativi, non veri gate del Product Owner.
- Il progetto visibile è avanzato meno dell’infrastruttura.

## 3. Analisi del rischio corrente
| Rischio | Probabilità | Impatto | Mitigazione vigente |
|---|---|---|---|
| Agente usa una decisione storica superseded | Media | Alta | ICA_CURRENT_RULES.md primaria + marker SUPERSEDED |
| Overengineering del data pipeline | Media | Medio/Alto | Sprint 1 chiuso; nessun altro hardening senza difetto concreto |
| Nuovo XLSX pubblica dati privati o incoerenti | Bassa/Media | Alta | whitelist, intake gate, atomic block, private preview, PO-DATA |
| Fair Play contaminato da +2/+3 presunto | Media | Alta | DEC-09.7 OPEN hard gate |
| Merge tecnico provoca publish live involontario | Media | Alta | distinguere code integration da PO-LIVE; verificare meccanismo deploy prima di merge che cambia UI live |
| QA obsoleto blocca nuova UX approvata | Media | Medio | aggiornare aspettative solo quando Current Rules le rende superseded |
| Regressione URL/deep-link durante Sprint 2 | Media | Alta | preservare route, aggiungere hash compatibili e test browser |
| Top 3 duplicata home+Lega | Media | Medio | test esplicito: assente home, presente Lega |
| Dati correnti non coprono tutti gli stati futuri | Media | Medio | stati vuoti veritieri; nessun dato inventato |

## 4. Soluzioni adottate
1. Current Rules come unica baseline operativa.
2. Master Roadmap conserva storico, non è più una duplicazione completa delle regole in ogni task.
3. Quattro gate PO soltanto; code-only/refactoring/test autonomi.
4. DEC-09 congelata; tecnicismi con S1-TECH/S2-TECH.
5. Sprint 1 chiuso; import XLSX reale e manifest live separati dal progresso UI.
6. Sprint 2 avviato subito sui dataset pubblici correnti.
7. QA aggiornato con test specifici keyboard/deep-link senza abbassare soglie.

## 5. Rischio residuo da monitorare
- Prima di un merge Sprint 2 che provochi effettiva pubblicazione live, applicare PO-LIVE.
- Prima di qualsiasi variazione dei JSON pubblici, applicare PO-DATA.
- Fair Play resta non risolto.
- DEC-07/08 restano dipendenze per workflow editoriale, contatti, adesione e newsletter; non devono bloccare Adunanze/Leghe.
