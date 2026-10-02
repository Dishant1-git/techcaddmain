import Link from "next/link";
import { ArrowRight } from "lucide-react";

/** Final "Ready to...?" CTA banner shared by all guidance landing pages — same gradient style as home DemoCta. */
export function GuidanceCta({ title, text, button, href = "/#demo" }: { title: string; text: string; button: string; href?: string }) {
  return (
    <section className="section relative overflow-hidden bg-linear-to-br from-brand-700 via-brand-800 to-ink-950 text-white">
      <div className="bg-grid absolute inset-0 opacity-50" aria-hidden />
      <div className="absolute -right-20 -top-20 size-96 rounded-full bg-accent-500/25 blur-[100px]" aria-hidden />
      <div className="container-x relative text-center">
        <h2 data-reveal="up" className="mx-auto max-w-3xl text-3xl font-extrabold leading-[1.1] sm:text-4xl lg:text-5xl">{title}</h2>
        <p data-reveal="up" className="mx-auto mt-5 max-w-xl text-lg text-brand-100">{text}</p>
        <Link data-reveal="up" href={href} className="btn-primary mt-9 inline-flex !px-8 !py-4 text-base">
          {button} <ArrowRight className="size-4" aria-hidden />
        </Link>
      </div>
    </section>
  );
}
