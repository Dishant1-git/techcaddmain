import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { nav } from "@/data/site";
import { courseGroups, coursePages } from "@/data/course-pages";
import { courseCatalog } from "@/data/course-pages/catalog";
import { Breadcrumb } from "@/components/course/Breadcrumb";
import { CourseSearch, type CourseItem } from "@/components/course-page/CourseSearch";

/** Hot / Trending / New badges come from the Courses nav dropdown, keyed by link href. */
const badges = new Map(
  (nav.find((n) => n.label === "Courses")?.columns?.columns ?? []).flatMap((col) => col.links).filter((l) => l.badge).map((l) => [l.href, l.badge!]),
);

/**
 * Every course as one searchable card. Normal course pages → one card each. "More Courses" catalog pages are expanded
 * into one card per course name (deduped; names that already have their own course page are skipped) linking to the
 * section of the catalog page that lists them.
 */
const seen = new Set<string>();
const items: CourseItem[] = coursePages.flatMap((c): CourseItem[] => {
  const groupTitle = courseGroups.find((g) => g.id === c.group)?.title ?? "";
  const catalog = courseCatalog[c.slug];
  if (!catalog) {
    return [{
      id: c.slug, title: c.title, text: c.tagline, href: `/courses/${c.slug}`, group: c.group, groupTitle, icon: c.icon,
      duration: c.duration, level: c.level, tags: c.tools, badge: badges.get(`/courses/${c.slug}`),
    }];
  }
  return catalog.flatMap((s, si) =>
    s.items.filter((it) => !it.href && !seen.has(it.name) && seen.add(it.name)).map((it) => ({
      id: `${c.slug}-${it.name}`, title: it.name, text: it.text, href: `/courses/${c.slug}#catalog-${si}`, group: c.group,
      groupTitle: c.navLabel, icon: c.icon, tags: [s.title, groupTitle],
    })),
  );
});

export const metadata: Metadata = {
  title: "All Courses in Jalandhar — Programming, AI, Marketing, Cyber, CADD & More",
  description: `Search ${items.length} job-ready courses at TechCADD Jalandhar: Python, Java, MERN, Data Science, Power BI, Digital Marketing, SEO, Cybersecurity, Cloud, AutoCAD, Tally and more — with live projects and placement support.`,
  alternates: { canonical: "/courses" },
};

/** All-courses page: target of the header "Courses" item, "Browse all courses" and the breadcrumb middle crumb. */
export default function CoursesPage() {
  return (
    <div className="bg-slate-50">
      <section className="relative isolate pb-4 pt-10 md:pt-14">
        <div aria-hidden className="bg-grid-light absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,#000_20%,transparent_75%)]" />
        <div className="container-x text-center">
          <div className="flex justify-center">
            <Breadcrumb tone="light" items={[{ label: "Home", href: "/" }, { label: "Courses" }]} />
          </div>
          <p className="mt-8 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">
            {items.length} courses · {courseGroups.length} career paths
          </p>
          <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-extrabold leading-[1.05] text-balance text-ink-900 sm:text-5xl lg:text-6xl">
            Find the course that <span className="text-gradient">gets you hired</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-500">
            Search every TechCADD course by name, skill or tool, or filter by career path. Each one comes with live
            projects, a verifiable certificate and placement support.
          </p>
        </div>
      </section>

      <section aria-label="All courses" className="container-x pb-16">
        <CourseSearch items={items} groups={courseGroups.map((g) => ({ id: g.id, title: g.title }))} />
      </section>

      <section className="pb-20 text-center">
        <p className="text-ink-500">Not sure which one fits you?</p>
        <Link href="/#demo" className="btn-brand mt-4">Get Free Course Counselling <ArrowRight className="size-4" aria-hidden /></Link>
      </section>
    </div>
  );
}
