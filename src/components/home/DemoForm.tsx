"use client";

import { useState, type FormEvent } from "react";
import { submitLead } from "@/lib/lead";

/**
 * Mobile-number lead form ("Book Demo"). Submit saves the number to MySQL (POST /api/lead → `leads` table);
 * on success a thank-you message replaces the form.
 */
export function DemoForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "loading") return;
    const phone = String(new FormData(e.currentTarget).get("phone") ?? "");
    setStatus("loading");
    try {
      await submitLead({ form: "demo", phone });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div role="status" className="rounded-3xl border border-ink-950/10 bg-white px-8 py-6 shadow-[0_12px_30px_-12px_rgba(15,23,42,0.25)]">
        <p className="font-display text-2xl font-bold text-ink-900">Thank you!</p>
        <p className="mt-1 text-ink-500">We have received your number. A counsellor will call you shortly.</p>
      </div>
    );
  }

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
          aria-disabled={status === "loading" || undefined}
          className="shrink-0 rounded-full bg-ink-950 px-12 py-5 font-display text-lg font-bold text-white shadow-[0_20px_30px_-12px_rgba(15,23,42,0.5)] transition-colors hover:bg-brand-900 active:scale-[0.98]"
        >
          {status === "loading" ? "Sending…" : "Book Demo"}
        </button>
      </div>
      <p className="mt-4 text-sm text-red-700" aria-live="polite">
        {status === "error" ? "We couldn't save your number. Please try again in a moment." : ""}
      </p>
    </form>
  );
}
