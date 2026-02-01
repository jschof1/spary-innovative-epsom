import { siteSettings } from "@/data/siteSettings";

export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Electrician",
  "name": siteSettings.businessName,
  "image": "https://dhelectricalservice.co.uk/favicon/apple-touch-icon.png",
  "@id": "https://dhelectricalservice.co.uk",
  "url": "https://dhelectricalservice.co.uk",
  "telephone": siteSettings.phone,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Avonlea, Marton Road, Birdingbury",
    "addressLocality": "Rugby",
    "postalCode": "CV23 8EH",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 52.3244,
    "longitude": -1.3654
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
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    // Add social links here if available
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "50"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Rugby"
    },
    {
      "@type": "City",
      "name": "Southam"
    },
    {
      "@type": "City",
      "name": "Coventry"
    },
    {
      "@type": "City",
      "name": "Leamington Spa"
    },
    {
      "@type": "City",
      "name": "Warwick"
    }
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
    "name": "Electrical Services",
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
