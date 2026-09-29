import { defineConfig } from 'astro/config';

// Static output — deployable to Cloudflare Pages as-is (build: `npm run build`, output: `dist`).
export default defineConfig({
  output: 'static',
});
