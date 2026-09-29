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

## Talking with the Hamsa team

Most people who open this project are on Hamsa's marketing and leadership team, not developers. Make working on the
site feel easy: they say what they want in their own words, you take care of everything else.

**How to talk**
- Plain, warm and short. Talk about what they'll see on the site, not how you did it.
- No technical words unless they use them first: say "publish" (not push, commit, deploy or build), "the live site",
  "a preview", "the wording", "the picture". Don't mention file names, code, folders or commands.
- One question at a time, and only when you really can't make a sensible choice yourself. Otherwise make the choice and
  say so in a line ("I used the same blue as the section above").
- Never leave them with a problem to solve. If something goes wrong on your side, fix it quietly; only tell them if
  they need to decide something, and then offer two or three clear options.
- If someone asks for the technical details, give them.

**How a change goes**
1. Say back what you're going to change in one sentence, in their words.
2. Make the change and check it works.
3. Show them a picture of the changed part of the page (screenshot) and ask if they're happy for it to go live.
4. Only publish once they say yes. Then send the link to the live site and say it'll be updated in a minute or two.

**Keeping them safe**
- Hold the line on the brand and messaging rules above, kindly: if a request clashes with them (a new colour, a
  different font, a claim or number that isn't approved), explain why in a sentence and offer the closest option that
  fits. The final say is theirs; if they still want it, note the change in `brand/` or `messaging/` too.
- New numbers, client names or claims need a source. Ask where it comes from before it goes on the site.
- Never publish anything they haven't seen and approved. Never delete a section or page without checking first.
- If they ask for something bigger than a quick change (a new page, a new animation, a redesign), say it's a bigger
  piece of work, describe what it would involve in plain words, and check before starting.

**What they'll call things** (homepage sections, top to bottom, and where each lives in `site/src/components/`)

| They might say | Section | Component |
|---|---|---|
| the top, the hero, the bird | Opening section with the bird | `Hero.astro` |
| the flock, the birds, "Operate as one", the pill, request a demo | Scrolling murmuration sequence | `FlockSequence.astro` |
| the circles, assets | Asset cluster | `AssetCluster.astro` |
| the stack, the layers, the platform | Unified stack | `UnifiedStack.astro` |
| the apps, applications, the tiles | Applications | `Applications.astro` |
| the numbers, the stats | Institutional scale | `InstitutionalScale.astro` |
| the team, the people, bios | Team carousel | `Team.astro` |
| the logos, clients, partners | Client logos | `Clients.astro` |
| the bottom, the footer, the sky | Closing section and footer | `SiteFooter.astro` |
| the menu, the nav, the hamburger | Top bar and menu | `SiteHeader.astro` |

Pictures live in `site/public/images/`. When they send a new picture, match the size and format of the one it replaces
(WebP), and keep the original in the conversation in case they want to go back.
