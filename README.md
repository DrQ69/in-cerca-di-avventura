# In Cerca di Avventura

Community hub italiano dedicato esclusivamente a **Sorcery: Contested Realm**.

## Stato del repository — 2026-09-29

Il repository contiene due livelli distinti:

1. **legacy root** — `index.html`, `assets/css/style.css`, `assets/js/main.js`; non è il precedente canonico per il nuovo sistema;
2. **beta operativa** — pagine statiche sotto `beta/`, alimentate da fonti JSON condivise e da uno shell visuale comune.

Pagine beta attive:
- `/beta/` — homepage beta;
- `/beta/adunanze/nazionale/` — eventi nazionali futuri/in corso;
- `/beta/cronache/` — archivio degli eventi conclusi;
- `/beta/avventurieri/` — directory giocatori;
- `/beta/alleanze/` — mappa community/mercanti.

Il portale visuale `/beta/adunanze/` con le due porte esiste nel repository ma, per decisione operativa corrente, la navigazione beta porta direttamente agli eventi nazionali.

## Fonti dati principali

- `data/events.json` — fonte condivisa per Home / Adunanze / Cronache;
- `data/players.json` — registro Avventurieri;
- `data/league-standings.json` — classifica Blaze of Glory;
- `data/alliances.json` — community, coordinate, prestigio e influenza;
- `data/proclami.json` — contenuti Proclami.

Non inventare dati mancanti. Le informazioni pubblicate devono derivare da fonti verificate o decisioni esplicite del Product Owner.

## Stack

- HTML statico;
- CSS condiviso + CSS pagina;
- JavaScript leggero;
- GitHub Pages;
- nessun framework, CMS, backend, database o autenticazione.

## Governance

Prima di modifiche non banali:
1. leggere `docs/PROJECT_INDEX.md`;
2. seguire `docs/ICA_CANONICAL_SPEC.md` e gli specialisti applicabili;
3. trattare `main` come production-facing;
4. usare branch → QA → PR → squash merge per lavoro non banale;
5. non equiparare automaticamente beta pubblica a UI canonica APPROVED/PRODUCTION_READY.

Documenti principali:
- `docs/PROJECT_INDEX.md` — routing documentale;
- `docs/PROJECT_CONTEXT.md` — stato operativo corrente;
- `docs/PROJECT_RISK_REGISTER.md` — rischi trasversali correnti;
- `docs/ACTIVITY_REVIEW_2026-09-29.md` — review delle attività 15–29 settembre 2026;
- `docs/ICA_CANONICAL_SPEC.md` — specifica autorevole;
- `docs/DESIGN_SYSTEM.md`, `docs/RESPONSIVE_SPECIFICATION.md`, `docs/ASSET_SPECIFICATION.md`;
- `docs/GITHUB_WORKFLOW.md`, `docs/QA_CHECKLIST.md`, `docs/DEFINITION_OF_DONE.md`.

## Nota sull'architettura canonica

La beta corrente usa una navigazione operativa (`Le Adunanze / Cronache / Avventurieri / Alleanze / Proclami`) che **non coincide ancora** con la navigazione canonica definita nella specifica (`Imprese / Campagne / Avventurieri / Cronache / Il Reame / Archivio`). La beta non deve essere promossa a canonical/production-ready senza una decisione esplicita e il relativo riallineamento.

## Sviluppo locale

```bash
python3 -m http.server 8000
```

Aprire `http://localhost:8000/beta/` per la beta operativa.
