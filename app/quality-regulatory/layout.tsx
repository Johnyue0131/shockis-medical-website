import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quality & Regulatory Support",
  description: "SHOCKIS quality controls, product release processes and professional regulatory documentation support.",
  alternates: { canonical: "/quality-regulatory" },
};

export default function QualityRegulatoryLayout({ children }: { children: React.ReactNode }) { return children; }
