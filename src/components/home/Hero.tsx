import Link from "next/link";
import {
  ArrowRight,
  Award,
  Briefcase,
  Building2,
  CheckCircle2,
  GitBranch,
  PlayCircle,
  Star,
  Terminal,
  TrendingUp,
  Users,
} from "lucide-react";
import { heroStats, site } from "@/data/site";
import { Counter } from "@/components/ui/Counter";
import { delay } from "@/components/ui/SectionHeading";

const stack = ["Python", "React", "Next.js", "Node.js", "AWS", "Docker", "TensorFlow", "LangChain"];
const statIcons = [Award, Users, Building2, GitBranch];
const pipeline = [
  { label: "Learn", done: true },
  { label: "Build", done: true },
  { label: "Deploy", done: true },
  { label: "Get Hired", done: false },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 pb-14 pt-12 text-white md:pt-16 lg:pb-20">
      {/* Background: grid + glows + top beam */}
      <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,#000_35%,transparent_80%)]" aria-hidden />
      <div className="absolute -left-40 top-10 -z-10 size-[32rem] rounded-full bg-brand-600/30 blur-[120px]" aria-hidden />
      <div className="absolute -right-32 bottom-0 -z-10 size-[28rem] rounded-full bg-accent-500/15 blur-[120px]" aria-hidden />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-linear-to-r from-transparent via-brand-400/60 to-transparent" aria-hidden />

      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy — no reveal on H1 so LCP is instant */}
        <div>
          <Link
            href="/#ai-program"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1 pl-1 pr-4 text-sm text-ink-300 transition-colors hover:border-brand-400/50 hover:text-white"
          >
            <span className="rounded-full bg-brand-600 px-2.5 py-0.5 text-xs font-semibold text-white">New</span>
            Generative AI &amp; Agents batch — admissions open
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </Link>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem] xl:text-[3.9rem]">
            Engineering the next generation of <span className="text-gradient">tech talent</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-300">
            Industry-grade training in AI, Full-Stack, Cloud, Data &amp; Cybersecurity — built like a real software team with
            sprints, code reviews and production deployments. Train at our North India campuses or live online.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/#demo" className="btn-primary !px-7 !py-3.5 text-base">
              Book a Free Demo <ArrowRight className="size-5" aria-hidden />
            </Link>
            <Link href="/#courses" className="btn-ghost-dark !px-7 !py-3.5 text-base">
              <PlayCircle className="size-5" aria-hidden /> Explore Programs
            </Link>
          </div>

          {/* Tech stack */}
          <div className="mt-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-500">{"// Tech stack you'll ship with"}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {stack.map((t) => (
                <li
                  key={t}
                  className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[13px] text-ink-300 transition-colors hover:border-brand-400/50 hover:text-white"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex items-center gap-3 text-sm text-ink-300">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-accent-400 text-accent-400" aria-hidden />
              ))}
            </div>
            <span>
              <strong className="text-white">{site.rating.score}/5</strong> from {site.rating.reviews} Google reviews
            </span>
          </div>
        </div>

        {/* IDE window */}
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none" data-reveal="zoom">
          <div className="absolute -inset-px -z-10 rounded-2xl bg-linear-to-br from-brand-500/50 via-transparent to-accent-500/40 blur-sm" aria-hidden />
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-900/90 shadow-2xl backdrop-blur-xl">
            {/* Title bar */}
            <div className="flex items-center gap-3 border-b border-white/10 bg-ink-950/60 px-4 py-3">
              <div className="flex gap-1.5" aria-hidden>
                <span className="size-3 rounded-full bg-[#ff5f57]" />
                <span className="size-3 rounded-full bg-[#febc2e]" />
                <span className="size-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex gap-1 font-mono text-xs">
                <span className="rounded-md bg-white/10 px-3 py-1 text-white">career.py</span>
                <span className="hidden px-3 py-1 text-ink-500 sm:inline">deploy.yml</span>
                <span className="hidden px-3 py-1 text-ink-500 sm:inline">README.md</span>
              </div>
            </div>

            {/* Code */}
            <pre className="overflow-x-auto px-4 py-5 font-mono text-[13px] leading-7 text-ink-300 sm:text-sm">
              <code>
                <Line n={1}><K>from</K> techcadd <K>import</K> Mentor, LiveProject</Line>
                <Line n={2}> </Line>
                <Line n={3}><K>class</K> <F>Developer</F>:</Line>
                <Line n={4}>    skills = [<S>&quot;AI&quot;</S>, <S>&quot;Cloud&quot;</S>, <S>&quot;Full-Stack&quot;</S>]</Line>
                <Line n={5}> </Line>
                <Line n={6}>    <K>def</K> <F>train</F>(self, mentor: Mentor):</Line>
                <Line n={7}>        self.portfolio += LiveProject.<F>ship</F>(<A>count</A>=<N>5</N>)</Line>
                <Line n={8}>        <K>return</K> self.<F>interview</F>(<A>ready</A>=<N>True</N>)</Line>
                <Line n={9}> </Line>
                <Line n={10}><C># → Offer letter received ✓</C><span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-brand-400" aria-hidden /></Line>
              </code>
            </pre>

            {/* CI/CD pipeline */}
            <div className="border-t border-white/10 bg-ink-950/50 px-4 py-4">
              <div className="flex items-center justify-between font-mono text-xs text-ink-500">
                <span className="flex items-center gap-2"><Terminal className="size-3.5" aria-hidden /> career-pipeline</span>
                <span className="text-emerald-300">● running</span>
              </div>
              <ol className="mt-3 grid grid-cols-4 gap-2">
                {pipeline.map((s) => (
                  <li
                    key={s.label}
                    className={`flex items-center justify-center gap-1.5 rounded-lg border px-2 py-2 text-xs font-medium ${
                      s.done ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300" : "border-accent-400/30 bg-accent-500/10 text-accent-400"
                    }`}
                  >
                    {s.done ? <CheckCircle2 className="size-3.5 shrink-0" aria-hidden /> : <span className="size-2 shrink-0 animate-ping rounded-full bg-accent-400" />}
                    <span className="truncate">{s.label}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Floating chips */}
          <div className="absolute -bottom-7 -left-4 hidden animate-float items-center gap-3 rounded-2xl border border-white/10 bg-white p-3 pr-5 text-ink-900 shadow-2xl sm:flex lg:-left-10">
            <span className="grid size-10 place-items-center rounded-xl bg-emerald-100 text-emerald-600"><Briefcase className="size-5" aria-hidden /></span>
            <div>
              <p className="text-xs text-ink-500">Just placed</p>
              <p className="text-sm font-bold">Harpreet @ Mohali IT</p>
            </div>
          </div>
          <div className="absolute -right-2 -top-7 hidden animate-float items-center gap-3 rounded-2xl border border-white/10 bg-white p-3 pr-5 text-ink-900 shadow-2xl [animation-delay:1.5s] sm:flex lg:-right-6">
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
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4">
          {heroStats.map((s, i) => {
            const SIcon = statIcons[i % statIcons.length];
            return (
              <div key={s.label} data-reveal="up" style={delay(i)} className="flex items-center gap-4 bg-ink-950 p-5 md:p-6">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-brand-400/20 bg-brand-600/15 text-brand-300">
                  <SIcon className="size-5" aria-hidden />
                </span>
                <div>
                  <p className="font-display text-2xl font-extrabold text-white sm:text-3xl">
                    <Counter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-sm text-ink-300">{s.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* Tiny syntax-highlight helpers for the IDE mockup */
function Line({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <span className="block whitespace-pre">
      <span className="mr-4 inline-block w-5 select-none text-right text-ink-500/60">{n}</span>
      {children}
    </span>
  );
}
const K = ({ children }: { children: React.ReactNode }) => <span className="text-brand-300">{children}</span>;
const F = ({ children }: { children: React.ReactNode }) => <span className="text-accent-400">{children}</span>;
const S = ({ children }: { children: React.ReactNode }) => <span className="text-emerald-300">{children}</span>;
const N = ({ children }: { children: React.ReactNode }) => <span className="text-violet-300">{children}</span>;
const A = ({ children }: { children: React.ReactNode }) => <span className="text-sky-300">{children}</span>;
const C = ({ children }: { children: React.ReactNode }) => <span className="italic text-ink-500">{children}</span>;
