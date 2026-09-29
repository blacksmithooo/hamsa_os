# Hamsa — landing page

Static landing page built with [Astro](https://astro.build), from the Hamsa homepage Figma file.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs static site to dist/
npm run preview  # serve the built site locally
```

## Structure

- `src/pages/index.astro` — the homepage, composed of section components
- `src/components/` — one component per Figma section (hero, features, …)
- `src/styles/global.css` — design tokens (colors, type, spacing) pulled from Figma
- `public/` — static assets (images, fonts, favicon)

## Previews & deploy (Cloudflare Pages)

Connect this repo in Cloudflare → Workers & Pages → Create → Pages → Connect to Git:

- Framework preset: **Astro**
- Build command: `npm run build`
- Output directory: `dist`

Every branch/PR then gets its own preview URL, and `main` deploys to production.
