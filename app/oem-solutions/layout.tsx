import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OEM Medical Device Solutions | SHOCKIS Medical",
  description: "Explore future SHOCKIS OEM and custom medical device solution capabilities.",
  alternates: { canonical: "/oem-solutions" },
};

export default function OemSolutionsLayout({ children }: { children: React.ReactNode }) { return children; }
