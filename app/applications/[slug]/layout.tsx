import type { Metadata } from "next";
import { getIndicationBySlug } from "../../indications/data";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const indication = getIndicationBySlug(params.slug);

  return indication
    ? {
        title: indication.title,
        description: indication.introduction,
        alternates: { canonical: `/applications/${params.slug}` },
      }
    : {
        title: "Clinical Application",
        alternates: { canonical: `/applications/${params.slug}` },
      };
}

export default function ApplicationDetailLayout({ children }: { children: React.ReactNode }) { return children; }
