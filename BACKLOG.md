# amrita-labs.com Website Backlog

## Status: Live — measurement and distribution phase

Covers both Chrome extensions and Shopify apps product pages.

---

## Website Differentiation (foundation complete — refreshed 2026-07-29)

The core visual, catalog, legal, and icon batches are shipped. Do not add social proof or conversion
features based on assumptions; the remaining work is gated by verified traffic, installs, and reviews.

### Priority tasks

| # | Task | Effort | Impact | Notes |
|---|------|--------|--------|-------|
| W1 | Add extension screenshots/GIFs to product page heroes | ✅ Done | HIGH | Product pages use real hero media; WhatsApp uses its CWS listing screenshot |
| W2 | CWS rating badge + install count on each product page | Deferred | HIGH | Do not add until ratings/install data is meaningful and live-verified |
| W3 | Simple SVG logo (text + icon mark) | ✅ Done | MEDIUM | Shared nav/footer now use the Amrita Labs SVG mark |
| W4 | Switch font from Inter to distinctive alternative | ✅ Done | MEDIUM | IBM Plex Sans is the canonical site and brand-endpoint font |
| W5 | Testimonial quotes per product (from CWS reviews) | Deferred | HIGH | Wait for genuine reviews |
| W6 | Product-specific brand colors per page | ✅ Done | MEDIUM | Gmail, Pinello, Cookie Consent, Accessibility, Chat, and Slack now have distinct accents |
| W7 | Interactive demo on Gmail page (live subject line scorer) | Deferred | HIGH | Reassess after W9-W11 and meaningful page traffic; do not expose the production scorer yet |
| W8 | Add an organization-only About Amrita Labs section | ✅ Done | MEDIUM | Added a concrete, company-only portfolio statement without personal information |
| W9 | Add Privacy Blur for Slack and WhatsApp Web to the product catalog | ✅ Done | HIGH | Added only these two Privacy Blur products |
| W10 | Review homepage positioning for the current multi-product portfolio | ✅ Done | HIGH | Reframed the homepage for the broader creator, team, and merchant portfolio |
| W11 | Add Terms of Service pages for all Privacy Blur products | ✅ Done | HIGH | Added matching linked Terms for Slack, Discord, Teams, and WhatsApp Web |
| W12 | Audit website product icons against shipped source assets | ✅ Done | MEDIUM | Replaced stale Slack, Discord, and Teams icons; all other product icons match their canonical artwork |
| W13 | Revisit Chrome catalog discovery | ✅ Done | MEDIUM | `/chrome-extensions/` catalog page shipped with all 6 extensions; added to top nav |
| W14 | Google Search Console MCP setup | ✅ Done | HIGH | `AminForou/mcp-gsc` running via uvx OAuth; query/page/URL inspection working |
| W15 | Bing Webmaster MCP setup | ✅ Done | HIGH | `ncosentino/bing-webmaster-mcp` native binary in `.secrets/`; site verified, quota available |
| W16 | Noindex uninstall feedback page | ✅ Done | MEDIUM | `noindex` meta + excluded from sitemap |
| W17 | Boost top-impression blog internal links | ✅ Done | HIGH | hide-slack (298 imp, pos 10.7 slack query) + best-gmail (193 imp) now link product pages contextually |
| W18 | Schema strengthening | ✅ Done | MEDIUM | BreadcrumbList on 32 pages, ItemList on catalog, WebSite+SearchAction+Organization@graph, sameAs to CWS/Shopify/GitHub |
| W19 | Hreflang | ✅ Done | LOW | `en` + `x-default` on canonical pages |
| W20 | Bing URL batch submit | ✅ Done | HIGH | 25 priority URLs submitted (2026-08-01), 73/98 daily quota remaining |
| W21 | IndexNow auto-ping on deploy | ✅ Done | HIGH | GitHub Action pings all sitemap URLs to IndexNow after every deploy |
| W22 | llms.txt directory submission | ✅ Done | LOW | Submitted to directory.llmstxt.cloud |
| W23 | dateModified on blog Article schema | ✅ Done | LOW | Frontmatter `updated?` field supported; falls back to `date` |
| W24 | Pinello competitor comparison pages | Pending | HIGH | Data-justified: "pinradar" pos 8.7, "pinwise" trending. Mirror gmail-subject-score/vs pattern for pinello/vs/pinwise + pinello/vs/pinradar |
| W25 | search-console-mcp trial (saurabhsharma2u) | Parked | LOW | Unified Google+Bing+GA4 MCP with pre-computed SEO tools (`seo_striking_distance`, `opportunity_matrix`, `compare_engines`). Requires interactive `npx search-console-mcp setup` OAuth flow. Resume when time |
| W26 | Shopify app title/H1 rewrites for direct-intent queries | Pending | MEDIUM | Cookie/Chat/Accessibility page titles too generic. Bing shows "shopify accessibility widget" pos 70. Small copy edits, visible impact |
| W27 | Homepage About text (visible) | Deferred | LOW | Already shipped as W8. No further copy work planned |

### What competitors do well

- **SendCheckIt**: IBM Plex Sans font, interactive input on homepage, custom logo, actual product screenshots
- **BlurWeb**: 10+ testimonials with photos (AppSumo), "Used by 5000+ users" badge, custom logo, in-context demo images
- Both have Organization schema (we already have this ✅)

### What we already do well

- ✅ Schema.org (Organization + SoftwareApplication + FAQPage)
- ✅ Proper meta/OG tags
- ✅ Fast load (static site, no JS framework bloat)
- ✅ FAQ sections with structured data
- ✅ Product-specific accents and source-matched icons

### Deferred-work triggers

- Start W2 and W5 when products have meaningful, live-verified ratings and genuine reviews.
- Start W7 only when Gmail-page traffic justifies the investment; do not expose the production scorer.
- W13 completed 2026-08-01.

### Current next step

Priority pending items:

- **W24** — Pinello competitor comparison pages (data-justified from GSC query analytics)
- **W26** — Shopify app title/H1 rewrites (Cookie Consent, Chat Widget, Accessibility) for direct-intent queries
- **W25 (parked)** — Resume search-console-mcp OAuth setup when convenient

Distribution manual tasks (outside code):

- alternativeto.net listings for 6 chrome + 3 shopify products
- ProductHunt staggered launches
- Reddit story posts in r/chrome_extensions, r/shopify, r/webdev
- Show HN thread for EmailSubjectScore Pro + Privacy Blur Slack
- Bing Webmaster Geo-Targeting: set "Global" or specific markets in dashboard

Monitor via MCPs:

- GSC + Bing weekly performance checks
- Watch chat-widget indexing (Discovered — not indexed as of last audit)
- Track striking-distance queries (pos 8-15) for lift after content edits

---

## Other pending

| Task | Status | Notes |
|------|--------|-------|
| RSS feed | ✅ Done | `src/pages/rss.xml.ts` — auto-imports to Dev.to |
| Sitemap | ✅ Done | Auto-generated at `/sitemap-index.xml` via @astrojs/sitemap |
