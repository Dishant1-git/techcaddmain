import { db } from "@/lib/db";

const FORMS = ["popup", "demo", "contact", "course", "ai-course", "training", "after-12th"];

/** Trimmed string limited to `max` characters, or null when empty. */
const text = (v: unknown, max: number) => {
  const s = typeof v === "string" ? v.trim().slice(0, max) : "";
  return s || null;
};

/** POST /api/lead — every form on the site saves into the single `leads` table (database/schema.sql). */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const form = text(body.form, 30);
  const phone = (text(body.phone, 30) ?? "").replace(/[\s-]/g, "");
  if (!form || !FORMS.includes(form)) return Response.json({ ok: false, error: "Unknown form." }, { status: 400 });
  if (!/^(\+?91)?\d{10}$/.test(phone)) return Response.json({ ok: false, error: "Enter a valid 10-digit mobile number." }, { status: 400 });

  try {
    await db.execute(
      "INSERT INTO leads (form, name, phone, email, course, location, batch, message, page_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [form, text(body.name, 120), phone, text(body.email, 160), text(body.course, 200), text(body.location, 100), text(body.batch, 100), text(body.message, 2000), text(body.page, 300)],
    );
    return Response.json({ ok: true });
  } catch (err) {
    console.error("[api/lead] could not save the lead:", err);
    return Response.json({ ok: false, error: "Could not save your details. Please try again." }, { status: 500 });
  }
}
