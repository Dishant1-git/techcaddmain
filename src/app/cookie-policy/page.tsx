import { LegalView, legalMetadata } from "@/components/legal/LegalView";

export const metadata = legalMetadata("cookie-policy");

export default function Page() {
  return <LegalView slug="cookie-policy" />;
}
