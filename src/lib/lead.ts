export type LeadForm = "popup" | "demo" | "contact" | "course" | "ai-course" | "training" | "after-12th";

export type Lead = {
  form: LeadForm;
  phone: string;
  name?: string;
  email?: string;
  course?: string;
  location?: string;
  batch?: string;
  message?: string;
};

/** Saves a form submission to MySQL through POST /api/lead. Throws when it could not be saved. */
export async function submitLead(lead: Lead) {
  const res = await fetch("/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...lead, page: window.location.pathname }),
  });
  if (!res.ok) throw new Error("lead-not-saved");
}
