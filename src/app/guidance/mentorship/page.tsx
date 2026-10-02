import type { Metadata } from "next";
import { mentorship } from "@/data/guidance";
import { GuidanceHero } from "@/components/guidance/GuidanceHero";
import { FeatureGrid } from "@/components/guidance/FeatureGrid";
import { StepsTimeline } from "@/components/guidance/StepsTimeline";
import { MentorGrid } from "@/components/guidance/MentorCard";
import { GuidanceFaq } from "@/components/guidance/GuidanceFaq";
import { GuidanceCta } from "@/components/guidance/GuidanceCta";
import { Testimonials } from "@/components/home/Testimonials";
import { SectionHeading, delay } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: mentorship.meta.title,
  description: mentorship.meta.description,
  alternates: { canonical: "/guidance/mentorship" },
};

export default function MentorshipPage() {
  const d = mentorship;
  return (
    <>
      <GuidanceHero
        breadcrumb="1:1 Mentorship"
        icon="Users"
        eyebrow={d.hero.eyebrow}
        titleLead={d.hero.titleLead}
        titleHighlight={d.hero.titleHighlight}
        subtitle={d.hero.subtitle}
        ctaPrimary={d.hero.ctaPrimary}
        ctaSecondary={d.hero.ctaSecondary}
      />

      <section className="section bg-white">
        <div className="container-x max-w-3xl text-center">
          <SectionHeading eyebrow={d.why.eyebrow} title={d.why.title} />
          <p data-reveal="up" style={delay(2)} className="mt-6 leading-relaxed text-ink-500">{d.why.text}</p>
        </div>
      </section>

      <section className="section bg-brand-50/50">
        <div className="container-x">
          <SectionHeading eyebrow="What Your Mentor Helps With" title={<>Support that goes <span className="text-gradient">beyond the syllabus</span></>} />
          <div className="mt-14"><FeatureGrid items={d.helpsWith} columns={4} compact /></div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="Mentorship Process" title={<>A simple path to <span className="text-gradient">real progress</span></>} />
          <div className="mt-16"><StepsTimeline steps={d.process} /></div>
        </div>
      </section>

      <section className="section bg-brand-50/50">
        <div className="container-x">
          <SectionHeading eyebrow="Mentorship Categories" title={<>Mentors across every <span className="text-gradient">career track</span></>} />
          <div className="mt-14"><FeatureGrid items={d.categories} columns={4} compact /></div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="Meet the Mentors" title={<>Learn from people <span className="text-gradient">already doing the job</span></>} />
          <div className="mt-14"><MentorGrid mentors={d.mentors} /></div>
        </div>
      </section>

      <Testimonials />

      <GuidanceFaq topic="1:1 mentorship" faqs={d.faqs} />

      <GuidanceCta title={d.finalCta.title} text={d.finalCta.text} button={d.finalCta.button} />
    </>
  );
}
