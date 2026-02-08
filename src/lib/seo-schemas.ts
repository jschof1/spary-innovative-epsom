import { siteSettings } from "@/data/siteSettings";

export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": siteSettings.businessName,
  "image": siteSettings.defaultOgImage,
  "logo": siteSettings.logoUrl,
  "@id": `${siteSettings.baseUrl}#localbusiness`,
  "url": siteSettings.baseUrl,
  "telephone": siteSettings.phone,
  "email": siteSettings.email,
  "priceRange": "££",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "151 Ewell By-Pass",
    "addressLocality": "Epsom",
    "addressRegion": "Surrey",
    "postalCode": "KT17 2PX",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.3425,
    "longitude": -0.2564
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "08:00",
    "closes": "20:00"
  },
  "sameAs": siteSettings.socialProfiles,
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "50"
  },
  "areaServed": [
    { "@type": "City", "name": "Epsom" },
    { "@type": "City", "name": "Ewell" },
    { "@type": "City", "name": "Banstead" },
    { "@type": "City", "name": "Leatherhead" },
    { "@type": "City", "name": "Sutton" },
    { "@type": "City", "name": "Kingston" }
  ]
});

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteSettings.baseUrl}#organization`,
  "name": siteSettings.businessName,
  "url": siteSettings.baseUrl,
  "logo": siteSettings.logoUrl,
  "sameAs": siteSettings.socialProfiles,
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": siteSettings.phone,
    "contactType": "customer service",
    "areaServed": "GB",
    "availableLanguage": ["English"]
  }
});

export const getWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteSettings.baseUrl}#website`,
  "name": siteSettings.businessName,
  "url": siteSettings.baseUrl,
  "inLanguage": "en-GB",
  "publisher": {
    "@id": `${siteSettings.baseUrl}#organization`
  }
});

export const getServiceSchema = (service: any, locationName?: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": `${service.title}${locationName ? ` in ${locationName}` : ''}`,
  "description": service.description,
  "serviceType": service.shortTitle,
  "url": `${siteSettings.baseUrl}/services/${service.slug}`,
  "provider": {
    "@type": "LocalBusiness",
    "@id": `${siteSettings.baseUrl}#localbusiness`,
    "name": siteSettings.businessName
  },
  "areaServed": locationName ? {
    "@type": "City",
    "name": locationName
  } : undefined,
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Spraying Services",
    "itemListElement": service.features.map((feature: string) => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": feature
      }
    }))
  }
});

export const getFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const getBreadcrumbSchema = (items: { name: string; item: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.item
  }))
});
