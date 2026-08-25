import type React from "react";
import type { Metadata } from "next";
import { getIndicationBySlug } from "../../indications/data";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const indication = getIndicationBySlug(slug);

  return indication
    ? {
        title: indication.title,
        description: indication.introduction,
        alternates: { canonical: `/applications/${slug}` },
      }
    : {
        title: "Clinical Application | SHOCKIS Medical",
        alternates: { canonical: `/applications/${slug}` },
      };
}

export default function ApplicationDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}