---
title: "How to Add Google Consent Mode v2 to Shopify (2026 Guide)"
description: "When visitors reject cookies, your Google Analytics data disappears. Consent Mode v2 sends cookieless pings so Google can model the conversions you missed. Here's how to set it up on Shopify."
date: "2026-07-14"
tags: ["shopify", "gdpr", "analytics", "consent-mode"]
image: "/assets/blog/consent-mode-v2-hero.png"
canonical: "https://amrita-labs.com/blog/consent-mode-v2-shopify-guide/"
---

Amrita Cookie Consent is a free Shopify app with a GDPR cookie banner and Google Consent Mode v2 built in.

If you use Google measurement or advertising features for visitors in the EEA, UK, or Switzerland, you've probably noticed your Google Analytics data getting worse. Fewer conversions tracked, lower reported traffic, less effective ad optimization. Here's why — and how to fix it.

![Google Consent Mode v2 explained — comparison of what happens when visitors reject cookies with and without Consent Mode](/assets/blog/consent-mode-v2-hero.png)

## The problem

When a visitor rejects cookies on your Shopify store:
1. Your Google Analytics tag never fires
2. Google Ads never sees the conversion
3. Your ad optimization gets starved of data
4. Your reported traffic can drop significantly (the impact varies by traffic volume, consent rate, and advertising setup)

This isn't a bug — it's consent working correctly. But it limits the data you can act on.

If you're running Google Ads targeting EU customers, you're likely paying for clicks but can't see which ones convert. Your cost-per-acquisition looks inflated, your ROAS looks worse than reality, and Smart Bidding doesn't have enough signal to optimize. The problem compounds: incomplete data leads to less effective bid decisions, which leads to wasted ad spend.

## What Google Consent Mode v2 does

Instead of "tag fires" or "tag doesn't fire," GCM v2 adds a third option:

| Consent state | What happens |
|---|---|
| **Granted** | Full tracking (cookies, personal data, everything) |
| **Denied** | Tag is blocked entirely — no data at all |
| **Denied + GCM v2** | No advertising or analytics cookies are stored. Google receives limited cookieless measurements under the denied consent state, and uses statistical modeling to estimate conversions. |

With GCM v2, even when visitors reject cookies, Google still gets a signal. It uses **conversion modeling** to fill in the gaps.

### What changed from v1 to v2

The original Consent Mode had two signals: `analytics_storage` and `ad_storage`. Version 2 added two more:

| Signal | Controls | Required in v2? |
|---|---|---|
| `analytics_storage` | Whether Google Analytics can store cookies | Yes |
| `ad_storage` | Whether Google Ads can store cookies | Yes |
| `ad_user_data` | Whether user data can be sent to Google for advertising | **New in v2** |
| `ad_personalization` | Whether personalized ads can be shown | **New in v2** |

If your consent setup only sends the original two signals, Google treats it as v1. A complete Consent Mode v2 setup sends all four signals. Modeling availability also depends on implementation quality, traffic volume, and Google's eligibility thresholds.

## How it works technically

When consent is denied, GCM v2 sends "consent-aware pings" to Google:
- No advertising or analytics cookies are stored
- No user-level identification
- Google receives limited cookieless measurements: page URL, timestamp, user agent, referrer, and ad-click indicators

Google then uses machine learning across its entire dataset to model what a conversion rate probably looks like for your traffic — even without individual-level data. Google calls this "conversion modeling" and it fills gaps in your reports with statistical estimates based on patterns from similar consented traffic.

Google includes eligible modeled conversions in the regular Conversions column. Check the Diagnostics tab in Google Ads to see whether Consent Mode is implemented and whether modeling is active.

## Setting it up on Shopify

There are two approaches:

![Consent flow diagram — visitor arrives, banner shown with defaults denied, then accept leads to full tracking or reject leads to cookieless pings via Consent Mode v2](/assets/blog/consent-mode-v2-flow.png)

### Option A: Manual (Google Tag Manager)

1. Set up a GTM container with consent-aware tags
2. Configure consent defaults as `denied` for all EU visitors
3. Connect your consent banner to GTM's consent API
4. When visitor accepts → update consent state → tags fire normally
5. When visitor rejects → consent stays `denied`, and compatible Google tags send cookieless pings
6. Make sure all four consent signals are included (`analytics_storage`, `ad_storage`, `ad_user_data`, `ad_personalization`)

This works but requires GTM knowledge and ongoing maintenance. You also need to keep the consent defaults in sync with your banner — if they get out of sync, incorrect ordering can cause data collection before the visitor chooses and may create privacy-compliance risk, or you could be losing data unnecessarily by blocking pings after consent.

### Option B: Use a consent app with GCM v2 built in

Several Shopify consent apps include GCM v2 integration natively:
- Pandectes GDPR Compliance ($9-49/mo — GCM v2 on paid plans)
- Consentmo ($9-29/mo)
- **Amrita Cookie Consent** (free — GCM v2 included on the free plan)

