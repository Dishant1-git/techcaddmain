import type { Metadata } from "next";
import { freelancing } from "@/data/guidance";
import { GuidanceHero } from "@/components/guidance/GuidanceHero";
import { FeatureGrid } from "@/components/guidance/FeatureGrid";
import { StepsTimeline } from "@/components/guidance/StepsTimeline";
import { LogoGrid } from "@/components/guidance/LogoGrid";
import { GuidanceFaq } from "@/components/guidance/GuidanceFaq";
import { GuidanceCta } from "@/components/guidance/GuidanceCta";
import { SectionHeading, delay } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: freelancing.meta.title,
  description: freelancing.meta.description,
  alternates: { canonical: "/guidance/freelancing" },
};

export default function FreelancingPage() {
  const d = freelancing;
  return (
    <>
      <GuidanceHero
        breadcrumb="Freelancing"
        icon="Briefcase"
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

      <section id="skills" className="section scroll-mt-24 bg-brand-50/50">
        <div className="container-x">
          <SectionHeading eyebrow="In-Demand Freelancing Skills" title={<>Pick a skill, <span className="text-gradient">become the specialist</span></>} />
          <div className="mt-14"><FeatureGrid items={d.skills} columns={4} compact /></div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="How Freelancing Works" title={<>From skill to <span className="text-gradient">first paid project</span></>} />
          <div className="mt-16"><StepsTimeline steps={d.howItWorks} /></div>
        </div>
      </section>

      <section className="section bg-brand-50/50">
        <div className="container-x">
          <SectionHeading eyebrow="Where Freelancers Find Work" title={<>Platforms and channels <span className="text-gradient">that actually work</span></>} />
          <div className="mt-14"><LogoGrid items={d.platforms} disclaimer={d.platformsDisclaimer} /></div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="Build Your Freelance Profile" title={<>What makes clients say <span className="text-gradient">&ldquo;yes&rdquo;</span></>} />
          <div className="mt-14"><FeatureGrid items={d.profile} columns={3} /></div>
        </div>
      </section>

      <section className="section bg-brand-50/50">
        <div className="container-x">
          <SectionHeading eyebrow="Your First Client" title={<>A clear roadmap to <span className="text-gradient">your first &ldquo;yes&rdquo;</span></>} />
          <div className="mt-16"><StepsTimeline steps={d.firstClientRoadmap} /></div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="Mistakes to Avoid" title={<>Don&apos;t let these <span className="text-gradient">slow you down</span></>} />
          <div className="mt-14"><FeatureGrid items={d.mistakes} columns={3} /></div>
        </div>
      </section>

      <GuidanceFaq topic="freelancing" faqs={d.faqs} />

      <GuidanceCta title={d.finalCta.title} text={d.finalCta.text} button={d.finalCta.button} />
    </>
  );
}
