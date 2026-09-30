# Sprint 1 — XLSX intake gate (code-only)

Questa tranche prepara il controllo preliminare di una FUTURA esportazione XLSX caricata privatamente in chat. Non legge il workbook e non contiene dati del workbook.

## Scopo
Tradurre DEC-09.26/.27/.12/.7 in un oggetto di controllo minimale: origine del timestamp/versione della sorgente; confronto cronologico con l'ultimo dataset pubblico; stato delle cache dei fogli CLASSIFICA GENERALE, DRAFT e CONSTRUCTED; ufficialità; indicazione se la proposta coinvolge Fair Play.

## Regole
- MISSING, INCONSISTENT o NOT_VERIFIED in una cache classifica = blocco critico dell'intero candidato.
- Sorgente OLDER, EQUIVALENT o UNVERIFIABLE = warning + gate specifico owner_confirms_source_freshness.
- Non usare la data di upload/chat come data dell'export.
- fair_play_affected=true = gate resolve_DEC_09_7_before_publication; nessuna scelta automatica +2/+3.
- officiality=PENDING = gate esplicito dell'organizzatore.
- Campi extra come path workbook, nomi reali, ID privati o note sono rifiutati.
- publicSafeIntakeSummary produce soltanto codici/esiti/gate e non pubblica label o timestamp sorgente.

## Limite
Questo codice non verifica da solo il contenuto XLSX. Durante un vero workflow ChatGPT dovrà ispezionare il file privato, determinare questi stati con evidenza reale e presentare il rapporto al Dottor Q. Nessun dataset può essere pubblicato sulla sola base di un intake strutturalmente valido.
