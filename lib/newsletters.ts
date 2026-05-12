export type Letter = {
  serial: number;
  date: string;
  title: string;
  href: string;
  year: number;
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

export const letters: Letter[] = RAW.sort((a, b) => (a.date < b.date ? 1 : -1)).map(
  (l, i) => ({
    serial: i + 1,
    date: l.date,
    title: l.title,
    year: Number(l.date.slice(0, 4)),
    href: `https://moneygrowindia.com/newsletters/`,
  })
);

export const lettersByYear = letters.reduce<Record<number, Letter[]>>((acc, l) => {
  (acc[l.year] ||= []).push(l);
  return acc;
}, {});

export const years = Object.keys(lettersByYear)
  .map(Number)
  .sort((a, b) => b - a);
