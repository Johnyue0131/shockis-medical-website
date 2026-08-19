import type { Metadata } from "next";
import { getIndicationBySlug } from "../data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const indication = getIndicationBySlug(slug);

  return indication
    ? {
        title: indication.title,
        description: indication.introduction,
      }
    : {
        title: "Clinical Application",
      };
}

export default function IndicationDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}