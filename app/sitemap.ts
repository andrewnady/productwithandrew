import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://productwithandrew.com";
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/upwork-book`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${base}/#products`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/#portfolio`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/#framework`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/#credibility`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/#contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
  ];
}
