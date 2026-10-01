"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/data/site";

/**
 * Mobile-number lead form ("Book Demo"). No backend yet: on submit it opens WhatsApp with the number pre-filled.
 * To use a real backend/CRM, replace the body of onSubmit with a fetch() to your API route.
 */
export function DemoForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const phone = String(new FormData(e.currentTarget).get("phone") ?? "");
    const msg = `Hi TechCADD, I'd like to book a free demo. Please call me on ${phone}.`;
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
    setSent(true);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="demo-phone" className="sr-only">
        Your mobile number
      </label>
      <div className="flex flex-col gap-4 sm:flex-row">
        <input
          id="demo-phone"
          name="phone"
          type="tel"
          inputMode="numeric"
          required
          pattern="[0-9]{10}"
          maxLength={10}
          title="Enter a 10-digit mobile number"
          placeholder="Your mobile number"
          autoComplete="tel-national"
          className="min-w-0 flex-1 rounded-full border border-ink-950/10 bg-white px-8 py-5 text-lg text-ink-900 shadow-[0_12px_30px_-12px_rgba(15,23,42,0.25)] outline-none transition-shadow placeholder:text-ink-500 focus:ring-4 focus:ring-brand-500/30"
        />
        <button
          type="submit"
          className="shrink-0 rounded-full bg-ink-950 px-12 py-5 font-display text-lg font-bold text-white shadow-[0_20px_30px_-12px_rgba(15,23,42,0.5)] transition-colors hover:bg-brand-900 active:scale-[0.98]"
        >
          Book Demo
        </button>
      </div>
      <p className="mt-4 text-sm text-ink-500" aria-live="polite">
        {sent ? "Thanks! Send the WhatsApp message and a counsellor will call you shortly." : ""}
      </p>
    </form>
  );
}
