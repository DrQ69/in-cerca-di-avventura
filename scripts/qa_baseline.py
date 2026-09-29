#!/usr/bin/env python3
"""Lightweight deterministic QA for ICA's current static baseline."""

from __future__ import annotations

import json
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parents[1]

JSON_FILES = [
    ROOT / "assets" / "manifest.json",
    ROOT / "tests" / "fixtures" / "responsive-stress.json",
    ROOT / "qa" / "visual-baselines.json",
    ROOT / "data" / "players.json",
]

VISUAL_REGISTRY = ROOT / "qa" / "visual-baselines.json"
VISUAL_STATUSES = {"candidate", "approved", "deprecated"}
ASSET_MANIFEST = ROOT / "assets" / "manifest.json"
PUBLIC_PLAYERS = ROOT / "data" / "players.json"
FORBIDDEN_PUBLIC_PLAYER_FIELDS = {"real_name", "event_display_name"}
ASSET_STATUSES = {"planned", "concept", "candidate", "approved", "deprecated", "archived"}


class LocalRefParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.refs: list[tuple[str, str]] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attr_map = dict(attrs)
        if tag in {"img", "script"} and attr_map.get("src"):
            self.refs.append((tag, attr_map["src"] or ""))
        if tag == "link" and attr_map.get("href"):
            self.refs.append((tag, attr_map["href"] or ""))


def is_local_reference(value: str) -> bool:
    if not value or value.startswith(("#", "data:", "mailto:", "tel:")):
        return False
    parsed = urlparse(value)
    return not parsed.scheme and not parsed.netloc


def resolve_repo_path(value: str) -> Path:
    clean = value.split("?", 1)[0].split("#", 1)[0]
    return ROOT / clean.lstrip("/")


def resolve_html_reference(source: Path, value: str) -> Path:
    clean = value.split("?", 1)[0].split("#", 1)[0]
    if clean.startswith("/"):
        return ROOT / clean.lstrip("/")
    return source.parent / clean


def validate_json() -> list[str]:
    errors: list[str] = []
    for path in JSON_FILES:
        if not path.exists():
            errors.append(f"Missing required JSON file: {path.relative_to(ROOT)}")
            continue
        try:
            json.loads(path.read_text(encoding="utf-8"))
        except Exception as exc:
            errors.append(f"Invalid JSON in {path.relative_to(ROOT)}: {exc}")
    return errors


def validate_visual_registry() -> list[str]:
    errors: list[str] = []
    if not VISUAL_REGISTRY.exists():
        return ["Missing qa/visual-baselines.json"]

    try:
        data = json.loads(VISUAL_REGISTRY.read_text(encoding="utf-8"))
    except Exception:
        return errors  # validate_json reports parse failures

    baselines = data.get("baselines")
    if not isinstance(baselines, list):
        return ["qa/visual-baselines.json: 'baselines' must be a list"]

    for index, entry in enumerate(baselines, start=1):
        if not isinstance(entry, dict):
            errors.append(f"Visual baseline entry {index} must be an object")
            continue

        status = entry.get("status")
        if status not in VISUAL_STATUSES:
            errors.append(
                f"Visual baseline entry {index} has invalid status {status!r}; "
                f"expected one of {sorted(VISUAL_STATUSES)}"
            )

        baseline_file = entry.get("file")
        if not isinstance(baseline_file, str) or not baseline_file.strip():
            errors.append(f"Visual baseline entry {index} is missing a non-empty 'file' path")
            continue

        target = resolve_repo_path(baseline_file)
        if not target.exists():
            errors.append(
                f"Visual baseline entry {index} references missing file: {baseline_file}"
            )

    return errors



