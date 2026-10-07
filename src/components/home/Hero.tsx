import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight, Cpu, PlayCircle, Star } from "lucide-react";
import { categories, site } from "@/data/site";
import { Icon } from "@/components/ui/Icon";
import { Marquee } from "@/components/ui/Marquee";

const stack = ["Python", "React", "Next.js", "Node.js", "AWS", "Docker", "Kubernetes", "TensorFlow", "LangChain", "PostgreSQL", "Figma", "Kali Linux"];
const command = "techcadd deploy --career";
/** Typed, deleted and cycled in the H1 by ScrollAnimator ([data-type-words]); the first one is server-rendered (LCP). */
const heroWords = ["tech talent", "AI engineers", "full-stack developers", "data analysts", "cloud engineers"];

/** On-load entrance for everything except the H1 (LCP). Pure CSS, skipped for reduced motion. */
const enter = "motion-safe:animate-[fadeUp_0.7s_cubic-bezier(0.22,1,0.36,1)_both]";
const at = (ms: number): CSSProperties => ({ animationDelay: `${ms}ms` });

/**
 * "Career motherboard": a core chip wired to six track nodes. Coordinates are in a 600×600 box — `d` is the PCB trace
 * from the core to the node, x/y the node centre. Tracks come from `categories` (by id), so links/counts stay in site.ts.
 */
const board = [
  { id: "ai", label: "AI & GenAI", x: 300, y: 70, d: "M300 240V110" },
  { id: "cloud", label: "Cloud & DevOps", x: 480, y: 160, d: "M360 275H420L480 215V190" },
  { id: "dev", label: "Full-Stack", x: 480, y: 440, d: "M360 325H420L480 385V410" },
  { id: "cyber", label: "Cybersecurity", x: 300, y: 530, d: "M300 360V490" },
  { id: "data", label: "Data Science", x: 120, y: 440, d: "M240 325H180L120 385V410" },
  { id: "marketing", label: "Marketing", x: 120, y: 160, d: "M240 275H180L120 215V190" },
].map((n) => ({ ...n, cat: categories.find((c) => c.id === n.id)! }));

