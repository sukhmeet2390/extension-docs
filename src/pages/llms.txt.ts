import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

const SITE = 'https://amrita-labs.com';

const CHROME_EXTENSIONS = [
  {
    slug: 'gmail-subject-score',
    name: 'EmailSubjectScore Pro',
    description:
      'Free Chrome extension that scores Gmail subject lines for spam risk, clarity, and urgency in real time. AI-powered rewrite suggestions. 50 free scores/month.',
    cwsUrl: 'https://chromewebstore.google.com/detail/emailsubjectscore-pro-sub/dleffnbdjohkmmkbojehdpkgkmpofmgm',
    cwsBlurb: 'Score email subject lines as you type in Gmail.',
    hasPrivacy: true,
    hasTerms: true,
  },
  {
    slug: 'pinello',
    name: 'Pinello',
    description:
      'Free Chrome extension that scores Pinterest pins across 5 dimensions — image, board fit, title, description, and hashtags — in real time. AI rewrite included.',
    cwsUrl: 'https://chromewebstore.google.com/detail/pinello/kmelegdnljikegoemigfgnpcbllmkije',
    cwsBlurb: 'Score Pinterest pins as you create them.',
    hasPrivacy: true,
    hasTerms: true,
  },
  {
    slug: 'privacy-blur-slack',
    name: 'Privacy Blur for Slack',
    description:
      'Free Chrome extension that blurs sensitive Slack content (messages, channel names, avatars, files) during screen sharing so you can present without leaking private conversations.',
    cwsUrl: 'https://chromewebstore.google.com/detail/privacy-blur-for-slack/cejmffebfhdnhbjkhiobaecdohheimkj',
    cwsBlurb: 'Blur Slack messages before screen sharing.',
    hasPrivacy: true,
    hasTerms: true,
  },
  {
    slug: 'privacy-blur-discord',
    name: 'Privacy Blur for Discord',
    description:
      'Free Chrome extension that blurs sensitive Discord content (server list, channels, DMs, avatars) during screen sharing.',
    cwsUrl: 'https://chromewebstore.google.com/detail/privacy-blur-for-discord/jjgfgplekjnhopfgmhgdogodmbkkcgnb',
    cwsBlurb: 'Blur Discord messages and channels before screen sharing.',
    hasPrivacy: true,
    hasTerms: true,
  },
  {
    slug: 'privacy-blur-teams',
    name: 'Privacy Blur for Microsoft Teams',
    description:
      'Free Chrome extension that blurs sensitive Microsoft Teams content (chats, channels, calendar, notifications) during screen sharing.',
    cwsUrl: 'https://chromewebstore.google.com/detail/privacy-blur-for-teams-%E2%80%94/goghfejahaadidgoloolbphebacikalp',
    cwsBlurb: 'Blur Microsoft Teams chats before screen sharing.',
    hasPrivacy: true,
    hasTerms: true,
  },
  {
    slug: 'privacy-blur-whatsapp',
    name: 'Privacy Blur for WhatsApp Web',
    description:
      'Free Chrome extension that blurs sensitive WhatsApp Web content (chat list, previews, avatars, media) during screen sharing.',
    cwsUrl: 'https://chromewebstore.google.com/detail/privacy-blur-for-whatsapp/akficmlcinjihflahiekkkheikceblfc',
    cwsBlurb: 'Blur WhatsApp Web chats before screen sharing.',
    hasPrivacy: true,
    hasTerms: true,
  },
];

