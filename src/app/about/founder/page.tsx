import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Mic, Quote, Rocket, Users, type LucideIcon } from "lucide-react";
import { founderClosing, founderCta, founderHero, founderJourney, founderMeet, founderRoles, founderTestimonials } from "@/data/founder";
import { site } from "@/data/site";
import { SectionHeading, delay } from "@/components/ui/SectionHeading";
import founderImg from "@/assets/nav/our-founder.jpg";

export const metadata: Metadata = {
  title: "Our Founder, Mr. Gourav Gupta | techcadd Jalandhar",
  description: "Meet Gourav Gupta, founder of techcadd — an entrepreneur, mentor and career coach who went from driving an auto to building a technology training institute.",
  alternates: { canonical: "/about/founder" },
};

const icons: Record<string, LucideIcon> = { Rocket, Compass, Users, Mic };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: site.url },
    { "@type": "ListItem", position: 2, name: "About", item: `${site.url}/about` },
    { "@type": "ListItem", position: 3, name: "Our Founder", item: `${site.url}/about/founder` },
  ],
};

export default function FounderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink-950 py-20 text-white md:py-28">
        <div className="bg-grid absolute inset-0 -z-10 opacity-60" aria-hidden />
        <div className="absolute -left-32 top-0 -z-10 size-[28rem] rounded-full bg-brand-600/30 blur-[120px]" aria-hidden />
        <div className="absolute -right-32 bottom-0 -z-10 size-[26rem] rounded-full bg-accent-500/20 blur-[120px]" aria-hidden />
        <div className="container-x grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <nav aria-label="Breadcrumb" className="text-sm text-ink-300">
              <Link href="/" className="hover:text-white">Home</Link> / <Link href="/about" className="hover:text-white">About</Link> / <span className="text-white">Our Founder</span>
            </nav>
            <p className="mt-8 text-lg"><strong className="font-bold">{founderHero.name}</strong> <span className="text-ink-300">· {founderHero.role}</span></p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              {founderHero.title[0]}<br />{founderHero.title[1]}<br />
              <span className="text-gradient">{founderHero.title[2]}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-300">{founderHero.lead}</p>
            <ul className="mt-8 flex flex-wrap gap-3">
              {founderHero.tags.map((t) => (
                <li key={t} className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur">{t}</li>
              ))}
            </ul>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-3 rounded-[2rem] bg-linear-to-br from-brand-500/40 to-accent-500/30 blur-2xl" aria-hidden />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/15">
              <Image src={founderImg} alt="Gourav Gupta, founder of techcadd, presenting on stage" fill priority placeholder="blur" sizes="(min-width: 1024px) 420px, 90vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Meet */}
      <section className="section">
        <div className="container-x">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div data-reveal="left" className="card overflow-hidden p-0">
              <div className="relative aspect-[4/3]">
                <Image src={founderImg} alt="Gourav Gupta addressing students" fill placeholder="blur" sizes="(min-width: 1024px) 560px, 92vw" className="object-cover" />
              </div>
            </div>
            <div data-reveal="right">
              <span className="eyebrow">About</span>
              <h2 className="mt-4 text-4xl font-extrabold leading-tight text-ink-950 lg:text-5xl">{founderMeet.heading}</h2>
              <div className="mt-6 space-y-4 leading-relaxed text-ink-500">
                {founderMeet.paragraphs.map((p) => <p key={p}>{p}</p>)}
              </div>
              <blockquote className="mt-7 border-l-4 border-accent-400 pl-5 text-lg font-semibold text-ink-900">{founderMeet.quote}</blockquote>
              <Link href="/courses" className="btn-brand mt-8">Explore the courses <ArrowRight className="size-4" aria-hidden /></Link>
            </div>
          </div>
          <dl className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {founderMeet.stats.map((s, i) => (
              <div key={s.label} data-reveal="up" style={delay(i)} className="card p-6 text-center">
                <dd className="text-3xl font-extrabold text-brand-700 lg:text-4xl">{s.value}</dd>
                <dt className="mt-1 text-sm text-ink-500">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Roles */}
      <section className="section bg-brand-50/50">
        <div className="container-x">
          <SectionHeading eyebrow="Roles" title={<>Four roles, <span className="text-gradient">one purpose</span></>} />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {founderRoles.map((r, i) => {
              const Icon = icons[r.icon];
              return (
                <div key={r.title} data-reveal="up" style={delay(i)} className="card card-hover p-7">
                  <span className="grid size-14 place-items-center rounded-2xl bg-linear-to-br from-brand-600 to-brand-800 text-white shadow-lg shadow-brand-600/25">
                    <Icon className="size-7" aria-hidden />
                  </span>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-brand-600">{r.tag}</p>
                  <h3 className="mt-1 text-lg font-bold text-ink-900">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{r.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="relative isolate overflow-hidden bg-ink-950 py-20 text-white lg:py-28" aria-labelledby="journey-heading">
        <div className="bg-grid absolute inset-0 -z-10 opacity-50" aria-hidden />
        <div className="absolute -right-32 top-0 -z-10 size-[28rem] rounded-full bg-brand-600/30 blur-[120px]" aria-hidden />
        <div className="container-x">
          <span className="eyebrow eyebrow-dark">The journey behind techcadd</span>
          <h2 id="journey-heading" className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.05] sm:text-5xl">
            From driving an auto to <span className="text-gradient">building techcadd</span>
          </h2>
          <ol className="mt-14 grid gap-6 lg:grid-cols-2">
            {founderJourney.map((c, i) => (
              <li key={c.title} data-reveal="up" style={delay(i % 2)} className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur sm:p-9">
                <span className="inline-flex rounded-md bg-accent-400 px-3 py-1 text-xs font-bold text-ink-950">{c.label}</span>
                <h3 className="mt-4 text-2xl font-extrabold leading-snug">{c.title}</h3>
                <span className="mt-4 block h-1 w-16 rounded-full bg-accent-400" aria-hidden />
                <div className="mt-5 space-y-3 leading-relaxed text-ink-300">
                  {c.paragraphs.map((p) => <p key={p}>{p}</p>)}
                </div>
                {c.bullets && (
                  <ul className="mt-4 space-y-2 text-ink-300">
                    {c.bullets.map((b) => (
                      <li key={b} className="flex gap-3"><span className="mt-2 size-2 shrink-0 rounded-full bg-accent-400" aria-hidden />{b}</li>
                    ))}
                  </ul>
                )}
                {c.numbered && (
                  <ol className="mt-4 space-y-3">
                    {c.numbered.map((n, j) => (
                      <li key={n.title} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                        <span className="grid size-7 shrink-0 place-items-center rounded-full bg-accent-400 text-xs font-bold text-ink-950">{j + 1}</span>
                        <span><strong className="block italic">{n.title}</strong><span className="mt-1 block text-sm text-ink-300">{n.text}</span></span>
                      </li>
                    ))}
                  </ol>
                )}
                {c.quote && <blockquote className="mt-5 rounded-2xl border border-accent-400/30 bg-accent-400/10 p-5 text-lg font-bold leading-snug">“{c.quote}”</blockquote>}
                {c.closing && <p className="mt-5 border-l-4 border-accent-400 pl-4 font-semibold italic">{c.closing}</p>}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Closing + testimonials */}
      <section className="section">
        <div className="container-x">
          <div data-reveal="up" className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-ink-950 sm:text-4xl">{founderClosing.title}</h2>
            <div className="mt-5 space-y-3 leading-relaxed text-ink-500">
              {founderClosing.paragraphs.map((p) => <p key={p}>{p}</p>)}
            </div>
            <blockquote className="mt-6 text-lg font-semibold text-ink-900">“{founderClosing.quote}”</blockquote>
          </div>

          <div className="mt-20">
            <SectionHeading
              eyebrow="Testimonials & Words of Appreciation"
              title={<>What people say about <span className="text-gradient">Gourav Gupta</span></>}
              text="A leader’s true impact is reflected not only in the organization they build, but also in the people they inspire, guide and empower."
            />
            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {founderTestimonials.map((t, i) => (
                <figure key={t.name} data-reveal="up" style={delay(i % 3)} className="card card-hover flex flex-col p-7">
                  <Quote className="size-7 text-brand-300" aria-hidden />
                  <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">{t.text}</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                    <span aria-hidden className="grid size-10 place-items-center rounded-full bg-linear-to-br from-brand-600 to-brand-400 text-xs font-bold text-white">
                      {t.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-ink-900">{t.name}</span>
                      <span className="block text-xs text-ink-500">{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section relative isolate overflow-hidden bg-linear-to-b from-white via-brand-100/70 to-brand-50">
        <div className="bg-grid-light absolute inset-0 -z-10 opacity-60" aria-hidden />
        <div className="container-x text-center">
          <h2 data-reveal="up" className="mx-auto max-w-3xl text-4xl font-extrabold leading-[1.05] text-ink-950 sm:text-5xl">{founderCta.title}</h2>
          <p data-reveal="up" style={delay(1)} className="mx-auto mt-6 max-w-2xl text-lg text-ink-500">{founderCta.lead}</p>
          <p data-reveal="up" style={delay(2)} className="mx-auto mt-3 max-w-2xl text-ink-500">{founderCta.text}</p>
          <p data-reveal="up" style={delay(3)} className="mt-5 font-semibold italic text-brand-700">{founderCta.motto}</p>
          <div data-reveal="up" style={delay(4)} className="mt-9 flex flex-wrap justify-center gap-4">
            <a href={founderCta.instagram} target="_blank" rel="noopener noreferrer" className="btn-primary">Follow on Instagram</a>
            <Link href="/contact" className="btn-ghost">Talk to a counsellor <ArrowRight className="size-4" aria-hidden /></Link>
          </div>
          <p className="mt-8 text-sm text-ink-500">{founderCta.signoff}</p>
        </div>
      </section>
    </>
  );
}
