import type { MetadataRoute } from "next";
import { aiCourses, branches, site } from "@/data/site";
import { coursePages } from "@/data/course-pages";
import { trainingPages } from "@/data/training";
import { events } from "@/data/events";
import { articles } from "@/data/articles";
import { comparePairs } from "@/lib/compare";
import { a12Pages } from "@/data/after-12th";
import { guidanceSummaries } from "@/data/guidance";
import { aiMovedTo } from "@/data/ai-moved";
import { legalPages } from "@/data/legal";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/about/founder`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/about/mission-vision`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/ai-courses`, changeFrequency: "weekly", priority: 0.9 },
    // AI courses that moved redirect to their /courses/<slug> page (already listed with the course pages).
    ...aiCourses.filter((c) => !aiMovedTo[c.slug]).map((c) => ({ url: `${site.url}/ai-courses/${c.slug}`, changeFrequency: "monthly" as const, priority: 0.9 })),
    { url: `${site.url}/courses`, changeFrequency: "weekly", priority: 0.9 },
    ...coursePages.map((c) => ({ url: `${site.url}/courses/${c.slug}`, changeFrequency: "monthly" as const, priority: 0.9 })),
    { url: `${site.url}/training`, changeFrequency: "weekly", priority: 0.9 },
    ...trainingPages.map((c) => ({ url: `${site.url}/training/${c.slug}`, changeFrequency: "monthly" as const, priority: 0.9 })),
    { url: `${site.url}/after-12th`, changeFrequency: "weekly", priority: 0.9 },
    ...a12Pages.map((p) => ({ url: `${site.url}/after-12th/${p.slug}`, changeFrequency: "monthly" as const, priority: 0.9 })),
    ...branches.map((b) => ({ url: `${site.url}/branches/${b.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
    { url: `${site.url}/my-career`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/training-matcher`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/salary-estimator`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/compare`, changeFrequency: "monthly", priority: 0.7 },
    ...comparePairs.map((p) => ({ url: `${site.url}/compare/${p.slug}`, changeFrequency: "monthly" as const, priority: 0.5 })),
    { url: `${site.url}/why-techcadd`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/blogs`, changeFrequency: "weekly", priority: 0.6 },
    ...articles.map((a) => ({ url: `${site.url}/${a.slug}`, changeFrequency: "monthly" as const, priority: 0.5 })),
    { url: `${site.url}/events`, changeFrequency: "monthly", priority: 0.6 },
    ...events.map((e) => ({ url: `${site.url}/events/${e.slug}`, changeFrequency: "yearly" as const, priority: 0.4 })),
    { url: `${site.url}/gallery`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${site.url}/pages`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${site.url}/placements`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/contact`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/faq`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${site.url}/reviews`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${site.url}/college-partnerships`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${site.url}/guidance`, changeFrequency: "monthly", priority: 0.7 },
    ...legalPages.map((p) => ({ url: `${site.url}/${p.slug}`, changeFrequency: "yearly" as const, priority: 0.3 })),
    ...guidanceSummaries.map((g) => ({ url: `${site.url}/guidance/${g.slug}`, changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
}
