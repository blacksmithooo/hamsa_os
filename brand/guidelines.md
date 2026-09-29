# Hamsa brand guidelines

Written for anyone (person or AI agent) designing something new for Hamsa: a business card, an email, a newsletter, a
deck, a social post, a web page. Read it top to bottom once, then use the sections as reference.

## 0. Source of truth

- Hamsa is going through a **complete rebrand**. The only source for the visual identity is the Figma file
  **"Hamsa homepage"** (file key `0LwfdnxrfQpYSaMd4BZGN0`): the *Components* page, the *Cover* page, and the latest
  homepage design on page *R3* (frame "Hamsa homepage 2026 8"). Pages R1 and R2 are earlier rounds; ignore them.
- **Do not use anything from the old hamsa.com** (colours, fonts, layouts, imagery, headlines). It is the previous brand.
- Every rule below is marked by where it comes from:
  - **Observed**: measured directly in the Figma file. Treat as a rule.
  - **Derived**: our recommendation for formats the file doesn't show, built from the observed rules. Use it, but a
    designer's call can override it.
- Reference images of the real designs are in [`reference/`](reference/). Look at them before designing anything.

## 1. Brand character (Observed)

What the design consistently does, in one paragraph: **calm, precise, institutional, with one warm burst of colour.**
Pages are mostly white with black type set in a single typeface. Colour arrives in concentrated moments: a
navy → cerise → gold gradient, solid cerise panels, a starling photograph. Nothing is decorated for its own sake; every
element sits on a strict 12-column grid. Motion and imagery return to one idea: many things **moving as one**
(a murmuration of starlings).

Five principles that follow from the file:

1. **White first.** White is the most-used fill by far (106 uses vs 36 gradient uses). Colour is an event, not a background.
2. **One typeface, few weights.** Degular only. Medium (500) for headlines, Regular (400) for large statements and body, Semibold (600) for labels.
3. **Big, tight headlines.** Display sizes run at 85–100% line height with no extra tracking.
4. **Everything on the grid.** Every width in the file is a whole number of grid columns (see §5).
5. **Soft, not sharp.** Rounded corners everywhere (10px minimum), frosted glass, blurred colour glows, soft shadows. No hard drop shadows, no outlines except the pill button and tile borders.

## 2. Logo (Observed)

### Parts

- **The mark** (the hamsa hand, with its five "flocking" fingertip shapes): `logos/hamsa-mark-*.svg`
- **The wordmark** ("Hamsa" set in Degular): `logos/hamsa-wordmark-white.svg`
- **Lockups** (mark + wordmark):
  - **Horizontal** (mark left, wordmark right), 142 × 61 in the file: `logos/hamsa-logo-horizontal-*.svg`
  - **Vertical** (mark above, wordmark below, centred), 168 × 153: `logos/hamsa-logo-vertical-*@2x.png`

### Colourways

The Figma components define exactly four logo colours. Use no others.

| Colourway | Hex | Use on |
|---|---|---|
| Black | `#000000` | White and very light backgrounds (the site nav) |
| White | `#FFFFFF` | Cerise, the colour ramp, navy, photography (menu, cover, footer) |
| Cerise | `#D2506A` | White backgrounds, when a touch of colour is wanted |
| Light Gray | `#EFEFEF` | Dark backgrounds where pure white is too strong |

**Never** fill the logo with the gradient. The gradient belongs to icons and graphic shapes.

### How the design uses the logo

- **Navigation:** horizontal lockup, 142px wide, top-left, 48px from the frame edge, vertically centred in a 65px bar.
- **Sign-off mark:** the mark alone (56 × 63) centred above a closing headline, in black on white.
- **Footer:** the mark alone (54 × 61, white) top-left, and the wordmark at huge size spanning the full content width (1312px) as a graphic base.
- **Cover / title slide:** mark alone, top-right (116 × 131 on 1920 × 1080), and the wordmark filling the bottom of the frame (1770px wide).
- **Oversized wordmark** is a signature move: the word "Hamsa" set edge to edge, anchored to the bottom, in white on a colour field. Use it on covers, footers, backs of cards and end slides.

