import { site } from "@/data/site";

/** wa.me link with a pre-filled message to the TechCADD WhatsApp number. */
export const waLink = (text: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
