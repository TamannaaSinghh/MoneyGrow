export const site = {
  name: "MoneyGrow Asset Private Limited",
  shortName: "MoneyGrow",
  tagline: "Make investment easy",
  positioning:
    "A SEBI-licensed Portfolio Management Service and Cat-III AIF investing in fundamentally sound, cash-flow-generating Indian businesses for the long term.",
  contact: {
    address:
      "804, Lodha Supremus, 2 Senapati Bapat Marg, Lower Parel (West), Mumbai – 400013, Maharashtra, India.",
    phone: "+91 98202 60200",
    phoneHref: "tel:+919820260200",
    whatsappHref: "https://wa.me/919820260200",
    email: "sales@moneygrowindia.com",
    emailHref: "mailto:sales@moneygrowindia.com",
  },
  legal: {
    cin: "U67190MH2022PTC374968",
    gstin: "27AAPCM3656A1ZF",
    sebiPms: "INP000007915",
    sebiAif: "IN/AIF3/24-25/1677",
  },
  // Fixed legal/structural facts for MoneyGrow Alpha Fund I (from the AIF/PMS deck)
  aifStructure: [
    { label: "Scheme", value: "MoneyGrow Alpha Fund I" },
    { label: "Type", value: "Open-ended" },
    { label: "Trust", value: "MoneyGrow AIF Trust" },
    { label: "SEBI Reg. No.", value: "IN/AIF3/24-25/1677" },
    { label: "Trustee", value: "Vistra ITCL (India) Limited" },
    { label: "Investment Manager", value: "MoneyGrow Asset Private Limited" },
    { label: "Sponsors", value: "MoneyGrow Asset Pvt. Ltd., Manish Gupta, Pooja Gupta, Viraj Mahadevia, Vidisha Mahadevia" },
    { label: "Sponsors' commitment", value: "5% of fund size or ₹10 cr (whichever is lower)" },
    { label: "Legal advisor", value: "SSB Legal" },
    { label: "Tax advisor & auditor", value: "Aneel Lasod & Associates" },
    { label: "Registrar & Transfer Agent", value: "Kfin Technologies Limited" },
    { label: "Merchant banker", value: "Kunvarji Finstock Private Limited" },
    { label: "Digital onboarding", value: "Kfin Technologies Limited" },
  ],
  documents: {
    disclosure: "https://moneygrowindia.com/disclosure-document-moneygrow.pdf",
    marketingPresentation: "/MoneyGrow_PMS_AIF.pdf",
    // 👇 ADD THE EXCEL SHEET HERE: drop the file in /public (e.g. public/website-stats.xlsx)
    //    and keep the path below, OR paste a full URL to the hosted file.
    statsSheet: "/website-stats.xlsx",
  },
  logins: {
    pms: "https://faconnect.kotak.com/wealthspectrum/portal/sign-in",
    aif: "/login",
  },
} as const;

type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "PMS", href: "/investment-offerings/pms" },
  { label: "AIF", href: "/investment-offerings/aif" },
  { label: "Newsletters", href: "/newsletters" },
];

