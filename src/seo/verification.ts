import { existsSync, readFileSync } from "node:fs"
import { join } from "node:path"

import type { SeoRoute } from "@/seo/routes"
import { getCanonicalUrl } from "@/seo/routes"

type VerificationInput = {
  distDir: string
  routes: SeoRoute[]
  sitemapXml: string
}

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")

export const htmlIncludesExpectedMetadata = (html: string, route: SeoRoute) =>
  html.includes(`<title>${escapeHtml(route.title)}</title>`) &&
  new RegExp(
    `<meta[^>]+name="description"[^>]+content="${escapeRegExp(escapeHtml(route.description))}"`,
  ).test(html) &&
  new RegExp(
    `<link[^>]+rel="canonical"[^>]+href="${escapeRegExp(getCanonicalUrl(route.path))}"`,
  ).test(html)

export const collectVerificationErrors = ({
  distDir,
  routes,
  sitemapXml,
}: VerificationInput) => {
  const errors: string[] = []

  for (const route of routes) {
    if (!route.title.trim()) {
      errors.push(`Missing expected title for route: ${route.path}`)
    }

    if (!route.description.trim()) {
      errors.push(`Missing expected description for route: ${route.path}`)
    }

    const htmlPath = join(distDir, route.outputPath)

    if (!existsSync(htmlPath)) {
      errors.push(`Missing prerendered HTML for route: ${route.path} (${route.outputPath})`)
      continue
    }

    const html = readFileSync(htmlPath, "utf8")

    if (!html.includes(`<title>${escapeHtml(route.title)}</title>`)) {
      errors.push(`Missing expected title in prerendered HTML for route: ${route.path}`)
    }

    if (
      !new RegExp(
        `<meta[^>]+name="description"[^>]+content="${escapeRegExp(escapeHtml(route.description))}"`,
      ).test(html)
    ) {
      errors.push(`Missing expected description in prerendered HTML for route: ${route.path}`)
    }

    if (
      !new RegExp(
        `<link[^>]+rel="canonical"[^>]+href="${escapeRegExp(getCanonicalUrl(route.path))}"`,
      ).test(html)
    ) {
      errors.push(`Missing expected canonical in prerendered HTML for route: ${route.path}`)
    }

    if (!sitemapXml.includes(`<loc>${getCanonicalUrl(route.path)}</loc>`)) {
      errors.push(`Missing sitemap entry for route: ${route.path}`)
    }
  }

  return errors
}
