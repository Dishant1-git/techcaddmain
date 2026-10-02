import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { delay } from "@/components/ui/SectionHeading";

/** Compact service card used in the "02 Guidance" preview section. */
export function ServiceCard({ icon, title, text, href, index }: { icon: string; title: string; text: string; href: string; index: number }) {
  return (
    <Link href={href} data-reveal="up" style={delay(index)} className="card card-hover group flex flex-col p-7">
      <span className="grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
        <Icon name={icon} className="size-6" />
      </span>
      <h3 className="mt-5 text-lg font-bold text-ink-900">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{text}</p>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
        Explore More <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
      </span>
    </Link>
  );
}
