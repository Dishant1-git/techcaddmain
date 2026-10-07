import { Globe, MapPin, Wifi } from "lucide-react";
import { branches, regions, site } from "@/data/site";
import { delay } from "@/components/ui/SectionHeading";
import { BranchExplorer } from "./BranchExplorer";

/** Branch network: heading + BranchExplorer (detail card on the left follows the branch picked in the directory on the right). */
export function Branches() {
  return (
    <section id="branches" className="section defer-render relative isolate bg-white">
      <div className="bg-grid-light absolute inset-0 -z-10 opacity-50" aria-hidden />

      <div className="container-x">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p data-reveal="up" className="flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">
              <span className="h-px w-8 bg-brand-600" aria-hidden /> North India network
            </p>
            <h2 data-reveal="up" style={delay(1)} className="mt-5 text-3xl font-extrabold leading-[1.1] text-ink-900 sm:text-4xl lg:text-5xl">
              Learn at a branch near you — <span className="text-gradient">or live online</span>
            </h2>
          </div>
          <p data-reveal="up" style={delay(2)} className="max-w-sm text-base leading-relaxed text-ink-500">
            {branches.length} campuses across Punjab &amp; Chandigarh Tricity, plus live instructor-led batches for students
            anywhere in North India.
          </p>
        </div>

        <BranchExplorer branches={branches} fallback={{ phone: site.phone, hours: site.hours }} />

        {/* Regions served — light panel, high-contrast tiles */}
        <div data-reveal="up" className="mt-8 rounded-3xl border border-ink-950/10 bg-slate-50 p-6 sm:p-9">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-accent-500"><Globe className="size-6" aria-hidden /></span>
              <div>
                <h3 className="text-xl font-bold text-ink-900 sm:text-2xl">Serving students across North India</h3>
                <p className="mt-1 text-sm text-ink-500">Study on campus, or join the same batch live online from your state.</p>
              </div>
            </div>
            <ul className="flex shrink-0 gap-4 text-xs font-semibold text-ink-700" aria-label="Legend">
              <li className="flex items-center gap-2"><span className="size-2.5 rounded-full bg-accent-500" aria-hidden /> On campus</li>
              <li className="flex items-center gap-2"><span className="size-2.5 rounded-full bg-brand-600" aria-hidden /> Live online</li>
            </ul>
          </div>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {regions.map((r, i) => {
              const campus = /branch|chandigarh/i.test(r.note);
              return (
                <li key={r.name} data-reveal="up" style={delay(i % 4, 60)}>
                  <div className="relative h-full overflow-hidden rounded-2xl border border-ink-950/10 bg-white p-5 pl-6 transition-[translate,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-18px_rgba(15,23,42,0.35)]">
                    <span className={`absolute inset-y-0 left-0 w-1.5 ${campus ? "bg-accent-500" : "bg-brand-600"}`} aria-hidden />
                    <p className="text-lg font-bold text-ink-900">{r.name}</p>
                    <p className="mt-1 flex items-center gap-2 text-sm font-medium text-ink-700">
                      {campus ? <MapPin className="size-4 shrink-0 text-accent-600" aria-hidden /> : <Wifi className="size-4 shrink-0 text-brand-600" aria-hidden />}
                      {r.note}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
