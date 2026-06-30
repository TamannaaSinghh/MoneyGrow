import { client } from "./client";

export type Disclosure = {
  label: string;
  /** Empty when the document is still "pending" / under preparation. */
  href: string;
  status: "available" | "pending";
};

/** Used when Sanity isn't configured yet, errors, or has no documents. */
export const DEFAULT_DISCLOSURES: Disclosure[] = [
  {
    label: "PMS Disclosure Document",
    status: "available",
    href: "https://moneygrowindia.com/wp-content/uploads/2026/06/Disclosure-Document-Moneygrow.pdf",
  },
  {
    label: "PMS Investor Charter",
    status: "available",
    href: "https://moneygrowindia.com/wp-content/uploads/2024/12/PMS-Investor-Charter.pdf",
  },
  {
    label: "PMS Investor Education (Prevention of Anti-Money Laundering)",
    status: "available",
    href: "https://moneygrowindia.com/wp-content/uploads/2024/12/PMS-Investor-Education-PMLA.pdf",
  },
  {
    label: "PMS Fee Calculation Tool",
    status: "available",
    href: "https://moneygrowindia.com/wp-content/uploads/2026/04/Fee-Illustration-Tool.xlsx",
  },
  {
    label: "PMS Grievance Redressal Policy",
    status: "available",
    href: "https://moneygrowindia.com/wp-content/uploads/2024/12/PMS-Investor-Grievance-Redressal.pdf",
  },
  {
    label: "PMS Investor Complaints Table",
    status: "available",
    href: "https://moneygrowindia.com/wp-content/uploads/2026/06/2026-05-31-PMS-SEBI-Complaints.pdf",
  },
  {
    label: "SEBI Master Circular for Online Resolution of Disputes",
    status: "available",
    href: "https://moneygrowindia.com/wp-content/uploads/2024/12/SEBI-Updated-Master-Circular-on-Online-Dispute-Resolution.pdf",
  },
  { label: "Conflict of Interest Policy", status: "pending", href: "" },
];

const DISCLOSURES_QUERY = `*[_type == "pmsDisclosure"] | order(order asc, title asc){
  "label": title,
  status,
  "fileUrl": file.asset->url,
  externalUrl
}`;

type Row = {
  label: string | null;
  status: "available" | "pending" | null;
  fileUrl: string | null;
  externalUrl: string | null;
};

/**
 * Fetch the PMS regulatory disclosures from Sanity, falling back to the
 * built-in list whenever Sanity is unconfigured, empty, or unreachable.
 */
export async function getPmsDisclosures(): Promise<Disclosure[]> {
  if (!client) return DEFAULT_DISCLOSURES;
  try {
    const rows = await client.fetch<Row[] | null>(
      DISCLOSURES_QUERY,
      {},
      { next: { revalidate: 60 } }
    );
    if (!rows || rows.length === 0) return DEFAULT_DISCLOSURES;

    return rows
      .filter((r): r is Row & { label: string } => Boolean(r.label))
      .map((r) => {
        const status = r.status === "pending" ? "pending" : "available";
        return {
          label: r.label,
          status,
          href: status === "pending" ? "" : r.fileUrl || r.externalUrl || "",
        };
      });
  } catch {
    return DEFAULT_DISCLOSURES;
  }
}
