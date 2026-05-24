import type { MetadataRoute } from "next";
import { strategies } from "@/lib/strategies";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://moneygrowindia.com";
  const now = new Date();
  const routes = [
    "",
    "/about",
    "/strategies",
    "/insights",
    "/disclosures",
    "/login",
    "/disclaimer",
    "/privacy",
    "/terms",
  ];
  return [
    ...routes.map((r) => ({ url: `${base}${r}`, lastModified: now })),
    ...strategies.map((s) => ({
      url: `${base}/strategies/${s.slug}`,
      lastModified: now,
    })),
  ];
}
