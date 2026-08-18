import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shockwave Therapy FAQ | SHOCKIS Medical",
  description: "Frequently asked questions about SHOCKIS shockwave therapy systems, cooperation and professional support.",
  alternates: { canonical: "/resources/faq" },
};

export default function ResourcesFaqLayout({ children }: { children: React.ReactNode }) { return children; }
