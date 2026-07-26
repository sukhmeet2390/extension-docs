# amrita-labs.com Website Backlog

## Status: Live (GitHub Pages)

Covers both Chrome extensions and Shopify apps product pages.

---

## Website Differentiation (parked — audit 2026-07-26)

Current site uses generic AI-template patterns: Inter font, dark gradient blobs, identical page structure, no social proof. Needs differentiation from thousands of similar Tailwind/Astro sites.

### Priority tasks

| # | Task | Effort | Impact | Notes |
|---|------|--------|--------|-------|
| W1 | Add extension screenshots/GIFs to product page heroes | 2 hr | HIGH | Proves product is real. Use actual CWS screenshots or screen recordings |
| W2 | CWS rating badge + install count on each product page | 30 min | HIGH | Instant social proof. Can be static initially, dynamic later |
| W3 | Simple SVG logo (text + icon mark) | 1 hr | MEDIUM | Replace text-only "Amrita Labs" in nav/footer |
| W4 | Switch font from Inter to distinctive alternative | 30 min | MEDIUM | Options: IBM Plex Sans, Satoshi, Cabinet Grotesk, General Sans |
| W5 | Testimonial quotes per product (from CWS reviews) | 30 min/product | HIGH | Wait until products have reviews. BlurWeb uses AppSumo reviews effectively |
| W6 | Product-specific brand colors per page | 1 hr | MEDIUM | Replace generic purple gradient blobs. Each product gets its own accent |
| W7 | Interactive demo on Gmail page (live subject line scorer) | 4-6 hr | HIGH | Conversion killer. SendCheckIt's main differentiation is their input-on-homepage |
| W8 | About/founder section | 30 min | MEDIUM | Human photo + one paragraph. Trust signal for indie products |

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

### Trigger to start

Pick up when:
- At least 2 products have CWS reviews (for W5)
- Or when organic traffic plateaus and conversion rate becomes the bottleneck
- Or when you have a free weekend to batch W1-W4 (4 hrs total)

---

## Other pending

| Task | Status | Notes |
|------|--------|-------|
| RSS feed | ✅ Done | `src/pages/rss.xml.ts` — auto-imports to Dev.to |
| Sitemap | ✅ Done | Auto-generated at `/sitemap-index.xml` via @astrojs/sitemap |
