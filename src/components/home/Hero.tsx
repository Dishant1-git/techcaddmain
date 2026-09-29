import Link from "next/link";
import { ArrowRight, BrainCircuit, Briefcase, PlayCircle, Star, TrendingUp } from "lucide-react";
import { heroStats, site } from "@/data/site";
import { Counter } from "@/components/ui/Counter";
import { delay } from "@/components/ui/SectionHeading";

const avatars = ["HK", "AS", "SS", "NT", "RV"];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 pb-16 pt-14 text-white md:pt-20 lg:pb-24">
      {/* Background */}
      <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,#000_30%,transparent_75%)]" aria-hidden />
      <div className="absolute -left-40 top-10 -z-10 size-[32rem] rounded-full bg-brand-600/30 blur-[120px]" aria-hidden />
      <div className="absolute -right-32 bottom-0 -z-10 size-[28rem] rounded-full bg-accent-500/20 blur-[120px]" aria-hidden />

      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Copy — no reveal on H1 so LCP is instant */}
        <div>
          <span className="eyebrow eyebrow-dark">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-accent-500" />
            </span>
            Admissions Open · New AI Batches Every Month
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
            North India&apos;s <span className="text-gradient">Global-Standard</span> IT &amp; AI Training Institute
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-300">
            Master AI, Full-Stack, Data Science, Cybersecurity, Cloud, Digital Marketing and CAD with industry mentors,
            live projects and 100% placement assistance — at branches across Punjab &amp; Chandigarh or live online.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/#demo" className="btn-primary !px-7 !py-3.5 text-base">
              Book a Free Demo <ArrowRight className="size-5" aria-hidden />
            </Link>
            <Link href="/#courses" className="btn-ghost-dark !px-7 !py-3.5 text-base">
              <PlayCircle className="size-5" aria-hidden /> Explore Courses
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <div className="flex -space-x-3">
              {avatars.map((a, i) => (
                <span
                  key={a}
                  className="grid size-11 place-items-center rounded-full border-2 border-ink-950 text-xs font-bold"
                  style={{ background: `hsl(${220 + i * 22} 80% ${55 - i * 3}%)` }}
                >
                  {a}
                </span>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-accent-400 text-accent-400" aria-hidden />
                ))}
                <span className="ml-1.5 font-bold">{site.rating.score}/5</span>
              </div>
              <p className="text-sm text-ink-300">Rated by {site.rating.reviews} students on Google</p>
            </div>
          </div>
        </div>

        {/* Visual composition */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none" data-reveal="zoom">
          <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="grid size-12 place-items-center rounded-2xl bg-linear-to-br from-brand-500 to-brand-700">
                  <BrainCircuit className="size-6" aria-hidden />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-ink-300">Flagship</p>
                  <p className="font-display text-lg font-bold">Generative AI Engineering</p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-300">Live</span>
            </div>

            <div className="mt-6 space-y-4">
              {[
                ["Python & ML Foundations", 100],
                ["LLMs, RAG & Agents", 72],
                ["Capstone AI Product", 38],
              ].map(([label, pct]) => (
                <div key={label as string}>
                  <div className="flex justify-between text-sm">
                    <span className="text-ink-300">{label}</span>
                    <span className="font-semibold">{pct}%</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-linear-to-r from-brand-500 to-accent-400" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-ink-900/80 p-4 font-mono text-[13px] leading-relaxed text-ink-300">
              <span className="text-brand-300">from</span> techcadd <span className="text-brand-300">import</span> career
              <br />
              career.<span className="text-accent-400">launch</span>(skills=<span className="text-emerald-300">&quot;AI&quot;</span>, city=
              <span className="text-emerald-300">&quot;Punjab&quot;</span>)
              <br />
              <span className="text-emerald-300"># → Offer letter received ✓</span>
            </div>
          </div>

          {/* Floating chips */}
          <div className="absolute -bottom-8 -left-4 hidden animate-float rounded-2xl border border-white/10 bg-white p-3 pr-5 text-ink-900 shadow-2xl sm:flex sm:items-center sm:gap-3 lg:-left-10 xl:-left-14">
            <span className="grid size-10 place-items-center rounded-xl bg-emerald-100 text-emerald-600"><Briefcase className="size-5" aria-hidden /></span>
            <div>
              <p className="text-xs text-ink-500">Just placed</p>
              <p className="text-sm font-bold">Harpreet @ Mohali IT</p>
            </div>
          </div>
          <div className="absolute -right-2 -top-8 hidden animate-float rounded-2xl border border-white/10 bg-white p-3 pr-5 text-ink-900 shadow-2xl [animation-delay:1.5s] sm:flex sm:items-center sm:gap-3 lg:-right-8">
            <span className="grid size-10 place-items-center rounded-xl bg-accent-500/15 text-accent-600"><TrendingUp className="size-5" aria-hidden /></span>
            <div>
              <p className="text-xs text-ink-500">Highest package</p>
              <p className="text-sm font-bold">18 LPA</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="container-x mt-20">
        <div className="grid grid-cols-2 divide-white/10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur md:grid-cols-4 md:divide-x">
          {heroStats.map((s, i) => (
            <div key={s.label} data-reveal="up" style={delay(i)} className="p-6 text-center md:p-8">
              <p className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-ink-300">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
