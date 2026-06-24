import { createClient } from "next-sanity";
import { apiVersion, dataset, isSanityConfigured, projectId } from "../env";

// Read token is optional. It's only read server-side (these helpers run in
// server components), so it never reaches the browser. Needed when the dataset
// doesn't serve documents to anonymous reads.
const token = process.env.SANITY_API_READ_TOKEN || undefined;

/**
 * Only create a client when configured, so the site still builds and runs
 * before the Sanity project id + dataset are added to the environment.
 */
export const client = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: !token,
      token,
      perspective: "published",
    })
  : null;
