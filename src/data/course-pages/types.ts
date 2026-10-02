import type { Course } from "../site";

export type CourseGroupId = "programming" | "ai-data" | "marketing" | "cyber-cloud" | "more";

/** One page at /courses/<slug>. Pricing is intentionally NOT part of this type — never show fees on course pages. */
export type CoursePage = {
  slug: string;
  /** Page H1, rendered with "in Jalandhar", e.g. "Python Course". */
  title: string;
  /** Exact label used in the Courses nav dropdown. */
  navLabel: string;
  group: CourseGroupId;
  /** Name from the map in src/components/ui/Icon.tsx. */
  icon: string;
  tagline: string;
  level: Course["level"];
  duration: string;
  eligibility: string;
  overview: string[];
  /** "What you'll gain" checklist. */
  gains: string[];
  /** Rendered as the numbered module timeline. */
  syllabus: { title: string; summary: string; topics: string[] }[];
  tools: string[];
  projects: { title: string; text: string; tags: string[] }[];
  careers: { role: string; work: string; hirers: string }[];
  /** "Why learn it now" points. */
  whyNow: string[];
  faqs: { q: string; a: string }[];
  /** coursePages[].slug */
  related: string[];
};
