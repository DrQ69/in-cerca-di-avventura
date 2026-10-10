# ICA — CURRENT RULES BASELINE
**Versione operativa:** 2026-10-10 · **Fonte primaria per agenti:** questo file.  
Per contesto storico usare `ICA_NICK_ROADMAP_MASTER.md`; in caso di conflitto prevale questa baseline e la decisione più recente esplicitamente registrata.

## 1. Identità e terminologia
- Nome: **In cerca d'avventura**.
- Sottotitolo: **Il reame delle community italiane di Sorcery: Contested Realm**.
- Descrizione: **Trova una community vicino a te, partecipa a eventi e leghe e segui le storie dei giocatori italiani.**
- REAME = rete/progetto nazionale aderente; AVVENTURIERO = giocatore; ALLEANZA = community o mercante aderente; ADUNANZA = singolo evento; LEGA = competizione multi-evento; TAPPA = Adunanza appartenente a una Lega; CRONACA = memoria di un evento concluso; PROCLAMA = notizia/annuncio.
- Non usare “Duello” come termine generale al posto di “Tappa”. Un nome narrativo proprio può restare, accompagnato dall’indicazione operativa della Tappa.

## 2. Navigazione
- Menu principale: **Adunanze · Avventurieri · Alleanze · Tesori · Proclami · Chi siamo**.
- Dentro Adunanze: **In programma · Cronache · Leghe**.
- Preservare gli URL e deep-link storici già esistenti.
- **Tesori** è attivo nella navigazione. La direzione prodotto/UX e il modello dati v1 sono approvati e documentati in `docs/TESORI_SPEC.md`; l'implementazione live resta separata e richiede dati premio reali/verificati.
- Artwork/header `/beta-v2/`: **PAUSED**, non modificare senza vero gate di prodotto.

## 3. Tesori
- Tesori è l'archivio visivo dei premi annunciati, confermati o assegnati negli eventi ICA; non è un marketplace né un catalogo generico.
- Landing: ricerca + filtri + griglia di eventi rappresentati da forzieri; ogni tile mostra nome evento, contesto Lega/Tappa, data verificata e numero di premi.
- Pagina evento: galleria fotografica dei premi, filtri contestuali e link all'Adunanza/Cronaca correlata.
- Tassonomia iniziale: Artist Proof; Carta; Carta Champion (Official/Altered); Stampa a serie limitata; Box; Precon; Bustina.
- Attributi carta: Foil/Non-Foil; Signed/Unsigned; firma Normal/Shadow; colore firma opzionale; rarità Unique/Elite/Exceptional/Ordinary; espansione Alpha/Beta/Arthurian Legends/Gothic e future espansioni.
- Stati premio: `announced`, `confirmed`, `awarded`; non equiparare premio annunciato e premio effettivamente assegnato.
- Dataset dedicato raccomandato: `data/treasures.json` con ID stabili `TRE-XXXX` e relazione tramite `event_id`; non duplicare data/titolo/luogo dell'evento.
- Immagini ottimizzate e lazy-loaded; provenienza/diritti da registrare. Se manca una foto, mantenere comunque identità testuale accessibile.
- La direzione grafica approvata il 2026-10-10 è dark fantasy ICA con blu/nero/bronzo/oro e forziere come metafora evento; il mockup è riferimento di direzione, non baseline pixel-perfect.
- Specifica completa: `docs/TESORI_SPEC.md`.

## 4. Homepage
- Nessuna classifica nazionale fittizia.
- **Top 3 Blaze of Glory NON deve stare in homepage**: appartiene alla scheda della relativa Lega.
- Mostrare fino a 3 prossime Adunanze reali, ordinate per data; se meno di 3, non creare placeholder fittizi.
- Sezione Leghe: card sintetica; Blaze of Glory collega all’area Leghe della pagina Adunanze e apre direttamente la scheda.
- Proclami: solo l’ultima notizia realmente pubblicata.
- Cronache: solo l’ultima Cronaca realmente disponibile con data verificata.
- Avventurieri: 3 profili reali cliccabili, con rotazione periodica; non usare nickname come chiave persistente.

## 4. Adunanze
- Una sola fonte pubblica eventi: `data/events.json` finché non verrà attivato il manifest versionato.
- Il calendario generale contiene eventi autonomi e Tappe di Lega senza duplicare i dati.
- ID tecnico evento e numero Tappa sono distinti.
- Un evento con data passata può essere classificato operativamente “Concluso” salvo stato esplicito contrario; ciò **non ufficializza risultati o Cronaca**.
- CTA, Google Maps, luogo, regolamento e premi: usare solo informazioni reali e verificate.
- Preservare event_id, URL e deep-link esistenti.

