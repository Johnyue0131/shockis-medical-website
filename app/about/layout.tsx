import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "SHOCKIS focuses on professional shockwave therapy systems for global healthcare providers and medical partners.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) { return children; }