### Clear space and minimum size (Derived)

- Keep clear space around a lockup at least the height of the mark's top fingertip cluster (about 25% of the lockup height).
- Minimum size: horizontal lockup 100px / 25mm wide; the mark alone 20px / 6mm tall.
- Don't stretch, rotate, recolour outside the four colourways, add effects, or put the logo on a busy part of a photo.

## 3. Colour (Observed)

### Core palette

The design's own colour names (from the Figma styles and components) are **Cerise**, **Indigo** and **Light Gray**.
The other names below are ours, for easy reference.

| Name | Hex | Role |
|---|---|---|
| **Cerise** | `#D2506A` | Primary brand colour: accent text, the menu, cover backgrounds, tile 1 |
| **Indigo** | `#3B3B61` | Gradient start; deep accent |
| **Navy** | `#313150` | Darkest brand colour: footer base, end of the ramp |
| **Gold** | `#FFC34A` | Gradient end only; never a flat fill for text areas |
| Black | `#000000` | Headlines and body text |
| White | `#FFFFFF` | Dominant background; text on colour |

### The ramp

The design steps from Cerise to Navy in even increments. The menu uses all 11 steps (one per link). The stats and
application tiles use four or five colours spread along the same ramp (the two marked — sit between menu steps).

| Step | Hex | Name (ours) | Used for |
|---|---|---|---|
| 1 | `#D2506A` | Cerise | Tile 1, menu link 1, Subaccounting |
| 2 | `#C24D67` | | Menu link 2 |
| 3 | `#B24A65` | | Menu link 3 |
| — | `#AA4864` | Raspberry | Tile 2, Digital Transfer Agency |
| 4 | `#A24762` | | Menu link 4 |
| 5 | `#924460` | | Menu link 5 |
| 6 | `#82415D` | Plum | Tile 3, menu link 6, Settlement and Tokenization |
| 7 | `#713D5A` | | Menu link 7 |
| 8 | `#613A58` | | Menu link 8 |
| — | `#593956` | Aubergine | Tile 4, AI Reconciliation |
| 9 | `#513755` | | Menu link 9 |
| 10 | `#413453` | | Menu link 10 |
| 11 | `#313150` | Navy | Tile 5 (solid), menu link 11, footer |

**Tints** (lighter versions of a ramp colour, used only for thin lines and "+" marks on or near that colour):
`#DE7086` (Cerise), `#C1607C` (Raspberry), `#A86381` (Plum), `#7F597C` (Aubergine).

**Rule of use:** when a set of items needs colour-coding (products, stats, chapters), give them consecutive ramp steps in
order, lightest (Cerise) first. Never mix ramp colours randomly.

### The gradient: "Hamsa Tri-Color"

The only named colour style actually used in the design:

```
Indigo #3B3B61 (0%) → Cerise #D2506A (50%) → Gold #FFC34A (100%)
```

- Runs **diagonally from top-left (Indigo) to bottom-right (Gold)**. In CSS, a close equivalent on a wide panel is
  `linear-gradient(102deg, #3B3B61 0%, #D2506A 50%, #FFC34A 100%)`; on squarer shapes, about 130deg.
- Used on: the product icons, the platform panel behind the product cards, the asset circles, and the 9px band under
  the active team photo.
- When several shapes sit together (the asset circles), the gradient continues across the whole group, as if one
  gradient were showing through all of them, rather than repeating inside each shape.
- The file also defines two unused styles, "Cerise to Indigo 3 tone" and "Indigo to Cerise". Their values aren't in the
  current design, so don't invent them.

### Neutrals

| Hex | Use |
|---|---|
| `#666666` | Secondary text (card body, footnotes) |
| `#B1B1C0` | Small labels and legal text on Navy |
| `#CDCDCD` | Hairline dividers on white |
| `#D9D9D9` | Mask/placeholder grey |
| `#EFEFEF` | Light Gray (logo colourway, soft surfaces) |
| `#F4F4F4` | Empty tiles, subtle cards |

