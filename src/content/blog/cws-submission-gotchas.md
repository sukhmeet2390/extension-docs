---
title: "Chrome Web Store Submission: The Gotchas Nobody Warns You About"
description: "Every gotcha I hit submitting Chrome extensions to CWS — manifest limits, keyword spam, hidden directories, permission justifications, and more."
date: "2026-07-08"
tags: ["chrome", "webdev", "indie", "productivity"]
---

I just submitted my second Chrome extension to the Chrome Web Store. The first time took 3 attempts. The second time I got rejected in 12 hours for something completely avoidable.

Here's every gotcha I hit — so you don't have to.

## 1. Manifest description has a 132-character hard limit

Not documented prominently anywhere. You'll get a cryptic upload error: "The description field in manifest is too long." Your `package.json` description or `wxt.config.ts` description gets baked into manifest.json — check it BEFORE you zip.

**Fix**: Count characters. 132 max. Put the detailed description in the CWS form, not the manifest.

## 2. Don't put a "Keywords:" line in your description

I literally had:

```
Keywords: pinterest seo, pin score, pin quality, pinterest optimizer...
```

Rejected within 12 hours for "Keyword Spam." CWS explicitly bans keyword lists in descriptions — even if they're relevant. Your keywords should be *woven naturally* into prose.

**Fix**: Write human sentences that include your keywords. "Score your Pinterest pin quality before publishing" contains 3 keywords naturally.

## 3. `upload-artifact@v4` silently skips hidden directories

If your build tool outputs to `.output/` (like WXT does), GitHub Actions' `upload-artifact` won't find it. The glob `path: .output/*.zip` returns nothing because `.output` starts with a dot.

**Fix**: Add `include-hidden-files: true` to your upload-artifact step.

```yaml
- uses: actions/upload-artifact@v4
  with:
    path: .output/*.zip
    include-hidden-files: true
```

## 4. `optional_permissions` need justification too

I added `sidePanel` as an optional permission (reserved for a future feature). CWS asked me to justify it. Optional doesn't mean invisible to reviewers.

**Fix**: Add a justification for EVERY permission — required AND optional. Explain what it'll do and why it's optional.

## 5. "Support URL" is not your email address

The form has separate fields:
- **Support email**: your email
- **Support URL**: a webpage (landing page, FAQ, etc.)

I pasted my email in the URL field. Got a "URL not reachable" error. Obvious in hindsight.

## 6. Host permissions trigger "in-depth review"

If your extension needs `https://*.somesite.com/*`, expect 3-7 days review instead of 1-3 days. Not a rejection — just a longer queue. Your permission justifications become critical here.

## 7. Data usage: "Website content" if you read ANY DOM

If your content script reads anything from the page (text fields, images, metadata), check "Website content" in the Data Usage section. Not checking it when you should = rejection on privacy grounds.

---

## What I wish existed

A single checklist that covers ALL form fields — not just the text ones. Remote code? Data usage checkboxes? Test instructions? Payment settings? Category subcategory?

I ended up building one for myself. Next extension took 5 minutes to fill out the form instead of 45 minutes of guessing.

---

*If you're shipping to CWS for the first time, I hope this saves you a few rejection cycles.*
