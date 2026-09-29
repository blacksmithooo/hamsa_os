# Hamsa OS: notes for AI assistants

This repo is Hamsa's company OS: brand, messaging and the projects built from them.

- Before writing anything customer-facing (copy, decks, emails, pages), read `messaging/company.md` for positioning and
  tone, and `messaging/homepage-2026.md` for approved wording. Reuse approved lines rather than inventing new claims.
- Proof points must match `messaging/company.md`. The 2026 figures are ten-year forecasts and must carry their footnote.
- For anything visual, follow `brand/guidelines.md` and look at `brand/reference/` first. Hamsa is rebranding: the
  Figma file is the only source for the look. Never reuse colours, fonts, layouts, imagery or headlines from the old
  hamsa.com; it may only be used for background facts about the company.
- For anything animated, use only the Murmuration curve and the durations in `brand/motion.md` (CSS tokens
  `--ease-hamsa`, `--ease-hamsa-exit`, `--dur-1…4`, `--stagger`); never hand-pick easing values.
- Don't present missing content (e.g. team bios marked "not written yet") as real; flag it instead.
- Update `brand/` or `messaging/` first when rules or copy change, then the projects that use them.

## Website (`site/`)

- Astro static site. Run npm commands inside `site/`. `npm run build` must pass before pushing.
- Built from the Figma file "Hamsa homepage" (key `0LwfdnxrfQpYSaMd4BZGN0`), page R3. Use exact Figma values. Many Figma
  sections are drawn several times to show scroll or hover states; build each section once and turn the copies into
  behaviour (see the header comment in each component).
- Asset paths go through `asset()` in `src/lib/asset.ts` so the site works under `/hamsa_os/` on GitHub Pages.
- Pushing to `main` deploys to GitHub Pages automatically.