### Proportions (Observed)

Measured across the whole homepage design by area: **about 58% white, 15% soft greys (embossed backgrounds, pale skies),
26% colour and photography, 1% black** (type is thin, so it's small by area even though it's everywhere). Colour and
photography come in concentrated blocks (the flock band, the platform panel, the menu, the footer); in between, the page
is white. On a "colour moment" the colour field fills the space and everything on it is white.

### Contrast (computed, WCAG)

| Combination | Ratio | Verdict |
|---|---|---|
| Black on white | 21:1 | Any size |
| `#666666` on white | 5.7:1 | Any size |
| White on Cerise `#D2506A` | 4.1:1 | **Large text only** (≥ 24px, or ≥ 18.5px bold) |
| Cerise text on white | 4.1:1 | **Large text only** |
| White on Raspberry `#AA4864` and anything darker | 5.5:1 → 12.5:1 | Any size |
| `#B1B1C0` on Navy | 5.9:1 | Any size |
| Black on Gold | 13.2:1 | Any size |
| White on Gold | 1.6:1 | **Never** |

For small text on colour, use Raspberry or darker. Cerise backgrounds carry only large type (as on the cover and menu).

## 4. Typography (Observed)

### Typeface

**Degular** (OH no Type Co), for everything. There is no second typeface. Production use needs a licence; Hamsa can use
it through Adobe Fonts. The trial files in `fonts/` have letters and numbers only and are **not licensed for publishing**.
Fallback when Degular can't load (e.g. email clients): Figtree (free, closest match), then Helvetica/Arial.

Weights in use: **Regular 400**, *Italic 400* (footnotes only), **Medium 500**, **Semibold 600**. Bold 700 appears only
for a lead-in phrase inside small card text.

### Type scale (desktop, 1440px frame)

| Role | Size / line height | Weight | Tracking | Case | Seen as |
|---|---|---|---|---|---|
| Cover title | 128 / 128 | Regular | 0 | Sentence | "Homepage 2026" on the cover |
| Display | 116 / 98.6 (85%) | Regular or Medium | 0 | Sentence | Hero, "Operate at institutional scale." |
| Display 2 | 80 / 68–80 (85–100%) | Medium | 0 | Sentence | "Keep your data private." |
| Stat figure | 52 / 52 | Medium | −0.52 (−1%) | As written | "$100M+" |
| Headline | 48 / 45.6–48 (95–100%) | Medium | 0 | Sentence | Section headlines |
| Nav link (large) | 46 / 41.4 (90%) | Medium | −0.46 (−1%) | Sentence | Full-screen menu links |
| Subhead | 40 / 40 | Regular | 0 | Sentence | Hero subhead |
| Panel title | 36 / 36 | Semibold | 0 | Title | "Hamsa Unified Operating System" |
| Tagline | 32 / 32 | Regular | 0 | Sentence | "Powering the Finternet" |
| Card title | 28 / 23.8 (85%) | Medium | 0 | Title | Product layer cards |
| Tile title | 24 / 24 | Semibold | 0 | Title | Application tiles |
| Button | 24 / 31.85 | Medium | 0 | Sentence | "Request a demo" |
| Footer link | 23 / 20.7 (90%) | Medium | −0.23 (−1%) | Sentence | Footer links |
| Body large | 20 / 26.54 (133%) | Regular | 0 | Sentence | Intro paragraphs |
| Tile label | 18 / 18 | Semibold | +1.8 (10%) | UPPER | Stat tile labels |
| Body | 16 / 21.23 (133%) | Medium or Semibold | 0 | Sentence | Bios, tile descriptions |
| Eyebrow | 14 / 13.3 (95%) | Semibold | +2.8 (20%) | UPPER | Section labels ("APPLICATIONS") |
| Small | 14 / 18.58 (133%) | Medium | 0 | Sentence | Card body |
| Micro label | 11 / 10.45 | Medium | +2.2 (20%) | UPPER | Footer/menu column labels |
| Micro data | 11 / 14.6 | Semibold | +2.2 (20%) | UPPER | City clocks |
| Index number | 8 / 7.6 | Semibold | +1.6 (20%) | UPPER | "01", "02" on cards |

