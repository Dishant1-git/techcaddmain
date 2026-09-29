import Link from "next/link";
import { ArrowRight, Award, CheckCircle2, Globe, Users } from "lucide-react";
import { SectionHeading, delay } from "@/components/ui/SectionHeading";
import { Counter } from "@/components/ui/Counter";

const points = [
  "Industry-designed curriculum updated every quarter",
  "Hands-on labs, live projects & internships",
  "Mentors from top IT companies & startups",
  "Placement cell connected to Mohali, Chandigarh & NCR IT hubs",
];

export function About() {
  return (
    <section id="about" className="section relative overflow-hidden bg-white">
      <div className="bg-grid-light absolute inset-0 [mask-image:radial-gradient(ellipse_at_left,#000_20%,transparent_70%)]" aria-hidden />
      <div className="container-x relative grid items-center gap-16 lg:grid-cols-2">
        {/* Visual */}
        <div className="relative" data-reveal="left">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="flex aspect-[4/5] flex-col justify-end rounded-3xl bg-linear-to-br from-brand-600 to-ink-900 p-6 text-white">
                <Award className="mb-auto size-10 text-accent-400" aria-hidden />
                <p className="font-display text-5xl font-extrabold"><Counter value={20} suffix="+" /></p>
                <p className="mt-1 text-sm text-brand-100">Years shaping North India&apos;s tech talent</p>
              </div>
              <div className="card p-5">
                <p className="font-display text-3xl font-extrabold text-ink-900"><Counter value={60} suffix="+" /></p>
                <p className="text-sm text-ink-500">Career courses</p>
              </div>
            </div>
            <div className="space-y-4 pt-10">
              <div className="card p-5">
                <Users className="size-7 text-brand-600" aria-hidden />
                <p className="mt-3 font-display text-3xl font-extrabold text-ink-900"><Counter value={50000} suffix="+" /></p>
                <p className="text-sm text-ink-500">Alumni worldwide</p>
              </div>
              <div className="flex aspect-[4/5] flex-col justify-between rounded-3xl bg-linear-to-br from-accent-500 to-accent-600 p-6 text-white">
                <Globe className="size-10" aria-hidden />
                <div>
                  <p className="font-display text-2xl font-extrabold leading-tight">Global curriculum. Local mentorship.</p>
                  <p className="mt-2 text-sm text-white/85">Aligned with international certification standards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copy */}
        <div>
          <SectionHeading
            align="left"
            eyebrow="About TechCADD"
            title={<>Two decades of turning <span className="text-gradient">learners into professionals</span></>}
            text="Founded in Jalandhar in 2007, TechCADD has grown into one of North India's most trusted names in IT, design and engineering education. We bring international-standard training to Punjab, Chandigarh Tricity and students across Haryana, Himachal, J&K and Delhi NCR."
          />
          <ul className="mt-8 space-y-4">
            {points.map((p, i) => (
              <li key={p} data-reveal="up" style={delay(i + 2)} className="flex items-start gap-3 text-ink-700">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-600" aria-hidden /> {p}
              </li>
            ))}
          </ul>
          <div data-reveal="up" style={delay(6)} className="mt-10 flex flex-wrap gap-4">
            <Link href="/#why-us" className="btn-brand">Why choose us <ArrowRight className="size-4" aria-hidden /></Link>
            <Link href="/#demo" className="btn-ghost">Talk to a counsellor</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
