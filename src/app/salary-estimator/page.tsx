import type { Metadata } from "next";
import Link from "next/link";
import { GuidanceCta } from "@/components/guidance/GuidanceCta";
import { SalaryEstimator } from "@/components/career/SalaryEstimator";

export const metadata: Metadata = {
  title: "Salary & Career Growth Estimator — IT Salaries in Punjab & NCR",
  description: "Pick a role to see realistic fresher vs 2-year salary ranges across Punjab, Delhi NCR and remote work, and where techcadd graduates get hired. Free, instant.",
  alternates: { canonical: "/salary-estimator" },
};

export default function SalaryEstimatorPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink-950 py-20 text-white md:py-28">
        <div className="bg-grid absolute inset-0 -z-10 opacity-60" aria-hidden />
        <div className="absolute -left-32 top-0 -z-10 size-[28rem] rounded-full bg-brand-600/30 blur-[120px]" aria-hidden />
        <div className="absolute -right-24 bottom-0 -z-10 size-[24rem] rounded-full bg-accent-500/20 blur-[120px]" aria-hidden />
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="text-sm text-ink-300">
            <Link href="/" className="hover:text-white">Home</Link> / <span className="text-white">Salary Estimator</span>
          </nav>
          <span className="eyebrow eyebrow-dark mt-8">Free Tool · No Form Required</span>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            Salary &amp; career <span className="text-gradient">growth estimator.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-300">
            Pick a role to see realistic fresher vs 2-year salary ranges across Punjab and NCR, and exactly where our graduates get hired — all free, all shown instantly.
          </p>
        </div>
      </section>

      <section className="section bg-brand-50/50">
        <div className="container-x"><SalaryEstimator /></div>
      </section>

      <GuidanceCta
        title="Start building your career today."
        text="Talk to a counsellor today. One call is usually enough to know which track fits your degree, your schedule and the job you want."
        button="Book a Free Demo"
      />
    </>
  );
}
