import Link from "next/link";

/**
 * Text wordmark "techcadd™" + tagline (matches the official header style).
 * Swap for <Image src="/logo.svg" .../> when the official logo file is added to /public.
 */
export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" aria-label="TechCADD home" className="inline-flex shrink-0 flex-col items-end leading-none">
      <span className={`relative font-sans text-[2rem] font-extrabold tracking-[-0.04em] transition-colors duration-500 ${dark ? "text-white" : "text-brand-900"}`}>
        techcadd
        <sup className="absolute -right-2.5 top-1.5 text-[11px] font-medium tracking-normal">™</sup>
      </span>
      <span className={`-mt-0.5 whitespace-nowrap text-[7.5px] font-medium tracking-wide transition-colors duration-500 ${dark ? "text-white/80" : "text-brand-900/70"}`}>
        Your Skill &amp; Technology Partner
      </span>
    </Link>
  );
}
