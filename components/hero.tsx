"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/portfolio";
import { getEmailComposeUrl } from "@/lib/contact";
import { ArrowIcon, GithubIcon, LinkedinIcon } from "./icons";

const highlights = [
  ["01", "Full-stack products"],
  ["02", "Applied AI systems"],
  ["03", "Reliable REST APIs"],
];

export function Hero() {
  const reduce = useReducedMotion();
  const reveal = (delay: number) => ({
    initial: reduce ? false as const : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section data-hero className="relative isolate overflow-hidden border-b border-white/10 pt-20 sm:pt-22 md:pt-24">
      <div className="hero-halo absolute -right-40 top-0 -z-10 h-[42rem] w-[42rem] rounded-full bg-signal/[0.08] blur-[120px]" aria-hidden="true" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:7.5rem_100%] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" aria-hidden="true" />

      <div className="container-frame grid min-h-[calc(100svh-4.5rem)] gap-8 pt-2 pb-10 lg:grid-cols-12 lg:items-center lg:gap-8 lg:pt-0 lg:pb-12">
        <div className="relative z-10 lg:col-span-7 lg:py-2">
          <motion.div {...reveal(0.02)} className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-paper/70 backdrop-blur-md">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" /><span className="relative h-2 w-2 rounded-full bg-emerald-400" /></span>
            Available for meaningful opportunities
          </motion.div>

          <motion.p {...reveal(0.07)} className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-signal">
            Vansh Sharma — Software Engineer
          </motion.p>
          <motion.h1 {...reveal(0.12)} className="mt-4 max-w-4xl text-[clamp(2.35rem,6.5vw,7.25rem)] font-semibold leading-[0.88] tracking-[-0.075em] text-paper">
            Building digital products that <span className="premium-gradient-text font-semibold">feel effortless.</span>
          </motion.h1>
          <motion.p {...reveal(0.18)} className="mt-5 max-w-2xl text-base leading-relaxed text-paper/65 md:text-lg">
            I design and engineer fast, thoughtful web experiences—from polished interfaces to production-ready APIs and practical AI workflows.
          </motion.p>

          <motion.div {...reveal(0.23)} className="mt-7 flex flex-wrap items-center gap-3">
            <a href="#work" className="focus-ring group inline-flex items-center gap-2.5 rounded-full bg-paper px-6 py-3.5 text-sm font-semibold text-ink shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_26px_rgba(245,243,237,0.22)]">
              Explore my work <ArrowIcon size={15} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a href={getEmailComposeUrl(profile.email)} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center rounded-full border border-white/15 bg-white/[0.025] px-6 py-3.5 text-sm font-medium text-paper transition-all duration-300 hover:border-signal/60 hover:bg-signal/10 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(214,198,161,0.18)]">
              Let&apos;s work together
            </a>
          </motion.div>

          <motion.div {...reveal(0.28)} className="mt-8 flex items-center gap-5 sm:gap-6 border-t border-white/10 pt-5">
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted">Find me</span>
            <div className="flex items-center gap-4">
              <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="focus-ring text-muted transition-all hover:text-signal hover:scale-110"><GithubIcon size={20} /></a>
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="focus-ring text-muted transition-all hover:text-signal hover:scale-110"><LinkedinIcon size={20} /></a>
            </div>
            <span className="ml-auto hidden items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-muted sm:inline-flex">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
              </span>
              DELHI, INDIA
            </span>
          </motion.div>
        </div>

        <motion.aside {...reveal(0.16)} className="hero-product-card relative mx-auto w-full max-w-[28rem] lg:col-span-5 lg:mr-0 lg:max-w-[30rem]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.03] p-2 shadow-[0_40px_120px_rgba(0,0,0,.55)] transition-all duration-500 hover:border-white/25 hover:shadow-[0_45px_130px_rgba(0,0,0,.65)]">
            <div className="relative h-full overflow-hidden rounded-[1.55rem]">
              <Image
                src="/images/hero-character.jpeg"
                alt="Character illustration of Vansh Sharma"
                fill
                priority
                sizes="(min-width:1024px) 36vw, 90vw"
                className="object-cover object-center saturate-[.85] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
              <div className="pointer-events-none absolute inset-0 z-10 rounded-[1.55rem] bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.06]" />
              
              {/* Currently building badge - ALWAYS visible, high contrast, never hidden */}
              <div className="absolute inset-x-3 bottom-3 z-20 rounded-2xl border border-white/15 bg-ink/90 p-3.5 backdrop-blur-md shadow-2xl sm:inset-x-5 sm:bottom-5 sm:p-4">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-signal">Currently building at</p>
                </div>
                <p className="mt-1 text-lg font-bold tracking-tight text-paper sm:text-xl">Cogmac Technologies</p>
              </div>
            </div>
          </div>
          {/* Desktop/Laptop Floating Badges (Untouched for large screens) */}
          <div className="absolute -left-14 lg:-left-20 top-10 z-30 hidden rounded-2xl border border-white/15 bg-ink/90 p-4 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-signal/40 sm:block">
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">Core stack</p>
            <p className="mt-1 text-sm font-semibold text-paper">React · Next.js · Node.js</p>
          </div>

          <div className="absolute -right-6 bottom-28 z-30 hidden rounded-2xl border border-white/25 bg-paper p-4 text-ink shadow-[0_20px_60px_rgba(0,0,0,0.55)] transition-all duration-300 hover:scale-105 hover:shadow-[0_25px_70px_rgba(0,0,0,0.65)] sm:block">
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#876f3f]" />
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#876f3f]">Approach</p>
            </div>
            <p className="mt-1 text-sm font-bold text-ink">Think clearly. Ship carefully.</p>
          </div>

          {/* Mobile Phone Layout: Badges sit neatly below the portrait so the character's head and body are 100% visible */}
          <div className="mt-3.5 grid grid-cols-2 gap-2.5 sm:hidden">
            <div className="rounded-2xl border border-white/15 bg-ink/90 p-3 shadow-lg backdrop-blur-md">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">Core stack</p>
              <p className="mt-1 text-xs font-semibold text-paper">React · Next.js · Node.js</p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-paper p-3 text-ink shadow-lg">
              <div className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#876f3f]" />
                <p className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[#876f3f]">Approach</p>
              </div>
              <p className="mt-1 text-xs font-bold leading-snug text-ink">Think clearly. Ship carefully.</p>
            </div>
          </div>
        </motion.aside>
      </div>

      <div className="border-t border-white/10 bg-black/15">
        <div className="container-frame grid sm:grid-cols-3">
          {highlights.map(([number, label]) => (
            <div key={number} className="flex items-center gap-4 border-b border-white/10 py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0">
              <span className="font-mono text-[10px] text-signal">{number}</span>
              <span className="text-sm font-medium text-paper/70">{label}</span>
              <span className="ml-auto h-px w-8 bg-white/15" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
