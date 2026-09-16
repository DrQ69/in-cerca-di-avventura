#!/usr/bin/env python3
"""Validate ICA CR1 vertical slice against the canonical synthetic fixture.

Scope:
Home -> Adunanza/Giostra -> Result -> Cronaca -> Avventuriero

This script validates structure/state semantics only. The fixture is synthetic and
must never be interpreted as production community truth.
"""

from __future__ import annotations

import json
import sys
from pathlib import Path
from datetime import datetime

ROOT = Path(__file__).resolve().parents[1]
FIXTURE = ROOT / "tests" / "fixtures" / "canonical-sample.json"
REQUIRED_DOCS = [
    ROOT / "docs" / "pages" / "PAGE_HOME.md",
    ROOT / "docs" / "pages" / "PAGE_ADUNANZE.md",
    ROOT / "docs" / "pages" / "PAGE_GIOSTRE.md",
    ROOT / "docs" / "pages" / "PAGE_CRONACHE.md",
    ROOT / "docs" / "pages" / "PAGE_AVVENTURIERI.md",
    ROOT / "docs" / "CONTENT_GOVERNANCE.md",
    ROOT / "docs" / "PAGE_STATE_MODEL.md",
    ROOT / "docs" / "CONTENT_READINESS_GATE.md",
    ROOT / "docs" / "RESPONSIVE_ART_DIRECTION.md",
    ROOT / "docs" / "NARRATIVE_AESTHETIC_QA.md",
    ROOT / "docs" / "components" / "SHARED_COMPONENT_REGISTRY.md",
]


def parse_dt(value: str) -> datetime:
    return datetime.fromisoformat(value)


