import { LegalView, legalMetadata } from "@/components/legal/LegalView";

export const metadata = legalMetadata("privacy-policy");

export default function Page() {
  return <LegalView slug="privacy-policy" />;
}
