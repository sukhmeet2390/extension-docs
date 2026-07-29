import type { APIContext } from 'astro';

const SITE = 'https://amrita-labs.com';

// Canonical brand tokens. Mirrors tailwind.config.mjs values.
// Any change here MUST be made in tailwind.config.mjs too (and vice versa).
// This endpoint is the single source of truth for downstream consumers
// (shopify-apps _brand/, marketing assets, Brevo templates, etc.)
//
// Keep the shape stable — downstream verify.mjs does a deep-equal diff.
const BRAND = {
  version: 1,
  name: 'Amrita Labs',
  domain: 'amrita-labs.com',
  colors: {
    brand: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
      950: '#451a03',
    },
    surface: {
      950: '#0a0a0f',
      900: '#0f1117',
      800: '#151820',
      700: '#1c2030',
      600: '#252a3a',
    },
    // Semantic colors — not in tailwind config yet, but locked here so
    // downstream marketing assets stay in sync.
    semantic: {
      ok: '#19b36b',
      muted: '#54627a',
    },
  },
  fonts: {
    sans: ['IBM Plex Sans', 'SF Pro Display', 'system-ui', 'sans-serif'],
  },
  assets: {
    favicon: `${SITE}/favicon.svg`,
    faviconSvg: `${SITE}/favicon.svg`,
  },
  // Mapping for the shopify-apps screenshot/feature-media render pipeline
  // (_assets/screenshots/_frame.css). Keys match the CSS custom properties
  // that `_frame.css` defines in its `:root` block.
  screenshotFrame: {
    '--brand': '#d97706',
    '--brand-2': '#92400e',
    '--ink': '#0f1117',
    '--muted': '#54627a',
    '--ok': '#19b36b',
  },
};

export async function GET(_context: APIContext) {
  return new Response(JSON.stringify(BRAND, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
