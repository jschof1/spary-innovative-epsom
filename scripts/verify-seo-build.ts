#!/usr/bin/env node
import { existsSync, readFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = join(__dirname, "..")
const distDir = join(rootDir, "dist")
const distSsrDir = join(rootDir, "dist-ssr")
const ssrEntryPath = join(distSsrDir, "ssr.js")
const sitemapPath = join(distDir, "sitemap.xml")
const notFoundPath = join(distDir, "404.html")

if (!existsSync(sitemapPath)) {
  console.error("Missing dist/sitemap.xml. Run the production build first.")
  process.exit(1)
}

if (!existsSync(ssrEntryPath)) {
  console.error(
    "Missing dist-ssr/ssr.js. Run the full build (including build:ssr) first.",
  )
  process.exit(1)
}

if (!existsSync(notFoundPath)) {
  console.error(
    "Missing dist/404.html. Cloudflare Pages would fall back to serving the homepage for unknown URLs.",
  )
  process.exit(1)
}

const notFoundHtml = readFileSync(notFoundPath, "utf8")

if (!notFoundHtml.includes('name="robots" content="noindex, follow"')) {
  console.error("dist/404.html must include a noindex, follow robots directive.")
  process.exit(1)
}

if (notFoundHtml.includes('rel="canonical"')) {
  console.error("dist/404.html must not declare a canonical URL.")
  process.exit(1)
}

const sitemapXml = readFileSync(sitemapPath, "utf8")

const { indexableSeoRoutes, collectVerificationErrors } = await import(
  pathToFileURL(ssrEntryPath).href
)

const errors = collectVerificationErrors({
  distDir,
  routes: indexableSeoRoutes,
  sitemapXml,
})

if (errors.length > 0) {
  console.error("SEO verification failed:")
  for (const error of errors) {
    console.error(`- ${error}`)
  }
  process.exit(1)
}

console.log(`Verified ${indexableSeoRoutes.length} indexable SEO routes.`)
console.log("Verified sitemap alignment.")
console.log("Verified prerendered HTML output.")
console.log("Verified the Cloudflare Pages 404 fallback.")
