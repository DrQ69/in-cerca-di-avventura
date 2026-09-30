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

### DEC-03 — ARCHITETTURA DI NAVIGAZIONE APPROVATA (30/09/2026)
Menu principale, in quest'ordine:
1. **Adunanze**
2. **Avventurieri**
3. **Alleanze**
4. **Proclami**
5. **Chi siamo**

Dentro **Adunanze** (tre accessi): **In programma** (eventi futuri e in corso), **Cronache** (eventi conclusi e risultati), **Leghe** (competizioni e relative stagioni, calendari e classifiche). La voce Cronache non compare più al primo livello della futura navigazione, ma **l'URL storico `/beta/cronache/` resta valido**. Preservare ugualmente gli URL profondi di Adunanze, Alleanze e Avventurieri. Proclami può mantenere inizialmente l'ancoraggio alla homepage in attesa delle decisioni editoriali; la modalità esatta della voce Chi siamo verrà definita nel suo task. **Non toccare il nuovo artwork/header `/beta-v2/`: DEC-10 PAUSED.** La scelta è approvazione architetturale; nessun file del sito è stato ancora modificato. L'esecuzione di Leghe richiede DEC-06 (modello dati/pagine).

### DEC-06 — ARCHITETTURA ADUNANZE / LEGHE: DEC-06.1–DEC-06.5 APPROVATE (30/09/2026)

**DEC-06.1 APPROVATA da Dottor Q — Variante della Soluzione C:** la pagina **Adunanze è il punto di accesso centrale a tutti gli appuntamenti** futuri, in corso e conclusi, comprendendo eventi autonomi, Giostre, Leghe e rispettive Tappe. In Adunanze è presente un'**area Leghe con schede espandibili nella stessa pagina**: non creare inizialmente una pagina autonoma per ogni Lega. Aprendo una scheda si consultano calendario delle tappe, risultati e classifica della competizione, con dati condivisi con le altre viste; la scheda di riferimento è **Blaze of Glory — La Lega di Cremos**, stagione 2026/2027, **Organizzatore: In Cerca di Avventura**. La Top 3 di Blaze of Glory sarà nella relativa area Leghe, NON come classifica nazionale o blocco homepage. Il CTA homepage «Scopri la Lega» continua a puntare alla pagina Adunanze come già approvato in DEC-04.4a.

**Relazioni semantiche (DEC-02 preservata):** Lega = competizione contenitore di più eventi e una stagione; Tappa = singola Adunanza collegata a una Lega; Giostra = evento che può essere autonomo o appartenere a una Lega; Cronaca = testimonianza di un evento concluso. Una Tappa appare sia nel calendario generale delle Adunanze sia nel dettaglio della propria Lega, senza creare copie divergenti dei dati. Conservare la pagina/archivio Cronache e i link profondi storici. L'eventuale adozione futura di pagine singole per Lega è una decisione separata, non inclusa in questa approvazione.

**DEC-06.2 APPROVATA da Dottor Q:** ciascuna scheda Lega, espandibile nella pagina Adunanze, presenta **quattro blocchi in quest'ordine**: (1) **Presentazione** — sintesi della competizione e regolamento generale; (2) **Calendario delle Tappe** — eventi ordinati cronologicamente con data, luogo, formato e stato; per Blaze of Glory sono previste otto Tappe, da visualizzare con soli dati confermati; (3) **Classifica della Lega** — graduatoria dedicata e accesso ai risultati completi, includendo qui la Top 3 Blaze of Glory tolta dalla homepage; (4) **Archivio della Lega** — link alle Cronache delle Tappe concluse, evitando copie dei contenuti. Intestazione della scheda di riferimento: **Blaze of Glory — La Lega di Cremos · 2026/2027**, **Organizzatore: In Cerca di Avventura**. Non creare una pagina autonoma per ciascuna Lega. La scelta approva l'organizzazione dei quattro blocchi, non regole di punteggio o modalità operative non ancora definite.

**DEC-06.3 APPROVATA — Soluzione A (30/09/2026):** comportamento delle schede Lega come **accordion a espansione esclusiva**: può rimanere aperta una sola Lega alla volta; aprendo la scheda di un'altra Lega, quella precedentemente espansa si richiude automaticamente. Una Lega espansa deve poter essere richiusa. Funzionamento coerente su desktop e smartphone, con comandi semantici utilizzabili da tastiera e attributi di stato per accessibilità. Questa approvazione NON decide quale scheda sia inizialmente aperta né introduce automaticamente nuove voci di navigazione.

**DEC-06.4 APPROVATA — Soluzione A (30/09/2026):** quando il visitatore apre la sezione Leghe nella pagina Adunanze, **tutte le schede Lega sono inizialmente chiuse**. L'utente sceglie esplicitamente quale aprire. Resta valida DEC-06.3: al massimo una scheda espansa contemporaneamente, aprirne un'altra richiude la precedente; è possibile richiudere quella aperta e tornare allo stato con tutte le schede chiuse. L'apertura mediante link diretto a una specifica Lega (se introdotta) andrà definita come eccezione di navigazione in una decisione successiva, non è implicita in DEC-06.4.

**DEC-06.5 APPROVATA — Soluzione A (30/09/2026):** nel blocco **Calendario delle Tappe** di una Lega espansa utilizzare un **elenco sintetico**, non schede evento complete. **Una riga per Tappa**, con numero, nome, data, luogo, formato e stato ricavati dalla singola fonte dati degli eventi. **L'intera riga è cliccabile** e conduce alla relativa Adunanza con i dettagli operativi completi; preservare i collegamenti profondi e garantire accessibilità anche da tastiera. Ordinare cronologicamente. Se un dato non è disponibile, non inventarlo. Le Tappe continuano ad apparire nel calendario generale Adunanze e nel calendario della Lega senza duplicare schede/dati. In DEC-06.5 non è stata approvata una vista espansa con regolamento e descrizione completi per ogni Tappa.

**Dettagli ancora APERTI (DEC-06.6+):** disposizione su desktop/mobile, stati vuoti, eventuale selezione tramite link profondo e regole di classifica/dati (DEC-09). Le quattro etichette «In programma / In corso / Concluse / Leghe» illustrate nel wireframe DEC-06.1 sono un'ipotesi di filtro/interfaccia, NON una modifica automatica degli ingressi di navigazione DEC-03 già approvati («In programma / Cronache / Leghe»): verificare e far approvare eventuale distinzione prima di cambiare la sitemap. **Nessuna modifica del sito in questa fase.**

