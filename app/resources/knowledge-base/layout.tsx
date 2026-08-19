import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shockwave Therapy Knowledge Base | SHOCKIS Medical",
  description: "Professional educational resources about shockwave therapy systems, technologies and clinical workflows.",
  alternates: { canonical: "/resources/knowledge-base" },
};

export default function KnowledgeBaseLayout({ children }: { children: React.ReactNode }) { return children; }
