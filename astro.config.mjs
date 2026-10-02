import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://stitch.gloryolaifa.xyz',
  output: 'static',
  integrations: [sitemap()],
  compressHTML: true,
});
