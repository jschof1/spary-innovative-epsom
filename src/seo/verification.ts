import { existsSync, readFileSync } from "node:fs"
import { join } from "node:path"

import type { SeoRoute } from "@/seo/routes"
import { getCanonicalUrl } from "@/seo/routes"

type VerificationInput = {
  distDir: string
  routes: SeoRoute[]
  sitemapXml: string
}

const decodeHtmlEntities = (value: string) =>
  value
    .replaceAll("&quot;", '"')
    .replaceAll("&#x27;", "'")
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&amp;", "&")

const extractAttribute = (tag: string, attributeName: string) => {
  const attributePattern = new RegExp(
    `${attributeName}=(["'])(.*?)\\1`,
    "i",
  )

  return tag.match(attributePattern)?.[2]
}

const extractTitle = (html: string) => {
  const titleMatch = html.match(/<title>(.*?)<\/title>/i)
  return titleMatch ? decodeHtmlEntities(titleMatch[1]) : undefined
}

const extractMetaDescription = (html: string) => {
  const metaMatch = html.match(
    /<meta\b[^>]*\bname=(["'])description\1[^>]*>|<meta\b[^>]*\bcontent=(["']).*?\2[^>]*\bname=(["'])description\3[^>]*>/i,
  )

  return metaMatch ? decodeHtmlEntities(extractAttribute(metaMatch[0], "content") ?? "") : undefined
}

const extractCanonicalHref = (html: string) => {
  const canonicalMatch = html.match(
    /<link\b[^>]*\brel=(["'])canonical\1[^>]*>|<link\b[^>]*\bhref=(["']).*?\2[^>]*\brel=(["'])canonical\3[^>]*>/i,
  )

  return canonicalMatch?.[0] ? extractAttribute(canonicalMatch[0], "href") : undefined
}

const getMetadataMismatches = (html: string, route: SeoRoute) => ({
  missingTitle: extractTitle(html) !== route.title,
  missingDescription: extractMetaDescription(html) !== route.description,
  missingCanonical: extractCanonicalHref(html) !== getCanonicalUrl(route.path),
})

export const htmlIncludesExpectedMetadata = (html: string, route: SeoRoute) => {
  const mismatches = getMetadataMismatches(html, route)

  return !mismatches.missingTitle && !mismatches.missingDescription && !mismatches.missingCanonical
}

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

    const mismatches = getMetadataMismatches(html, route)

    if (mismatches.missingTitle) {
      errors.push(`Missing expected title in prerendered HTML for route: ${route.path}`)
    }

    if (mismatches.missingDescription) {
      errors.push(`Missing expected description in prerendered HTML for route: ${route.path}`)
    }

    if (mismatches.missingCanonical) {
      errors.push(`Missing expected canonical in prerendered HTML for route: ${route.path}`)
    }

    if (!sitemapXml.includes(`<loc>${getCanonicalUrl(route.path)}</loc>`)) {
      errors.push(`Missing sitemap entry for route: ${route.path}`)
    }
  }

  return errors
}
