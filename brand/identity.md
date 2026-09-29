# Hamsa visual identity

Two sources, clearly separated:

- **2026 homepage design** (Figma file "Hamsa homepage", page R3). This is the current direction and what `site/` implements.
- **Current hamsa.com**, collected from the live site as reference. Older palette; use it only where the 2026 design is silent.

## Typography

| Role | Typeface | Notes |
|---|---|---|
| Everything (display and body) | **Degular** (OH no Type Co) | Weights used: Regular 400, Italic, Medium 500, Semibold 600, Bold 700 |
| Fallback | Figtree (free, Google Fonts) | Closest free match measured; fills in characters missing from the Degular trial files |

The files in `fonts/` are **Degular Demo trial files**. They contain only A–Z, a–z, 0–9, space, comma and full stop, and a
trial licence usually doesn't allow use on a published website. For production, load Degular from an Adobe Fonts web
project (Hamsa has it through Adobe Creative Cloud) and set the embed URL in `site/src/config.ts`.

### Type scale (2026 design, desktop 1440px)

| Style | Size / line height | Weight | Tracking | Used for |
|---|---|---|---|---|
| Display XL | 116 / 98.6 (85%) | 400 or 500 | 0 | Hero headline, "Operate at institutional scale." |
| Display L | 80 / 68–80 | 500 | 0 | Flock phrases, "Keep your data private." |
| Heading | 48 / 45.6–48 | 500 | 0 | Section headlines |
| Menu link | 46 / 41.4 | 500 | −0.46 | Full-screen menu |
| Subhead | 40 / 40 | 400 | 0 | Hero subhead |
| Card title | 28 / 23.8 | 500 | 0 | Platform layer cards |
| Tile title | 24 / 24 | 600 | 0 | Application tiles |
| Body L | 20 / 26.54 | 400 | 0 | Intro paragraphs (10px paragraph spacing) |
| Body | 16 / 21.23 | 400–600 | 0 | Bios, tile descriptions |
| Small | 14 / 18.58 | 500–600 | 0 | Card body |
| Eyebrow | 14 / 13.3 | 600 | 2.8 (20%), uppercase | Section labels |
| Footer label | 11 / 10.45 | 500 | 2.2, uppercase | Footer and menu column labels |

## Colour (2026 design)

The palette is one ramp from navy through pink to gold.

| Token | Hex | Where |
|---|---|---|
| Navy | `#313150` | Footer, darkest menu shade, stat tile 5 (solid) |
| Indigo | `#3b3b61` | Gradient start |
| Pink | `#d2506a` | Primary accent, card titles, stat tile 1 |
| Raspberry | `#aa4864` | Stat tile 2, DTA tile |
| Plum | `#82415d` | Stat tile 3, Settlement tile |
| Aubergine | `#593956` | Stat tile 4, AI Reconciliation tile |
| Gold | `#ffc34a` | Gradient end |
| Text | `#000000` | Headlines and body |
| Muted text | `#666666` | Card body, footnotes |
| Tile grey | `#f4f4f4` | Empty stat tiles |
| Rule | `#cdcdcd` | Dividers |
| Footer label | `#b1b1c0` | Footer labels and small print |

**Brand gradient:** `#3b3b61 → #d2506a → #ffc34a` (0 / 50 / 100%). Used on the platform panel, the asset circles and the team
photo band. The menu background steps through 11 shades from `#d2506a` to `#313150`, one per link.

## Shape and effects

- Pill buttons: 2px black outline, fully rounded; fill black at 85% on hover.
- Radii: 10px tiles and photos, 20px cards and panels, 50px large section cards, 100px image capsules.
- Card shadow: `0 0 50px rgba(0,0,0,.15)`.
- Frosted glass: white at 2–5% with a background blur.

## Imagery

Starlings and murmurations (flocks moving as one) are the recurring motif: a single starling in the hero, a flock for
"Operate as one", and a murmuration over a sunset in the footer. Soft cloud skies sit behind product content.

## Logos

In `logos/` (SVG, exported from the Figma file):

- `hamsa-logo-black.svg`, `hamsa-logo-white.svg`: horizontal logo (mark + wordmark)
- `hamsa-icon-black.svg`, `hamsa-icon-white.svg`: hamsa mark alone
- `hamsa-wordmark-white.svg`: large "Hamsa" wordmark used across the footer

## Current hamsa.com (reference only)

- Fonts: Degular (display) and Inter (body)
- Swatches: dark blue `#176bf8`, blue `#43b9dc`, light blue `#6bbff5`, violet `#8cb1f7`, purple `#ee4bc8`, light pink `#f995bc`,
  coral `#ff8774`, orange `#ff8473`, yellow `#ffbd03`, off-yellow `#fabd6a`, green `#27c4a6`, light green `#9cc9bd`,
  neutral darkest `#1d2730`, neutral `#8fa5b9`, neutral lightest `#f9fafd`
- Radii: pill buttons (`100vw`), 1rem cards, 0.5rem small
