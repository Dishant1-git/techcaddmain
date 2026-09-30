import Link from "next/link";
import { ChevronRight } from "lucide-react";

/**
 * Breadcrumb. `tone="dark"` (default) for dark heroes, `"light"` for light/neumorphic heroes.
 * Last item = current page (no link). BreadcrumbList JSON-LD is emitted by the page.
 */
export function Breadcrumb({ items, tone = "dark" }: { items: { label: string; href?: string }[]; tone?: "dark" | "light" }) {
  const light = tone === "light";
  return (
    <nav aria-label="Breadcrumb">
      <ol className={`flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm ${light ? "text-ink-500" : "text-ink-300"}`}>
        {items.map((it, i) => (
          <li key={it.label} className="flex min-w-0 items-center gap-1.5">
            {i > 0 && <ChevronRight className={`size-3.5 shrink-0 ${light ? "text-ink-300" : "text-ink-500"}`} aria-hidden />}
            {it.href ? (
              <Link href={it.href} className={`rounded underline-offset-4 transition-colors hover:underline ${light ? "hover:text-brand-700" : "hover:text-white"}`}>
                {it.label}
              </Link>
            ) : (
              <span aria-current="page" className={`truncate font-medium ${light ? "text-ink-900" : "text-white"}`}>{it.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
