import { Helmet } from "react-helmet-async"
import { siteSettings } from "@/data/siteSettings"

type SeoProps = {
  title: string
  description: string
  pathname: string
  image?: string
  type?: "website" | "article"
  robots?: string
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
}

const normalizePathname = (pathname: string) => {
  if (!pathname) {
    return "/"
  }
  return pathname.startsWith("/") ? pathname : `/${pathname}`
}

export const SEO = ({
  title,
  description,
  pathname,
  image,
  type = "website",
  robots,
  jsonLd
}: SeoProps) => {
  const normalizedPath = normalizePathname(pathname)
  const canonical = `${siteSettings.baseUrl}${normalizedPath}`
  const ogImage = image || siteSettings.defaultOgImage
  const jsonLdArray = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : []

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {robots ? <meta name="robots" content={robots} /> : null}

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteSettings.businessName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:url" content={canonical} />

      {jsonLdArray.map((schema, index) => (
        <script key={`schema-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}
