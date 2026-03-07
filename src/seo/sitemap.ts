import type { SeoRoute } from "@/seo/routes"
import { getCanonicalUrl } from "@/seo/routes"

export const buildSitemapXml = (routes: SeoRoute[]) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${getCanonicalUrl(route.path)}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`
