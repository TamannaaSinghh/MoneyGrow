import { client } from "./client";
import { site } from "@/lib/site";

/** Static PDF shipped in /public — used when Sanity has no document. */
export const DEFAULT_MARKETING_PRESENTATION =
  site.documents.marketingPresentation;

const QUERY = `*[_type == "marketingPresentation"][0]{
  "fileUrl": file.asset->url,
  externalUrl
}`;

type Row = { fileUrl: string | null; externalUrl: string | null };

/**
 * Resolve the marketing presentation URL from Sanity, falling back to the
 * built-in static PDF whenever Sanity is unconfigured, empty, or unreachable.
 * An uploaded file takes priority over an external URL.
 */
export async function getMarketingPresentation(): Promise<string> {
  if (!client) return DEFAULT_MARKETING_PRESENTATION;
  try {
    const row = await client.fetch<Row | null>(
      QUERY,
      {},
      { next: { revalidate: 60 } }
    );
    return row?.fileUrl || row?.externalUrl || DEFAULT_MARKETING_PRESENTATION;
  } catch {
    return DEFAULT_MARKETING_PRESENTATION;
  }
}