### DEC-04 — STRUTTURA E ORDINE APPROVATI, DETTAGLI DEI MODULI APERTI (30/09/2026)
Dottor Q sceglie la **homepage nazionale proposta da Nick**, con questi moduli nell'ordine di riferimento del brief (ancora da precisare nei dettagli): intestazione/menu/social; presentazione del progetto con testi DEC-01 e CTA; prossime Adunanze; trova una Community/anteprima Alleanze; Leghe in corso (quando ci sono dati adeguati); Proclami e selezione Cronache; eventuale anteprima secondaria Avventurieri; Chi siamo/invito adesione; newsletter soltanto se attiva; footer.
**Scelta specifica approvata:** la Top 3 Blaze of Glory NON resta come blocco autonomo della homepage: va nella **sezione Leghe**, dove deve essere etichettata per la lega CREMOS pertinente, senza attribuzione nazionale impropria. Conservare feed/dati funzionanti; non cancellare la logica solo per spostare il punto di visualizzazione. La realizzazione della sezione Leghe dipende da DEC-06 e la semantica della classifica da DEC-09.
**DEC-04.2 APPROVATA:** la homepage mostra **fino a 3 prossime Adunanze**, selezionate dai soli eventi futuri realmente disponibili e ordinate per data crescente, con accesso al calendario completo. Con 1 o 2 eventi non mostrare slot fittizi; con nessun evento utilizzare uno stato vuoto chiaro e collegamento alla sezione Adunanze/Alleanze. Ogni anteprima deve identificare la community organizzatrice quando il dato è verificato. Questa è una specifica di progetto, NON una funzione già implementata.
**Vincolo aggiunto da Dottor Q:** PER ORA NON MODIFICARE la pagina esistente **/beta/alleanze/** né i suoi asset, filtri, mappa, medaglioni, dati o comportamento. F4 e i task T-09–T-11 passano a PAUSED. **DEC-04.3 REVISIONATA E APPROVATA da Dottor Q:** adottare **Soluzione A — Tre schede Alleanza in homepage**, al posto della precedente soluzione con il solo pulsante. Usare le tre realtà pilota già censite (Il Regno di Cremos, Team Void, Ordinary Mortals), con logo esistente, nome e città/area verificata; includere un accesso chiaro «Esplora le Alleanze» alla pagina esistente `/beta/alleanze/`. Non introdurre anteprima della mappa né carosello. La pagina di destinazione non va modificata. La normale navigazione/URL esistente va preservata.
**DEC-04.4 — ordine APPROVATO, contenuti NON APPROVATI:** Dottor Q conferma l'ordine delle sezioni residue nella homepage: 05 Leghe in corso; 06 Proclami; 07 Cronache; 08 Avventurieri; 09 Chi siamo; 10 Footer. La struttura iniziale completa resta: 01 Header; 02 Presentazione del Reame (DEC-01); 03 Prossime Adunanze (DEC-04.2); 04 Alleanze (DEC-04.3, tre schede); poi 05–10 nell'ordine indicato. **Discutere INDIVIDUALMENTE contenuti, quantità di card, CTA e stati vuoti di ognuna delle sezioni residue, a partire da DEC-04.4a Leghe in corso.** Non considerare approvati i dettagli quantitativi o contenutistici presentati nella proposta dell'assistente (es. tre Proclami, due Cronache), perché l'utente ha approvato soltanto l'ordine. La sezione Leghe e la Top 3 restano condizionate alla successiva DEC-06.
**DEC-04.4a — APPROVATA (Soluzione A corretta da Dottor Q):** la sezione **Leghe in corso** della homepage usa schede sintetiche per le leghe realmente attive, senza riempitivi fittizi. Prima scheda identificata come **Blaze of Glory — La Lega di Cremos** (scrivere **Cremos**, mai “CREMOS” in questo contesto), stagione 2026/2027 se confermata nei dati, con campo **Organizzatore: In Cerca di Avventura** (esatta dicitura richiesta da Dottor Q; non sostituirla con Cremos). Il pulsante **“Scopri la Lega”** punta alla pagina **Adunanze** esistente `/beta/adunanze/nazionale/` (nell'implementazione V2 usare il percorso equivalente appropriato), **non** a una pagina Lega ipotetica. Il contenuto della card può mostrare il calendario delle tappe se verificato. **Top 3 Blaze of Glory** rimane destinata alla futura sezione Leghe secondo DEC-04 iniziale; la scheda in homepage non riproduce la classifica. DEC-06 definirà l'eventuale pagina Lega in futuro senza cambiare implicitamente il link approvato per la card. Questa decisione vale per la presentazione della homepage, non modifica la pagina Adunanze né l'attribuzione storica nei dati degli eventi.
**DEC-04.4b — APPROVATA (30/09/2026):** la sezione **Proclami** della homepage mostra **un solo elemento: l'ultima notizia effettivamente pubblicata, la più recente per data**. Non mostrare una lista di tre annunci né contenuti in bozza o futuri. Conservare i dati esistenti; se non vi sono Proclami pubblicati, usare un messaggio sintetico e veritiero, senza scheda fittizia. Dettagli editoriali/autore/archivio restano dipendenti da DEC-07 e dalla futura definizione Proclami. Questa è approvazione della quantità, non modifica applicativa.
**DEC-04.4c — APPROVATA (30/09/2026):** la sezione **Cronache** della homepage mostra **una sola anteprima: l'ultima Cronaca**, corrispondente all'evento concluso più recente tra quelli con data verificata. Conservare le informazioni effettivamente disponibili e un collegamento alla pagina Cronache già esistente `/beta/cronache/`. Se non esistono eventi conclusi con data verificata, usare uno stato vuoto chiaro senza creare cronache fittizie. Il dettaglio di attribuzione community/lega/tappa rimane oggetto dei task Cronache. Questa è approvazione della quantità e non una modifica applicativa.
**DEC-04.4d — APPROVATA (30/09/2026):** sezione **Avventurieri** della homepage con **Soluzione A modificata da Dottor Q**: anteprima di tre schede giocatore con **immagine, nickname e community** (quest'ultima solo quando verificata/disponibile). **NON inserire** il pulsante generale “Esplora gli Avventurieri”. **L'intera scheda di ciascun Avventuriero è cliccabile** e apre la pagina Avventurieri sul profilo corrispondente tramite il collegamento profondo già gestito da `/beta/avventurieri/?player=PLY-XXXX`, con identificativo ricavato dai dati effettivi del giocatore (non inventato). **Criterio di selezione APPROVATO in integrazione a DEC-04.4d:** rotazione automatica periodica dei tre profili fra gli Avventurieri effettivamente disponibili, evitando duplicati simultanei. La cadenza specifica (es. giornaliera/settimanale) non è stata richiesta né approvata: definirla in una fase tecnica successiva prima dell'implementazione. Nessuna scelta manuale permanente né estrazione nuova a ogni caricamento. Non inventare appartenenze. Preservare ricerca, paginazione e deep-link attuali. Questa è approvazione della struttura, NON una modifica applicativa.
**DEC-04.4e — APPROVATA (30/09/2026):** per la sezione **Chi siamo** della homepage adottare **Soluzione C — «Entra a far parte del Reame»**: breve presentazione del progetto In cerca d'avventura con invito a community, organizzatori e mercanti a partecipare; **due accessi distinti** con etichette **«Chi siamo»** (pagina informativa dedicata) e **«Unisciti al Reame»** (percorso di adesione da definire/verificare con DEC-08 e T-23). Non inventare form, endpoint, email, procedura di registrazione o promessa di adesione operativa finché la destinazione reale non è concordata; la decisione approva l'impostazione UX e i testi dei due accessi, non l'attivazione automatica di un servizio inesistente. Il testo integrale della pagina Chi siamo resta da definire in T-21.
**DEC-04.4f — APPROVATA (30/09/2026):** footer **permanente e comune a tutte le pagine**, suddiviso in tre aree: **Navigazione** (Adunanze, Avventurieri, Alleanze, Proclami, Chi siamo); **Il Reame** (Unisciti al Reame, Contattaci); **Seguici** (YouTube, Instagram). Includere il nome del progetto «In cerca d'avventura» e una riga descrittiva conclusiva. Usare esclusivamente URL, social e canali pubblici verificati; introdurre Privacy Policy e Cookie Policy quando esistono contenuti reali pertinenti. Non inventare link, indirizzi o testi legali. Preservare l'artwork/banner esistente (DEC-10 PAUSED). La struttura del footer è approvata, mentre link pubblici, gestione adesioni e questioni privacy restano subordinati a DEC-08 e ai task pertinenti.
**DEC-04 — STRUTTURA HOMEPAGE APPROVATA:** ordine, quantità e impostazione di tutti i moduli da DEC-04.2 a DEC-04.4f sono stati concordati. **IMPLEMENTAZIONE ANCORA NON AVVIATA / CONDIZIONATA** a verifiche dati, link e decisioni trasversali (inclusi DEC-06, DEC-07, DEC-08, DEC-09). Restano dettagli tecnici non strutturali, tra cui la cadenza esatta della rotazione periodica degli Avventurieri. Non alterare pagina Alleanze né artwork/banner V2 senza nuovo via libera.

## 2. GATE DECISIONALI (nessuna PR funzionale prima delle decisioni pertinenti)
| ID | Scelta da compiere | Stato | Referente | Output richiesto / blocca |
|---|---|---|---|---|
| DEC-01 | Nome APPROVATO: “In cerca d'avventura”. Sottotitolo APPROVATO: “Il reame delle community italiane di Sorcery: Contested Realm”. Descrizione APPROVATA: “Trova una community vicino a te, partecipa a eventi e leghe e segui le storie dei giocatori italiani.” La grafia del logo fisico è una verifica separata, senza rielaborare il banner sospeso. | **APPROVED** (Dottor Q, 30/09/2026) | Dottor Q | T-01 sbloccata sul copy; applicazione alle pagine ancora non eseguita |
| DEC-02 | APPROVATO integralmente il vocabolario del brief: Reame, Avventuriero, Alleanza, Community, Mercante, Adunanza, Lega, Tappa, Cronaca, Proclama, Patto; per le tappe privilegiare “Tappa II” anziché “Duello II” (ferme eventuali denominazioni narrative proprie, accompagnate dall'indicazione Tappa); mantenere esplicite le informazioni operative. | **APPROVED** (Dottor Q, 30/09/2026) | Dottor Q | T-02 READY; T-12 ancora BLOCKED da DEC-09 e fonti evento; nessuna modifica al sito |
| DEC-03 | APPROVATO menu principale: Adunanze / Avventurieri / Alleanze / Proclami / Chi siamo; dentro Adunanze: In programma / Cronache / Leghe. Gli URL esistenti devono restare funzionanti. Questo approva l'architettura, non riapre l'artwork/banner V2 sospeso. | **APPROVED** (Dottor Q, 30/09/2026) | Dottor Q | T-03 READY; T-04 dipende ancora da DEC-06 per dati e struttura della sezione Leghe; T-10 appartiene alla mappa e non è dipendente da DEC-03 |
| DEC-04 | APPROVAZIONE PARZIALE: homepage nazionale secondo Nick; Top 3 Blaze of Glory trasferita dalla homepage alla sezione Leghe con attribuzione corretta. **DEC-04.2 APPROVATA:** fino a tre prossime Adunanze reali, in ordine cronologico, senza card fittizie se meno di tre, con link calendario completo. **DEC-04.3 REVISIONATA E APPROVATA:** in homepage tre schede Alleanza (Soluzione A: CREMOS, Team Void, Ordinary Mortals, con logo/nome/città e accesso alla pagina corrente), anziché il solo tasto. **DEC-04.4 ORDINE APPROVATO:** 05 Leghe in corso, 06 Proclami, 07 Cronache, 08 Avventurieri, 09 Chi siamo, 10 Footer. **DEC-04.4a APPROVATA:** sezione Leghe con card sintetiche (Soluzione A); prima scheda Blaze of Glory — La Lega di Cremos, Organizzatore: In Cerca di Avventura; CTA «Scopri la Lega» verso /beta/adunanze/nazionale/. **DEC-04.4b APPROVATA:** Proclami in homepage = solo ultima notizia pubblicata per data, non tre. **DEC-04.4c APPROVATA:** Cronache in homepage = soltanto ultima Cronaca fra eventi conclusi con data verificata, con accesso all'archivio; non due/tre anteprime. **DEC-04.4d APPROVATA:** tre schede Avventurieri (immagine/nickname/community se verificata), ciascuna cliccabile verso proprio profilo nella pagina Avventurieri, senza CTA generale. **Criterio integrativo APPROVATO:** rotazione automatica periodica dei tre profili, con frequenza ancora da definire; non a ogni caricamento. **DEC-04.4e APPROVATA:** sezione Chi siamo in homepage = Soluzione C «Entra a far parte del Reame», breve presentazione/invito ad aderire e due CTA «Chi siamo» e «Unisciti al Reame»; percorso di adesione subordinato a DEC-08/T-23. **DEC-04.4f APPROVATA:** footer comune in tre aree Navigazione (5 voci), Il Reame (Unisciti al Reame, Contattaci), Seguici (YouTube, Instagram), con identificazione progetto e collegamenti legali quando verificati. Struttura DEC-04 completa; restano dipendenze applicative (DEC-06–09, dati e link) e rotazione Avventurieri da parametrizzare. | **APPROVED — struttura homepage completa, implementazione condizionata** (Dottor Q, 30/09/2026) | Dottor Q | T-05–T-08 possono essere pianificati sulle specifiche approvate; implementazione vincolata a verifica dati, URL e DEC trasversali |
| DEC-05 | Mappa: dimensione marker e comportamento tooltip/click, se e quando prevedere cluster/elenco geografico. **SOSPESA da Dottor Q: pagina /beta/alleanze/ invariata per ora.** | **PAUSED** (non avviare revisioni senza nuovo via libera) | Dottor Q + Nick | T-09–T-11 PAUSED; nessun intervento sulla pagina o sugli asset |
| DEC-06 | **DEC-06.1 APPROVED:** pagina Adunanze centrale per appuntamenti futuri/in corso/conclusi (Lega/Tappa/Giostra/evento autonomo); area Leghe con schede espandibili in pagina, senza pagina dedicata per ogni Lega; Tappe collegate a una sola fonte dati, Cronache storiche preservate. **DEC-06.2 APPROVED:** scheda espansa articolata in Presentazione / Calendario delle Tappe / Classifica della Lega (con Top 3) / Archivio delle Cronache collegate. **DEC-06.3 APPROVED (Soluzione A):** espansione esclusiva, una sola scheda Lega aperta alla volta, apertura di un'altra richiude la precedente. **DEC-06.4 APPROVED (Soluzione A):** tutte le schede Lega inizialmente chiuse all'ingresso nella sezione; l'utente sceglie quale espandere. **DEC-06.5 APPROVED (Soluzione A):** calendario Tappe in elenco sintetico, una riga cliccabile per Tappa con numero/nome/data/luogo/formato/stato, collegata alla propria Adunanza senza replicarne la card completa. Disposizione, dati e filtri esatti ancora da definire senza sovrascrivere DEC-03. | **PARTIALLY APPROVED** (Dottor Q, 30/09/2026) | Dottor Q + Nick | T-13 struttura a quattro blocchi, accordion esclusivo e stato iniziale chiuso approvati; build vincolata ai dettagli DEC-06.6/DEC-09; T-04/T-15 da allineare |
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
| F2 — Architettura navigazione | T-03,T-04 | DEC-03 APPROVED; DEC-06 ancora aperta per la scheda Leghe | Menu/routing approvati, vecchi deep link preservati, prototipo collaudato; nessuna modifica al banner V2 | 1–3 sessioni | READY (T-03), BLOCKED parzialmente (T-04) |
| F3 — Homepage nazionale | T-05…T-08 | DEC-04 struttura APPROVED; dati/URL e DEC-06–09 ancora aperte | CTA e moduli utili, corretta attribuzione degli eventi/classifica | 2–4 sessioni | SPEC APPROVED / BUILD BLOCKED da dipendenze trasversali |
| F4 — Alleanze | T-09…T-11 | DEC-05, DEC-08, DEC-09; sospensione esplicita Dottor Q | NON MODIFICARE pagina /beta/alleanze/ finché non riaperta | Da ripianificare | **PAUSED** |
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
| T-03 | P0 | P | Sitemap/menu e orientamento/sezione attiva, senza modifiche all'artwork V2 | DEC-03 | READY | navigazione e link legacy verificati da ogni pagina |
| T-04 | P1 | P | Tre ingressi Adunanze DEC-03 APPROVATI: In programma / Cronache / Leghe. DEC-06.1 aggiunge area Leghe con schede espandibili NELLA pagina Adunanze e calendario unico per eventi/tappe, senza singole pagine Lega; etichette filtro/stato del wireframe da approvare separatamente | DEC-03 e DEC-06.1 approvate; DEC-06.2 e modelli dati ancora aperti | BLOCKED (architettura parziale approvata) | link legacy stabili; non modificare tacitamente sitemap DEC-03 |
| T-05 | P1 | P | Hero compatto + 2 CTA Community/Eventi | DEC-04,T-01 | BLOCKED | CTA con destinazioni vere e prime schede visibili |
| T-06 | P1 | P | Homepage: massimo 3 Prossime Adunanze reali, ordinamento per data crescente; meno di 3 = sole card esistenti; link calendario; community organizzatrice se verificata | DEC-04.2 APPROVED, DEC-04 complessiva e DEC-09 ancora aperte | BLOCKED (specifica DEC-04.2 definita) | dati e stati veritieri, link al calendario |
| T-07 | P0 | P | Trasferire Top 3 Blaze of Glory dalla homepage all'area Leghe ESPANDIBILE in Adunanze (DEC-06.1), attribuendo correttamente competizione/stagione; preservare feed dati e approfondimento classifica | DEC-04 e DEC-06.1 APPROVED; DEC-09 ancora aperta | BLOCKED | no classifica nazionale fittizia; nessun blocco Top 3 homepage; dati esistenti preservati |
| T-08 | P1 | P | Homepage: tre schede Alleanze pilota come DEC-04.3; Leghe in corso con schede sintetiche come DEC-04.4a (Blaze of Glory — La Lega di Cremos; Organizzatore: In Cerca di Avventura; «Scopri la Lega» verso /beta/adunanze/nazionale/); solo ultima Cronaca conclusa con data verificata come DEC-04.4c, link archivio; tre schede Avventurieri cliccabili a profilo come DEC-04.4d, senza pulsante generale, in rotazione automatica periodica (cadenza da definire); Chi siamo Soluzione C come DEC-04.4e, due CTA «Chi siamo» e «Unisciti al Reame» (adesione condizionata a DEC-08/T-23); Footer comune su tre aree come DEC-04.4f | DEC-04 struttura APPROVED; DEC-04.3 e DEC-04.4a–f APPROVED; dati/link e DEC trasversali ancora aperti; pagina /beta/alleanze/ PAUSED e intoccabile | BLOCKED (specifiche parziali definite) | 3 schede Alleanze con dati reali, nessuna modifica pagina Alleanze; card Leghe senza Top 3; URL Adunanze corretto; dati Cronache non inventati; deep-link Avventurieri a profilo corretto |
| T-09 | P0 | R/V | Ridurre ingombro medaglioni e preservare mappa e filtri | DEC-05; pagina Alleanze sospesa | PAUSED | punti selezionabili anche vicini, filtri tutti funzionali |
| T-10 | P1 | P | Hover sintetico + click stabile, tastiera/ESC e focus | DEC-05; pagina Alleanze sospesa | PAUSED | tooltip non si chiude involontariamente; touch senza hover |
| T-11 | P1 | R/P/D | Schede alleanza con tipo/area, contatto verificato e link dedicato se esiste; legenda chiara | DEC-08,09; pagina Alleanze sospesa | PAUSED | nessun contatto inventato; categorie mercanti corrette |
| T-12 | P0 | P/V | Card evento: organizzatore, nome, tappa se applicabile, CTA iscrizione reale | DEC-02,09 | BLOCKED | Regolamento/Premi/Maps ancora funzionanti; no CTA finta |
| T-13 | P1 | P | Schede Lega ESPANDIBILI A ESPANSIONE ESCLUSIVA (DEC-06.3 Soluzione A: una sola aperta; aprirne un'altra chiude la precedente; DEC-06.4 Soluzione A: inizialmente tutte chiuse) nella pagina Adunanze, senza pagine singole; DEC-06.2 APPROVED quattro blocchi nell'ordine: Presentazione; Calendario Tappe come ELENCO SINTETICO (DEC-06.5: riga cliccabile per numero/nome/data/luogo/formato/stato verso relativa Adunanza); Classifica della Lega (Top 3 e risultati completi); Archivio con link a Cronache concluse | DEC-06.1–DEC-06.5 APPROVED; DEC-06.6 per ulteriori aspetti UX e DEC-09 per dati/punteggi aperte | BLOCKED (struttura definita) | evento autonomo non forzato in Lega; singola fonte eventi; nessuna Cronaca duplicata; righe Tappa cliccabili anche da tastiera; schede accessibili da tastiera/mobile |
| T-14 | P1 | P | Calendario generale Adunanze per eventi futuri, in corso e conclusi; Tappe delle Leghe appaiono anche nel calendario dalla stessa fonte dati; filtri area/community/formato e stato da definire | DEC-03, DEC-06.1 APPROVED; dettagli filtro e DEC-09 aperti | BLOCKED (principio calendario unificato definito) | risultati coerenti senza duplicazioni o dati inventati |
| T-15 | P1 | P | Cronache: organizzatore, lega/tappa, URL stabili, link profili/deck/media verificati | DEC-06,09 | BLOCKED | storia eventi e profili preservati |
| T-16 | P1 | V | Audit delle iscrizioni/Google Maps (sede “da definire” non cliccabile) | Fonti eventi | READY | ogni CTA e mappa rispecchia il dato disponibile |
| T-17 | P1 | V/P | Preservare registro, ricerca/carousel/deep-link; riordinare info utili | DEC-09 | BLOCKED | contatore reale, ricerca e deep-link funzionanti |
| T-18 | P1 | P | Chiarire Avatar immagine, record V/P/S, zero/missing, lega/stagione, eventuali community multiple | DEC-09 + dati | BLOCKED | descrizioni comprensibili, nessun falso zero |
| T-19 | P2 | P | Valutare filtri Avventurieri community/città/lega quando i dati esistono | DEC-07,09 | BLOCKED | filtri esistenti non regressi |
| T-20 | P1 | P/D | Homepage Proclami: mostrare soltanto l'ultima notizia effettivamente pubblicata per data (DEC-04.4b APPROVED), con stato vuoto corretto; autori e modello di pubblicazione governato, archivio futuro separato | DEC-04.4b APPROVED; DEC-07 ancora aperta per processo editoriale | BLOCKED (quantità/criterio homepage definiti) | mai tre annunci in homepage; nessuna bozza/futuro spacciato per pubblicato; niente “pubblica” senza workflow |
| T-21 | P1 | P | Pagina Chi siamo e relazione Nick/Dottor Q/CREMOS; status editore verificato | DEC-03,08 | BLOCKED | testo approvato, contatti e attribuzioni accurati |
| T-22 | P1 | R/D | Footer comune DEC-04.4f: Navigazione (Adunanze, Avventurieri, Alleanze, Proclami, Chi siamo); Il Reame (Unisciti al Reame, Contattaci); Seguici (YouTube, Instagram); nome progetto, riga descrittiva, link legali soltanto se disponibili. Verificare email pubblica e URL; SENZA rifare artwork/banner V2 | DEC-04.4f APPROVED; DEC-08 e DEC-10 da rispettare | BLOCKED (struttura definita; destinazioni/link ancora da validare) | URL reali, keyboard focus e accessibilità; nessuna pagina o policy inventata |
| T-23 | P1 | P/D | Percorso reale di adesione collegato alla CTA homepage «Unisciti al Reame» (DEC-04.4e): invito a community, organizzatori e mercanti; canale e contenuti da verificare, senza form/email inventati | DEC-04.4e APPROVED come UX; DEC-07,08 ancora aperte | BLOCKED | invito operativo senza promesse non concordate; destinazione CTA verificata |
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

| 2026-09-30 | DEC-03 — approvazione definitiva | Menu principale: Adunanze, Avventurieri, Alleanze, Proclami, Chi siamo; Adunanze: In programma / Cronache / Leghe; mantenere gli URL esistenti e il banner V2 sospeso | Conferma esplicita di Dottor Q | T-03 READY; T-04 parzialmente BLOCKED su DEC-06 | Dottor Q |

| 2026-09-30 | DEC-04 — struttura nazionale e ricollocazione Top 3 | APPROVATO: usare la struttura nazionale di Nick; Top 3 Blaze of Glory nella sezione Leghe, non più in homepage. Dettagli ancora aperti: numero eventi, anteprima Alleanze e moduli | Conferma esplicita di Dottor Q | T-05–T-08 ancora BLOCKED finché si conclude DEC-04; T-07 dipende anche da DEC-06 e DEC-09 | Dottor Q |

| 2026-09-30 | DEC-04.2 — numero eventi in homepage | APPROVATE massimo tre prossime Adunanze reali, ordinate per data; meno di tre = mostrare solo le disponibili, nessun segnaposto; collegamento calendario completo | Conferma esplicita di Dottor Q | Specifica T-06 definita, implementazione ancora BLOCKED da DEC-04 completa/DEC-09 | Dottor Q |

| 2026-09-30 | Sospensione della pagina Alleanze | Dottor Q: “per ora la pagina delle Alleanze non viene modificata”. F4, DEC-05, T-09–T-11 PAUSED; DEC-04.3 sulla homepage ancora aperta e separata | Istruzione esplicita Dottor Q | Nessuna modifica applicativa; preservare /beta/alleanze/ integralmente | Dottor Q |

| 2026-09-30 | DEC-04.3 — accesso Alleanze in homepage | APPROVATO solo tasto etichettato esattamente “Alleanze”, collegato alla pagina attuale; nessuna anteprima o modifica della pagina di destinazione | Conferma esplicita Dottor Q | T-08 aggiornato parzialmente; F4/DEC-05/T-09–11 rimangono PAUSED | Dottor Q |

| 2026-09-30 | DEC-04.3 — revisione della scelta precedente | Dottor Q ritira la soluzione “solo tasto Alleanze” e APPROVA la Soluzione A: tre schede Alleanza in homepage (CREMOS, Team Void, Ordinary Mortals), con logo/nome/città e accesso alla pagina Alleanze; non alterare /beta/alleanze/ | Istruzione esplicita di Dottor Q | T-08 aggiornato; F4/DEC-05/T-09–11 rimangono PAUSED | Dottor Q |

| 2026-09-30 | DEC-04.4 — ordine delle sezioni approvato, contenuti aperti | Dottor Q APPROVA ordine 05 Leghe, 06 Proclami, 07 Cronache, 08 Avventurieri, 09 Chi siamo, 10 Footer; richiede confronto individuale sul contenuto delle sezioni, senza approvare i dettagli suggeriti | Conferma esplicita di Dottor Q | DEC-04 resta PARZIALE; F3 e T-05–08 ancora da definire/sbloccare; nessuna modifica applicativa | Dottor Q |

| 2026-09-30 | DEC-04.4a — Leghe in corso | APPROVATA Soluzione A con schede sintetiche; correggere “Cremos” (non “CREMOS”), “Organizzatore: In Cerca di Avventura”; CTA «Scopri la Lega» alla pagina Adunanze esistente, non a una pagina Lega futura | Conferma/correzioni esplicite Dottor Q | T-08 aggiornato; DEC-06 aperta per architettura Leghe; nessuna modifica al sito | Dottor Q |

| 2026-09-30 | DEC-04.4b — Proclami in homepage | Dottor Q approva una sola notizia: la più recente tra quelle effettivamente pubblicate; non tre annunci; stato vuoto senza contenuti inventati | Conferma esplicita Dottor Q | T-20 specifica homepage aggiornata; DEC-04 complessiva ancora PARZIALE | Dottor Q |

| 2026-09-30 | DEC-04.4c — Cronache in homepage | Dottor Q approva la Soluzione A: solo l'ultima Cronaca, selezionata fra eventi conclusi con data verificata; preservare link all'archivio e nessun contenuto fittizio | Conferma esplicita Dottor Q | T-08 specifica ultima Cronaca aggiornata; DEC-04 complessiva ancora PARZIALE | Dottor Q |

| 2026-09-30 | DEC-04.4d — Avventurieri in homepage | APPROVATA Soluzione A modificata: 3 schede immagine/nickname/community (se verificata), ogni scheda cliccabile direttamente sul profilo nella pagina Avventurieri; NO pulsante generale «Esplora gli Avventurieri». Criterio di selezione profili ancora da definire | Conferma esplicita Dottor Q | T-08 specifica aggiornata; DEC-04 complessiva PARZIALE | Dottor Q |

| 2026-09-30 | DEC-04.4d — criterio di selezione Avventurieri | APPROVATA rotazione automatica periodica di tre profili effettivi, senza duplicati nella stessa terna. Frequenza precisa non ancora definita: dettaglio tecnico futuro, non presumere aggiornamento a ogni caricamento | Conferma esplicita Dottor Q | Specifica T-08 aggiornata; nessuna modifica al sito | Dottor Q |

| 2026-09-30 | DEC-04.4e — Chi siamo in homepage | APPROVATA Soluzione C «Entra a far parte del Reame»: testo sintetico di presentazione, invito a community/organizzatori/mercanti, due CTA distinte «Chi siamo» e «Unisciti al Reame». Percorso effettivo di adesione ancora da definire con DEC-08/T-23; pagina dedicata in T-21 | Conferma esplicita Dottor Q | T-08 e T-23 aggiornati; DEC-04 complessiva ancora PARZIALE; nessuna modifica applicativa | Dottor Q |

| 2026-09-30 | DEC-04.4f — footer homepage/sito | APPROVATA struttura del footer comune in tre aree Navigazione / Il Reame / Seguici, con nome progetto e riga finale, Privacy/Cookie soltanto con contenuti disponibili, link pubblici verificati | Conferma esplicita Dottor Q | T-22 aggiornato; DEC-04 struttura homepage COMPLETA/APPROVED, implementazione ancora condizionata a dati e DEC trasversali | Dottor Q |

| 2026-09-30 | DEC-06.1 — architettura Adunanze e Leghe | APPROVATA variante Soluzione C: unica pagina centrale Adunanze e area Leghe con schede espandibili, nessuna pagina separata per Lega; calendario generale condiviso, Tappe collegate ai dati Lega, Cronache preservate. Etichette filtro wireframe non sovrascrivono DEC-03. | Conferma esplicita Dottor Q («approvata») | T-04, T-07, T-13, T-14 aggiornati; DEC-06 resta PARZIALE in attesa DEC-06.2, DEC-09 | Dottor Q |

| 2026-09-30 | DEC-06.2 — contenuto Lega espansa | APPROVATI quattro blocchi: Presentazione/regolamento generale; Calendario delle Tappe; Classifica dedicata con Top 3; Archivio delle Cronache collegate. Nessuna pagina per singola Lega. Le regole di classifica e i dettagli di interazione restano aperti | Conferma Dottor Q («ok») alla proposta DEC-06.2 | T-13 aggiornato; DEC-06 PARZIALE e DEC-09 ancora aperta | Dottor Q |

| 2026-09-30 | DEC-06.3 — comportamento schede Lega | APPROVATA Soluzione A: accordion a espansione esclusiva; una sola Lega aperta alla volta, aprendone un'altra si richiude la precedente; coerente desktop/mobile e accessibile. Stato iniziale ancora da definire | Conferma esplicita Dottor Q | T-13 aggiornato; DEC-06 resta PARZIALE; nessuna modifica applicativa | Dottor Q |

| 2026-09-30 | DEC-06.4 — stato iniziale delle schede Lega | APPROVATA Soluzione A: tutte le schede Lega inizialmente chiuse; l'utente sceglie quale aprire, una sola aperta per volta secondo DEC-06.3; possibile richiudere l'unica espansa | Conferma esplicita Dottor Q | T-13 aggiornato; DEC-06 resta PARZIALE; nessuna modifica al sito | Dottor Q |

| 2026-09-30 | DEC-06.5 — calendario Tappe nella Lega | APPROVATA Soluzione A: elenco sintetico con una riga cliccabile per Tappa (numero, nome, data, luogo, formato, stato), destinazione relativa Adunanza. Nessuna scheda evento completa duplicata nella Lega | Conferma esplicita Dottor Q | T-13 aggiornato; DEC-06 resta PARZIALE, DEC-09 aperta; nessuna modifica applicativa | Dottor Q |

## 7. DIARIO / CHANGELOG OPERATIVO (aggiungere una riga per sessione)
| Data | Cosa è accaduto | PR/commit | Stato test/deployment | Decisione/approvazione | Prossimo intervento |
|---|---|---|---|---|---|
| 2026-09-30 | Creato master di roadmap/tracking dai requisiti di Nick. Nessuna modifica al sito. | Documento docs/ICA_NICK_ROADMAP_MASTER.md | sito non alterato dall'introduzione del documento | DEC-01…09 aperte alla creazione; DEC-10 paused | affrontare DEC-01, DEC-02 e DEC-03, poi DEC-04/05 |
| 2026-09-30 | Registrata proposta DEC-01 di Dottor Q: descrizione con “giostre e leghe” anziché “eventi e leghe”. Solo aggiornamento roadmap. | docs/ICA_NICK_ROADMAP_MASTER.md | sito invariato; nessun test applicativo richiesto | DEC-01 attende conferma globale | Confermare nome, sottotitolo e frase, poi aprire DEC-02 |
| 2026-09-30 | Ritirata variante “giostre”: ripristinato “eventi e leghe” nella proposta corrente DEC-01. Solo documentazione. | docs/ICA_NICK_ROADMAP_MASTER.md | sito invariato | DEC-01 da confermare globalmente | Concludere DEC-01, poi DEC-02 |

| 2026-09-30 | DEC-01 approvata integralmente da Dottor Q: nome, sottotitolo e frase introduttiva con “eventi e leghe”. T-01 passa a READY; nessun file applicativo modificato. | Solo docs/ICA_NICK_ROADMAP_MASTER.md | Nessuna modifica live né QA applicativo | DEC-01 APPROVED | Affrontare DEC-02 lessico comune |

| 2026-09-30 | DEC-02 approvata integralmente; aggiunto glossario canonico. T-02 passa a READY; non applicata alcuna modifica alle pagine. | Solo docs/ICA_NICK_ROADMAP_MASTER.md | Nessuna modifica live né QA applicativo | DEC-01 e DEC-02 APPROVED; DEC-03 aperta | Discutere menu e organizzazione di Adunanze, Cronache, Leghe in DEC-03 |

| 2026-09-30 | DEC-03 approvata integralmente; registrata la nuova sitemap e il vincolo sui deep-link. T-03 READY; T-04 resta vincolata alla definizione delle Leghe. Nessuna modifica al sito. | Solo docs/ICA_NICK_ROADMAP_MASTER.md | Nessuna modifica live né QA applicativo | DEC-01, DEC-02, DEC-03 APPROVED; DEC-10 PAUSED | Aprire DEC-04: moduli e struttura della homepage nazionale |

| 2026-09-30 | DEC-04 approvata parzialmente: scelta struttura nazionale di Nick e trasferimento Top 3 Blaze of Glory in Leghe, senza alterare i dati. Nessuna modifica al sito. | Solo docs/ICA_NICK_ROADMAP_MASTER.md | Nessun QA applicativo necessario | DEC-01,02,03 approvate; DEC-04 PARZIALE; DEC-10 PAUSED | DEC-04: decidere numero di prossime Adunanze in homepage |

| 2026-09-30 | DEC-04.2 approvata: fino a tre eventi futuri reali, ordinati cronologicamente, senza card dimostrative. Roadmap aggiornata; nessuna modifica al sito. | Solo docs/ICA_NICK_ROADMAP_MASTER.md | Nessun QA applicativo necessario | DEC-04 ancora PARZIALE; DEC-04.2 APPROVED | Affrontare DEC-04.3 anteprima Alleanze in homepage |

| 2026-09-30 | Registrato vincolo: /beta/alleanze/ intoccabile per ora; F4, DEC-05 e T-09–T-11 PAUSED. DEC-04.3 homepage non ancora decisa. | Solo docs/ICA_NICK_ROADMAP_MASTER.md | Nessuna modifica live | Vincolo esplicito Dottor Q | Chiarire se homepage mostra un semplice collegamento alle Alleanze senza intervenire sulla loro pagina |

| 2026-09-30 | DEC-04.3 APPROVATA: in homepage soltanto tasto “Alleanze” verso la pagina corrente. Nessuna anteprima, nessun cambiamento alla pagina Alleanze, che rimane PAUSED. | Solo docs/ICA_NICK_ROADMAP_MASTER.md | Nessuna modifica live | DEC-04 resta parziale; DEC-04.2 e .3 approvate | Concludere DEC-04 per gli altri moduli della homepage |

| 2026-09-30 | DEC-04.3 CORRETTA: la decisione vigente è Soluzione A con tre schede Alleanza in homepage, non il precedente solo pulsante. Nessuna modifica live; pagina /beta/alleanze/ invariata/PAUSED. | Solo docs/ICA_NICK_ROADMAP_MASTER.md | Nessuna modifica applicativa | DEC-04 ancora parziale; DEC-04.2 e DEC-04.3 (versione revisionata) approvate | Riprendere DEC-04.4 sugli altri moduli homepage |

| 2026-09-30 | DEC-04.4: approvato SOLO l'ordine dei moduli homepage; contenuti singoli ancora da discutere. Ripartire da DEC-04.4a Leghe in corso; non dedurre che siano approvati 3 Proclami/2 Cronache. | Solo docs/ICA_NICK_ROADMAP_MASTER.md | Nessun QA applicativo necessario | DEC-04 PARZIALE; DEC-04.4 ordine APPROVED | Porre una decisione circoscritta sulla sezione Leghe in corso |

| 2026-09-30 | DEC-04.4a APPROVATA: scheda Leghe in homepage (Soluzione A), Blaze of Glory — La Lega di Cremos; Organizzatore: In Cerca di Avventura; «Scopri la Lega» punta a /beta/adunanze/nazionale/. Top 3 resta fuori homepage. Solo roadmap aggiornata. | docs/ICA_NICK_ROADMAP_MASTER.md | Nessuna modifica applicativa | DEC-04 PARZIALE; DEC-04.4a APPROVED | Discutere DEC-04.4b — Proclami individualmente |

| 2026-09-30 | DEC-04.4b APPROVATA: Homepage Proclami = una sola ultima notizia realmente pubblicata; nessuna modifica live. | Solo docs/ICA_NICK_ROADMAP_MASTER.md | QA applicativo non richiesto | DEC-04 PARZIALE, DEC-04.4a/b APPROVED | Affrontare DEC-04.4c — Cronache homepage |

| 2026-09-30 | DEC-04.4c APPROVATA: Homepage Cronache = una sola ultima Cronaca di evento concluso con data verificata; mantenere link /beta/cronache/. Solo roadmap modificata. | Solo docs/ICA_NICK_ROADMAP_MASTER.md | Nessuna modifica live | DEC-04 PARZIALE; DEC-04.4a/b/c APPROVED | Affrontare DEC-04.4d — Avventurieri homepage |

| 2026-09-30 | DEC-04.4d APPROVATA: tre schede Avventurieri, ciascuna apre il proprio profilo via ?player=ID nella pagina Avventurieri; niente CTA «Esplora gli Avventurieri». Criterio di scelta dei tre ancora aperto. Nessuna modifica applicativa. | Solo docs/ICA_NICK_ROADMAP_MASTER.md | Nessuna modifica live | DEC-04 PARZIALE; DEC-04.4a/b/c/d APPROVED | Definire selezione tre profili e poi affrontare DEC-04.4e — Chi siamo |

| 2026-09-30 | Integrata DEC-04.4d: rotazione AUTOMATICA PERIODICA dei tre Avventurieri in homepage, non casuale a ogni caricamento né selezione manuale; cadenza esatta ancora aperta. Nessuna modifica applicativa. | Solo docs/ICA_NICK_ROADMAP_MASTER.md | Nessun QA applicativo necessario | DEC-04 PARZIALE, DEC-04.4d criterio APPROVED | Passare direttamente a DEC-04.4e — Chi siamo |

| 2026-09-30 | DEC-04.4e APPROVATA: homepage Chi siamo adotta Soluzione C «Entra a far parte del Reame», con CTA «Chi siamo» e «Unisciti al Reame»; destino adesione da definire prima dell'implementazione. Solo roadmap modificata. | docs/ICA_NICK_ROADMAP_MASTER.md | Nessuna modifica live | DEC-04 PARZIALE; DEC-04.4a–e APPROVED | Porre DEC-04.4f — contenuti Footer, ultima sezione homepage |

| 2026-09-30 | DEC-04.4f APPROVATA: footer comune strutturato in Navigazione, Il Reame e Seguici. La STRUTTURA di DEC-04 homepage è COMPLETA; nessuna modifica al sito. Link, adesione, privacy e cadenza rotazione Avventurieri restano da verificare in fasi tecniche/DEC-08. | Solo docs/ICA_NICK_ROADMAP_MASTER.md | Nessun QA applicativo necessario | DEC-04 APPROVED a livello strutturale; build vincolata a dati/DEC-06–09 | Passare alla prossima decisione attiva, preferibilmente DEC-06 Leghe (DEC-05 Alleanze resta PAUSED) |

| 2026-09-30 | DEC-06.1 APPROVATA: Adunanze è hub di eventi futuri/in corso/conclusi; schede Leghe espandibili nella stessa pagina, no pagina propria per ogni Lega; Tappe nel calendario unico e nella Lega con una fonte di dati; Top 3 solo nell'area Leghe. DEC-03 rimane valido sulle etichette navigazione, le quattro etichette del wireframe sono da confermare. | Solo docs/ICA_NICK_ROADMAP_MASTER.md | Nessuna modifica al sito | DEC-06 PARTIAL, DEC-06.2 e DEC-09 ancora aperte | Definire contenuto scheda Lega espansa in DEC-06.2 |

| 2026-09-30 | DEC-06.2 APPROVATA: schede Lega espanse con quattro blocchi Presentazione / Calendario Tappe / Classifica / Archivio; Blaze of Glory è riferimento con Top 3 solo nella sua area Leghe. Solo roadmap modificata, sito non alterato. | docs/ICA_NICK_ROADMAP_MASTER.md | Nessuna modifica applicativa | DEC-06.1 e DEC-06.2 APPROVED, DEC-06 complessiva PARZIALE | Definire DEC-06.3: interazione scheda espandibile e trattamento dei suoi stati |

| 2026-09-30 | DEC-06.3 APPROVATA: Soluzione A, una sola scheda Lega aperta alla volta; aprirne un'altra richiude la precedente. Nessuna modifica al sito. | Solo docs/ICA_NICK_ROADMAP_MASTER.md | Nessun QA applicativo necessario | DEC-06.1–.3 APPROVED; DEC-06 PARZIALE | Chiedere DEC-06.4: stato iniziale delle schede Lega (tutte chiuse oppure una preaperta) |

| 2026-09-30 | DEC-06.4 APPROVATA: Soluzione A, schede Lega inizialmente tutte chiuse; accordion esclusivo DEC-06.3 preservato. Solo roadmap modificata. | docs/ICA_NICK_ROADMAP_MASTER.md | Nessun QA applicativo necessario | DEC-06.1–.4 APPROVED; DEC-06 complessiva PARZIALE | Affrontare DEC-06.5 — dati/gestione delle Tappe e stato degli appuntamenti oppure stati vuoti; mantenere invariata sitemap DEC-03 |

| 2026-09-30 | DEC-06.5 APPROVATA: Calendario Tappe in Lega = elenco sintetico, una riga per Tappa (numero/nome/data/luogo/formato/stato), riga cliccabile verso Adunanza; non duplicare card complete o dati. Solo roadmap modificata. | docs/ICA_NICK_ROADMAP_MASTER.md | Nessuna modifica al sito | DEC-06.1–.5 APPROVED; DEC-06 PARZIALE | Discutere DEC-06.6: accesso diretto dalla homepage alla scheda Lega nella pagina Adunanze, conciliando stato iniziale chiuso DEC-06.4 |

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
