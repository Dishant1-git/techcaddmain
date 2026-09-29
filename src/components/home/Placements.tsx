import { Briefcase, FileText, MessagesSquare, UserCheck } from "lucide-react";
import { placementStats, recruiters } from "@/data/site";
import { Counter } from "@/components/ui/Counter";
import { Marquee } from "@/components/ui/Marquee";
import { SectionHeading, delay } from "@/components/ui/SectionHeading";

const support = [
  { icon: FileText, title: "ATS-ready resume & portfolio" },
  { icon: MessagesSquare, title: "Mock interviews with HR & tech leads" },
  { icon: UserCheck, title: "Soft skills & communication training" },
  { icon: Briefcase, title: "Referrals & placement drives" },
];

export function Placements() {
  return (
    <section id="placements" className="section relative overflow-hidden bg-ink-950 text-white">
      <div className="absolute -right-40 top-20 size-[30rem] rounded-full bg-accent-500/15 blur-[120px]" aria-hidden />
      <div className="absolute -left-40 bottom-0 size-[30rem] rounded-full bg-brand-600/25 blur-[120px]" aria-hidden />
      <div className="container-x relative">
        <SectionHeading
          dark
          eyebrow="Placements"
          title={<>Careers that <span className="text-gradient">start here</span></>}
          text="Our dedicated placement cell partners with IT companies across Mohali, Chandigarh, Ludhiana, Delhi NCR and beyond."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {placementStats.map((s, i) => (
            <div key={s.label} data-reveal="up" style={delay(i)} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center sm:p-8">
              <p className="font-display text-3xl font-extrabold sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
              </p>
              <p className="mt-2 text-sm text-ink-300">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {support.map(({ icon: I, title }, i) => (
            <div key={title} data-reveal="up" style={delay(i)} className="flex items-center gap-4 rounded-2xl bg-white/[0.04] p-5">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-600"><I className="size-5" aria-hidden /></span>
              <p className="text-sm font-semibold">{title}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 space-y-4">
          <Marquee duration="50s">
            {recruiters.map((r) => (
              <span key={r} className="whitespace-nowrap rounded-2xl border border-white/10 bg-white/[0.04] px-7 py-4 font-display text-lg font-bold text-ink-300">{r}</span>
            ))}
          </Marquee>
          <Marquee duration="55s" reverse>
            {[...recruiters].reverse().map((r) => (
              <span key={r} className="whitespace-nowrap rounded-2xl border border-white/10 bg-white/[0.04] px-7 py-4 font-display text-lg font-bold text-ink-300">{r}</span>
            ))}
          </Marquee>
        </div>
        <p className="mt-8 text-center text-xs text-ink-500">*Based on eligible students of recent batches. Individual outcomes vary.</p>
      </div>
    </section>
  );
}
