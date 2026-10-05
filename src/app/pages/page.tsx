import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { articles } from "@/data/articles";
import { GuidanceCta } from "@/components/guidance/GuidanceCta";

export const metadata: Metadata = {
  title: "Pages & Guides — techcadd",
  description: "Published guides on cloud computing, agentic AI, web design basics and data analytics training at techcadd Jalandhar.",
  alternates: { canonical: "/pages" },
};

export default function PagesDirectoryPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink-950 pb-16 pt-32 text-white md:pb-20 md:pt-40">
        <div className="bg-grid absolute inset-0 -z-10 opacity-60" aria-hidden />
        <div className="absolute -left-32 top-0 -z-10 size-[28rem] rounded-full bg-brand-600/30 blur-[120px]" aria-hidden />
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="text-sm text-ink-300">
            <Link href="/" className="hover:text-white">Home</Link> / <span className="text-white">Pages &amp; Guides</span>
          </nav>
          <span className="eyebrow eyebrow-dark mt-8">Resources &amp; Directory</span>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            Pages &amp; <span className="text-gradient">guides</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-300">Published guides on cloud, AI, web design and data analytics training.</p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-ink-950 py-12">
        <div className="container-x">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Published Notices &amp; Guides</h2>
              <p className="mt-1 text-sm text-ink-300">Institutional documents, policies, and special guides.</p>
            </div>
            <span className="rounded-full bg-brand-500/20 px-3.5 py-1 text-xs font-semibold text-brand-200">{articles.length} Pages</span>
          </div>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <li key={a.slug}>
                <Link href={`/${a.slug}`} className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:bg-white/10">
                  <h3 className="font-display text-lg font-bold text-white transition-colors group-hover:text-brand-200">{a.title}</h3>
                  {a.summary && <p className="mt-2.5 flex-1 text-xs leading-relaxed text-ink-300">{a.summary}</p>}
                  <span className={`${a.summary ? "" : "flex-1 items-end"} mt-5 inline-flex items-center gap-2 text-xs font-semibold text-brand-300`}>
                    Read page <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <GuidanceCta
        title="Start building your career today."
        text="Talk to a counsellor today. One call is usually enough to know which track fits your degree, your schedule and the job you want."
        button="Book a Free Demo"
      />
    </>
  );
}
