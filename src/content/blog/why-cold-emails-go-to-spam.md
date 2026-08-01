---
title: "Why Your Cold Emails Go to Spam (And How to Fix It)"
description: "No replies does not always mean a bad pitch. Sometimes your cold email never reached the inbox. Here are the deliverability problems we see most often and how to fix them."
date: "2026-07-27"
tags: ["email", "cold-email", "deliverability", "productivity"]
image: "/assets/blog/emailsubjectscore-cws.png"
relatedProducts: ['gmail-subject-score']
---

The hardest part about cold email is not rejection. Rejection is information. Silence is the part that messes with your head.

You send 50 emails, maybe 100 if you are feeling ambitious. You refresh your inbox. Nothing. At first you start rewriting the offer in your head. Then you blame the list. Then you wonder whether your CTA was too soft. Eventually you have to admit the more annoying possibility: maybe the emails never really made it to the inbox in the first place.

That is a big part of cold outreach. Even when everything is going well, reply rates usually live in the low single digits. So if your deliverability is off, the whole campaign can look dead before a human ever sees it.

If you write outreach from Gmail, [EmailSubjectScore Pro](https://chromewebstore.google.com/detail/dleffnbdjohkmmkbojehdpkgkmpofmgm) is a free Chrome extension that scores your subject lines for spam risk, clarity, and urgency in real time — right inside the compose window.
![Email subject line scoring tools comparison — real-time scoring vs web-based checkers](/assets/blog/best-email-subject-line-extensions-hero.png)


A lot of "my cold email is not working" turns out to be "my email setup and subject line are quietly working against me." These are the five problems I keep seeing.

## Why cold emails go to spam

### 1. Your subject line sounds like automation

This one has gotten worse over the last few years.

Everyone already knows to avoid obvious spam language like "Free," "Guaranteed," or "Act now." But the modern trap is subtler: subject lines that sound like they came from a sales sequence.

"Quick question."
"Following up."
"Just checking in."

None of those are outrageous on their own. They are just exhausted. Spam filters have seen them millions of times, and so have recipients. Even if your email body is thoughtful, the subject line can frame the whole thing as low-effort automation before the message is opened.

The fix is not to become clever. It is to become specific. A subject like "Question about your Q3 hiring plan" feels more human because it clearly belongs to someone, somewhere, for a reason.

### 2. Your domain has no reputation yet

I see founders do this all the time: buy a domain on Monday, start sending cold email on Tuesday, and then act shocked when Gmail treats them like a stranger.

A new domain has no trust history. To mailbox providers, that can look a lot like spam.

If you are starting fresh, you need a warm-up period. Send low-volume emails first. Have real back-and-forth conversations. Get replies. Let the domain build a normal-looking history before you turn it into an outreach engine.

It is annoying because it feels slow. It is still faster than getting flagged and spending a month trying to recover deliverability.

### 3. The body looks promotional instead of personal

Cold email works best when it still feels like email.

The moment you stuff the message with links, tracking URLs, images, and extra formatting, you start drifting toward newsletter territory. Spam filters notice that, and recipients do too.

The link count matters more than people think. One link is usually fine. Two can be okay. Three or more, especially with tracking wrappers, starts to feel like marketing automation.

For a first-touch email, I like to keep it boring on purpose: plain text, one link max, no tracking pixel, no image, no fancy signature circus.

### 4. Your sending volume jumps too fast

Mailbox providers care about patterns. Humans are messy but consistent. Spammers spike.

If your account usually sends 8 emails a day and suddenly sends 200, that is not subtle. It looks like either a compromised account or a brand-new campaign from a domain that has not earned the right to do that yet.

A gradual ramp is painfully unsexy, but it works better. Increase volume slowly. Let the domain prove it can send outreach without triggering alarms.

This is one of those things that feels conservative until you have to dig yourself out of a deliverability hole. Then it feels obvious.

### 5. You skipped SPF, DKIM, and DMARC

These are not glamorous settings, but skipping them is one of the easiest ways to sabotage yourself.

- **SPF** tells receiving servers which systems are allowed to send on behalf of your domain.
- **DKIM** signs the email so it can be verified in transit.
- **DMARC** tells receiving servers what to do when those checks fail.

If you skip them, you are asking inbox providers to trust a message that is harder to verify. Some will. Many will not.

Setting them up is not complicated, but forgetting them is expensive.

## How I check a subject line before sending

Once the technical setup is decent, the subject line is the part I want feedback on before I launch anything.

![EmailSubjectScore Pro scoring a subject line for spam risk inside Gmail compose](/assets/blog/emailsubjectscore-cws.png)

A few ways I do that:

- **Real-time scoring.** If I am drafting inside Gmail, I would rather see spam-risk feedback while I am typing than after a campaign underperforms. That is why we built EmailSubjectScore Pro in the first place.
- **Small-batch testing.** If two subject lines both seem reasonable, I send small batches and let replies break the tie.
- **The phone screen test.** Most people first see your email on a phone. If the important words are buried after character 40, they may never be seen.

None of these are complicated. They just catch problems early, which is most of the battle.

## Subject line patterns that feel safer and more human

I trust these more than the usual "quick question" template language:

- **Specific + relevant** — "Saw your talk at SaaStr — question about pricing"
- **Observation + curiosity** — "Noticed something on your onboarding page"
- **Direct value** — "Cut your onboarding time by 30%"
- **Time-anchored context** — "Before your Q4 planning next week"

What they have in common is simple: they read like a person had a reason to send them.

## A quick deliverability checklist before a campaign

![Email subject line scoring tools comparison — real-time scoring vs web-based checkers](/assets/blog/best-email-subject-line-extensions-hero.png)

Before sending a batch of cold emails, this is the boring checklist I would rather run than regret:

- [ ] Domain is warmed up and has some reply history
- [ ] SPF, DKIM, and DMARC are configured
- [ ] Subject line has been checked for spammy phrasing
- [ ] Body uses one link max on first touch
- [ ] No tracking pixel unless there is a very good reason
- [ ] Sending volume is consistent with recent history
- [ ] Important words appear early enough to make sense on mobile

If that list is clean and the campaign still flops, then I will start questioning the offer. But I try not to blame the copy before I have ruled out deliverability.

## Start scoring before sending

Most cold email mistakes are preventable. You do not need a giant deliverability stack to catch the obvious ones. You just need a way to notice the problems before you hit send.

[Install EmailSubjectScore Pro from the Chrome Web Store](https://chromewebstore.google.com/detail/dleffnbdjohkmmkbojehdpkgkmpofmgm) — it's free, works inside Gmail, and takes about 5 seconds to install. Score your next subject line before you send it.

---

*This article is by the team at Amrita Labs. We build tools for people who send important emails.*
