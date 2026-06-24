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
export type LetterSource = { date: string; title: string; href: string };

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
 * newest-first. Shared by the static fallback below and the live WP fetch
 * (see lib/wp.ts), so the two paths always render identically.
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
        blurb: BLURB_TEMPLATES[serial % BLURB_TEMPLATES.length]
          .replace("{M}", monthLong)
          .replace("{Y}", String(y)),
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
// Static fallback — used only if the live WordPress fetch fails (offline build,
// WP down, etc.). Mirrors the Media Library as of the last manual sync; the
// real source of truth is the WP REST API in lib/wp.ts.
// ---------------------------------------------------------------------------
const FALLBACK_RAW: LetterSource[] = [
  { date: "2026-06-03", title: "MoneyGrow Reflections", href: "https://moneygrowindia.com/wp-content/uploads/2026/06/2026-06-03-MoneyGrow-Reflections.pdf" },
  { date: "2026-05-07", title: "MoneyGrow Reflections", href: "https://moneygrowindia.com/wp-content/uploads/2026/05/2026-05-07-MoneyGrow-Reflections.pdf" },
  { date: "2026-04-02", title: "MoneyGrow Reflections", href: "https://moneygrowindia.com/wp-content/uploads/2026/04/2026-04-02-MoneyGrow-Reflections.pdf" },
  { date: "2026-03-04", title: "MoneyGrow Reflections", href: "https://moneygrowindia.com/wp-content/uploads/2026/03/2026-03-04-MoneyGrow-Reflections.pdf" },
  { date: "2026-02-06", title: "MoneyGrow Reflections", href: "https://moneygrowindia.com/wp-content/uploads/2026/02/2026-02-06-MoneyGrow-Reflections.pdf" },
  { date: "2026-01-07", title: "MoneyGrow Reflections", href: "https://moneygrowindia.com/wp-content/uploads/2026/01/2026-01-07-MoneyGrow-Reflections.pdf" },
  { date: "2025-12-03", title: "MoneyGrow Reflections", href: "https://moneygrowindia.com/wp-content/uploads/2025/12/2025-12-03-MoneyGrow-Reflections.pdf" },
  { date: "2025-11-05", title: "MoneyGrow Reflections", href: "https://moneygrowindia.com/wp-content/uploads/2025/11/2025-11-05-MoneyGrow-Reflections.pdf" },
  { date: "2025-10-07", title: "MoneyGrow Reflections", href: "https://moneygrowindia.com/wp-content/uploads/2025/10/2025-10-07-MoneyGrow-Reflections.pdf" },
  { date: "2025-09-04", title: "MoneyGrow Reflections", href: "https://moneygrowindia.com/wp-content/uploads/2025/09/2025-09-04-MoneyGrow-Reflections.pdf" },
  { date: "2025-08-02", title: "MoneyGrow Reflections", href: "https://moneygrowindia.com/wp-content/uploads/2025/08/2025-08-02-MoneyGrow-Reflections.pdf" },
  { date: "2025-07-02", title: "MoneyGrow Reflections", href: "https://moneygrowindia.com/wp-content/uploads/2025/07/2025-07-02-MoneyGrow-Reflections.pdf" },
  { date: "2025-06-04", title: "MoneyGrow Reflections", href: "https://moneygrowindia.com/wp-content/uploads/2025/06/2025-06-04-MoneyGrow-Reflections.pdf" },
  { date: "2025-05-06", title: "MoneyGrow Reflections", href: "https://moneygrowindia.com/wp-content/uploads/2025/05/2025-05-06-MoneyGrow-Reflections.pdf" },
  { date: "2025-04-07", title: "MoneyGrow Reflections", href: "https://moneygrowindia.com/wp-content/uploads/2025/04/2025-04-07-MoneyGrow-Reflections-1.pdf" },
  { date: "2025-03-07", title: "MoneyGrow Reflections", href: "https://moneygrowindia.com/wp-content/uploads/2025/03/2025-03-07-MoneyGrow-Reflections.pdf" },
  { date: "2025-01-01", title: "MoneyGrow Reflections", href: "https://moneygrowindia.com/wp-content/uploads/2025/01/2025-01-01-MoneyGrow-Reflections.pdf" },
  { date: "2024-12-04", title: "MoneyGrow Reflections", href: "https://moneygrowindia.com/wp-content/uploads/2024/12/2024-12-04-MoneyGrow-Reflections.pdf" },
  { date: "2024-11-07", title: "MoneyGrow Reflections", href: "https://moneygrowindia.com/wp-content/uploads/2024/12/2024-11-07-MoneyGrow-Reflections.pdf" },
  { date: "2024-10-03", title: "MoneyGrow Reflections", href: "https://moneygrowindia.com/wp-content/uploads/2024/12/2024-10-03-MoneyGrow-Reflections.pdf" },
  { date: "2024-09-01", title: "MoneyGrow Reflections", href: "https://moneygrowindia.com/wp-content/uploads/2024/12/2024-09-01-MoneyGrow-Reflections.pdf" },
  { date: "2024-08-01", title: "MoneyGrow Reflections", href: "https://moneygrowindia.com/wp-content/uploads/2024/12/2024-08-01-MoneyGrow-Reflections.pdf" },
  { date: "2024-07-01", title: "MoneyGrow Reflections", href: "https://moneygrowindia.com/wp-content/uploads/2024/12/2024-07-01-MoneyGrow-Reflections.pdf" },
  { date: "2024-06-09", title: "MoneyGrow Reflections", href: "https://moneygrowindia.com/wp-content/uploads/2024/12/2024-06-09-MoneyGrow-Reflections.pdf" },
  { date: "2024-05-10", title: "MoneyGrow Reflections", href: "https://moneygrowindia.com/wp-content/uploads/2024/12/2024-05-10-MoneyGrow-Reflections.pdf" },
  { date: "2024-04-07", title: "MoneyGrow Reflections", href: "https://moneygrowindia.com/wp-content/uploads/2024/12/2024-04-07-MoneyGrow-Reflections.pdf" },
  { date: "2024-03-14", title: "MoneyGrow Reflections", href: "https://moneygrowindia.com/wp-content/uploads/2024/12/2024-03-14-MoneyGrow-Reflections.pdf" },
  { date: "2024-03-09", title: "MoneyGrow Reflections", href: "https://moneygrowindia.com/wp-content/uploads/2024/12/2024-03-09-MoneyGrow-Reflections.pdf" },
  { date: "2024-02-08", title: "MoneyGrow Reflections", href: "https://moneygrowindia.com/wp-content/uploads/2024/12/2024-02-08-MoneyGrow-Reflections.pdf" },
  { date: "2024-01-07", title: "MoneyGrow Reflections", href: "https://moneygrowindia.com/wp-content/uploads/2024/12/2024-01-07-MoneyGrow-Reflections.pdf" },
  { date: "2023-12-03", title: "MoneyGrow Reflections", href: "https://moneygrowindia.com/wp-content/uploads/2024/12/2023-12-03-MoneyGrow-Reflections.pdf" },
  { date: "2023-11-09", title: "MoneyGrow Reflections", href: "https://moneygrowindia.com/wp-content/uploads/2024/12/2023-11-09-MoneyGrow-Reflections.pdf" },
  { date: "2023-10-07", title: "MoneyGrow Reflections", href: "https://moneygrowindia.com/wp-content/uploads/2024/12/2023-10-07-MoneyGrow-Reflections.pdf" },
  { date: "2023-09-22", title: "MoneyGrow Reflections", href: "https://moneygrowindia.com/wp-content/uploads/2024/12/2023-09-22-MoneyGrow-Reflections.pdf" },
  { date: "2023-09-07", title: "MoneyGrow Reflections", href: "https://moneygrowindia.com/wp-content/uploads/2024/12/2023-09-07-MoneyGrow-Reflections.pdf" },
  { date: "2023-08-09", title: "MoneyGrow Reflections", href: "https://moneygrowindia.com/wp-content/uploads/2024/12/2023-08-09-MoneyGrow-Reflections.pdf" },
  { date: "2023-07-10", title: "MoneyGrow Reflections", href: "https://moneygrowindia.com/wp-content/uploads/2024/12/2023-07-10-MoneyGrow-Reflections.pdf" },
];

/** Static fallback letters (newest-first), built the same way as live data. */
export const letters: Letter[] = buildLetters(FALLBACK_RAW);

const grouped = groupByYear(letters);
export const lettersByYear = grouped.lettersByYear;
export const years = grouped.years;
