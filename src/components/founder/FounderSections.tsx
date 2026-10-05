import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Clapperboard, Compass, Mic, Quote, Rocket, Users, type LucideIcon } from "lucide-react";
import {
  founderClosing, founderCta, founderGallery, founderHero, founderJourney, founderJourneyIntro, founderMeet, founderReels,
  founderRoles, founderTestimonials, founderTestimonialsIntro,
} from "@/data/founder";
import { delay } from "@/components/ui/SectionHeading";
import { FounderJourney } from "./FounderJourney";
import { FounderReels } from "./FounderReels";
import { FounderTestimonials } from "./FounderTestimonials";

/* Founder page sections (/about/founder), in page order. Layout mirrors the reference founder page; colours, fonts and
   buttons are this site's theme. Content: src/data/founder.ts. CSS: the "Founder page" block in globals.css (.fnd-*). */

const roleIcons: Record<string, LucideIcon> = { Rocket, Compass, Users, Mic };

const instagramPath =
  "M12 2.2c3.2 0 3.6 0 4.8.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8C2.4 3.9 3.9 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zm0 4.7a5.1 5.1 0 1 0 0 10.2 5.1 5.1 0 0 0 0-10.2zm0 8.4a3.3 3.3 0 1 1 0-6.6 3.3 3.3 0 0 1 0 6.6zm5.3-9.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z";
const linkedinPath =
  "M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.5H3.5V9h3.6v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z";

const Brand = ({ d }: { d: string }) => (
  <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden><path d={d} /></svg>
);

const ring = (drift: [number, number], duration: string, wait = "0s") =>
  ({ "--drift-x": `${drift[0]}px`, "--drift-y": `${drift[1]}px`, animationDuration: duration, animationDelay: wait }) as CSSProperties;

