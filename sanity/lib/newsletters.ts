import { client } from "./client";
import {
  buildLetters,
  letters as fallbackLetters,
  type Letter,
  type LetterSource,
} from "@/lib/newsletters";

/** How often (seconds) the archive is re-fetched from Sanity. */
const REVALIDATE_SECONDS = 60;

const NEWSLETTERS_QUERY = `*[_type == "newsletter" && defined(date)] | order(date desc){
  date,
  title,
  blurb,
  "fileUrl": file.asset->url,
  externalUrl,
  "imageUrl": coverImage.asset->url
}`;

type Row = {
  date: string | null;
  title: string | null;
  blurb: string | null;
  fileUrl: string | null;
  externalUrl: string | null;
  imageUrl: string | null;
};

/**
 * Fetch the newsletter archive from Sanity and return fully-formatted
 * Letter[] (newest-first), built by the same helper as the static archive so
 * both paths render identically.
 *
 * Uploading a PDF in the Studio publishes it to the site on the next
 * revalidation — no redeploy needed. Falls back to the static archive baked
 * into lib/newsletters.ts whenever Sanity is unconfigured, empty, or
 * unreachable, so the page never breaks.
 */
export async function getNewsletters(): Promise<Letter[]> {
  if (!client) return fallbackLetters;
  try {
    const rows = await client.fetch<Row[] | null>(
      NEWSLETTERS_QUERY,
      {},
      { next: { revalidate: REVALIDATE_SECONDS } }
    );
    if (!rows || rows.length === 0) return fallbackLetters;

    const sources: LetterSource[] = rows
      .map((r): LetterSource | null => {
        const href = r.fileUrl || r.externalUrl;
        if (!r.date || !href) return null;
        return {
          date: r.date.slice(0, 10),
          title: r.title || "MoneyGrow Reflections",
          href,
          blurb: r.blurb || undefined,
          image: r.imageUrl || undefined,
        };
      })
      .filter((s): s is LetterSource => s !== null)
      // De-dupe by date in case a month was entered twice.
      .filter((s, i, all) => all.findIndex((o) => o.date === s.date) === i);

    if (sources.length === 0) return fallbackLetters;

    return buildLetters(sources);
  } catch (err) {
    console.error("[newsletters] falling back to static archive:", err);
    return fallbackLetters;
  }
}
