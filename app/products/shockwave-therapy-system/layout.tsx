import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SHOCKIS ST100 Shockwave Therapy System",
  description: "Professional radial shockwave therapy system for clinics, rehabilitation centers and healthcare providers.",
  alternates: { canonical: "/products/shockwave-therapy-system" },
};

export default function ProductSystemLayout({ children }: { children: React.ReactNode }) { return children; }
