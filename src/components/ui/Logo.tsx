import Image from "next/image";
import Link from "next/link";

const fade = "h-8 w-auto transition-opacity duration-500";

/**
 * Official "techcadd." logo + tagline (files in /public/logo).
 * Both colour versions are stacked and cross-faded so the header can switch on scroll; `dark` shows the white one.
 */
export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" aria-label="TechCADD home" className="relative inline-flex shrink-0">
      <Image src="/logo/tece_new_logo.png" alt="" width={900} height={231} sizes="125px" priority className={`${fade} ${dark ? "opacity-0" : "opacity-100"}`} />
      <Image src="/logo/techcadd-logo-white.png" alt="" width={900} height={231} sizes="125px" priority className={`absolute inset-0 ${fade} ${dark ? "opacity-100" : "opacity-0"}`} />
    </Link>
  );
}
