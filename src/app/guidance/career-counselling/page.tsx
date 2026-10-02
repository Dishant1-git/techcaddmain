import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { careerCounselling } from "@/data/guidance";
import { GuidanceHero } from "@/components/guidance/GuidanceHero";
import { FeatureGrid } from "@/components/guidance/FeatureGrid";
import { StepsTimeline } from "@/components/guidance/StepsTimeline";
import { GuidanceFaq } from "@/components/guidance/GuidanceFaq";
import { GuidanceCta } from "@/components/guidance/GuidanceCta";
import { SectionHeading, delay } from "@/components/ui/SectionHeading";
import { Counter } from "@/components/ui/Counter";

export const metadata: Metadata = {
  title: careerCounselling.meta.title,
  description: careerCounselling.meta.description,
  alternates: { canonical: "/guidance/career-counselling" },
};

const trustPoints = [
  "Honest, no-pressure conversations — not a sales pitch",
  "Counsellors trained on real industry hiring data",
  "Available in person, on call or over video",
  "A written roadmap you keep, whether you enrol or not",
];

export default function CareerCounsellingPage() {
  const d = careerCounselling;
  return (
    <>
      <GuidanceHero
        breadcrumb="Free Career Counselling"
        icon="Target"
        eyebrow={d.hero.eyebrow}
        titleLead={d.hero.titleLead}
        titleHighlight={d.hero.titleHighlight}
        titleTail={d.hero.titleTail}
        subtitle={d.hero.subtitle}
        ctaPrimary={d.hero.ctaPrimary}
        ctaSecondary={d.hero.ctaSecondary}
        stats={d.stats}
      />

      <section className="section bg-white">
        <div className="container-x max-w-3xl text-center">
          <SectionHeading eyebrow={d.why.eyebrow} title={d.why.title} />
          <p data-reveal="up" style={delay(2)} className="mt-6 leading-relaxed text-ink-500">{d.why.text}</p>
        </div>
      </section>

      <section className="section bg-brand-50/50">
        <div className="container-x">
          <SectionHeading eyebrow="What You Get" title={<>A session built around <span className="text-gradient">your future</span>, not a sales script</>} />
          <div className="mt-14"><FeatureGrid items={d.whatYouGet} columns={3} /></div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="Who Can Benefit" title={<>Useful at <span className="text-gradient">every stage</span> of your journey</>} />
          <div className="mt-14"><FeatureGrid items={d.whoBenefits} columns={4} compact /></div>
        </div>
      </section>

      <section className="section bg-brand-50/50">
        <div className="container-x">
          <SectionHeading eyebrow="How It Works" title={<>From confusion to a <span className="text-gradient">clear plan</span></>} />
          <div className="mt-16"><StepsTimeline steps={d.steps} /></div>
        </div>
      </section>

      <section id="career-paths" className="section scroll-mt-24 bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="Career Paths" title={<>Explore the tracks we <span className="text-gradient">counsel students on</span></>} />
          <div className="mt-14"><FeatureGrid items={d.careerPaths} columns={4} compact /></div>
        </div>
      </section>

      <section className="section relative overflow-hidden bg-ink-950 text-white">
        <div className="bg-grid absolute inset-0 opacity-50" aria-hidden />
        <div className="container-x relative grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading dark align="left" eyebrow="Why Choose Us" title={<>Guidance backed by <span className="text-gradient">20+ years</span> in North India</>} />
            <ul className="mt-8 space-y-4">
              {trustPoints.map((p) => (
                <li key={p} data-reveal="up" className="flex items-start gap-3 text-ink-300">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent-400" aria-hidden /> {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {d.stats.map((s, i) => (
              <div key={s.label} data-reveal="up" style={delay(i)} className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 text-center backdrop-blur">
                <p className="font-display text-3xl font-extrabold sm:text-4xl">
                  <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} />
                </p>
                <p className="mt-2 text-sm text-ink-300">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GuidanceFaq topic="career counselling" faqs={d.faqs} />

      <GuidanceCta title={d.finalCta.title} text={d.finalCta.text} button={d.finalCta.button} />
    </>
  );
}
