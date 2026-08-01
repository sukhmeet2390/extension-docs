# AGENTS.md — extension-docs

> Hub site for **amrita-labs.com** — Astro static site, deployed to GitHub Pages on push to `master`.
> This is the **canonical surface** for every product page, blog post, comparison, and AEO/LLM signal.

---

## Load order (read before acting)

1. This file (rules).
2. `../shopify-apps/AGENTS.md` — portfolio-wide discipline rules (never overclaim, marketing tone, etc.).
3. `../shopify-apps/.claude/skills/_shared/memory/MEMORY.md` — persistent memory index.

---

## Public attribution and privacy

Publish all website content, structured data, metadata, legal contact details, and product
information under **Amrita Labs**. Do not surface the builder's name, location, employment,
or other personal information on this public site.

---

## What lives here

- **Product pages** — `src/pages/<product>/index.astro`, `<product>/privacy.astro`, `<product>/terms.astro`
- **Blog posts** — `src/content/blog/*.md` (rendered by `src/pages/blog/[slug].astro`)
- **Comparisons** — `src/content/comparisons/*.md` (currently gmail-subject-score only; rendered by `src/pages/gmail-subject-score/vs/[slug].astro`)
- **Legal + assets** — `public/`, `src/pages/*/privacy.astro`, `src/pages/*/terms.astro`
- **AEO plumbing** — `src/pages/llms.txt.ts`, `src/pages/brand.json.ts`, `public/robots.txt`, auto-generated `sitemap-index.xml`

---

## AEO / SEO plumbing rules (**auto, not manual**)

Every blog post, product page, or comparison ships as a markdown/astro file. Discovery surfaces must update **automatically** on the next build — no manual index maintenance.

| Surface | Regeneration | Trigger | Manual step |
|---|---|---|---|
| `sitemap-index.xml` + `sitemap-*.xml` | ✅ AUTO via `@astrojs/sitemap` | Every `npm run build` | None |
| `rss.xml` | ✅ AUTO via `src/pages/rss.xml.ts` (glob `blog` collection) | Every `npm run build` | None — dev.to auto-imports drafts from this feed |
| `llms.txt` | ✅ AUTO via `src/pages/llms.txt.ts` (glob `blog` + `comparisons` collections + hardcoded product/legal/install sections) | Every `npm run build` | None — regenerates on every deploy |
| `brand.json` | ✅ AUTO via `src/pages/brand.json.ts` — canonical brand tokens (colors, fonts, screenshot-frame CSS var mapping). Downstream consumers (shopify-apps `_brand/`) fetch + verify. | Every `npm run build` | **Edit `tailwind.config.mjs` AND `src/pages/brand.json.ts` together.** Downstream `verify.mjs` fails CI on drift. |
| `robots.txt` | ✅ STATIC (rare edit) | Manual | Only edit when adding sitemap URLs or disallowing paths |
| `<link rel="canonical">` on blog | ✅ AUTO — `src/pages/blog/[slug].astro` sets `canonical={post.data.canonical || \`https://amrita-labs.com/blog/${post.id}/\`}` | Build | Optional `canonical:` override in frontmatter |
| Schema.org JSON-LD Article | ✅ AUTO — `src/pages/blog/[slug].astro` inlines `<script type="application/ld+json">` | Build | None |
| OG image / Twitter card | ✅ AUTO from `image:` frontmatter | Build | Frontmatter `image:` (absolute URL or `/assets/...`) |

**Rule:** if a discovery surface requires touching a second file when a blog post ships, that surface is a bug — automate it. The publish flow for a blog post is exactly one markdown file + one commit + one push. Anything more = fix the pipeline.

---

## Blog post publish flow (canonical, single-step)

```
1. Create src/content/blog/<slug>.md with schema-valid frontmatter:
     { title, description, date (YYYY-MM-DD), tags?, canonical?, image?, draft? }
     Use `draft: true` for unpublished blog drafts; drafts stay out of routes, RSS, and llms.txt.
2. git commit + git push origin master
3. GitHub Pages deploy runs (~22s). Verify at https://amrita-labs.com/blog/<slug>/
4. Sitemap, RSS, llms.txt, OG, JSON-LD all regenerate automatically.
5. Dev.to auto-imports as draft via RSS in ~1 hr — publish manually there, canonical → hub-site.
6. Medium cross-post third with same canonical.
```

**No manual edits to:** `sitemap-*.xml`, `rss.xml`, `llms.txt`, any index page. Ever.

---

## Content collection schemas (`src/content.config.ts`)

- **blog** — `{ title, description, date (str), tags?: string[], canonical?: string, image?: string, draft?: boolean }`
- **comparisons** — `{ title, description, date, product, competitor, competitorUrl, competitorStatus: 'active'|'dead', tags? }`

Adding a new collection? Update `src/content.config.ts` schema + create a `[slug].astro` router + update `AGENTS.md`'s "What lives here" table + update `rss.xml.ts` and `llms.txt.ts` to include the new collection.

---

## Blog CSS gotcha (fixed 2026-07-27)

Prose typography's `prose-code:bg-gray-100 prose-code:px-1.5` applied to inline `<code>` also matches `<code>` inside `<pre>` (Shiki output), producing a striped-pill effect across multi-line code blocks. Fix pattern (already in `src/pages/blog/[slug].astro`):

```
[&_pre_code]:!bg-transparent [&_pre_code]:!text-inherit [&_pre_code]:!p-0 [&_pre_code]:!rounded-none
```

Also: Shiki injects inline `background-color:#24292e` on `<pre>` that overrides any `prose-pre:bg-*` classes — those are silently ignored. Use `[&_pre]:!bg-<color>` (with `!important`) if forcing a lighter code-block background.

---

## Deploy

- `.github/workflows/deploy.yml` on push to `master` — GitHub Pages, ~22s
- CNAME `amrita-labs.com` (set in workflow)
- `npm ci --legacy-peer-deps` (Astro 7 + `@astrojs/tailwind` peer-dep quirk)
