# ICA — ROADMAP MASTER | Revisione Nick the Wizard
Versione 1.0 · 30/09/2026 · Responsabile decisioni: Alessandro (Dottor Q)
**Fonte dei requisiti:** “In cerca d'avventura — Brief consolidato per la revisione del sito”, v2.0, 30/09/2026 (Nick). Questo documento è un piano operativo, NON un'approvazione implicita di tutte le proposte del brief.
**Documento canonico:** docs/ICA_NICK_ROADMAP_MASTER.md in GitHub, branch main.
**Ambiente oggetto della revisione:** /beta/ (desktop prioritario; controllo responsive obbligatorio).
**Baseline tecnica iniziale:** main commit \`6326b541234e470029fcb67788a2b5ef76b81ae5\` (PR #108, rollback). Il suo tree è identico al commit precedente alle modifiche di artwork \`ce76ff37c411a8209ce65bb28b4c09d26b80f4a7\`.
**Attività esclusa:** nuovo artwork e hover del banner in /beta-v2/: IN PAUSA; non riaprirla in questa roadmap senza decisione espressa.
**Situazione iniziale:** ROADMAP DOCUMENTATA; richieste di Nick NON IMPLEMENTATE come parte di questo piano.

## 0. REGOLE DI CONTROLLO (da leggere prima di ogni sessione)
- Unica fonte di verità del progresso: questo file in \`main\`; un agente aggiorna la riga del task nella propria PR, poi il documento diventa aggiornato soltanto dopo il merge. Non considerare la chat o uno screenshot come tracking ufficiale.
- Stati: **TODO** (da avviare), **DECISION** (serve scelta del responsabile), **READY** (decisioni/dati completi), **IN_PROGRESS** (branch/PR aperta), **REVIEW** (collaudo/revisione), **BLOCKED** (dipendenza o dato mancante), **DONE** (mergiato, verificato sul sito, accettato), **PAUSED** (esplicitamente sospeso).
- Priorità: P0 = prerequisito/identità/coerenza, P1 = funzioni del primo rilascio, P2 = estensione successiva. La priorità è una proposta di sequenza organizzativa, non una decisione approvata da Nick.
- Colonne obbligatorie a ogni update: ID, stato, owner, PR/commit, prova QA/live, decisione collegata, aggiornato il, prossimo passo. Scrivere “NON VERIFICATO” se manca la prova.
- Distinguere **R** richiesta/scelta già approvata nel brief; **P** proposta da discutere; **V** funzione da preservare; **D** dato da confermare. NON implementare P e D come se fossero approvati.
- Ogni PR deve avere scope limitato e rollback identificato; non cambiare \`/beta-v2/\` per incidente; non modificare dati competitivi o recapiti senza fonti confermate.
- Criterio di DONE: decisione approvata, modifica su main, CI pertinente PASS, verifica visuale/comportamentale live, approvazione Dottor Q registrata. Se passa CI ma manca la verifica live: REVIEW, non DONE.
- Ogni sessione termina aggiornando il diario, il prossimo task, le criticità e lo SHA corrente. Se la chat riparte, leggere questo file e il brief, verificare GitHub e non presumere progressi da una chat precedente.

## 1. SCOPO E INVARIANTI
Visione da rendere esplicita: In cerca d'avventura è il progetto di contenuti di Nick e Dottor Q e un portale aperto alle **community italiane aderenti** di Sorcery: Contested Realm. CREMOS è una realtà territoriale con cui i fondatori sono direttamente coinvolti, non il sinonimo dell'intero portale.
Preservare: mappa fantasy d'Italia, logo e identità blu/nero/oro, filtri Tutti/Community/Mercanti, dati pilot Il Regno di Cremos / Team Void / Ordinary Mortals, card Adunanze con Google Maps e pannelli Regolamento/Premi, archivio Cronache e collegamenti ai profili, registro 32 Avventurieri (conteggio da riverificare), ricerca e paginazione, classifica Top 3 dinamica, sezioni Proclami, dati verificati esistenti. Non inventare dati mancanti o trasformare l'assenza in zero. Pagina di riferimento: \`/beta/\`; l'URL radice storico non è la homepage beta.

### DEC-01 — TESTI APPROVATI DA DOTTOR Q (30/09/2026)
- **Nome principale — APPROVATO:** “In cerca d'avventura”.
- **Sottotitolo — APPROVATO:** “Il reame delle community italiane di Sorcery: Contested Realm”.
- **Descrizione introduttiva — APPROVATA:** “Trova una community vicino a te, partecipa a eventi e leghe e segui le storie dei giocatori italiani.”
- La proposta intermedia di usare “giostre” è stata ritirata da Dottor Q il 30/09/2026: mantenere **eventi** come nel brief originale. Il glossario complessivo è stato APPROVATO in DEC-02 il 30/09/2026.

### DEC-02 — GLOSSARIO E REGOLE APPROVATE (30/09/2026)
| Voce | Definizione approvata |
|---|---|
| REAME | L'intero progetto e la rete italiana aderente. |
| AVVENTURIERO | Un giocatore del registro. |
| ALLEANZA | Una realtà aderente al progetto: community o mercante. |
| COMMUNITY | Gruppo locale o territoriale di giocatori, categoria delle alleanze. |
| MERCANTE | Negozio fisico oppure e-commerce aderente, altra categoria delle alleanze. |
| ADUNANZA | Un singolo evento, incontro o torneo con data e luogo: autonomo o tappa di lega. |
| LEGA | Un percorso di più eventi con stagione, regolamento e classifica propri. |
| TAPPA | Un evento appartenente a una lega. |
| CRONACA | Memoria di un'adunanza conclusa: risultati e, quando disponibili, racconti, immagini, video. |
| PROCLAMA | Notizia, annuncio o aggiornamento del portale o delle alleanze. |
| PATTO | Espressione narrativa dell'adesione, sempre con modalità pratiche spiegate in modo semplice. |
Regole approvate: “Adunanza” non è sinonimo di “Lega”; evitare “Duello” come termine generale per una tappa e accompagnare eventuali denominazioni narrative con “Tappa II/III…” dopo verifica dei dati; stile fantasy per titoli e racconti ma date, costi, sedi, regolamenti, iscrizioni, classifiche e pulsanti operativi chiari e letterali. Decisione **editoriale**, non autorizzazione a modificare dati o percorsi prima delle altre decisioni.

## 2. GATE DECISIONALI (nessuna PR funzionale prima delle decisioni pertinenti)
| ID | Scelta da compiere | Stato | Referente | Output richiesto / blocca |
|---|---|---|---|---|
| DEC-01 | Nome APPROVATO: “In cerca d'avventura”. Sottotitolo APPROVATO: “Il reame delle community italiane di Sorcery: Contested Realm”. Descrizione APPROVATA: “Trova una community vicino a te, partecipa a eventi e leghe e segui le storie dei giocatori italiani.” La grafia del logo fisico è una verifica separata, senza rielaborare il banner sospeso. | **APPROVED** (Dottor Q, 30/09/2026) | Dottor Q | T-01 sbloccata sul copy; applicazione alle pagine ancora non eseguita |
| DEC-02 | APPROVATO integralmente il vocabolario del brief: Reame, Avventuriero, Alleanza, Community, Mercante, Adunanza, Lega, Tappa, Cronaca, Proclama, Patto; per le tappe privilegiare “Tappa II” anziché “Duello II” (ferme eventuali denominazioni narrative proprie, accompagnate dall'indicazione Tappa); mantenere esplicite le informazioni operative. | **APPROVED** (Dottor Q, 30/09/2026) | Dottor Q | T-02 READY; T-12 ancora BLOCKED da DEC-09 e fonti evento; nessuna modifica al sito |
| DEC-03 | Approva o modifica menu proposto: Adunanze / Avventurieri / Alleanze / Proclami / Chi siamo; Cronache e Leghe dentro Adunanze? | DECISION (P, non approvata) | Dottor Q + Nick | Sitemap e routing; blocca T-03, T-04, T-10 |
| DEC-04 | Homepage: una o più “Prossime adunanze”; ordine/moduli/CTA; presenza anteprima Alleanze e classifica completa | DECISION (P) | Dottor Q + Nick | Wireframe e comportamento senza dati; blocca T-05–T-08 |
| DEC-05 | Mappa: dimensione marker e comportamento tooltip/click, se e quando prevedere cluster/elenco geografico | DECISION (riduzione R; interazione P) | Dottor Q + Nick | Specifica UI + mock; blocca T-09–T-11 |
| DEC-06 | Schede Lega: dati minimi, URL/struttura, stagione, classifica, differenza evento autonomo/tappa | DECISION (P) | Dottor Q + Nick | Data model + routing; blocca T-13, T-15 |
| DEC-07 | Pubblicazione e moderazione: chi inserisce/valida eventi, Proclami, Cronache e profili | DECISION (D) | Dottor Q + Nick | Workflow editoriale; blocca T-19, T-25 |
| DEC-08 | Contatti pubblici ufficiali del progetto e delle alleanze; stato newsletter; modalità di adesione; status rispetto all'editore | BLOCKED (dati non tutti disponibili) | Dottor Q + singole alleanze | Fonte verificata per campo; blocca T-11, T-20–T-24 |
| DEC-09 | Definizioni di punteggi/leghe/stagioni, fair play/prestigio/influenza e distinzione zero vs dato mancante | DECISION (D) | Organizzatori + Dottor Q | Data dictionary; blocca T-07, T-11, T-15–T-18 |
| DEC-10 | Conservare il banner attuale e lasciare la sperimentazione V2 sospesa durante la revisione Nick? | **PAUSED** (default: NON toccare artwork/hover V2) | Dottor Q | Eventuale sblocco solo su istruzione esplicita |

**Contatti social già comunicati in chat, da riconfermare prima dell'uso pubblico:** YouTube \`https://www.youtube.com/@incercadiavventura\`, Instagram \`https://www.instagram.com/incercadavventura/\`. Non è stata fornita in questo brief un'email pubblica ufficiale né un servizio newsletter confermato.

## 3. SEQUENZA DI LAVORO / ROADMAP
Le durate sotto sono intervalli di *pianificazione* per una sessione di decisione/implementazione, non scadenze né promesse. L'ordine per gate riduce rifacimenti. Lavoro parallelo possibile solo su sezioni senza dipendenze incrociate.

| Fase / Gate | Task IDs | Input necessari | Output / criterio di uscita | Stima indicativa | Stato |
|---|---|---|---|---|---|
| F0 — Baseline e approvazioni | T-00 + DEC-01…DEC-10 | Brief v2, main rollback | Sitemap, glossario, decision log e baseline condivisi; backlog validato | 1–2 sessioni | IN_PROGRESS (solo roadmap) |
| F1 — Identità e copy P0 | T-01,T-02 | DEC-01,DEC-02 | Copy coerente su homepage/sezioni/footer; regressioni contenuti assenti | 1–2 sessioni | BLOCKED (decisioni) |
| F2 — Architettura navigazione | T-03,T-04 | DEC-03 | Menu/routing approvati, vecchi deep link preservati, prototipo collaudato | 1–3 sessioni | BLOCKED |
| F3 — Homepage nazionale | T-05…T-08 | DEC-04, dati organismi | CTA e moduli utili, corretta attribuzione degli eventi/classifica | 2–4 sessioni | BLOCKED |
| F4 — Alleanze | T-09…T-11 | DEC-05, DEC-08, DEC-09 | Mappa leggibile, filtri intatti, informazioni e contatti verificati | 2–4 sessioni | BLOCKED |
| F5 — Adunanze, Leghe, Cronache | T-12…T-16 | DEC-02,03,06,09 + fonti eventi | Schede identificabili; CTA veritiere; cronache collegate; leghe se approvate | 3–6 sessioni | BLOCKED |
| F6 — Avventurieri e Proclami | T-17…T-20 | DEC-07,09 e dati community | Profili chiari e preservati; pubblicazioni attribuite correttamente | 2–4 sessioni | BLOCKED |
| F7 — Chi siamo, adesione e contatti | T-21…T-24 | DEC-03,07,08 | Informazioni pubbliche verificabili; footer completo; newsletter solo se attiva | 2–3 sessioni | BLOCKED |
| F8 — QA integrato e rilascio | T-25…T-29 | F1–F7 effettivamente approvate | Verifica desktop/responsive, accessibilità, dati, link e accettazione finale | 2–3 sessioni | TODO |
**Non è necessario completare tutte le idee P2 per pubblicare la prima revisione.** Chiudere prima le modifiche R/P0 e il valore visitatore P1; demandare crescita e sistemi editoriali complessi a un backlog successivo.

## 4. REGISTRO ESECUZIONE GRANULARE
Colonne abbreviate: tipo R/P/V/D (come sopra); criterio = evidenza minima per chiusura. Owner predefinito: AI implementa, Dottor Q decide/approva, Nick revisiona contenuti; non sono incarichi già accettati da altre persone.
| ID | Priorità | Tipo | Attività | Dipendenza | Stato iniziale | Criterio di accettazione / evidenza |
|---|---|---|---|---|---|---|
| T-00 | P0 | V | Inventario baseline \`/beta/\`, link e screenshot delle pagine | — | READY | commit/tree, 5 URL e funzioni protette registrati |
| T-01 | P0 | R | Nome, sottotitolo, descrizione nazionale e copy iniziale | DEC-01 | READY | testo approvato presente, nessuna falsa rappresentatività nazionale |
| T-02 | P0 | R/P | Glossario, plurali “alleanze aderenti”, Adunanza ≠ Lega, “Tappa” | DEC-02 | READY | test di coerenza in tutte le sezioni |
| T-03 | P0 | P | Sitemap/menu e orientamento/sezione attiva | DEC-03 | BLOCKED | navigazione e link legacy verificati da ogni pagina |
| T-04 | P1 | P | Tre ingressi Adunanze: In programma / Cronache / Leghe (se approvati) | DEC-03,DEC-06 | BLOCKED | accessi e deep-link stabili |
| T-05 | P1 | P | Hero compatto + 2 CTA Community/Eventi | DEC-04,T-01 | BLOCKED | CTA con destinazioni vere e prime schede visibili |
| T-06 | P1 | P | Prossime adunanze multi-community, ordinamento per data e organizzatore | DEC-04,DEC-09 | BLOCKED | dati e stati veritieri, link al calendario |
| T-07 | P0 | P | Etichettare classifica Top 3 con lega/community/stagione, eventuale link completa | DEC-09 | BLOCKED | no classifica nazionale fittizia, Top 3 esistente intatta |
| T-08 | P1 | P | Anteprima Alleanze in home, attribuzione ultima Cronaca e moduli | DEC-04 | BLOCKED | anteprime non inventate e accesso a sezioni |
| T-09 | P0 | R/V | Ridurre ingombro medaglioni e preservare mappa e filtri | DEC-05 | BLOCKED | punti selezionabili anche vicini, filtri tutti funzionali |
| T-10 | P1 | P | Hover sintetico + click stabile, tastiera/ESC e focus | DEC-05 | BLOCKED | tooltip non si chiude involontariamente; touch senza hover |
| T-11 | P1 | R/P/D | Schede alleanza con tipo/area, contatto verificato e link dedicato se esiste; legenda chiara | DEC-08,09 | BLOCKED | nessun contatto inventato; categorie mercanti corrette |
| T-12 | P0 | P/V | Card evento: organizzatore, nome, tappa se applicabile, CTA iscrizione reale | DEC-02,09 | BLOCKED | Regolamento/Premi/Maps ancora funzionanti; no CTA finta |
| T-13 | P1 | P | Definire e creare scheda lega per serie/stagione e classifica propria, se approvata | DEC-06,09 | BLOCKED | eventi autonomi non forzati in leghe |
| T-14 | P1 | P | Calendario: eventuali filtri area/community/formato | DEC-03,04 | BLOCKED | risultati coerenti senza dati inventati |
| T-15 | P1 | P | Cronache: organizzatore, lega/tappa, URL stabili, link profili/deck/media verificati | DEC-06,09 | BLOCKED | storia eventi e profili preservati |
| T-16 | P1 | V | Audit delle iscrizioni/Google Maps (sede “da definire” non cliccabile) | Fonti eventi | READY | ogni CTA e mappa rispecchia il dato disponibile |
| T-17 | P1 | V/P | Preservare registro, ricerca/carousel/deep-link; riordinare info utili | DEC-09 | BLOCKED | contatore reale, ricerca e deep-link funzionanti |
| T-18 | P1 | P | Chiarire Avatar immagine, record V/P/S, zero/missing, lega/stagione, eventuali community multiple | DEC-09 + dati | BLOCKED | descrizioni comprensibili, nessun falso zero |
| T-19 | P2 | P | Valutare filtri Avventurieri community/città/lega quando i dati esistono | DEC-07,09 | BLOCKED | filtri esistenti non regressi |
| T-20 | P1 | P/D | Proclami plurali e autori; modello pubblicazione governato, archivio futuro separato | DEC-07 | BLOCKED | stato vuoto corretto; niente “pubblica” senza workflow |
| T-21 | P1 | P | Pagina Chi siamo e relazione Nick/Dottor Q/CREMOS; status editore verificato | DEC-03,08 | BLOCKED | testo approvato, contatti e attribuzioni accurati |
| T-22 | P1 | R/D | YouTube, Instagram, email pubblica e footer, SENZA rifare artwork/banner V2 | DEC-08,DEC-10 | BLOCKED | URL reali, keyboard focus e accessibilità |
| T-23 | P1 | P/D | Percorso “Proponi la tua community/negozio” attraverso canale reale | DEC-07,08 | BLOCKED | invito operativo senza promesse non concordate |
| T-24 | P2 | P/D | Newsletter: solo con provider, privacy, flusso reale approvati | DEC-08 | BLOCKED | altrimenti non mostrare iscrizione attiva |
| T-25 | P0 | V | Test regressione sulle funzioni esistenti e accuratezza copy/dati | modifiche funzionali | TODO | report PASS/FAIL e issue per ogni difetto |
| T-26 | P0 | V | QA visuale su desktop 1536/1280/1024/900 e mobile 768/390 | Fasi implementate | TODO | nessun overlap, contenuto e focus leggibili |
| T-27 | P0 | V | QA accessibilità: link, keyboard, popover, contrasto, riduzione movimento | Fasi implementate | TODO | keyboard-only eseguibile |
| T-28 | P0 | V | QA dati: niente 0 impropri, mappa contatti reali, iscrizioni e autore dei risultati | Fasi implementate | TODO | audit lista di dati e loro provenienza |
| T-29 | P0 | V | UAT Dottor Q e Nick; snapshot e rilascio con rollback definito | T-25…T-28 | TODO | approvazione registrata + commit e live URL |

## 5. TEMPLATE DI SCHEDA TASK (duplicare per task attivo)
\`\`\`yaml
id: T-XX
titolo:
stato: TODO|DECISION|READY|IN_PROGRESS|REVIEW|BLOCKED|DONE|PAUSED
tipo: R|P|V|D
owner: IA / Dottor Q / Nick / referente dati
decisioni_richieste: [DEC-XX]
dipendenze: [T-XX]
scope:
fuori_scope:
branch:
pr:
commit:
criteri_di_accettazione:
test_eseguiti:
evidenza_live:
approvazione_Dottor_Q:
ultimo_aggiornamento: YYYY-MM-DD
blocker:
prossima_azione:
\`\`\`
PR piccoli: ideale **una PR per tema verificabile** (es. copy, mappa, schede evento), mai “riscrittura integrale del sito” con molte dipendenze.

## 6. REGISTRO DECISIONI (aggiornare solo dopo approvazione)
| Data | Decisione | Scelta approvata (o “APERTA”) | Motivazione sintetica | Effetti task | Referente |
|---|---|---|---|---|---|
| 2026-09-30 | DEC-10 | **Banner artwork V2 PAUSED**; non toccare asset e hover | richiesto rollback PR #106/#107 | fuori scope di questa roadmap | Dottor Q |
| 2026-09-30 | DEC-01…DEC-09 | APERTE (rispettare le scelte R già presenti nel brief) | serve ratifica del piano attuativo | vedi dipendenze | Dottor Q + Nick |
| 2026-09-30 | DEC-01 — aggiornamento descrizione introduttiva | PROPOSTA DOTTOR Q: “Trova una community vicino a te, partecipa a giostre e leghe e segui le storie dei giocatori italiani.”; ratifica finale DEC-01 ancora aperta | Sostituisce solo “eventi” con “giostre” nel testo proposto da Nick | T-01; coordinare significato con DEC-02 | Dottor Q |
| 2026-09-30 | DEC-01 — ritiro modifica intermedia | FORMULAZIONE CORRENTE: “Trova una community vicino a te, partecipa a eventi e leghe e segui le storie dei giocatori italiani.” | Dottor Q ha ritirato “giostre” e ripristinato “eventi”; approvazione definitiva registrata alla riga successiva | T-01 | Dottor Q |

| 2026-09-30 | DEC-01 — approvazione definitiva | APPROVATI nome, sottotitolo e descrizione introduttiva con “eventi e leghe” (testi esatti nella sezione 2) | Conferma esplicita di Dottor Q (“ok”) dopo ripristino eventi | T-01 READY, ma nessuna implementazione al sito ancora autorizzata | Dottor Q |

| 2026-09-30 | DEC-02 — approvazione definitiva | APPROVATI integralmente il vocabolario del brief e le precisazioni su Tappa/Duello e chiarezza operativa; testo completo nella sezione 2 | Conferma esplicita di Dottor Q | T-02 READY; T-12 resta vincolato a DEC-09 | Dottor Q |

## 7. DIARIO / CHANGELOG OPERATIVO (aggiungere una riga per sessione)
| Data | Cosa è accaduto | PR/commit | Stato test/deployment | Decisione/approvazione | Prossimo intervento |
|---|---|---|---|---|---|
| 2026-09-30 | Creato master di roadmap/tracking dai requisiti di Nick. Nessuna modifica al sito. | Documento docs/ICA_NICK_ROADMAP_MASTER.md | sito non alterato dall'introduzione del documento | DEC-01…09 aperte alla creazione; DEC-10 paused | affrontare DEC-01, DEC-02 e DEC-03, poi DEC-04/05 |
| 2026-09-30 | Registrata proposta DEC-01 di Dottor Q: descrizione con “giostre e leghe” anziché “eventi e leghe”. Solo aggiornamento roadmap. | docs/ICA_NICK_ROADMAP_MASTER.md | sito invariato; nessun test applicativo richiesto | DEC-01 attende conferma globale | Confermare nome, sottotitolo e frase, poi aprire DEC-02 |
| 2026-09-30 | Ritirata variante “giostre”: ripristinato “eventi e leghe” nella proposta corrente DEC-01. Solo documentazione. | docs/ICA_NICK_ROADMAP_MASTER.md | sito invariato | DEC-01 da confermare globalmente | Concludere DEC-01, poi DEC-02 |

| 2026-09-30 | DEC-01 approvata integralmente da Dottor Q: nome, sottotitolo e frase introduttiva con “eventi e leghe”. T-01 passa a READY; nessun file applicativo modificato. | Solo docs/ICA_NICK_ROADMAP_MASTER.md | Nessuna modifica live né QA applicativo | DEC-01 APPROVED | Affrontare DEC-02 lessico comune |

| 2026-09-30 | DEC-02 approvata integralmente; aggiunto glossario canonico. T-02 passa a READY; non applicata alcuna modifica alle pagine. | Solo docs/ICA_NICK_ROADMAP_MASTER.md | Nessuna modifica live né QA applicativo | DEC-01 e DEC-02 APPROVED; DEC-03 aperta | Discutere menu e organizzazione di Adunanze, Cronache, Leghe in DEC-03 |

## 8. HANDOFF OBBLIGATORIO ALLA NUOVA CHAT
**Prompt da incollare:**
> Riprendiamo il progetto In cerca d'avventura. Prima di proporre modifiche leggi il documento canonico GitHub \`docs/ICA_NICK_ROADMAP_MASTER.md\` su \`DrQ69/in-cerca-di-avventura/main\` e il brief di Nick v2.0 (30/09/2026). Verifica HEAD GitHub, PR aperte, diario e stati dei task; produci un report “completato / in corso / bloccato / prossima decisione”, senza inventare progressi. Non modificare il sito prima della mia conferma sulla decisione o task da attivare. Rispetta la sospensione del nuovo banner V2 e preserva i componenti già funzionanti. Ogni modifica passa per branch/PR, QA, verifica live, approvazione e aggiornamento del master. Partiamo dal primo gate decisionale ancora aperto.

**Sequenza minima di ripresa per l'agente:**
1. Leggere il master *da main* (non una vecchia copia allegata) e il brief v2.0; verificare che il link sia raggiungibile. Se non accessibile, chiedere copia aggiornata; non ricostruire gli stati a memoria.
2. Controllare HEAD di main, PR attive, ultimi workflow e confrontare con il diario; dichiarare discrepanze.
3. Riassumere in massimo 10 righe: ultimo DONE con prova, task IN_PROGRESS/REVIEW, blocker, decisione da risolvere, next action.
4. Ottenere approvazione esplicita per attivare un P o un D non risolto; procedere sul task minimo indipendente.
5. In PR aggiornare questo documento (task + decision log + diario + SHA/QA). Dopo il merge verificare live e correggere a DONE solo con evidenza.

## 9. RIFERIMENTI PER VERIFICA
- Brief di Nick: file originale “In_cerca_davventura_Brief_modifiche_sito.txt”, v2.0 (30/09/2026), conservare allegato alla nuova chat se necessario.
- GitHub: https://github.com/DrQ69/in-cerca-di-avventura
- Beta di progetto: https://drq69.github.io/in-cerca-di-avventura/beta/
- Alleanze: https://drq69.github.io/in-cerca-di-avventura/beta/alleanze/
- Adunanze: https://drq69.github.io/in-cerca-di-avventura/beta/adunanze/nazionale/
- Cronache: https://drq69.github.io/in-cerca-di-avventura/beta/cronache/
- Avventurieri: https://drq69.github.io/in-cerca-di-avventura/beta/avventurieri/
- Esperimento banner /beta-v2/: in pausa, nessuna attività autorizzata in questo piano.
- PR archiviate: #106 artwork, #107 correzione lettering/root, #108 rollback.
