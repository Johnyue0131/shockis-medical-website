import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell SHOCKIS about your organization, market and product requirements.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) { return children; }
