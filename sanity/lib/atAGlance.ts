import { client } from "./client";

export type Metric = { value: string; label: string };

/** Used when Sanity isn't configured yet, errors, or has no document. */
export const DEFAULT_METRICS: Metric[] = [
  { value: "23+", label: "Yrs lead PM" },
  { value: "3 – 5", label: "Yr horizon" },
  { value: "₹50 L", label: "Min. investment" },
  { value: "Nil", label: "Lock-in" },
];

const METRICS_QUERY = `*[_type == "atAGlance"][0].metrics[]{ value, label }`;

/**
 * Fetch the hero "At a glance" metrics from Sanity, falling back to the
 * built-in defaults whenever Sanity is unconfigured, empty, or unreachable.
 */
export async function getAtAGlanceMetrics(): Promise<Metric[]> {
  if (!client) return DEFAULT_METRICS;
  try {
    const metrics = await client.fetch<Metric[] | null>(
      METRICS_QUERY,
      {},
      { next: { revalidate: 60 } }
    );
    return metrics && metrics.length > 0 ? metrics : DEFAULT_METRICS;
  } catch {
    return DEFAULT_METRICS;
  }
}
