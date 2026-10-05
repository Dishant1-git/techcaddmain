import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { articles, findArticle } from "@/data/articles";
import { SectionHeading, delay } from "@/components/ui/SectionHeading";
import { GuidanceCta } from "@/components/guidance/GuidanceCta";

/** The six articles listed on /pages, served at their own top-level URLs. Any other top-level slug is a 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const a = findArticle(slug);
  if (!a) return {};
  const description = a.summary || a.intro;
  return { title: `${a.title} | techcadd`, description, alternates: { canonical: `/${a.slug}` } };
}

export default async function ArticlePage({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const a = findArticle(slug);
  if (!a) notFound();

  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink-950 py-20 text-white md:py-28">
        <div className="bg-grid absolute inset-0 -z-10 opacity-60" aria-hidden />
        <div className="absolute -left-32 top-0 -z-10 size-[28rem] rounded-full bg-brand-600/30 blur-[120px]" aria-hidden />
        <div className="absolute -right-24 bottom-0 -z-10 size-[24rem] rounded-full bg-accent-500/20 blur-[120px]" aria-hidden />
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="text-sm text-ink-300">
            <Link href="/" className="hover:text-white">Home</Link> / <Link href="/pages" className="hover:text-white">Pages &amp; Guides</Link> / <span className="text-white">{a.eyebrow}</span>
          </nav>
          <span className="eyebrow eyebrow-dark mt-8">{a.eyebrow}</span>
          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">{a.title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-300">{a.intro}</p>
          <Link href={a.related.href} className="btn-primary mt-9 inline-flex">{a.related.label} <ArrowRight className="size-4" aria-hidden /></Link>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeading align="left" eyebrow="What you'll work on" title={<>Skills and projects <span className="text-gradient">you build</span></>} />
            <ul className="mt-8 space-y-4">
              {a.learn.map((l, i) => (
                <li key={l} data-reveal="up" style={delay(i % 3)} className="flex items-start gap-3 text-ink-700">
                  <Check className="mt-0.5 size-5 shrink-0 text-brand-600" aria-hidden /> {l}
                </li>
              ))}
            </ul>
          </div>
          <aside data-reveal="up" className="card h-fit p-7">
            <h2 className="font-display text-lg font-bold text-ink-900">Who this is for</h2>
            <ul className="mt-4 space-y-3 text-sm text-ink-700">
              {a.audience.map((x) => <li key={x} className="flex gap-2"><span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-600" />{x}</li>)}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section bg-brand-50/50">
        <div className="container-x">
          <SectionHeading eyebrow="How it runs" title={<>Three stages, <span className="text-gradient">one finished project</span></>} />
          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {a.steps.map((s, i) => (
              <li key={s.title} data-reveal="up" style={delay(i)} className="card p-7">
                <span className="grid size-10 place-items-center rounded-full bg-brand-600 text-sm font-bold text-white">{i + 1}</span>
                <h3 className="mt-4 font-display text-lg font-bold text-ink-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <GuidanceCta
        title="Ready to start learning?"
        text="Talk to a counsellor to check batch dates, eligibility and which format suits you — one call is usually enough."
        button="Book a Free Demo"
      />
    </>
  );
}
