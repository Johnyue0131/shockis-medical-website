import type { Metadata } from "next";
import { getIndicationBySlug } from "../data";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const indication = getIndicationBySlug(params.slug);
  return indication ? { title: indication.title, description: indication.introduction } : { title: "Clinical Application" };
}

export default function IndicationDetailLayout({ children }: { children: React.ReactNode }) { return children; }
