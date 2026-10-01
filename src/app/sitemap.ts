import type { MetadataRoute } from "next";
import { aiCourses, branches, site } from "@/data/site";
import { coursePages } from "@/data/course-pages";
import { trainingPages } from "@/data/training";
import { a12Pages } from "@/data/after-12th";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/about/mission-vision`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/ai-courses`, changeFrequency: "weekly", priority: 0.9 },
    ...aiCourses.map((c) => ({ url: `${site.url}/ai-courses/${c.slug}`, changeFrequency: "monthly" as const, priority: 0.9 })),
    { url: `${site.url}/courses`, changeFrequency: "weekly", priority: 0.9 },
    ...coursePages.map((c) => ({ url: `${site.url}/courses/${c.slug}`, changeFrequency: "monthly" as const, priority: 0.9 })),
    { url: `${site.url}/training`, changeFrequency: "weekly", priority: 0.9 },
    ...trainingPages.map((c) => ({ url: `${site.url}/training/${c.slug}`, changeFrequency: "monthly" as const, priority: 0.9 })),
    { url: `${site.url}/after-12th`, changeFrequency: "weekly", priority: 0.9 },
    ...a12Pages.map((p) => ({ url: `${site.url}/after-12th/${p.slug}`, changeFrequency: "monthly" as const, priority: 0.9 })),
    ...branches.map((b) => ({ url: `${site.url}/branches/${b.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
