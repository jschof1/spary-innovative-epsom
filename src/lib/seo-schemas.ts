import { siteSettings } from "@/data/siteSettings";

export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": siteSettings.businessName,
  "image": "https://sprayinnovative.co.uk/favicon/apple-touch-icon.png",
  "@id": "https://sprayinnovative.co.uk",
  "url": "https://sprayinnovative.co.uk",
  "telephone": siteSettings.phone,
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
  "sameAs": [
    "https://facebook.com/sprayinnovative",
    "https://instagram.com/sprayinnovative"
  ],
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

export const getServiceSchema = (service: any, locationName?: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": `${service.title}${locationName ? ` in ${locationName}` : ''}`,
  "description": service.description,
  "provider": {
    "@type": "LocalBusiness",
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
