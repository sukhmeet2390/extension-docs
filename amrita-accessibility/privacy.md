# Privacy Policy — Amrita Accessibility

**Effective Date**: 2026-06-17
**Last Updated**: 2026-06-17

Amrita Accessibility (“the App”) is a Shopify app operated by **Amrita Labs**, a sole
proprietorship of Sukhmeet Singh, based in Ontario, Canada (“we”, “us”).
Contact: sukhmeet.work+amrita-accessibility@gmail.com

## Summary

The App adds an accessibility menu to a merchant’s storefront that runs **entirely in the
shopper’s browser**. It does **not** collect personal data about shoppers, set tracking
cookies, or run analytics. The App requests **no access** to the merchant’s store data. The
only thing we store is a standard session record needed to run the embedded admin, which we
delete when the app is uninstalled.

## 1. Information we process

**a. Merchant store session (to operate the app).** When a merchant installs the App, Shopify
provides an OAuth session. We store a session record — the **shop domain**, an **access token**,
and granted **scopes** (currently none) — solely to authenticate and display the App’s admin
pages. We do not use it to read products, customers, or orders (the App requests no API scopes).

**b. Storefront widget (shopper side).** The accessibility menu runs in the shopper’s browser.
A shopper’s chosen settings (e.g., high contrast, text size) are saved in their own browser
using **`localStorage`** on their device. This information stays on the shopper’s device; it is
never sent to or stored by us, and is not linked to any identity.

**c. What we do NOT collect.** We do not collect, store, sell, rent, or share the personal data
of merchants or their customers. We do not set advertising/tracking cookies and do not run
third-party analytics in the storefront widget.

## 2. How we use information

Only to provide and operate the App (authenticate the admin, render its pages, and respond to
Shopify’s required webhooks). We do not use it for advertising or profiling.

## 3. Sharing and sub-processors

We do not sell or share personal data. The App runs on **Shopify’s platform** and is operated
using a reputable cloud hosting provider for the application and its database. These providers
process data only to host the service. ⟨We will name the specific hosting provider here once
production hosting is finalized.⟩

## 4. Data retention and deletion

We retain the session record only while the App is installed. On uninstall we delete it, and we
honor Shopify’s privacy webhooks:

- `shop/redact` — we delete the shop’s session record.
- `customers/redact` and `customers/data_request` — we hold no customer personal data, so there
  is nothing to return or delete.

Shoppers can clear their saved widget settings at any time using **Reset all** in the menu or by
clearing their browser storage.

## 5. Security

We use reasonable technical measures to protect the limited data we store (encrypted transport,
access-controlled hosting). No method of storage or transmission is completely secure.

## 6. International users

We and our providers may process data in Canada and other regions where our infrastructure
operates. By using the App you understand data may be processed there.

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

sukhmeet.work+amrita-accessibility@gmail.com — Amrita Labs, Ontario, Canada.
