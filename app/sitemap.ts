import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://moneygrowindia.com";
  const now = new Date();
  const routes = [
    "",
    "/about",
    "/investment-offerings",
    "/investment-offerings/pms",
    "/investment-offerings/aif",
    "/insights",
    "/disclosures",
    "/login",
    "/disclaimer",
    "/privacy",
    "/terms",
  ];
  return routes.map((r) => ({ url: `${base}${r}`, lastModified: now }));
}
