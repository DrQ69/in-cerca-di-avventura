# Sprint 1 — fondamento tecnico del rilascio Blaze of Glory

**Stato:** prototipo di core di validazione offline, PR DRAFT, non pubblicato e non collegato ancora ai consumer /beta/.
**Responsabile autorizzazioni:** Dottor Q. **Fair Play DEC-09.7:** aperto, non interpretare +2/+3.

## Architettura scelta in attuazione di DEC-09.5/.13/.15/.31–.36
1. Dottor Q esporta XLSX dal Google Sheet originale e lo carica in chat; l'XLSX non va mai su GitHub.
2. Durante la sessione si estraggono SOLO campi pubblicabili (DEC-09.4) e si producono tre oggetti JSON candidati, già privati dei campi riservati.
3. Il core offline legge un candidato **già sanitizzato**, controlla gli ID, riferimenti incrociati, campi proibiti e Tappe confermate E02=II, E04=IV; non legge l'XLSX, non calcola GP, non ufficializza risultati.
4. L'anteprima produce diff del candidato rispetto al dataset già pubblicato e blocca omissioni automatiche di Avventurieri/eventi. Mancanza di valori formula e freschezza dell'XLSX vanno valutate A MONTE nel workflow assistito (DEC-09.26/.27); un JSON da solo non può dimostrarle.
5. Dopo QA, preview visiva PRIVATA desktop/mobile, link check, conferme specifiche e unica autorizzazione finale, predisporre tre JSON immutabili:
   - data/releases/<ID>/players.json
   - data/releases/<ID>/events.json
   - data/releases/<ID>/league-standings.json
   - un unico manifest/puntatore data/current-release.json con paths e SHA-256 dei tre file.
6. **Gate tecnico ancora da costruire:** migrare TUTTI i consumer dalla lettura degli attuali file JSON legacy al caricamento di UN manifest e dei relativi tre file nella stessa versione, prima di abilitare il cambio di puntatore. Caricare i file immutabili PRIMA del cambio del manifest; un solo commit/versione per l'attivazione. Il versionamento del solo manifest non garantirebbe atomicità per i consumer legacy.
7. Tracciare nel log tecnico pubblico soltanto id versione, timestamp, commit, versione precedente e QA (senza XLSX, note gestionali, nomi reali o mapping privato); fare smoke test dopo pubblicazione. Rollback esclusivamente su nuova autorizzazione specifica del proprietario.

## Primo increment tecnico
- scripts/league-release-core.mjs: validatePublicBundle, previewPublicChange, buildReleaseFiles, validateManifest; funzioni PURE, nessuna scrittura, upload o deploy.
- tests/league-release-core.test.mjs: dati sintetici, verifica errori bloccanti e comportamento contro lo scambio obsoleto E02/E04.
- .github/workflows/league-dataset-core.yml: test Node 22 su PR.

**Limiti espliciti:** uno snapshot Excel storico non certifica il Google Sheet corrente; il core non offre al momento parser XLSX, riconciliazione privata, verifica cache formule, generazione HTML dell'anteprima, browser QA o rilascio live. Non usare buildReleaseFiles per pubblicare fino al completamento dei gate sopra e all'approvazione del rapporto dati effettivo.

**Next in S1:** CLI di dry-run con input pubblici già sanitizzati + raccolta dei risultati dei test; adattatore di lettura del manifest per /beta/; protocollo versioni/rollback e rapporto anteprima completo.

## Secondo incremento tecnico (non attivato sul sito)
- `scripts/league-release-dry-run.mjs`: CLI rigorosamente read-only: accetta due cartelle di JSON già sanitizzati, genera report quantità + ID modificati/aggiunti/mancanti, nessuna scrittura e nessuna pubblicazione; exit 0 = struttura valida, NON dati ufficiali o release approvata; exit 1 = bloccante, 2 = input errato.
- `beta/shared/release-reader.mjs`: lettore browser di UN puntatore `data/current-release.json`, verifica percorsi confinati alla versione e hash SHA-256 prima di consumare i tre file; non ancora cablato a `/beta/` fino a migrazione completa e simultanea dei consumer. In caso di errore non mischiare con JSON legacy.
- `tests/league-release-integration.test.mjs`: prove sintetiche di hash, path traversal e blocco dello scambio obsoleto E02/E04.
- **La validazione privacy della struttura NON sostituisce la verifica umana del contenuto stringhe** né convalida dati Excel/stati di ufficialità. Il dry-run su snapshot pubblico reale richiede confronto con una versione esplicitamente pubblicabile, non l'esportazione XLSX grezza.

## Baseline real-world regression (read-only)
- `tests/league-release-current-data.test.mjs` carica in CI i JSON pubblici già presenti in main/branch ed esegue core QA con un no-op dry-run. I controlli sulla cache formula/fonte XLSX e sull'ufficialità dei risultati non sono coperti da questo test; Fair Play rimane esplicitamente segnalato.

## Terzo incremento: rapporto sicuro e checklist
- `changedFieldNames` riporta per ID soltanto i nomi dei campi cambiati, senza valori stringa potenzialmente riservati nei log CI.
- `docs/ICA_SPRINT1_RELEASE_CHECKLIST.md` definisce l'ordine completo di verifiche, conferme e rollback. Tutti i check sono inizialmente non spuntati e nessuna pubblicazione viene dichiarata.

## Quarto incremento (solo in PR DRAFT)
Le quattro pagine che consumano il registro giocatori/eventi/classifica sono state predisposte a leggere lo stesso manifest `data/current-release.json`. **Compatibilità transitoria esplicita, aggiornata dopo regressione visuale:** `readSiteBundle` usa per default `useManifest:false`: NON richiede un manifest assente (evitando il 404 visibile in console), legge una sola volta i tre JSON legacy per pagina. L'attivazione deve essere esplicita con `useManifest:true` per TUTTI i consumer, contestualmente alla pubblicazione autorizzata di manifest+tre file validi. In modalità attiva, 404/manifest invalido/hash errato/rete non disponibile sono sempre errori bloccanti e NON fanno ripiego silenzioso sul legacy. Prima di qualsiasi merge è comunque obbligatorio il collaudo reale delle pagine desktop/mobile e la successiva attivazione controllata di un release valido. Nessun manifest live o dato di rilascio è stato creato in questa PR.
