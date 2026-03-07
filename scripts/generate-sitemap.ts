#!/usr/bin/env node
import { writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

import { withSeoModules } from "./load-seo-modules.ts"

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = join(__dirname, "..")

await withSeoModules(
  async ({ routesModule, sitemapModule }) => {
    const { indexableSeoRoutes } = routesModule as typeof import("../src/seo/routes.ts")
    const { buildSitemapXml } = sitemapModule as typeof import("../src/seo/sitemap.ts")
    const sitemapXml = buildSitemapXml(indexableSeoRoutes)

    writeFileSync(join(rootDir, "public", "sitemap.xml"), sitemapXml)

    console.log(`Sitemap regenerated with ${indexableSeoRoutes.length} indexable URLs.`)
  },
  { loadSitemapModule: true },
)