### Rules

- **Headlines are Medium (500), set tight** (85–100% line height), with no added tracking. The very largest statements
  may use Regular (hero, cover) for elegance.
- **Large sizes get −1% tracking** (46px and 52px, and 23px links); small uppercase labels get **+10–20%**.
- **Uppercase is only for small labels** (eyebrows, micro labels, tile labels). Never for headlines or body.
- **Body text is 133% line height** (20/26.54, 16/21.23, 14/18.58), with **10px between paragraphs** (no indents).
- **Headlines end with a full stop** ("Operate as one."), except the clients headline ("Trusted by business across the globe").
- **Deliberate line breaks.** Two-line headlines break at the sentence or phrase boundary, e.g.
  "Stop building infrastructure. / Build what's next."
- **Alignment:** section intros are **centred**; the hero, editorial copy blocks, cards and lists are **left-aligned**.
- **Emphasis inside body text** is a bold lead-in phrase, not italics or colour ("**Run your books and records in real time.** Gain continuous visibility…").
- Italic appears only in footnotes (`#666666`, 20px, centred).

## 5. Layout and grid (Observed)

### The grid

The Figma frame has a defined layout grid:

- **Frame:** 1440px wide (desktop)
- **12 columns**, each **87.33px**
- **Gutters:** 24px
- **Outer margins:** 64px each side → **1312px content width**

Every element width in the file is a whole number of columns (n columns = n × 87.33 + (n − 1) × 24):

| Columns | Width | Used for |
|---|---|---|
| 12 | 1312 | Full content: section cards, footer wordmark, closing block |
| 10 | 1090 | Platform panel; stats row (5 tiles) |
| 8 | 866 | Product layer cards; the 2 × 2 application grid |
| 5 | 533 | Editorial copy block (text beside an illustration) |
| 4 | 421 | Application tile (2 per row) |
| 3 | 310 | Team photo |
| 2 | 199 | Stat tile (5 in a row with 24px gaps) |

Column left edges: 64 · 175 · 287 · 398 · 509 · 621 · 732 · 844 · 955 · 1067 · 1177 · 1289. The most common text
starts are 64, 287, 509, 732, 955 and 1177, i.e. every second column.

### Spacing

- **Copy blocks** (eyebrow + headline + body) have 40px top/side padding and 35px bottom.
- **Eyebrow → headline:** the headline starts 37px below the top of the eyebrow (about 24px of clear space).
- **Headline → body:** about 22–27px.
- **Body → button:** about 36–41px.
- **Between sections:** 110–230px of white on the 1440 frame. Generous space is part of the look; when in doubt, add more.
- **Grid gaps:** 24px between columns and tiles; 20px between stacked tiles; 253px pitch for stacked product cards.
- **Nav bar:** 65px tall, 1px bottom border (white at 25%).

### Section patterns

1. **Hero (left-aligned).** A huge headline in the left 8–9 columns; subhead below; one photograph (a single starling) bleeding off the right edge.
2. **Centred intro.** Eyebrow, headline, body, all centred; content (tiles, cards, stats) below on the grid.
3. **Split.** Copy block on the left (5 columns), illustration on the right (the circle cluster).
4. **Colour panel.** A gradient or photo panel with rounded corners (20–50px); white cards or tiles floating on it.
5. **Row of tiles.** 2, 4 or 5 equal tiles on the grid; colour-coded with ramp steps in order.
6. **Carousel.** Photos in a row on a 334px step, the active one at column 3, the others running off both edges.
7. **Closing block.** Mark, centred two-line headline, one line of body, one pill button.
8. **Footer.** A full-bleed photo fading into a Navy base (from 62% of its height); link columns on the grid; the giant wordmark at the bottom.

### Other formats seen in the file

- **Cover / title slide** (1920 × 1080): full Cerise background; title in Degular Regular 128px white, top-left
  at (71, 46); the mark top-right, 64px in from the right; the wordmark filling the bottom, starting at x = 64.

