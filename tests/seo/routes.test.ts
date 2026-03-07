import { describe, expect, it } from "vitest"
import { locations } from "@/data/locations"
import { serviceSummaries } from "@/data/serviceSummaries"
import {
  getCanonicalUrl,
  getOutputPath,
  getSeoRouteByPath,
  indexableSeoRoutes,
  seoRoutes,
} from "@/seo/routes"

describe("seo route manifest", () => {
  it("includes the homepage route", () => {
    expect(seoRoutes.some((route) => route.path === "/")).toBe(true)
  })

  it("keeps FAQ indexable and excludes utility pages from the sitemap list", () => {
    expect(indexableSeoRoutes.some((route) => route.path === "/faq")).toBe(true)
    expect(indexableSeoRoutes.some((route) => route.path === "/feedback")).toBe(false)
    expect(indexableSeoRoutes.some((route) => route.path === "/get-quote")).toBe(false)
  })

  it("creates one route per service, location, and service-location combination", () => {
    const serviceRouteCount = seoRoutes.filter((route) => route.source === "service").length
    const locationRouteCount = seoRoutes.filter((route) => route.source === "location").length
    const serviceLocationRouteCount = seoRoutes.filter(
      (route) => route.source === "service-location",
    ).length

    expect(serviceRouteCount).toBe(serviceSummaries.length)
    expect(locationRouteCount).toBe(locations.length)
    expect(serviceLocationRouteCount).toBe(serviceSummaries.length * locations.length)
  })

  it("derives clean output paths for nested routes", () => {
    expect(getOutputPath("/")).toBe("index.html")
    expect(getOutputPath("/services")).toBe("services/index.html")
    expect(getOutputPath("/locations/epsom/kitchen-resprays")).toBe(
      "locations/epsom/kitchen-resprays/index.html",
    )
  })

  it("builds canonical URLs from the site base URL", () => {
    expect(getCanonicalUrl("/services")).toBe("https://sprayinnovations.co.uk/services")
  })

  it("stores expected metadata for generated service-location routes", () => {
    const route = getSeoRouteByPath("/locations/epsom/kitchen-resprays")

    expect(route).toMatchObject({
      source: "service-location",
      title: "Kitchen Resprays in Epsom | Spray Innovations",
    })
    expect(route?.description).toContain("Need kitchen resprays in Epsom?")
  })
})
