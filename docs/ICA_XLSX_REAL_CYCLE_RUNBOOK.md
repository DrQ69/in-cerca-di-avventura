# ICA — PRIMO CICLO XLSX REALE | RUNBOOK OPERATIVO

**Stato:** READY FOR INPUT · **Data:** 2026-10-02

## Obiettivo
Eseguire il primo ciclo reale dal gestionale XLSX a un candidato pubblico sanitizzato, senza pubblicare automaticamente nulla e senza rendere pubblico il workbook o dati privati.

## Fase 0 — prerequisiti
- Fair Play ufficiale: **+3 GP**; validator LIVE.
- Mapping privato Excel↔PLY: usare solo nel contesto privato.
- PLY-0002 resta riservato e non riassegnabile.
- E02 = Tappa II; E04 = Tappa IV.
- Manifest live non attivo: il primo ciclo reale termina a candidato privato/QA salvo successivo progetto di attivazione.

## Fase 1 — ricezione workbook
1. Ricevere in chat l'export XLSX manuale più recente.
2. Non caricarlo nel repository, non copiarlo in asset pubblici e non includerne path, nomi reali o note nel log pubblico.
3. Determinare la data/versione della sorgente da metadati workbook/export. La data di upload della chat non vale come timestamp sorgente.

## Fase 2 — ispezione privata
Verificare almeno:
- presenza e leggibilità dei fogli **CLASSIFICA GENERALE**, **DRAFT**, **CONSTRUCTED**;
- presenza delle cache/risultati formula utilizzabili;
- coerenza interna delle tre classifiche;
- eventuali nuovi giocatori/nickname;
- eventi/Tappe presenti e loro numerazione;
- risultati ufficializzati vs ancora pendenti;
- presenza di dati Fair Play e coerenza +3;
- eventuali nomi reali/note amministrative da escludere dalla proposta pubblica.

Esiti cache ammessi dal gate: READABLE, MISSING, INCONSISTENT, NOT_VERIFIED.
MISSING, INCONSISTENT e NOT_VERIFIED bloccano il candidato.

## Fase 3 — intake non sensibile
Produrre solo i metadati ammessi da `league-xlsx-intake-core.mjs`:
- source_version_label
- source_exported_at
- source_timestamp_provenance
- last_public_release_id
- last_public_published_at
- formula_cache.general / draft / constructed
- officiality
- fair_play_affected

Qualsiasi campo privato aggiuntivo è vietato nell'oggetto di intake.

## Fase 4 — costruzione proposta sanitizzata
Preparare fuori dal repository tre JSON candidati:
- players.json
- events.json
- league-standings.json

Regole:
- solo whitelist pubblica;
- preservare profili/eventi già pubblici se mancanti dall'export, salvo istruzione esplicita di rimozione;
- nessun nome reale, mapping privato, workbook, nota amministrativa o configurazione interna;
- nessun ricalcolo locale di GP, rank, tie-break o bonus;
- Fair Play: validare +3, non calcolarlo al posto del gestionale.

## Fase 5 — dry-run e rapporto
Eseguire `league-release-dry-run.mjs` fra dataset pubblico corrente e candidato sanitizzato.
Il rapporto al Product Owner deve includere:
- aggiunte;
- modifiche campo-per-campo;
- conservazioni;
- elementi rimossi richiesti/non richiesti;
- errori critici;
- warning;
- gate residui;
- stato ufficialità.

## Fase 6 — candidato privato e preview
Se il dry-run non è bloccato:
- costruire il candidato con `league-build-private-candidate.mjs` in directory esterna al repository;
- produrre preview privata;
- eseguire QA desktop/mobile, profili, Adunanze, Leghe, Cronache, filtri, link e Maps coinvolti.

## Fase 7 — decisione
Il primo ciclo reale NON pubblica da solo.
Serve:
1. conferma del Product Owner sui nuovi/modificati dati pubblici e sull'ufficialità;
2. PO-LIVE separato per qualsiasi merge che pubblichi GitHub Pages;
3. progetto/gate separato per attivare il manifest versionato se si vuole passare alla pubblicazione atomica.

## Condizione di partenza
Il flusso è pronto. L'unico input mancante è l'export XLSX reale più recente.