const SHOPIFY_APPS = [
  {
    slug: 'cookie-consent',
    name: 'Amrita Cookie Consent',
    description:
      'GDPR/CCPA cookie consent banner for Shopify stores. Includes Google Consent Mode v2, 7-language storefront banner, and no third-party scripts.',
    installUrl: 'https://apps.shopify.com/cookie-consent-8',
    installBlurb: 'Install Amrita Cookie Consent from the Shopify App Store.',
  },
  {
    slug: 'chat-widget',
    name: 'Amrita Chat Widget',
    description:
      'Multi-channel chat widget for Shopify — one floating button that opens 9 channels (WhatsApp, Messenger, Instagram, LINE, Viber, Telegram, SMS, Email, phone). Free forever, no visitor cap, zero cookies, Shadow DOM isolated, 9-language admin.',
    installUrl: 'https://apps.shopify.com/chat-widget-1',
    installBlurb: 'Install Amrita Chat Widget from the Shopify App Store.',
  },
  {
    slug: 'accessibility-widget',
    name: 'Amrita Accessibility Widget',
    description:
      'Accessibility toolbar for Shopify stores that helps merchants work toward WCAG 2.1 compatibility — contrast, text resize, dyslexia-friendly font, link highlight, and more. 7-language admin.',
    installUrl: 'https://apps.shopify.com/accessibility-widget',
    installBlurb: 'Install Amrita Accessibility Widget from the Shopify App Store.',
  },
];

function line(url: string, title: string, blurb?: string) {
  return blurb ? `- [${title}](${url}): ${blurb}` : `- [${title}](${url})`;
}

export async function GET(_context: APIContext) {
  const blogPosts = (await getCollection('blog')).sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  );
  const comparisons = (await getCollection('comparisons')).sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  );

  const sections: string[] = [];

  sections.push('# Amrita Labs');
  sections.push('');
  sections.push(
    '> Amrita Labs builds Chrome extensions and Shopify apps for creators and merchants. Free tools that score, optimize, and improve your workflow — directly inside the platforms you already use.',
  );

  sections.push('');
  sections.push('## Chrome Extensions');
  sections.push('');
  for (const ext of CHROME_EXTENSIONS) {
    sections.push(line(`${SITE}/${ext.slug}/`, ext.name, ext.description));
  }

  sections.push('');
  sections.push('## Shopify Apps');
  sections.push('');
  for (const app of SHOPIFY_APPS) {
    sections.push(line(`${SITE}/${app.slug}/`, app.name, app.description));
  }

  sections.push('');
  sections.push('## Install Links');
  sections.push('');
  for (const ext of CHROME_EXTENSIONS) {
    if (ext.cwsUrl && ext.cwsBlurb) {
      sections.push(line(ext.cwsUrl, `${ext.name} on Chrome Web Store`, ext.cwsBlurb));
    }
  }
  for (const app of SHOPIFY_APPS) {
    sections.push(line(app.installUrl, `${app.name} on Shopify App Store`, app.installBlurb));
  }

  sections.push('');
  sections.push('## Blog');
  sections.push('');
  for (const post of blogPosts) {
    const url = post.data.canonical || `${SITE}/blog/${post.id}/`;
    sections.push(line(url, post.data.title, post.data.description));
  }

  if (comparisons.length > 0) {
    sections.push('');
    sections.push('## Comparisons');
    sections.push('');
    for (const cmp of comparisons) {
      const url = `${SITE}/${cmp.data.product}/vs/${cmp.id}/`;
      sections.push(line(url, cmp.data.title, cmp.data.description));
    }
  }

  sections.push('');
  sections.push('## Legal');
  sections.push('');
  for (const ext of CHROME_EXTENSIONS) {
    if (ext.hasPrivacy) {
      sections.push(line(`${SITE}/${ext.slug}/privacy/`, `${ext.name} Privacy Policy`));
    }
    if (ext.hasTerms) {
      sections.push(line(`${SITE}/${ext.slug}/terms/`, `${ext.name} Terms`));
    }
  }
  for (const app of SHOPIFY_APPS) {
    sections.push(line(`${SITE}/${app.slug}/privacy/`, `${app.name} Privacy Policy`));
    sections.push(line(`${SITE}/${app.slug}/terms/`, `${app.name} Terms`));
  }

  sections.push('');
  sections.push('## Contact');
  sections.push('');
  sections.push('- Email: hello@amrita-labs.com');
  sections.push(`- Website: ${SITE}`);
  sections.push('');

  return new Response(sections.join('\n'), {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
