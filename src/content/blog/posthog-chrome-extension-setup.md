---
title: "How I Set Up PostHog in a Chrome Extension (MV3, Content Script + Background Worker)"
description: "A practical PostHog setup for Manifest V3 Chrome extensions: where to initialize it, how to handle anonymous IDs, and which events are actually worth tracking."
date: "2026-07-28"
tags: ["chrome", "analytics", "webdev", "showdev"]
image: "/assets/blog/pinello-cws.png"
---

Every analytics tutorial I found assumed I was building a normal web app. One runtime. One page lifecycle. One obvious place to initialize the SDK.

*A Chrome extension in V3 is not that polite.*

In Manifest V3, you have a background service worker that goes to sleep, content scripts living inside tabs, and little UI surfaces like the popup that vanish the second someone clicks away. The first time I tried to add PostHog to that setup, I realized the usual advice was not going to help much.

So this is the setup I ended up with for a Chrome extension: simple enough to maintain, anonymous by default, and good enough to answer the only questions I actually care about.

## The first decision: where PostHog should live

This is the part that matters most.

You *can* initialize PostHog in the background service worker. You get one shared place, which is nice. But the background worker cannot see the DOM, and most of the interesting product moments in my extensions happen where the user is typing or looking at something inside the page.

You *can* initialize it in the popup or options page too. That is easy, but it only works while that UI is open. For actual product usage, that felt too narrow.

I ended up initializing PostHog in the **content script**. That puts it closest to the real user action. In MV3, content scripts run in an isolated world, so PostHog's CDN setup is workable there as long as the project API key is available at build time.

I still use the background worker for extension plumbing. I just do not make it the main analytics home.

## The small build-time trick that makes this workable

The PostHog project API key is public anyway, so I stopped overthinking it and baked it into the build:

```typescript
// wxt.config.ts — bake the key at build time
// Set VITE_POSTHOG_PROJECT_API_KEY in your CI secrets

// telemetry.ts
const POSTHOG_KEY = import.meta.env.VITE_POSTHOG_PROJECT_API_KEY;
```

That avoided adding another config fetch or permission dance. For a Chrome extension, fewer moving parts is usually the right answer.

## I use an anonymous device ID, not a user ID

I did not want email addresses, names, or anything else that would make the privacy story messy. Privacy of my users as important to me as my own privacy while using products.

So on install, I generate a random UUID and keep it in `chrome.storage.local`:

```typescript
async function getOrCreateDeviceId(): Promise<string> {
  const stored = await chrome.storage.local.get("deviceId");
  if (stored.deviceId) return stored.deviceId;
  const id = crypto.randomUUID();
  await chrome.storage.local.set({ deviceId: id });
  return id;
}
```

That becomes PostHog's `distinct_id`.

It is enough to answer questions like "Did this person install and come back?" without turning the extension into a surveillance project.

## I track fewer events than I thought I would

My first instinct was to track everything. That would have been a mistake.

In practice, four events told me almost everything I needed to know:

```typescript
// Install (once)
posthog.capture("install", { version: chrome.runtime.getManifest().version });

// Core value action (the moment they get value)
posthog.capture("subject_scored", { dimension: "title" });

// Monetization trigger
posthog.capture("paywall_shown", { tier: "free", scores_used: 50 });

// Expansion action
posthog.capture("rewrite_requested", { dimension: "description" });
```

That is it.

Those four events tell me whether people are installing, reaching the value moment, hitting the limit, and asking for the "do it for me" feature. I can always add more later, but starting small kept the data readable.


## Debugging got easier once I stopped putting it in the UI

For development, I auto-enable debug mode:

```typescript
const debugEnabled = import.meta.env.MODE === "development";
```

And if I need to turn on extra logging manually, I can do it from DevTools:

```javascript
chrome.storage.local.set({ debugLogging: true });
```

I briefly considered a user-facing debug toggle. Then I imagined normal users seeing it and wondering whether something was broken. That was enough to kill the idea.

## The dashboard I actually check

This part is refreshingly unglamorous.

I set up one funnel insight:
1. Install
2. Core action
3. Paywall shown

Then I filter by `app` and look at daily trends.

That is basically the whole analytics system. I do not need 19 dashboards. I need a quick answer to: are people using the thing, and where do they stop?

## The privacy part I did not want to get wrong

A few rules I kept from day one:

- ✅ Anonymous UUID only — no PII
- ✅ No page content in events, only counts and categories
- ✅ Privacy policy discloses anonymous usage events
- ✅ Chrome Web Store data disclosure does **not** claim personally identifiable information
- ✅ Even if a UUID is often treated differently from direct personal data, I still disclose it plainly

That gave me a setup I could defend without squirming.

## If I were helping a friend do this tomorrow

I would not start with "How do I instrument everything?"

I would start with:

- one place to initialize PostHog
- one anonymous identifier
- four or five events that map to the funnel
- one dashboard you will actually open

That gets you useful telemetry in a Chrome extension without letting analytics become its own side project.

---

*Written by the team at Amrita Labs. We build Chrome extensions with privacy-first analytics.*
