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

EXPECTED_THRESHOLDS = {
    "wcag_target": "2.2-AA",
    "contrast_normal_text_min": 4.5,
    "contrast_large_text_min": 3.0,
    "contrast_non_text_ui_min": 3.0,
    "touch_target_css_px": 44,
    "lcp_seconds_max": 2.5,
    "cls_max": 0.1,
    "inp_milliseconds_max": 200,
    "lighthouse_performance_min": 90,
}
REQUIRED_OG = {"og:title", "og:description", "og:type", "og:url", "og:image"}
CANONICAL_MARKER_NAME = "ica-status"
CANONICAL_MARKER_VALUE = "canonical"


class PageParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.html_lang: str | None = None
        self.title_count = 0
        self.title_parts: list[str] = []
        self.in_title = False
        self.meta_values: dict[str, list[str]] = {}
        self.canonicals: list[str] = []
        self.h1_count = 0
        self.local_refs: list[tuple[str, str]] = []
        self.images_missing_alt = 0

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        data = {k.lower(): (v or "") for k, v in attrs}
        tag = tag.lower()

        if tag == "html":
            self.html_lang = data.get("lang") or None
        elif tag == "title":
            self.title_count += 1
            self.in_title = True
        elif tag == "meta":
            key = data.get("name") or data.get("property")
            if key:
                self.meta_values.setdefault(key.lower(), []).append(data.get("content", "").strip())
            if "charset" in data:
                self.meta_values.setdefault("charset", []).append(data.get("charset", "").strip())
        elif tag == "link" and "canonical" in data.get("rel", "").lower().split():
            self.canonicals.append(data.get("href", "").strip())
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

    def values(self, key: str) -> list[str]:
        return self.meta_values.get(key.lower(), [])

    def one(self, key: str) -> str:
        values = self.values(key)
        return values[0] if values else ""

    @property
    def is_canonical_marked(self) -> bool:
        return any(v.lower() == CANONICAL_MARKER_VALUE for v in self.values(CANONICAL_MARKER_NAME))


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


def load_parser(page: Path) -> tuple[PageParser | None, str | None]:
    parser = PageParser()
    try:
        parser.feed(page.read_text(encoding="utf-8"))
        return parser, None
    except Exception as exc:
        return None, str(exc)


def validate_registry(data: object) -> list[str]:
    errors: list[str] = []
    if not isinstance(data, dict):
        return ["qa/technical-baseline.json must contain an object"]
    if data.get("schema_version") != 2:
        errors.append("qa/technical-baseline.json schema_version must be 2")
    if data.get("document_id") != "ICA-TECH-001":
        errors.append("qa/technical-baseline.json document_id must be ICA-TECH-001")

    thresholds = data.get("thresholds")
    if not isinstance(thresholds, dict):
        errors.append("qa/technical-baseline.json thresholds must be an object")
    else:
        for key, expected in EXPECTED_THRESHOLDS.items():
            if key not in thresholds:
                errors.append(f"qa/technical-baseline.json thresholds missing {key}")
            elif thresholds[key] != expected:
                errors.append(
                    f"qa/technical-baseline.json threshold {key} must be {expected!r}, found {thresholds[key]!r}"
                )
        extra = sorted(set(thresholds) - set(EXPECTED_THRESHOLDS))
        if extra:
            errors.append(f"qa/technical-baseline.json has unsupported threshold key(s): {', '.join(extra)}")

    pages = data.get("canonical_pages")
    if not isinstance(pages, list):
        errors.append("qa/technical-baseline.json canonical_pages must be a list")
        return errors

    for field in ("object_id", "path", "canonical_url"):
        seen: dict[str, int] = {}
        for index, entry in enumerate(pages, start=1):
            if isinstance(entry, dict) and isinstance(entry.get(field), str):
                value = entry[field].strip().rstrip("/") if field == "canonical_url" else entry[field].strip()
                if value:
                    if value in seen:
                        errors.append(
                            f"canonical_pages duplicate {field} {value!r} in entries {seen[value]} and {index}"
                        )
                    else:
                        seen[value] = index
    return errors


def validate_marked_pages(registered_paths: set[str]) -> list[str]:
    errors: list[str] = []
    for page in ROOT.rglob("*.html"):
        if ".git" in page.parts:
            continue
        parser, parse_error = load_parser(page)
        if parse_error:
            continue
        assert parser is not None
        if parser.is_canonical_marked:
            rel = page.relative_to(ROOT).as_posix()
            if rel not in registered_paths:
                errors.append(f"{rel}: canonical marker present but page is not registered in qa/technical-baseline.json")
    return errors


