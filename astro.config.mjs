// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://amrita-labs.com',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('/feedback/uninstall'),
    }),
  ],
  output: 'static',
});
