"use client";

import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";

export function SignalField() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useSpring(useMotionValue(50), { stiffness: 80, damping: 18 });
  const y = useSpring(useMotionValue(45), { stiffness: 80, damping: 18 });
  const driftX = useTransform(x, value => `${value * .16}%`);
  const driftY = useTransform(y, value => `${value * .12}%`);
  return <div ref={ref} className="absolute inset-0 overflow-hidden" onPointerMove={(event) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(((event.clientX - rect.left) / rect.width) * 100);
    y.set(((event.clientY - rect.top) / rect.height) * 100);
  }} aria-hidden="true">
    <div className="aurora aurora-one absolute -left-[12%] -top-[18%] h-[70%] w-[72%] rounded-full" />
    <div className="aurora aurora-two absolute -right-[14%] top-[8%] h-[72%] w-[68%] rounded-full" />
    <div className="aurora aurora-three absolute bottom-[-28%] left-[28%] h-[58%] w-[58%] rounded-full" />
    <div className="hero-beam absolute left-[55%] top-[-25%] h-[150%] w-[18%] rotate-[24deg]" />
    <motion.div className="absolute h-64 w-64 rounded-full bg-signal/20 blur-[90px] md:h-[30rem] md:w-[30rem]" style={{ left: x, top: y, translateX: "-50%", translateY: "-50%" }} />
    <motion.div className="absolute right-[9%] top-[16%] h-56 w-56 rounded-full border border-white/10 md:h-80 md:w-80" style={{ x: driftX, y: driftY }}>
      <div className="signal-orbit absolute inset-[9%] rounded-full border border-dashed border-signal/25" />
      <div className="signal-orbit-reverse absolute inset-[25%] rounded-full border border-white/10" />
      <span className="orbit-dot absolute left-1/2 top-0 h-2.5 w-2.5 rounded-full bg-signal shadow-[0_0_28px_8px_rgba(168,85,247,.55)]" />
    </motion.div>
    <div className="absolute inset-0">{Array.from({length: 18}, (_, index) => <span key={index} className="hero-star absolute h-px w-px rounded-full bg-white" style={{ left: `${(index * 47) % 97}%`, top: `${(index * 71) % 89}%`, animationDelay: `${index * .18}s` }}/>)}</div>
  </div>;
}
