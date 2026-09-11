# In Cerca di Avventura

## Obiettivo del progetto

Community hub italiano dedicato a **Sorcery: Contested Realm**: eventi, lega,
alleanze dinastiche, risultati, profili degli Avventurieri (i giocatori) e
community. Direzione visiva dark fantasy anni '80 — niente estetica da SaaS,
dashboard aziendale o mobile game.

## Struttura attuale

```
in-cerca-di-avventura/
├── index.html            Pagina unica del sito (tutte le sezioni)
├── CLAUDE.md             Istruzioni persistenti per Claude Code
├── docs/
│   ├── PROJECT_CONTEXT.md Contesto prodotto, architettura e roadmap
│   └── DESIGN_SYSTEM.md   Direzione visiva e regole UI
├── assets/
│   ├── css/style.css     Stili del sito
│   ├── js/main.js        Interazioni (menu mobile, anno in footer)
│   ├── favicon-32.png
│   ├── hero-fantasy.webp Immagine hero
│   └── logo-emblem.webp  Logo/emblema, usato in header e come sigillo decorativo
└── README.md
```

Sezioni presenti in `index.html`: Home, Eventi, Lega, Alleanze Dinastiche,
Risultati, Avventurieri, Community — ciascuna una `<section>` a sé stante,
ancorata dal menu di navigazione.

## Convenzioni principali

- Nessun framework, build tool o dipendenza da installare: solo HTML, CSS e
  JavaScript semplice, più Google Fonts caricato via CDN (Cinzel, Cinzel
  Decorative, Inter).
- CSS e JS vivono in `assets/css/style.css` e `assets/js/main.js`, non
  inline in `index.html`.
- Non si inventano eventi, risultati, partner o contenuti editoriali: tutto
  ciò che appare nel sito deve corrispondere a informazioni reali fornite dal
  team.
- Palette e materiali: blu notte/pietra, nero, oro antico, acciaio, accenti
  rossi, pietra screpolata, metallo brunito, elementi araldici. I titoli
  principali usano un trattamento oro inciso (gradiente + contorno scuro).
- Un backend si introduce solo quando diventa necessario (es. gestione
  eventi/risultati/profili a volume); finché il contenuto resta gestibile a
  mano, si resta su HTML statico.

## Documentazione progetto

- [`CLAUDE.md`](CLAUDE.md) — regole operative per Claude Code.
- [`docs/PROJECT_CONTEXT.md`](docs/PROJECT_CONTEXT.md) — obiettivi, sezioni, relazioni dati, contenuti e roadmap.
- [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md) — identità dark-fantasy, tipografia, palette, componenti e criteri visuali.

## Modalità di sviluppo

Nessuna build richiesta. Per lavorare in locale è sufficiente aprire
`index.html` nel browser, oppure servirlo con un server statico qualsiasi,
ad esempio:

```
python3 -m http.server 8000
```

e visitare `http://localhost:8000`.
