export type Strategy = {
  slug: string;
  name: string;
  category: "PMS" | "AIF";
  pitch: string;
  longPitch: string;
  marketCap: string;
  horizon: string;
  benchmark: string;
  whyPoints: { title: string; body: string }[];
  philosophy: { title: string; body: string }[];
  emergingThemes?: string[];
  terms?: {
    minInvestment: string;
    lockIn: string;
    exitLoad: string;
    feeOptions: { label: string; fixedFee: string; hurdle: string; performanceFee: string }[];
  };
};

export const strategies: Strategy[] = [
  {
    slug: "large-midcap",
    name: "Large Midcap",
    category: "PMS",
    pitch:
      "Invests in fundamentally strong companies across market caps using the 4P framework for long-term wealth generation.",
    longPitch:
      "Aims to invest in fundamentally strong companies based on the 4P framework — Promoter, Product, Profitability, Price — across market caps for long-term wealth generation. It uses a mix of top-down and bottom-up strategy, selecting stocks on fundamentals, valuations and growth, and is largely a buy-and-hold approach targeting growth leaders with long-term EPS growth of around 15 – 20%.",
    marketCap: "Large · Mid · Small",
    horizon: "3 – 5 years",
    benchmark: "Nifty 50 TRI",
    whyPoints: [
      {
        title: "Diversification",
        body:
          "Invest in a well-diversified portfolio across various sectors and reduce concentration risk.",
      },
      {
        title: "Adaptability",
        body:
          "Flexibility to capitalise on opportunities in evolving market landscapes due to a market-agnostic approach.",
      },
      {
        title: "Strong Conviction",
        body:
          "More of a buy-and-hold strategy with minimum churn.",
      },
      {
        title: "Long-Term Growth",
        body:
          "Invest in growth leaders where the long-term expected EPS growth is around 15 – 20%.",
      },
    ],
    philosophy: [
      {
        title: "Promoter",
        body:
          "Healthy track record of leading the business through good and bad times. Good corporate governance with transparency, accountability and integrity. Growth-oriented mindset.",
      },
      {
        title: "Product",
        body:
          "Scale of opportunity should be enormous. Competitive situation should be such that there is adequate profit pool for all industry participants. Sustainable growth expectations for the long term.",
      },
      {
        title: "Profitability",
        body:
          "Fundamentally sound companies with healthy margins, healthy debt/equity profile, robust cash flows and return ratios. High earnings growth. Possibility of improvement of profitability going forward.",
      },
      {
        title: "Price",
        body:
          "We use multiple absolute and relative valuation parameters to assess whether valuation is reasonable. We generally stay away from extremely richly valued stocks where investor frenzy is unusually high.",
      },
    ],
    terms: {
      minInvestment: "₹50 lakhs",
      lockIn: "Nil",
      exitLoad: "Nil",
      feeOptions: [
        { label: "Hybrid Fee", fixedFee: "1.0% p.a.", hurdle: "Above 10%", performanceFee: "15% of profits" },
        { label: "Performance Fee only", fixedFee: "Nil", hurdle: "Above 0%", performanceFee: "15% of profits" },
        { label: "Fixed Fee only", fixedFee: "2.5% p.a.", hurdle: "Nil", performanceFee: "Nil" },
      ],
    },
  },
  {
    slug: "small-midcap",
    name: "Small Midcap",
    category: "PMS",
    pitch:
      "Focused on high-growth-potential companies in the small and mid-cap segments, offering opportunities for significant long-term returns.",
    longPitch:
      "A bottom-up portfolio of structurally growing small and mid-cap businesses, picking up special situations and emerging sectoral themes early to capture outsized returns.",
    marketCap: "Small · Mid",
    horizon: "4 – 6 years",
    benchmark: "Nifty 50 TRI",
    whyPoints: [
      {
        title: "Scope for PE-style investing",
        body:
          "Investing in sunrise sectors such as green energy and recycling. Leveraging China +1 to de-risk supply chains and tap new opportunities. Emphasising infrastructure as a growth driver. Identifying NCLT cases and corporate turnarounds.",
      },
      {
        title: "Emerging Opportunities",
        body:
          "Investing in sunrise sectors like green energy and recycling. Capitalising on China +1, de-risking supply chains. Infrastructure focus, NCLT and turnarounds.",
      },
      {
        title: "Ride the compounding story",
        body:
          "Once correctly identified and comfortable with governance, ride the earnings growth story. High earnings growth attracts institutional investors down the line. The combination of EPS growth and PE re-rating leads to outsized returns.",
      },
    ],
    philosophy: [
      {
        title: "Industry Potential",
        body:
          "Growing companies that are scalable over time. Pricing power and benign competitive landscape. Avoid sectors vulnerable to regulations, high competitive intensity and short growth cycles.",
      },
      {
        title: "Business",
        body:
          "Companies with competitive advantages, delivering high RoCEs. Structural growth stories with high cash flow generation and moderate-to-no debt (unless visible turnaround cases). Avoid companies with poor cash flows.",
      },
      {
        title: "Governance",
        body:
          "Managements with clear strategy and business model on generating shareholder value over the long term. Prudent capital allocation in line with minority shareholder interest.",
      },
      {
        title: "Valuations",
        body:
          "Offering a favourable risk-reward ratio: particularly on a cash-flow valuation basis. Valuation is not the sole investment criterion.",
      },
    ],
    emergingThemes: [
      "Green energy & recycling",
      "China +1 supply-chain shifts",
      "Infrastructure build-out",
      "NCLT & corporate turnarounds",
    ],
    terms: {
      minInvestment: "₹50 lakhs",
      lockIn: "Nil",
      exitLoad: "3% / 2% / 1% in years 1 / 2 / 3 · Nil after 3 years",
      feeOptions: [
        { label: "₹50 L – 1 cr", fixedFee: "2.0% p.a.", hurdle: "Above 10%", performanceFee: "20% of profits" },
        { label: "₹1 cr – 5 cr", fixedFee: "1.5% p.a.", hurdle: "Above 10%", performanceFee: "20% of profits" },
        { label: "Above ₹5 cr", fixedFee: "1.0% p.a.", hurdle: "Above 10%", performanceFee: "20% of profits" },
      ],
    },
  },
  {
    slug: "alpha-fund",
    name: "MoneyGrow Alpha Fund I",
    category: "AIF",
    pitch:
      "A long-only Cat-III AIF generating long-term wealth through dynamic allocation across Indian equities.",
    longPitch:
      "Long-only strategy investing primarily in listed equities and opportunistically in REITs and commodities companies, aiming to outperform the benchmark while managing risk, with no leverage or lock-in.",
    marketCap: "Dynamic — Large · Mid · Small + REITs / Commodities",
    horizon: "5+ years",
    benchmark: "Nifty 50 TRI",
    whyPoints: [
      {
        title: "Dynamic Mix",
        body:
          "Select large caps for stability, mid caps with upside potential, and small caps for high growth and alpha generation.",
      },
      {
        title: "Key Criteria",
        body:
          "Strong corporate governance. Reasonable valuation. High EPS growth.",
      },
      {
        title: "Dynamic Allocation",
        body:
          "Shift allocation based on market conditions. Dynamically allocate across market caps. Opportunistically invest in REITs and commodities companies. Highly diversified portfolio.",
      },
      {
        title: "Alpha Generation",
        body:
          "Bottom-up approach. Identify emerging sub-sectors. Invest in special situations. Capture growth at an early stage for significant upside potential.",
      },
    ],
    philosophy: [
      {
        title: "Investment Objective",
        body:
          "Generate long-term wealth and capital appreciation through a long-only equity strategy with the flexibility to participate in REITs and commodities companies.",
      },
      {
        title: "Risk-managed outperformance",
        body:
          "Aim to outperform the benchmark while managing portfolio-level risk through diversification, position sizing and governance filters.",
      },
      {
        title: "Sub-sector identification",
        body:
          "Bottom-up identification of emerging sub-sectors and special situations to capture early-stage growth.",
      },
      {
        title: "Skin in the game",
        body:
          "The investment team has substantial net worth invested alongside investors, ensuring complete alignment of interest.",
      },
    ],
    terms: {
      minInvestment: "₹1 crore",
      lockIn: "Nil",
      exitLoad: "1% within 1 year · Nil thereafter",
      feeOptions: [
        { label: "Hybrid Fee", fixedFee: "1.0% p.a.", hurdle: "Above 10%", performanceFee: "15% of profits" },
        { label: "Performance Fee only", fixedFee: "Nil", hurdle: "Above 0%", performanceFee: "15% of profits" },
        { label: "Fixed Fee only", fixedFee: "2.5% p.a.", hurdle: "Nil", performanceFee: "Nil" },
      ],
    },
  },
];

export function getStrategy(slug: string) {
  return strategies.find((s) => s.slug === slug);
}
