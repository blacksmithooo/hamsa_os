import { defineConfig } from 'astro/config';

// Static output. Deploys at the domain root by default (e.g. Cloudflare Pages);
// the GitHub Pages workflow sets SITE_BASE=/hamsa_os because the site lives under that path there.
export default defineConfig({
  output: 'static',
  base: process.env.SITE_BASE || '/',
});
