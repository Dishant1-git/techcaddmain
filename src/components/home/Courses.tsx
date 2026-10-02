import type { ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import {
  ArrowRight, Briefcase, CalendarClock, Cloud, Code2, Database, GraduationCap, Handshake, Megaphone, MonitorPlay,
  PenTool, Plus, Rocket, Search, Star, Users,
} from "lucide-react";
import { courseBento as b, site } from "@/data/site";
import { Counter } from "@/components/ui/Counter";
import { SectionHeading, delay } from "@/components/ui/SectionHeading";

/** One bento cell. Reveal lives on the wrapper, hover lift on the inner element (see CLAUDE.md "Animations"). */
function Tile({
  href, reveal, i, className = "", surface = "", children,
}: { href?: string; reveal: string; i: number; className?: string; surface?: string; children: ReactNode }) {
  // overflow-clip (not hidden): hidden would make the tile a scroll container and break the view() timeline of .bento-pan
  const cls = `group relative isolate block h-full overflow-clip rounded-2xl transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-20px_rgba(15,23,42,0.35)] ${surface}`;
  return (
    <div data-reveal={reveal} style={delay(i, 70)} className={className}>
      {href ? <Link href={href} className={cls}>{children}</Link> : <div className={cls}>{children}</div>}
    </div>
  );
}

/** Cover photo: drifts with the scroll (.bento-pan) and zooms a little on hover. */
function Cover({ src, alt, position = "object-center" }: { src: StaticImageData; alt: string; position?: string }) {
  return (
    <div className="absolute inset-0 -z-10 transition-transform duration-700 group-hover:scale-105">
      <Image src={src} alt={alt} fill placeholder="blur" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className={`bento-pan object-cover ${position}`} />
    </div>
  );
}

const Dot = () => <span className="mt-1.5 size-2.5 shrink-0 rounded-full border-2 border-accent-500" aria-hidden />;

export function Courses() {
  return (
    <section id="courses" className="section bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Featured Courses"
          title={<>Programs built for <span className="text-gradient">today&apos;s jobs</span></>}
          text="Every course includes AI tools, live projects, certification and placement support."
        />

        <div className="mt-12 grid auto-rows-[13rem] gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[10rem_14rem_12rem_12rem]">
          {/* Full-stack — tall photo, text on top */}
          <Tile href={b.dev.href} reveal="left" i={0} className="row-span-2 lg:col-start-1 lg:row-start-1">
            <Cover src={b.dev.image} alt={b.dev.alt} position="object-bottom" />
            <div className="absolute inset-x-0 top-0 -z-10 h-2/3 bg-linear-to-b from-white via-white/85 to-transparent" aria-hidden />
            <div className="p-6">
              <h3 className="flex gap-2 text-2xl font-bold text-ink-900"><Dot />{b.dev.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-700">{b.dev.text}</p>
            </div>
            <div className="animate-float absolute bottom-6 right-6 flex items-center gap-3 rounded-xl border border-white/60 bg-white/85 px-4 py-3 shadow-xl backdrop-blur-md">
              <span className="grid size-9 place-items-center rounded-full bg-accent-500 text-white"><Code2 className="size-4" aria-hidden /></span>
              <span>
                <span className="block text-sm font-bold text-ink-900">{b.dev.chip.title}</span>
                <span className="block text-xs text-ink-500">{b.dev.chip.meta}</span>
              </span>
            </div>
          </Tile>

          {/* Tagline */}
          <Tile reveal="down" i={1} surface="bg-slate-100" className="lg:col-start-2 lg:row-start-1">
            <div className="flex h-full flex-col items-center justify-center gap-3 p-5 text-center">
              <span className="rounded-full border border-ink-950/10 bg-white px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-ink-700">{b.tagline.pill}</span>
              <span className="flex items-center gap-2 text-accent-600" aria-hidden>
                <GraduationCap className="size-7" /><Plus className="size-4 text-ink-900" /><Briefcase className="size-7" />
              </span>
              <p className="max-w-[12rem] text-lg font-medium leading-snug text-ink-900">{b.tagline.text}</p>
            </div>
          </Tile>

          {/* AI & Data — solid brand card with a framed photo rising from the bottom */}
          <Tile href={b.ai.href} reveal="zoom" i={2} surface="bg-brand-600 on-dark" className="lg:col-start-2 lg:row-start-2">
            <div className="px-6 pt-6 text-center text-white">
              <h3 className="text-2xl font-bold">{b.ai.title}</h3>
              <p className="mx-auto mt-1.5 max-w-[16rem] text-sm text-brand-100">{b.ai.text}</p>
            </div>
            <div className="absolute inset-x-10 -bottom-2 top-[52%] overflow-hidden rounded-t-xl border-4 border-b-0 border-white/90 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
              <Image src={b.ai.image} alt={b.ai.alt} fill placeholder="blur" sizes="(min-width: 640px) 320px, 80vw" className="object-cover" />
            </div>
          </Tile>

          {/* Cyber & Cloud — tall photo, text at the bottom */}
          <Tile href={b.cyber.href} reveal="right" i={3} surface="on-dark" className="row-span-2 lg:col-start-3 lg:row-start-1">
            <Cover src={b.cyber.image} alt={b.cyber.alt} />
            <div className="absolute inset-0 -z-10 bg-linear-to-t from-ink-950 via-ink-950/60 to-transparent" aria-hidden />
            <div className="flex h-full flex-col justify-end p-6 text-white">
              <h3 className="flex gap-2 text-2xl font-bold"><Dot />{b.cyber.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-300">{b.cyber.text}</p>
            </div>
          </Tile>

          {/* Digital marketing — glass mini card */}
          <Tile href={b.marketing.href} reveal="left" i={4} surface="bg-linear-to-br from-accent-400/20 via-slate-100 to-brand-100" className="lg:col-start-1 lg:row-start-3">
            <div className="flex h-full flex-col items-center justify-center gap-3 p-5 text-center">
              <div className="rounded-xl border border-white/70 bg-white/70 px-4 py-3 text-left shadow-lg backdrop-blur-md transition-transform duration-500 group-hover:-rotate-2">
                <div className="flex items-center gap-2">
                  {[Search, Megaphone, PenTool].map((I, k) => (
                    <span key={k} className="grid size-7 place-items-center rounded-md bg-ink-900 text-white"><I className="size-3.5" aria-hidden /></span>
                  ))}
                  <span className="ml-2 text-xs font-bold text-ink-900">{b.marketing.label}</span>
                </div>
                <h3 className="mt-3 text-sm font-bold text-ink-900">{b.marketing.title}</h3>
                <p className="text-xs text-ink-700">{b.marketing.text}</p>
              </div>
              <p className="text-lg font-medium leading-snug text-ink-900">{b.marketing.caption}</p>
            </div>
          </Tile>

          {/* Two stat cards */}
          <div className="grid grid-cols-2 gap-3 lg:col-start-2 lg:row-start-3">
            {b.stats.map((s, k) => {
              const I = k === 0 ? Handshake : Rocket;
              return (
                <Tile key={s.heading} reveal="up" i={5 + k} surface="bg-slate-100">
                  <div className="flex h-full flex-col items-center justify-center gap-1.5 p-4 text-center">
                    <h3 className="text-sm font-bold text-ink-900">{s.heading}</h3>
                    <I className="size-7 text-accent-600" aria-hidden />
                    <p className="font-display text-4xl font-bold text-ink-900"><Counter value={s.value} suffix={s.suffix} /></p>
                    <p className="text-xs leading-snug text-ink-500">{s.note}</p>
                  </div>
                </Tile>
              );
            })}
          </div>

          {/* Tools */}
          <Tile href={b.tools.href} reveal="right" i={7} surface="bg-slate-100" className="lg:col-start-3 lg:row-start-3">
            <div className="flex h-full flex-col items-center justify-center p-5 text-center">
              <h3 className="text-xl font-bold text-ink-900">{b.tools.title}</h3>
              <p className="mt-1.5 max-w-[14rem] text-sm text-ink-500">{b.tools.text}</p>
              <div className="mt-5 flex gap-6 text-ink-500" aria-hidden>
                {[Code2, Database, Cloud].map((I, k) => (
                  <I key={k} className="size-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:text-brand-600" style={{ transitionDelay: `${k * 60}ms` }} />
                ))}
              </div>
            </div>
          </Tile>

          {/* Rating */}
          <Tile href={b.rating.href} reveal="left" i={8} surface="bg-slate-100" className="lg:col-start-1 lg:row-start-4">
            <div className="absolute inset-y-0 right-0 -z-10 w-3/5 transition-transform duration-700 group-hover:scale-105">
              <Image src={b.rating.image} alt={b.rating.alt} fill placeholder="blur" sizes="(min-width: 640px) 300px, 60vw" className="bento-pan object-cover" />
              <div className="absolute inset-0 bg-linear-to-r from-slate-100 via-slate-100/60 to-transparent" aria-hidden />
            </div>
            <div className="flex h-full flex-col justify-center p-6">
              <h3 className="text-lg font-bold text-ink-900">{b.rating.title}</h3>
              <p className="font-display text-5xl font-bold text-accent-600">
                <Counter value={Number(site.rating.score)} decimals={1} /><span className="text-2xl text-ink-500">/5</span>
              </p>
              <p className="mt-1 text-sm text-ink-700">{site.rating.reviews} reviews · {b.rating.note}</p>
            </div>
          </Tile>

          {/* Flexible batches — concentric rings */}
          <Tile reveal="up" i={9} surface="bg-slate-100" className="lg:col-start-2 lg:row-start-4">
            <div className="absolute -right-24 top-1/2 -z-10 -translate-y-1/2" aria-hidden>
              {[26, 20, 14, 8].map((s) => (
                <span key={s} className="absolute top-1/2 -translate-y-1/2 rounded-full border border-ink-950/10 transition-transform duration-700 group-hover:scale-110" style={{ width: `${s}rem`, height: `${s}rem`, right: `${(26 - s) / 2}rem` }} />
              ))}
            </div>
            <div className="flex h-full flex-col justify-center p-6">
              <div className="flex gap-3 text-ink-700" aria-hidden>
                <Users className="size-5" /><MonitorPlay className="size-5" /><CalendarClock className="size-5" />
              </div>
              <h3 className="mt-3 text-xl font-bold text-accent-600">{b.flexible.title}</h3>
              <p className="mt-1.5 max-w-[15rem] text-sm leading-relaxed text-ink-700">{b.flexible.text}</p>
            </div>
          </Tile>

          {/* Placement support — photo with dark overlay */}
          <Tile href={b.support.href} reveal="right" i={10} surface="on-dark" className="lg:col-start-3 lg:row-start-4">
            <Cover src={b.support.image} alt={b.support.alt} position="object-right" />
            <div className="absolute inset-0 -z-10 bg-linear-to-r from-ink-950/95 via-ink-950/70 to-ink-950/10" aria-hidden />
            <div className="flex h-full flex-col justify-center p-6 text-white">
              <div className="flex gap-0.5 text-accent-400" aria-hidden>
                {Array.from({ length: 5 }, (_, k) => <Star key={k} className="size-3 fill-current" />)}
              </div>
              <h3 className="mt-1.5 text-xl font-bold">{b.support.title}</h3>
              <span className="mt-2 w-fit rounded-full bg-white px-3 py-1 text-xs font-bold text-ink-900">{b.support.pill}</span>
              <p className="mt-3 max-w-[15rem] text-sm leading-snug text-ink-300">{b.support.text}</p>
            </div>
          </Tile>
        </div>

        <div data-reveal="up" className="mt-10 text-center">
          <Link href="/courses" className="btn-brand">Browse all courses <ArrowRight className="size-4" aria-hidden /></Link>
        </div>
      </div>
    </section>
  );
}
