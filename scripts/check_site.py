#!/usr/bin/env python3
"""Build-time checks for the generated CINS documentation site.

Uses only the Python standard library. This is a content/accessibility/performance
smoke check, not a security audit or a substitute for manual assistive-technology
and physical-device testing.
"""
from __future__ import annotations

import argparse
import posixpath
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

BASE_PATH = "/cyber-field-guide/"
MAX_HTML_BYTES = 2 * 1024 * 1024
MAX_SINGLE_ASSET_BYTES = 1024 * 1024
MAX_TOTAL_CSS_JS_BYTES = 3 * 1024 * 1024


class PageAudit(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.ids: set[str] = set()
        self.html_lang = False
        self.title_seen = False
        self.title_text = ""
        self.in_title = False
        self.viewport = False
        self.images_missing_alt: list[str] = []
        self.links_missing_name: list[str] = []
        self.headings: list[int] = []
        self._heading: int | None = None
        self._anchor: dict[str, object] | None = None

    def handle_starttag(self, tag: str, attrs_list) -> None:
        attrs = dict(attrs_list)
        if tag == "html":
            self.html_lang = bool(attrs.get("lang", "").strip())
        if "id" in attrs:
            self.ids.add(attrs["id"])
        if tag == "meta" and attrs.get("name", "").lower() == "viewport":
            self.viewport = bool(attrs.get("content", "").strip())
        if tag == "title":
            self.title_seen = True
            self.in_title = True
        if tag == "img" and "alt" not in attrs:
            self.images_missing_alt.append(attrs.get("src", "(unknown image)"))
        if tag == "a":
            self._anchor = {
                "href": attrs.get("href", ""),
                "name": bool(attrs.get("aria-label") or attrs.get("title")),
                "text": "",
                "href_label": attrs.get("href", ""),
            }
        if tag in {"h1", "h2", "h3", "h4", "h5", "h6"}:
            self._heading = int(tag[1])
            self.headings.append(self._heading)
        if tag == "img" and self._anchor is not None and attrs.get("alt"):
            self._anchor["name"] = True

    def handle_endtag(self, tag: str) -> None:
        if tag == "title":
            self.in_title = False
        if tag == "a" and self._anchor is not None:
            if self._anchor["href_label"] and not self._anchor["name"] and not str(self._anchor["text"]).strip():
                self.links_missing_name.append(str(self._anchor["href_label"]))
            self._anchor = None
        if tag in {"h1", "h2", "h3", "h4", "h5", "h6"}:
            self._heading = None

    def handle_data(self, data: str) -> None:
        if self.in_title:
            self.title_text += data
        if self._anchor is not None:
            self._anchor["text"] = str(self._anchor["text"]) + data


def resolve_local_target(site: Path, page: Path, href: str) -> tuple[Path, str]:
    parsed = urlsplit(href)
    raw_path = unquote(parsed.path)
    if raw_path.startswith(BASE_PATH):
        raw_path = raw_path[len(BASE_PATH):]
    elif raw_path.startswith("/"):
        raw_path = raw_path.lstrip("/")
    elif not raw_path:
        raw_path = page.relative_to(site).as_posix()
    else:
        raw_path = posixpath.normpath(
            posixpath.join(page.relative_to(site).parent.as_posix(), raw_path)
        )
    if raw_path in {"", "."}:
        raw_path = "index.html"
    target = (site / raw_path).resolve()
    if target.is_dir():
        target = target / "index.html"
    elif not target.suffix:
        directory_target = target / "index.html"
        html_target = target.with_suffix(".html")
        target = directory_target if directory_target.exists() else html_target
    try:
        target.relative_to(site.resolve())
    except ValueError:
        raise ValueError("path escapes generated site")
    return target, unquote(parsed.fragment)


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--site-dir", default="site")
    args = parser.parse_args()
    site = Path(args.site_dir).resolve()
    if not site.is_dir():
        print(f"ERROR: generated site directory not found: {site}")
        return 1

    pages = sorted(site.rglob("*.html"))
    errors: list[str] = []
    warnings: list[str] = []
    checked_links = 0
    missing_alt = 0
    unnamed_links = 0
    html_total = 0

    for page in pages:
        relative = page.relative_to(site).as_posix()
        size = page.stat().st_size
        html_total += size
        if size > MAX_HTML_BYTES:
            warnings.append(f"{relative}: HTML is {size:,} bytes (budget {MAX_HTML_BYTES:,})")
        audit = PageAudit()
        try:
            audit.feed(page.read_text(encoding="utf-8"))
        except (UnicodeDecodeError, OSError) as exc:
            errors.append(f"{relative}: cannot parse HTML: {exc}")
            continue

        if not audit.html_lang:
            errors.append(f"{relative}: missing html lang attribute")
        if not audit.title_seen or not audit.title_text.strip():
            errors.append(f"{relative}: missing document title")
        if not audit.viewport:
            errors.append(f"{relative}: missing viewport meta")
        for src in audit.images_missing_alt:
            missing_alt += 1
            errors.append(f"{relative}: image missing alt attribute: {src}")
        for href in audit.links_missing_name:
            unnamed_links += 1
            warnings.append(f"{relative}: link may lack an accessible name: {href or '(empty href)'}")
        if not audit.headings or 1 not in audit.headings:
            warnings.append(f"{relative}: no main h1 heading detected")
        for previous, current in zip(audit.headings, audit.headings[1:]):
            if current > previous + 1:
                warnings.append(f"{relative}: heading level jumps from h{previous} to h{current}")
                break

        source = page.read_text(encoding="utf-8")
        page_parser = LinkParser()
        page_parser.feed(source)
        for href in page_parser.hrefs:
            parsed = urlsplit(href)
            if parsed.scheme or parsed.netloc or href.startswith(("mailto:", "tel:", "data:", "javascript:")):
                continue
            checked_links += 1
            try:
                target, fragment = resolve_local_target(site, page, href)
            except ValueError as exc:
                errors.append(f"{relative}: unsafe local link {href}: {exc}")
                continue
            if not target.is_file():
                errors.append(f"{relative}: broken local link {href} -> {target.relative_to(site) if target.is_relative_to(site) else target}")
            elif fragment:
                try:
                    target_audit = PageAudit()
                    target_audit.feed(target.read_text(encoding="utf-8"))
                    if fragment not in target_audit.ids:
                        errors.append(f"{relative}: missing fragment #{fragment} in {target.relative_to(site)}")
                except OSError as exc:
                    errors.append(f"{relative}: cannot inspect fragment target {href}: {exc}")

    assets = [p for p in site.rglob("*") if p.is_file() and p.suffix.lower() in {".css", ".js"}]
    asset_total = sum(p.stat().st_size for p in assets)
    for asset in assets:
        if asset.stat().st_size > MAX_SINGLE_ASSET_BYTES:
            warnings.append(f"{asset.relative_to(site)}: asset is {asset.stat().st_size:,} bytes (budget {MAX_SINGLE_ASSET_BYTES:,})")
    if asset_total > MAX_TOTAL_CSS_JS_BYTES:
        warnings.append(f"combined CSS/JS is {asset_total:,} bytes (budget {MAX_TOTAL_CSS_JS_BYTES:,})")

    print(f"Pages checked: {len(pages)}")
    print(f"Local links checked: {checked_links}")
    print(f"HTML payload total: {html_total:,} bytes")
    print(f"CSS/JS payload total: {asset_total:,} bytes")
    print(f"Images missing alt: {missing_alt}")
    print(f"Links possibly missing accessible names: {unnamed_links}")
    print(f"Warnings: {len(warnings)}")
    for item in warnings:
        print(f"WARNING: {item}")
    print(f"Errors: {len(errors)}")
    for item in errors:
        print(f"ERROR: {item}")
    return 1 if errors else 0


class LinkParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.hrefs: list[str] = []

    def handle_starttag(self, tag: str, attrs_list) -> None:
        if tag == "a":
            href = dict(attrs_list).get("href")
            if href is not None:
                self.hrefs.append(href)


if __name__ == "__main__":
    sys.exit(main())
