import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { aiCourses } from "@/data/site";
import { delay } from "@/components/ui/SectionHeading";
import { Breadcrumb } from "@/components/course/Breadcrumb";
import { AiCourseCard } from "@/components/course/AiCourseCard";
import { SoftBlobs } from "@/components/course/CourseSection";

export const metadata: Metadata = {
  title: "AI Courses in Jalandhar — Generative AI, Agentic AI, ML & More",
  description: `Compare ${aiCourses.length} AI courses at TechCADD Jalandhar: Generative AI, Artificial Intelligence, Agentic AI, RAG, Machine Learning, Prompt Engineering, ChatGPT & AI Tools and AI-Powered Marketing.`,
  alternates: { canonical: "/ai-courses" },
};

/** Hub for the AI nav dropdown ("Explore AI") and the breadcrumb middle crumb. */
export default function AiCoursesPage() {
  return (
    <>
      <section className="on-dark relative isolate overflow-hidden bg-ink-950 py-16 text-white md:py-24">
        <div className="bg-grid absolute inset-0 -z-10 opacity-60" aria-hidden />
        <div className="absolute -left-32 top-0 -z-10 size-[28rem] rounded-full bg-brand-600/30 blur-[120px]" aria-hidden />
        <div className="container-x">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "AI Courses" }]} />
          <p className="eyebrow eyebrow-dark mt-8"><Sparkles className="size-3.5" aria-hidden /> {aiCourses.length} AI courses</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.05] text-balance sm:text-5xl lg:text-6xl">
            AI courses in Jalandhar, <span className="text-gradient">built for real jobs</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-300">
            From a 4-week ChatGPT course to a 6-month AI engineering track — every course includes live projects, certification and placement support.
          </p>
          <Link href="/#demo" className="btn-primary mt-9">Get Free Course Counselling <ArrowRight className="size-4" aria-hidden /></Link>
        </div>
      </section>

      <section aria-label="All AI courses" className="section relative isolate overflow-hidden bg-soft">
        <SoftBlobs />
        <ul className="container-x relative grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {aiCourses.map((c, i) => (
            <li key={c.slug} data-reveal="up" style={delay(i % 3)}>
              <AiCourseCard course={c} headingLevel="h2" />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
