# ICA — CURRENT RULES BASELINE
**Versione operativa:** 2026-09-30 · **Fonte primaria per agenti:** questo file.  
Per contesto storico usare `ICA_NICK_ROADMAP_MASTER.md`; in caso di conflitto prevale questa baseline e la decisione più recente esplicitamente registrata.

## 1. Identità e terminologia
- Nome: **In cerca d'avventura**.
- Sottotitolo: **Il reame delle community italiane di Sorcery: Contested Realm**.
- Descrizione: **Trova una community vicino a te, partecipa a eventi e leghe e segui le storie dei giocatori italiani.**
- REAME = rete/progetto nazionale aderente; AVVENTURIERO = giocatore; ALLEANZA = community o mercante aderente; ADUNANZA = singolo evento; LEGA = competizione multi-evento; TAPPA = Adunanza appartenente a una Lega; CRONACA = memoria di un evento concluso; PROCLAMA = notizia/annuncio.
- Non usare “Duello” come termine generale al posto di “Tappa”. Un nome narrativo proprio può restare, accompagnato dall’indicazione operativa della Tappa.

## 2. Navigazione
- Menu principale: **Adunanze · Avventurieri · Alleanze · Proclami · Chi siamo**.
- Dentro Adunanze: **In programma · Cronache · Leghe**.
- Preservare gli URL e deep-link storici già esistenti.
- Artwork/header `/beta-v2/`: **PAUSED**, non modificare senza vero gate di prodotto.

## 3. Homepage
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

## 5. Leghe
- Le Leghe sono un’area della pagina Adunanze, non pagine separate nella prima versione.
- Accordion a espansione esclusiva; normalmente tutte chiuse.
- Deep-link a una Lega: auto-scroll + auto-open della scheda indicata.
- Ordine interno: **Presentazione → Tappe → Classifica → Cronache**.
- Tappe: elenco sintetico e cliccabile verso la relativa Adunanza.
- Leghe attive prima; concluse in archivio storico. Gruppi vuoti nascosti; se non esiste alcuna Lega mostrare un solo stato informativo veritiero.
- Top 3 e classifica completa appartengono alla Lega, non alla homepage.

## 6. Cronache
- Una Cronaca esiste solo se realmente disponibile e verificata.
- Evento concluso senza risultati ufficiali: mostrare “Risultati in attesa di ufficializzazione”, senza inventare podio/classifica/Cronaca.
- Preservare URL storici e collegamenti a eventi/profili.

## 7. Avventurieri
- ID pubblico stabile; nickname modificabile.
- **Dr. Q = PLY-0000**.
- **PLY-0002 = legacy reserved**, mai riassegnare.
- Mapping privato Excel↔PLY: 32/32 ratificato, mai pubblicarlo.
- Profili assenti da un nuovo export si conservano; nessuna cancellazione/disattivazione automatica.
- Nuovi profili o nickname modificati sono dati pubblici nuovi/modificati e rientrano nel gate Product Owner.

## 8. Blaze of Glory
- `series_id = blaze-of-glory-2026-2027`.
- **E02 — Peasant = Tappa II**.
- **E04 — Constructed Full = Tappa IV**.
- Qualunque vecchia indicazione E02→IV / E04→II è **SUPERSEDED**.
- Classifiche pubbliche: usare i valori già calcolati dal gestionale; il sito non ricalcola GP, posizioni, tie-break o bonus.
- Specialità non iniziate: “In attesa della prima Tappa ufficiale”, senza podio 0/0.
- **Fair Play DEC-09.7 = OPEN**: nessuna scelta autonoma +2/+3 e nessuna validazione numerica basata su uno dei due valori.

## 9. Gestione dataset
- Google Sheet = gestionale originale; non modificarlo.
- Workflow attuale: export XLSX manuale caricato privatamente in chat.
- XLSX, nomi reali, note amministrative, mapping privati e configurazioni interne: mai pubblici.
- Whitelist pubblica: nickname/PLY; calendario-luogo-formato; risultati ufficializzati; classifiche; Fair Play solo dopo regola ufficiale verificata.
- Errori critici = blocco atomico dell’intera pubblicazione; niente aggiornamenti parziali.
- Conservare eventi/profili già pubblici se assenti dall’export, salvo istruzione specifica di rimozione.
- Pubblicazioni future: release coerente dei tre dataset con versione/manifest/hash. **Manifest live non ancora attivato**.
- Primo import XLSX reale tramite il nuovo workflow: **NON ancora eseguito**.

## 10. QA / pubblicazione / rollback
- Per ogni modifica: CI, regression test, desktop, mobile, keyboard/accessibilità pertinente, deep-link e nessuna regressione.
- Non dichiarare PASS per controlli non eseguiti.
- Quattro soli gate riservati al Dottor Q:
  1. cambi significativi di UX/prodotto;
  2. nuovi/modificati dati pubblici o ufficializzazione risultati;
  3. pubblicazione live;
  4. rollback.
- PR code-only, test, refactoring, hardening e bugfix tecnici entro uno Sprint approvato sono autonomi se non alterano dati, comportamento approvato o contenuti pubblici. **Eccezione:** se il merge su `main` provoca automaticamente una pubblicazione del sito (es. GitHub Pages), il merge stesso ricade nel gate **PO-LIVE** anche quando non modifica `data/*.json`.
- Rollback: mai automatico; prepararlo in caso di regressione critica, eseguirlo solo dopo autorizzazione specifica.
