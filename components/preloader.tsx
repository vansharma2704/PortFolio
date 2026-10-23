"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    // If reduced motion is requested, dismiss quickly
    if (reduce) {
      const quickTimer = window.setTimeout(() => setVisible(false), 400);
      return () => window.clearTimeout(quickTimer);
    }

    // Lock body scrolling while the intro screen is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Progress counter animation from 0% to 100% over 2.4 seconds
    const startTime = performance.now();
    const duration = 2400;
    let frameId: number;

    const tick = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const currentPct = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(currentPct);

      if (currentPct < 100) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);

    // Keep screen visible for ~3.0s total so viewers can absorb the branding
    const exitTimer = window.setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(exitTimer);
      document.body.style.overflow = originalOverflow;
    };
  }, [reduce]);

  // Handle skip on user click or keypress
  const handleDismiss = () => {
    setVisible(false);
  };

  return (
    <AnimatePresence onExitComplete={() => { document.body.style.overflow = ""; }}>
      {visible && (
        <motion.div
          key="preloader-curtain"
          role="dialog"
          aria-label="Vansh Sharma — Creative Director Intro"
          aria-modal="true"
          onClick={handleDismiss}
          className="fixed inset-0 z-[9999] flex flex-col justify-between overflow-hidden bg-signal p-6 text-ink select-none cursor-pointer sm:p-10 md:p-14"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Top Bar Metadata */}
          <div className="flex items-center justify-between font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] opacity-80">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-ink" />
              </span>
              <span>Vansh Sharma</span>
              <span className="hidden opacity-40 sm:inline">/</span>
              <span className="hidden sm:inline">Studio Edition</span>
            </div>
            <div>
              <span>Delhi, IN · 2026</span>
            </div>
          </div>

          {/* Centerpiece Hero */}
          <div className="my-auto text-center">
            {/* Monogram Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mb-4 inline-flex items-center gap-1.5 rounded-full border border-ink/20 bg-ink/5 px-3.5 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-ink sm:mb-6 sm:text-xs"
            >
              <span className="font-bold">VS</span>
              <span className="opacity-50">®</span>
              <span className="mx-1 opacity-30">|</span>
              <span className="opacity-75">Visual Engineering</span>
            </motion.div>

            {/* Name */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "115%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="display text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-[-0.05em] text-ink"
              >
                VANSH SHARMA
              </motion.h1>
            </div>

            {/* Creative Director Title */}
            <div className="overflow-hidden mt-3 sm:mt-4">
              <motion.p
                initial={{ y: "115%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="font-mono text-xs sm:text-sm md:text-lg font-bold uppercase tracking-[0.26em] text-ink/85"
              >
                Creative Director &amp; Software Engineer
              </motion.p>
            </div>

            {/* Progress Bar & Realtime Percentage */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mx-auto mt-8 flex max-w-xs flex-col items-center gap-2.5 sm:mt-10 sm:max-w-sm md:max-w-md"
            >
              <div className="h-[2px] w-full overflow-hidden rounded-full bg-ink/15">
                <div
                  className="h-full bg-ink transition-all duration-75 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex w-full items-center justify-between font-mono text-[10px] sm:text-xs tracking-wider text-ink/75">
                <span className="flex items-center gap-1.5">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-ink animate-pulse" />
                  {progress < 100 ? "LOADING CURATED ARCHIVE" : "EXPERIENCE READY"}
                </span>
                <span className="font-semibold tabular-nums text-ink">{progress}%</span>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar Controls & Notice */}
          <div className="flex items-center justify-between font-mono text-[9px] sm:text-xs uppercase tracking-[0.18em] opacity-75">
            <span className="hidden sm:inline">Crafted for web &amp; applied AI</span>
            <span className="sm:hidden">Full-stack &amp; AI</span>
            <span className="inline-flex items-center gap-1 rounded-full border border-ink/20 px-2.5 py-1 text-[9px] sm:text-[10px] transition-colors hover:bg-ink hover:text-signal">
              Click anywhere to skip ↗
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
