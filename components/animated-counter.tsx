"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export function AnimatedCounter({ end, suffix = "", pad = false }: { end: number; suffix?: string; pad?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    if (reduce) { const frame = requestAnimationFrame(() => setValue(end)); return () => cancelAnimationFrame(frame); }
    let frame = 0;
    const started = performance.now();
    const update = (now: number) => { const progress = Math.min((now - started) / 1200, 1); setValue(Math.round(end * (1 - Math.pow(1 - progress, 3)))); if (progress < 1) frame = requestAnimationFrame(update); };
    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [end, inView, reduce]);
  return <span ref={ref}>{pad ? String(value).padStart(2, "0") : value}{suffix}</span>;
}
