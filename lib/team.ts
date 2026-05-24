export type Member = {
  slug: string;
  name: string;
  role: string;
  initials: string;
  photo?: string;
  linkedin: string;
  bio: string[];
  highlights: string[];
};

export const team: Member[] = [
  {
    slug: "manish-gupta",
    name: "Manish Gupta",
    role: "Managing Director",
    initials: "MG",
    photo: "/Manish-1.jpg",
    linkedin: "https://www.linkedin.com/in/manish-gupta-85196b/",
    bio: [
      "Manish has over 23 years of experience in Indian equity markets.",
      "He was part of the senior leadership team at CLSA's Institutional Equities business in Mumbai and New York. During his 17 years at CLSA, he advised leading FIIs, insurance companies, mutual funds, private equity funds and sovereign wealth funds on their Indian equity investments. He was involved in numerous IPOs, QIPs, equity placements and block trades during his tenure.",
      "He holds an MBA from IIM Ahmedabad (2001), a 5-year Integrated M.Tech. from IIT Delhi (1999), and is a CFA charter holder from the CFA Institute, USA (2004).",
    ],
    highlights: [
      "23+ years in Indian equities",
      "17 years at CLSA (Mumbai & New York)",
      "MBA, IIM Ahmedabad · M.Tech, IIT Delhi · CFA",
    ],
  },
  {
    slug: "viraj-mahadevia",
    name: "Viraj Mahadevia",
    role: "Portfolio Manager & Partner",
    initials: "VM",
    photo: "/Viraj.png",
    linkedin: "https://www.linkedin.com/in/viraj-mahadevia-5a49176b",
    bio: [
      "Viraj has over 20 years of experience in finance, with 10 years in Private Equity in India as part of Actis (AUM of over USD 7.5 billion across various funds), one of the largest emerging market PE funds.",
      "He has over 5 years of experience in previous assignments, including M&A and capital raising in Healthcare and Consumer sectors at Goldman Sachs and Citigroup based out of their London offices.",
      "He holds an MBA in Finance and Leadership Change Management from the Indian School of Business, Hyderabad (2004) and a BSc in Electrical Engineering from the University of Michigan, Ann Arbor (2000).",
    ],
    highlights: [
      "20+ years in finance",
      "10 years at Actis (USD 7.5 bn EM PE)",
      "MBA, ISB Hyderabad · BSc, Michigan Ann Arbor",
    ],
  },
  {
    slug: "gaurav-golechha",
    name: "Gaurav Golechha",
    role: "Director – Business Development",
    initials: "GG",
    photo: "/Gaurav.png",
    linkedin: "https://www.linkedin.com/",
    bio: [
      "Gaurav is a finance professional with 15+ years of experience, including roles at PwC and as visiting faculty for finance at various business schools.",
      "He leads Business Development, with a focus on investor outreach and capital-raising initiatives. He works closely with institutional investors, family offices, HNIs and distribution partners, driving strategic relationships and expanding the firm's network and assets under management.",
      "Gaurav is a Chartered Accountant from the Institute of Chartered Accountants of India, and holds a B.Com. from Narsee Monjee College of Commerce & Economics.",
    ],
    highlights: [
      "15+ years in finance",
      "Ex-PwC · Visiting faculty",
      "CA, ICAI · B.Com, NM College",
    ],
  },
  {
    slug: "sandeep-mathivanan",
    name: "Sandeep Mathivanan",
    role: "Equity Research Analyst",
    initials: "SM",
    photo: "/Sandeep.png",
    linkedin: "https://www.linkedin.com/",
    bio: [
      "Sandeep is an engineer with a Bachelor's degree in Electronics and Telecommunication Engineering and a Master's in Management Studies specialising in Finance.",
      "He had interned at UTI PMS as an analyst and worked at ICICI Bank for over a year in the trade finance department.",
      "He is currently pursuing the CFA designation and has cleared Level 2.",
      "He is responsible for ideation and supporting portfolio managers in their daily tasks.",
    ],
    highlights: [
      "B.E. Electronics & Telecommunication",
      "M.M.S. (Finance)",
      "CFA Level 2 cleared",
    ],
  },
];
