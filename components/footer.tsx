"use client";

import Link from "next/link";
import { profile } from "@/data/portfolio";
import { getEmailComposeUrl } from "@/lib/contact";
import { ArrowIcon, ArrowDownIcon, DownloadIcon } from "./icons";

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="border-t border-ink/20 bg-paper text-ink">
      <div className="container-frame py-14 md:py-20">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="eyebrow text-ink/70">Hiring a software engineer?</p>
          <div className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-ink/5 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-ink/80">
            <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
            <span>Open for Full-time Roles · 2026</span>
          </div>
        </div>

        <a
          data-cursor="Say hello"
          href={getEmailComposeUrl(profile.email)}
          target="_blank"
          rel="noreferrer"
          className="focus-ring group mt-6 flex items-end justify-between border-b border-ink/40 pb-5 transition-colors hover:border-ink"
        >
          <span className="display contact-title text-[clamp(2.75rem,8vw,7.5rem)] font-semibold">
            Let&apos;s connect.
          </span>
          <span className="grid h-12 w-12 place-items-center rounded-full border border-ink transition-all duration-500 group-hover:rotate-45 group-hover:bg-ink group-hover:text-paper md:h-16 md:w-16">
            <ArrowIcon className="h-5 w-5 md:h-7 md:w-7" />
          </span>
        </a>

        {/* Quick Links & Footer Details Grid */}
        <div className="mt-10 grid gap-8 text-sm sm:grid-cols-2 md:grid-cols-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-ink/60">Direct Inquiries</p>
            <a className="mt-2 block font-medium underline underline-offset-4 hover:text-[#876f3f]" href={getEmailComposeUrl(profile.email)} target="_blank" rel="noreferrer">
              {profile.email}
            </a>
            <p className="mt-1 text-xs text-ink/70">{profile.location}</p>
            <a
              href="/Vansh_Sharma_Resume.pdf"
              download="Vansh_Sharma_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-ink underline underline-offset-4 hover:text-emerald-700"
            >
              <DownloadIcon size={12} /> Resume (PDF)
            </a>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-ink/60">Navigation</p>
            <div className="mt-2 flex flex-col gap-1 text-xs">
              <Link href="/#work" className="hover:underline">Projects</Link>
              <Link href="/#skills" className="hover:underline">Technical Stack</Link>
              <Link href="/#experience" className="hover:underline">Experience</Link>
              <Link href="/#education" className="hover:underline">Education</Link>
              <a href="/Vansh_Sharma_Resume.pdf" download="Vansh_Sharma_Resume.pdf" target="_blank" rel="noreferrer" className="font-semibold text-emerald-800 hover:underline">
                Download Resume (PDF)
              </a>
            </div>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-ink/60">Social Profiles</p>
            <div className="mt-2 flex flex-col gap-1 text-xs">
              <a className="footer-link inline-block hover:underline" href={profile.socials.github} target="_blank" rel="noreferrer">
                GitHub Profile
              </a>
              <a className="footer-link inline-block hover:underline" href={profile.socials.linkedin} target="_blank" rel="noreferrer">
                LinkedIn Profile
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-between md:items-end">
            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 rounded-full border border-ink/20 bg-ink/5 px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all hover:bg-ink hover:text-paper"
            >
              <span>Back to top</span>
              <span className="rotate-180 transition-transform group-hover:-translate-y-0.5">
                <ArrowDownIcon size={14} />
              </span>
            </button>
            <p className="mt-4 font-mono text-xs text-ink/60 md:mt-0">
              &copy; {new Date().getFullYear()} {profile.name} · All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
