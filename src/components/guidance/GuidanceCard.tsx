import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { delay } from "@/components/ui/SectionHeading";

/** Large interactive card for the "Find the Guidance You Need" section. */
export function GuidanceCard({
  index, icon, title, text, href,
}: { index: number; icon: string; title: string; text: string; href: string }) {
  return (
    <Link
      href={href}
      data-reveal="up"
      style={delay(index)}
      className="card card-hover group relative flex flex-col justify-between overflow-hidden p-8 sm:p-9"
    >
      <span className="pointer-events-none absolute -right-4 -top-6 font-display text-8xl font-extrabold text-ink-900/[0.04] transition-colors duration-300 group-hover:text-brand-600/10">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="relative">
        <span className="grid size-14 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
          <Icon name={icon} className="size-7" />
        </span>
        <h3 className="mt-6 text-xl font-bold text-ink-900 sm:text-2xl">{title}</h3>
        <p className="mt-3 max-w-xs leading-relaxed text-ink-500">{text}</p>
      </div>
      <div className="relative mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
        Explore
        <span className="grid size-8 place-items-center rounded-full bg-brand-50 transition-all duration-300 group-hover:bg-brand-600 group-hover:text-white">
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
