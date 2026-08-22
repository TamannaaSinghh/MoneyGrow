export type Letter = {
  serial: number;
  date: string;
  title: string;
  href: string;
  year: number;
  /** Short month label, e.g. "May". */
  monthLong: string;
  /** Abbreviated month, e.g. "MAY". */
  monthShort: string;
  /** Human-readable date, e.g. "07 May 2026". */
  dateLabel: string;
  /** One- to two-line summary shown beside the cover. */
  blurb: string;
  /** Optional cover image (drop a file in /public and set its path here). */
  image?: string;
};

/** Minimal shape needed to build a Letter — `href` is the link to the PDF. */
export type LetterSource = {
  date: string;
  title: string;
  href: string;
  /** Optional summary override; the standard monthly wording is used if unset. */
  blurb?: string;
  /** Optional cover image URL; the month/year tile is used if unset. */
  image?: string;
};

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

// Honest, claim-free summaries for the monthly note, rotated so the archive
// doesn't read robotically. {M} and {Y} are filled in per letter.
const BLURB_TEMPLATES = [
  "Our monthly note for {M} {Y} — reflections on what we're seeing across portfolios, sectors and the broader market.",
  "What caught our eye in {M} {Y}: the themes shaping our fundamentals-first, long-term approach to Indian equities.",
  "Notes from {M} {Y} on the businesses we own, where we're staying patient, and the opportunities we're watching.",
  "{M} {Y} reflections — how we're reading markets and positioning portfolios for the long compounder.",
];

/**
 * Turn raw {date, title, href} records into fully-formatted Letter[] sorted
 * newest-first. Shared by the static fallback below and the live Sanity fetch
 * (see sanity/lib/newsletters.ts), so the two paths always render identically.
 */
export function buildLetters(raw: LetterSource[]): Letter[] {
  return [...raw]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map((l, i) => {
      const [y, m, d] = l.date.split("-").map(Number);
      const monthLong = MONTHS[m - 1];
      const serial = i + 1;
      return {
        serial,
        date: l.date,
        title: l.title,
        href: l.href,
        year: y,
        monthLong,
        monthShort: monthLong.slice(0, 3).toUpperCase(),
        dateLabel: `${String(d).padStart(2, "0")} ${monthLong.slice(0, 3)} ${y}`,
        blurb:
          l.blurb ||
          BLURB_TEMPLATES[serial % BLURB_TEMPLATES.length]
            .replace("{M}", monthLong)
            .replace("{Y}", String(y)),
        image: l.image,
      };
    });
}

/** Group letters by year and return the years in descending order. */
export function groupByYear(letters: Letter[]) {
  const lettersByYear = letters.reduce<Record<number, Letter[]>>((acc, l) => {
    (acc[l.year] ||= []).push(l);
    return acc;
  }, {});
  const years = Object.keys(lettersByYear)
    .map(Number)
    .sort((a, b) => b - a);
  return { lettersByYear, years };
}

// ---------------------------------------------------------------------------
// Fallback archive — rendered only when the live Sanity fetch returns nothing
// (Sanity unconfigured, offline build, empty dataset).
//
// Deliberately empty. The archive used to live on WordPress, but
// moneygrowindia.com now serves this site and every legacy
// /wp-content/uploads/*.pdf URL returns 403, so listing those letters here
// only produced dead links. Newsletters are managed in the Sanity Studio
// ("Newsletters"); see sanity/lib/newsletters.ts. Add letters there and they
// appear on the site automatically.
// ---------------------------------------------------------------------------
const FALLBACK_RAW: LetterSource[] = [];

/** Static fallback letters (newest-first), built the same way as live data. */
export const letters: Letter[] = buildLetters(FALLBACK_RAW);

const grouped = groupByYear(letters);
export const lettersByYear = grouped.lettersByYear;
export const years = grouped.years;
