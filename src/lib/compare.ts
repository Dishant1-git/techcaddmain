import { coursePages, type CoursePage } from "@/data/course-pages";

/** One comparison page per pair of courses in the same group (e.g. Python vs Java). Slug = "<a>-vs-<b>". */
export type ComparePair = { slug: string; a: CoursePage; b: CoursePage };

export const comparePairs: ComparePair[] = coursePages.flatMap((a, i) =>
  coursePages.slice(i + 1).filter((b) => b.group === a.group).map((b) => ({ slug: `${a.slug}-vs-${b.slug}`, a, b })),
);

export const findPair = (slug: string) => comparePairs.find((p) => p.slug === slug);

/** Short name for headings: uses the nav label, e.g. "Python". */
export const shortName = (c: CoursePage) => c.navLabel;
