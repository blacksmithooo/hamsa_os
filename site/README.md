# Hamsa website

The hamsa.com homepage, built with [Astro](https://astro.build) from the Figma design. Brand rules and copy come from
[`../brand`](../brand) and [`../messaging`](../messaging).

## Develop

Run these from this `site/` folder:

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs the static site to dist/
npm run preview  # serve the built site locally
```

## Structure

- `src/pages/index.astro`: the homepage, composed of section components
- `src/components/`: one component per Figma section; each file's header comment names the Figma frames it comes from and what the duplicate states mean (scroll or hover behaviour)
- `src/styles/global.css`: design tokens and shared styles
- `src/config.ts`: Adobe Fonts embed URL for Degular (leave empty to use the trial files)
- `public/images/`: photos, logos and icons exported from Figma
- `docs/figma-fidelity.md`: notes and side-by-side comparisons from the first fidelity test

## Deploy

- **GitHub Pages:** every push to `main` builds and publishes via `.github/workflows/pages.yml`, at
  https://blacksmithooo.github.io/hamsa_os/ (the build sets `SITE_BASE=/hamsa_os`).
- **Cloudflare Pages (optional):** root directory `site`, build command `npm run build`, output directory `dist`.
