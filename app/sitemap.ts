import type { MetadataRoute } from "next";
import { commonIndications } from "./indications/data";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://shockismedical.com").replace(/\/$/, "");

const staticRoutes = [
  "",
  "/products/shockwave-therapy-system",
  "/products/accessories",
  "/applications",
  "/resources",
  "/resources/knowledge-base",
  "/resources/downloads",
  "/resources/faq",
  "/quality-regulatory",
  "/oem-solutions",
  "/distributors",
  "/about",
  "/contact",
  "/request-quote",
  "/privacy-policy",
  "/terms-of-service",
  "/shipping-returns",
  "/refund-policy",
  "/warranty-policy",
];

const knowledgeBaseSlugs = [
  "shockwave-therapy-guide",
  "radial-vs-focused-shockwave-therapy",
  "how-clinics-use-shockwave-devices",
  "treatment-applications",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...staticRoutes,
    ...commonIndications.map(({ slug }) => `/applications/${slug}`),
    ...knowledgeBaseSlugs.map((slug) => `/resources/knowledge-base/${slug}`),
  ];

  return routes.map((route) => ({ url: `${siteUrl}${route}` }));
}
