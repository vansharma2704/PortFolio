import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/portfolio";
import { projectColors } from "@/lib/design";
import { ArrowIcon, LockIcon } from "./icons";
export function ProjectCard({ project, isReversed = false }: { project: Project; isReversed?: boolean }) {
  const color = projectColors[project.color];
  const imageSrc = project.image || (project.slug === "ai-brand-studio" ? "/images/ai-brand-studio-ui.png" : project.slug === "merabudget" ? "/images/merabudget-ui.png" : "/images/kai-career-mentor-ui.png");

  return (
    <article className="group relative border-t border-white/10 py-8 md:py-10">
      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="focus-ring absolute right-3 top-11 z-20 inline-flex items-center gap-2 rounded-full border border-white/15 bg-ink/80 px-3 py-2 font-mono text-[9px] uppercase tracking-wider text-paper shadow-xl backdrop-blur-md transition-all duration-300 hover:border-signal hover:bg-signal hover:text-ink hover:scale-105 md:right-4 md:top-14"
          aria-label={`Open ${project.title} live website`}
        >
          Live site <ArrowIcon size={11} />
        </a>
      ) : project.badge ? (
        <span
          className="absolute right-3 top-11 z-20 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-ink/80 px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-paper/85 shadow-xl backdrop-blur-md md:right-4 md:top-14"
          title={project.accessNotice || project.badge}
        >
          <LockIcon size={11} className="text-signal" />
          {project.badge}
        </span>
      ) : null}
      <Link href={`/work/${project.slug}`} className="focus-ring block" aria-label={`View ${project.title} case study`}>
        <div className={`grid gap-8 lg:grid-cols-12 lg:items-center ${isReversed ? "lg:direction-rtl" : ""}`}>
          
          {/* Project Visual Showcase (7 cols) */}
          <div className={`relative lg:col-span-7 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
            {/* Ambient Brand Halo on Hover */}
            <div
              className="pointer-events-none absolute -inset-2 rounded-3xl opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-25"
              style={{ background: color }}
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/60 shadow-2xl transition-all duration-500 group-hover:-translate-y-1.5 group-hover:border-white/30 group-hover:shadow-[0_30px_70px_rgba(0,0,0,0.75)]">
              {/* Browser Header Bar */}
              <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500/60 inline-block" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500/60 inline-block" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/60 inline-block" />
                </div>
                <span className="hidden font-mono text-[10px] text-muted sm:inline">
                  {project.slug}.{project.liveUrl ? "prod" : "internal"}
                </span>
                <span className="h-2 w-2 rounded-full" style={{ background: color, boxShadow: `0 0 10px ${color}` }} />
              </div>

              {/* Mockup Image */}
              <div className={`relative w-full overflow-hidden bg-black/80 ${project.slug === "ai-brand-studio" ? "aspect-[16/9]" : "aspect-[16/10]"}`}>
                <Image
                  src={imageSrc}
                  alt={`${project.title} interface preview`}
                  fill
                  sizes="(min-width: 1024px) 58vw, 92vw"
                  className={`transition-transform duration-700 ease-out group-hover:scale-[1.02] ${
                    project.slug === "ai-brand-studio"
                      ? "object-contain object-center p-2 sm:p-3"
                      : "object-cover object-top"
                  }`}
                />
                {project.slug !== "ai-brand-studio" && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-30" />
                )}
              </div>
            </div>
          </div>

          {/* Project Details & Metrics (5 cols) */}
          <div className={`space-y-4 lg:col-span-5 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-semibold" style={{ color }}>
                {`// ${project.index}`}
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted">
                {project.impact}
              </span>
            </div>

            <div>
              <h3 className="text-3xl font-semibold tracking-tight text-paper transition-colors group-hover:text-signal md:text-4xl">
                {project.title}
              </h3>
              <p className="mt-1.5 font-mono text-xs text-muted">
                {project.role} · {project.year}
              </p>
            </div>

            <p className="text-sm leading-relaxed text-paper/70 md:text-base">
              {project.summary}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-3 gap-2 border-y border-white/10 py-3">
              {project.metrics.map((metric) => (
                <div key={metric.label}>
                  <p className="font-mono text-base font-semibold" style={{ color }}>
                    {metric.value}
                  </p>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-muted">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Services / Tags & Link Button */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
              <div className="flex flex-wrap gap-2">
                {project.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1 font-mono text-[10px] text-paper/70 transition-all duration-200 hover:border-signal/40 hover:bg-signal/[0.06] hover:text-signal"
                  >
                    {service}
                  </span>
                ))}
              </div>

              <span className="inline-flex items-center gap-2 font-mono text-xs font-medium text-signal transition-transform duration-300 group-hover:translate-x-1.5">
                <span>View Case Study</span>
                <ArrowIcon size={14} className="transition-transform duration-300 group-hover:rotate-45" />
              </span>
            </div>
          </div>

        </div>
      </Link>
    </article>
  );
}
