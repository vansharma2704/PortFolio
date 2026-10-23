"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { experiments } from "@/data/portfolio";
import { ArrowIcon, SparklesIcon } from "./icons";
import { projectColors } from "@/lib/design";
import { Reveal } from "./reveal";

type Accent = keyof typeof projectColors;

export function Experiments() {
  return (
    <section id="lab" className="container-frame scroll-mt-20 py-14 md:py-20">
      <Reveal>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md border border-signal/30 bg-signal/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-signal">
              <SparklesIcon size={14} /> Engineering Lab / Studies
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Explorations &amp; System Prototypes
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted md:text-base">
            Focused experiments in distributed API architecture, AI prompt evaluation, and algorithm optimization.
          </p>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {experiments.map((item, index) => (
          <ExperimentCard item={item} index={index} key={item.number} />
        ))}
      </div>
    </section>
  );
}

function ExperimentCard({ item, index }: { item: (typeof experiments)[number]; index: number }) {
  const reduce = useReducedMotion();
  const rx = useSpring(useMotionValue(0), { stiffness: 180, damping: 20 });
  const ry = useSpring(useMotionValue(0), { stiffness: 180, damping: 20 });
  const color = projectColors[item.accent as Accent];

  return (
    <Reveal delay={index * 0.08}>
      <motion.article
        tabIndex={0}
        data-cursor="Experiment"
        onPointerMove={(event) => {
          if (reduce) return;
          const rect = event.currentTarget.getBoundingClientRect();
          rx.set(((event.clientY - rect.top) / rect.height - 0.5) * -5);
          ry.set(((event.clientX - rect.left) / rect.width - 0.5) * 5);
        }}
        onPointerLeave={() => {
          rx.set(0);
          ry.set(0);
        }}
        style={{ rotateX: rx, rotateY: ry, transformPerspective: 900, "--lab-color": color } as React.CSSProperties}
        className="lab-card focus-ring group relative flex min-h-[21rem] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 md:p-7"
      >
        <div className="lab-glow absolute -right-20 -top-20 h-56 w-56 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-150" />
        <div className="relative z-10 flex items-center justify-between font-mono text-xs text-muted">
          <span className="font-semibold text-signal">EXP // {item.number}</span>
          <span className="rounded bg-white/[0.04] px-2 py-0.5 text-[10px]">{item.year}</span>
        </div>

        <LabVisual index={index} color={color} />

        <div className="relative z-10 border-t border-white/10 pt-4">
          <p className="font-mono text-[10px] uppercase tracking-wider" style={{ color }}>
            {item.category}
          </p>
          <div className="mt-2 flex items-end justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-paper">{item.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">{item.description}</p>
            </div>
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 transition-all duration-300 group-hover:rotate-45 group-hover:border-paper group-hover:bg-paper group-hover:text-ink">
              <ArrowIcon size={14} />
            </span>
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}

function LabVisual({ index, color }: { index: number; color: string }) {
  if (index === 0) {
    return (
      <div aria-hidden="true" className="relative z-10 my-4 flex flex-col items-center justify-center gap-2">
        <div className="font-mono text-3xl font-bold tracking-wider" style={{ color }}>
          REST &#x21C4; ORM
        </div>
        <div className="flex gap-2">
          {["GET /api", "POST /auth", "200 OK"].map((pill) => (
            <span key={pill} className="rounded-md border border-white/10 bg-black/50 px-2 py-1 font-mono text-[10px] text-paper/80">
              {pill}
            </span>
          ))}
        </div>
      </div>
    );
  }
  if (index === 1) {
    return (
      <div aria-hidden="true" className="relative z-10 my-4 flex flex-col items-center justify-center">
        <div
          className="lab-blob h-24 w-24 rounded-[38%_62%_58%_42%] border"
          style={{ borderColor: color, boxShadow: `inset 0 0 35px ${color}44, 0 0 35px ${color}22` }}
        />
        <span className="mt-2 font-mono text-[10px] uppercase tracking-wider text-muted">Gemini &amp; OpenAI Pipelines</span>
      </div>
    );
  }
  return (
    <div aria-hidden="true" className="relative z-10 my-4 flex flex-col items-center justify-center">
      <div className="grid h-24 w-24 grid-cols-4 gap-1.5">
        {Array.from({ length: 16 }, (_, i) => (
          <span
            key={i}
            className="lab-cell rounded-sm border border-white/10 transition-all duration-300 group-hover:border-white/30"
            style={{ animationDelay: `${i * 60}ms`, background: i % 3 === 0 ? color : "rgba(255,255,255,0.02)" }}
          />
        ))}
      </div>
      <span className="mt-2 font-mono text-[10px] uppercase tracking-wider text-muted">Graphs, DP &amp; Trees</span>
    </div>
  );
}