export function FounderHero() {
  const h = founderHero;
  return (
    <section className="fnd-blue on-dark relative isolate flex min-h-[min(92vh,780px)] flex-col overflow-hidden text-white max-sm:min-h-0">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-r from-ink-950/40 via-ink-950/15 to-transparent" />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <span className="fnd-ring -left-[120px] -top-[110px] size-80 !border-[3px]" style={ring([14, 18], "11s")} />
        <span className="fnd-ring -top-[140px] right-[6%] size-[300px]" style={ring([-12, 14], "8.5s", "-3s")} />
        <span className="fnd-ring -bottom-[90px] left-[24%] size-[200px]" style={ring([12, -14], "7.5s", "-5s")} />
        <span className="fnd-ring -bottom-40 -right-20 size-[380px] !border-[3px] max-sm:hidden" style={ring([-16, -20], "12s", "-7s")} />
        <span className="fnd-dots right-[3%] top-[18%]" />
        <span className="fnd-dots bottom-[8%] left-[2%] !h-[130px] !w-[110px]" />
        {/* eslint-disable-next-line @next/next/no-img-element -- decorative ghost wordmark, no layout impact */}
        <img src="/logo/techcadd-logo-white.png" alt="" loading="lazy" className="absolute right-[4%] top-1/2 w-[min(54%,820px)] -translate-y-1/2 -rotate-[8deg] select-none opacity-[0.07] max-lg:w-[70%] max-sm:w-[92%]" />
      </div>

      <div className="container-x grid flex-1 items-center gap-[clamp(2rem,5vw,4.5rem)] pb-[clamp(3rem,7vw,5.5rem)] pt-[clamp(2.5rem,6vw,4.5rem)] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-[44rem]">
          <p className="grid gap-1 uppercase">
            <strong className="font-display text-[clamp(1.2rem,2vw,1.6rem)] font-bold tracking-[0.16em]">{h.name}</strong>
            <span className="text-[clamp(0.78rem,1.2vw,0.95rem)] font-medium tracking-[0.22em] text-white/72">{h.role}</span>
          </p>
          <span aria-hidden className="mb-6 mt-5.5 block h-[5px] w-[52px] rounded-[3px] bg-accent-400" />
          <h1 className="text-[clamp(2.4rem,5.6vw,4.4rem)] font-extrabold leading-[1.08]">
            <span className="block">{h.title[0]}</span>
            <span className="block">{h.title[1]}</span>
            <span className="text-gradient block">{h.title[2]}</span>
          </h1>
          <span aria-hidden className="my-6 block h-[5px] w-[clamp(160px,24vw,250px)] rounded-[3px] bg-accent-400" />
          <p className="max-w-[34rem] text-[clamp(1rem,1.5vw,1.15rem)] leading-[1.6] text-white/86">{h.lead}</p>
          <ul className="fnd-tags mt-[clamp(2rem,5vw,3.5rem)] flex flex-wrap items-center text-[0.82rem] font-bold uppercase tracking-[0.22em]">
            {h.tags.map((t) => <li key={t} className="inline-flex items-center">{t}</li>)}
          </ul>
        </div>

        <div className="relative w-full max-w-[280px] justify-self-center sm:max-w-[340px] lg:max-w-[440px] lg:justify-self-end">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-white/18 bg-white/[0.04] shadow-[0_40px_90px_-30px_rgb(0_0_0/0.75),0_0_0_10px_rgb(51_114_251/0.08)]">
            <Image src={h.image} alt={h.alt} fill priority placeholder="blur" sizes="(min-width: 1024px) 440px, 340px" className="object-cover object-[50%_22%]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function FounderMeet() {
  const m = founderMeet;
  return (
    <section id="meet" className="relative isolate overflow-hidden bg-white py-[clamp(4.75rem,9vw,8.5rem)]">
      <span aria-hidden className="pointer-events-none absolute left-4 top-[clamp(1rem,5vw,4rem)] -z-10 select-none whitespace-nowrap font-display text-[clamp(4rem,14vw,12rem)] font-extrabold leading-[0.8] tracking-[-0.03em] text-ink-950/5 lg:left-[max(2rem,calc((100vw-80rem)/2+2rem))]">
        {m.ghost}
      </span>
      <div className="container-x grid items-center gap-[clamp(2rem,5vw,4rem)] lg:grid-cols-[0.85fr_1.15fr]">
        <div data-reveal="left" className="w-full max-w-[320px] lg:max-w-[380px]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[34px] border border-brand-600/28 bg-linear-to-br from-brand-50 to-brand-600/18 shadow-[0_40px_90px_rgb(29_83_240/0.18)]">
            <Image src={m.image} alt={m.alt} fill placeholder="blur" sizes="(min-width: 1024px) 380px, 320px" className="object-cover object-[50%_22%]" />
          </div>
        </div>
        <div>
          <h2 data-reveal="up" className="text-[clamp(1.7rem,3.6vw,2.6rem)] font-extrabold uppercase text-ink-950">
            {m.heading} <span className="text-gradient">{founderHero.name}</span>
          </h2>
          <div className="mt-5 space-y-[1.1rem] leading-[1.75] text-ink-700">
            <p data-reveal="up" style={delay(1)}>{m.intro}</p>
            <p data-reveal="up" style={delay(2)}><strong className="text-ink-950">{founderHero.name}</strong> {m.bio}</p>
            <p data-reveal="up" style={delay(3)}>{m.today}</p>
          </div>
          <blockquote data-reveal="up" style={delay(3)} className="my-7 border-l-[3px] border-accent-400 pl-5 font-display text-[clamp(1.05rem,2vw,1.3rem)] font-bold italic leading-normal text-ink-950">
            {m.quote}
          </blockquote>
          <div data-reveal="up" style={delay(4)}>
            <Link href={m.cta.href} className="btn-brand">{m.cta.label} <ArrowRight className="size-4" aria-hidden /></Link>
          </div>
        </div>
      </div>
      <div className="container-x">
        <ul className="mt-[clamp(3rem,6vw,4.5rem)] grid grid-cols-2 gap-px overflow-hidden rounded-[26px] border border-ink-950/10 bg-ink-950/10 lg:grid-cols-4">
          {m.stats.map((s, i) => (
            <li key={s.label} data-reveal="up" style={delay(i)} className="grid gap-1.5 bg-white p-[clamp(1.25rem,2.6vw,1.9rem)] text-center">
              <strong className="font-display text-[clamp(1.6rem,3.4vw,2.4rem)] font-extrabold leading-none text-brand-700">{s.value}</strong>
              <span className="text-[0.82rem] leading-[1.4] text-ink-500">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Two endless rows of on-stage photos sliding in opposite directions. Each track = the photo set repeated, then duplicated (aria-hidden) so -50% loops seamlessly. */
export function FounderGallery() {
  const REPEAT = 3;
  const row = (offset: number) => {
    const set = Array.from({ length: founderGallery.length * REPEAT }, (_, i) => founderGallery[(i + offset) % founderGallery.length]);
    return [...set, ...set];
  };
  return (
    <section aria-label="Gourav Gupta on stage" className="fnd-blue fnd-gal py-[clamp(2.5rem,5vw,4rem)]">
      {[0, 2].map((offset, r) => {
        const tiles = row(offset);
        return (
          <div key={offset} className="fnd-gal-row" data-dir={r === 0 ? "left" : "right"}>
            <ul className="fnd-gal-track">
              {tiles.map((g, i) => {
                const first = i < founderGallery.length;
                return (
                  <li key={i} className="fnd-gal-tile" style={{ aspectRatio: `${g.image.width} / ${g.image.height}` }} aria-hidden={!first || undefined}>
                    <Image src={g.image} alt={first ? g.alt : ""} fill placeholder="blur" sizes="(min-width: 1024px) 420px, 240px" draggable={false} className="select-none object-cover" />
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </section>
  );
}

export function FounderRoles() {
  return (
    <section className="bg-white py-[clamp(4.75rem,9vw,8.5rem)]">
      <div className="container-x">
        <h2 data-reveal="up" className="text-[clamp(1.5rem,3.2vw,2.35rem)] font-extrabold uppercase text-ink-950">
          Four roles, <span className="text-gradient">one purpose</span>
        </h2>
        <ol className="fnd-ribbons mt-[clamp(2.5rem,5vw,3.5rem)]">
          {founderRoles.map((r, i) => {
            const Icon = roleIcons[r.icon];
            return (
              <li key={r.title} data-reveal="up" className="fnd-ribbon" style={{ zIndex: founderRoles.length - i, ...delay(i) }}>
                <span className="fnd-ribbon-num" aria-hidden>{i + 1}</span>
                <span aria-hidden className="my-[1.4rem] grid size-12 place-items-center rounded-[14px] bg-white/85 text-(--ribbon-ink) shadow-[0_6px_16px_-8px_rgb(10_19_48/0.3)] max-[1099px]:mb-4 max-[1099px]:mt-2.5">
                  <Icon className="size-[1.35rem]" />
                </span>
                <span className="mb-1.5 inline-block font-display text-[0.74rem] font-extrabold uppercase tracking-widest text-(--ribbon-ink)">{r.tag}</span>
                <h3 className="mb-2.5 text-[clamp(0.9rem,1.05vw,1.2rem)] font-extrabold uppercase leading-tight text-ink-950">{r.title}</h3>
                <p className="text-[0.92rem] leading-[1.65] text-ink-700">{r.text}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/** No overflow-hidden on this section — it would break the sticky photo stage inside FounderJourney. */
export function FounderJourneySection() {
  const j = founderJourneyIntro;
  return (
    <section aria-labelledby="journey-heading" className="fnd-blue on-dark relative text-white">
      <div className="container-x pb-10 pt-14 lg:pt-20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-400">{j.eyebrow}</p>
        <h2 id="journey-heading" className="mt-3 max-w-[760px] text-[clamp(2rem,4.4vw,3.4rem)] font-extrabold leading-[1.05]">
          {j.title} <span className="text-gradient">{j.highlight}</span>
        </h2>
        <p className="mt-4 max-w-[58ch] leading-[1.65] text-white/65">{j.text}</p>
      </div>
      <FounderJourney chapters={founderJourney} />
    </section>
  );
}

export function FounderClosing() {
  const c = founderClosing;
  return (
    <section className="bg-white py-[clamp(4.75rem,9vw,8.5rem)]">
      <div className="container-x">
        <div data-reveal="up" className="mx-auto max-w-[820px] rounded-[26px] border border-brand-600/16 bg-white p-[clamp(1.75rem,4vw,2.75rem)] text-center shadow-[0_30px_70px_-40px_rgb(10_19_48/0.35)]">
          <h3 className="text-[clamp(1.3rem,2.6vw,1.8rem)] font-extrabold leading-[1.2] text-ink-950">{c.title}</h3>
          <p className="mx-auto mt-4 max-w-[64ch] leading-[1.7] text-ink-700">{c.text}</p>
          <p className="mx-auto mt-3.5 max-w-[64ch] leading-[1.7] text-ink-700">
            {c.values.lead} <em className="font-semibold text-ink-950">{c.values.em}</em>
          </p>
          <blockquote className="mt-6 rounded-[18px] bg-accent-400 px-[1.4rem] py-[1.2rem] font-display text-[clamp(1.02rem,2vw,1.25rem)] font-bold leading-[1.45] text-ink-950">
            “{c.quote}”
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export function FounderTestimonialsSection() {
  const t = founderTestimonialsIntro;
  return (
    <section id="testimonials" className="fnd-blue on-dark relative isolate overflow-hidden py-[clamp(4.75rem,9vw,8.5rem)] text-white">
      <div className="container-x grid items-center gap-[clamp(2.5rem,6vw,5rem)] min-[901px]:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <header className="flex min-w-0 max-w-[720px] flex-col items-start gap-4">
          <span data-reveal="up" className="eyebrow eyebrow-dark"><Quote className="size-3.5" aria-hidden /> {t.eyebrow}</span>
          <h2 data-reveal="up" style={delay(1)} className="text-[clamp(2.05rem,4.4vw,3.5rem)] font-extrabold leading-[1.08]">
            {t.title} <span className="text-gradient">{t.highlight}</span>
          </h2>
          <p data-reveal="up" style={delay(2)} className="max-w-[62ch] text-[clamp(1rem,1.1vw+0.75rem,1.14rem)] leading-[1.7] text-white/66">{t.lead}</p>
          <p data-reveal="up" style={delay(3)} className="max-w-[60ch] text-[0.98rem] leading-[1.75] text-white/66">{t.text}</p>
        </header>
        <div data-reveal="right">
          <FounderTestimonials items={founderTestimonials} />
        </div>
      </div>
    </section>
  );
}

export function FounderReelsSection() {
  const r = founderReels;
  return (
    <section id="reels" className="fnd-reels relative overflow-hidden py-[clamp(4.75rem,9vw,8.5rem)]">
      <div className="container-x">
        <header className="mx-auto flex max-w-[680px] flex-col items-center gap-4 text-center">
          <span data-reveal="up" className="eyebrow"><Clapperboard className="size-3.5" aria-hidden /> {r.eyebrow}</span>
          <h2 data-reveal="up" style={delay(1)} className="text-[clamp(2.05rem,4.4vw,3.5rem)] font-extrabold leading-[1.08] text-ink-950">
            {r.title} <span className="text-gradient">{r.highlight}</span>
          </h2>
          <p data-reveal="up" style={delay(2)} className="max-w-[62ch] text-[clamp(1rem,1.1vw+0.75rem,1.14rem)] leading-[1.7] text-ink-500">{r.text}</p>
        </header>
      </div>
      <FounderReels reels={r.items} />
      <div className="container-x">
        <div className="mt-[clamp(1.75rem,3.5vw,2.5rem)] flex justify-end">
          <a href={r.more.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-display text-[0.95rem] font-bold text-ink-950 shadow-[0_14px_34px_-16px_rgb(10_19_48/0.45)] transition duration-200 hover:-translate-y-0.5 hover:bg-brand-600 hover:text-white">
            <Brand d={instagramPath} /> {r.more.label} <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}

export function FounderConnect() {
  const c = founderCta;
  return (
    <section aria-labelledby="fnd-connect-heading" className="fnd-blue on-dark relative isolate py-[clamp(3.5rem,7vw,5.5rem)] text-center text-white">
      <div className="container-x">
        <h2 id="fnd-connect-heading" data-reveal="up" className="text-[clamp(1.6rem,3.6vw,2.6rem)] font-extrabold uppercase leading-[1.15]">{c.title}</h2>
        <p data-reveal="up" style={delay(1)} className="mx-auto mt-[1.1rem] max-w-[58ch] text-[clamp(1.05rem,1.8vw,1.2rem)] font-semibold">{c.lead}</p>
        <p data-reveal="up" style={delay(2)} className="mx-auto mt-4 max-w-[58ch] text-[0.98rem] leading-[1.65] text-white/74">{c.text}</p>
        <p data-reveal="up" style={delay(3)} className="mt-[1.4rem] font-display text-[clamp(1.15rem,2.2vw,1.45rem)] font-extrabold text-accent-400"><em>{c.motto}</em></p>
        <div data-reveal="up" style={delay(4)} className="mt-[1.9rem] flex flex-wrap justify-center gap-3.5 max-sm:flex-col max-sm:items-stretch">
          <a href={c.instagram} target="_blank" rel="noopener noreferrer" className="btn-primary"><Brand d={instagramPath} /> Follow on Instagram</a>
          <a href={c.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost-dark bg-white/8 backdrop-blur"><Brand d={linkedinPath} /> Connect on LinkedIn</a>
        </div>
        <p data-reveal="up" style={delay(5)} className="mx-auto mt-[2.2rem] max-w-[44ch] border-t border-white/18 pt-[1.4rem] text-[0.95rem] font-semibold text-white/85">{c.signoff}</p>
      </div>
    </section>
  );
}
