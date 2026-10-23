import { experience } from "@/data/portfolio";
import { TerminalIcon } from "./icons";
import { Reveal } from "./reveal";
import { SpotlightCard } from "./spotlight";

export function CareerExperience() {
  const role = experience[0];

  return (
    <section id="experience" className="container-frame scroll-mt-20 py-16 md:py-24">
      <Reveal>
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-signal">
              <TerminalIcon size={13} /> Professional journey
            </div>
            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[0.95] tracking-[-0.055em] md:text-6xl">
              Experience built in the <span className="text-paper/35">real world.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-paper/60 lg:col-span-4">
            Shipping production interfaces, integrating APIs, and improving the details that make software feel reliable.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <SpotlightCard
          spotlightColor="rgba(214, 198, 161, 0.12)"
          size={550}
          className="group relative mt-10 overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.035] shadow-[0_35px_100px_rgba(0,0,0,.22)] transition-all duration-500 hover:border-signal/40"
        >
          <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full bg-signal/[0.09] blur-[100px]" aria-hidden="true" />
          <div className="grid lg:grid-cols-12">
            <div className="relative border-b border-white/10 p-7 lg:col-span-4 lg:border-b-0 lg:border-r lg:p-10">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Current role</span>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3 py-1 font-mono text-[9px] uppercase tracking-wider text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" /> Active
                </span>
              </div>
              <div className="mt-16 lg:mt-28">
                <p className="font-mono text-xs text-signal">{role.period}</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-paper">{role.company}</h3>
                <p className="mt-2 text-sm text-paper/55">Delhi, India · On-site</p>
              </div>
            </div>

            <div className="relative p-7 lg:col-span-8 lg:p-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal">{role.role}</p>
              <h3 className="mt-5 max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.035em] text-paper md:text-4xl">
                Turning product requirements into fast, maintainable software.
              </h3>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-paper/65 md:text-base">{role.detail}</p>
              <div className="mt-9 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
                {[["Frontend", "React & Next.js"], ["Integration", "REST APIs"], ["Workflow", "Git & testing"]].map(([label, value]) => (
                  <div key={label} className="bg-ink/90 p-4 transition-all duration-300 hover:bg-signal/[0.08] group/sub">
                    <p className="font-mono text-[9px] uppercase tracking-wider text-muted transition-colors group-hover/sub:text-signal">{label}</p>
                    <p className="mt-1 text-sm font-semibold text-paper">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SpotlightCard>
      </Reveal>
    </section>
  );
}

export function EducationSection() {
  return (
    <section id="education" className="container-frame scroll-mt-20 pb-16 md:pb-24">
      <Reveal>
        <div className="grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal">Education</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] md:text-4xl">Academic foundation.</h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">Computer science fundamentals behind the products I build today.</p>
          </div>
          <div className="grid gap-3 lg:col-span-8">
            {experience.slice(1).map((item, index) => (
              <SpotlightCard
                key={item.company}
                spotlightColor="rgba(214, 198, 161, 0.08)"
                className="group grid gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-signal/40 hover:bg-white/[0.035] hover:-translate-y-0.5 sm:grid-cols-[auto_1fr_auto] sm:items-center"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full border border-signal/25 bg-signal/[0.08] font-mono text-xs text-signal transition-transform duration-300 group-hover:scale-110">0{index + 1}</span>
                <div>
                  <p className="text-lg font-semibold text-paper transition-colors group-hover:text-signal">{item.role}</p>
                  <p className="mt-1 text-sm text-muted">{item.company}</p>
                </div>
                <div className="sm:text-right">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-signal">{item.period}</p>
                  <p className="mt-1 text-xs text-paper/50">{item.detail.split(". ").at(-1)}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
