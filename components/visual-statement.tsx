import { SignalField } from "./signal-field";
import { ArrowIcon } from "./icons";
import { Reveal } from "./reveal";

export function VisualStatement() {
  return (
    <section className="container-frame py-10 md:py-16">
      <Reveal>
        <div className="visual-statement relative min-h-[31rem] overflow-hidden rounded-[2rem] border border-white/15 bg-[#171b19] p-7 shadow-[0_45px_140px_rgba(0,0,0,.35)] md:p-12">
          <SignalField />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121513] via-[#121513]/70 to-transparent" aria-hidden="true" />

          <div className="relative z-10 flex min-h-[25rem] max-w-3xl flex-col justify-between">
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/50">
              <span className="h-px w-10 bg-signal" /> Design-led engineering
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">My north star</p>
              <h2 className="mt-5 text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.88] tracking-[-0.07em] text-paper">
                Useful first.<br /><span className="premium-gradient-text">Memorable always.</span>
              </h2>
              <div className="mt-8 flex flex-col gap-5 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xl text-sm leading-relaxed text-paper/65 md:text-base">
                  Strong products happen when engineering precision, visual clarity, and genuine user empathy work together.
                </p>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/20 bg-white/[0.05] text-signal backdrop-blur-md">
                  <ArrowIcon size={18} />
                </span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 right-8 z-10 hidden text-right font-mono text-[9px] uppercase tracking-[0.18em] text-paper/35 md:block">
            <p>Strategy / Design / Code</p>
            <p className="mt-2 text-signal">One connected system</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
