import type { Metadata } from "next";
import Link from "next/link";
import { GuidanceCta } from "@/components/guidance/GuidanceCta";
import { CareerQuiz } from "@/components/career/CareerQuiz";

export const metadata: Metadata = {
  title: "Find My Career Track — Free IT / CAD Career Quiz",
  description: "Answer 4 questions and get a 90-day plan: free certifications, three portfolio projects, job titles to apply for and a first-client pitch. Download it as a PDF. Free, no signup.",
  alternates: { canonical: "/my-career" },
};

export default function MyCareerPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink-950 py-20 text-white md:py-28">
        <div className="bg-grid absolute inset-0 -z-10 opacity-60" aria-hidden />
        <div className="absolute -left-32 top-0 -z-10 size-[28rem] rounded-full bg-brand-600/30 blur-[120px]" aria-hidden />
        <div className="absolute -right-24 bottom-0 -z-10 size-[24rem] rounded-full bg-accent-500/20 blur-[120px]" aria-hidden />
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="text-sm text-ink-300">
            <Link href="/" className="hover:text-white">Home</Link> / <span className="text-white">Find My Career Track</span>
          </nav>
          <span className="eyebrow eyebrow-dark mt-8">Free Tool · 4 Questions · PDF Roadmap</span>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            Find my IT / CAD <span className="text-gradient">career track.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-300">
            Four questions, then a 90-day plan you can actually follow: free certifications that are genuinely free, three portfolio projects, the job titles to apply for, and a pitch template for your first client. Download it as a PDF. No form, no email, no catch.
          </p>
        </div>
      </section>

      <section className="section bg-brand-50/50">
        <div className="container-x"><CareerQuiz /></div>
      </section>

      <GuidanceCta
        title="Start building your career today."
        text="Talk to a counsellor today. One call is usually enough to know which track fits your degree, your schedule and the job you want."
        button="Book a Free Demo"
      />
    </>
  );
}
