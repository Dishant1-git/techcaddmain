import Link from "next/link";
import { ogImages } from "@/lib/seo";
import type { Metadata } from "next";
import { site } from "@/data/site";
import { legalPages, legalUpdated, type LegalPage } from "@/data/legal";

export const legalBySlug = (slug: string) => legalPages.find((p) => p.slug === slug) as LegalPage;

export const legalMetadata = (slug: string): Metadata => {
  const p = legalBySlug(slug);
  return { title: p.title, description: p.description, alternates: { canonical: `/${p.slug}` }, openGraph: { title: p.title, description: p.description, url: `/${p.slug}`, images: ogImages } };
};

/** Plain reading page shared by the four legal routes. Content: src/data/legal.ts. */
export function LegalView({ slug }: { slug: string }) {
  const p = legalBySlug(slug);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: p.title, item: `${site.url}/${p.slug}` },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="on-dark relative isolate overflow-hidden bg-ink-950 py-14 text-white md:py-20">
        <div className="bg-grid absolute inset-0 -z-10 opacity-60" aria-hidden />
        <div className="container-x">
          <p className="text-sm text-ink-300">
            <Link href="/" className="hover:text-white">Home</Link> <span aria-hidden>/</span> {p.title}
          </p>
          <h1 className="mt-6 text-3xl font-extrabold leading-[1.1] sm:text-4xl lg:text-5xl">{p.title}</h1>
          <p className="mt-4 text-sm text-ink-300">Last updated: {legalUpdated}</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <p className="text-lg leading-relaxed text-ink-700">{p.intro}</p>
            {p.sections.map((s) => (
              <div key={s.heading} className="mt-10">
                <h2 className="text-xl font-bold text-ink-900 sm:text-2xl">{s.heading}</h2>
                {s.text?.slice(0, s.list ? 1 : undefined).map((t) => <p key={t} className="mt-3 leading-relaxed text-ink-700">{t}</p>)}
                {s.list && (
                  <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed text-ink-700">
                    {s.list.map((l) => <li key={l}>{l}</li>)}
                  </ul>
                )}
                {s.list && s.text?.slice(1).map((t) => <p key={t} className="mt-3 leading-relaxed text-ink-700">{t}</p>)}
              </div>
            ))}
            <p className="mt-12 border-t border-ink-950/10 pt-6 text-sm text-ink-500">
              Other policies:{" "}
              {legalPages.filter((x) => x.slug !== p.slug).map((x, i) => (
                <span key={x.slug}>
                  {i > 0 && " · "}
                  <Link href={`/${x.slug}`} className="link">{x.title}</Link>
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
