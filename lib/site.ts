export const site = {
  name: "MoneyGrow Asset Private Limited",
  shortName: "MoneyGrow",
  tagline: "Make investment easy",
  positioning:
    "A SEBI-licensed Portfolio Management Service and Cat-III AIF investing in fundamentally sound, cash-flow-generating Indian businesses for the long term.",
  aum: {
    value: "₹497 cr",
    asOn: "31-October-2025",
    label: "Total AUM",
  },
  contact: {
    address:
      "804, Lodha Supremus, 2 Senapati Bapat Marg, Lower Parel (West), Mumbai – 400013, Maharashtra, India.",
    phone: "+91 98202 60200",
    phoneHref: "tel:+919820260200",
    email: "sales@moneygrowindia.com",
    emailHref: "mailto:sales@moneygrowindia.com",
  },
  legal: {
    cin: "U67190MH2022PTC374968",
    gstin: "27AAPCM3656A1ZF",
  },
  documents: {
    disclosure: "https://moneygrowindia.com/disclosure-document-moneygrow.pdf",
    marketingPresentation: "https://moneygrowindia.com/marketing-presentation/",
  },
  logins: {
    pms: "https://faconnect.kotak.com/wealthspectrum/portal/sign-in",
    aif: "/login",
  },
} as const;

type NavChild = { label: string; href: string; external?: boolean };
type NavItem = { label: string; href: string; children?: NavChild[] };

export const nav: NavItem[] = [
  {
    label: "Investment Offerings",
    href: "/investment-offerings",
    children: [
      { label: "PMS", href: "/investment-offerings/pms" },
      { label: "AIF", href: "/investment-offerings/aif" },
      {
        label: "Marketing Presentation",
        href: "https://moneygrowindia.com/marketing-presentation/",
        external: true,
      },
    ],
  },
  { label: "Newsletters", href: "/newsletters" },
  {
    label: "Regulatory Disclosures",
    href: "/disclosures",
    children: [
      { label: "PMS Regulatory Disclosures", href: "/disclosures/pms" },
      { label: "AIF Regulatory Disclosures", href: "/disclosures/aif" },
    ],
  },
  {
    label: "Client Login",
    href: "/login",
    children: [
      {
        label: "PMS Login",
        href: "https://faconnect.kotak.com/wealthspectrum/portal/sign-in",
        external: true,
      },
      { label: "AIF Login", href: "/login/aif" },
    ],
  },
];
