import type { Course } from "../site";

/** One page at /training/<slug> — one per tile in the "Internship & Training" nav dropdown.
 *  Pricing and salary figures are intentionally NOT part of this type — never show them on training pages. */
export type TrainingPage = {
  slug: string;
  /** Exact tile label in the Internship & Training dropdown. */
  navLabel: string;
  /** Page H1, rendered with "in Jalandhar", e.g. "Flutter App Development Training". */
  title: string;
  /** Name from the map in src/components/ui/Icon.tsx. */
  icon: string;
  tag?: string;
  tagline: string;
  level: Course["level"];
  eligibility: string;
  /** 2 paragraphs. */
  overview: string[];
  /** 6–8 short skill chips shown with the overview. */
  concepts: string[];
  /** Exactly 3 phases → the stacked roadmap. */
  phases: { title: string; summary: string; topics: string[]; outcome: string }[];
  /** 1–2 sentence career-impact statement (no salary figures). */
  impact: string;
  /** Exactly 6 audience segments. */
  audience: { title: string; text: string; icon: string }[];
  tools: { name: string; use: string }[];
  /** Exactly 5 career-outcome Q&As (roles, growth, freelancing, who hires, what to learn next) — no salary figures. */
  outcomes: { q: string; a: string }[];
  /** Exactly 4: fundamentals build · real-world data/problem challenge · live client brief · portfolio capstone. */
  projects: { stage: string; title: string; text: string; tags: string[] }[];
  faqs: { q: string; a: string }[];
  /** trainingPages[].slug */
  related: string[];
};
