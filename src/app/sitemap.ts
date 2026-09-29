import type { MetadataRoute } from "next";
import { branches, site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "weekly", priority: 1 },
    ...branches.map((b) => ({ url: `${site.url}/branches/${b.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
