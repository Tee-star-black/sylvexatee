import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { services } from "@/lib/marketing";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["","/about","/services","/packages","/process","/portfolio","/growth-support","/testimonials","/faq","/resources","/contact","/lab"];
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path,index)=>({url:`${siteConfig.url}${path}`,lastModified:new Date(),changeFrequency:path==="/resources"?"weekly":"monthly",priority:index===0?1:path==="/contact"?0.9:0.8}));
  const serviceEntries: MetadataRoute.Sitemap = services.map((service)=>({url:`${siteConfig.url}/services/${service.slug}`,lastModified:new Date(),changeFrequency:"monthly",priority:0.75}));
  return [...staticEntries,...serviceEntries];
}
