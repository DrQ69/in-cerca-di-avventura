#!/usr/bin/env python3
"""Dependency-free integrity checks for the static site."""

from __future__ import annotations

import re
import sys
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]
SKIP_SCHEMES = {"http", "https", "mailto", "tel", "data", "javascript"}
CSS_URL_RE = re.compile(r"url\(\s*(['\"]?)(.*?)\1\s*\)", re.IGNORECASE)


class PageParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.ids: list[str] = []
        self.refs: list[tuple[str, str, int]] = []
        self.images_without_alt: list[int] = []
        self.html_lang: str | None = None
        self.has_title = False
        self._in_title = False
        self._title_text: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attrs_dict = dict(attrs)
        line, _ = self.getpos()

        if tag == "html":
            self.html_lang = attrs_dict.get("lang")
        if tag == "title":
            self._in_title = True
        if "id" in attrs_dict and attrs_dict["id"]:
            self.ids.append(attrs_dict["id"] or "")
        if tag == "img" and "alt" not in attrs_dict:
            self.images_without_alt.append(line)

        if tag in {"a", "link"} and attrs_dict.get("href"):
            self.refs.append(("href", attrs_dict["href"] or "", line))
        if tag in {"img", "script", "source", "video", "audio", "iframe"} and attrs_dict.get("src"):
            self.refs.append(("src", attrs_dict["src"] or "", line))

    def handle_endtag(self, tag: str) -> None:
        if tag == "title":
            self._in_title = False
            if "".join(self._title_text).strip():
                self.has_title = True

    def handle_data(self, data: str) -> None:
        if self._in_title:
            self._title_text.append(data)


def resolve_local(base_file: Path, raw_ref: str) -> tuple[Path | None, str | None, bool]:
    """Return target path, fragment and whether a placeholder '#' was found."""
    raw_ref = raw_ref.strip()
    if not raw_ref:
        return None, None, False
    if raw_ref == "#":
        return None, None, True

    parsed = urlsplit(raw_ref)
    if parsed.scheme.lower() in SKIP_SCHEMES or parsed.netloc:
        return None, None, False

    fragment = unquote(parsed.fragment) if parsed.fragment else None
    path_part = unquote(parsed.path)

    if not path_part:
        return base_file, fragment, False

    if path_part.startswith("/"):
        target = ROOT / path_part.lstrip("/")
    else:
        target = base_file.parent / path_part

    target = target.resolve()
    try:
        target.relative_to(ROOT.resolve())
    except ValueError:
        return target, fragment, False

    if target.is_dir():
        target = target / "index.html"
    return target, fragment, False


def parse_html(path: Path) -> PageParser:
    parser = PageParser()
    parser.feed(path.read_text(encoding="utf-8"))
    parser.close()
    return parser


def main() -> int:
    errors: list[str] = []
    warnings: list[str] = []
    html_files = sorted(ROOT.rglob("*.html"))
    css_files = sorted(ROOT.rglob("*.css"))

    if not html_files:
        errors.append("No HTML files found.")

    parsed_pages: dict[Path, PageParser] = {}
    for html in html_files:
        parser = parse_html(html)
        parsed_pages[html.resolve()] = parser
        rel = html.relative_to(ROOT)

        if not parser.html_lang:
            errors.append(f"{rel}: <html> is missing a lang attribute.")
        if not parser.has_title:
            errors.append(f"{rel}: missing a non-empty <title>.")
        for line in parser.images_without_alt:
            errors.append(f"{rel}:{line}: <img> is missing alt text.")

        duplicates = [item for item, count in Counter(parser.ids).items() if count > 1]
        for duplicate in duplicates:
            errors.append(f"{rel}: duplicate id #{duplicate}.")

    for html in html_files:
        parser = parsed_pages[html.resolve()]
        rel = html.relative_to(ROOT)
        for attr, raw_ref, line in parser.refs:
            target, fragment, placeholder = resolve_local(html, raw_ref)
            if placeholder:
                warnings.append(f"{rel}:{line}: placeholder {attr}=\"#\" remains.")
                continue
            if target is None:
                continue
            if not target.exists():
                try:
                    target_rel = target.relative_to(ROOT)
                except ValueError:
                    target_rel = target
                errors.append(f"{rel}:{line}: broken local reference {raw_ref!r} -> {target_rel}.")
                continue
            if fragment and target.suffix.lower() == ".html":
                target_parser = parsed_pages.get(target.resolve())
                if target_parser is None:
                    target_parser = parse_html(target)
                    parsed_pages[target.resolve()] = target_parser
                if fragment not in target_parser.ids:
                    errors.append(f"{rel}:{line}: fragment #{fragment} not found in {target.relative_to(ROOT)}.")

    for css in css_files:
        rel = css.relative_to(ROOT)
        text = css.read_text(encoding="utf-8")
        for match in CSS_URL_RE.finditer(text):
            raw_ref = match.group(2).strip()
            target, _, placeholder = resolve_local(css, raw_ref)
            if placeholder or target is None:
                continue
            if not target.exists():
                try:
                    target_rel = target.relative_to(ROOT)
                except ValueError:
                    target_rel = target
                errors.append(f"{rel}: broken CSS url({raw_ref!r}) -> {target_rel}.")

    print(f"Checked {len(html_files)} HTML file(s) and {len(css_files)} CSS file(s).")
    if warnings:
        print("\nWarnings:")
        for item in warnings:
            print(f"  WARN: {item}")
    if errors:
        print("\nErrors:")
        for item in errors:
            print(f"  ERROR: {item}")
        print(f"\nStatic integrity check FAILED with {len(errors)} error(s).")
        return 1

    print(f"\nStatic integrity check PASSED with {len(warnings)} warning(s).")
    return 0


if __name__ == "__main__":
    sys.exit(main())
