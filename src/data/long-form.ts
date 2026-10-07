import { coursePages } from "./course-pages";
import type { CourseCopy } from "./course-pages/types";
import { longFormExtra } from "./long-form-extra";

/* Long-form copy shown on After 12th and Internship & Training pages (components/long-form/LongFormSections.tsx):
   "Learners from across states", "Why this program" and extra FAQs. It is NOT a second copy of the text: each subject reads
   the client's long-form copy from the matching /courses page (`copy` in src/data/course-pages/<slug>.ts), or from
   ./long-form-extra.ts for subjects that have no /courses page.
   Those two page types never show pricing or salary, so every point / FAQ that mentions money is dropped here. */

export type LongForm = {
  /** Course the copy was written for, e.g. "MERN Stack Course". */
  name: string;
  /** The full course page this copy comes from, when there is one. */
  href?: string;
  regions: NonNullable<CourseCopy["regions"]>;
  whyProgram: NonNullable<CourseCopy["whyProgram"]>;
  faqs: { q: string; a: string }[];
};

/** After 12th subject slug / training program slug → coursePages slug. */
export const fromCourse: Record<string, string> = {
  "cloud-computing": "cloud-computing",
  "mern-stack": "mern-stack",
  "agentic-ai": "agentic-ai",
  "digital-marketing": "digital-marketing",
  "data-analytics": "data-analytics",
  "data-science": "data-science",
  "cyber-security": "cybersecurity",
  "artificial-intelligence": "artificial-intelligence",
};

const money = /₹|\bLPA\b|\blakhs?\b|\bsalar(y|ies)\b|\bfees?\b|\bpay\b|\bearn(s|ing)?\b|\bpric(e|es|ing)\b/i;
const clean = <T extends { title: string; text: string }>(items: T[]) => items.filter((i) => !money.test(`${i.title} ${i.text}`));

export function longFormFor(slug: string): LongForm | undefined {
  const extra = longFormExtra[slug];
  const course = coursePages.find((c) => c.slug === fromCourse[slug]);
  const src = extra ?? (course?.copy?.regions && course.copy.whyProgram
    ? { name: course.copy.heading?.title ?? course.title, regions: course.copy.regions, whyProgram: course.copy.whyProgram, faqs: course.faqs }
    : undefined);
  if (!src) return undefined;

  const outro = src.whyProgram.outro;
  return {
    name: src.name,
    href: extra || !course ? undefined : `/courses/${course.slug}`,
    regions: { ...src.regions, items: clean(src.regions.items) },
    whyProgram: { ...src.whyProgram, points: clean(src.whyProgram.points), outro: outro && !money.test(outro) ? outro : undefined },
    faqs: src.faqs.filter((f) => !money.test(`${f.q} ${f.a}`)),
  };
}
