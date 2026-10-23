"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { profile } from "@/data/portfolio";
import { getEmailComposeUrl } from "@/lib/contact";
import { DownloadIcon, MenuIcon } from "./icons";

const links = [
  { label: "Projects", href: "/#work" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); menuButton.current?.focus(); } };
    document.addEventListener("keydown", close);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", close); document.body.style.overflow = ""; };
  }, [open]);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-ink/85 backdrop-blur-xl">
      <div className="container-frame flex h-16 items-center justify-between">
        <Link href="/" className="focus-ring group relative z-10 flex items-center gap-3" aria-label="Home — Vansh Sharma">
          <span className="grid h-[42px] w-[42px] place-items-center rounded-xl border border-signal/35 bg-signal/[0.08] font-mono text-base font-bold tracking-tight text-signal shadow-sm transition-all duration-300 group-hover:border-signal/80 group-hover:bg-signal/20 group-hover:shadow-[0_0_20px_rgba(214,198,161,0.3)] group-hover:scale-105">
            {profile.initials}
          </span>
          <span className="text-base font-semibold tracking-[-0.03em] text-paper transition-colors group-hover:text-signal">
            {profile.name}<span className="text-signal">.</span>
          </span>
        </Link>

        {/* Nav Controls Group */}
        <div className="flex items-center gap-3 md:gap-7">
          {/* Desktop Nav Links */}
          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
            {links.map((link) => (
              <Link className="focus-ring nav-link text-sm text-paper/75 transition-colors hover:text-paper" href={link.href} key={link.label}>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Quick Resume Download Button (Mobile & Desktop) */}
          <a
            href="/Vansh_Sharma_Resume.pdf"
            download="Vansh_Sharma_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex items-center gap-1.5 rounded-full border border-signal/40 bg-signal/15 px-3 py-1.5 font-mono text-[11px] font-semibold text-signal shadow-sm transition-all hover:bg-signal hover:text-ink md:px-3.5 md:text-xs"
            aria-label="Download Vansh Sharma Resume"
          >
            <DownloadIcon size={12} />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Button with Clear Label & Touch Target */}
          <button
            ref={menuButton}
            className="focus-ring relative z-50 flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-3 py-1.5 font-mono text-xs font-semibold text-paper transition-all hover:border-signal/50 hover:bg-white/10 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <MenuIcon open={open} />
            <span>{open ? "Close" : "Menu"}</span>
          </button>
        </div>
      </div>

      {/* Subtle Scroll Progress Hairline */}
      <motion.div
        style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
        className="pointer-events-none absolute bottom-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-signal/40 via-signal to-signal/90 shadow-[0_0_10px_rgba(214,198,161,0.6)]"
        aria-hidden="true"
      />

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-ink/98 px-6 pb-10 pt-20 backdrop-blur-2xl md:hidden"
            aria-label="Mobile navigation"
            aria-modal="true"
          >
            <div className="flex flex-col gap-1 pt-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal/80 pb-2 border-b border-white/10">Navigation</p>
              {links.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 + i * 0.03 }}
                  key={link.label}
                >
                  <Link
                    className="focus-ring flex items-center justify-between border-b border-white/10 py-3.5 text-xl font-semibold tracking-tight text-paper transition-colors hover:text-signal"
                    href={link.href}
                    onClick={() => setOpen(false)}
                  >
                    <span>{link.label}</span>
                    <span className="font-mono text-xs text-muted">0{i + 1}</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="space-y-3 pt-6 border-t border-white/10">
              <a
                href="/Vansh_Sharma_Resume.pdf"
                download="Vansh_Sharma_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-signal px-6 py-3.5 font-mono text-sm font-semibold text-ink shadow-lg shadow-signal/15 transition-transform active:scale-[0.98]"
              >
                <DownloadIcon size={16} /> Download Resume (PDF)
              </a>
              <a
                href={getEmailComposeUrl(profile.email)}
                target="_blank"
                rel="noreferrer"
                className="block text-center font-mono text-xs uppercase tracking-widest text-muted hover:text-paper py-1"
              >
                {profile.email}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
