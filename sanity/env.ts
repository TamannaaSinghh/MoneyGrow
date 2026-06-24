export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-06-01";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

/** True only when both project id and dataset are present in the environment. */
export const isSanityConfigured = Boolean(projectId && dataset);
