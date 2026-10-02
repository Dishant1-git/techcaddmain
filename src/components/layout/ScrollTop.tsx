"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/** "Back to top" button: appears after one screen of scrolling. Smooth scroll comes from `html { scroll-behavior }`. */
export function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0 })}
      aria-label="Scroll to top"
      tabIndex={show ? 0 : -1}
      className={`grid size-12 place-items-center self-center rounded-full bg-accent-500 shadow-xl shadow-accent-500/40 transition-all duration-300 hover:-translate-y-1 hover:bg-accent-400 ${
        show ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp className="size-5" aria-hidden />
    </button>
  );
}
