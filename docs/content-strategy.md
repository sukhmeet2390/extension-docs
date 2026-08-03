# Content Strategy — amrita-labs.com

**Research date:** 2026-08-03
**Next revisit:** 2026-09-03 (monthly)
**Source data:** GSC + Bing Webmaster 28-day windows, live competitor fetches, industry evidence

---

## Executive summary

GSC data confirmed: **user-problem posts win (pos 10-15), tech-audience posts are dead (0-4 imp).**
Double down on user-problem framing across all 9 products. Comparison/roundup is the primary format.
Avoid all founder/dev-narrative content entirely.

Current playbook that works: `blog/hide-slack-messages-screen-sharing` — 354 imp, pos 15.5.
Replicate the pattern 8 more times.

---

## What sells (verified formats)

Tier 1 — **Comparison/roundup posts** ("Best X for Y")
- Decision-stage users. Pattern owned by SafeScreenShare, Analyzify, our own `best-email-subject-line-extensions`.
- Best-in-class pattern: `safescreenshare.com/blog/best-blur-chrome-extensions` — founder discloses bias upfront, fair 4-product comparison, FAQ, decision framework.

Tier 2 — **How-to problem-solution posts**
- Target the symptom, not the product. "How to hide Slack messages while screen sharing" beats "Privacy Blur Extension Review".
- Clico case: *"Posts about the tab-switching tax outperformed posts about the product itself."*

Tier 3 — **Setup guides** ("How to add X to Shopify")
- Analyzify's `hub/google-consent-mode-for-shopify` is the benchmark.
- Our `consent-mode-v2-shopify-guide` is already in top 5 competitors — refresh, don't replace.

Tier 4 — **X vs Y direct competitor comparison posts**
- Highest commercial intent. Lower volume.

---

## Content NOT to write (anti-list)

- ❌ "Why I built [Product]" — Clico: 200 views, 3 installs. Attracts founders, not buyers.
- ❌ Tech/dev implementation posts — GSC confirmed dead (ESM Azure 4 imp, CWS gotchas 0 imp, PostHog 0 imp).
- ❌ Feature announcement posts — nobody searches "amrita privacy blur 2.0 changelog". Email existing users instead.
- ❌ Generic productivity roundups disconnected from products — competes with Zapier/HubSpot.
- ❌ Privacy opinion/manifesto — zero commercial intent. Exception: privacy *during screen sharing* framing is fine.
- ❌ Case studies about own growth — targets competitors, not buyers.
- ❌ Comparison posts where we "win too easily" — detected as promotional.

---

## Top 10 posts (ranked by ROI: query difficulty × commercial intent × product fit × GSC signal)

1. **Refresh** `best-chrome-extensions-screen-sharing-privacy` — 108 imp, pos 15.2. Consolidates 4 privacy blur products. AEO citation target.
2. **Refresh** `hide-slack-messages-screen-sharing` — 354 imp, pos 15.5. Highest-volume post. Pos 15 → 5 = 5× clicks.
3. **Refresh** `consent-mode-v2-shopify-guide` — 126 imp, Google pos 42, Bing pos 2. Add DMA/GDPR compliance deadline, code snippet, app-vs-manual comparison.
4. **New** — 5 Best Free Pinterest Chrome Extensions for Creators (2026). Includes PinRadar, Pindodo, SortPins. Pinello featured. Captures pos 8.7 "pinradar" competitor query.
5. **New** — How to Blur Sensitive Info During Discord/Teams/WhatsApp Web Calls. 3 products, 1 post, currently zero content.
6. **Refresh** `best-gmail-chrome-extensions-productivity` — 235 imp, pos 35.6. Needs depth upgrade + FAQ schema.
7. **New** — Shopify Accessibility Widget: What Actually Works for WCAG 2.1 (2026). Angle: 67% of assistive users disable overlay widgets, 4,605 ADA lawsuits 2024. Honest take beats promotional posts.
8. **New** — Best Shopify Apps for Google Consent Mode v2 (2026 Comparison). Bing pos 7 already for this query.
9. **New** — Shopify Live Chat Widget Comparison. Chat Widget vs Chaty/Tidio/Shopify Inbox. Differentiator: 9 channels.
10. **New** — Email Subject Line Score: How to Check If Your Subject Line Will Get Opened. Bing pos 2-8 for cluster.

**Priority order:** Refresh #1, #2, #3 first. ~4 hours. Highest ROI available.

