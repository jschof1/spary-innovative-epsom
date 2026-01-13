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
    author: "James Wilson",
    location: "Greenwich",
    rating: 5,
    date: "2025-12-15",
    text: "Outstanding service! Called for an emergency leak on a Sunday morning and they were here within 45 minutes. Fixed the issue quickly and for a very reasonable price. Highly recommend for any South London residents.",
    service: "Emergency Plumbing",
    initial: "J",
    platform: "Google"
  },
  {
    id: "2",
    author: "Sarah Thompson",
    location: "Bromley",
    rating: 5,
    date: "2025-11-28",
    text: "Had a new Worcester Bosch boiler installed. The team was incredibly professional, clean, and efficient. They explained everything clearly and the quote was the best we received. Great local company.",
    service: "Boiler Installation",
    initial: "S",
    platform: "Trustpilot"
  },
  {
    id: "3",
    author: "Michael Chen",
    location: "Croydon",
    rating: 5,
    date: "2025-11-05",
    text: "Fixed a long-standing issue with our central heating that other plumbers couldn't figure out. Very knowledgeable and polite engineers. Will definitely use them again for any future work.",
    service: "Heating Repair",
    initial: "M",
    platform: "Google"
  },
  {
    id: "4",
    author: "Emma Richards",
    location: "Brixton",
    rating: 4,
    date: "2025-10-22",
    text: "Great experience with a bathroom tap replacement. Arrived on time and did a neat job. Only reason for 4 stars instead of 5 was a small delay in getting the initial quote, but the work itself was flawless.",
    service: "General Plumbing",
    initial: "E",
    platform: "Checkatrade"
  },
  {
    id: "5",
    author: "David Miller",
    location: "Lewisham",
    rating: 5,
    date: "2025-09-15",
    text: "Very impressed with the drain unblocking service. They used high-tech equipment to find the blockage and cleared it in no time. Honest pricing with no hidden 'extra' charges which I really appreciate.",
    service: "Drainage",
    initial: "D",
    platform: "Google"
  },
  {
    id: "6",
    author: "Sophie Clarke",
    location: "Clapham",
    rating: 5,
    date: "2025-12-01",
    text: "Prompt and professional. Our radiator had a leak and they came out the same day to fix it. Very polite engineer who took care not to make a mess. Five star service all round.",
    service: "Heating Repair",
    initial: "S",
    platform: "Google"
  },
  {
    id: "7",
    author: "Robert Taylor",
    location: "Wandsworth",
    rating: 5,
    date: "2025-11-12",
    text: "Fantastic boiler service. They were thorough, checked everything, and gave me some great advice on keeping my system efficient. Good value for money compared to the big national companies.",
    service: "Boiler Service",
    initial: "R",
    platform: "Trustpilot"
  },
  {
    id: "8",
    author: "Linda G.",
    location: "Dulwich",
    rating: 5,
    date: "2025-10-30",
    text: "Helpful, friendly, and efficient. They fixed our leaking toilet and changed some old piping. Transparent pricing and very high quality of work. Highly recommended local plumbers.",
    service: "General Plumbing",
    initial: "L",
    platform: "Google"
  }
];

export const reviewsStats = {
  averageRating: 4.9,
  totalReviews: 254,
  breakdown: {
    5: 238,
    4: 12,
    3: 3,
    2: 1,
    1: 0
  },
  platforms: [
    { name: 'Google', rating: 4.9, count: 185 },
    { name: 'Trustpilot', rating: 4.8, count: 45 },
    { name: 'Checkatrade', rating: 5.0, count: 24 }
  ]
};

