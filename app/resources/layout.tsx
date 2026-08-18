import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shockwave Therapy Knowledge Center | SHOCKIS Medical",
  description: "Access SHOCKIS knowledge resources, downloads and frequently asked questions for professional shockwave therapy systems.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesLayout({ children }: { children: React.ReactNode }) { return children; }