def main() -> int:
    errors: list[str] = []
    notes: list[str] = []

    for path in REQUIRED_DOCS:
        if not path.exists():
            errors.append(f"missing required vertical-slice document: {path.relative_to(ROOT)}")

    try:
        data = json.loads(FIXTURE.read_text(encoding="utf-8"))
    except Exception as exc:
        print(f"ICA vertical slice: FAIL\n- invalid fixture: {exc}")
        return 1

    if data.get("synthetic_fixture") is not True:
        errors.append("fixture must declare synthetic_fixture=true")

    objects = data.get("objects", {})
    events = {x["id"]: x for x in objects.get("events", [])}
    orgs = {x["id"]: x for x in objects.get("organizations", [])}
    venues = {x["id"]: x for x in objects.get("venues", [])}
    players = {x["id"]: x for x in objects.get("players", [])}
    results = {x["id"]: x for x in objects.get("results", [])}
    decks = {x["id"]: x for x in objects.get("decks", [])}
    articles = {x["id"]: x for x in objects.get("articles", [])}

    # HOME featured-event deterministic selector.
    eligible = [e for e in events.values() if e.get("status") == "UPCOMING"]
    overrides = [e for e in eligible if e.get("home_featured") is True]
    if overrides:
        selected = sorted(overrides, key=lambda e: parse_dt(e["start_at"]))[0]
    else:
        selected = sorted(
            eligible,
            key=lambda e: (
                parse_dt(e["start_at"]),
                0 if e.get("is_giostra") else 1,
                0 if e.get("organizer_id") == "ORG-ICA" else 1,
                e["id"],
            ),
        )[0] if eligible else None
    if not selected or selected.get("id") != "EVT-ADU-002":
        errors.append("Home selector did not resolve expected nearest eligible Adunanza EVT-ADU-002")
    else:
        notes.append("Home selector: nearest eligible Adunanza PASS")

    # Adunanze normal/sparse/cancelled cases.
    sparse = events.get("EVT-ADU-002")
    if not sparse:
        errors.append("missing sparse Adunanza EVT-ADU-002")
    else:
        if sparse.get("format") is not None or sparse.get("registration_url") is not None:
            errors.append("sparse Adunanza fixture must keep format/registration optional fields missing")
        if sparse.get("venue_id") not in venues:
            errors.append("sparse Adunanza venue does not resolve")
        else:
            notes.append("Sparse/missing-optional Adunanza PASS")

    cancelled = events.get("EVT-CAN-003")
    if not cancelled or cancelled.get("status") != "CANCELLED":
        errors.append("missing cancelled Adunanza case")
    elif cancelled.get("registration_url"):
        errors.append("cancelled event exposes registration CTA")
    else:
        notes.append("Cancelled event CTA/status contract PASS")

    # Giostra invariant.
    giostre = [e for e in events.values() if e.get("is_giostra") is True]
    if not giostre:
        errors.append("fixture contains no Giostra")
    for event in giostre:
        if event.get("competitive") is not True or event.get("organizer_id") != "ORG-ICA":
            errors.append(f"{event['id']}: Giostra invariant failed")
    if giostre:
        notes.append("Giostra competitive + ICA-organized invariant PASS")

    # Completed event -> result -> Cronaca -> player/deck.
    completed = events.get("EVT-GIO-000")
    result = results.get("RES-001")
    cronaca = articles.get("ART-CHR-001")
    if not completed or completed.get("status") != "COMPLETED":
        errors.append("completed Giostra EVT-GIO-000 missing or wrong status")
    if not result or result.get("event_id") != "EVT-GIO-000":
        errors.append("RES-001 does not resolve to completed Giostra")
    if not cronaca or cronaca.get("editorial_type") != "CRONACA":
        errors.append("ART-CHR-001 missing or not classified CRONACA")
    else:
        if "EVT-GIO-000" not in cronaca.get("related_event_ids", []):
            errors.append("Cronaca does not reference completed Giostra")
        for pid in cronaca.get("related_player_ids", []):
            if pid not in players:
                errors.append(f"Cronaca unresolved player relation: {pid}")

    if result:
        for standing in result.get("standings", []):
            if standing.get("player_id") not in players:
                errors.append(f"Result unresolved player: {standing.get('player_id')}")

    deck = decks.get("DECK-001")
    if not deck or deck.get("event_id") != "EVT-GIO-000" or deck.get("player_id") != "PLY-001":
        errors.append("DECK-001 does not resolve to expected event/player")
    elif not deck.get("atlas") or not deck.get("spellbook"):
        errors.append("DECK-001 does not preserve Atlas/Spellbook structure")
    else:
        notes.append("Completed Giostra -> Result -> Cronaca -> Player/Deck chain PASS")

    # Sparse Avventuriero.
    sparse_player = players.get("PLY-003")
    if not sparse_player:
        errors.append("missing sparse Avventuriero PLY-003")
    else:
        if not sparse_player.get("nickname") or sparse_player.get("profile_visibility") != "PUBLIC":
            errors.append("sparse Avventuriero lacks routable public nickname identity")
        if sparse_player.get("organization_id") is not None:
            errors.append("PLY-003 should keep optional organization missing for sparse-state validation")
        if result and "PLY-003" not in result.get("player_ids", []):
            errors.append("sparse Avventuriero is not reachable from result")
        if cronaca and "PLY-003" not in cronaca.get("related_player_ids", []):
            errors.append("sparse Avventuriero is not reachable from Cronaca")
        notes.append("Sparse Avventuriero truthful-profile contract PASS")

    # News remains distinct from Cronaca.
    news = articles.get("ART-NEWS-001")
    if not news or news.get("editorial_type") != "NEWS":
        errors.append("fixture missing explicit Proclamo/NEWS")
    elif "EVT-GIO-001" not in news.get("related_event_ids", []):
        errors.append("Proclamo does not resolve to upcoming Giostra")
    else:
        notes.append("Proclamo/Cronaca classification boundary PASS")

    # Basic relation integrity.
    for event in events.values():
        if event.get("organizer_id") not in orgs:
            errors.append(f"{event['id']}: organizer unresolved")
        if event.get("venue_id") and event.get("venue_id") not in venues:
            errors.append(f"{event['id']}: venue unresolved")

    # Cross-document contract evidence. Tokens are matched case-insensitively
    # because the gate validates semantic presence rather than exact casing.
    checks = {
        "docs/CONTENT_GOVERNANCE.md": ["Narrative never overwrites facts", "Privacy beats completeness"],
        "docs/PAGE_STATE_MODEL.md": ["LIVE_SPARSE", "cancelled"],
        "docs/CONTENT_READINESS_GATE.md": ["PASS_LIVE", "Prossima Adunanza"],
        "docs/RESPONSIVE_ART_DIRECTION.md": ["Mobile is ICA essenziale", "44x44"],
        "docs/NARRATIVE_AESTHETIC_QA.md": ["NAQ-02", "NAQ-25"],
        "docs/components/SHARED_COMPONENT_REGISTRY.md": ["CMP-EVT-CARD", "CMP-RESULT-SUMMARY", "CMP-PLAYER-REF"],
    }
    for rel_path, required_tokens in checks.items():
        text = (ROOT / rel_path).read_text(encoding="utf-8")
        lowered = text.casefold()
        for token in required_tokens:
            if token.casefold() not in lowered:
                errors.append(f"{rel_path}: required vertical-slice contract token missing: {token}")

    if errors:
        print("ICA vertical slice: FAIL")
        for error in errors:
            print(f"- {error}")
        return 1

    print("ICA vertical slice: PASS")
    for note in notes:
        print(f"- {note}")
    print("- Content Governance contract presence PASS")
    print("- Page State / Readiness contract presence PASS")
    print("- Responsive contract presence PASS")
    print("- Narrative & Aesthetic QA contract presence PASS")
    print("- Shared-component evidence contract PASS")
    print("- Fixture is synthetic and non-production")
    return 0


if __name__ == "__main__":
    sys.exit(main())
