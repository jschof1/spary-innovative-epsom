# Spray Innovations Epsom

Marketing site for Spray Innovations, built with Vite, React, and route-level SEO metadata. The production build now uses a manifest-driven prerender flow so Cloudflare Pages receives real HTML files for important service and location routes.

## SEO Prerender Standard

This repo follows the `vite-react-seo-prerender-standard`.

Source of truth:

- route manifest: `src/seo/routes.ts`
- sitemap builder: `src/seo/sitemap.ts`
- sitemap script: `scripts/generate-sitemap.ts`
- prerender script: `scripts/prerender.ts`
- SEO verification script: `scripts/verify-seo-build.ts`

Project docs:

- rollout design: `docs/plans/2026-03-05-spary-seo-prerender-design.md`
- rollout plan: `docs/plans/2026-03-05-spary-seo-prerender.md`
- SEO standard guide: `docs/seo-prerender-standard.md`

## Route Policy

Indexable routes:

- `/`
- `/about`
- `/services`
- `/contact`
- `/reviews`
- `/faq`
- `/services/:serviceSlug`
- `/locations/:locationSlug`
- `/locations/:locationSlug/:serviceSlug`

Noindex routes:

- `/feedback`
- `/discount`
- `/get-quote`
- `/add-customer`
- `/privacy-policy`
- `/cookie-policy`
- `/terms-of-service`

## Commands

Development:

```bash
npm run dev
```

Run tests:

```bash
npm run test -- --run
```

Generate the sitemap only:

```bash
npm run generate-sitemap
```

Run the full production build:

```bash
npm run build
```

Run SEO verification against the built output:

```bash
npm run verify:seo
```

Run linting:

```bash
npm run lint
```

## Build Flow

`npm run build` performs these steps:

1. Generate `public/sitemap.xml` from `src/seo/routes.ts`
2. Run the standard TypeScript + Vite production build
3. Launch a local preview server against `dist`
4. Visit each indexable route in a headless browser
5. Save rendered HTML into `dist/.../index.html`
6. Verify HTML files, titles, descriptions, canonicals, and sitemap coverage

## Notes

- The prerender step uses `puppeteer-core`.
- Browser lookup order is: `PUPPETEER_EXECUTABLE_PATH`, common macOS app paths, then common Linux Chrome/Chromium paths.
- In CI, set `PUPPETEER_EXECUTABLE_PATH` explicitly if Chrome is installed somewhere non-standard.
- If you add a new SEO route type, update `src/seo/routes.ts` instead of adding route lists to individual scripts.