With these apps, the consent-to-Google signal mapping is handled for you:
1. Install the app
2. Enable the consent banner
3. Banner sets consent defaults to `denied` via Shopify's Customer Privacy API
4. On accept → consent `update` with `granted` for all four signals
5. On reject → consent stays `denied`, and compatible Google tags receive the denied state
6. Google receives the signal either way

Amrita sends all four Consent Mode v2 signals to compatible Google tags already installed on your store. Verify the setup with Tag Assistant after installation.

![Amrita Cookie Consent banner on a Shopify store showing Customize, Reject all, and Accept all buttons](/assets/blog/consent-mode-v2-banner.png)

## What about Meta Pixel and Facebook Ads?

GCM v2 is a Google-specific protocol. Meta has its own approach: the Conversions API (CAPI). If you're running Facebook or Instagram ads alongside Google Ads, you'll need both:

- **Google Ads**: Consent Mode v2 handles the consent-denied case
- **Meta Ads**: Server-side Conversions API can send events without cookies, but you still need consent for personal data under GDPR

Most Shopify consent apps handle the Google side. For Meta, check whether your app also integrates with Meta's Conversions API or if you need a separate setup.

## Verifying it works

After setting up, check with Google Tag Assistant (Chrome extension):

1. Visit your store in an incognito window
2. **Accept cookies** → verify GA4 + Ads tags fire normally in Tag Assistant
3. Close incognito, open a new one
4. **Reject cookies** → verify you see `consent_default` with `analytics_storage: denied` AND that cookieless pings still fire
5. Check that all four consent signals appear in the Tag Assistant consent tab
6. In Google Ads, check the Diagnostics tab to see whether Consent Mode is implemented and whether modeling is active.

If the Diagnostics tab doesn't show Consent Mode as active after a week of traffic, double-check that your Google tag loads in consent-aware mode (not fully blocked on denial).

You can also verify in Google Analytics: go to Admin → Data Streams → your stream → Consent Settings. It should show "Consent Mode active" if everything is configured correctly.

## Common mistakes

1. **Blocking ALL scripts on rejection** — if your consent solution kills every script when consent is denied, GCM v2 pings can't fire either. The Google tag needs to load in "consent-aware" mode, not be blocked entirely.

2. **Not setting consent defaults** — Consent defaults should be set before measurement tags run. If you don't explicitly set defaults to `denied` before the consent decision, Google assumes consent is granted and sets cookies immediately. Incorrect ordering can cause data collection before the visitor chooses and may create privacy-compliance risk.

3. **Using enhanced conversions as a replacement** — Enhanced Conversions enhance an existing conversion event. If the base tag never fires (because consent was denied), there's nothing to enhance. GCM v2 is the layer that handles the denial case.

4. **Only sending two consent signals instead of four** — If your setup only sends `analytics_storage` and `ad_storage` (the v1 signals), you don't have a complete v2 implementation. A complete Consent Mode v2 setup sends all four signals, including the new `ad_user_data` and `ad_personalization`.

5. **Not testing in incognito** — Your browser likely has existing cookies and consent state cached. Always test consent flows in incognito windows to simulate a first-time visitor experience.

## FAQ

**Does GCM v2 replace the need for a cookie banner?**
No. GCM v2 works alongside your consent banner, not instead of it. You still need to ask for consent. GCM v2 just makes sure Google gets useful (non-personal) data even when the answer is "no."

**Will this affect my Google Ads billing?**
No. GCM v2 affects reporting and optimization, not billing. You still pay per click. But with better conversion data, Smart Bidding can optimize more effectively — which should improve your return on ad spend over time.

**How long until I see modeled conversions?**
Google needs enough consented traffic to build a model. Modeling availability depends on implementation quality, traffic volume, and Google's eligibility thresholds. Smaller stores may not qualify for modeling.

---

## Summary

| What | Status |
|---|---|
| GCM v2 helps recover lost measurement data | Yes — the impact varies by traffic, consent rate, and advertising setup |
| Important if using Google measurement for EEA/UK visitors | Yes — it communicates consent choices to Google |
| Free options exist on Shopify | Yes |
| Replaces proper consent | No — it works alongside consent, not instead of it |

The bottom line: if you use Google measurement or advertising features for visitors in the EEA, UK, or Switzerland, Consent Mode v2 is an important way to communicate their choices to Google. Without it, you're missing useful measurement signal.

---

*Consent requirements vary by business and jurisdiction. This guide provides technical information, not legal advice, and no consent app by itself guarantees compliance.*

---

*We built [Amrita Cookie Consent](https://apps.shopify.com/cookie-consent-8) specifically because we couldn't find a free app with GCM v2 included. Questions? Reach us at [hello@amrita-labs.com](mailto:hello@amrita-labs.com).*
