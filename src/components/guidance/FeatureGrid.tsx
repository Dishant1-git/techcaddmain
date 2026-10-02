import type { FeatureItem } from "@/data/guidance";
import { Icon } from "@/components/ui/Icon";
import { delay } from "@/components/ui/SectionHeading";

/**
 * Flexible icon+title(+text) card grid reused across guidance pages:
 * "What You Get", "Who Can Benefit", "Career Paths", "Benefits", "Use Cases", etc.
 * `compact` = smaller icon-only tiles (no body text) for chip-like lists.
 */
export function FeatureGrid({ items, columns = 4, compact = false }: { items: FeatureItem[]; columns?: 2 | 3 | 4; compact?: boolean }) {
  const cols = { 2: "sm:grid-cols-2", 3: "sm:grid-cols-2 lg:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" }[columns];
  return (
    <div className={`grid gap-5 ${cols}`}>
      {items.map((f, i) =>
        compact ? (
          <div
            key={f.title}
            data-reveal="up"
            style={delay(i % columns)}
            className="card card-hover flex items-center gap-3.5 p-5"
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
              <Icon name={f.icon} className="size-5" />
            </span>
            <span className="font-semibold text-ink-900">{f.title}</span>
          </div>
        ) : (
          <div key={f.title} data-reveal="up" style={delay(i % columns)} className="card card-hover p-7">
            <span className="grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-600">
              <Icon name={f.icon} className="size-6" />
            </span>
            <h3 className="mt-5 text-lg font-bold text-ink-900">{f.title}</h3>
            {f.text && <p className="mt-2 text-sm leading-relaxed text-ink-500">{f.text}</p>}
          </div>
        ),
      )}
    </div>
  );
}
