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
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
      950: '#172554',
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
    sans: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
  },
  assets: {
    favicon: `${SITE}/favicon.png`,
    faviconSvg: `${SITE}/favicon.svg`,
  },
  // Mapping for the shopify-apps screenshot/feature-media render pipeline
  // (_assets/screenshots/_frame.css). Keys match the CSS custom properties
  // that `_frame.css` defines in its `:root` block.
  screenshotFrame: {
    '--brand': '#2563eb',
    '--brand-2': '#1e40af',
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
