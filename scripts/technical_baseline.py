#!/usr/bin/env python3
"""Deterministic source checks for ICA M12 canonical pages."""

from __future__ import annotations

import json
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parents[1]
REGISTRY = ROOT / "qa" / "technical-baseline.json"

REQUIRED_OG = {"og:title", "og:description", "og:type", "og:url", "og:image"}


class PageParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.html_lang: str | None = None
        self.title_parts: list[str] = []
        self.in_title = False
        self.meta: dict[str, str] = {}
        self.canonical: str | None = None
        self.h1_count = 0
        self.local_refs: list[tuple[str, str]] = []
        self.images_missing_alt = 0

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        data = {k.lower(): (v or "") for k, v in attrs}
        tag = tag.lower()

        if tag == "html":
            self.html_lang = data.get("lang") or None
        elif tag == "title":
            self.in_title = True
        elif tag == "meta":
            key = data.get("name") or data.get("property")
            if key:
                self.meta[key.lower()] = data.get("content", "").strip()
            if "charset" in data:
                self.meta["charset"] = data.get("charset", "").strip()
        elif tag == "link" and data.get("rel", "").lower() == "canonical":
            self.canonical = data.get("href") or None
        elif tag == "h1":
            self.h1_count += 1
        elif tag == "img":
            if "alt" not in data:
                self.images_missing_alt += 1
            if data.get("src"):
                self.local_refs.append(("img", data["src"]))
        elif tag == "script" and data.get("src"):
            self.local_refs.append(("script", data["src"]))
        elif tag == "link" and data.get("href"):
            rel = data.get("rel", "").lower()
            if "stylesheet" in rel or "icon" in rel:
                self.local_refs.append(("link", data["href"]))

    def handle_endtag(self, tag: str) -> None:
        if tag.lower() == "title":
            self.in_title = False

    def handle_data(self, data: str) -> None:
        if self.in_title:
            self.title_parts.append(data)

    @property
    def title(self) -> str:
        return "".join(self.title_parts).strip()


def is_local(value: str) -> bool:
    if not value or value.startswith(("#", "data:", "mailto:", "tel:")):
        return False
    parsed = urlparse(value)
    return not parsed.scheme and not parsed.netloc


def resolve_local(page_path: Path, value: str) -> Path:
    clean = value.split("?", 1)[0].split("#", 1)[0]
    if clean.startswith("/"):
        return ROOT / clean.lstrip("/")
    return (page_path.parent / clean).resolve()


def validate_registry(data: object) -> list[str]:
    errors: list[str] = []
    if not isinstance(data, dict):
        return ["qa/technical-baseline.json must contain an object"]
    if data.get("schema_version") != 1:
        errors.append("qa/technical-baseline.json schema_version must be 1")
    if data.get("document_id") != "ICA-TECH-001":
        errors.append("qa/technical-baseline.json document_id must be ICA-TECH-001")
    if not isinstance(data.get("thresholds"), dict):
        errors.append("qa/technical-baseline.json thresholds must be an object")
    if not isinstance(data.get("canonical_pages"), list):
        errors.append("qa/technical-baseline.json canonical_pages must be a list")
    return errors


def validate_page(entry: object, index: int) -> list[str]:
    errors: list[str] = []
    if not isinstance(entry, dict):
        return [f"canonical_pages entry {index} must be an object"]

    path_value = entry.get("path")
    canonical_url = entry.get("canonical_url")
    object_id = entry.get("object_id")

    if not isinstance(path_value, str) or not path_value.strip():
        return [f"canonical_pages entry {index} missing non-empty path"]
    if not isinstance(canonical_url, str) or not canonical_url.startswith("https://"):
        errors.append(f"{path_value}: canonical_url must be absolute HTTPS")
    if not isinstance(object_id, str) or not object_id.strip():
        errors.append(f"{path_value}: object_id must be non-empty")

    page = ROOT / path_value.lstrip("/")
    if not page.exists():
        errors.append(f"{path_value}: registered canonical page file does not exist")
        return errors
    if page.suffix.lower() != ".html":
        errors.append(f"{path_value}: registered canonical page must be an .html file")
        return errors

    parser = PageParser()
    try:
        parser.feed(page.read_text(encoding="utf-8"))
    except Exception as exc:
        errors.append(f"{path_value}: HTML parse/read failed: {exc}")
        return errors

    if not parser.html_lang:
        errors.append(f"{path_value}: missing html lang")
    if parser.meta.get("charset", "").lower() != "utf-8":
        errors.append(f"{path_value}: missing UTF-8 charset")
    if not parser.meta.get("viewport"):
        errors.append(f"{path_value}: missing viewport meta")
    if not parser.title:
        errors.append(f"{path_value}: missing non-empty title")
    if not parser.meta.get("description"):
        errors.append(f"{path_value}: missing meta description")
    if parser.h1_count != 1:
        errors.append(f"{path_value}: expected exactly one h1, found {parser.h1_count}")
    if not parser.canonical:
        errors.append(f"{path_value}: missing canonical link")
    elif not parser.canonical.startswith("https://"):
        errors.append(f"{path_value}: canonical link must use HTTPS")
    elif isinstance(canonical_url, str) and parser.canonical.rstrip("/") != canonical_url.rstrip("/"):
        errors.append(f"{path_value}: canonical link does not match registry canonical_url")

    missing_og = sorted(name for name in REQUIRED_OG if not parser.meta.get(name))
    if missing_og:
        errors.append(f"{path_value}: missing Open Graph metadata: {', '.join(missing_og)}")
    if parser.images_missing_alt:
        errors.append(f"{path_value}: {parser.images_missing_alt} img element(s) missing alt attribute")

    for tag, ref in parser.local_refs:
        if not is_local(ref):
            continue
        target = resolve_local(page, ref)
        try:
            target.relative_to(ROOT.resolve())
        except ValueError:
            errors.append(f"{path_value}: local {tag} reference escapes repository root: {ref}")
            continue
        if not target.exists():
            errors.append(f"{path_value}: missing local {tag} reference: {ref}")

    return errors


def main() -> int:
    if not REGISTRY.exists():
        print("ICA technical baseline: FAIL")
        print("- missing qa/technical-baseline.json")
        return 1

    try:
        data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    except Exception as exc:
        print("ICA technical baseline: FAIL")
        print(f"- invalid qa/technical-baseline.json: {exc}")
        return 1

    errors = validate_registry(data)
    pages = data.get("canonical_pages", []) if isinstance(data, dict) else []
    if isinstance(pages, list):
        for index, entry in enumerate(pages, start=1):
            errors.extend(validate_page(entry, index))

    if errors:
        print("ICA technical baseline: FAIL")
        for error in errors:
            print(f"- {error}")
        return 1

    print("ICA technical baseline: PASS")
    print("- registry structure valid")
    print(f"- canonical pages checked: {len(pages) if isinstance(pages, list) else 0}")
    if not pages:
        print("- canonical coverage pending: legacy/prototype pages are intentionally not registered")
    return 0


if __name__ == "__main__":
    sys.exit(main())
