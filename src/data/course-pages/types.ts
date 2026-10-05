import type { Course } from "../site";

export type CourseGroupId = "programming" | "ai-data" | "marketing" | "cyber-cloud" | "more";

type TitledText = { title: string; text: string };
/** A reason card: text, optionally followed by a bullet list and a closing line. */
type Point = TitledText & { list?: string[]; /** Line after the list. */ after?: string };

/**
 * Optional long-form landing copy for a course page. When a block is present its section renders this copy instead of
 * the shared/default one (and `regions` / `whyProgram` add their own sections). Courses without `copy` are unchanged.
 */
export type CourseCopy = {
  /** Page H1 (`title` + highlighted `highlight`, replacing "<course title> in Jalandhar") and the browser/SEO title (`meta`). */
  heading?: { title: string; highlight: string; meta: string };
  overview?: { eyebrow: string; title: string; /** Set to keep the side card that lists `gains`, under this heading (otherwise the overview is full width). */ gainsTitle?: string };
  syllabus?: { eyebrow: string; title: string; text?: string; /** Line under the module list. */ note?: string };
  /** Replaces the group's "Who can join" cards and the eligibility line. */
  audience?: { eyebrow: string; title: string; intro: string; items: (TitledText & { icon: string })[]; need: string; /** "Is this course right for you?" card under the learner cards. */ fit?: { title: string; text: string; list: string[]; after?: string } };
  /** "Learners from across states" section. */
  regions?: { eyebrow: string; title: string; intro: string; items: TitledText[]; outro?: string };
  /** "Why this program" section. */
  whyProgram?: { eyebrow: string; title: string; intro: string; points: Point[]; /** Closing line under the cards. */ outro?: string };
  /** Replaces the shared "Why TechCADD" cards and comparison table. */
  whyUs?: { eyebrow: string; title: string; intro: string; points: Point[]; /** Closing line under the cards. */ outro?: string };
  /** Replaces the tool tiles with an Area → Tools table. */
  tools?: { title: string; /** Column headings; default Area / Tools. */ columns?: [string, string]; groups: { area: string; tools: string }[]; note?: string };
  /** Replaces the role cards. */
  careers?: { eyebrow: string; title: string; intro: string; roles: string[]; /** Paragraph under the role chips. */ rolesNote?: string; jobsTitle: string; jobs: TitledText[]; outro?: string };
  /** Replaces the site-wide testimonials. */
  reviews?: { title: string; items: { name: string; role: string; place: string; /** Stars out of 5; omit when the review has no rating. */ rating?: number; text: string; /** Bold one-line summary above the review. */ headline?: string }[] };
  /** FAQ heading; the shared course FAQs are not appended when `copy` is set. */
  faqTitle?: string;
  /** Replaces the heading and line of the final enquiry banner. */
  cta?: { title: string; highlight: string; text: string };
};

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
  syllabus: { title: string; summary: string; topics: string[]; /** "Outcome" line shown inside the module. */ outcome?: string }[];
  tools: string[];
  projects: { title: string; text: string; tags: string[] }[];
  careers: { role: string; work: string; hirers: string }[];
  /** "Why learn it now" points. */
  whyNow: string[];
  faqs: { q: string; a: string }[];
  /** coursePages[].slug */
  related: string[];
  copy?: CourseCopy;
};
