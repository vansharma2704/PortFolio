import Image from "next/image";
import type { Project } from "@/data/portfolio";
export function ProjectArt({ project, immersive = false }: { project: Project; immersive?: boolean }) {
  const image = project.image || (project.slug === "ai-brand-studio" ? "/images/ai-brand-studio-ui.png" : project.slug === "merabudget" ? "/images/merabudget-ui.png" : "/images/kai-career-mentor-ui.png");
  return <div className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl ${immersive ? "aspect-[4/3] md:aspect-[16/8]" : "aspect-[4/3] lg:aspect-[16/9]"}`}>
    <Image src={image} alt={`${project.title} interface preview`} fill sizes={immersive ? "86vw" : "65vw"} className="object-cover object-top"/>
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/[.03]" aria-hidden="true"/>
  </div>;
}
