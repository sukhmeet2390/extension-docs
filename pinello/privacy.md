# Privacy Policy — Pinello

**Effective Date**: 2026-07-05
**Last Updated**: 2026-07-05

## 1. Who We Are

Pinello is operated by GoldenLeaf Apps, based in Canada.
Contact: sukhmeet.work+pinello@gmail.com

## 2. What This Extension Does

Pinello scores Pinterest pins as you create them — analyzing image fitness, board fit, title, description, and hashtag SEO in real time, with one-click AI rewrite suggestions for text fields.

## 3. Data We Collect

We collect ONLY the following data:

| Category | What | Why | Retention |
|---|---|---|---|
| Anonymous device ID | A random UUID generated on install | Rate-limit and free-tier cap enforcement | Retained while active; deleted upon request |
| Aggregated usage events | Counts of feature uses (pins scored, rewrites used, dimensions scored) | Improve the product | Up to 24 months |
| Error logs | JS error stack traces (no user content) | Bug fixing | Up to 90 days |

We do **NOT** collect:
- Pin images, descriptions, or board names
- Pinterest account details or credentials
- Browsing history outside Pinterest pin creation
- Any personally identifiable information without your explicit account creation

## 4. What Leaves Your Browser

The extension sends the following to our backend when you trigger an AI rewrite or coherence check:
- Anonymous device ID (no name, no email)
- The title or description text you are scoring (ephemeral — processed and immediately discarded, never stored on our servers beyond 24-hour caching)
- Diagnostic metadata (extension version, browser version)

**Local-only processing** (never sent to any server):
- Image analysis (aspect ratio, resolution, brightness, contrast) — runs entirely in your browser via Canvas
- Hashtag counting and keyword analysis — client-side only
- Board fit keyword overlap — client-side for free tier

All server transmission is encrypted via HTTPS / TLS 1.3.

**Important**: Text sent for AI scoring is processed by Azure OpenAI (Microsoft). The text is processed ephemerally and is not stored by us or used for model training. See Microsoft's [data privacy commitments](https://learn.microsoft.com/en-us/legal/cognitive-services/openai/data-privacy).

## 5. Third-Party Services

We share data with the following services strictly to provide the product:

| Service | Data shared | Purpose | Their privacy policy |
|---|---|---|---|
| Microsoft Azure OpenAI | Title/description text (ephemeral, when you trigger AI features) | AI inference for scoring + rewrite | https://privacy.microsoft.com/ |
| Microsoft Azure | Encrypted request relay | Backend hosting | https://privacy.microsoft.com/ |
| PostHog | Anonymous usage events (no content) | Product analytics | https://posthog.com/privacy |
| Sentry | Error logs (no user content) | Bug tracking | https://sentry.io/privacy/ |

We do **NOT** sell, share, or rent your data to advertisers or data brokers.

## 6. Your Rights

### GDPR (EU users)
- Right to access, rectify, erase, restrict, or port your data
- Right to object to processing
- Right to lodge a complaint with your supervisory authority
- Request via: sukhmeet.work+pinello@gmail.com

### CCPA / CPRA (California users)
- Right to know what we collect
- Right to delete
- Right to opt out of "sale" or "sharing" — we do not sell or share your data
- Right to non-discrimination
- Request via: sukhmeet.work+pinello@gmail.com

### PIPEDA (Canadian users)
- Right to know what personal information we hold and how it is used
- Right to access your personal information
- Right to challenge the accuracy of your information
- Right to withdraw consent at any time
- Privacy officer contact: sukhmeet.work+pinello@gmail.com

## 7. Data Security

- All data in transit is encrypted with TLS 1.3
- Backend secrets stored in Azure Key Vault (never in source code)
- Managed Identity authentication (no API keys in production)
- Anonymous device IDs are non-reversible random UUIDs

## 8. Children's Privacy

Pinello is not directed at children under 13. We do not knowingly collect data from children.

## 9. Changes to This Policy

We may update this policy. Significant changes will be noted in the Chrome Web Store listing changelog. Continued use after changes constitutes acceptance.

## 10. Contact

Questions or requests: sukhmeet.work+pinello@gmail.com
