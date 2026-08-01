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
| W26 | Shopify app title/H1 rewrites for direct-intent queries | ✅ Done | HIGH | Cookie Consent, Chat Widget (full 9 channels in H1), Accessibility retitled for direct-intent Google + Bing queries |
| W27 | Homepage About text (visible) | Deferred | LOW | Already shipped as W8. No further copy work planned |
| W28 | Push `best-chrome-extensions-screen-sharing-privacy` for privacy-screen cluster | Pending | HIGH | Data: "screen privacy extension" pos 11.3, "privacy screen chrome extension" pos 13. Add matching H2 + tighten copy. Landing already ranks 14.8 avg / 87 imp / 2 clicks — small push moves whole cluster |
| W29 | Content gap pages for missing clusters | Pending | MEDIUM | Zero-impression clusters with commercial intent: "hide teams chat screen share", "blur discord screen sharing", "whatsapp web blur", "gmail subject line tester", "pinterest pin analyzer". One blog post per cluster |
| W30 | "What is X?" definition block on each product page | Pending | MEDIUM | Top LLM citation format. Short, quotable, precise. Boosts AEO across product pages |
| W31 | Cross-link Shopify products in Shopify section | Pending | LOW | Mutual internal links between Cookie / Chat / Accessibility. Weak now |
| W32 | Image delivery audit (Core Web Vitals) | Pending | MEDIUM | Set explicit width/height on hero images. If PageSpeed shows LCP/CLS impact, convert largest hero screenshots to responsive WebP/AVIF |
| W33 | Visible "Updated" date on refreshed blog posts | Pending | LOW | Requires blog frontmatter `updated?` (already supported in schema). Add visible label when article materially updated so `dateModified` schema matches on-page |
| W34 | Mobile ranking / crawl improvement | Pending | MEDIUM | Google impressions ~95% desktop. Product pages absent on mobile SERPs. Confirm mobile rendering via GSC mobile usability; add mobile-first content weighting if issues found |
| W35 | Bing content submission (submit_content) | Pending | LOW | Bing indexes faster via direct content push than URL submission. Automate for new blog posts |
| W36 | AEO directory listings | Pending | LOW | Beyond llmstxt.cloud (done): glama.ai, mcpservers.org (if any product becomes MCP), Product Hunt listings feed AEO signals |

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

Priority pending items (data-backed from GSC + Bing MCP):

- **W28** — Push privacy-screen cluster (pos 11-13, one edit unlocks 87+ imp cluster)
- **W24** — Pinello competitor comparison pages (mirrors gmail-subject-score/vs pattern)
- **W29** — Content gap posts (5 zero-impression clusters, commercial intent)
- **W30** — "What is X?" definition blocks on product pages (AEO win)
- **W32** — Image CWV audit (measure before optimizing)

Deferred / signal-gated:

- **W2, W5** — Real reviews required
- **W7** — Gmail-page traffic required
- **W25** — search-console-mcp OAuth setup, resume interactively

Distribution manual tasks (outside code, biggest ROI):

- **Zero backlinks confirmed via Bing get_link_counts.** This is the ceiling on every ranking. Domain authority = floor. Every position 25-45 traces back here.
- alternativeto.net listings for 6 chrome + 3 shopify products (backlink + competitor entity graph)
- ProductHunt staggered launches, 1/month
- Reddit story posts in r/chrome_extensions, r/shopify, r/webdev — story format not spam
- Show HN thread per product
- dev.to + Medium cross-post top 3 blogs (hide-slack, best-gmail, consent-mode) with canonical
- Bing Webmaster Geo-Targeting: set "Global" or specific markets in dashboard
- International presence: USA + GBR + IND + FRA + TUR + MAR + ESP + PHL + CAN organically surfacing — no hreflang variants needed yet (all English)

Monitor via MCPs:

- GSC + Bing weekly performance checks
- Watch chat-widget indexing (Discovered — not indexed as of last audit)
- Track striking-distance queries (pos 8-15) for lift after content edits
- Watch position on "subject line analyzer" / "email subject line score" — Bing pos 2-8, near page 1

---

## Other pending

| Task | Status | Notes |
|------|--------|-------|
| RSS feed | ✅ Done | `src/pages/rss.xml.ts` — auto-imports to Dev.to |
| Sitemap | ✅ Done | Auto-generated at `/sitemap-index.xml` via @astrojs/sitemap |
