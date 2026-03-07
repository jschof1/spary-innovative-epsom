import { describe, expect, it } from "vitest"
import { buildSitemapXml } from "@/seo/sitemap"
import { indexableSeoRoutes } from "@/seo/routes"

describe("sitemap generation", () => {
  it("includes indexable routes and excludes noindex routes", () => {
    const xml = buildSitemapXml(indexableSeoRoutes)

    expect(xml).toContain("<loc>https://sprayinnovations.co.uk/</loc>")
    expect(xml).toContain("<loc>https://sprayinnovations.co.uk/faq</loc>")
    expect(xml).not.toContain("<loc>https://sprayinnovations.co.uk/feedback</loc>")
  })

  it("keeps homepage priority above standard static pages", () => {
    const xml = buildSitemapXml(indexableSeoRoutes)

    expect(xml).toContain("<priority>1.0</priority>")
    expect(xml).toContain("<priority>0.7</priority>")
  })
})
