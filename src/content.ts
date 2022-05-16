interface Link {
  href: string;
  text: string;
}

export const links: Link[] = [
  {
    href: "https://samking.blog",
    text: "writing",
  },
  {
    href: "https://samking.photo",
    text: "photography",
  },
  {
    href: "https://ai.samking.co",
    text: "artificial creation",
  },
  {
    href: "https://twitter.com/samkingco",
    text: "twitter",
  },
  {
    href: "https://github.com/samkingco",
    text: "github",
  },
];

interface Job {
  start: string;
  end?: string;
  role: string;
  company?: string;
  companyHref?: string;
}

export const jobs: Job[] = [
  {
    start: "08",
    end: "12",
    role: "Freelance Photography & Design",
  },
  {
    start: "11",
    end: "12",
    role: "Design & Engineering",
    company: "Solutions",
  },
  {
    start: "12",
    end: "14",
    role: "Product Design",
    company: "RetailMeNot",
  },
  {
    start: "14",
    end: "16",
    role: "Product Design",
    company: "Lyst",
    companyHref: "https://lyst.com",
  },
  {
    start: "16",
    end: "17",
    role: "Product Design",
    company: "MutualArt",
  },
  {
    start: "17",
    end: "19",
    role: "Product Design",
    company: "Deliveroo",
    companyHref: "https://deliveroo.co.uk",
  },
  {
    start: "19",
    end: "21",
    role: "Product Design",
    company: "LloydsDirect",
    companyHref: "https://lloydsdirect.co.uk",
  },
  {
    start: "21",
    end: "22",
    role: "Product Design",
    company: "Plain",
    companyHref: "/p/plain",
  },
  {
    start: "22",
    role: "Freelance",
    company: "Sam King Studio",
    companyHref: "https://samking.studio",
  },
].reverse();
