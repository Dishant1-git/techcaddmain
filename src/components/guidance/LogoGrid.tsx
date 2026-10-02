import type { LogoItem } from "@/data/guidance";
import { delay } from "@/components/ui/SectionHeading";

/** Plain text/initial "brand tile" grid for AI tools / freelance platforms — no logos, no affiliation implied. */
export function LogoGrid({ items, disclaimer }: { items: LogoItem[]; disclaimer: string }) {
  return (
    <div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((t, i) => (
          <div key={t.name} data-reveal="up" style={delay(i % 4)} className="card card-hover flex items-center gap-3.5 p-5">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-linear-to-br from-brand-600 to-brand-800 text-sm font-bold text-white">
              {t.name
                .split(" ")
                .slice(0, 2)
                .map((w) => w[0])
                .join("")}
            </span>
            <span>
              <span className="block text-sm font-bold text-ink-900">{t.name}</span>
              <span className="block text-xs text-ink-500">{t.note}</span>
            </span>
          </div>
        ))}
      </div>
      <p className="mt-6 text-xs leading-relaxed text-ink-500">{disclaimer}</p>
    </div>
  );
}
