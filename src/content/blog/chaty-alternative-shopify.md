---
title: "Chaty Alternative for Shopify: Free Forever, No Tracking, No Visitor Cap (2026)"
description: "Amrita Chat Widget vs Chaty for Shopify — free forever, no visitor cap, zero cookies, WhatsApp/Messenger/Instagram + 6 more channels. DOM verified."
date: "2026-07-27"
tags: ["shopify", "chat-widget", "comparison", "chaty-alternative", "privacy"]
image: "https://cdn.shopify.com/app-store/listing_images/e8017261bb2b89a90cafbd5fdf1abc08/promotional_image/CJiDvY-c5ZUDEAE=.png"
canonical: "https://amrita-labs.com/blog/chaty-alternative-shopify/"
---

[Amrita Chat Widget](https://apps.shopify.com/chat-widget-1) is a free Shopify chat button that competes directly with Chaty. This is a technical comparison of both apps, published by the team that ships Amrita Chat Widget — bias disclosed up front. Each claim is a fair comparison and where Chaty is stronger, or [Amrita Chat Widget](https://apps.shopify.com/chat-widget-1) we say so.

![Amrita Chat Widget for Shopify — one button, 9 messaging channels (WhatsApp, Messenger, Instagram, SMS, Email, LINE, Viber, Telegram, phone)](https://cdn.shopify.com/app-store/listing_images/e8017261bb2b89a90cafbd5fdf1abc08/promotional_image/CJiDvY-c5ZUDEAE=.png)

*Amrita Chat Widget on a Shopify storefront — one button opens 9 channels: WhatsApp, Facebook Messenger, Instagram, SMS, Email, LINE, Viber, Telegram, phone.*

---

## TL;DR

| | **Amrita Chat Widget** | **Chaty Free** | **Chaty Paid** |
|---|---|---|---|
| Price | **Free forever** | Free up to 500 visitors/mo | $15 / $39 / $79 per month |
| Visitor cap | None | 500/mo | 10K / 50K / 150K per month |
| Cookies set on storefront | **0** | 5 (including a persistent visitor ID) | 5 |
| External scripts loaded | **0** | 1 (`cdn.chaty.app/pixel.js`) | 1 |
| Shadow DOM isolation (prevents theme CSS collisions) | **Yes** | No | No |
| Channels supported | 9 (WhatsApp, Messenger, Instagram, SMS, Email, LINE, Viber, Telegram, phone) | 20+ | 20+ |
| App Store listing languages | **8** (EN, ES, FR, PT-BR, DE, IT, NL, JA) | 1 (EN) | 1 (EN) |
| Admin features (agent avatars, business hours, country targeting, merge tags, live chat + AI via Chatway integration) | No | No | Yes |

**Short version:** Amrita Chat Widget is the right pick for stores that want a lightweight, private-by-default chat button that stays free at any traffic level. Chaty is the right pick for stores that need agent avatars, business hours scheduling, 20+ channels including WeChat/Skype/TikTok, or live chat plus AI. Chaty is more mature and has been shipping longer.

**Where Chaty Free is stronger today:** page targeting, click triggers, an attention-pulse animation, and a contact-form channel are all in Chaty's free plan. [Amrita Chat Widget](https://apps.shopify.com/chat-widget-1) does not ship these YET. Stores that need any of them today are better served by Chaty Free up to the 500 visitor/month cap.

---

## When to pick which

**Choose Amrita Chat Widget** if the store has exceeded Chaty's 500 visitor/month free cap and paid tiers are not justified, if the storefront's theme has previously been affected by widget CSS bleed, or if the store sells internationally — [Amrita Chat Widget](https://apps.shopify.com/chat-widget-1) App Store listing and widget both localize into 8 languages, Chaty's listing is English only.

**Stay on Chaty** if the store needs agent-side workflows (avatars, business hours scheduling, country targeting, merge tags), if it specifically requires WeChat, Skype (which Microsoft retired in 2025), TikTok, or Poptin, or if it needs live chat plus AI via the [Chatway](https://chaty.app/chat-button/chatway) integration.

Both apps solve the same top-level problem: a chat button on a Shopify storefront. The differences are in the engineering trade-offs behind that button.

---

## Amrita Chat Widget at a glance

Amrita Chat Widget installs from the Shopify App Store in under 5 minutes. Setup happens entirely inside the theme editor — no external dashboard, no separate account.

![Amrita Chat Widget theme editor setup — enable App Embed, add channels, save](https://cdn.shopify.com/app-store/listing_images/e8017261bb2b89a90cafbd5fdf1abc08/desktop_screenshot/CIXBxo-c5ZUDEAE=.png)

*Setup: enable the App Embed in the theme editor, enter the messaging channels in use for the store, save. No code required.*

![Amrita Chat Widget feature panel — 9 messaging channels for Shopify: WhatsApp, Messenger, Instagram, SMS, Email, LINE, Viber, Telegram, phone](https://cdn.shopify.com/app-store/listing_images/e8017261bb2b89a90cafbd5fdf1abc08/desktop_screenshot/CMLh0I-c5ZUDEAE=.png)

*9 channels supported: WhatsApp, Facebook Messenger, Instagram, SMS, Email, LINE, Viber, Telegram, phone. Merchants enable the channels their team actively replies on and hide the rest.*

![Amrita Chat Widget WhatsApp pre-fill — messages open with the merchant's pre-written greeting](https://cdn.shopify.com/app-store/listing_images/e8017261bb2b89a90cafbd5fdf1abc08/desktop_screenshot/CITa2o-c5ZUDEAE=.png)

*Preset greeting for WhatsApp: a customer taps the chat button, WhatsApp opens with the merchant's pre-written message already in the compose box. The same pre-fill behavior is supported for SMS and Email.*

**Amrita Chat Widget in six bullets:**

- **Free at any traffic level.** No visitor cap, no upgrade prompts, no gated features.
- **9 messaging channels** in a single button: WhatsApp, Facebook Messenger, Instagram DM, SMS, Email, LINE, Viber, Telegram, and click-to-call phone.
- **Zero cookies set** on the storefront. Zero third-party scripts. No data leaves the browser.
- **Shadow DOM isolated.** The theme's CSS cannot affect the widget, and the widget's CSS cannot affect the theme.
- **8-language admin.** English, Spanish, French, Portuguese (BR), German, Italian, Dutch, Japanese. The widget itself auto-localizes to the storefront language.
- **Under 5 minutes to install** from the [Shopify App Store](https://apps.shopify.com/chat-widget-1). No account signup, no billing screen.

---

## What Chaty does to the storefront (as of 2026-07)

The findings below were captured by loading Chaty's demo store inspection. 

### 1. No Shadow DOM isolation

```js
document.querySelectorAll('*').filter(el => el.shadowRoot).length
// → 0
```

Every element the Chaty widget renders lives in the main document. Chaty's stylesheet loads into the customer theme `<head>` HTML. This is why some merchants report Chaty rendering incorrectly on specific themes. If you don't want to break your themes use [Amrita Chat Widget](https://apps.shopify.com/chat-widget-1)

Amrita Chat Widget mounts inside a `#shadow-root`. The theme's CSS cannot reach the widget, and the widget's CSS cannot affect the theme — an isolation model designed to avoid theme CSS collisions.

### 2. External tracking script loads on every page


```
https://cdn.chaty.app/pixel.js?id=ebjpftyjrx&shop=chaty-demo.myshopify.com
```

Third-party origin. The filename is `pixel.js`.

[Amrita Chat Widget's](https://apps.shopify.com/chat-widget-1) JavaScript ships from Shopify's own CDN as an app embed. No third-party origin, no additional entries required in a Content Security Policy allowlist. This matters for stores that maintain a strict CSP for security and **privacy.**

### 3. Six global functions leak into `window`

```js
window.launch_chaty
window.close_chaty
window.open_chaty_whatsapp_popup
window.close_chaty_whatsapp_popup
window.open_chaty_contact_form
window.close_chaty_contact_form
```

Programmatic access is useful for triggering the chat from a custom button. It also creates a namespace-collision risk if another app or the store's theme defines a `launch_*` global.

Amrita Chat Widget exposes no globals on `window` by default. When programmatic control is needed, a single scoped API can be enabled instead of six top-level functions.

---

None of the findings above indicate Chaty is doing anything wrong. These are engineering choices — perfectly valid for a chat widget. But they are choices, and merchants selecting a chat widget should evaluate them against their own storefront requirements.

---

## Pricing model

Chaty's four tiers:

| Plan | Price | Visitor cap | New features unlocked |
|---|---|---|---|
| Free | $0 | 500/mo | — |
| Basic | $15/mo | 10,000/mo | Agents Pop Up, page targeting, scheduling, country targeting, merge tags |
| Pro | $39/mo | 50,000/mo | — |
| Growth | $79/mo | 150,000/mo | — |

Chaty's Pro and Growth tiers ship identical feature sets to Basic. The only variable across the three paid tiers is the visitor cap. At $79/month, the additional cost purchases traffic allowance, not additional widget capability. A store doing 200,000 pageviews pays $79/month for the same widget a store doing 12,000 pageviews pays $15/month for.

This model is a rational fit for businesses with per-visitor serving costs. [Amrita Chat Widget](https://apps.shopify.com/chat-widget-1) has none — the widget is a static asset served from Shopify's own CDN. Pricing reflects that architecture: Amrita Chat Widget is **free** at any traffic level. 

---

## Language coverage

Chaty's App Store listing is available only in English. Merchants browsing the German, Japanese, or Brazilian Shopify App Store see "This app is not translated into your language" at the top of the Chaty listing — a friction point during evaluation from non-English markets.

[Amrita Chat Widget](https://apps.shopify.com/chat-widget-1) App Store listing ships in 8 languages: English, Spanish, French, Portuguese (Brazil), German, Italian, Dutch, and Japanese. 


---

## Migrating from Chaty in five minutes

Migration completes in five steps:

1. **Uninstall Chaty** from Shopify Admin → Apps. The storefront reloads without the widget on the next request.
2. **Clear the residual cookies** in a test browser (Chrome → F12 → Application → Cookies → right-click the five `chaty_*` entries → Delete). Real visitors' cookies expire on their own schedule.
3. **Install Amrita Chat Widget** from [the Shopify App Store](https://apps.shopify.com/chat-widget-1).
4. **Enable the App Embed** in the theme editor (Theme customize → App embeds → toggle "Amrita Chat Widget" on).
5. **Enter the channels in use** — WhatsApp number, Messenger page, Instagram handle, and any others the team replies on. Save.

Amrita Chat Widget does not present a billing screen, a visitor-cap warning, or an upgrade prompt at any point during setup.

---

## FAQ

**Is Amrita Chat Widget really free?**

Yes, at any traffic level — no visitor cap, no gated features. The widget is served from Shopify's CDN, so Amrita Chat Widget has no per-visitor infrastructure cost. A free tier will remain part of the product; any change to the pricing model would be disclosed on the App Store listing before it took effect.

**Does it work with every theme?**

The widget renders inside a Shadow DOM, a browser-native isolation mechanism. The theme's CSS cannot reach into the widget, and the widget's CSS cannot affect the theme. Amrita Chat Widget renders identically on Dawn, Prestige, Impulse, Warehouse, and every custom theme it has been tested against.

**What happens above 500 visitors per month?**

Nothing. Amrita Chat Widget does not implement a visitor cap.

**What is the performance cost?**

Amrita Chat Widget's JavaScript ships from Shopify's CDN as an app embed. It loads no third-party scripts, sets no cookies, and runs no analytics. The performance cost is a single same-origin script tag.

**Are WeChat, Skype, TikTok, or Poptin supported?**

Not currently. Amrita Chat Widget supports 9 channels: WhatsApp, Facebook Messenger, Instagram, SMS, Email, LINE, Viber, Telegram, and phone. Channel additions are prioritized by merchant demand — three or more merchant requests for a specific channel typically trigger implementation. Requests can be sent via Reddit DM (`/u/sukhmeet2390`) or as a GitHub issue.

**Can the widget language differ from the storefront language?**

The widget reads `<html lang>`, the attribute Shopify sets when a language is assigned to a domain or path. A Japanese storefront served at `/ja/` renders the widget in Japanese automatically — no merchant configuration required.

---

## The bottom line

Chaty is great if the store needs agent-side workflows (avatars, business hours scheduling, country targeting, merge tags), and if it needs live chat plus AI via the [Chatway](https://chaty.app/chat-button/chatway) integration.

Amrita Chat Widget ships a different product: 9 channels, zero cookies, zero third-party scripts, Shadow DOM isolation, an 8-language admin, and a permanent free tier at any traffic level. Stores that prioritize a lighter storefront footprint and predictable pricing over channel breadth and agent workflows should use Amrita Chat Widget.

Both apps solve the same top-level problem through different engineering trade-offs. The right choice depends on the store's requirements.

---

*Amrita Chat Widget is built and maintained by [Amrita Labs](https://amrita-labs.com), an independent studio building focused Shopify apps. [Install Amrita Chat Widget on the Shopify App Store](https://apps.shopify.com/chat-widget-1) — free forever, under five minutes to set up.*
