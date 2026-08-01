/**
 * Central product catalog for the site.
 */
export interface ProductEntry {
  slug: string;
  name: string;
  tagline: string;
  category: 'chrome' | 'shopify';
}

export const PRODUCTS: ProductEntry[] = [
  { slug: 'gmail-subject-score', name: 'EmailSubjectScore Pro', tagline: 'Score Gmail subject lines in real time', category: 'chrome' },
  { slug: 'pinello', name: 'Pinello', tagline: 'Score Pinterest pins before you publish', category: 'chrome' },
  { slug: 'privacy-blur-slack', name: 'Privacy Blur for Slack', tagline: 'Blur Slack during screen sharing', category: 'chrome' },
  { slug: 'privacy-blur-discord', name: 'Privacy Blur for Discord', tagline: 'Blur Discord during screen sharing', category: 'chrome' },
  { slug: 'privacy-blur-teams', name: 'Privacy Blur for Microsoft Teams', tagline: 'Blur Teams during screen sharing', category: 'chrome' },
  { slug: 'privacy-blur-whatsapp', name: 'Privacy Blur for WhatsApp', tagline: 'Blur WhatsApp Web during screen sharing', category: 'chrome' },
  { slug: 'cookie-consent', name: 'Amrita Cookie Consent', tagline: 'Shopify cookie banner with Consent Mode v2', category: 'shopify' },
  { slug: 'chat-widget', name: 'Amrita Chat Widget', tagline: 'Nine-channel Shopify chat button', category: 'shopify' },
  { slug: 'accessibility-widget', name: 'Amrita Accessibility Widget', tagline: 'WCAG 2.1 toolbar for Shopify', category: 'shopify' },
];

export function findProduct(slug: string): ProductEntry | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
