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
| W24 | Comparison pages expansion | Pending | HIGH | Mirror gmail-subject-score/vs pattern across products. Sub-tasks: (a) pinello/vs/pinwise, (b) pinello/vs/pinradar, (c) privacy-blur-slack/vs/blurweb, (d) privacy-blur-slack/vs/page-blur, (e) privacy-blur-discord/vs/{competitor}, (f) privacy-blur-teams/vs/{competitor}, (g) privacy-blur-whatsapp/vs/{competitor}, (h) cookie-consent/vs/{top 3 competitors}, (i) chat-widget/vs/chaty (extract from existing blog), (j) accessibility-widget/vs/accessibe, (k) accessibility-widget/vs/userway. Each new page: schema, canonical, breadcrumb, cross-link to parent product |
| W25 | search-console-mcp trial (saurabhsharma2u) | Parked | LOW | Unified Google+Bing+GA4 MCP with pre-computed SEO tools (`seo_striking_distance`, `opportunity_matrix`, `compare_engines`). Requires interactive `npx search-console-mcp setup` OAuth flow. Resume when time |
| W26 | Shopify app title/H1 rewrites for direct-intent queries | ✅ Done | HIGH | Cookie Consent, Chat Widget (full 9 channels in H1), Accessibility retitled for direct-intent Google + Bing queries |
| W27 | Homepage About text (visible) | Deferred | LOW | Already shipped as W8. No further copy work planned |
| W28 | Push privacy-screen cluster (comprehensive) | ✅ Done | HIGH | Blog title + description rewritten targeting "screen privacy extension" + "privacy screen chrome extension". Added "What is a screen privacy Chrome extension?" definition, "How to add a privacy screen for Chrome" H2, "Which Chrome extension hides my screen during sharing?" workflow block. Related-reading sections added to Slack/Discord/Teams/WhatsApp product pages linking back. Catalog page cross-links to blog. `updated: "2026-08-01"` frontmatter set |
| W29 | Content gap posts (5 clusters) | Pending | MEDIUM | One blog per cluster + product-page cross-link + Bing content submission. Clusters: (a) "hide teams chat screen share" → new blog, links to Teams product, (b) "blur discord screen sharing" → new blog, links to Discord product, (c) "whatsapp web blur" → new blog, links to WhatsApp product, (d) "gmail subject line tester" → new blog, links to gmail-subject-score, (e) "pinterest pin analyzer" → new blog, links to Pinello. Each also gets vs-competitor page if data supports |
| W30 | "What is X?" definition blocks (site-wide AEO) | Pending | MEDIUM | LLM citation format. Sub-tasks: (a) product pages × 9 — one paragraph starting "X is a..." near top, quotable, precise, (b) blog posts × 17 — first-line definition before intro, (c) comparison pages × 5 (current) — define both product + competitor, (d) homepage — short definition block per product tile alt-text. Coordinate with W17 blog link work |
| W31 | Internal linking audit (site-wide) | Pending | HIGH | Not only Shopify. Full mesh audit. Sub-tasks: (a) blog to product — ~15 posts remaining after W17 covered hide-slack + best-gmail, (b) Privacy Blur mutual: Slack ↔ Discord ↔ Teams ↔ WhatsApp (4 mutual pairs), (c) Shopify mutual: Cookie ↔ Chat ↔ Accessibility (3 mutual pairs), (d) product to related blog post, (e) comparison pages back to parent product, (f) chrome catalog ↔ each product, (g) llms.txt cross-reference block. Replace all screen-reader-only ProductFooter with visible contextual links |
| W32 | Image delivery + Core Web Vitals | Pending | MEDIUM | Sub-tasks: (a) explicit width/height on ALL img tags — product hero, blog inline, icons, (b) convert PNG heroes to WebP (accessibility, chat, cookie hero >800KB each), (c) srcset for responsive delivery, (d) audit lazy-loading (hero should be eager per CWV guidance), (e) run PageSpeed baseline, (f) preconnect verify, (g) compress screenshots. Measure LCP/CLS before optimizing |
| W33 | Visible "Updated" date on refreshed blog posts | Pending | LOW | Add visible "Updated Aug 2026" label when article materially updated. Requires: (a) `updated?` frontmatter (schema ready), (b) render logic in blog `[slug].astro` under date, (c) show only when `updated` differs from `date`. Ensures schema `dateModified` matches on-page. Apply first to W17 posts + W28 post |
| W34 | Mobile ranking gap investigation + fixes | Pending | MEDIUM | Google impressions ~95% desktop. Investigate then fix. Sub-tasks: (a) GSC URL Inspection Mobile tab on top 5 pages, (b) query GSC for mobile-only queries + positions, (c) check no `display:none` hiding content on mobile viewport, (d) explicit img width/height for mobile Googlebot, (e) verify hero H1 not clipped on mobile SERP, (f) add shorter question-format H2 variants targeting mobile short-form queries |
| W35 | Bing content submission automation | Pending | LOW | Sub-tasks: (a) automate `submit_content` in IndexNow workflow for new blog posts (post-body direct push, indexes faster than URL fetch), (b) weekly sitemap resubmit via `submit_sitemap`, (c) direct URL submission after each deploy for changed pages only |
| W36 | AEO directory listings (expanded) | Partial | HIGH | Sub-tasks: (a) glama.ai × 9 product entries [Pending], (b) Product Hunt × 9 (backlink + AEO) [Pending], (c) alternativeto.net × 9 (also W-distribution) [Pending], (d) Perplexity product directory [Pending], (e) Startupfa.me [Pending], (f) Betalist [Pending], (g) Chrome Web Store dev profile → link back to amrita-labs.com [✅ Done 2026-08-01], (h) Shopify partner profile → link back [✅ Done 2026-08-01] |
| W37 | International targeting audit | Pending | MEDIUM | 9 countries organically surfacing (USA, GBR, IND, FRA, TUR, MAR, ESP, PHL, CAN). All English content. Sub-tasks: (a) confirm no hreflang variants needed since content is universally English, (b) Bing Webmaster Geo-Targeting: "Global" or specific markets, (c) evaluate whether UK/IN/AU deserve country-specific landing variants (defer unless data supports), (d) monitor query volume per country monthly |
| W38 | Long-tail near-page-1 push | Partial | HIGH | Cheap wins already on page 2. Sub-tasks: (a) "session share extension" pos 8 [Pending — find landing], (b) "slack hide message preview" pos 10.7 [✅ Done via W17 + W28], (c) "subject line analyzer" Bing pos 2-8 [✅ Done — gmail-subject-score H1 subtitle], (d) "email subject line score" pos 8 [✅ Done — same], (e) "screen privacy extension" + "privacy screen chrome extension" [✅ Done via W28], (f) inspect any query at position 6-15 weekly via MCP |
| W39 | GSC + Bing weekly monitoring cadence | Pending | LOW | Recurring. Sub-tasks: (a) run `get_performance_overview` + `get_search_analytics` weekly, (b) check `list_sitemaps_enhanced` for errors, (c) `batch_url_inspection` on new pages, (d) Bing `get_url_submission_quota` + `get_crawl_issues`, (e) track striking-distance query lift after each content edit, (f) note in a log file at `_distribution/SEO-LOG.md` |
| W40 | Backlink acquisition tracker | Pending | HIGH | Zero backlinks confirmed via Bing `get_link_counts`. This is ceiling on every ranking. Sub-tasks (all distribution — outside code): (a) alternativeto.net × 9, (b) Product Hunt staggered launches 1/month, (c) Reddit story posts in r/chrome_extensions, r/shopify, r/webdev — story format not spam, (d) Show HN per product, (e) dev.to already auto-imports blog via RSS — publish weekly, (f) Medium cross-post top 3 blogs with canonical, (g) guest posts on complementary SaaS blogs, (h) track new backlinks weekly via Bing `get_link_counts` |

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

