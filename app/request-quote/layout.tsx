import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Quote",
  description: "Request product information, availability, shipping details and a quotation for the SHOCKIS Shockwave Therapy System.",
  alternates: { canonical: "/request-quote" },
};

export default function RequestQuoteLayout({ children }: { children: React.ReactNode }) { return children; }
