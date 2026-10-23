"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/portfolio";
import { Reveal } from "./reveal";
import { ArrowIcon, ArrowLeftIcon, LockIcon } from "./icons";
import { ProjectArt } from "./project-art";
import { projectColors } from "@/lib/design";

function getRouteForScreen(index: number, slug: string) {
  if (slug === "ai-brand-studio") {
    switch (index) {
      case 0: return "/editor/dashboard";
      case 1: return "/editor/prompt-builder";
      case 2: return "/editor/brands/oxcia";
      case 3: return "/editor/saved-designs";
      default: return "/editor";
    }
  }
  return `/${slug}/screen-${index + 1}`;
}

export function CaseStudy({ project, next }: { project: Project; next: Project }) {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const color = projectColors[project.color];
  const activeScreen = project.screens?.[activeScreenIndex] || project.screens?.[0];

  return (
    <main id="main">
      <section data-case-hero className="relative flex min-h-[92svh] items-end overflow-hidden pb-10 pt-28">
        <div className="signal-grid absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="container-frame relative z-10">
          <Link href="/#work" className="focus-ring link-sweep mb-14 inline-flex items-center gap-2 pb-1 font-mono text-xs uppercase tracking-widest text-muted"><ArrowLeftIcon size={14}/> All work</Link>
          <p className="eyebrow" style={{ color }}>Case study / {project.index}</p>
          <h1 className="mt-6 max-w-[12ch] text-[clamp(2.5rem,10vw,11rem)] font-medium leading-[.92] tracking-[-.07em]">{project.title}</h1>
          <div className="mt-10 grid gap-8 border-t hairline pt-5 md:grid-cols-12">
            <p className="text-xl leading-relaxed md:col-span-6 md:text-2xl">{project.subtitle}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm md:col-span-6 md:col-start-7">
              <div><p className="eyebrow text-muted">Role</p><p className="mt-3 font-medium">{project.role}</p></div>
              <div><p className="eyebrow text-muted">Year</p><p className="mt-3 font-medium">{project.year}</p></div>
              <div>
                <p className="eyebrow text-muted">Access</p>
                <p className="mt-3 font-mono text-xs text-signal">
                  {project.badge ? "Internal System" : "Public Web App"}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.services.map((service) => (
              <span key={service} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-paper/70">
                {service}
              </span>
            ))}
          </div>
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="focus-ring mt-8 inline-flex items-center gap-3 rounded-full bg-signal px-5 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5">Visit live project <ArrowIcon size={15}/></a>
          ) : (
            <div className="mt-8 inline-flex max-w-full items-center gap-2.5 rounded-2xl border border-white/15 bg-white/[0.04] p-3 font-mono text-xs text-paper/85 shadow-lg backdrop-blur-md sm:rounded-full sm:px-4 sm:py-2.5">
              <LockIcon size={14} className="text-signal shrink-0" />
              <span>{project.accessNotice || "Proprietary enterprise tool · Deployed internally under company NDA"}</span>
            </div>
          )}

          {/* Grand Hero Visual Showcase */}
          {project.image && (
            <div className="mt-12 overflow-hidden rounded-[2rem] border border-white/15 bg-black/60 shadow-[0_40px_100px_rgba(0,0,0,0.85)]">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} Hero Showcase`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 90vw, 98vw"
                  className={
                    project.slug === "ai-brand-studio"
                      ? "object-contain object-center p-2 sm:p-4"
                      : "object-cover object-center"
                  }
                />
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="container-frame py-24 md:py-40">
        <Reveal><p className="mx-auto max-w-5xl text-balance text-center text-3xl font-medium leading-tight tracking-[-.045em] md:text-6xl">{project.summary}</p></Reveal>
        <div className="mt-20"><p className="eyebrow text-muted">Project highlights</p><div className="mt-6 grid gap-px overflow-hidden rounded-[1.5rem] bg-line md:grid-cols-3">{project.metrics.map((metric, index) => <Reveal key={metric.label} delay={index * .07} className="metric-cell relative overflow-hidden bg-ink p-8 md:p-10"><strong className="relative z-10 text-[clamp(2rem,4vw,3.5rem)] font-medium tracking-[-.05em]" style={{ color }}>{metric.value}</strong><p className="relative z-10 mt-4 text-sm text-muted">{metric.label}</p></Reveal>)}</div></div>
      </section>

      {/* Interactive Core Platform Screens / Workflow */}
      {project.screens && project.screens.length > 0 && activeScreen ? (
        <section className="container-frame pb-24 md:pb-36">
          <div className="border-t hairline pt-12 md:pt-16">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="eyebrow" style={{ color }}>
                  Platform Architecture & Flow
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
                  Core Application Screens.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-muted">
                Step through the 4 production stages of the brand asset creation workflow, from identity setup to final design review.
              </p>
            </div>

            {/* Interactive Screen Selector Tabs */}
            <div className="mt-8 flex flex-wrap items-center gap-2 border-b hairline pb-5">
              {project.screens.map((screen, idx) => {
                const isActive = idx === activeScreenIndex;
                return (
                  <button
                    key={screen.tag}
                    type="button"
                    onClick={() => setActiveScreenIndex(idx)}
                    className={`focus-ring inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-mono text-xs transition-all ${
                      isActive
                        ? "border border-signal bg-signal/15 text-signal font-semibold shadow-md shadow-signal/10"
                        : "border border-white/10 bg-white/[0.02] text-muted hover:border-white/20 hover:text-paper"
                    }`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${isActive ? "bg-signal" : "bg-white/30"}`} />
                    <span>{screen.tag.split("/")[0].trim()}</span>
                    <span className="hidden sm:inline opacity-80">{screen.title.split("&")[0].trim()}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Screen Details & Visual Frame */}
            <div className="mt-8 space-y-6">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-baseline">
                <div>
                  <span className="font-mono text-xs font-semibold" style={{ color }}>
                    {activeScreen.tag}
                  </span>
                  <h3 className="mt-1 text-2xl font-semibold tracking-tight text-paper md:text-3xl">
                    {activeScreen.title}
                  </h3>
                </div>
                <p className="max-w-xl text-sm leading-relaxed text-paper/80 md:text-base">
                  {activeScreen.description}
                </p>
              </div>

              {/* Browser Mockup Frame with Real Cropped Screenshot */}
              <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-black/80 shadow-2xl">
                {/* Browser Top Bar */}
                <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/60 inline-block" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/60 inline-block" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/60 inline-block" />
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-0.5 font-mono text-[11px] text-muted">
                    <LockIcon size={10} className="text-signal" />
                    <span>ai-brand-studio.internal{getRouteForScreen(activeScreenIndex, project.slug)}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setActiveScreenIndex((prev) => (prev > 0 ? prev - 1 : project.screens!.length - 1))}
                      className="focus-ring rounded-full border border-white/10 bg-white/[0.04] p-1.5 text-muted hover:text-paper"
                      aria-label="Previous screen"
                    >
                      <ArrowLeftIcon size={12} />
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveScreenIndex((prev) => (prev + 1) % project.screens!.length)}
                      className="focus-ring rounded-full border border-white/10 bg-white/[0.04] p-1.5 text-muted hover:text-paper"
                      aria-label="Next screen"
                    >
                      <ArrowIcon size={12} />
                    </button>
                  </div>
                </div>

                {/* Screenshot Display */}
                <div className="relative aspect-[2048/902] w-full overflow-hidden bg-black">
                  <Image
                    src={activeScreen.image}
                    alt={activeScreen.title}
                    fill
                    sizes="(min-width: 1024px) 85vw, 95vw"
                    className="object-cover object-top transition-opacity duration-300"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="container-frame pb-28 md:pb-48">
        {[["The challenge", project.challenge], ["The approach", project.approach], ["The outcome", project.result]].map(([title, copy], i) => <Reveal key={title}><div className="grid gap-8 border-t hairline py-12 md:grid-cols-12 md:py-20"><p className="eyebrow text-muted md:col-span-3">0{i+1} / {title}</p><p className="max-w-3xl text-2xl leading-relaxed tracking-[-.025em] md:col-span-8 md:text-4xl">{copy}</p></div></Reveal>)}
      </section>

      <Link data-cursor="Next" href={`/work/${next.slug}`} className="next-project focus-ring group relative block overflow-hidden border-t hairline py-20 md:py-32"><div className="next-project-fill absolute inset-0 origin-bottom scale-y-0 bg-paper transition-transform duration-700 ease-out group-hover:scale-y-100"/><div className="container-frame relative z-10 transition-colors duration-500 group-hover:text-ink"><p className="eyebrow text-muted">Next case study</p><div className="mt-7 flex items-end justify-between"><h2 className="display text-[clamp(3.5rem,10vw,10rem)]">{next.title}</h2><ArrowIcon className="mb-2 h-9 w-9 transition-transform group-hover:-translate-y-2 group-hover:translate-x-2 md:h-16 md:w-16"/></div></div></Link>
    </main>
  );
}

