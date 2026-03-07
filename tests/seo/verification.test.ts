import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { tmpdir } from "node:os"

import { afterEach, describe, expect, it } from "vitest"

import {
  collectVerificationErrors,
  htmlIncludesExpectedMetadata,
} from "@/seo/verification"
import { getSeoRouteByPath, indexableSeoRoutes } from "@/seo/routes"
import { buildSitemapXml } from "@/seo/sitemap"

const tempDirs: string[] = []

afterEach(() => {
  while (tempDirs.length > 0) {
    const tempDir = tempDirs.pop()

    if (tempDir) {
      rmSync(tempDir, { recursive: true, force: true })
    }
  }
})

describe("seo verification helpers", () => {
  it("accepts equivalent apostrophe encodings in production verification", () => {
    const route = getSeoRouteByPath("/services/upvc-window-spraying")
    const distDir = mkdtempSync(join(tmpdir(), "spary-seo-"))
    tempDirs.push(distDir)

    expect(route).toBeDefined()
    mkdirSync(dirname(join(distDir, route!.outputPath)), { recursive: true })

    writeFileSync(
      join(distDir, route!.outputPath),
      `
      <html>
        <head>
          <title>${route?.title}</title>
          <meta name="description" content="Modernize your home&#39;s exterior with professional UPVC window coatings." />
          <link rel="canonical" href="https://sprayinnovations.co.uk/services/upvc-window-spraying" />
        </head>
      </html>
      `,
    )

    const sitemapXml = buildSitemapXml([route!])
    const errors = collectVerificationErrors({
      distDir,
      routes: [route!],
      sitemapXml,
    })

    expect(errors).toEqual([])
  })

  it("matches escaped apostrophes in prerendered descriptions", () => {
    const route = getSeoRouteByPath("/services/upvc-window-spraying")

    expect(route).toBeDefined()
    expect(
      htmlIncludesExpectedMetadata(
        `
        <html>
          <head>
            <title>${route?.title}</title>
            <meta name="description" content="Modernize your home&#x27;s exterior with professional UPVC window coatings." />
            <link rel="canonical" href="https://sprayinnovations.co.uk/services/upvc-window-spraying" />
          </head>
        </html>
        `,
        route!,
      ),
    ).toBe(true)
  })

  it("detects expected metadata in prerendered HTML", () => {
    const route = getSeoRouteByPath("/services/kitchen-resprays")

    expect(route).toBeDefined()
    expect(
      htmlIncludesExpectedMetadata(
        `
        <html>
          <head>
            <title>${route?.title}</title>
            <meta name="description" content="${route?.description}" />
            <link rel="canonical" href="https://sprayinnovations.co.uk/services/kitchen-resprays" />
          </head>
        </html>
        `,
        route!,
      ),
    ).toBe(true)
  })

  it("reports missing prerendered files and sitemap drift", () => {
    const distDir = mkdtempSync(join(tmpdir(), "spary-seo-"))
    tempDirs.push(distDir)

    const sitemapXml = buildSitemapXml(indexableSeoRoutes.filter((seoRoute) => seoRoute.path !== "/faq"))

    writeFileSync(join(distDir, "index.html"), "<html><head><title>Wrong</title></head></html>")
    writeFileSync(join(distDir, "sitemap.xml"), sitemapXml)

    const errors = collectVerificationErrors({
      distDir,
      routes: indexableSeoRoutes.slice(0, 2),
      sitemapXml,
    })

    expect(errors.some((error) => error.includes("Missing prerendered HTML"))).toBe(true)
    expect(errors.some((error) => error.includes("Missing expected title"))).toBe(true)
  })
})