def validate_manifest_assets() -> list[str]:
    errors: list[str] = []
    if not ASSET_MANIFEST.exists():
        return ["Missing assets/manifest.json"]
    try:
        data = json.loads(ASSET_MANIFEST.read_text(encoding="utf-8"))
    except Exception:
        return errors

    assets = data.get("assets", [])
    if not isinstance(assets, list):
        return ["assets/manifest.json: 'assets' must be a list"]

    for index, entry in enumerate(assets, start=1):
        if not isinstance(entry, dict):
            errors.append(f"Asset manifest entry {index} must be an object")
            continue

        status = entry.get("status")
        if status not in ASSET_STATUSES:
            errors.append(
                f"Asset manifest entry {index} has invalid status {status!r}; "
                f"expected one of {sorted(ASSET_STATUSES)}"
            )

        if entry.get("exists") is True:
            path = entry.get("path")
            if not isinstance(path, str) or not path.strip():
                errors.append(f"Asset manifest entry {index} is marked exists=true but has no path")
                continue
            if not resolve_repo_path(path).exists():
                errors.append(f"Asset manifest entry {index} references missing file: {path}")

        if status == "approved":
            approval = entry.get("approval")
            if not isinstance(approval, dict):
                errors.append(f"Approved asset entry {index} is missing approval metadata")
            else:
                for key in ("authority", "date", "record"):
                    if not approval.get(key):
                        errors.append(f"Approved asset entry {index} approval metadata is missing {key!r}")
            source = entry.get("source")
            permission = source.get("licence_or_permission") if isinstance(source, dict) else None
            if not isinstance(permission, str) or not permission.strip():
                errors.append(f"Approved asset entry {index} is missing licence/permission basis")
            elif "to-be-confirmed" in permission.lower():
                errors.append(f"Approved asset entry {index} still has unconfirmed licence/permission basis")
    return errors


def validate_public_player_registry() -> list[str]:
    errors: list[str] = []
    if not PUBLIC_PLAYERS.exists():
        return ["Missing data/players.json"]
    try:
        data = json.loads(PUBLIC_PLAYERS.read_text(encoding="utf-8"))
    except Exception:
        return errors

    players = data.get("players", [])
    if not isinstance(players, list):
        return ["data/players.json: 'players' must be a list"]

    for index, player in enumerate(players, start=1):
        if not isinstance(player, dict):
            errors.append(f"Public player entry {index} must be an object")
            continue
        forbidden = sorted(FORBIDDEN_PUBLIC_PLAYER_FIELDS.intersection(player))
        if forbidden:
            errors.append(
                f"Public player entry {index} contains forbidden reconciliation field(s): "
                + ", ".join(forbidden)
            )
    return errors

def validate_html_references() -> list[str]:
    errors: list[str] = []
    html_files = sorted(ROOT.rglob("*.html"))
    if not html_files:
        return ["No HTML files found"]

    for html_file in html_files:
        parser = LocalRefParser()
        try:
            parser.feed(html_file.read_text(encoding="utf-8"))
        except Exception as exc:
            errors.append(f"Unable to parse {html_file.relative_to(ROOT)}: {exc}")
            continue

        for tag, ref in parser.refs:
            if not is_local_reference(ref):
                continue
            target = resolve_html_reference(html_file, ref)
            if not target.exists():
                errors.append(
                    f"Missing local {tag} reference in {html_file.relative_to(ROOT)}: {ref}"
                )

    return errors


def main() -> int:
    errors = validate_json() + validate_visual_registry() + validate_manifest_assets() + validate_public_player_registry() + validate_html_references()
    if errors:
        print("ICA baseline QA: FAIL")
        for error in errors:
            print(f"- {error}")
        return 1

    print("ICA baseline QA: PASS")
    print("- required JSON parses")
    print("- visual baseline registry is structurally valid")
    print("- registered visual baseline files resolve")
    print("- manifest entries marked exists=true resolve to files")
    print("- approved assets carry approval metadata and a non-pending permission basis")
    print("- public player registry contains no forbidden reconciliation fields")
    print("- local asset/script/stylesheet references resolve across all HTML pages")
    return 0


if __name__ == "__main__":
    sys.exit(main())
