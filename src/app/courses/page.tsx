import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { courseGroups, coursePages } from "@/data/course-pages";
import { Icon } from "@/components/ui/Icon";
import { Breadcrumb } from "@/components/course/Breadcrumb";
import { CpCourseCard } from "@/components/course-page/CpTrust";

export const metadata: Metadata = {
  title: "IT Courses in Jalandhar — Programming, Data, Marketing, Cyber & Cloud",
  description: `Explore ${coursePages.length} job-ready courses at TechCADD Jalandhar: Python, Java, MERN, Data Science, Power BI, Digital Marketing, SEO, Cybersecurity, Cloud Computing and more — with live projects and placement support.`,
  alternates: { canonical: "/courses" },
};

/** Hub for the Courses nav dropdown ("Browse all courses") and the breadcrumb middle crumb. Neumorphic, grouped. */
export default function CoursesPage() {
  return (
    <div className="bg-neu">
      <section className="relative isolate overflow-hidden pb-6 pt-10 md:pt-14">
        <div aria-hidden className="bg-grid-light absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_70%)]" />
        <div className="container-x text-center">
          <div className="flex justify-center">
            <Breadcrumb tone="light" items={[{ label: "Home", href: "/" }, { label: "Courses" }]} />
          </div>
          <p className="eyebrow mt-8 !border-0 !bg-neu shadow-neu-inset-sm">{coursePages.length} courses · 4 career paths</p>
          <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-extrabold leading-[1.05] text-balance text-ink-900 sm:text-5xl lg:text-6xl">
            IT courses in Jalandhar, <span className="text-gradient">built around real projects</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-700">
            Pick a path, learn from working mentors and graduate with a portfolio, a verifiable certificate and placement support.
          </p>
          <nav aria-label="Course groups" className="mt-9">
            <ul className="flex flex-wrap justify-center gap-3">
              {courseGroups.map((g) => (
                <li key={g.id}>
                  <a href={`#${g.id}`} className="btn-neu !py-2.5"><Icon name={g.icon} className="size-4 text-brand-600" /> {g.title}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {courseGroups.map((g, gi) => {
        const list = coursePages.filter((c) => c.group === g.id);
        if (list.length === 0) return null;
        return (
          <section key={g.id} id={g.id} aria-labelledby={`${g.id}-title`} className="scroll-mt-28 py-14 md:py-20">
            <div className="container-x">
              <div data-reveal="up" className="flex items-center gap-4">
                <span aria-hidden className="neu-icon size-14"><Icon name={g.icon} className="size-6" /></span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">0{gi + 1} · {list.length} courses</p>
                  <h2 id={`${g.id}-title`} className="text-2xl font-extrabold text-ink-900 sm:text-3xl">{g.title}</h2>
                </div>
              </div>
              <ul className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((c) => (
                  <li key={c.slug} className="extrude">
                    <CpCourseCard course={c} />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}

      <section className="pb-20 pt-4 text-center">
        <Link href="/#demo" className="btn-neu-primary">Get Free Course Counselling <ArrowRight className="size-4" aria-hidden /></Link>
      </section>
    </div>
  );
}
