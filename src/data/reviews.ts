export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  text: string;
  service: string;
  initial: string;
  platform: 'Google' | 'Trustpilot' | 'Checkatrade';
}

export const reviewsData: Review[] = [
  {
    id: "1",
    author: "James Miller",
    location: "Epsom",
    rating: 5,
    date: "2026-01-15",
    text: "Absolutely thrilled with our kitchen respray! Paul was professional, tidy, and the finish is factory-standard. It looks like a brand new kitchen for a fraction of the cost. Highly recommend Spray Innovative.",
    service: "Kitchen Respray",
    initial: "J",
    platform: "Google"
  },
  {
    id: "2",
    author: "Sarah Collins",
    location: "Ewell",
    rating: 5,
    date: "2025-12-20",
    text: "Had our white UPVC windows sprayed to Anthracite Grey. The transformation is incredible! It's completely modernized the look of our house. Paul's attention to detail during the masking process was impressive.",
    service: "Window Spraying",
    initial: "S",
    platform: "Trustpilot"
  },
  {
    id: "3",
    author: "David Harrison",
    location: "Banstead",
    rating: 5,
    date: "2025-11-28",
    text: "Professional service from start to finish. Paul sprayed our garage door and front door to match. The finish is smooth and durable. Great communication and a fair price.",
    service: "Door Spraying",
    initial: "D",
    platform: "Google"
  },
  {
    id: "4",
    author: "Emma Thompson",
    location: "Stoneleigh",
    rating: 5,
    date: "2025-11-05",
    text: "We had our conservatory sprayed and it looks fantastic. It's gone from a dated-looking structure to a modern extension of our home. Very happy with the result and the minimal disruption.",
    service: "Conservatory Spraying",
    initial: "E",
    platform: "Checkatrade"
  },
  {
    id: "5",
    author: "Michael Reed",
    location: "Leatherhead",
    rating: 5,
    date: "2025-10-12",
    text: "Excellent work on our commercial shopfront. Paul worked around our business hours to ensure no downtime. The new finish looks professional and has really improved our curb appeal.",
    service: "Commercial Spraying",
    initial: "M",
    platform: "Google"
  },
  {
    id: "6",
    author: "Lucy Baker",
    location: "Chessington",
    rating: 5,
    date: "2025-09-25",
    text: "Paul resprayed our kitchen cabinets and we couldn't be happier. The color match was perfect and the finish is so easy to clean. It's saved us thousands compared to a new kitchen.",
    service: "Kitchen Respray",
    initial: "L",
    platform: "Google"
  },
  {
    id: "7",
    author: "Robert Wilson",
    location: "Ashtead",
    rating: 5,
    date: "2025-08-30",
    text: "Highly recommend Spray Innovative for UPVC spraying. They were punctual, professional, and the quality of the finish is outstanding. Our windows look brand new.",
    service: "UPVC Spraying",
    initial: "R",
    platform: "Trustpilot"
  },
  {
    id: "8",
    author: "Jane Foster",
    location: "Epsom",
    rating: 5,
    date: "2025-08-15",
    text: "Fantastic service! Paul sprayed our fascias and soffits to match our new windows. The attention to detail was great and the house looks much more cohesive now.",
    service: "Fascias & Soffits",
    initial: "J",
    platform: "Google"
  }
];

export const reviewsStats = {
  averageRating: 5.0,
  totalReviews: 62,
  breakdown: {
    5: 60,
    4: 2,
    3: 0,
    2: 0,
    1: 0
  },
  platforms: [
    { name: 'Google', rating: 5.0, count: 45 },
    { name: 'Trustpilot', rating: 4.9, count: 17 }
  ]
};
