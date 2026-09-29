import { recruiters } from "@/data/site";
import { Marquee } from "@/components/ui/Marquee";

export function TrustStrip() {
  return (
    <section aria-label="Hiring partners" className="border-b border-ink-900/5 bg-white py-10">
      <p className="container-x mb-6 text-center text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">
        Our alumni work at 500+ leading companies
      </p>
      <Marquee duration="45s">
        {recruiters.map((r) => (
          <span key={r} className="whitespace-nowrap px-6 font-display text-xl font-bold text-ink-300 transition-colors hover:text-ink-900">
            {r}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
