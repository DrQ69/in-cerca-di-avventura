#!/usr/bin/env python3
"""Deterministic creative/canonical consistency checks for ICA.

This check is intentionally conservative:
- hard failures target machine-verifiable contradictions;
- historical/legacy files may emit warnings rather than fail;
- semantic Product Owner judgments are never inferred by the script.
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
STATUS_REGISTRY = ROOT / "qa" / "creative-canonical-status.json"
SAMPLE_FIXTURE = ROOT / "tests" / "fixtures" / "canonical-sample.json"

ACTIVE_MARKDOWN_ROOTS = [ROOT / "docs"]

KNOWN_LEGACY_PATHS = {
    "docs/ICA_CANONICAL_SPEC.md",
    "docs/components/P0_SHELL_NAV_SIG.md",
    "docs/M7_1_RESPONSIVE_CONFORMANCE.md",
}

HISTORICAL_CONTEXT_PATHS = {
    "docs/CREATIVE_DECISION_LOG.md",
    "docs/NARRATIVE_ART_BIBLE.md",
    "docs/creative-decisions/DECISION_TESORI_SCOPE.md",
    "docs/creative-decisions/DECISION_MERCANTE_ON_HOLD.md",
}

SUPERSEDED_PATTERNS = {
    "Le Convocazioni del Reame": "superseded event umbrella; use Le Adunanze",
    "IMPRESE / CAMPAGNE / AVVENTURIERI / CRONACHE / IL REAME / ARCHIVIO":
        "legacy primary navigation; Primary IA v1 supersedes it",
    "La Soglia del Reame": "historical Home working title; not canonical",
}

PATH_REF_RE = re.compile(
    r"`((?:docs|qa|tests|scripts)/[A-Za-z0-9_./-]+\.(?:md|json|py|yml|yaml))`"
)
DECISION_DEF_RE = re.compile(
    r"^\|\s*`((?:CDL|PAG-[A-Z0-9-]+)-\d{3})`\s*\|"
)


def rel(path: Path) -> str:
    return path.relative_to(ROOT).as_posix()


def load_registry() -> tuple[dict, list[str]]:
    if not STATUS_REGISTRY.exists():
        return {}, ["Missing qa/creative-canonical-status.json"]
    try:
        data = json.loads(STATUS_REGISTRY.read_text(encoding="utf-8"))
    except Exception as exc:
        return {}, [f"Invalid creative status registry JSON: {exc}"]
    errors: list[str] = []
    if not isinstance(data.get("artifacts"), list):
        errors.append("creative-canonical-status.json: 'artifacts' must be a list")
    return data, errors


def validate_registry(data: dict) -> list[str]:
    errors: list[str] = []
    ranks = data.get("canonical_status_rank", {})
    artifacts = data.get("artifacts", [])
    by_id: dict[str, dict] = {}

    for item in artifacts:
        if not isinstance(item, dict):
            errors.append("Registry artifact entry must be an object")
            continue
        aid = item.get("id")
        path = item.get("path")
        if not aid or not isinstance(aid, str):
            errors.append("Registry artifact missing string id")
            continue
        if aid in by_id:
            errors.append(f"Duplicate registry artifact id: {aid}")
        by_id[aid] = item
        if not path or not isinstance(path, str):
            errors.append(f"{aid}: missing path")
        elif not (ROOT / path).exists():
            errors.append(f"{aid}: registered artifact path does not exist: {path}")
        canon = item.get("canonical_readiness")
        if canon not in ranks:
            errors.append(f"{aid}: unknown canonical_readiness {canon!r}")

    # Canonical Dependency Gate.
    for aid, item in by_id.items():
        downstream = item.get("canonical_readiness")
        if downstream not in ranks or ranks[downstream] < 0:
            continue
        down_rank = ranks[downstream]
        for dep_id in item.get("gating_dependencies", []):
            dep = by_id.get(dep_id)
            if dep is None:
                errors.append(f"{aid}: unknown gating dependency {dep_id}")
                continue
            dep_state = dep.get("canonical_readiness")
            if dep_state not in ranks or ranks[dep_state] < 0:
                errors.append(
                    f"{aid}: gating dependency {dep_id} is {dep_state}; "
                    "downstream promotion is blocked until dependency is reconciled"
                )
                continue
            if down_rank > ranks[dep_state]:
                errors.append(
                    f"{aid}: canonical readiness {downstream} exceeds "
                    f"gating dependency {dep_id} ({dep_state})"
                )
    return errors


def collect_markdown() -> list[Path]:
    files: list[Path] = []
    for root in ACTIVE_MARKDOWN_ROOTS:
        if root.exists():
            files.extend(root.rglob("*.md"))
    return sorted(set(files))


def validate_references(markdown_files: list[Path]) -> list[str]:
    errors: list[str] = []
    for path in markdown_files:
        text = path.read_text(encoding="utf-8")
        for ref in PATH_REF_RE.findall(text):
            if not (ROOT / ref).exists():
                errors.append(f"{rel(path)} references missing path: {ref}")
    return errors


def validate_decision_ids(markdown_files: list[Path]) -> list[str]:
    errors: list[str] = []
    definitions: dict[str, str] = {}
    for path in markdown_files:
        for line_no, line in enumerate(path.read_text(encoding="utf-8").splitlines(), start=1):
            match = DECISION_DEF_RE.match(line)
            if not match:
                continue
            decision_id = match.group(1)
            where = f"{rel(path)}:{line_no}"
            if decision_id in definitions:
                errors.append(
                    f"Decision id {decision_id} defined more than once: "
                    f"{definitions[decision_id]} and {where}"
                )
            else:
                definitions[decision_id] = where
    return errors


def validate_superseded_terms(markdown_files: list[Path]) -> tuple[list[str], list[str]]:
    errors: list[str] = []
    warnings: list[str] = []

    for path in markdown_files:
        rp = rel(path)
        text = path.read_text(encoding="utf-8")

        for phrase, reason in SUPERSEDED_PATTERNS.items():
            if phrase not in text:
                continue
            if rp in HISTORICAL_CONTEXT_PATHS:
                continue
            message = f"{rp}: contains {phrase!r} ({reason})"
            if rp in KNOWN_LEGACY_PATHS:
                warnings.append("RECHECK_REQUIRED: " + message)
            else:
                errors.append(message)

        if rp not in HISTORICAL_CONTEXT_PATHS:
            for match in re.finditer(
                r"(?i)Tesori.{0,100}(guide|tools|documents|documenti|risorse|resources)", text
            ):
                errors.append(
                    f"{rp}: Tesori appears near superseded resource-hub language: "
                    f"{match.group(0)!r}"
                )

        if "/pages/" in rp:
            risky = re.findall(r"(?im)^.*\bAvatar\b.*$", text)
            for line in risky:
                lowered = line.lower()
                if not any(
                    token in lowered
                    for token in ("sorcery", "game", "card", "reserved", "never", "non ", "not ")
                ):
                    errors.append(
                        f"{rp}: possible protected-term misuse of Avatar: {line.strip()}"
                    )

    return errors, warnings


def validate_fixture() -> list[str]:
    errors: list[str] = []
    if not SAMPLE_FIXTURE.exists():
        return ["Missing tests/fixtures/canonical-sample.json"]
    try:
        data = json.loads(SAMPLE_FIXTURE.read_text(encoding="utf-8"))
    except Exception as exc:
        return [f"Invalid canonical sample JSON: {exc}"]

    if data.get("synthetic_fixture") is not True:
        errors.append("canonical-sample.json must declare synthetic_fixture=true")

    objects = data.get("objects", {})
    events = {x.get("id"): x for x in objects.get("events", [])}
    orgs = {x.get("id"): x for x in objects.get("organizations", [])}
    venues = {x.get("id"): x for x in objects.get("venues", [])}
    players = {x.get("id"): x for x in objects.get("players", [])}

    for key in ["events", "organizations", "venues", "players", "results", "decks", "articles"]:
        if not objects.get(key):
            errors.append(f"canonical sample missing non-empty objects.{key}")

    for eid, event in events.items():
        if event.get("is_giostra"):
            if event.get("organizer_id") != "ORG-ICA":
                errors.append(f"{eid}: Giostra organizer must be ORG-ICA")
            if event.get("competitive") is not True:
                errors.append(f"{eid}: Giostra must be competitive=true")
        if event.get("status") == "CANCELLED" and event.get("registration_url"):
            errors.append(f"{eid}: cancelled event must not expose registration_url")
        if event.get("organizer_id") and event["organizer_id"] not in orgs:
            errors.append(f"{eid}: unresolved organizer_id {event['organizer_id']}")
        if event.get("venue_id") and event["venue_id"] not in venues:
            errors.append(f"{eid}: unresolved venue_id {event['venue_id']}")

    for result in objects.get("results", []):
        if result.get("event_id") not in events:
            errors.append(f"{result.get('id')}: unresolved event_id")
        for pid in result.get("player_ids", []):
            if pid not in players:
                errors.append(f"{result.get('id')}: unresolved player_id {pid}")

    for deck in objects.get("decks", []):
        if deck.get("player_id") not in players:
            errors.append(f"{deck.get('id')}: unresolved player_id")
        if deck.get("event_id") not in events:
            errors.append(f"{deck.get('id')}: unresolved event_id")

    article_types = {a.get("editorial_type") for a in objects.get("articles", [])}
    if "NEWS" not in article_types:
        errors.append("canonical sample must include a Proclamo/NEWS article")
    if "CRONACA" not in article_types:
        errors.append("canonical sample must include a Cronaca article")

    scenario_tags = set(data.get("coverage", []))
    for expected in {"complete", "sparse", "missing_optional", "cancelled"}:
        if expected not in scenario_tags:
            errors.append(f"canonical sample coverage missing scenario: {expected}")

    return errors


def main() -> int:
    registry, registry_load_errors = load_registry()
    markdown = collect_markdown()

    hard_errors: list[str] = []
    warnings: list[str] = []

    hard_errors.extend(registry_load_errors)
    if registry:
        hard_errors.extend(validate_registry(registry))
    hard_errors.extend(validate_references(markdown))
    hard_errors.extend(validate_decision_ids(markdown))
    superseded_errors, superseded_warnings = validate_superseded_terms(markdown)
    hard_errors.extend(superseded_errors)
    warnings.extend(superseded_warnings)
    hard_errors.extend(validate_fixture())

    if warnings:
        print("ICA creative consistency: WARNINGS")
        for warning in warnings:
            print(f"- {warning}")

    if hard_errors:
        print("ICA creative consistency: FAIL")
        for error in hard_errors:
            print(f"- {error}")
        return 1

    artifacts = registry.get("artifacts", []) if registry else []
    complete = sum(1 for a in artifacts if a.get("delivery_status") == "COMPLETE")
    review_ready = sum(
        1 for a in artifacts
        if a.get("canonical_readiness") in {"REVIEW_REQUIRED", "PRODUCT_OWNER_LOCKED_SCOPE", "APPROVED"}
    )
    po_locked = sum(
        1 for a in artifacts
        if a.get("canonical_readiness") in {"PRODUCT_OWNER_LOCKED_SCOPE", "APPROVED"}
    )

    print("ICA creative consistency: PASS")
    print(f"- registered artifacts: {len(artifacts)}")
    print(f"- delivery-complete artifacts: {complete}")
    print(f"- canonical review-or-higher artifacts: {review_ready}")
    print(f"- Product Owner locked/approved scopes: {po_locked}")
    print("- canonical dependency gate passed")
    print("- registered path references resolve")
    print("- decision definition IDs are unique")
    print("- active docs contain no high-confidence superseded terminology misuse")
    print("- canonical vertical-slice fixture is structurally coherent")
    return 0


if __name__ == "__main__":
    sys.exit(main())
