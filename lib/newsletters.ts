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

const RAW: { date: string; title: string }[] = [
  { date: "2026-05-07", title: "MoneyGrow Reflections" },
  { date: "2026-04-02", title: "MoneyGrow Reflections" },
  { date: "2026-03-04", title: "MoneyGrow Reflections" },
  { date: "2026-02-06", title: "MoneyGrow Reflections" },
  { date: "2026-01-07", title: "MoneyGrow Reflections" },
  { date: "2025-12-03", title: "MoneyGrow Reflections" },
  { date: "2025-11-05", title: "MoneyGrow Reflections" },
  { date: "2025-10-07", title: "MoneyGrow Reflections" },
  { date: "2025-09-04", title: "MoneyGrow Reflections" },
  { date: "2025-08-12", title: "MoneyGrow Reflections" },
  { date: "2025-07-04", title: "MoneyGrow Reflections" },
  { date: "2025-06-04", title: "MoneyGrow Reflections" },
  { date: "2025-05-06", title: "MoneyGrow Reflections" },
  { date: "2025-04-07", title: "MoneyGrow Reflections" },
  { date: "2025-03-07", title: "MoneyGrow Reflections" },
  { date: "2025-01-01", title: "MoneyGrow Reflections" },
  { date: "2024-12-04", title: "MoneyGrow Reflections" },
  { date: "2024-11-07", title: "MoneyGrow Reflections" },
  { date: "2024-10-03", title: "MoneyGrow Reflections" },
  { date: "2024-09-01", title: "MoneyGrow Reflections" },
  { date: "2024-08-01", title: "MoneyGrow Reflections" },
  { date: "2024-07-01", title: "MoneyGrow Reflections" },
  { date: "2024-06-09", title: "MoneyGrow Reflections" },
  { date: "2024-05-10", title: "MoneyGrow Reflections" },
  { date: "2024-04-07", title: "MoneyGrow Reflections" },
  { date: "2024-03-14", title: "MoneyGrow Reflections" },
  { date: "2024-03-09", title: "MoneyGrow Reflections" },
  { date: "2024-02-08", title: "MoneyGrow Reflections" },
  { date: "2024-01-07", title: "MoneyGrow Reflections" },
  { date: "2023-12-03", title: "MoneyGrow Reflections" },
  { date: "2023-11-09", title: "MoneyGrow Reflections" },
  { date: "2023-10-07", title: "MoneyGrow Reflections" },
  { date: "2023-09-22", title: "MoneyGrow Reflections" },
  { date: "2023-09-07", title: "MoneyGrow Reflections" },
  { date: "2023-08-09", title: "MoneyGrow Reflections" },
  { date: "2023-07-10", title: "MoneyGrow Reflections" },
];

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

export const letters: Letter[] = RAW.sort((a, b) => (a.date < b.date ? 1 : -1)).map(
  (l, i) => {
    const [y, m, d] = l.date.split("-").map(Number);
    const monthLong = MONTHS[m - 1];
    const serial = i + 1;
    return {
      serial,
      date: l.date,
      title: l.title,
      year: y,
      monthLong,
      monthShort: monthLong.slice(0, 3).toUpperCase(),
      dateLabel: `${String(d).padStart(2, "0")} ${monthLong.slice(0, 3)} ${y}`,
      blurb: BLURB_TEMPLATES[serial % BLURB_TEMPLATES.length]
        .replace("{M}", monthLong)
        .replace("{Y}", String(y)),
      href: `https://moneygrowindia.com/newsletters/`,
    };
  },
);

export const lettersByYear = letters.reduce<Record<number, Letter[]>>((acc, l) => {
  (acc[l.year] ||= []).push(l);
  return acc;
}, {});

export const years = Object.keys(lettersByYear)
  .map(Number)
  .sort((a, b) => b - a);
