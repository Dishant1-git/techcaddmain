import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { heroStats, site } from "@/data/site";
import { about } from "@/data/about";
import { Icon } from "@/components/ui/Icon";
import { Counter } from "@/components/ui/Counter";
import { SectionHeading, delay } from "@/components/ui/SectionHeading";
import { Breadcrumb } from "@/components/course/Breadcrumb";
import { CourseSection } from "@/components/course/CourseSection";
import { DemoForm } from "@/components/home/DemoForm";

/* About page sections, in page order. Site theme: white / bg-brand-50/50 / dark bg-ink-950 rhythm.
   Hover transforms sit on inner elements wherever the wrapper has data-reveal or a tr-* scroll animation. */

const num = (i: number) => String(i + 1).padStart(2, "0");

const darkDecor = (
  <>
    <div aria-hidden className="bg-grid absolute inset-0 -z-10 opacity-60" />
    <div aria-hidden className="absolute -right-40 top-0 -z-10 size-[30rem] rounded-full bg-brand-600/25 blur-[120px]" />
  </>
);

/** Hero — dark, single column, stats bar. No data-reveal on the H1 (LCP). */
export function AboutHero() {
  return (
    <section id="about-hero" aria-labelledby="about-hero-title" className="on-dark relative isolate overflow-hidden bg-ink-950 pb-16 pt-10 text-white md:pb-20 md:pt-14">
      {darkDecor}
      <div aria-hidden className="absolute -left-40 bottom-0 -z-10 size-[26rem] rounded-full bg-accent-500/15 blur-[120px]" />
      <div className="container-x">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About techcadd" }]} />
        <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="eyebrow eyebrow-dark">{about.hero.eyebrow} · Since 2007</span>
            <h1 id="about-hero-title" className="mt-6 text-4xl font-extrabold leading-[1.05] text-balance sm:text-5xl lg:text-6xl">
              {about.hero.lead} <span className="text-gradient">{about.hero.highlight}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-300">{about.hero.text}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="#get-started" className="btn-primary">Book Free Demo <ArrowRight className="size-4" aria-hidden /></Link>
              <Link href="/courses" className="btn-ghost-dark">Browse all courses</Link>
            </div>
          </div>
          <figure className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-brand-900/50">
            <Image src={about.images.hero.src} alt={about.images.hero.alt} placeholder="blur" priority sizes="(min-width: 1024px) 560px, 100vw" className="aspect-[4/3] w-full object-cover" />
            <figcaption className="absolute bottom-4 left-4 rounded-full bg-ink-950/80 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur">{about.images.hero.caption}</figcaption>
          </figure>
        </div>
        <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 lg:grid-cols-4">
          {heroStats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse bg-ink-950/80 p-6 sm:p-8">
              <dt className="mt-1 text-sm text-ink-300">{s.label}</dt>
              <dd className="font-display text-3xl font-extrabold sm:text-4xl"><Counter value={s.value} suffix={s.suffix} /></dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/** What we teach — chip cloud of disciplines. */
export function AboutTeach() {
  return (
    <CourseSection id="what-we-teach" className="bg-white">
      <SectionHeading id="what-we-teach-title" eyebrow="What we teach" title={<>Sixteen disciplines, <span className="text-gradient">one campus</span></>} text="From artificial intelligence to CAD/CAM — the skills North India's employers ask for, taught under one roof." />
      <ul className="mx-auto mt-12 flex max-w-5xl flex-wrap justify-center gap-3">
        {about.teach.map((t, i) => (
          <li key={t} data-reveal="zoom" style={delay(i, 40)}>
            <span className="card card-hover block !rounded-full px-5 py-2.5 text-sm font-semibold text-ink-900">{t}</span>
          </li>
        ))}
      </ul>
    </CourseSection>
  );
}

/** Ecosystem — copy + checklist on the left, Learn / Implement / Grow pillars on the right. */
export function AboutEcosystem() {
  return (
    <CourseSection id="ecosystem" className="bg-brand-50/50">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading id="ecosystem-title" align="left" eyebrow="More than training" title={<>A skill-building <span className="text-gradient">ecosystem</span></>} text={about.ecosystem.text} />
          <ul className="mt-8 space-y-4">
            {about.ecosystem.points.map((p, i) => (
              <li key={p} data-reveal="up" style={delay(i + 2)} className="flex items-start gap-3 text-ink-700">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-600" aria-hidden /> {p}
              </li>
            ))}
          </ul>
        </div>
        <ol aria-label="Learn, implement and grow" className="space-y-5">
          {about.ecosystem.pillars.map((p, i) => (
            <li key={p.title} className="tr-right" style={{ marginLeft: `${i * 1.5}rem` }}>
              <div className="card card-hover flex items-center gap-5 p-6">
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-linear-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-600/25"><Icon name={p.icon} className="size-6" /></span>
                <div>
                  <h3 className="text-xl font-bold text-ink-900">{p.title}</h3>
                  <p className="mt-1 text-ink-700">{p.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <ul aria-label="Photos from techcadd workshops and campus sessions" className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
        {about.images.ecosystem.map((img, i) => (
          <li key={img.alt} data-reveal="up" style={delay(i)}>
            <div className="group overflow-hidden rounded-3xl shadow-lg shadow-ink-900/10">
              <Image src={img.src} alt={img.alt} placeholder="blur" sizes="(min-width: 1024px) 300px, 50vw" className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
          </li>
        ))}
      </ul>
    </CourseSection>
  );
}

/** Why it matters — scroll-filled statement + three reasons. */
export function AboutMatters() {
  return (
    <CourseSection id="why-it-matters" className="bg-white">
      <span data-reveal="up" className="eyebrow">Why it matters</span>
      <h2 id="why-it-matters-title" className="mt-5 text-2xl font-bold text-ink-900 sm:text-3xl">Preparing learners for a changing digital world</h2>
      <p className="tr-fill mt-8 max-w-5xl font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">{about.matters.statement}</p>
      <div data-reveal="zoom" className="mt-12 overflow-hidden rounded-3xl shadow-lg shadow-ink-900/10">
        <Image src={about.images.matters.src} alt={about.images.matters.alt} placeholder="blur" sizes="(min-width: 1280px) 1216px, 100vw" className="aspect-[16/9] w-full object-cover md:aspect-[21/9]" />
      </div>
      <ul className="mt-14 grid gap-6 md:grid-cols-3">
        {about.matters.points.map((p, i) => (
          <li key={p.title} data-reveal="up" style={delay(i)}>
            <div className="card card-hover h-full p-7">
              <span className="grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-700"><Icon name={p.icon} className="size-6" /></span>
              <h3 className="mt-5 text-lg font-bold text-ink-900">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-700">{p.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </CourseSection>
  );
}

/** Who we teach — six numbered cards. */
export function AboutAudience() {
  return (
    <CourseSection id="who-we-teach" className="bg-brand-50/50">
      <SectionHeading id="who-we-teach-title" eyebrow="Who we teach" title={<>Learning for every stage of the <span className="text-gradient">career journey</span></>} />
      <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {about.audience.map((a, i) => (
          <li key={a.title} className="tr-rise">
            <div className="card card-hover group relative h-full overflow-hidden p-7">
              <span aria-hidden className="absolute -right-2 -top-5 font-display text-8xl font-extrabold text-brand-50 transition-colors duration-300 group-hover:text-brand-100">{num(i)}</span>
              <span className="relative grid size-11 place-items-center rounded-full bg-brand-600 font-display text-sm font-extrabold text-white">{num(i)}</span>
              <h3 className="relative mt-5 text-lg font-bold text-ink-900">{a.title}</h3>
              <p className="relative mt-2 leading-relaxed text-ink-700">{a.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </CourseSection>
  );
}

/** Learn → Practice → Build → Grow — four steps on a rail that fills on scroll. */
export function AboutJourney() {
  return (
    <CourseSection id="learning-journey" className="bg-white">
      <SectionHeading id="learning-journey-title" eyebrow="From classroom to practical experience" title={<>Learn. Practice. Build. <span className="text-gradient">Grow.</span></>} text="The same four steps run through every course, so skills turn into experience." />
      <ol className="tr-rail relative mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <span aria-hidden className="absolute left-[12.5%] right-[12.5%] top-10 hidden h-1 rounded-full bg-brand-100 lg:block" />
        <span aria-hidden className="tr-rail-x absolute left-[12.5%] right-[12.5%] top-10 hidden h-1 rounded-full bg-accent-500 lg:block" />
        {about.journey.map((s, i) => (
          <li key={s.title} data-reveal="zoom" style={delay(i, 140)} className="relative text-center">
            <span className="relative mx-auto grid size-20 place-items-center rounded-full border border-brand-100 bg-white text-brand-700 shadow-lg shadow-brand-600/10">
              <Icon name={s.icon} className="size-7" />
              <span className="absolute -right-1 -top-1 grid size-7 place-items-center rounded-full bg-accent-400 text-xs font-extrabold text-ink-950">{i + 1}</span>
            </span>
            <h3 className="mt-6 text-xl font-bold text-ink-900">{s.title}</h3>
            <p className="mx-auto mt-2 max-w-xs text-ink-700">{s.text}</p>
          </li>
        ))}
      </ol>
    </CourseSection>
  );
}

/** The difference — dark bento; first tile is the large brand-gradient one. */
export function AboutDifference() {
  return (
    <CourseSection id="difference" className="on-dark bg-ink-950 text-white" decor={darkDecor}>
      <SectionHeading id="difference-title" dark eyebrow="The difference" title={<>What makes <span className="text-gradient">techcadd different?</span></>} />
      <ul className="mt-14 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {about.difference.map((d, i) => (
          <li key={d.title} className={`tr-rise ${i === 0 ? "sm:col-span-2 lg:row-span-2" : ""} ${i === 3 ? "sm:col-span-2" : ""}`}>
            {i === 0 ? (
              <div className="group relative flex h-full flex-col justify-end overflow-hidden rounded-3xl bg-linear-to-br from-brand-500 to-brand-800 p-8">
                <span aria-hidden className="absolute -right-8 -top-8 text-white/10 transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110"><Icon name={d.icon} className="size-48" /></span>
                <span className="relative grid size-14 place-items-center rounded-2xl bg-white/15"><Icon name={d.icon} className="size-7" /></span>
                <h3 className="relative mt-6 text-2xl font-extrabold">{d.title}</h3>
                <p className="relative mt-2 max-w-sm text-brand-100">{d.text}</p>
              </div>
            ) : (
              <div className="group h-full rounded-3xl border border-white/10 bg-white/5 p-6 transition-colors duration-300 hover:border-brand-400/50 hover:bg-white/10">
                <span className="grid size-11 place-items-center rounded-xl bg-brand-600/25 text-brand-200 transition-transform duration-300 group-hover:scale-110"><Icon name={d.icon} className="size-5" /></span>
                <h3 className="mt-5 font-bold">{d.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-300">{d.text}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </CourseSection>
  );
}

/** What you can learn — four domain cards with their course lists. */
export function AboutDomains() {
  return (
    <CourseSection id="what-you-can-learn" className="bg-white">
      <SectionHeading id="what-you-can-learn-title" eyebrow="What you can learn" title={<>Building skills across <span className="text-gradient">technology domains</span></>} />
      <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {about.domains.map((d, i) => (
          <li key={d.title} data-reveal="up" style={delay(i)}>
            <div className="card card-hover flex h-full flex-col p-7">
              <span className="grid size-12 place-items-center rounded-2xl bg-linear-to-br from-brand-500 to-brand-700 text-white"><Icon name={d.icon} className="size-6" /></span>
              <h3 className="mt-5 text-lg font-bold text-ink-900">{d.title}</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-ink-700">
                {d.items.map((it) => (
                  <li key={it} className="flex items-start gap-2.5"><span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-500" />{it}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
      <div data-reveal="up" className="mt-12 text-center">
        <Link href="/courses" className="btn-brand">Browse all courses <ArrowRight className="size-4" aria-hidden /></Link>
      </div>
    </CourseSection>
  );
}

/** Our approach — three principles. */
export function AboutApproach() {
  return (
    <CourseSection id="approach" className="bg-brand-50/50">
      <SectionHeading id="approach-title" eyebrow="Our approach" title={<>Practical. Future-focused. <span className="text-gradient">Career-oriented.</span></>} />
      <ol className="mt-14 grid gap-6 md:grid-cols-3">
        {about.approach.map((a, i) => (
          <li key={a.title} className="tr-rise">
            <div className="card card-hover h-full p-8">
              <span aria-hidden className="font-display text-5xl font-extrabold text-gradient">{num(i)}</span>
              <h3 className="mt-4 text-2xl font-bold text-ink-900">{a.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-700">{a.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </CourseSection>
  );
}

/** Industry engagement — sticky copy + four engagement rows. */
export function AboutIndustry() {
  return (
    <CourseSection id="industry" overflow="overflow-x-clip" className="bg-white">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading id="industry-title" align="left" eyebrow="Industry engagement" title={<>Connecting education <span className="text-gradient">with industry</span></>} text={about.industry.text} />
          <div data-reveal="up" className="mt-8 overflow-hidden rounded-3xl shadow-lg shadow-ink-900/10">
            <Image src={about.images.industry.src} alt={about.images.industry.alt} placeholder="blur" sizes="(min-width: 1024px) 520px, 100vw" className="aspect-[4/3] w-full object-cover" />
          </div>
        </div>
        <ul className="space-y-5">
          {about.industry.points.map((p, i) => (
            <li key={p.title} data-reveal="up" style={delay(i, 70)}>
              <div className="card card-hover flex items-start gap-5 p-6">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-700"><Icon name={p.icon} className="size-6" /></span>
                <div>
                  <h3 className="text-lg font-bold text-ink-900">{p.title}</h3>
                  <p className="mt-1 leading-relaxed text-ink-700">{p.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </CourseSection>
  );
}

/** Awards, recognition & accreditation — dark, four cards. */
export function AboutRecognition() {
  return (
    <CourseSection id="recognition" className="on-dark bg-ink-950 text-white" decor={darkDecor}>
      <SectionHeading id="recognition-title" dark eyebrow="Awards, recognition & accreditation" title={<>Recognition built through <span className="text-gradient">learning, innovation and industry engagement</span></>} />
      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {about.recognition.map((r, i) => (
          <li key={r.title} data-reveal="up" style={delay(i)}>
            <div className="group h-full rounded-3xl border border-white/10 bg-white/5 p-7 transition-colors duration-300 hover:border-accent-400/50 hover:bg-white/10">
              <span className="grid size-14 place-items-center rounded-full bg-linear-to-br from-accent-400 to-accent-500 text-ink-950 transition-transform duration-300 group-hover:scale-110"><Icon name={r.icon} className="size-7" /></span>
              <h3 className="mt-6 text-lg font-bold">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">{r.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </CourseSection>
  );
}

/** Our journey — zig-zag timeline on a centre rail (fills on scroll); each milestone has a calendar-style year card. */
export function AboutTimeline() {
  return (
    <CourseSection id="our-journey" className="bg-brand-50/50">
      <SectionHeading id="our-journey-title" eyebrow="Our journey" title={<>Building careers <span className="text-gradient">since 2007</span></>} text="The milestones that shaped TechCADD — from a single classroom in Jalandhar to learners across North India." />
      <ol className="timeline relative mx-auto mt-16 max-w-5xl space-y-10 md:space-y-14">
        <span aria-hidden className="absolute inset-y-0 left-[7px] w-0.5 -translate-x-1/2 rounded-full bg-brand-100 md:left-1/2" />
        <span aria-hidden className="timeline-fill absolute inset-y-0 left-[7px] w-0.5 -translate-x-1/2 rounded-full bg-accent-500 md:left-1/2" />
        {about.timeline.map((m, i) => {
          const left = i % 2 === 0;
          return (
            <li key={m.year} className="relative pl-10 md:grid md:grid-cols-2 md:items-center md:gap-x-16 md:pl-0">
              <span aria-hidden className="absolute left-[7px] top-1/2 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600 ring-4 ring-brand-200 md:left-1/2" />
              <span aria-hidden className={`absolute top-1/2 hidden h-0.5 w-8 -translate-y-1/2 bg-brand-200 md:block ${left ? "right-1/2" : "left-1/2"}`} />
              <div className={`${left ? "tr-left md:col-start-1" : "tr-right md:col-start-2"}`}>
                <div className={`group flex items-center gap-5 ${left ? "md:flex-row-reverse md:text-right" : ""}`}>
                  <div aria-hidden className="card w-16 shrink-0 overflow-hidden !rounded-xl text-center transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_24px_48px_-20px_rgba(29,83,240,0.35)]">
                    <div className="bg-brand-600 py-0.5 font-mono text-[11px] tracking-widest text-white">{m.year.slice(0, 2)}</div>
                    <div className="py-2 font-display text-2xl font-extrabold leading-none text-ink-900">{m.year.slice(2)}</div>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-ink-900">{m.year}: {m.title}</h3>
                    <p className="mt-1 leading-relaxed text-ink-700">{m.text}</p>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </CourseSection>
  );
}

/** Our belief — three-line statement. */
export function AboutBelief() {
  return (
    <CourseSection id="belief" className="bg-white" decor={<div aria-hidden className="bg-grid-light absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_70%)]" />}>
      <div className="mx-auto max-w-4xl text-center">
        <span data-reveal="up" className="eyebrow">Our belief</span>
        <h2 id="belief-title" className="mt-6 font-display text-4xl font-extrabold leading-[1.1] text-ink-900 sm:text-5xl lg:text-6xl">
          {about.belief.lines.map((l, i) => (
            <span key={l} data-reveal="up" style={delay(i, 140)} className={`block ${i === about.belief.lines.length - 1 ? "text-gradient" : ""}`}>{l}</span>
          ))}
        </h2>
        <p data-reveal="up" style={delay(4)} className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink-700">{about.belief.text}</p>
      </div>
    </CourseSection>
  );
}

/** Final CTA — perks + call link on the left, the shared demo form on the right. */
export function AboutCta() {
  return (
    <section id="get-started" aria-labelledby="get-started-title" className="section on-dark relative overflow-hidden bg-linear-to-br from-brand-700 via-brand-800 to-ink-950 text-white">
      <div className="bg-grid absolute inset-0 opacity-50" aria-hidden />
      <div className="absolute -right-20 -top-20 size-96 rounded-full bg-accent-500/25 blur-[100px]" aria-hidden />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-2">
        <div>
          <span data-reveal="up" className="eyebrow eyebrow-dark">{about.cta.title}</span>
          <h2 id="get-started-title" data-reveal="up" className="mt-5 text-3xl font-extrabold leading-[1.1] sm:text-4xl lg:text-5xl">{about.cta.text}</h2>
          <ul className="mt-8 space-y-3">
            {about.cta.perks.map((p) => (
              <li key={p} data-reveal="up" className="flex items-center gap-2.5 font-medium">
                <CheckCircle2 className="size-5 shrink-0 text-accent-400" aria-hidden /> {p}
              </li>
            ))}
          </ul>
          <a data-reveal="up" href={site.phoneHref} className="mt-10 inline-flex items-center gap-4 rounded-2xl">
            <span className="grid size-14 place-items-center rounded-full bg-white/10"><Phone className="size-6" aria-hidden /></span>
            <span>
              <span className="block text-sm text-brand-100">Call now</span>
              <span className="font-display text-2xl font-bold">{site.phone}</span>
            </span>
          </a>
        </div>
        <div data-reveal="right" className="on-light">
          <div className="card p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-ink-900">Book your free demo class</h3>
            <p className="mb-6 mt-1 text-sm text-ink-500">Share your mobile number and a counsellor will call you.</p>
            <DemoForm />
          </div>
        </div>
      </div>
    </section>
  );
}