/** Decorative dead-end traces + their via dots. */
const deco = [
  { d: "M360 300H560", via: [560, 300] },
  { d: "M240 300H40", via: [40, 300] },
  { d: "M330 240V180L390 120V40", via: [390, 40] },
  { d: "M270 360V420L210 480V560", via: [210, 560] },
] as const;

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 pb-14 pt-12 text-white md:pt-16 lg:pb-20">
      {/* Background: grid, glows, slow scan beam */}
      <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,#000_35%,transparent_80%)]" aria-hidden />
      <div className="absolute -left-40 top-10 -z-10 size-[32rem] rounded-full bg-brand-600/30 blur-[120px]" aria-hidden />
      <div className="absolute -right-32 bottom-0 -z-10 size-[28rem] rounded-full bg-accent-500/15 blur-[120px]" aria-hidden />
      <div className="hero-scan absolute inset-0 -z-10 border-t border-brand-400/40 bg-linear-to-b from-brand-400/10 to-transparent to-20%" aria-hidden />

      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy — no animation on the H1 so LCP is instant */}
        <div>
          <Link
            href="/#ai-program"
            style={at(0)}
            className={`${enter} group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1 pl-1 pr-4 text-sm text-ink-300 transition-colors hover:border-brand-400/50 hover:text-white`}
          >
            <span className="rounded-full bg-brand-600 px-2.5 py-0.5 text-xs font-semibold text-white">New</span>
            Generative AI &amp; Agents batch — admissions open
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </Link>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem] xl:text-[3.9rem]">
            Engineering the next generation of{" "}
            <span className="text-gradient block min-h-[1.1em]" data-type-words={heroWords.join("|")}>{heroWords[0]}</span>
          </h1>
          <p style={at(150)} className={`${enter} mt-6 max-w-xl text-lg leading-relaxed text-ink-300`}>
            Industry-grade training in AI, Full-Stack, Cloud, Data &amp; Cybersecurity — built like a real software team with
            sprints, code reviews and production deployments. Train at our North India campuses or live online.
          </p>

          <div style={at(300)} className={`${enter} mt-8 flex flex-wrap gap-4`}>
            <Link href="/#demo" className="btn-primary !px-7 !py-3.5 text-base">
              Book a Free Demo <ArrowRight className="size-5" aria-hidden />
            </Link>
            <Link href="/#courses" className="btn-ghost-dark !px-7 !py-3.5 text-base">
              <PlayCircle className="size-5" aria-hidden /> Explore Programs
            </Link>
          </div>

          {/* Terminal strip: the command types itself, then the result line appears */}
          <div style={at(450)} className={`${enter} mt-10 max-w-md rounded-xl border border-white/10 bg-white/[0.04] p-4 font-mono text-[13px]`} aria-hidden>
            <p className="flex items-center text-ink-300">
              <span className="mr-2 text-emerald-300">~ $</span>
              <span className="hero-type" style={{ "--n": command.length } as CSSProperties}>{command}</span>
              <span className="ml-0.5 h-4 w-2 animate-pulse bg-brand-400" />
            </p>
            <p style={at(3200)} className={`${enter} mt-1.5 text-emerald-300`}>✓ build passed · portfolio shipped · offer letter received</p>
          </div>

          <div style={at(600)} className={`${enter} mt-7 flex items-center gap-3 text-sm text-ink-300`}>
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

        {/* Career motherboard */}
        <div className="relative mx-auto aspect-square w-full max-w-md sm:max-w-lg lg:max-w-none" data-reveal="zoom">
          <div className="absolute inset-[8%] -z-10 rounded-full bg-brand-600/20 blur-3xl" aria-hidden />
          <svg viewBox="0 0 600 600" fill="none" className="absolute inset-0 size-full" aria-hidden>
            {/* Chip pins */}
            {[255, 285, 315, 345].map((p) => (
              <g key={p} className="stroke-brand-400/50" strokeWidth="3" strokeLinecap="round">
                <path d={`M${p} 240v-12M${p} 360v12M240 ${p}h-12M360 ${p}h12`} />
              </g>
            ))}
            {deco.map((t) => (
              <g key={t.d}>
                <path d={t.d} className="stroke-white/10" strokeWidth="1.5" />
                <circle cx={t.via[0]} cy={t.via[1]} r="4" className="fill-ink-950 stroke-white/25" strokeWidth="1.5" />
              </g>
            ))}
            {/* Traces: dim base line + a light pulse travelling from the core to each node */}
            {board.map((n, i) => (
              <g key={n.id}>
                <path d={n.d} className="stroke-brand-400/25" strokeWidth="2" />
                <path d={n.d} pathLength={1} className={`hero-trace ${i % 2 ? "stroke-accent-400" : "stroke-brand-300"}`} strokeWidth="2.5" strokeLinecap="round" style={at(i * 450)} />
              </g>
            ))}
          </svg>

          {/* Core chip with a rotating light border */}
          <div className="absolute left-1/2 top-1/2 size-[20%] -translate-x-1/2 -translate-y-1/2">
            <span className="absolute inset-0 animate-pulse-ring rounded-2xl bg-brand-500/40 motion-reduce:animate-none" aria-hidden />
            <div className="relative size-full overflow-hidden rounded-2xl p-0.5 shadow-[0_0_50px_-5px_rgba(51,114,251,0.8)]">
              <span className="absolute -inset-1/2 animate-spin bg-[conic-gradient(from_0deg,transparent_55%,var(--color-brand-300),var(--color-accent-400))] [animation-duration:4s] motion-reduce:animate-none" aria-hidden />
              <div className="relative grid size-full place-items-center rounded-[0.9rem] bg-ink-900">
                <div className="text-center">
                  <Cpu className="mx-auto size-6 text-brand-300 sm:size-8" aria-hidden />
                  <p className="mt-1 font-mono text-[0.6rem] font-bold tracking-widest text-white sm:text-xs">YOU</p>
                </div>
              </div>
            </div>
          </div>

          {/* Track nodes */}
          {board.map((n, i) => (
            <div key={n.id} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${n.x / 6}%`, top: `${n.y / 6}%` }}>
              <Link
                href={n.cat.href}
                style={at(i * 700)}
                className="group flex animate-float items-center gap-2 whitespace-nowrap rounded-xl border border-white/10 bg-ink-900/95 p-1.5 pr-3 shadow-xl transition-colors hover:border-brand-400/60 motion-reduce:animate-none sm:gap-3 sm:p-2 sm:pr-4"
              >
                <span className="grid size-8 place-items-center rounded-lg bg-brand-600/20 text-brand-300 transition-colors group-hover:bg-brand-600 group-hover:text-white sm:size-10">
                  <Icon name={n.cat.icon} className="size-4 sm:size-5" />
                </span>
                <span>
                  <span className="block text-xs font-bold text-white sm:text-sm">{n.label}</span>
                  <span className="hidden font-mono text-[0.65rem] text-ink-300 sm:block">{n.cat.courses} courses</span>
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Tech ticker */}
      <div className="container-x mt-16">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-ink-500">{"// Tech stack you'll ship with"}</p>
        <Marquee duration="35s">
          {stack.map((t) => (
            <span key={t} className="rounded-md border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-[13px] text-ink-300">{t}</span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