def validate_page(entry: object, index: int) -> list[str]:
    errors: list[str] = []
    if not isinstance(entry, dict):
        return [f"canonical_pages entry {index} must be an object"]

    path_value = entry.get("path")
    canonical_url = entry.get("canonical_url")
    object_id = entry.get("object_id")
    lang = entry.get("lang")
    indexable = entry.get("indexable")
    shareable = entry.get("shareable")

    if not isinstance(path_value, str) or not path_value.strip():
        return [f"canonical_pages entry {index} missing non-empty path"]
    path_value = path_value.strip().lstrip("/")

    if not isinstance(canonical_url, str) or not canonical_url.startswith("https://"):
        errors.append(f"{path_value}: canonical_url must be absolute HTTPS")
    if not isinstance(object_id, str) or not object_id.strip():
        errors.append(f"{path_value}: object_id must be non-empty")
    if not isinstance(lang, str) or not lang.strip():
        errors.append(f"{path_value}: lang must be non-empty")
    if not isinstance(indexable, bool):
        errors.append(f"{path_value}: indexable must be boolean")
    if not isinstance(shareable, bool):
        errors.append(f"{path_value}: shareable must be boolean")

    page = ROOT / path_value
    if not page.exists():
        errors.append(f"{path_value}: registered canonical page file does not exist")
        return errors
    if page.suffix.lower() != ".html":
        errors.append(f"{path_value}: registered canonical page must be an .html file")
        return errors

    parser, parse_error = load_parser(page)
    if parse_error:
        errors.append(f"{path_value}: HTML parse/read failed: {parse_error}")
        return errors
    assert parser is not None

    if not parser.is_canonical_marked:
        errors.append(f"{path_value}: registered page missing canonical marker meta")
    if isinstance(lang, str) and parser.html_lang != lang:
        errors.append(f"{path_value}: html lang must match registry lang {lang!r}; found {parser.html_lang!r}")

    charset_values = parser.values("charset")
    if len(charset_values) != 1 or charset_values[0].lower() != "utf-8":
        errors.append(f"{path_value}: expected exactly one UTF-8 charset declaration")
    if len(parser.values("viewport")) != 1 or not parser.one("viewport"):
        errors.append(f"{path_value}: expected exactly one non-empty viewport meta")
    if parser.title_count != 1 or not parser.title:
        errors.append(f"{path_value}: expected exactly one non-empty title, found {parser.title_count}")
    if parser.h1_count != 1:
        errors.append(f"{path_value}: expected exactly one h1, found {parser.h1_count}")

    if indexable is True:
        descriptions = parser.values("description")
        if len(descriptions) != 1 or not descriptions[0]:
            errors.append(f"{path_value}: indexable page requires exactly one non-empty meta description")
        if len(parser.canonicals) != 1:
            errors.append(f"{path_value}: indexable page requires exactly one canonical link")
        else:
            canonical = parser.canonicals[0]
            if not canonical.startswith("https://"):
                errors.append(f"{path_value}: canonical link must use HTTPS")
            elif isinstance(canonical_url, str) and canonical.rstrip("/") != canonical_url.rstrip("/"):
                errors.append(f"{path_value}: canonical link does not match registry canonical_url")

    if shareable is True:
        missing_og = sorted(name for name in REQUIRED_OG if len(parser.values(name)) != 1 or not parser.one(name))
        if missing_og:
            errors.append(f"{path_value}: missing/duplicated Open Graph metadata: {', '.join(missing_og)}")
        og_url = parser.one("og:url")
        if isinstance(canonical_url, str) and og_url and og_url.rstrip("/") != canonical_url.rstrip("/"):
            errors.append(f"{path_value}: og:url must match registry canonical_url")
        og_image = parser.one("og:image")
        if og_image and not og_image.startswith("https://"):
            errors.append(f"{path_value}: og:image must be absolute HTTPS")

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
    registered_paths: set[str] = set()
    if isinstance(pages, list):
        for entry in pages:
            if isinstance(entry, dict) and isinstance(entry.get("path"), str):
                registered_paths.add(entry["path"].strip().lstrip("/"))
        errors.extend(validate_marked_pages(registered_paths))
        for index, entry in enumerate(pages, start=1):
            errors.extend(validate_page(entry, index))

    if errors:
        print("ICA technical baseline: FAIL")
        for error in errors:
            print(f"- {error}")
        return 1

    print("ICA technical baseline: PASS")
    print("- registry structure and thresholds valid")
    print(f"- canonical pages checked: {len(pages) if isinstance(pages, list) else 0}")
    if not pages:
        print("- canonical coverage pending: legacy/prototype pages are intentionally not registered")
    return 0


if __name__ == "__main__":
    sys.exit(main())
