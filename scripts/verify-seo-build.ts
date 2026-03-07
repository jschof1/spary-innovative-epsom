#!/usr/bin/env node
import { existsSync, readFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

import { withSeoModules } from "./load-seo-modules.ts"

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = join(__dirname, "..")
const distDir = join(rootDir, "dist")
const sitemapPath = join(distDir, "sitemap.xml")

if (!existsSync(sitemapPath)) {
  console.error("Missing dist/sitemap.xml. Run the production build first.")
  process.exit(1)
}

const sitemapXml = readFileSync(sitemapPath, "utf8")

await withSeoModules(
  async ({ routesModule, verificationModule }) => {
    const { indexableSeoRoutes } = routesModule as typeof import("../src/seo/routes.ts")
    const { collectVerificationErrors } =
      verificationModule as typeof import("../src/seo/verification.ts")
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
  },
  { loadVerificationModule: true },
)
