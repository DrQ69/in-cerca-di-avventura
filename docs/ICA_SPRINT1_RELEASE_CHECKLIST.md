# S1 — Checklist del rilascio versionato (TEMPLATE, non verbale di release)

**STATO:** MODELLO NON ESEGUITO. Ogni casella equivale ad un controllo da effettuare su una futura proposta concreta.
**Responsabile della pubblicazione e del rollback:** Dottor Q, conferma specifica in chat. I risultati dei test CI NON equivalgono ad approvazione dei risultati sportivi.

## A. Sorgente e anteprima (DEC-09.1–.32)
- [ ] Nuova esportazione XLSX ricevuta in chat; non committata né resa pubblica.
- [ ] Data/versione sorgente valutata rispetto all'ultimo rilascio. Se più vecchia/non attendibile, richiesta conferma separata.
- [ ] Cache formula delle tre classifiche disponibili e coerenti; nessun ricalcolo GP locale.
- [ ] Mapping numerico Excel↔PLY consultato esclusivamente nella sede PRIVATA; nessun riutilizzo di PLY-0002.
- [ ] E02 Peasant Tappa II ed E04 Constructed Full Tappa IV rispettate; conflitto nello snapshot originario segnalato prima di procedere.
- [ ] Dati selezionati secondo whitelist; nessun nome reale, XLSX grezzo, nota privata o valore amministrativo nei file pubblici.
- [ ] Eventi/giocatori assenti dall'export conservati, salvo distinta autorizzazione.
- [ ] Fair Play DEC-09.7 verificato ufficialmente ove il rilascio coinvolga bonus/nuove graduatorie; non presumere +2/+3.
- [ ] Rapporto unico: versioni, aggiunte, modifiche campo-per-campo, conservazioni, ufficializzazione, errori critici e avvisi.
- [ ] Anteprima visiva PRIVATA della stessa proposta.

## B. QA e gate (DEC-09.33–.34)
- [ ] QA desktop reale: cards, tabelle, link, popup, navigazione, ricerca e filtri coinvolti.
- [ ] QA smartphone reale, stessi componenti.
- [ ] Verificati link dei profili, compatibilità PLY-0002→PLY-0000, Adunanze, Leghe, classifiche e Cronache.
- [ ] CTA e link Maps solo se reali; nessuna URL inventata.
- [ ] Nessun errore critico; esiti PASS/FAIL/NON VERIFICATO documentati (NON VERIFICATO non è PASS).
- [ ] Esplicita conferma specifica dell'ufficialità dei dati e unica approvazione finale della versione candidata.

## C. Attivazione atomica tecnica (DEC-09.5/.13/.15/.35–.36)
- [ ] TUTTI i consumer effettivi usano il singolo manifest di versione e verificano tutti e tre gli hash; nessuna lettura mista dei JSON legacy.
- [ ] Versione precedente valida e commit di ripristino identificati.
- [ ] Tre JSON pubblici sanitizzati archiviati in directory release immutabile, verificati e pubblicati PRIMA del cambio puntatore.
- [ ] Attivazione manifest avviene con commit coerente e senza finestra di 404.
- [ ] Annotata la versione pubblicata, timestamp, commit, approvatore ed esiti QA in registro tecnico pubblico non riservato.
- [ ] Smoke test degli URL live desktop+mobile eseguito subito dopo attivazione.
- [ ] Se regressione critica: blocco ulteriori update, rapporto e piano rollback; NON effettuare rollback senza nuova autorizzazione specifica.
- [ ] Dopo eventuale rollback autorizzato, smoke test e storico ripristino.

**BLOCCO ATTUALE:** loader browser implementato a livello di modulo ma non collegato alle pagine /beta/; manifest live non esiste; preview desktop/mobile e workflow di sourcing XLSX non sono stati eseguiti. Nessuna release autorizzata.
