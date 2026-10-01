import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { trainingCommon, trainingPages } from "@/data/training";
import { Breadcrumb } from "@/components/course/Breadcrumb";
import { SoftBlobs } from "@/components/course/CourseSection";
import { TrCard } from "@/components/training/TrConnect";
import { TrStats } from "@/components/training/TrLearn";

export const metadata: Metadata = {
  title: "Internship & Industrial Training in Jalandhar — Live Projects & Placement",
  description: `${trainingPages.length} internship & industrial training programs at TechCADD Jalandhar: Cloud, Flutter, MERN, Agentic AI, Data Science, Cyber Security, Civil & Mechanical CAD and more — 3, 6 and 9-month tracks with live projects.`,
  alternates: { canonical: "/training" },
};

/** Hub for the Internship & Training dropdown ("See all training formats"): Soft UI, links to every /training/<slug>. */
export default function TrainingHubPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-soft pb-12 pt-10 md:pb-16 md:pt-14">
        <SoftBlobs />
        <div className="container-x">
          <Breadcrumb tone="light" items={[{ label: "Home", href: "/" }, { label: "Internship & Training" }]} />
          <span className="su-chip mt-10 !px-4 !py-1.5 !text-brand-800">{trainingPages.length} programs · 3 tracks</span>
          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.05] text-balance text-ink-900 sm:text-5xl lg:text-6xl">
            Internship &amp; industrial training <span className="text-gradient">in Jalandhar</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-700">
            Learn on live projects, earn an internship letter your university accepts, and get placement assistance until you&apos;re hired.
          </p>
          <ul aria-label="Training tracks" className="su-inset mt-9 inline-flex flex-wrap gap-2 !rounded-full p-1.5">
            {trainingCommon.tracks.map((t) => (
              <li key={t.name} className="rounded-full bg-linear-to-b from-white to-[#f3f6fc] px-4 py-2 text-sm font-semibold text-ink-900 shadow-[var(--su-raise-sm)]">{t.name}</li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-label="All training programs" className="bg-soft pb-20 pt-8 md:pb-28">
        <ul className="container-x grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {trainingPages.map((c) => (
            <li key={c.slug} className="tr-rise">
              <TrCard course={c} headingLevel="h2" />
            </li>
          ))}
        </ul>
        <div className="container-x mt-14 text-center">
          <Link href="/#demo" className="su-btn-accent tr-shine !px-7 !py-3.5 text-base">Get Free Career Counselling <ArrowRight className="size-4" aria-hidden /></Link>
        </div>
      </section>

      <TrStats />
    </>
  );
}
