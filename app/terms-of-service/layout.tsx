import type { Metadata } from "next";

export const metadata: Metadata = { alternates: { canonical: "/terms-of-service" } };

export default function TermsOfServiceLayout({ children }: { children: React.ReactNode }) { return children; }
