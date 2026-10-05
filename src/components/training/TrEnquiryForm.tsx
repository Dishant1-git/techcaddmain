"use client";

import { useRef, useState, type FocusEvent, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, LoaderCircle, Send } from "lucide-react";
import { submitLead } from "@/lib/lead";

type Field = "name" | "phone" | "course" | "message" | "check";
type Errors = Partial<Record<Field, string>>;
type Status = "idle" | "loading" | "success" | "error";

/**
 * 5-field enquiry form (name, phone, course, message, security check) with visible labels and inline validation
 * (on blur after first touch, and on submit). The security check is a simple sum derived from the course name so it
 * is stable between server and client render. Submit saves the enquiry to MySQL (POST /api/lead → `leads` table);
 * on success a thank-you message replaces the form. The program select starts on the page's own program.
 */
export function TrEnquiryForm({
  course, courses, context = "Internship & Training",
  placeholder = "e.g. I need 6-month industrial training for my B.Tech — which batch suits me?",
}: { course: string; courses: string[]; /** Where the form sits, e.g. "After 12th, 6 months" (decides the `form` value saved with the lead). */ context?: string; placeholder?: string }) {
  const a = (course.length % 5) + 2;
  const b = (course.charCodeAt(0) % 4) + 3;

  const validate = (d: Record<string, string>): Errors => {
    const e: Errors = {};
    if ((d.name ?? "").trim().length < 2) e.name = "Enter your full name (at least 2 letters).";
    if (!/^(\+?91)?[6-9]\d{9}$/.test((d.phone ?? "").replace(/[\s-]/g, ""))) e.phone = "Enter a valid 10-digit Indian mobile number, e.g. 98881 22254.";
    if (!d.course) e.course = "Choose the program you are interested in.";
    if ((d.message ?? "").length > 500) e.message = "Keep your message under 500 characters.";
    if (Number((d.check ?? "").trim()) !== a + b) e.check = `Enter the answer to ${a} + ${b} as a number.`;
    return e;
  };

  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const read = () => Object.fromEntries(new FormData(formRef.current!)) as Record<string, string>;

  const onBlur = (e: FocusEvent<HTMLFormElement>) => {
    const name = (e.target as EventTarget as HTMLInputElement).name as Field;
    if (!name) return;
    const all = validate(read());
    setErrors((prev) => ({ ...prev, [name]: all[name] }));
  };

  const send = (d: Record<string, string>) =>
    submitLead({ form: context.startsWith("After 12th") ? "after-12th" : "training", course: d.course, name: d.name, phone: d.phone, message: d.message });

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

  // Soft UI: pressed input wells that lift to white on focus; errors add a visible red border (not colour-only: + message).
  const control = (f: Field) => `su-field ${errors[f] ? "!border-red-600" : ""}`;

  const a11y = (f: Field) => ({
    id: `trq-${f}`,
    name: f,
    "aria-invalid": errors[f] ? true : undefined,
    "aria-describedby": errors[f] ? `trq-${f}-error` : undefined,
    disabled: status === "loading",
  });

  const error = (f: Field) =>
    errors[f] && (
      <p id={`trq-${f}-error`} className="mt-1.5 flex items-start gap-1.5 text-sm font-medium text-red-700">
        <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden /> {errors[f]}
      </p>
    );

  const label = "mb-2 block text-sm font-semibold text-ink-900";

  if (status === "success") {
    return (
      <div role="status" className="su-card on-light p-6 text-center text-ink-900 sm:p-8">
        <CheckCircle2 className="mx-auto size-12 text-emerald-600" aria-hidden />
        <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-ink-900">Thank you!</h3>
        <p className="mt-2 text-sm text-ink-500">We have received your enquiry. A counsellor will call you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form ref={formRef} noValidate onSubmit={onSubmit} onBlur={onBlur} aria-labelledby="trq-title" className="su-card on-light space-y-5 p-6 text-left text-ink-900 sm:p-8">
      <div>
        <h3 id="trq-title" className="text-2xl font-extrabold tracking-tight text-ink-900">Book your free demo class</h3>
        <p className="mt-1 text-sm text-ink-500">A counsellor will call you within 24 hours.</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="trq-name" className={label}>Your name</label>
          <input {...a11y("name")} autoComplete="name" placeholder="e.g. Harpreet Kaur" className={control("name")} />
          {error("name")}
        </div>
        <div>
          <label htmlFor="trq-phone" className={label}>Phone number</label>
          <input {...a11y("phone")} type="tel" inputMode="tel" autoComplete="tel" placeholder="e.g. 98881 22254" className={control("phone")} />
          {error("phone")}
        </div>
      </div>

      <div>
        <label htmlFor="trq-course" className={label}>Program</label>
        <select {...a11y("course")} defaultValue={course} className={control("course")}>
          {courses.map((c) => <option key={c}>{c}</option>)}
        </select>
        {error("course")}
      </div>

      <div>
        <label htmlFor="trq-message" className={label}>
          Your message <span className="font-normal text-ink-500">(optional)</span>
        </label>
        <textarea {...a11y("message")} rows={3} maxLength={500} placeholder={placeholder} className={`${control("message")} resize-y`} />
        {error("message")}
      </div>

      <div className="sm:max-w-xs">
        <label htmlFor="trq-check" className={label}>Security check: what is {a} + {b}?</label>
        <input {...a11y("check")} inputMode="numeric" autoComplete="off" placeholder="Answer" className={control("check")} />
        {error("check")}
      </div>

      <button type="submit" aria-disabled={status === "loading" || undefined} aria-busy={status === "loading" || undefined} className="su-btn-accent tr-shine w-full !py-4 text-base">
        {status === "loading" ? (
          <><LoaderCircle className="size-5 animate-spin motion-reduce:animate-none" aria-hidden /> Sending your enquiry…</>
        ) : (
          <>Send Message <Send className="size-4" aria-hidden /></>
        )}
      </button>

      <div aria-live="polite" className="min-h-5 text-center text-sm">
        {status === "error" && <p className="text-red-700">We couldn&apos;t save your details. Please try again in a moment.</p>}
        {status === "idle" && <p className="text-ink-500">100% free · No spam · Your details stay private</p>}
      </div>
    </form>
  );
}
