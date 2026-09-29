import type { CSSProperties, ReactNode } from "react";

export function SectionHeading({
  eyebrow, title, text, dark = false, align = "center",
}: { eyebrow: string; title: ReactNode; text?: string; dark?: boolean; align?: "center" | "left" }) {
  const center = align === "center";
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl`}>
      <span data-reveal="up" className={`eyebrow ${dark ? "eyebrow-dark" : ""}`}>{eyebrow}</span>
      <h2
        data-reveal="up"
        style={{ "--d": "80ms" } as CSSProperties}
        className={`mt-5 text-3xl font-extrabold leading-[1.1] sm:text-4xl lg:text-5xl ${dark ? "text-white" : "text-ink-900"}`}
      >
        {title}
      </h2>
      {text && (
        <p
          data-reveal="up"
          style={{ "--d": "160ms" } as CSSProperties}
          className={`mt-5 text-base leading-relaxed sm:text-lg ${dark ? "text-ink-300" : "text-ink-500"}`}
        >
          {text}
        </p>
      )}
    </div>
  );
}

/** Helper for staggered reveal delays: style={delay(i)} */
export const delay = (i: number, step = 90): CSSProperties => ({ "--d": `${i * step}ms` }) as CSSProperties;
