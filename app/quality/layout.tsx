import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quality",
  description: "An overview of SHOCKIS quality controls, product release processes and professional documentation support.",
};

export default function QualityLayout({ children }: { children: React.ReactNode }) { return children; }
