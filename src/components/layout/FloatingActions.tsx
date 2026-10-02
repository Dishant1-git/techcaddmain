import { Phone } from "lucide-react";
import { site } from "@/data/site";
import { whatsappPath } from "@/components/ui/SocialIcons";
import { ScrollTop } from "./ScrollTop";

/** Sticky scroll-to-top + call (mobile) + WhatsApp buttons (bottom-right). */
export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-center gap-3">
      <ScrollTop />
      <a
        href={site.phoneHref}
        aria-label="Call TechCADD"
        className="grid size-12 place-items-center rounded-full bg-brand-600 text-white shadow-xl shadow-brand-600/40 transition-transform hover:scale-110 md:hidden"
      >
        <Phone className="size-5" aria-hidden />
      </a>
      <a
        href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi TechCADD, I want to know about your courses.")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 transition-transform hover:scale-110"
      >
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366]" aria-hidden />
        <svg viewBox="0 0 24 24" className="relative size-7" fill="currentColor" aria-hidden>
          <path d={whatsappPath} />
        </svg>
      </a>
    </div>
  );
}
