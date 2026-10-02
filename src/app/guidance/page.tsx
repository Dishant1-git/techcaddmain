import type { Metadata } from "next";
import { guidanceSummaries } from "@/data/guidance";
import { GuidanceSection } from "@/components/home/GuidanceSection";
import { GuidanceCard } from "@/components/guidance/GuidanceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Testimonials } from "@/components/home/Testimonials";
import { GuidanceCta } from "@/components/guidance/GuidanceCta";

export const metadata: Metadata = {
  title: "Guidance",
  description: "Career counselling, 1:1 mentorship, AI marketing and freelancing guidance from TechCADD — talk to people who've done it.",
  alternates: { canonical: "/guidance" },
};

export default function GuidanceHubPage() {
  return (
    <>
      <div className="pt-14 md:pt-20">
        <GuidanceSection headingLevel="h1" showViewAll={false} />
      </div>

      <section className="section bg-brand-50/50">
        <div className="container-x">
          <SectionHeading
            eyebrow="Every Step, Covered"
            title={<>Find the <span className="text-gradient">guidance you need</span></>}
            text="Whether you're choosing a career, improving your skills, finding clients or learning new technology, get the right guidance at every step."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {guidanceSummaries.map((g, i) => (
              <GuidanceCard
                key={g.slug}
                index={i}
                icon={g.icon}
                title={g.navLabel.toUpperCase()}
                text={g.hubDescription}
                href={`/guidance/${g.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <GuidanceCta
        title="Not Sure Where to Start?"
        text="Talk to a TechCADD counsellor — free, honest, and built around your goals."
        button="Book Free Counselling"
        href="/guidance/career-counselling"
      />
    </>
  );
}
