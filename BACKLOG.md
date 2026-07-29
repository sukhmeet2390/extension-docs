# amrita-labs.com Website Backlog

## Status: Live (GitHub Pages)

Covers both Chrome extensions and Shopify apps product pages.

---

## Website Differentiation (active — refreshed 2026-07-29)

The core visual batch is shipped: IBM Plex Sans, an Amrita Labs SVG mark, and distinct product accents. The next work should improve catalog discovery and conversion without inventing social proof.

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
| W8 | Add an organization-only About Amrita Labs section | 30 min | MEDIUM | Explain the portfolio without a founder photo, name, location, or other personal information |
| W9 | Add Privacy Blur for Slack and WhatsApp Web to the product catalog | ✅ Done | HIGH | Added only these two Privacy Blur products |
| W10 | Review homepage positioning for the current multi-product portfolio | ✅ Done | HIGH | Reframed the homepage for the broader creator, team, and merchant portfolio |
| W11 | Add Terms of Service pages for all Privacy Blur products | ✅ Done | HIGH | Added matching linked Terms for Slack, Discord, Teams, and WhatsApp Web |
| W12 | Audit website product icons against shipped source assets | ✅ Done | MEDIUM | Replaced stale Slack, Discord, and Teams icons; all other product icons match their canonical artwork |

### What competitors do well

- **SendCheckIt**: IBM Plex Sans font, interactive input on homepage, custom logo, actual product screenshots
- **BlurWeb**: 10+ testimonials with photos (AppSumo), "Used by 5000+ users" badge, custom logo, in-context demo images
- Both have Organization schema (we already have this ✅)

### What we already do well

- ✅ Schema.org (Organization + SoftwareApplication + FAQPage)
- ✅ Proper meta/OG tags
- ✅ Fast load (static site, no JS framework bloat)
- ✅ FAQ sections with structured data
- ✅ Clean layout (just generic-looking)

### Deferred-work triggers

- Start W2 and W5 when products have meaningful, live-verified ratings and genuine reviews.
- Start W7 after its scope is agreed.

---

## Other pending

| Task | Status | Notes |
|------|--------|-------|
| RSS feed | ✅ Done | `src/pages/rss.xml.ts` — auto-imports to Dev.to |
| Sitemap | ✅ Done | Auto-generated at `/sitemap-index.xml` via @astrojs/sitemap |
