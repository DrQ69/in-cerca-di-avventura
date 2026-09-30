# ICA — SPRINT 1 COMPLETION REPORT
**Sprint:** Fondamenta dati · **Chiuso:** 2026-09-30

## Deliverable integrati
- PR #109 — dataset foundation: validazione bundle pubblico sanitizzato, diff read-only, release builder/manifest+SHA-256, reader condiviso, consumer predisposti, preview privata, test/checklist.
- PR #110 — hardening: E2E HTTP sintetico manifest/hash, hard-fail su file manomesso, rollback sintetico, audit-log pubblico allowlist, boundary campi XLSX, packager candidato privato current→candidate.
- PR #111 — XLSX intake gate: provenance/freshness della sorgente, cache formula Generale/Draft/Constructed, gate ufficialità e Fair Play, summary non sensibile.
- Merge: #109 `56fc8cf9`; #110 `aa00e04a`; #111 `ef43339a`.

## Test realmente eseguiti
- PR #109: 9 workflow GitHub finali verdi sul pacchetto; include core, baseline, visual QA homepage/Adunanze/Cronache/Avventurieri, runtime, banner consistency e performance Adunanze. Un primo campione Lighthouse mobile Adunanze fu fuori soglia; retry PASS senza ridurre le soglie.
- PR #110: workflow corretto dopo code review; full core run `36766766353` SUCCESS e baseline `36766766359` SUCCESS. Il run completo include network activation/rollback, audit log e candidate packager.
- PR #111: core `36768807983` SUCCESS con test intake XLSX realmente incluso; baseline `36768807861` SUCCESS.

## Limitazioni residue
- **Fair Play DEC-09.7 resta OPEN** (+2 vs +3 non deciso).
- **Primo import XLSX reale NON eseguito**.
- **Manifest live NON attivato**; i consumer restano in modalità legacy approvata.
- Preview privata disponibile come strumento schematico, non sostituisce QA browser reale su una futura release dati.
- Nessun dataset competitivo è stato pubblicato durante Sprint 1.

## Definition of Done Sprint 1
COMPLETATA per il perimetro tecnico: fondazione, hardening, intake gate e documentazione sono in `main`, con test pertinenti verdi. Le limitazioni sopra appartengono al primo rilascio dati reale e **non bloccano Sprint 2**.