---

## Format specs (evidence-based)

| Element | Target |
|---|---|
| Word count | 2,000-2,800 words |
| Screenshots | 4-7 per post |
| GIF/Video | 1 per post (30-60 sec demo) |
| Comparison table | 1 per comparison/roundup |
| Update frequency | Every 6-12 months |
| FAQ section | 3-5 questions per post |
| Publishing cadence | 1 substantial post per month max |

AEO requirements:
- Direct answer in first paragraph (Perplexity citation logic)
- H2/H3 as questions (natural-language match)
- FAQ schema
- Comparison tables (structured-data extraction)
- Visible year/updated date

---

## Distribution channel priority

**Chrome extensions:**
1. Google/Bing organic (own blog) — already working
2. alternativeto.net listings
3. Reddit (r/productivity, r/chrome_extensions, r/privacy) — problem-first
4. Product Hunt (staggered)
5. "Best of" listicle outreach (email roundup sites for inclusion)
6. dev.to (user problem, not dev problem)
7. Medium/Substack — low ROI standalone

**Shopify apps:**
1. Shopify App Store listing SEO (primary driver)
2. Blog (own site) implementation guides
3. "Best Shopify Apps for X" outreach
4. Shopify Community Forums / r/shopify
5. Product Hunt — less effective for Shopify

**Do not waste time on:**
- Cold DMs to influencers (Clico: ignored)
- Generic Slack communities (Clico: 0 installs)
- AI directory submissions (low intent)
- Newsletter sponsorships (budget stage)

---

## Regional strategy

**English-only for now.** 9-country footprint (USA, GBR, IND, FRA, TUR, MAR, ESP, PHL, CAN) = strength, not localization trigger.
Most non-native countries search in English for SaaS/tech.

**International-English optimization (do now):**
- Reference GDPR explicitly
- Include UK/EU deadlines (EAA June 2025, DMA March 2024)
- No US-only colloquialisms
- Ship international-neutral English

**Localization trigger:** if French or Spanish organic traffic exceeds 15-20% of total without any localized content, start with a French `consent-mode-v2-shopify-guide`.

---

## What we already own (do not abandon)

- `blog/consent-mode-v2-shopify-guide` — top 5 Google competitors, Bing pos 2
- `blog/best-email-subject-line-extensions` — cited in AI search results
- `blog/hide-slack-messages-screen-sharing` — 354 imp, pos 15.5

**Update these three first before writing new content.** ~4 hours. Highest ROI available.

---

## Competitor patterns to copy

1. **SafeScreenShare** — biased-but-transparent comparison. Declares bias line 2. Gives competitors real credit. FAQ + decision tree at end.
2. **Analyzify** — definitive implementation-guide hub. Single URL per concept. CTAs at "manual OR..." decision points.
3. **Own `best-email-subject-line-extensions`** — comparison table + "Best for X" verdict per tool + fair-play screenshots.
4. **SendCheckIt** — topic-authority blog. Compliance guides (CAN-SPAM, GDPR, CASL) rank evergreen. Case studies with named brands.

---

## Monthly revisit checklist (next: 2026-09-03)

Run GSC + Bing MCP queries and answer:

1. Which posts moved position (up or down) by 5+ spots?
2. Any new striking-distance queries (pos 6-15) not yet targeted?
3. Which top-3 refresh posts moved after refresh? Attribute lift or lack of lift.
4. Bing `get_link_counts` — any backlinks discovered yet?
5. Any new competitor names appearing as landing queries?
6. Update this doc's "Top 10" list if data reshuffles priorities.
7. Publish 1 new post OR refresh 1 existing per month. Not more.

---

## Verification notes

Verified claims from direct fetches:
- Clico Indie Hackers case (`indiehackers.com/post/we-hit-1-3k-chrome-extension-installs-in-5-weeks`)
- SafeScreenShare comparison (`safescreenshare.com/blog/best-blur-chrome-extensions`)
- Analyzify hub (`analyzify.com/hub/google-consent-mode-for-shopify`)
- Dupple Chrome extension promotion guide
- Own GSC + Bing data

Speculative (marked in original research):
- "X vs Y" post commercial intent (inferred from funnel position, no isolated conversion data)
- CWS screenshot count vs conversion percentage (industry consensus, no peer study)
- Product Hunt install ranges (Dupple-reported, unverified against public data)

Full source list appended in research report at commit `[research-commit]`.
