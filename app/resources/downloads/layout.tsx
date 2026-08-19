import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Downloads | SHOCKIS Medical",
  description: "SHOCKIS product documentation and professional resource downloads.",
  alternates: { canonical: "/resources/downloads" },
};

export default function DownloadsLayout({ children }: { children: React.ReactNode }) { return children; }