## 6. Shapes, surfaces and effects (Observed)

### Corner radii

Five values only:

| Radius | Use | Count |
|---|---|---|
| 10px | Tiles, photos, small cards | 100 |
| 20px | Product cards, gradient panels | 10 |
| 29.25px (fully round) | Pill buttons (58.5px tall) | 6 |
| 50px | Large section cards (e.g. the 1312 × 763 applications card) | 5 |
| 100px (fully round) | Image capsules and circles | 3 |

### Buttons

- **One button style:** the outlined **pill**. 2px black outline, transparent fill with a light frosted blur, text Degular
  Medium 24px, height 58.5px, fully rounded, about 290px wide. On hover it fills black at 85% with white text.
- Button labels are short verb phrases: "Request a demo", "Explore applications".

### Surfaces

- **Frosted glass:** white at 2–5% opacity with a background blur (15–50). Used for the nav bar, buttons and tiles over imagery.
- **Soft shadow:** only one, `0 0 50px rgba(0,0,0,0.15)` (no offset), on white cards floating over a colour panel.
- **Colour glow:** a large blurred ellipse of a ramp colour (blur 150) rising from the bottom of an empty grey tile; a huge blurred white ellipse (blur 250) behind content on photos to keep text legible.
- **Borders:** 2px in the tile's own ramp colour (application tiles); 0.5–1px hairlines in Cerise or `#CDCDCD` for dividers.
- **Blend modes:** Multiply for embossed/grey imagery, Screen for white glows.

### Iconography

- **Product icons** (`icons/`): geometric marks built from circles, quarter-circles, petals and stars; solid shapes, no
  outlines; filled with the Hamsa Tri-Color gradient running diagonally. Ten in the set: A–I plus "Hamsa AI" (the hand
  mark with a spark, in the gradient).
- In the platform cards, icons sit inside a 52px **embossed circle**: two stacked radial gradients from white to light
  grey (`#EFEFEF`/`#CFCFCF`), the top one set to Multiply, which reads as a disc pressed into paper.
- Team members each get a small 27px gradient icon next to their bio.
- UI icons (arrows, plus signs, close) are **thin lines** (1–2px), never filled.

## 7. Imagery (Observed)

- **Theme: starlings and murmurations**, the brand metaphor for "operating as one". A single iridescent starling on a
  budding branch (hero); a vast murmuration against a blue sky (full-bleed band); a murmuration over a sunset treeline (footer).
- **Skies:** soft, pale, slightly warm cloudscapes behind product content, washed out with a white glow so they never compete with text.
- **Photo treatment:** natural colour, soft light, lots of sky. Photos are either full-bleed, or rounded (10–100px). No
  filters, duotones or overlays other than a white or navy fade.
- **Portraits:** head and shoulders, centred, on a plain mid-grey backdrop, soft even light, 2:3 portrait crop, 10px corners.
- **Embossed motif:** the hamsa mark embossed in light grey (like pressed paper) as a background texture.

## 8. Motion

Hamsa has one ownable easing curve, **the Murmuration curve** (gather, sweep, settle), and a strict set of durations.
**Read [`motion.md`](motion.md) before animating anything.**

What the design itself shows (Observed): things **assemble and settle** (bars grow into tiles, circles grow into the
cluster, cards stack one by one); reveals are triggered by scrolling; hovering fills a tile with its colour; headlines
step back (blur and fade to 30%) when content arrives in front of them.

## 9. Voice cues in the design

(For wording, see [`../messaging/`](../messaging/).)
Short declarative sentences, often in pairs: "Stay private locally. Connect globally." Imperatives addressed to operators:
"Stop building…", "Build anything." Figures are written as numerals with units ("$400B to $1T", "19M", "130+").

---

## 10. Applying the brand to other formats (Derived)

These recipes scale the observed rules to formats the Figma file doesn't include. Keep the proportions: lots of white,
one colour moment, Degular throughout, everything on a grid.

