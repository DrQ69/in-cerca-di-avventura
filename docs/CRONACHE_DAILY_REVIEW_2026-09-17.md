# Cronache — Review giornaliera e analisi del rischio — 2026-09-17

## Sintesi

La giornata ha portato Cronache da una fondazione funzionale a una Beta data-driven con filtri corretti, sistema visivo strutturato, primi asset SVG dedicati, Aesthetic Deep Pass 1 e successive correzioni PO. Il risultato è nettamente più vicino alla reference, ma il lavoro di oggi ha anche evidenziato un rischio tipico dei sistemi ornamentali modulari: riutilizzare un singolo asset di angolo senza una grammatica esplicita di orientamento produce cornici visivamente incoerenti.

## Miglioramenti introdotti oggi

1. Consolidamento della terminologia e del modello dati Cronache.
2. Mapping di La Giostra e Gothic Draft BOG#1 con dati reali; estensione del calendario Blaze of Glory senza inventare dati mancanti.
3. Ricerca libera + filtri Stagione/Stato/Luogo/Lega/Formato; correzione della regressione di normalizzazione; feedback sul numero di risultati e comando `Ripristina i filtri`.
4. Stati FUTURA / IN CORSO / CONCLUSA con famiglia teschi dedicata.
5. Primo sistema di metadata icons, season ornament e archive divider.
6. Aesthetic Deep Pass 1: shell, rails, host logo, threshold, ledger, season headings, event records, sigilli e corner ornaments.
7. Correzioni PO: riduzione del rombo/logo-host, offset di 0,5 cm del summary filtri, riduzione del testo `Dettagli in preparazione`.
8. Ornamental Orientation Cleanup: variante esplicita TL/TR/BL/BR per le famiglie `frame-corner` e `record-corner`, con layer CSS separato `m100-orientation.css`.

## Valutazione

### Funzione

La parte funzionale è in una condizione buona. Ricerca e filtri sono ora data-driven e la logica è coerente con il comportamento richiesto. I dati mancanti sono esplicitamente lasciati indefiniti anziché inventati. Il principale rischio funzionale residuo non è la logica base, ma la regressione durante ulteriori pass estetici.

### Contenuto

Il modello Lega → Duelli e Giostra autonoma è stabile. La qualità è alta per i record già verificati. Il rischio residuo riguarda l'aggiunta di futuri risultati, date o formati senza una fonte verificata; la regola operativa resta quindi `unknown stays unknown`.

### Visuale

Il salto qualitativo è significativo, ma il lavoro di oggi ha mostrato che la qualità visiva richiede un controllo sistematico, non solo asset più ricchi. La correzione degli orientamenti riduce uno dei difetti più evidenti del Deep Pass 1. Restano da verificare in render reale: equilibrio delle cornici, densità ornamentale, rapporto tra logo/eyebrow/title, leggibilità delle action cells, coerenza delle linee interne e resa a 1440/1024/768/390 px.

## Analisi del rischio

| Rischio | Probabilità | Impatto | Stato / mitigazione |
|---|---|---|---|
| Orientamento errato di corner ornaments | Media → Bassa | Alto visivo | Mitigato creando asset TL/TR/BL/BR espliciti e un layer CSS dedicato |
| Sovrapposizioni tra decorazione e testo | Media | Alto visivo | Ridotto con safe areas, riduzione logo-host e fit del pending text; richiede visual regression cross-width |
| Over-decoration / perdita di gerarchia | Media | Medio-Alto | Limitare il Deep Pass 2 alle zone con reale valore; funzione e leggibilità hanno precedenza |
| Regressione filtri durante interventi CSS/DOM | Bassa | Alto | Mantenere separazione tra layer visuali e `main.js`; non modificare il renderer senza test mirati |
| Uso del proxy al posto del Logo ICA originale | Media finché aperto | Alto identitario | Dipendenza nota: installare SVG originale immutato prima della final approval |
| Asset SVG duplicati / manutenzione crescente | Media | Medio | Nomenclatura stabile e master + varianti orientate; evitare nuovi asset se CSS/SVG esistenti bastano |
| Responsive non verificato visivamente | Media | Alto | Gate obbligatorio a 1440/1024/768/390 px prima di APPROVED |
| Dati futuri presentati come definitivi | Bassa | Alto contenuto | Content-truth audit + campi undefined; nessuna inferenza di vincitore/formato/data |
| Performance degradata da ornamentazione | Bassa-Media | Medio | CSS/SVG-first; evitare raster pesanti; controllare peso totale asset prima della chiusura |
| CSS a strati eccessivi (`style`→`m75`→`m100`→`aesthetic`→`orientation`) | Media | Medio-Alto tecnico | Accettabile in Beta; prima del production-ready consolidare override ridondanti in un layer finale |
| Incoerenza tra reference Copilot e ICA | Media | Alto identitario | Reference = evidenza visiva, non specifica; decisioni ICA prevalgono sempre |

## Rischi più importanti da trattare prima del 100%

1. **Logo ICA originale:** sostituire il proxy senza modificare l'artwork.
2. **Visual regression reale:** verificare quattro breakpoint e i tre stati evento.
3. **Consolidamento CSS:** ridurre gli override accumulati dopo la finalizzazione visiva.
4. **Deep Pass 2 controllato:** migliorare solo gli elementi che aumentano identità e leggibilità, evitando ulteriore ornamentazione gratuita.

## Decisione operativa

Il lavoro di oggi è abbastanza stabile per continuare, ma non va ancora dichiarato `APPROVED` o `PRODUCTION_READY`. Il prossimo passaggio deve essere una revisione renderizzata del sistema ornamentale corretto, seguita da un Deep Pass 2 selettivo e dal consolidamento finale.
