export const siteSettings = {
  businessName: "Spray Innovative",
  phone: "+44 7897 024466",
  phoneFormatted: "+44 7897 024466",
  email: "paullear64@icloud.com",
  address: "151 Ewell By-Pass, Epsom, UK, KT17 2PX",
  googleRating: "5.0/5",
  reviewCount: "50+",
  registrationNumber: "7616886213", // Keeping existing reg number as placeholder or if it's the same
  // API endpoints (proxied through Cloudflare Functions for security)
  quoteApiEndpoint: "/api/quote",
  feedbackApiEndpoint: "/api/feedback",
  formApiEndpoint: "/api/form",
  discountApiEndpoint: "/api/discount",
  feedbackGoogleReviewUrl: "https://g.page/r/CcA32bot6SBbEBM/review",
  standardFaqs: [
    {
      category: "Process",
      question: "Do you provide free quotes?",
      answer: "Yes, we provide free, no-obligation quotes for all spray painting projects. We'll visit your property, assess the surfaces, and provide a transparent breakdown of the transformation process and costs."
    },
    {
      category: "Quality",
      question: "Are you experienced and insured?",
      answer: "Yes. Paul Lear has over 10 years of experience in professional spraying. We are fully insured and use premium, eco-friendly water-based coatings for a durable, high-quality finish."
    },
    {
      category: "Availability",
      question: "When are you available?",
      answer: "We are available 7 days a week to suit your schedule, providing professional on-site and off-site spraying services across Epsom, Surrey, and surrounding areas."
    }
  ]
}

