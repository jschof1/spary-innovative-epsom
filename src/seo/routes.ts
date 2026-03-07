import { locations } from "@/data/locations"
import { services } from "@/data/services"
import { siteSettings } from "@/data/siteSettings"

export type SeoChangefreq = "daily" | "weekly" | "monthly" | "yearly"
export type SeoRouteSource = "static" | "service" | "location" | "service-location"

export type SeoRoute = {
  path: string
  outputPath: string
  title: string
  description: string
  noindex?: boolean
  changefreq: SeoChangefreq
  priority: number
  source: SeoRouteSource
}

const normalizePath = (path: string) => {
  if (!path || path === "/") {
    return "/"
  }

  return path.startsWith("/") ? path : `/${path}`
}

export const getOutputPath = (path: string) => {
  const normalizedPath = normalizePath(path)

  if (normalizedPath === "/") {
    return "index.html"
  }

  return `${normalizedPath.replace(/^\/+/, "").replace(/\/+$/, "")}/index.html`
}

export const getCanonicalUrl = (path: string) => {
  const normalizedPath = normalizePath(path)
  return `${siteSettings.baseUrl}${normalizedPath}`
}

const createRoute = (
  path: string,
  title: string,
  description: string,
  source: SeoRouteSource,
  options?: Partial<Pick<SeoRoute, "noindex" | "changefreq" | "priority">>,
): SeoRoute => ({
  path: normalizePath(path),
  outputPath: getOutputPath(path),
  title,
  description,
  noindex: options?.noindex,
  changefreq: options?.changefreq ?? "monthly",
  priority: options?.priority ?? 0.5,
  source,
})

const staticRoutes: SeoRoute[] = [
  createRoute(
    "/",
    `${siteSettings.businessName} | Professional Spray Painting in Epsom & Surrey`,
    "Expert on-site & off-site spray painting services in Epsom, Surrey. Specializing in kitchen resprays, UPVC window and door spraying. Eco-friendly, 10-year guarantee.",
    "static",
    { changefreq: "weekly", priority: 1 },
  ),
  createRoute(
    "/about",
    `About Us | ${siteSettings.businessName}`,
    `Learn more about ${siteSettings.businessName}. We are your local expert spray painting specialists serving Epsom, Ewell, and the surrounding areas.`,
    "static",
    { priority: 0.7 },
  ),
  createRoute(
    "/services",
    `Our Spraying Services | ${siteSettings.businessName}`,
    "Professional spray painting services across Epsom and Surrey. Kitchen resprays, UPVC window and door spraying, and more. Eco-friendly finishes with a 10-year guarantee.",
    "static",
    { priority: 0.8 },
  ),
  createRoute(
    "/contact",
    `Contact ${siteSettings.businessName} | Free Spray Painting Quote`,
    `Contact ${siteSettings.businessName} for professional spray painting in Epsom and Surrey. Call or request a free quote for kitchens, UPVC, and commercial spraying.`,
    "static",
    { priority: 0.7 },
  ),
  createRoute(
    "/reviews",
    `Customer Reviews & Testimonials | ${siteSettings.businessName}`,
    `Read real customer reviews for ${siteSettings.businessName}. With a 5/5 rating from customers across Epsom and Surrey.`,
    "static",
    { priority: 0.7 },
  ),
  createRoute(
    "/faq",
    `Frequently Asked Questions | ${siteSettings.businessName}`,
    "Find answers to common questions about our professional spray painting services in Epsom and Surrey. Learn about our process, 10-year guarantee, and more.",
    "static",
    { priority: 0.7 },
  ),
  createRoute(
    "/feedback",
    `Feedback | ${siteSettings.businessName}`,
    `Share feedback about your experience with ${siteSettings.businessName}.`,
    "static",
    { noindex: true, priority: 0.2 },
  ),
  createRoute(
    "/discount",
    `Special Offer | ${siteSettings.businessName}`,
    `Claim a special offer from ${siteSettings.businessName}. Submit your details for a discounted spray painting quote.`,
    "static",
    { noindex: true, priority: 0.2 },
  ),
  createRoute(
    "/get-quote",
    `Get Your Free Quote | ${siteSettings.businessName}`,
    "Get a fast, free, no-obligation spray painting quote in minutes. Local spraying specialist serving Epsom and Surrey.",
    "static",
    { noindex: true, priority: 0.2 },
  ),
  createRoute(
    "/add-customer",
    "Add Customer | Internal",
    "Internal customer intake form.",
    "static",
    { noindex: true, priority: 0.1 },
  ),
  createRoute(
    "/privacy-policy",
    `Privacy Policy | ${siteSettings.businessName}`,
    `Privacy Policy for ${siteSettings.businessName}. Learn how we collect and protect your data.`,
    "static",
    { noindex: true, priority: 0.2 },
  ),
  createRoute(
    "/cookie-policy",
    `Cookie Policy | ${siteSettings.businessName}`,
    `Cookie Policy for ${siteSettings.businessName}. Learn how we use cookies on our website.`,
    "static",
    { noindex: true, priority: 0.2 },
  ),
  createRoute(
    "/terms-of-service",
    `Terms of Service | ${siteSettings.businessName}`,
    `Terms of Service for ${siteSettings.businessName}. Please read our terms and conditions carefully.`,
    "static",
    { noindex: true, priority: 0.2 },
  ),
]

const serviceRoutes = services.map((service) =>
  createRoute(
    `/services/${service.slug}`,
    `${service.title} | ${siteSettings.businessName}`,
    service.description,
    "service",
    { priority: 0.8 },
  ),
)

const locationRoutes = locations.map((location) =>
  createRoute(
    `/locations/${location.slug}`,
    `${location.name} Spray Painting Services | ${siteSettings.businessName}`,
    `Professional spray painting services in ${location.name}. ${location.description}`,
    "location",
    { priority: 0.8 },
  ),
)

const serviceLocationRoutes = locations.flatMap((location) =>
  services.map((service) =>
    createRoute(
      `/locations/${location.slug}/${service.slug}`,
      `${service.shortTitle} in ${location.name} | ${siteSettings.businessName}`,
      `Need ${service.shortTitle.toLowerCase()} in ${location.name}? We offer professional, durable ${service.title.toLowerCase()} across the ${location.name} area and ${location.postcodes.join(", ")} postcodes.`,
      "service-location",
      { priority: 0.8 },
    ),
  ),
)

export const seoRoutes = [
  ...staticRoutes,
  ...serviceRoutes,
  ...locationRoutes,
  ...serviceLocationRoutes,
]

export const indexableSeoRoutes = seoRoutes.filter((route) => !route.noindex)

export const getSeoRouteByPath = (path: string) =>
  seoRoutes.find((route) => route.path === normalizePath(path))
