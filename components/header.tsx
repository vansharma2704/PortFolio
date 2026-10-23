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
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-white/[0.08] bg-[#111412]/90 backdrop-blur-xl">
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

            {/* Quick Resume Download Button (Desktop & Tablet) */}
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
              className="focus-ring flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-3.5 py-1.5 font-mono text-xs font-semibold text-paper transition-all hover:border-signal/50 hover:bg-white/10 md:hidden"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Open menu"
            >
              <MenuIcon open={false} />
              <span>Menu</span>
            </button>
          </div>
        </div>

        {/* Subtle Scroll Progress Hairline */}
        <motion.div
          style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
          className="pointer-events-none absolute bottom-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-signal/40 via-signal to-signal/90 shadow-[0_0_10px_rgba(214,198,161,0.6)]"
          aria-hidden="true"
        />
      </div>

      {/* Fullscreen Mobile Navigation Drawer (Rendered outside the backdrop-blur container to prevent containing block trap) */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="fixed inset-0 z-[100] flex flex-col bg-[#111412] text-paper md:hidden"
          >
            {/* Top Bar inside the Menu */}
            <div className="flex h-16 shrink-0 items-center justify-between border-b border-white/10 px-4 sm:px-6">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2.5 font-semibold tracking-tight text-paper"
              >
                <span className="grid h-9 w-9 place-items-center rounded-lg border border-signal/40 bg-signal/10 font-mono text-xs font-bold text-signal">
                  {profile.initials}
                </span>
                <span className="text-sm font-semibold text-paper">
                  {profile.name}<span className="text-signal">.</span>
                </span>
              </Link>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="focus-ring flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 font-mono text-xs font-semibold text-paper transition-colors hover:border-signal/50 hover:bg-white/20"
                aria-label="Close menu"
              >
                <span className="text-sm font-bold leading-none">&#x2715;</span>
                <span>Close</span>
              </button>
            </div>

            {/* Scrollable Navigation Body */}
            <div className="flex-1 overflow-y-auto px-6 py-6 overscroll-contain">
              <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal font-semibold">
                  Navigation
                </p>
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
                  Menu
                </span>
              </div>

              {/* Links */}
              <div className="flex flex-col divide-y divide-white/[0.08]">
                {links.map((link, i) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="focus-ring flex items-center justify-between py-4 text-xl font-bold tracking-tight text-paper transition-colors hover:text-signal active:text-signal"
                  >
                    <span>{link.label}</span>
                    <span className="font-mono text-xs font-normal text-signal/70">
                      0{i + 1}
                    </span>
                  </Link>
                ))}
              </div>

              {/* CTA & Contact Details */}
              <div className="mt-8 space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm">
                <a
                  href="/Vansh_Sharma_Resume.pdf"
                  download="Vansh_Sharma_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-signal px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider text-ink shadow-lg shadow-signal/15 transition-transform active:scale-[0.98]"
                >
                  <DownloadIcon size={15} /> Download Resume (PDF)
                </a>

                <div className="space-y-1.5 border-t border-white/10 pt-3 text-center font-mono text-xs">
                  <a
                    href={getEmailComposeUrl(profile.email)}
                    target="_blank"
                    rel="noreferrer"
                    className="block text-muted hover:text-paper py-1 transition-colors"
                  >
                    {profile.email}
                  </a>
                  <a
                    href={`tel:${profile.phoneRaw}`}
                    className="block font-semibold text-signal hover:text-paper py-1 transition-colors"
                  >
                    {profile.phone}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
