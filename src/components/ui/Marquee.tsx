import type { CSSProperties, ReactNode } from "react";

/** Pure-CSS infinite marquee (no JS). Children are rendered twice for a seamless loop. */
export function Marquee({ children, duration = "40s", reverse = false }: { children: ReactNode; duration?: string; reverse?: boolean }) {
  return (
    <div className="marquee mask-fade-x overflow-hidden">
      <div
        className="flex w-max animate-marquee gap-4"
        style={{ "--marquee-duration": duration, animationDirection: reverse ? "reverse" : "normal" } as CSSProperties}
      >
        <div className="flex shrink-0 gap-4 pr-4">{children}</div>
        <div className="flex shrink-0 gap-4 pr-4" aria-hidden>{children}</div>
      </div>
    </div>
  );
}
