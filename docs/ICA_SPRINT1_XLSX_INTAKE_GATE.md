# Sprint 1 — XLSX intake gate

Questo gate definisce il controllo preliminare di una esportazione XLSX caricata privatamente in chat. Il modulo repository valida soltanto i metadati non sensibili prodotti durante l'ispezione privata: il workbook non viene committato e non deve diventare pubblico.

## Scopo
Tradurre DEC-09.26/.27/.12/.7 in un oggetto di controllo minimale: origine del timestamp/versione della sorgente; confronto cronologico con l'ultimo dataset pubblico; stato delle cache dei fogli CLASSIFICA GENERALE, DRAFT e CONSTRUCTED; ufficialità; indicazione se la proposta coinvolge Fair Play.

## Regole
- MISSING, INCONSISTENT o NOT_VERIFIED in una cache classifica = blocco critico dell'intero candidato.
- Sorgente OLDER, EQUIVALENT o UNVERIFIABLE = warning + gate specifico owner_confirms_source_freshness.
- Non usare la data di upload/chat come data dell'export.
- `fair_play_affected=true` = warning `FAIR_PLAY_PLUS3_RULE_APPLIES`; la regola vigente è **+3 GP**. Il sito/validator non ricalcola la classifica: verifica solo coerenza con i valori ufficiali/precalcolati.
- officiality=PENDING = gate esplicito dell'organizzatore.
- Campi extra come path workbook, nomi reali, ID privati o note sono rifiutati.
- publicSafeIntakeSummary produce soltanto codici/esiti/gate e non pubblica label o timestamp sorgente.

## Limite
Questo codice non verifica da solo il contenuto XLSX. Durante il workflow reale ChatGPT deve ispezionare il file privato, determinare questi stati con evidenza reale e presentare il rapporto al Dottor Q. Nessun dataset può essere pubblicato sulla sola base di un intake strutturalmente valido.

## Stato operativo 2026-10-02
- Fair Play +3: risolto e hardening validator LIVE tramite PR #113.
- Manifest live: non attivo.
- Primo XLSX reale: non ancora ricevuto in chat/Library al momento dell'avvio del ciclo.
- Output consentito prima del manifest: candidato **privato**, rapporto differenze, QA e preview; nessuna attivazione atomica live.
