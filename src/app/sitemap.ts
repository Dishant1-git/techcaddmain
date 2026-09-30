import type { MetadataRoute } from "next";
import { aiCourses, branches, site } from "@/data/site";
import { coursePages } from "@/data/course-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/ai-courses`, changeFrequency: "weekly", priority: 0.9 },
    ...aiCourses.map((c) => ({ url: `${site.url}/ai-courses/${c.slug}`, changeFrequency: "monthly" as const, priority: 0.9 })),
    { url: `${site.url}/courses`, changeFrequency: "weekly", priority: 0.9 },
    ...coursePages.map((c) => ({ url: `${site.url}/courses/${c.slug}`, changeFrequency: "monthly" as const, priority: 0.9 })),
    ...branches.map((b) => ({ url: `${site.url}/branches/${b.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
