import { site } from "./site";

/* Legal pages (/privacy-policy, /terms, /cookie-policy, /refund-policy), linked from the footer on every page.
   DRAFTS written from how this website actually works (enquiry forms saved through /api/lead, WhatsApp / call / map links,
   no advertising or analytics scripts at the time of writing). They are NOT legal advice: have them reviewed, and fill in
   the refund terms, before launch or before running ads. Update `updated` whenever the text changes. */

export type LegalPage = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  sections: { heading: string; text?: string[]; list?: string[] }[];
};

export const legalUpdated = "7 October 2026";

const contact = `Call ${site.phone} or write to ${site.email}.`;

export const legalPages: LegalPage[] = [
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    description: `How ${site.name} collects, uses and protects the details you share through enquiry forms on this website.`,
    intro: `This page explains what information ${site.name} collects through this website, why we collect it and what you can ask us to do with it.`,
    sections: [
      {
        heading: "Information we collect",
        text: ["We only collect what you choose to give us through an enquiry, demo or contact form:"],
        list: [
          "Your name and mobile number",
          "Your email address, if the form asks for it",
          "The course or program you are interested in, your city and preferred batch or learning mode",
          "Any message you write to us",
          "The page of this website you sent the form from",
        ],
      },
      {
        heading: "How we use it",
        list: [
          "To call, message or email you about the course you asked about",
          "To share batch timings, syllabus details and counselling information",
          "To keep a record of enquiries so that we do not contact you twice for the same request",
        ],
        text: ["We do not sell your details, and we do not share them with other companies for their own marketing."],
      },
      {
        heading: "WhatsApp, phone and map links",
        text: [
          "Some buttons open WhatsApp, your phone dialler or Google Maps. When you use them, the information you share is handled by those services under their own privacy policies.",
        ],
      },
      {
        heading: "How long we keep it",
        text: ["We keep enquiry details for as long as they are needed to respond to you and to maintain our admission records, and delete them when they are no longer needed or when you ask us to."],
      },
      {
        heading: "Your choices",
        list: [
          "Ask what details we hold about you",
          "Ask us to correct or delete them",
          "Ask us to stop contacting you",
        ],
        text: [contact],
      },
      {
        heading: "Changes to this policy",
        text: ["If we change how we handle your information, we will update this page and the date shown above."],
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms & Conditions",
    description: `The terms that apply when you use the ${site.name} website and send us an enquiry.`,
    intro: `By using this website you agree to the terms below. They cover the website itself; the terms of a course you enrol in are given to you at the time of admission.`,
    sections: [
      {
        heading: "Information on this website",
        text: [
          "Course content, tools, durations, batch timings and learning modes described here are for general information and may change. Please confirm the current details with our counselling team before you enrol.",
          "Career information, job roles and any salary ranges mentioned are indicative only. Completing a course does not guarantee a job, a salary or a placement.",
        ],
      },
      {
        heading: "Enquiries",
        text: ["When you submit a form you agree that our team may contact you by call, WhatsApp or email about your enquiry. You can ask us to stop at any time."],
      },
      {
        heading: "Using the website",
        list: [
          "Do not misuse the forms, for example by submitting someone else's details without their permission",
          "Do not attempt to disrupt the website or access parts of it that are not public",
          "Text, images and logos on this website belong to their owners and may not be reused without permission",
        ],
      },
      {
        heading: "Links to other websites",
        text: ["This website links to other services such as WhatsApp, Google Maps and social media. We are not responsible for their content or how they handle your information."],
      },
      {
        heading: "Contact",
        text: [contact],
      },
    ],
  },
  {
    slug: "cookie-policy",
    title: "Cookie Policy",
    description: `What this website stores in your browser and why. ${site.name} does not use advertising cookies on this site.`,
    intro: "This page explains what this website stores in your browser.",
    sections: [
      {
        heading: "What we store",
        text: [
          "This website does not set advertising cookies. It uses your browser's own storage for small things that make the site work, such as remembering that the enquiry pop-up has already been shown during your visit so that it does not open again on every page.",
        ],
      },
      {
        heading: "Other services",
        text: ["If you open WhatsApp, Google Maps or a social media page from a link on this website, those services may set their own cookies under their own policies."],
      },
      {
        heading: "Managing storage",
        text: ["You can clear cookies and site data at any time from your browser settings. The website will continue to work; the enquiry pop-up may simply appear again."],
      },
      {
        heading: "Changes",
        text: ["If we add analytics or advertising tools in future, this page will be updated to list them before they are used."],
      },
    ],
  },
  {
    slug: "refund-policy",
    title: "Refund Policy",
    description: `How to get the fee and refund terms for a ${site.name} course before you enrol.`,
    intro: "Fees are not published on this website, and refund terms depend on the course, batch and learning mode you choose.",
    sections: [
      {
        heading: "Before you pay",
        text: ["Ask the counselling team for the fee, what it covers, any instalment option and the refund terms for your course in writing before you make a payment."],
      },
      {
        heading: "Questions about a payment",
        text: [`If you have already enrolled and have a question about a payment or a refund, contact us with your name, course and batch. ${contact}`],
      },
    ],
  },
];
