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
    author: "Mark Stevens",
    location: "Rugby",
    rating: 5,
    date: "2025-12-15",
    text: "Outstanding service! Daniel arrived promptly for an emergency electrical fault on a Sunday. Fixed the issue quickly and was very professional. Highly recommend for anyone in the Rugby area.",
    service: "Emergency Repair",
    initial: "M",
    platform: "Google"
  },
  {
    id: "2",
    author: "Sarah Jenkins",
    location: "Southam",
    rating: 5,
    date: "2025-11-28",
    text: "Had a new EV charger installed. Daniel was incredibly knowledgeable, explained the process clearly, and did a very neat job. The price was competitive and the service was top-notch.",
    service: "EV Charger Install",
    initial: "S",
    platform: "Trustpilot"
  },
  {
    id: "3",
    author: "David Thompson",
    location: "Leamington Spa",
    rating: 5,
    date: "2025-11-05",
    text: "Upgraded our old consumer unit. Very professional work, all tested and certified. I feel much safer now with the new RCD protection. Excellent local electrician.",
    service: "Fuse Box Upgrade",
    initial: "D",
    platform: "Google"
  },
  {
    id: "4",
    author: "Emma Collins",
    location: "Warwick",
    rating: 4,
    date: "2025-10-22",
    text: "Great experience with some outdoor lighting installation. Daniel offered some good suggestions and the result looks fantastic. Very reliable and tidy worker.",
    service: "Outside Lighting",
    initial: "E",
    platform: "Checkatrade"
  },
  {
    id: "5",
    author: "Michael Brown",
    location: "Coventry",
    rating: 5,
    date: "2025-09-15",
    text: "Fixed a recurring circuit tripping issue that another electrician couldn't find. Daniel was thorough and methodical. Highly impressed with his technical expertise.",
    service: "Fault Finding",
    initial: "M",
    platform: "Google"
  },
  {
    id: "6",
    author: "Lucy Wilson",
    location: "Rugby",
    rating: 5,
    date: "2025-12-01",
    text: "Prompt and professional. Needed some extra sockets and a new light fitting. Daniel was efficient and the work was completed to a high standard. Will definitely use again.",
    service: "General Electrical",
    initial: "L",
    platform: "Google"
  },
  {
    id: "7",
    author: "Robert Harris",
    location: "Southam",
    rating: 5,
    date: "2025-11-12",
    text: "Complete rewire of our kitchen renovation. Daniel worked well with our other trades and ensured everything was safe and compliant. Very happy with the result.",
    service: "Kitchen Rewire",
    initial: "R",
    platform: "Trustpilot"
  },
  {
    id: "8",
    author: "Jane Taylor",
    location: "Leamington Spa",
    rating: 5,
    date: "2025-10-30",
    text: "Helpful, friendly, and efficient. Fixed our immersion heater issue quickly. Transparent pricing and very reliable. Highly recommended local specialist.",
    service: "Electrical Repair",
    initial: "J",
    platform: "Google"
  }
];

export const reviewsStats = {
  averageRating: 5.0,
  totalReviews: 54,
  breakdown: {
    5: 52,
    4: 2,
    3: 0,
    2: 0,
    1: 0
  },
  platforms: [
    { name: 'Google', rating: 5.0, count: 38 },
    { name: 'Trustpilot', rating: 4.9, count: 12 },
    { name: 'Checkatrade', rating: 5.0, count: 4 }
  ]
};
