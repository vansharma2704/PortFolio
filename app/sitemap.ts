import type { MetadataRoute } from "next";
import { projects } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap { const base = "https://vanshsharma.dev"; return [{ url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }, ...projects.map(project => ({ url: `${base}/work/${project.slug}`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: .8 }))]; }
