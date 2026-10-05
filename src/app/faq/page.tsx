import type { Metadata } from "next";
import Link from "next/link";
import { faqCategories } from "@/data/faq-page";
import { site } from "@/data/site";
import { FaqTabs } from "@/components/faq/FaqTabs";
import { GuidanceCta } from "@/components/guidance/GuidanceCta";

export const metadata: Metadata = {
  title: "FAQ — Courses, Fees, Batches & Placement | techcadd",
  description: "Quick answers to common questions about techcadd courses: digital marketing, SEO, AI, web development, cloud, cyber security, accounting and CAD/CAM.",
  alternates: { canonical: "/faq" },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "FAQ", item: `${site.url}/faq` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqCategories.flatMap((c) =>
      c.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    ),
  },
];

export default function FaqPage() {
  return (
    <>
      {jsonLd.map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
      ))}
      <section className="relative isolate overflow-hidden bg-ink-950 py-20 text-white md:py-28">
        <div className="bg-grid absolute inset-0 -z-10 opacity-60" aria-hidden />
        <div className="absolute -left-32 top-0 -z-10 size-[28rem] rounded-full bg-brand-600/30 blur-[120px]" aria-hidden />
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="text-sm text-ink-300">
            <Link href="/" className="hover:text-white">Home</Link> / <span className="text-white">FAQ</span>
          </nav>
          <span className="eyebrow eyebrow-dark mt-8">FAQ</span>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            Questions we are asked, and <span className="text-gradient">straight answers.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-300">
            Five key questions for every course. If something isn&apos;t covered, the centre will answer it on the phone.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <FaqTabs categories={faqCategories} />
          <div className="card mt-14 p-8 text-center">
            <h2 className="text-xl font-bold text-ink-900">Still not sure?</h2>
            <p className="mx-auto mt-2 max-w-xl text-ink-500">Course choice, batch timing and fees are easier to settle in one conversation. Counselling is free.</p>
            <a href={site.phoneHref} className="btn-brand mt-6 inline-flex">Call {site.phone}</a>
          </div>
        </div>
      </section>

      <GuidanceCta title="Ready to get started?" text="Talk to a counsellor and find the track that fits your degree, schedule and goal." button="Book a free demo" />
    </>
  );
}
