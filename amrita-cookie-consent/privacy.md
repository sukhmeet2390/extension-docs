# Privacy Policy — Cookie Consent

**Effective Date**: 2026-06-24
**Last Updated**: 2026-06-24

Cookie Consent (“the App”) is a Shopify app operated by **Amrita Labs** (“we”, “us”).
For privacy questions, contact us using the support email shown on our Shopify App Store listing.

## Summary

The App adds a cookie consent banner to a merchant’s storefront that runs **entirely in the
visitor’s browser**. A visitor’s consent choice is stored **on their own device** and recorded in
**Shopify’s own consent system**. The App does **not** collect personal data about visitors, set
advertising/tracking cookies, or run its own analytics. The App requests **no access** to the
merchant’s store data. The only thing we store is a standard session record needed to run the
embedded admin, which we delete when the app is uninstalled.

## 1. Information we process

**a. Merchant store session (to operate the app).** When a merchant installs the App, Shopify
provides an OAuth session. We store a session record — the **shop domain**, an **access token**,
and granted **scopes** (currently none) — solely to authenticate and display the App’s admin
pages. We do not use it to read products, customers, or orders (the App requests no API scopes).

**b. Consent banner (visitor side).** The banner runs in the visitor’s browser. When a visitor
makes a choice: their selection is saved in their **own browser** using **`localStorage`** (a
functional key so the banner isn’t shown again) — this stays on the visitor’s device, is never
sent to or stored by us, and is not linked to any identity; the consent signal is passed to
**Shopify’s Customer Privacy API**, which records it in **Shopify’s** own consent system and gates
Shopify-managed pixels accordingly; and, if the merchant enables it, **Google Consent Mode v2**
signals (granted/denied) are sent to the merchant’s Google tags. These signals carry the consent
state only — we do not receive or store them.

**c. What we do NOT collect.** We do not collect, store, sell, rent, or share the personal data
of merchants or their customers. We do not set advertising/tracking cookies and do not run
third-party analytics in the storefront banner. (The consent choice itself is functional, not
tracking.)

**d. If you contact us.** If you email our support, we receive your email address and the
contents of your message and use them only to respond to and resolve your inquiry. We don’t
store this in a database or use it for anything else.

## 2. How we use information

Only to provide and operate the App (authenticate the admin, render its pages, relay the
visitor’s consent choice to Shopify’s Customer Privacy API and Google Consent Mode, and respond
to Shopify’s required webhooks). We do not use it for advertising or profiling.

## 3. Sharing and sub-processors

We do not sell or share personal data. The App runs on **Shopify’s platform** and is operated
using **Microsoft Azure** (application hosting) and **Neon** (database hosting). These providers
process data only to host the service.

## 4. Data retention and deletion

We retain the session record only while the App is installed. On uninstall we delete it, and we
honor Shopify’s privacy webhooks:

- `shop/redact` — we delete the shop’s session record.
- `customers/redact` and `customers/data_request` — we hold no customer personal data, so there
  is nothing to return or delete.

Visitors can change or withdraw their choice at any time using the **“Cookie preferences”** reopen
tab, or by clearing their browser storage.

## 5. Security

We use reasonable technical measures to protect the limited data we store (encrypted transport,
access-controlled hosting). No method of storage or transmission is completely secure.

## 6. International users

We and our infrastructure providers may process data in the regions where they operate. By
using the App you understand data may be processed there.

## 7. Children

The App is for merchants and their store visitors and is not directed to children.

## 8. Your rights

Depending on your location (e.g., GDPR, CCPA/CPRA, PIPEDA), you may have rights to access,
correct, or delete personal data we hold about you. Because we hold only a store session record
and no customer personal data, most requests are satisfied by uninstalling the App (which deletes
the record) or by contacting us.

## 9. Changes

We may update this policy; we will change the “Last Updated” date above and, for material
changes, note it in the App listing.

## 10. Contact

Amrita Labs — please use the support email shown on our Shopify App Store listing.
