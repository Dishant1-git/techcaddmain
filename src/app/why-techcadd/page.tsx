import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { branches, site } from "@/data/site";
import type { FaqItem, FeatureItem } from "@/data/guidance";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureGrid } from "@/components/guidance/FeatureGrid";
import { GuidanceFaq } from "@/components/guidance/GuidanceFaq";
import { GuidanceCta } from "@/components/guidance/GuidanceCta";

export const metadata: Metadata = {
  title: "Why techcadd — What Separates One Institute From Another",
  description: "Six things worth checking before you pick an institute — trainers, live projects, batch size, placement support, certificates and track record — and how techcadd answers each.",
  alternates: { canonical: "/why-techcadd" },
};

const centres = branches.length;

// Sample stats from the reference page — confirm real figures before launch.
const heroStats = [
  { value: "25,000+", label: "Students trained since 2007" },
  { value: "10,000+", label: "Students placed" },
  { value: `${site.rating.score}★`, label: `${site.rating.reviews} Google reviews` },
  { value: String(centres), label: "Centres across Punjab & tricity" },
];

const checks: FeatureItem[] = [
  { icon: "UserCheck", title: "Trainers who still do the work", text: "Every trainer runs live client accounts or builds production code outside the classroom, so the examples in class are from this quarter's work, not a five-year-old case study." },
  { icon: "Rocket", title: "Live projects, not slides", text: "Every course closes with a project a trainer grades and an employer can open — a tracked campaign, a deployed app, a real store that has taken an order." },
  { icon: "Users", title: "Small batches, daily lab time", text: "Batch sizes stay small enough that a trainer can review your work individually, with open lab hours for doubts outside class." },
  { icon: "Handshake", title: "A placement cell that persists", text: "Mock interviews, CV reviews and employer drives continue after a rejection rather than stopping once the batch ends." },
  { icon: "Award", title: "Certificate and internship letter, always", text: "Every completed course carries an industry-recognised certificate and a documented internship letter, accepted for university industrial training requirements." },
  { icon: "Building2", title: `Since 2007, across ${centres} cities`, text: `${centres} centres in Punjab and the tricity, run on the same model rather than a franchise with a different standard in each city.` },
];

const comparison = [
  { feature: "Who teaches the class", us: "A practitioner still doing client work", them: "Often a full-time instructor with no current client work" },
  { feature: "What you build", us: "A live project a real employer can open and inspect", them: "Frequently a tutorial-style demo project" },
  { feature: "Batch size", us: "Kept small enough for daily feedback", them: "Varies widely, rarely disclosed upfront" },
  { feature: "After your batch ends", us: "Placement support continues past the first rejection", them: "Support commonly ends when the certificate is issued" },
  { feature: "Fee guarantee claims", us: "Never — placement support is guaranteed, a job is not", them: "“100% placement guaranteed” claims are common and rarely honoured" },
];

const verify = [
  { title: "Read the reviews", text: "Unedited, on our Google Business Profile.", href: "/#testimonials" },
  { title: "Check the salary data", text: "Published bands by role and city.", href: "/placements" },
  { title: "See the accreditations", text: "What's actually certified, and by whom.", href: "/about" },
  { title: "Visit a centre", text: `${centres} campuses across Punjab and the tricity.`, href: "/#branches" },
];

const faqs: FaqItem[] = [
  { q: "Is placement really guaranteed at techcadd?", a: "No — and any institute claiming a guaranteed job should be treated with caution. What techcadd guarantees is placement support: CV reviews, mock interviews, portfolio preparation and repeated employer drives for as long as it takes, not just until your batch ends." },
  { q: "How is techcadd different from a cheaper local institute?", a: "Mainly in what you leave with: a project an employer can actually open and inspect, built under a trainer who still does client work, rather than a certificate for having attended. The fee reflects that live-project model rather than a slide-based syllabus." },
  { q: "Is the 4.9★ rating real?", a: "Yes — it is techcadd's live Google Business Profile rating from 750+ reviews, readable and checkable on Google, not a number written into this page." },
  { q: "Do all branches run the same courses and quality?", a: "Yes. Every centre runs from the same syllabus and the same trainer-led, live-project model as the Jalandhar campus — see the branch list for the one nearest you." },
];

export default function WhyTechcaddPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink-950 py-20 text-white md:py-28">
        <div className="bg-grid absolute inset-0 -z-10 opacity-60" aria-hidden />
        <div className="absolute -left-32 top-0 -z-10 size-[28rem] rounded-full bg-brand-600/30 blur-[120px]" aria-hidden />
        <div className="absolute -right-24 bottom-0 -z-10 size-[24rem] rounded-full bg-accent-500/20 blur-[120px]" aria-hidden />
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="text-sm text-ink-300">
            <Link href="/" className="hover:text-white">Home</Link> / <span className="text-white">Why techcadd</span>
          </nav>
          <span className="eyebrow eyebrow-dark mt-8">Why techcadd</span>
          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            What actually separates <span className="text-gradient">one institute from another</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-300">
            Every institute&apos;s brochure reads the same. This is what to check for instead — and how techcadd answers each one.
          </p>
          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-5">
            {heroStats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl font-extrabold leading-none">{s.value}</p>
                <p className="mt-1 text-xs text-ink-300">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="Six things worth checking" title={<>The differences that actually show up <span className="text-gradient">in a job search</span></>} />
          <div className="mt-14"><FeatureGrid items={checks} columns={3} /></div>
        </div>
      </section>

      <section className="section bg-brand-50/50">
        <div className="container-x">
          <SectionHeading align="left" eyebrow="A fair comparison" title={<>techcadd against <span className="text-gradient">what most institutes offer</span></>}
            text="“Most other institutes” describes common practice in the market, not any one named competitor — a claim about a specific institute is one nobody here can substantiate." />
          <div data-reveal="up" className="mt-10 overflow-x-auto rounded-2xl border border-ink-300/40 bg-white">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-ink-300/40 text-left">
                  <th scope="col" className="px-5 py-4 font-semibold text-ink-900">Feature</th>
                  <th scope="col" className="px-5 py-4 font-semibold text-brand-700">techcadd</th>
                  <th scope="col" className="px-5 py-4 font-semibold text-ink-900">Most other institutes</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((r) => (
                  <tr key={r.feature} className="border-b border-ink-300/30 last:border-0 even:bg-brand-50/30">
                    <th scope="row" className="px-5 py-4 text-left font-semibold text-ink-900">{r.feature}</th>
                    <td className="px-5 py-4 text-ink-700">{r.us}</td>
                    <td className="px-5 py-4 text-ink-500">{r.them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="See it yourself" title={<>Don&apos;t take the brochure&apos;s <span className="text-gradient">word for it</span></>} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {verify.map((v) => (
              <Link key={v.title} href={v.href} className="card card-hover group flex flex-col p-6">
                <h3 className="font-display text-base font-bold text-ink-900 transition-colors group-hover:text-brand-600">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{v.text}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-600">View <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <GuidanceFaq topic="choosing an institute" faqs={faqs} />

      <GuidanceCta
        title="Start building your career today."
        text="Talk to a counsellor today. One call is usually enough to know which track fits your degree, your schedule and the job you want."
        button="Book a Free Demo"
      />
    </>
  );
}
