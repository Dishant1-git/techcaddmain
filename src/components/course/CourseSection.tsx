import type { ReactNode } from "react";

/**
 * Wrapper for every AI course page section.
 *  - `id` is the in-page anchor (CourseNav) and `${id}-title` must be the section's h2 id (landmark label).
 *  - scroll-mt-16 adds room for the sticky CourseNav on top of html's scroll-padding (header).
 *  - `decor` = absolutely positioned background layers (use <SoftBlobs/> on bg-soft sections).
 *  - Light sections use `bg-soft` with <SoftBlobs/> behind frosted `glass` cards; dark ones use `bg-ink-950` + `glass-dark`.
 */
export function CourseSection({
  id, className = "", decor, overflow = "overflow-hidden", children,
}: { id: string; className?: string; decor?: ReactNode; /** "overflow-x-clip" lets cards/shadows show past the section edge (neu pages). */ overflow?: "overflow-hidden" | "overflow-x-clip"; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`section relative isolate scroll-mt-16 ${overflow} ${className}`}>
      {decor}
      <div className="container-x relative">{children}</div>
    </section>
  );
}

/** Coloured glows behind bg-soft sections — they give the `glass` cards something to frost. Decorative only. */
export function SoftBlobs({ flip = false }: { flip?: boolean }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 -z-10 ${flip ? "-scale-x-100" : ""}`}>
      <div className="absolute -left-40 top-10 size-[26rem] rounded-full bg-brand-300/40 blur-[110px]" />
      <div className="absolute left-1/2 top-1/2 size-[18rem] -translate-x-1/2 rounded-full bg-brand-500/10 blur-[100px]" />
      <div className="absolute -right-32 bottom-0 size-[22rem] rounded-full bg-accent-400/20 blur-[110px]" />
    </div>
  );
}

/** Two-letter monogram used as a tool "logo" until real logo files are added. */
export const monogram = (name: string) => {
  const words = name.replace(/[^A-Za-z0-9 ]/g, " ").trim().split(/\s+/);
  const raw = words.length > 1 ? words[0][0] + words[1][0] : words[0].slice(0, 2);
  return raw[0].toUpperCase() + raw.slice(1);
};

export const initials = (name: string) =>
  name.replace(/^Dr\.?\s+/, "").split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();