### Business card (85 × 55 mm, or 3.5 × 2 in)

- **Front (colour side):** full-bleed Cerise (or Navy). The mark in white, top-right, 8mm tall, 5mm from the edges.
  The wordmark "Hamsa" in white across the bottom, 5mm margins, as wide as the card allows (the cover/footer move).
- **Back (information side):** white. 5mm margins; a 6-column grid.
  - Name: Degular Medium 11pt, black.
  - Title: Degular Regular 8pt, `#666666`.
  - Contact lines: Degular Regular 7.5pt, black, 133% line height.
  - Small horizontal lockup (black or Cerise), 22mm wide, bottom-left.
- **Optional detail:** a 1.5mm band of the Hamsa Tri-Color gradient along the bottom edge (like the team photo band).
- **Print colours:** the brand is defined in RGB only. Simple conversions are Cerise ≈ CMYK 0/62/50/18,
  Navy ≈ 39/39/0/69, Indigo ≈ 39/39/0/62, Gold ≈ 0/24/71/0. These are starting points: have the printer convert
  properly and check a proof, or ask the designer for Pantone matches.

### Email template (600px wide)

- **Scale:** 600px body; 24px side margins (552px content); a 6-column grid (4 × 12-column → 6).
- **Header:** white, horizontal lockup in black, 120px wide, left-aligned, 24px from the top; a 1px `#CDCDCD` rule below.
- **Type** (email-safe fallback: `Degular, Figtree, Helvetica, Arial, sans-serif`):
  - Eyebrow: 12px Semibold, UPPERCASE, +20% tracking, black.
  - Headline: 32px Medium, 100% line height, black.
  - Body: 16px Regular, 24px line height, black; secondary `#666666`.
- **Button:** outlined pill: 2px black border, 44px tall, fully rounded, 18px Medium label. (A black filled pill is
  acceptable in email when outlines render poorly.)
- **Colour moment:** at most one block per email: a Cerise or gradient panel with 20px corners and white text ≥ 24px, or a starling photo.
- **Footer:** Navy `#313150` background; the mark in white; links 14px white; legal 11px `#B1B1C0`.

### Newsletter (web or email, 600–720px wide)

- Opens with the eyebrow and a centred two-line headline (the "centred intro" pattern), then content.
- Each story: a 10px-rounded image, eyebrow (the topic in uppercase), 24px Semibold title, 16px body, and a text link or pill.
- Number figures as big stats (40–52px Medium, −1% tracking) with an UPPERCASE label below.
- If stories are colour-coded, use ramp steps in order (Cerise, Raspberry, Plum, Aubergine, Navy).
- End with the closing block (mark, two-line headline, one pill) and the Navy footer.

### Slides and presentations (1920 × 1080)

- **Title slide:** exactly the Figma cover: Cerise field, 128px Regular title top-left at 64px margins, mark top-right,
  giant wordmark along the bottom.
- **Content slides:** white; the 12-column grid scaled to 1920 (64px margins, 24px gutters); headline 64–80px Medium
  top-left; eyebrow above it.
- **Section dividers:** full-bleed gradient or a ramp colour with one white headline.
- **End slide:** Navy with the white wordmark along the bottom.

### Social posts (1080 × 1080 or 1080 × 1350)

- One idea per post: a single headline (72–96px Medium, 85–95% line height), on white, Cerise or a starling photo.
- Mark in a corner at 64px margins; no full lockup needed.
- Keep text off busy parts of photos; use the white or navy fade behind it.

### Checklist before shipping anything

- [ ] Degular only (or the documented fallback), in the documented weights
- [ ] Colours only from this document; the gradient only as Indigo → Cerise → Gold, diagonal
- [ ] One colour moment, surrounded by white
- [ ] Widths snap to a column grid; generous spacing
- [ ] Corner radii from the five values
- [ ] Logo in one of the four colourways, never gradient-filled
- [ ] Small text meets contrast (no small white text on Cerise; never white on Gold)
- [ ] Copy taken from `messaging/`, with forecast figures footnoted
