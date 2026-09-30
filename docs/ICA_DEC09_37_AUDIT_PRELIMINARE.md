# ICA — DEC-09.37 | Audit tecnico preliminare Blaze of Glory
**Data:** 2026-09-30 · **Stato:** eseguito READ-ONLY · **Ambito:** snapshot esportato `BLAZE OF GLORY.xlsx` disponibile nella Libreria privata; branch `main` del repo; specifiche DEC-09.1–.36. **Non è una pubblicazione né una certificazione runtime.**

## 1. Fonti e perimetro
- Lettura non distruttiva dell'XLSX mediante artifact_tool, limitatamente a struttura, intestazioni, esempi di campi pubblicabili e presenza di valori numerici nelle tre classifiche. Il workbook originale NON è stato caricato nel repository.
- Lettura di `data/players.json`, `data/events.json`, `data/league-standings.json` e degli script `beta/main.js`, `beta/avventurieri/avventurieri.js`, `beta/adunanze/nazionale/main.js`, `beta/cronache/main.js`. Nessuna modifica.
- L'XLSX è una copia/snapshot, non l'accesso live al Google Sheet originale (DEC-09.1). I metadati cronologici/freschezza dell'export NON sono stati verificati ai fini della pubblicazione (DEC-09.27). Nessun test reale desktop/mobile, nessuna anteprima privata dell'import proposta e nessuno smoke test live sono stati eseguiti.

## 2. Evidenze verificate
| Area | Riscontro tecnico (non ufficializzazione di nuovi risultati) | Decisioni / impatto |
| --- | --- | --- |
| Workbook | Nove fogli: DASHBOARD, REGISTRO, CONFIG, CLASSIFICA GENERALE, CLASSIFICA DRAFT, CLASSIFICA CONSTRUCTED, EVENTI, FAIR PLAY, TAPPA 1. | DEC-09.3/.4: leggere solo allowlist, non committare l'XLSX |
| Registro pubblico | 32 profili; 32 ID univoci; Dr. Q usa `PLY-0000`; `PLY-0002` non è presente fra gli ID attivi. | DEC-09.18/.19: mappatura PRIVATA 32/32 già ratificata; ex PLY-0002 non riutilizzabile |
| Standings pubblici | `data/league-standings.json`: 17 entries, tutti i `player_id` risolvono nei 32 profili. `after_stage=1`, `updated_at=2026-09-22`. | Non implica automaticamente che lo snapshot esportato sia più recente |
| Calendario Excel | EVENTI contiene 9 record E01–E08 e FIN; E02 reca Tappa IV, E04 Tappa II. | DEC-09.20 associazioni APPROVATE |
| Eventi pubblici | `data/events.json` contiene 10 eventi: una Giostra autonoma + E01–E08 + finale. Nei record identificati come E02 ed E04 il campo numerico `stage_number` è rispettivamente 2 e 4; mismatch con DEC-09.20. | **P0**: usare `event_code` come crosswalk E02/E04 e PRESERVARE `event_id` pubblico/URL, non rinominare indiscriminatamente |
| Risultati evento | E01 nel JSON ha 19 righe di risultato, di cui 3 senza `player_id`; la Giostra autonoma ha 18 righe, 7 senza `player_id`. Ciò non autorizza ad attribuire automaticamente identità ai record mancanti. | Audit mirato ai deep-link, DEC-09.8/.34 |
| Classifiche XLSX | Nei campioni esaminati i valori numerici della Generale/Draft/Constructed risultano leggibili; Constructed mostra posizioni 1 con 0 GP/0 Tappe prima dell'avvio. Non è stata completata una certificazione esaustiva di tutte le cache/formule. | DEC-09.11/.16/.26: classifica Constructed non va rappresentata come podio reale |
| Fair Play | Nel workbook CONFIG mostra +3 mentre l'intestazione FAIR PLAY indica +2. Nel JSON pubblico una entry include `fair_play_bonus_points:3`. | **P0 / DEC-09.7 OPEN**: non selezionare un valore, non correggere e non ricalcolare autonomamente |
| Collocazione Top 3 | `beta/main.js` contiene ancora `renderStandings` che genera Top3 nella homepage. | **P1**: riallineare con DEC-04 e DEC-06, nella futura area Leghe espandibile |
| Integrazione dati | Script correnti leggono JSON statici distinti (players/events/league-standings). La pagina Avventurieri aggrega alcuni indicatori evento dalle righe standings e legge la classifica Lega dal JSON. | **P0 prima del primo import**: orchestrazione pubblicazione coerente e versione comune; distinguere statistiche descrittive da ricalcolo punti Lega vietato in DEC-09.11 |
| Storico pubblicazioni | Nella ricognizione dell'albero GitHub non è stato identificato un registro dati di import/versione/rollback dedicato (presente un manifest asset, non equivalente). | **P0**: definire artefatto tecnico e processo DEC-09.13/.36 |
| QA operativo | DEC-09.31–.35 definisce rapporto unico, preview privata, QA visuale+funzionale desktop/mobile, smoke test live e rollback su autorizzazione; non risultano provati come workflow di import end-to-end. | **P0**: implementare/validare prima di dichiarare il processo pronto |

