import { client } from "./client";

export type Disclosure = {
  label: string;
  /** Empty when the document is still "pending" / under preparation. */
  href: string;
  status: "available" | "pending";
};

/** Used when Sanity isn't configured yet, errors, or has no documents. */
export const DEFAULT_DISCLOSURES: Disclosure[] = [
  { label: "AIF Private Placement Memorandum", status: "pending", href: "" },
  { label: "Investor Charter — AIF", status: "pending", href: "" },
  { label: "Statement of Complaints — AIF", status: "pending", href: "" },
  { label: "Grievance Redressal Policy — AIF", status: "pending", href: "" },
  { label: "Annual Compliance Report — AIF", status: "pending", href: "" },
  { label: "Risk Management Policy", status: "pending", href: "" },
];

const DISCLOSURES_QUERY = `*[_type == "aifDisclosure"] | order(order asc, title asc){
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
 * Fetch the AIF regulatory disclosures from Sanity, falling back to the
 * built-in list whenever Sanity is unconfigured, empty, or unreachable.
 */
export async function getAifDisclosures(): Promise<Disclosure[]> {
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
