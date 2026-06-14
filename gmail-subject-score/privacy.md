# Privacy Policy — EmailSubjectScore Pro

**Effective Date**: 2026-05-18
**Last Updated**: 2026-06-13

## 1. Who We Are

EmailSubjectScore Pro is operated by GoldenLeaf Apps, based in Canada.
Contact: sukhmeet.work+gmail-subject-score@gmail.com

## 2. What This Extension Does

EmailSubjectScore Pro scores email subject lines as you type in Gmail compose, providing spam, clarity, and urgency ratings with AI-powered rewrite suggestions.

## 3. Data We Collect

We collect ONLY the following data:

| Category | What | Why | Retention |
|---|---|---|---|
| Anonymous device ID | A random UUID generated on install | Rate-limit and free-tier cap enforcement | Retained while active; deleted upon request |
| Aggregated usage events | Counts of feature uses (scores requested, rewrites used) | Improve the product | Up to 24 months |
| Error logs | JS error stack traces (no user content) | Bug fixing | Up to 90 days |

We do **NOT** collect:
- Email message bodies or recipients
- Page contents beyond the subject line you choose to score
- Browsing history
- Any personally identifiable information without your explicit account creation

## 4. What Leaves Your Browser

The extension sends the following to our backend when you trigger a score:
- Anonymous device ID (no name, no email)
- The subject line text you choose to score (ephemeral — processed and immediately discarded, never stored on our servers)
- Diagnostic metadata (extension version, browser version)

All transmission is encrypted via HTTPS / TLS 1.3.

**Important**: Subject line text is sent to Azure OpenAI (Microsoft) for AI scoring. The text is processed ephemerally and is not stored by us or used for model training. See Microsoft's [data privacy commitments](https://learn.microsoft.com/en-us/legal/cognitive-services/openai/data-privacy).

## 5. Third-Party Services

We share data with the following services strictly to provide the product:

| Service | Data shared | Purpose | Their privacy policy |
|---|---|---|---|
| Microsoft Azure OpenAI | Subject line text (ephemeral, when you trigger scoring) | AI inference for scoring + rewrite | https://privacy.microsoft.com/ |
| Microsoft Azure | Encrypted request relay | Backend hosting | https://privacy.microsoft.com/ |
| PostHog | Anonymous usage events (no content) | Product analytics | https://posthog.com/privacy |
| Sentry | Error logs (no user content) | Bug tracking | https://sentry.io/privacy/ |

We do **NOT** sell, share, or rent your data to advertisers or data brokers.

## 6. Your Rights

### GDPR (EU users)
- Right to access, rectify, erase, restrict, or port your data
- Right to object to processing
- Right to lodge a complaint with your supervisory authority
- Request via: sukhmeet.work+gmail-subject-score@gmail.com

### CCPA / CPRA (California users)
- Right to know what we collect
- Right to delete
- Right to opt out of "sale" or "sharing" — we do not sell or share your data
- Right to non-discrimination
- Request via: sukhmeet.work+gmail-subject-score@gmail.com

When you exercise the right to opt out, we will acknowledge your request via email.

### PIPEDA (Canadian users)
- Right to know what personal information we hold and how it is used
- Right to access your personal information
- Right to challenge the accuracy of your information
- Right to withdraw consent at any time
- We adhere to the 10 fair information principles under PIPEDA
- Privacy officer contact: sukhmeet.work+gmail-subject-score@gmail.com

### CASL (Canadian recipients)
- If we send commercial electronic messages, we will do so only with express or implied consent
- Any such messages will include sender identification and a working unsubscribe mechanism

### Device-ID classification disclaimer

We treat the anonymous device-ID as non-personal data for analytics purposes. Some privacy regulators (notably EDPB under GDPR) have ruled in specific cases that persistent identifiers can constitute personal data even without traditional PII attached. We monitor regulatory guidance and will reclassify or implement explicit opt-out flows if the legal posture shifts.

## 7. Data Retention & Deletion

- Anonymous device ID: retained while your account is active, deleted upon request
- Usage events: retained for up to 24 months, then deleted
- Error logs: up to 90 days
- Account data (if you create one for Pro): until you request deletion
- We make reasonable efforts to delete data within the timeframes above, but exact timing may vary

## 8. Children's Privacy

This extension is not intended for users under 13 (COPPA) or under 16 in the EU (GDPR). We do not knowingly collect data from children.

## 9. Security

- All data in transit: HTTPS / TLS 1.3
- Backend secrets: Azure Key Vault (never hardcoded)
- Per-user daily spend caps prevent abuse
- We do not store payment card data (handled by payment processor)
- No API keys or secrets in the extension code

### Data Breach Notification

In the event of a data breach that affects your information, we will:
- Notify affected users as soon as feasible via email (if available) or in-extension banner, and within timeframes required by applicable law
- Report to relevant supervisory authorities where required by law
- Describe the nature of the breach, categories of data affected, and measures taken to address it

## 10. AI Disclosure (EU AI Act)

This extension uses AI (GPT-4.1-mini via Azure OpenAI) to:
- Score subject lines on spam, clarity, and urgency dimensions
- Generate alternative subject line suggestions

All AI-generated content is clearly labeled as "AI-generated" in the extension interface. This product is classified as low-risk under the EU AI Act (not in Annex III).

## 11. Changes to This Policy

We may update this policy at any time. We will make reasonable efforts to notify users of material changes via:
- An in-extension banner for significant changes
- Updating the "Last Updated" date above

Continued use after changes are posted constitutes acceptance.

## 12. Contact

For any privacy questions or rights requests: sukhmeet.work+gmail-subject-score@gmail.com
