import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { programs } from "@/data/site";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading, delay } from "@/components/ui/SectionHeading";

const universities = ["IKGPTU", "GNDU", "Panjab University", "LPU", "Chandigarh University", "CT University", "DAV University", "Punjabi University"];
const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Programs as a sticky stack: every program is a full-width, full-height photo panel that pins to the top while the
 * next one slides up over it. Pure CSS (position: sticky) — so no overflow-hidden on this section or the stack wrapper.
 * Sticky is skipped on very short viewports, where a pinned panel would hide its own CTA.
 */
export function Programs() {
  return (
    <section id="programs" className="on-dark bg-ink-950 text-white">
      <div className="container-x flex flex-col justify-between gap-8 py-20 md:py-24 lg:flex-row lg:items-end">
        <SectionHeading
          dark
          align="left"
          eyebrow="Programs for Everyone"
          title={<>Industrial training, after-12th &amp; <span className="text-gradient">certification programs</span></>}
          text="Whether you're a school pass-out, a B.Tech student needing university training, or a professional upskilling — there's a path for you."
        />
        <Link data-reveal="up" href="/#demo" className="btn-primary shrink-0">Get program brochure <ArrowRight className="size-4" aria-hidden /></Link>
      </div>

      <div>
        {programs.map((p, i) => (
          <article
            key={p.title}
            className={`relative isolate h-svh min-h-[34rem] overflow-clip [@media(min-height:34rem)]:sticky [@media(min-height:34rem)]:top-0 ${
              i ? "rounded-t-[2rem] shadow-[0_-30px_60px_rgba(0,0,0,0.65)] sm:rounded-t-[3rem]" : ""
            }`}
          >
            <Image src={p.image} alt={p.alt} fill placeholder="blur" sizes="100vw" className="prog-zoom -z-20 object-cover" />
            <div className="absolute inset-0 -z-10 bg-linear-to-r from-ink-950 via-ink-950/75 to-ink-950/20" aria-hidden />
            <div className="absolute inset-0 -z-10 bg-linear-to-t from-ink-950/90 via-transparent to-ink-950/50" aria-hidden />

            <div className="container-x flex h-full flex-col justify-between pb-12 pt-28 sm:pb-16">
              {/* Counter + progress */}
              <div className="flex items-center gap-4 font-mono text-sm">
                <span className="font-bold text-white">{pad(i + 1)}</span>
                <span className="flex gap-1.5" aria-hidden>
                  {programs.map((q, k) => (
                    <span key={q.title} className={`h-0.5 w-8 rounded-full ${k <= i ? "bg-accent-400" : "bg-white/25"}`} />
                  ))}
                </span>
                <span className="text-ink-300">{pad(programs.length)}</span>
              </div>

              <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
                <div className="max-w-2xl">
                  <p data-reveal="up" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 py-1.5 pl-2 pr-4 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                    <span className="grid size-7 place-items-center rounded-full bg-accent-500"><Icon name={p.icon} className="size-4" /></span>
                    {p.tag}
                  </p>
                  <h3 data-reveal="up" style={delay(1)} className="mt-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">{p.title}</h3>
                  <p data-reveal="up" style={delay(2)} className="mt-5 max-w-xl text-base leading-relaxed text-ink-300 sm:text-lg">{p.text}</p>
                  <ul data-reveal="up" style={delay(3)} className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2"><Check className="size-4 text-accent-400" aria-hidden />{pt}</li>
                    ))}
                  </ul>
                  <div data-reveal="up" style={delay(4)} className="mt-8">
                    <Link href={p.href} className="btn-ghost-dark">{p.cta} <ArrowRight className="size-4" aria-hidden /></Link>
                  </div>
                </div>

                {/* All programs, current one highlighted (desktop) */}
                <ol className="hidden w-72 space-y-3 border-l border-white/15 pl-6 text-sm lg:block" aria-hidden>
                  {programs.map((q, k) => (
                    <li key={q.title} className={k === i ? "relative font-bold text-white" : "text-ink-300/70"}>
                      {k === i && <span className="absolute -left-[1.55rem] top-0 h-full w-0.5 bg-accent-400" />}
                      <span className="mr-3 font-mono text-xs">{pad(k + 1)}</span>{q.title}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="container-x py-16 md:py-20">
        <div data-reveal="up" className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
          <p className="text-center text-sm font-semibold text-ink-300">
            Industrial training accepted by students of leading North India universities
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {universities.map((u) => (
              <span key={u} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white">{u}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