## 3. Riscontro e distinzione delle anomalie
**P0 prima di qualunque nuovo rilascio dataset:**
1. Risolvere il contrasto tra `stage_number` online ed E02→IV / E04→II approvati, presentando diff, non cambiando gli identificativi tecnici permanenti `event_id` o i deep-link.
2. DEC-09.7 Fair Play resta DIFFERITA: richiedere riscontro ufficiale separato; il bonus 3 già presente nel pubblico è un dato ESISTENTE, non una nuova scelta validata dal presente audit.
3. Progettare un rilascio atomico/versionato dei dataset e un audit trail pubblico privo di dati riservati; definire fallback e recuperabilità della precedente versione coerente.
4. Per un futuro XLSX reale completare verifica obbligatoria dei valori formula e della freschezza/versione (DEC-09.26/.27), rapportino unico, preview privata e test desktop/mobile prima della conferma. Non dichiarare PASS per test non eseguiti.

**P1 di conformità contenuti e interfaccia:**
5. Ricollocare Top3 nella sezione Leghe espandibile, non homepage, secondo DEC-04/DEC-06, in progetto grafico separato e soggetto ad approvazione.
6. Mantenere eventi autonomi (`giostra-001`) distinti dalle nove righe della Lega: assenza nel workbook BOG non autorizza cancellazione (DEC-09.22).
7. Verificare le righe risultato senza player_id soltanto ove necessario per link/storico; non attribuire automaticamente identità basandosi sui soli nomi testuali.
8. Confermare per ogni import i campi nuovi/modificati evento e le eventuali differenze di formato/stato rispetto al JSON corrente; non propagare automaticamente valori non allowlisted.
9. Validare il primo snapshot effettivamente caricato dopo l'approvazione del workflow; la lettura campionaria precedente non certifica lo stato corrente del Google Sheet.

## 4. Prontezza stimata (descrittiva, non percentuale)
- **Definito e approvato in roadmap:** whitelist pubblica, mapping privato ID 32/32, associazioni E02/E04, gestione nuovi/assenti profili ed eventi, struttura del rapporto e gate autorizzativo, specifica dei test e rollback.
- **Già presente nel sito:** registro di 32 Avventurieri con ID persistenti, eventi JSON, standings JSON, rendering homepage/Adunanze/Avventurieri/Cronache.
- **Non ancora attestato come operativo per un import DEC-09 end-to-end:** generazione dataset coerente e versionato da XLSX, anteprima privata visiva fedele, QA desktop/mobile realmente eseguito e smoke test dopo pubblicazione, registro tecnico rilasci/rollback.
- **Vincolo rimasto aperto:** Fair Play DEC-09.7 (+2 vs +3). Evitare qualunque nuovo calcolo/ufficializzazione automatica con valore presunto.

## 5. Prossima microdecisione suggerita
**DEC-09.38 — ordine remediation:** A) preparare per prima la correzione controllata di rappresentazione/mapping E02/E04 (event_code ↔ event_id ↔ stage_number), solo con diff/preview e consenso specifico prima delle modifiche; poi infrastruttura import/versioni/QA; gestire Fair Play con sua decisione separata. B) sospendere ogni ulteriore intervento di implementazione finché DEC-09.7 non venga risolta. La presente approvazione DEC-09.37 consente SOLO audit, non la scelta/attuazione automatica della remediation.

**Privacy:** questo documento non contiene nomi reali dei giocatori, ID numerici della tabella privata di riconciliazione, link riservati, note amministrative, workbook grezzo o dati non allowlisted.
