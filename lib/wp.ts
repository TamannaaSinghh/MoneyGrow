import {
  buildLetters,
  letters as fallbackLetters,
  type Letter,
  type LetterSource,
} from "./newsletters";

/**
 * Base URL of the WordPress install that holds the newsletter Media Library.
 * Override with NEXT_PUBLIC_WP_BASE_URL if the domain ever changes.
 */
const WP_BASE = process.env.NEXT_PUBLIC_WP_BASE_URL ?? "https://moneygrowindia.com";

/** How often (seconds) Next.js re-fetches the Media Library. 1h by default. */
const REVALIDATE_SECONDS = Number(process.env.WP_REVALIDATE_SECONDS ?? 3600);

type WPMedia = {
  id: number;
  date: string;
  title: { rendered: string };
  source_url: string;
  mime_type: string;
};

/**
 * Newsletter PDFs are named "YYYY-MM-DD MoneyGrow Reflections". Pull the date
 * straight from the title so the displayed date matches the letter itself,
 * not the WordPress upload timestamp (which can differ — e.g. back-uploads).
 */
function parseDateFromTitle(title: string): string | null {
  const m = title.match(/(\d{4})-(\d{2})-(\d{2})/);
  return m ? `${m[1]}-${m[2]}-${m[3]}` : null;
}

/** Decode the handful of HTML entities WP may put in a rendered title. */
function decodeEntities(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&#8217;/g, "’")
    .replace(/&#8211;/g, "–")
    .replace(/&#038;/g, "&")
    .trim();
}

/**
 * Fetch every newsletter PDF from the WordPress Media Library via the public
 * REST API and return them as fully-formatted Letter[] (newest-first).
 *
 * - No auth: published media is world-readable.
 * - ISR: results are cached for REVALIDATE_SECONDS, so a PDF uploaded to WP
 *   shows up on the site automatically, with no redeploy.
 * - Resilient: if WP is unreachable or returns nothing usable, falls back to
 *   the static archive baked into lib/newsletters.ts so the page never breaks.
 */
export async function getNewsletters(): Promise<Letter[]> {
  const params = new URLSearchParams({
    mime_type: "application/pdf",
    search: "Reflections",
    per_page: "100", // WP hard-caps per_page at 100; archive is well under that.
    orderby: "date",
    order: "desc",
    _fields: "id,date,title,source_url,mime_type",
  });
  const url = `${WP_BASE}/wp-json/wp/v2/media?${params.toString()}`;

  try {
    const res = await fetch(url, { next: { revalidate: REVALIDATE_SECONDS } });
    if (!res.ok) throw new Error(`WP media fetch failed: ${res.status}`);

    const media = (await res.json()) as WPMedia[];

    const sources: LetterSource[] = media
      .filter(
        (m) =>
          m.mime_type === "application/pdf" &&
          /reflections/i.test(m.title?.rendered ?? "")
      )
      .map((m) => {
        const date = parseDateFromTitle(m.title.rendered) ?? m.date.slice(0, 10);
        return {
          date,
          // Display name kept consistent with the static archive.
          title: "MoneyGrow Reflections",
          href: m.source_url,
        };
      })
      // De-dupe by date in case the Library has a stray duplicate upload.
      .filter(
        (s, i, all) => all.findIndex((o) => o.date === s.date) === i
      );

    if (sources.length === 0) throw new Error("WP returned no newsletter PDFs");

    return buildLetters(sources);
  } catch (err) {
    console.error("[newsletters] falling back to static archive:", err);
    return fallbackLetters;
  }
}