## 6. Leghe
- Le Leghe sono un’area della pagina Adunanze, non pagine separate nella prima versione.
- Accordion a espansione esclusiva; normalmente tutte chiuse.
- Deep-link a una Lega: auto-scroll + auto-open della scheda indicata.
- Ordine interno: **Presentazione → Tappe → Classifica → Cronache**.
- Tappe: elenco sintetico e cliccabile verso la relativa Adunanza.
- Leghe attive prima; concluse in archivio storico. Gruppi vuoti nascosti; se non esiste alcuna Lega mostrare un solo stato informativo veritiero.
- Top 3 e classifica completa appartengono alla Lega, non alla homepage.

## 7. Cronache
- Una Cronaca esiste solo se realmente disponibile e verificata.
- Evento concluso senza risultati ufficiali: mostrare “Risultati in attesa di ufficializzazione”, senza inventare podio/classifica/Cronaca.
- Preservare URL storici e collegamenti a eventi/profili.

## 8. Avventurieri
- ID pubblico stabile; nickname modificabile.
- **Dr. Q = PLY-0000**.
- **PLY-0002 = legacy reserved**, mai riassegnare.
- Mapping privato Excel↔PLY: 32/32 ratificato, mai pubblicarlo.
- Profili assenti da un nuovo export si conservano; nessuna cancellazione/disattivazione automatica.
- Nuovi profili o nickname modificati sono dati pubblici nuovi/modificati e rientrano nel gate Product Owner.

## 9. Blaze of Glory
- `series_id = blaze-of-glory-2026-2027`.
- **E02 — Peasant = Tappa II**.
- **E04 — Constructed Full = Tappa IV**.
- Qualunque vecchia indicazione E02→IV / E04→II è **SUPERSEDED**.
- Classifiche pubbliche: usare i valori già calcolati dal gestionale; il sito non ricalcola GP, posizioni, tie-break o bonus.
- Specialità non iniziate: “In attesa della prima Tappa ufficiale”, senza podio 0/0.
- **Fair Play DEC-09.7 = RISOLTA**: bonus confermato da Dottor Q pari a **+3 GP**. Il sito non deve ricalcolare autonomamente classifiche o bonus; deve usare i valori ufficiali/precalcolati del gestionale e può validare la coerenza con +3 solo quando il dato Fair Play è effettivamente coinvolto.

## 10. Gestione dataset
- Google Sheet = gestionale originale; non modificarlo.
- Workflow attuale: export XLSX manuale caricato privatamente in chat.
- XLSX, nomi reali, note amministrative, mapping privati e configurazioni interne: mai pubblici.
- Whitelist pubblica: nickname/PLY; calendario-luogo-formato; risultati ufficializzati; classifiche; Fair Play solo dopo regola ufficiale verificata.
- Errori critici = blocco atomico dell’intera pubblicazione; niente aggiornamenti parziali.
- Conservare eventi/profili già pubblici se assenti dall’export, salvo istruzione specifica di rimozione.
- Pubblicazioni future: release coerente dei tre dataset con versione/manifest/hash. **Manifest live non ancora attivato**.
- Primo import XLSX reale tramite il nuovo workflow: **NON ancora eseguito**.

## 11. Stato release
- **Sprint 2 / PR #112 è LIVE** dal 2026-10-01; merge commit `51b58c46b179c0721898a23f4e258077d1f33dd7`.
- Il consolidamento visibile successivo è tracciato nella **PR #118**; finché non è mergiata non rappresenta lo stato live.
- La PR tecnica **#113** applica nei validator la regola Fair Play +3 già approvata; finché non è mergiata la decisione è vigente ma l'hardening tecnico resta pendente.

## 12. QA / pubblicazione / rollback
- Per ogni modifica: CI, regression test, desktop, mobile, keyboard/accessibilità pertinente, deep-link e nessuna regressione.
- Non dichiarare PASS per controlli non eseguiti.
- Quattro soli gate riservati al Dottor Q:
  1. cambi significativi di UX/prodotto;
  2. nuovi/modificati dati pubblici o ufficializzazione risultati;
  3. pubblicazione live;
  4. rollback.
- PR code-only, test, refactoring, hardening e bugfix tecnici entro uno Sprint approvato sono autonomi se non alterano dati, comportamento approvato o contenuti pubblici. **Eccezione:** se il merge su `main` provoca automaticamente una pubblicazione del sito (es. GitHub Pages), il merge stesso ricade nel gate **PO-LIVE** anche quando non modifica `data/*.json`.
- Rollback: mai automatico; prepararlo in caso di regressione critica, eseguirlo solo dopo autorizzazione specifica.