Ordered by ROI × ease:

1. **W38** — Long-tail near-page-1 push (fastest wins, existing pages)
2. **W28** — Privacy-screen cluster comprehensive push
3. **W31** — Site-wide internal linking audit (unlocks link equity across mesh)
4. **W30** — "What is X?" AEO blocks (LLM citation payoff)
5. **W24** — Comparison pages expansion (11 pages, competitor-query capture)
6. **W29** — Content gap posts (5 clusters)
7. **W40** — Backlink tracker + distribution (structural ceiling)
8. **W32** — Image CWV (measure first)
9. **W34** — Mobile ranking investigation
10. **W36** — AEO directories

Batchable auto tasks:

- **W31 + W30 + W33** — can run together per file (link audit + definition block + updated date support)
- **W28 + W38** — same file surface area
- **W35 + W39** — GitHub Actions consolidation

Deferred / signal-gated (unchanged):

- **W2, W5, W7** — real reviews / traffic required
- **W25** — search-console-mcp OAuth setup, resume interactively

Monitor via MCPs (W39):

- Weekly GSC + Bing performance
- Chat-widget indexing state
- Striking-distance query lift after edits
- Bing "subject line analyzer" / "email subject line score" pos 2-8 (near page 1)

---

## Other pending

| Task | Status | Notes |
|------|--------|-------|
| RSS feed | ✅ Done | `src/pages/rss.xml.ts` — auto-imports to Dev.to |
| Sitemap | ✅ Done | Auto-generated at `/sitemap-index.xml` via @astrojs/sitemap |

## Recent operator actions (post-deploy hygiene, not tracked as W-tasks)

Do not code around these — the operator handles as needed:

- **GSC URL Inspection request-index** — run after significant page edits. Last batch (2026-08-01): homepage, `/chat-widget/`, `/chrome-extensions/`, hide-slack + best-gmail blog posts
- **Bing sitemap resubmit via MCP** — 2026-08-01. Repeat weekly or after sitemap structure changes
- **Bing URL batch submit** — done 2026-08-01 (25 URLs, 73/98 daily quota remaining)
- **CWS listing bumps** — operator handles alongside product release pushes, not tracked here
- **Bing Geo-Targeting** — left as auto/global; `.com` default is worldwide, no action needed unless targeting a single country
- **Google + Bing publisher/partner backlinks** — W36g + W36h done 2026-08-01
