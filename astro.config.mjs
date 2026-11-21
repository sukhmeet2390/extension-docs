// @ts-check
import { readFileSync, readdirSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Blog post last-modified dates for <lastmod>: frontmatter `updated`, else `date`.
// Google uses an accurate lastmod to decide what to re-crawl; set `updated` only for substantive edits.
const blogDir = new URL('./src/content/blog/', import.meta.url);
const blogLastmod = new Map(
  readdirSync(blogDir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const text = readFileSync(new URL(file, blogDir), 'utf8');
      const pick = (key) => text.match(new RegExp(`^${key}:\\s*["']?(\\d{4}-\\d{2}-\\d{2})`, 'm'))?.[1];
      return [file.slice(0, -3), pick('updated') ?? pick('date')];
    })
    .filter(([, date]) => Boolean(date)),
);

export default defineConfig({
  site: 'https://amrita-labs.com',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('/feedback/uninstall'),
      serialize(item) {
        const slug = item.url.match(/\/blog\/([^/]+)\/?$/)?.[1];
        const date = slug && blogLastmod.get(slug);
        if (date) item.lastmod = new Date(`${date}T00:00:00Z`).toISOString();
        return item;
      },
    }),
  ],
  output: 'static',
});
