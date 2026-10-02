import type { Metadata } from "next";
import Link from "next/link";
import { Check, Star } from "lucide-react";
import { GuidanceCta } from "@/components/guidance/GuidanceCta";
import { TrainingMatcher } from "@/components/career/TrainingMatcher";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "6 Weeks & 6 Months Training Matcher — Live Project Tracks",
  description: "Pick your university, branch and semester to instantly see your matched 6-week or 6-month industrial training track, seat availability and syllabus.",
  alternates: { canonical: "/training-matcher" },
};

const perks = ["Approved certificates", "Synopsis & report support", "100% practical live work"];

export default function TrainingMatcherPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink-950 py-20 text-white md:py-28">
        <div className="bg-grid absolute inset-0 -z-10 opacity-60" aria-hidden />
        <div className="absolute -left-32 top-0 -z-10 size-[28rem] rounded-full bg-brand-600/30 blur-[120px]" aria-hidden />
        <div className="absolute -right-24 bottom-0 -z-10 size-[24rem] rounded-full bg-accent-500/20 blur-[120px]" aria-hidden />
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="text-sm text-ink-300">
            <Link href="/" className="hover:text-white">Home</Link> / <span className="text-white">Training Matcher</span>
          </nav>
          <span className="eyebrow eyebrow-dark mt-8">Free Tool · Instant Match</span>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            6 Weeks &amp; 6 Months <span className="text-gradient">training matcher.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-300">
            Set your university, branch and semester — see your matched live project track and duration instantly, with seat availability and syllabus one click away.
          </p>
        </div>
      </section>

      <section className="section bg-brand-50/50">
        <div className="container-x">
          <div className="mb-10 text-center">
            <span className="eyebrow">100% university curriculum aligned</span>
            <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-ink-500 sm:text-sm">
              {perks.map((p) => <li key={p} className="flex items-center gap-1.5 text-brand-600"><Check className="size-3.5" aria-hidden /> {p}</li>)}
              <li className="flex items-center gap-1.5 text-amber-500"><Star className="size-3.5 fill-current" aria-hidden /> {site.rating.score}/5.0 ({site.rating.reviews} Google reviews)</li>
            </ul>
          </div>
          <TrainingMatcher />
        </div>
      </section>

      <GuidanceCta
        title="Secure your training seat today."
        text="Batches fill quickly before every semester. Talk to a counsellor to confirm your university's requirements and reserve a seat."
        button="Book a Free Demo"
      />
    </>
  );
}
