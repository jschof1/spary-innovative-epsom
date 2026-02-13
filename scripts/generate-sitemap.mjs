#!/usr/bin/env node
/**
 * Generates sitemap.xml from locations and services data.
 * Run: node scripts/generate-sitemap.mjs
 */
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

// Service slugs - keep in sync with src/data/services.ts
const serviceSlugs = [
  'kitchen-resprays',
  'upvc-window-spraying',
  'upvc-door-spraying',
  'garage-door-spraying',
  'conservatory-spraying',
  'fascias-soffits-spraying',
  'granite-spraying',
  'commercial-spraying',
];

// Parse locations from the TypeScript file (simple regex extraction)
const locationsPath = join(root, 'src/data/locations.ts');
const locationsContent = readFileSync(locationsPath, 'utf-8');
const slugMatches = [...locationsContent.matchAll(/slug:\s*["']([^"']+)["']/g)];
const locationSlugs = [...new Set(slugMatches.map(m => m[1]))];

const BASE_URL = 'https://sprayinnovations.co.uk';

const staticPages = [
  '',
  '/about',
  '/services',
  '/contact',
  '/reviews',
  '/feedback',
  '/discount',
  '/privacy-policy',
  '/cookie-policy',
  '/terms-of-service',
  '/get-quote',
];

const servicePages = serviceSlugs.map(s => `/services/${s}`);
const locationPages = locationSlugs.map(l => `/locations/${l}`);

const serviceLocationPages = [];
for (const l of locationSlugs) {
  for (const s of serviceSlugs) {
    serviceLocationPages.push(`/locations/${l}/${s}`);
  }
}

const allPages = [...staticPages, ...servicePages, ...locationPages, ...serviceLocationPages];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${BASE_URL}${page}</loc>
    <changefreq>${page === '' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${page === '' ? '1.0' : page.startsWith('/services/') || page.startsWith('/locations/') ? '0.8' : '0.5'}</priority>
  </url>`).join('\n')}
</urlset>`;

writeFileSync(join(root, 'public/sitemap.xml'), xml);
console.log(`Sitemap regenerated with ${locationSlugs.length} locations and ${allPages.length} total URLs.`);
