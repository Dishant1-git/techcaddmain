import Link from "next/link";
import { MessageCircle, Plus } from "lucide-react";
import { faqs, site } from "@/data/site";
import { SectionHeading, delay } from "@/components/ui/SectionHeading";

/** Native <details> accordion — zero JS. FAQ JSON-LD is emitted in app/page.tsx. */
export function Faq() {
  return (
    <section id="faq" className="section bg-brand-50/50">
      <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading
            align="left"
            eyebrow="FAQs"
            title={<>Questions? <span className="text-gradient">We&apos;ve got answers.</span></>}
            text="Everything you need to know about courses, fees, training and placements."
          />
          <div data-reveal="up" style={delay(3)} className="card mt-8 p-6">
            <MessageCircle className="size-8 text-brand-600" aria-hidden />
            <p className="mt-3 font-bold text-ink-900">Still have questions?</p>
            <p className="mt-1 text-sm text-ink-500">Our counsellors are available {site.hours}.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={site.phoneHref} className="btn-brand !py-2.5">Call {site.phone}</a>
              <Link href="/#demo" className="btn-ghost !py-2.5">Enquire</Link>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details key={f.q} data-reveal="up" style={delay(i, 60)} className="card group open:border-brand-200 open:shadow-lg" open={i === 0}>
              <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 text-left font-semibold text-ink-900">
                {f.q}
                <span className="faq-icon grid size-8 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700 transition-transform duration-300 group-open:bg-brand-600 group-open:text-white">
                  <Plus className="size-4" aria-hidden />
                </span>
              </summary>
              <p className="-mt-2 px-6 pb-6 leading-relaxed text-ink-500">{f.a}</p>
            </details>
          ))}
          <Link href="/faq" className="btn-ghost mt-4 inline-flex">See all questions by course</Link>
        </div>
      </div>
    </section>
  );
}
