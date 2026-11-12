"""Validate the static export before CI passes or a release is activated."""

from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import re
import sys
import xml.etree.ElementTree as ET


class Page(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.language = None
        self.canonical = None
        self.resources = []
        self.icons = []
        self.robots = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'html':
            self.language = attrs.get('lang')
        if tag == 'link' and attrs.get('rel') == 'canonical':
            self.canonical = attrs.get('href')
        if tag == 'link' and attrs.get('rel') == 'icon':
            self.icons.append(attrs.get('href'))
        if tag == 'meta' and attrs.get('name', '').lower() == 'robots':
            self.robots.extend(value.strip().lower() for value in attrs.get('content', '').split(','))
        for name in ('src', 'href', 'poster'):
            if name in attrs:
                self.resources.append(attrs[name])


def require(condition, message):
    if not condition:
        raise RuntimeError(message)


def validate(directory):
    base = Path(directory).resolve()
    require(base.is_dir(), f'Missing export: {base}')
    for path in base.rglob('*'):
        require(not path.is_symlink(), f'Symlink in export: {path}')
        require(path.is_file() or path.is_dir(), f'Non-regular export entry: {path}')

    expected = set()
    services = ('redesign', 'design', 'development', 'ai-code-repair', 'consulting')
    for language, prefix in [('en', ''), ('de', 'de/'), ('ru', 'ru/')]:
        for suffix in ('', 'impressum/', 'datenschutz/', *(f'services/{s}/' for s in services)):
            path = base / prefix / suffix / 'index.html'
            html = path.read_text()
            page = Page()
            page.feed(html)
            url = f'https://rootforce.dev/{prefix}{suffix}'
            require(page.language == language, f'Wrong lang: {path}')
            require(page.canonical == url, f'Wrong canonical: {path}: {page.canonical}')
            require('rootforce' in html.lower(), f'Invalid page: {path}')
            require(not {'noindex', 'none'}.intersection(page.robots), f'Page blocked from indexing: {path}')
            require(page.icons == ['/favicon.ico', '/icon.svg'], f'Unexpected favicon URLs: {path}: {page.icons}')
            expected.add(url)

    references = 0
    for path in base.rglob('*.html'):
        page = Page()
        page.feed(path.read_text())
        for resource in page.resources:
            parts = urlsplit(resource)
            if parts.scheme or parts.netloc or not parts.path:
                continue
            target = (base / unquote(parts.path).lstrip('/') if parts.path.startswith('/')
                      else path.parent / unquote(parts.path)).resolve()
            require(target.is_relative_to(base), f'Escaping reference: {resource}')
            require(target.is_file() or (target / 'index.html').is_file(),
                    f'Missing reference in {path}: {resource}')
            references += 1

    for path in base.rglob('*.css'):
        for groups in re.findall(r'''url\(\s*(?:"([^"]*)"|'([^']*)'|([^\)\s]*))\s*\)''', path.read_text()):
            resource = next((value for value in groups if value), '')
            parts = urlsplit(resource)
            if parts.scheme or parts.netloc or not parts.path:
                continue
            target = (base / unquote(parts.path).lstrip('/') if parts.path.startswith('/')
                      else path.parent / unquote(parts.path)).resolve()
            require(target.is_relative_to(base) and target.is_file(), f'Missing CSS asset: {resource}')

    sitemap = ET.parse(base / 'sitemap.xml')
    urls = {node.text for node in sitemap.findall('.//{*}loc')}
    require(expected == urls, f'Unexpected sitemap URLs: missing={expected - urls}, extra={urls - expected}')
    for name in ('404.html', 'robots.txt', 'llms.txt', 'favicon.ico', 'icon.svg'):
        require((base / name).is_file(), f'Missing {name}')
    error_page = Page()
    error_page.feed((base / '404.html').read_text())
    require('noindex' in error_page.robots, '404 page must stay excluded from indexing')
    print(f'PASS: {len(expected)} indexable localized pages, {references} references, CSS assets, stable favicons, sitemap and noindex 404')
    return sorted(urlsplit(url).path for url in expected)


if __name__ == '__main__':
    validate(sys.argv[1] if len(sys.argv) > 1 else 'out')
