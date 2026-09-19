# Sorcery Price DB

Database prezzi di **Sorcery: Contested Realm** usato dal progetto *In Cerca di Avventura*.

## Snapshot corrente

- Data snapshot: **2026-09-19**
- File canonico: `cards_latest.json`
- Record: **3.009 prodotti**
- Fonte: Trolls of the Realm
- Include: **Foil** e **Non-Foil**
- Set principali: Alpha, Beta, Arthurian Legends, Gothic, Dragonlord, più promo/varianti

## Campi principali

`product_id`, `card_id`, `card_name`, `set_name`, `rarity`, `card_type`, `element`, `finish`, `variant`, `condition`, `packaging`, `price_eur`, `available`, `stock_status`, `product_url`, `scraped_at_utc`, più campi raw e flag di qualità.

## Regola di consultazione

Per una quotazione identificare almeno:

1. nome carta;
2. set;
3. Foil / Non-Foil;
4. eventuale variante o condizione.

Non usare il solo nome della carta come chiave, perché possono esistere più stampe e varianti.

## Prompt consigliato in ChatGPT

> Controlla nel repository GitHub `DrQ69/in-cerca-di-avventura`, database `data/sorcery-price-db/cards_latest.json`, il prezzo di [CARTA], set [SET], [Foil/Non-Foil]. Restituisci prezzo e disponibilità.

I prezzi rappresentano lo snapshot della data indicata e non necessariamente il prezzo corrente del negozio.
