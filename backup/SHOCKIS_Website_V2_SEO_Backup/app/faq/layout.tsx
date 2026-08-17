import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about shockwave therapy, SHOCKIS products, business cooperation and documentation.",
};

export default function FaqLayout({ children }: { children: React.ReactNode }) { return children; }
