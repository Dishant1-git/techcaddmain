import type { Metadata } from "next";
import { aiMarketing } from "@/data/guidance";
import { GuidanceHero } from "@/components/guidance/GuidanceHero";
import { FeatureGrid } from "@/components/guidance/FeatureGrid";
import { LogoGrid } from "@/components/guidance/LogoGrid";
import { WorkflowStrip } from "@/components/guidance/WorkflowStrip";
import { GuidanceFaq } from "@/components/guidance/GuidanceFaq";
import { GuidanceCta } from "@/components/guidance/GuidanceCta";
import { SectionHeading, delay } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: aiMarketing.meta.title,
  description: aiMarketing.meta.description,
  alternates: { canonical: "/guidance/ai-marketing" },
};

export default function AiMarketingPage() {
  const d = aiMarketing;
  return (
    <>
      <GuidanceHero
        breadcrumb="AI Marketing"
        icon="Megaphone"
        eyebrow={d.hero.eyebrow}
        titleLead={d.hero.titleLead}
        titleHighlight={d.hero.titleHighlight}
        subtitle={d.hero.subtitle}
        ctaPrimary={d.hero.ctaPrimary}
        ctaSecondary={d.hero.ctaSecondary}
      />

      <section id="what-is" className="section scroll-mt-24 bg-white">
        <div className="container-x max-w-3xl text-center">
          <SectionHeading eyebrow={d.whatIs.eyebrow} title={d.whatIs.title} />
          <p data-reveal="up" style={delay(2)} className="mt-6 leading-relaxed text-ink-500">{d.whatIs.text}</p>
        </div>
      </section>

      <section className="section bg-brand-50/50">
        <div className="container-x">
          <SectionHeading eyebrow="What You Can Do With AI" title={<>A full <span className="text-gradient">AI marketing toolkit</span>, not one trick</>} />
          <div className="mt-14"><FeatureGrid items={d.capabilities} columns={4} /></div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="AI Marketing Tools" title={<>Tools you&apos;ll <span className="text-gradient">actually learn to use</span></>} />
          <div className="mt-14"><LogoGrid items={d.tools} disclaimer={d.toolsDisclaimer} /></div>
        </div>
      </section>

      <section className="section bg-brand-50/50">
        <div className="container-x">
          <SectionHeading eyebrow="AI Marketing Workflow" title={<>From research to results, <span className="text-gradient">without the busywork</span></>} />
          <div className="mt-16 overflow-x-auto pb-2"><WorkflowStrip steps={d.workflow} /></div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="Benefits" title={<>Why marketers are <span className="text-gradient">moving to AI-first</span> workflows</>} />
          <div className="mt-14"><FeatureGrid items={d.benefits} columns={3} /></div>
        </div>
      </section>

      <section className="section bg-brand-50/50">
        <div className="container-x">
          <SectionHeading eyebrow="Use Cases" title={<>Built for how <span className="text-gradient">real businesses</span> market</>} />
          <div className="mt-14"><FeatureGrid items={d.useCases} columns={3} /></div>
        </div>
      </section>

      <GuidanceFaq topic="AI marketing" faqs={d.faqs} />

      <GuidanceCta title={d.finalCta.title} text={d.finalCta.text} button={d.finalCta.button} />
    </>
  );
}
