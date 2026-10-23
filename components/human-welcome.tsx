"use client";

import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { profile } from "@/data/portfolio";
import { Reveal } from "./reveal";

export function HumanWelcome() {
  const reduce = useReducedMotion();
  const mouseX = useSpring(useMotionValue(0), { stiffness: 90, damping: 18 });
  const mouseY = useSpring(useMotionValue(0), { stiffness: 90, damping: 18 });
  const portraitX = useTransform(mouseX, [-.5,.5], [-18,18]);
  const portraitY = useTransform(mouseY, [-.5,.5], [-10,10]);
  const cardX = useTransform(mouseX, [-.5,.5], [20,-20]);
  const cardY = useTransform(mouseY, [-.5,.5], [12,-12]);

  return (
    <section className="container-frame py-12 md:py-16">
      <Reveal>
        <div
          onPointerMove={(event) => {
            if (reduce) return;
            const rect = event.currentTarget.getBoundingClientRect();
            mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
            mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
          }}
          onPointerLeave={() => {
            mouseX.set(0);
            mouseY.set(0);
          }}
          className="welcome-stage relative min-h-[31rem] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.015] md:min-h-[35rem]"
          style={{ perspective: 1200 }}
        >
          {/* Ambient Glows */}
          <div className="absolute right-[2%] top-[8%] h-[72%] w-[62%] rounded-full bg-signal/15 blur-[110px]" aria-hidden="true" />
          <div className="organic-ring absolute right-[8%] top-[12%] h-[68%] w-[52%] rounded-[48%_52%_42%_58%/58%_42%_58%_42%] border border-signal/20" aria-hidden="true" />

          {/* Top Pill */}
          <div className="absolute left-6 top-6 z-30 flex items-center gap-3 md:left-10 md:top-10">
            <span className="h-2 w-2 animate-pulse rounded-full bg-signal" />
            <span className="font-mono text-xs text-muted">Engineering Hub / {profile.location}</span>
          </div>

          {/* Character Illustration */}
          <motion.div style={{ x: portraitX, y: portraitY }} className="absolute inset-x-[-10%] bottom-0 z-10 h-[65%] md:left-auto md:right-[-2%] md:h-[95%] md:w-[62%]">
            <Image
              src="/images/hero-character.jpeg"
              alt="Character illustration of Vansh Sharma wearing a navy suit"
              fill
              sizes="(min-width: 768px) 62vw, 110vw"
              className="object-cover object-[50%_35%] [mask-image:radial-gradient(ellipse_62%_78%_at_60%_52%,black_42%,transparent_76%)]"
            />
          </motion.div>

          {/* Headline & Narrative Card */}
          <motion.div
            style={{
              x: cardX,
              y: cardY,
              rotateX: useTransform(mouseY, [-0.5, 0.5], [3, -3]),
              rotateY: useTransform(mouseX, [-0.5, 0.5], [-4, 4]),
            }}
            className="absolute left-[6%] top-[14%] z-20 max-w-[20rem] md:left-[7%] md:top-[18%] md:max-w-[32rem]"
          >
            <div className="inline-flex items-center gap-2 rounded-md border border-signal/30 bg-signal/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-signal">
              Meet the engineer
            </div>
            <h2 className="mt-4 text-[clamp(2.75rem,6vw,5.5rem)] font-bold leading-[0.96] tracking-tight text-paper">
              Hello,<br />
              <span className="text-paper/40">welcome.</span>
            </h2>
            <p className="mt-4 text-balance text-sm leading-relaxed text-muted md:text-base">
              I’m Vansh, a full-stack software engineer building responsive web applications and practical AI systems.
            </p>
          </motion.div>

          {/* Bottom Left Floating Status Card */}
          <motion.div
            style={{ x: cardX }}
            className="glass-card absolute bottom-8 left-8 z-30 hidden w-72 rounded-2xl border border-white/15 bg-ink/80 p-4 backdrop-blur-xl md:block"
          >
            <div className="flex justify-between font-mono text-[9px] uppercase tracking-widest text-muted">
              <span>Focus Area</span>
              <span className="text-signal">&#x25CF; Active</span>
            </div>
            <p className="mt-2 text-sm font-semibold text-paper">Scalable Interfaces &amp; APIs</p>
            <div className="mt-3 flex gap-1">
              {Array.from({ length: 18 }, (_, i) => (
                <span
                  key={i}
                  className="h-4 flex-1 origin-bottom bg-signal/60 rounded-full"
                  style={{ transform: `scaleY(${0.2 + ((i * 7) % 9) / 10})` }}
                />
              ))}
            </div>
          </motion.div>

          <div className="absolute bottom-6 right-6 z-30 font-mono text-[9px] uppercase tracking-[0.2em] text-muted md:bottom-8 md:right-10">
            <span className="hidden md:inline">Move your cursor to shift the 3D scene</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
