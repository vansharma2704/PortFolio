"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function Cursor() {
  const [active, setActive] = useState(false);
  const [label, setLabel] = useState("");
  const reduce = useReducedMotion();
  const x = useSpring(useMotionValue(-100), { stiffness: 450, damping: 34 });
  const y = useSpring(useMotionValue(-100), { stiffness: 450, damping: 34 });
  useEffect(() => {
    if (reduce || !window.matchMedia("(pointer: fine)").matches) return;
    const move = (event: PointerEvent) => { x.set(event.clientX); y.set(event.clientY); const target = (event.target as HTMLElement).closest<HTMLElement>("[data-cursor]"); setActive(Boolean(target)); setLabel(target?.dataset.cursor || ""); };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [reduce, x, y]);
  return <motion.div aria-hidden="true" className="custom-cursor pointer-events-none fixed left-0 top-0 z-[180] hidden -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-paper/40 bg-paper text-ink mix-blend-difference md:grid" animate={{ width: active ? 92 : 12, height: active ? 92 : 12 }} transition={{ duration: .35, ease: [0.22,1,.36,1] }} style={{ x, y }}><motion.span animate={{ opacity: label ? 1 : 0 }} className="font-mono text-[10px] uppercase tracking-widest">{label}</motion.span></motion.div>;
}
