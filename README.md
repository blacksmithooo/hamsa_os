# Hamsa OS

A company operating system for **Hamsa**: one place for the brand, the messaging and everything built from them.
The website is one project inside it. Future work (decks, campaigns, sales material, new pages) should draw on the same
brand and messaging sources, so everything stays consistent.

## What's where

| Folder | What it holds |
|---|---|
| [`brand/`](brand/) | Visual identity: colours, typography, shapes, imagery, logos and font files |
| [`messaging/`](messaging/) | Positioning, audience, tone, product vocabulary, proof points and approved copy |
| [`site/`](site/) | The hamsa.com homepage, built from the Figma design (Astro static site) |
| [`CLAUDE.md`](CLAUDE.md) | Instructions for AI assistants working in this repo |

## Sources of truth

1. **Figma**, "Hamsa homepage" (page R3), for the 2026 design and copy.
2. **`brand/` and `messaging/`**, which summarise that design and the current hamsa.com into reusable rules and copy.
3. Everything else (the site, future projects) is built from 1 and 2.

When copy or brand rules change, update `brand/` or `messaging/` first, then the projects that use them.

## The website

Live preview: https://blacksmithooo.github.io/hamsa_os/ (updates automatically on every push to `main`).
See [`site/README.md`](site/README.md) for how to run and build it.
