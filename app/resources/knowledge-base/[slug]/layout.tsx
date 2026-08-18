import type { Metadata } from "next";

const articleTitles: Record<string, string> = {
  "shockwave-therapy-guide": "Shockwave Therapy Guide",
  "radial-vs-focused-shockwave-therapy": "Radial vs Focused Shockwave Therapy",
  "how-clinics-use-shockwave-devices": "How Clinics Use Shockwave Devices",
  "treatment-applications": "Treatment Applications",
};

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return {
    title: `${articleTitles[params.slug] ?? "Knowledge Base Article"} | SHOCKIS Medical`,
    description: "SHOCKIS professional shockwave therapy knowledge base article placeholder.",
    alternates: { canonical: `/resources/knowledge-base/${params.slug}` },
  };
}

export default function ArticleLayout({ children }: { children: React.ReactNode }) { return children; }
