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
]

VISUAL_REGISTRY = ROOT / "qa" / "visual-baselines.json"
VISUAL_STATUSES = {"candidate", "approved", "deprecated"}


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
    errors = validate_json() + validate_visual_registry() + validate_html_references()
    if errors:
        print("ICA baseline QA: FAIL")
        for error in errors:
            print(f"- {error}")
        return 1

    print("ICA baseline QA: PASS")
    print("- required JSON parses")
    print("- visual baseline registry is structurally valid")
    print("- registered visual baseline files resolve")
    print("- local asset/script/stylesheet references resolve across all HTML pages")
    return 0


if __name__ == "__main__":
    sys.exit(main())
