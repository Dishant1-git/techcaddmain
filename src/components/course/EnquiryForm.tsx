"use client";

import { useRef, useState, type FocusEvent, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, LoaderCircle, Send } from "lucide-react";
import { aiCourseCommon, branches } from "@/data/site";
import { submitLead } from "@/lib/lead";

type Field = "name" | "phone" | "location" | "batch";
type Errors = Partial<Record<Field, string>>;
type Status = "idle" | "loading" | "success" | "error";

const validate = (d: Record<string, string>): Errors => {
  const e: Errors = {};
  if ((d.name ?? "").trim().length < 2) e.name = "Enter your full name (at least 2 letters).";
  if (!/^(\+?91)?[6-9]\d{9}$/.test((d.phone ?? "").replace(/[\s-]/g, ""))) e.phone = "Enter a valid 10-digit Indian mobile number, e.g. 98881 22254.";
  if (!d.location) e.location = "Choose a branch or Live Online.";
  if (!d.batch) e.batch = "Choose a batch timing.";
  return e;
};

/**
 * Course enquiry form with visible labels and inline validation (on blur after first touch, and on submit).
 * Submit saves the enquiry to MySQL (POST /api/lead → `leads` table); on success a thank-you message replaces the form.
 */
export function EnquiryForm({ course }: { course: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const read = () => Object.fromEntries(new FormData(formRef.current!)) as Record<string, string>;

  const onBlur = (e: FocusEvent<HTMLFormElement>) => {
    const name = (e.target as EventTarget as HTMLInputElement).name;
    if (!name) return;
    const all = validate(read());
    setErrors((prev) => ({ ...prev, [name]: all[name as Field] }));
  };

  const send = (d: Record<string, string>) =>
    submitLead({ form: "ai-course", course, name: d.name, phone: d.phone, location: d.location, batch: d.batch });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "loading") return;
    const d = read();
    const found = validate(d);
    setErrors(found);
    const first = (Object.keys(found) as Field[])[0];
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setStatus("loading");
    try {
      await send(d);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const control = (f: Field) =>
    `w-full rounded-xl border bg-white/80 px-4 py-3.5 shadow-soft-inset text-ink-900 outline-none transition placeholder:text-ink-500 hover:border-ink-900/25 focus:ring-4 disabled:cursor-not-allowed disabled:bg-ink-900/5 ${
      errors[f] ? "border-red-600 focus:border-red-600 focus:ring-red-600/15" : "border-ink-900/15 focus:border-brand-500 focus:ring-brand-500/15"
    }`;

  const a11y = (f: Field) => ({
    id: `enq-${f}`,
    name: f,
    "aria-invalid": errors[f] ? true : undefined,
    "aria-describedby": errors[f] ? `enq-${f}-error` : undefined,
    disabled: status === "loading",
  });

  const error = (f: Field) =>
    errors[f] && (
      <p id={`enq-${f}-error`} className="mt-1.5 flex items-start gap-1.5 text-sm text-red-700">
        <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden /> {errors[f]}
      </p>
    );

  const label = "mb-1.5 block text-sm font-semibold text-ink-900";

  if (status === "success") {
    return (
      <div role="status" className="on-light glass !bg-white/90 p-6 text-center shadow-soft-lg sm:p-8">
        <CheckCircle2 className="mx-auto size-12 text-emerald-600" aria-hidden />
        <h3 className="mt-4 text-2xl font-bold text-ink-900">Thank you!</h3>
        <p className="mt-2 text-sm text-ink-500">We have received your enquiry for the {course}. A counsellor will call you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form ref={formRef} noValidate onSubmit={onSubmit} onBlur={onBlur} aria-labelledby="enq-title" className="on-light glass space-y-5 !bg-white/90 p-6 text-left shadow-soft-lg sm:p-8">
      <div>
        <h3 id="enq-title" className="text-2xl font-bold text-ink-900">Book your free demo class</h3>
        <p className="mt-1 text-sm text-ink-500">For the {course}. A counsellor will call you within 24 hours.</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="enq-name" className={label}>Full name</label>
          <input {...a11y("name")} autoComplete="name" placeholder="e.g. Harpreet Kaur" className={control("name")} />
          {error("name")}
        </div>
        <div>
          <label htmlFor="enq-phone" className={label}>Mobile number</label>
          <input {...a11y("phone")} type="tel" inputMode="tel" autoComplete="tel" placeholder="e.g. 98881 22254" className={control("phone")} />
          {error("phone")}
        </div>
      </div>

      <div>
        <label htmlFor="enq-location" className={label}>Where do you want to learn?</label>
        <select {...a11y("location")} defaultValue="" className={control("location")}>
          <option value="" disabled>Choose a branch or online</option>
          {branches.map((b) => <option key={b.slug}>{b.city}</option>)}
          <option>Live Online</option>
        </select>
        {error("location")}
      </div>

      <div>
        <label htmlFor="enq-batch" className={label}>Preferred batch</label>
        <select {...a11y("batch")} defaultValue="" className={control("batch")}>
          <option value="" disabled>Choose a batch timing</option>
          {aiCourseCommon.batches.map((b) => <option key={b.label} value={b.label}>{b.label} ({b.time})</option>)}
        </select>
        {error("batch")}
      </div>

      <button type="submit" aria-disabled={status === "loading" || undefined} aria-busy={status === "loading" || undefined} className="btn-primary w-full !py-4 text-base">
        {status === "loading" ? (
          <><LoaderCircle className="size-5 animate-spin motion-reduce:animate-none" aria-hidden /> Sending your enquiry…</>
        ) : (
          <>Book My Free Demo <Send className="size-4" aria-hidden /></>
        )}
      </button>

      <div aria-live="polite" className="min-h-5 text-center text-sm">
        {status === "error" && <p className="text-red-700">We couldn&apos;t save your details. Please try again in a moment.</p>}
        {status === "idle" && <p className="text-ink-500">100% free · No spam · Your details stay private</p>}
      </div>
    </form>
  );
}
