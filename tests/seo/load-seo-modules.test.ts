import { describe, expect, it } from "vitest"

import { withSeoModules } from "../../scripts/load-seo-modules"

describe("seo module loading", () => {
  it("loads route and sitemap modules through Vite SSR", async () => {
    await expect(
      withSeoModules(
        async ({ routesModule, sitemapModule }) => {
          expect(routesModule.indexableSeoRoutes.length).toBeGreaterThan(0)
          expect(typeof sitemapModule?.buildSitemapXml).toBe("function")
        },
        { loadSitemapModule: true },
      ),
    ).resolves.toBeUndefined()
  })
})
