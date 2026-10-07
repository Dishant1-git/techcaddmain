import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { aiCourses, site } from "@/data/site";
import { aiHub } from "@/data/ai-hub";
import { delay } from "@/components/ui/SectionHeading";
import { Breadcrumb } from "@/components/course/Breadcrumb";
import { AiCourseCard } from "@/components/course/AiCourseCard";
import { SoftBlobs } from "@/components/course/CourseSection";
import { HubAudience, HubCareers, HubLearn, HubOverview, HubRegions, HubWhy, HubWhyUs } from "@/components/course/AiHubSections";
import { GuidanceFaq } from "@/components/guidance/GuidanceFaq";
import { GuidanceCta } from "@/components/guidance/GuidanceCta";

export const metadata: Metadata = {
  title: "AI Courses in Jalandhar — Generative AI, Agentic AI, ML & More",
  description: `Compare ${aiCourses.length} AI courses at TechCADD Jalandhar: Generative AI, Artificial Intelligence, Agentic AI, RAG, Machine Learning, Prompt Engineering, ChatGPT & AI Tools and AI-Powered Marketing.`,
  alternates: { canonical: "/ai-courses" },
};

/** Hub for the AI nav dropdown ("Explore AI") and the breadcrumb middle crumb: hero + course cards, then the client's
 *  long-form copy (`aiHub` in src/data/ai-hub.ts → course/AiHubSections), FAQ (with FAQPage JSON-LD) and CTA. */
export default function AiCoursesPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "AI Courses", item: `${site.url}/ai-courses` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: aiHub.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
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

      <HubOverview />
      <HubAudience />
      <HubRegions />
      <HubWhy />
      <HubWhyUs />
      <HubLearn />
      <HubCareers />
      <GuidanceFaq topic="AI courses in Jalandhar" faqs={aiHub.faqs} />
      <GuidanceCta title={`${aiHub.cta.title} ${aiHub.cta.highlight}`} text={aiHub.cta.text} button="Book a Free Demo" />
    </>
  );
}
