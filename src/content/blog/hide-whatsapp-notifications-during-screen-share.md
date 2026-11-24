---
title: "How to Stop WhatsApp Notifications Showing During a Screen Share"
description: "Notifications can expose private chats on a call. Silence WhatsApp alerts, share a single tab, and blur what remains visible in Zoom, Google Meet and Teams."
date: "2026-11-24"
tags: ["whatsapp", "whatsapp web", "screen sharing", "notifications", "privacy"]
image: "https://amrita-labs.com/assets/blog/whatsapp-blur/whatsapp-full-blurred.png"
relatedProducts: ['privacy-blur-whatsapp']
---

During a screen share, a WhatsApp notification can appear in front of everyone on the call: a contact's name, the first line of a message, sometimes a profile photo. It happens because WhatsApp has no way of knowing you are presenting.

Preventing it takes more than one setting. A notification can come from your operating system, from your browser, or from WhatsApp Web itself, and each has its own control. A fourth source sits inside the page you are sharing.

[Privacy Blur for WhatsApp](https://amrita-labs.com/privacy-blur-whatsapp/?utm_source=amrita-labs&utm_medium=owned-content&utm_campaign=privacy-blur-whatsapp_blog&utm_content=hide-whatsapp-notifications-during-screen-share) is a free Chrome extension that blurs chats, messages, names, and media on WhatsApp Web during screen sharing. It covers that last source. This guide walks through all four layers in the order to set them up, so you can prepare in about two minutes before any call.

## Where notifications come from

Whether your audience sees a notification depends on what you share.

- **Entire screen:** everything on that monitor is visible, including banners from your operating system, Chrome and other applications.
- **A single window or tab:** most desktop banners stay out of the shared view. This is the most effective single change you can make.

Sharing one window or tab does not remove everything. Anything WhatsApp Web displays inside the shared page is visible to the audience: the chat list with its message previews, unread badges and the conversation that is open. Desktop settings cannot affect these, because they are part of the page you chose to share.

That gives four layers to manage:

1. The notification system on your computer.
2. Chrome's permission for WhatsApp Web to send alerts.
3. WhatsApp Web's own notification settings.
4. What is visible inside the shared tab.

## Step 1: Turn on Do Not Disturb

Do Not Disturb silences banners from every application, not only WhatsApp, so it is the fastest first step.

**Windows 11:** open Settings, select System, then Notifications, and turn on Do not disturb. You can also click the date and time in the taskbar and use the toggle in the notification panel.

**Windows 10:** the feature is called Focus Assist. Set it to Alarms only to silence everything except your own reminders.

**macOS:** open System Settings, select Focus, then Do Not Disturb, and turn it on. You can also click the Control Center icon in the menu bar, choose Focus, and select Do Not Disturb. If you present regularly, a Focus can be scheduled to start at your usual call times.

Menu names vary slightly between versions. If yours differs, search your settings for "Do not disturb" or "Focus." Remember to turn it off after the call so you do not miss important messages.

## Step 2: Block WhatsApp Web alerts in Chrome

Do Not Disturb applies to the whole computer. If you present often, you can also tell Chrome directly that WhatsApp Web should not send alerts.

In Chrome, open the three-dot menu and go to Settings, then Privacy and security, then Site Settings, then Notifications. Next to "Not allowed to send notifications," select Add, enter `web.whatsapp.com`, and select Add again. Chrome's [notification help page](https://support.google.com/chrome/answer/3220216) documents these steps and explains how to allow a site again.

While the site is on the blocked list, Chrome will not show WhatsApp alerts. Remove it from the list when you finish presenting so that you continue to receive messages.

## Step 3: Adjust notification settings in WhatsApp Web

WhatsApp Web has its own notification settings, and they determine what a notification shows when one appears.

Open WhatsApp Web, open the menu, and go to Settings, then Notifications. Look for options covering sounds, desktop alerts and message previews. Turn off desktop alerts for the session. If you prefer to keep alerts on, turn off previews, so that a notification indicates a new message without displaying its content.

WhatsApp updates its menus from time to time, so look for the option names rather than a fixed position. In the WhatsApp app on your phone, there is also a setting for web and desktop notifications. Turning it off stops your phone from sending alerts to the linked browser session at all.

## Step 4: Share a tab or window, not the whole screen

Every major meeting application lets you share something narrower than your full screen. Use that option every time.

**Google Meet:** select Present now, then choose a tab or a window. In Chrome, sharing a tab is the narrowest option: your other tabs, bookmarks bar and desktop remain private. When you switch tabs, Meet may offer a "Share this tab instead" prompt. Selecting it moves your presentation to the new tab, so check which tab you are on before you click.

**Zoom:** select Share, then choose a specific window instead of Screen. To share only part of the display, use Portion of Screen on the Advanced tab. Everything inside the green frame is shared.

**Microsoft Teams:** choose a window rather than your screen when you start presenting. Microsoft's guide to [sharing your screen in Teams](https://support.microsoft.com/en-us/teams/personal/meetings-calls/share-your-screen-in-microsoft-teams-personal) shows where the Screen and Window options are.

Sharing a window instead of a tab can also expose the browser's tab bar. WhatsApp Web typically shows the unread count in the tab title, for example "(3) WhatsApp," which tells viewers that messages are waiting. Sharing a tab avoids this. For the cleanest result, open WhatsApp Web in its own browser window and confirm that it is the one you selected.

## Step 5: Blur what remains visible in the tab

Notification settings cannot control what WhatsApp Web displays inside the page. Even with Do Not Disturb on, alerts blocked and a single tab shared, the chat list still shows contact names and the first line of each chat. The open conversation shows messages, and profile photos and media thumbnails are visible. If a new message arrives during your presentation, the chat list updates in front of your audience.

A blur layer addresses this. Privacy Blur for WhatsApp runs on the WhatsApp Web page and provides separate switches for messages, contact names, chat list names, chat previews, profile photos, the compose box, images and videos, and the about or status line.

![Privacy Blur for WhatsApp panel showing separate blur switches for messages, contact names, chat list names, chat previews, profile photos, compose box, images and videos, and status](https://amrita-labs.com/assets/blog/whatsapp-blur/privacy-blur-panel.png)

Choose the zones you need, then use the main toggle to turn blur on or off at once. In the capture below, every zone is enabled, so message text and media thumbnails are blurred.

![WhatsApp Web conversation with every Privacy Blur zone switched on, so message text and media thumbnails are blurred](https://amrita-labs.com/assets/blog/whatsapp-blur/whatsapp-full-blurred.png)

For notifications, the most relevant zones are **Chat List Names** and **Chat Preview Text**. If a new chat moves to the top of the list during a call, its name and first line are already blurred when it appears.

Privacy Blur does not block desktop notifications, and it does not affect anything outside the WhatsApp Web page. Operating system banners, other applications and other tabs are not covered, which is why steps 1 to 4 come first. Blur is the final layer, not a replacement for them.

The extension also offers hover reveal, which temporarily shows a blurred area while your pointer is over it. Anyone viewing your shared tab can see what you reveal while it is visible, so stop sharing before revealing private content.

## Pre-share checklist

Before you start sharing:

1. Turn on Do Not Disturb or Focus Assist.
2. Open WhatsApp Web and check Settings, then Notifications.
3. Turn off desktop alerts, or at least message previews.
4. If you present often, block `web.whatsapp.com` notifications in Chrome.
5. Close tabs and applications you do not need to show.
6. Enable the Privacy Blur zones you want and turn on the main toggle.
7. Share a single tab or window, not the whole screen.
8. Check the shared preview if your meeting application provides one.
9. After the call, turn Do Not Disturb off and restore your notification settings.

For a broader checklist aimed at demos and stand-ups, read the [WhatsApp Web privacy checklist for screen sharing](/blog/04-whatsapp-web-privacy-checklist-screen-sharing/). To hide message text and names rather than silence alerts, see [how to blur WhatsApp messages during a screen share](/blog/how-to-blur-whatsapp-messages-during-screen-share/).

## If a notification appears anyway

Stop sharing, deal with it, then restart the share. A short pause is better than leaving private content on screen while you look for the setting.

For frequent presenters, a separate Chrome profile for calls reduces the risk. Install only the extensions you need and sign in to WhatsApp Web only when required. When recording a tutorial or demo, use a test account or sample conversations wherever possible. Blur is a useful safeguard, but real private conversations are best kept off screen entirely.

## Prepare before your next call

Notifications leak because several systems act independently and none knows you are presenting. Setting each one takes a couple of minutes. [Privacy Blur for WhatsApp](https://amrita-labs.com/privacy-blur-whatsapp/?utm_source=amrita-labs&utm_medium=owned-content&utm_campaign=privacy-blur-whatsapp_blog&utm_content=hide-whatsapp-notifications-during-screen-share-cta) handles the last layer. It is free to install, runs only on WhatsApp Web, and does not send your message content to Amrita Labs.

Before your next call, open WhatsApp Web, enable a few zones, and view the page as your audience would. If the chat list and previews are blurred and your alerts are off, you are prepared.

Privacy Blur is visual privacy for what appears on screen. It is not encryption and does not protect your account from someone who already has access to it. It does reduce the chance that a message arriving mid-call is read by the people watching.
