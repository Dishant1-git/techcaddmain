import Link from "next/link";
import { Star } from "lucide-react";
import type { MentorProfile } from "@/data/guidance";
import { delay } from "@/components/ui/SectionHeading";

export function MentorGrid({ mentors }: { mentors: MentorProfile[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {mentors.map((m, i) => (
        <div key={m.name} data-reveal="up" style={delay(i)} className="card card-hover flex flex-col items-center p-7 text-center">
          <span className="grid size-16 place-items-center rounded-full bg-linear-to-br from-brand-500 to-brand-700 text-lg font-bold text-white">
            {m.initials}
          </span>
          <h3 className="mt-4 text-lg font-bold text-ink-900">{m.name}</h3>
          <p className="text-sm text-brand-600">{m.role}</p>
          <p className="mt-1 text-xs text-ink-500">{m.experience} experience</p>
          <div className="mt-3 flex flex-wrap justify-center gap-1.5">
            {m.expertise.map((e) => (
              <span key={e} className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700">{e}</span>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-1">
            <Star className="size-4 fill-accent-400 text-accent-400" aria-hidden />
            <span className="text-sm font-bold text-ink-900">{m.rating}</span>
          </div>
          <Link href="/#demo" className="btn-ghost mt-5 w-full !py-2.5 text-sm">View Profile</Link>
        </div>
      ))}
    </div>
  );
}
