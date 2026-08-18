import { notFound } from "next/navigation";
import { PlaceholderPage } from "../../../placeholder-page";

const articles: Record<string, string> = {
  "shockwave-therapy-guide": "Shockwave Therapy Guide",
  "radial-vs-focused-shockwave-therapy": "Radial vs Focused Shockwave Therapy",
  "how-clinics-use-shockwave-devices": "How Clinics Use Shockwave Devices",
  "treatment-applications": "Treatment Applications",
};

export function generateStaticParams() { return Object.keys(articles).map((slug) => ({ slug })); }

export default async function KnowledgeArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!articles[slug]) notFound();
  return <PlaceholderPage title={articles[slug]} />;
}
