import { experience, profile, projects } from "@/data/portfolio";
import { ArrowIcon, CheckIcon, GithubIcon, LayersIcon, SparklesIcon, TerminalIcon } from "./icons";
import { ProjectCard } from "./project-card";
import { Reveal } from "./reveal";
import { SpotlightCard } from "./spotlight";

const skillGroups = [
  {
    label: "Frontend Engineering",
    desc: "Component architecture, responsive layouts & micro-interactions",
    accent: "signal",
    skills: ["React 19", "Next.js (App Router)", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Framer Motion", "HTML5 & CSS3"],
  },
  {
    label: "Backend & REST APIs",
    desc: "Robust server logic, authentication & database communication",
    accent: "sky",
    skills: ["Node.js", "Express.js", "RESTful APIs", "Prisma ORM", "JWT Auth", "API Design", "Middleware Architecture"],
  },
  {
    label: "Databases & Storage",
    desc: "Data modeling, schema design, queries & indexing",
    accent: "coral",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Mongoose", "Database Indexing", "Prisma Schemas"],
  },
  {
    label: "Core CS & Engineering Tools",
    desc: "Fundamental principles, version control & workflow tooling",
    accent: "signal",
    skills: ["Data Structures & Algorithms", "OOPs Concepts", "Computer Networks", "Git & GitHub", "Postman", "Linux", "Vercel"],
  },
];

export function Proof() {
  const items = [
    { end: "3", suffix: "", label: "Production Full-Stack Projects", desc: "Built with Next.js, Node & AI" },
    { end: "1", suffix: "st", label: "Tatva ’25 Web Design", desc: "1st prize for speed & execution" },
    { end: "2", suffix: "", label: "Computer Science Degrees", desc: "MCA (7.56) & BCA (7.88)" },
    { end: "15", suffix: "+", label: "Technologies & Frameworks", desc: "Across frontend, backend & DBs" },
  ];

  return (
    <section className="border-y border-white/10 bg-white/[0.015]">
      <div className="container-frame">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {items.map((item, index) => (
            <Reveal
              key={item.label}
              delay={index * 0.05}
              className="border-b border-r border-white/10 px-5 py-8 last:border-r-0 md:border-b-0 md:px-8 md:py-10"
            >
              <div className="flex items-baseline gap-1">
                <span className="font-mono text-4xl font-semibold tracking-tight text-paper md:text-5xl">
                  {item.end}
                </span>
                {item.suffix && (
                  <span className="text-xl font-medium text-signal">
                    {item.suffix}
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm font-medium text-paper">
                {item.label}
              </p>
              <p className="mt-1 text-xs text-muted">
                {item.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Work() {
  return (
    <section id="work" className="container-frame scroll-mt-20 py-14 md:py-20">
      <Reveal>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md border border-signal/30 bg-signal/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-signal">
              <SparklesIcon size={14} /> Selected work
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              A few things I’ve built.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted md:text-base">
            Full-stack projects where I handled the interface, backend logic, APIs, and data flow.
          </p>
        </div>
      </Reveal>

      {/* Projects List with Visual Mockups */}
      <div className="mt-8 space-y-2">
        {projects.map((project, i) => (
          <ProjectCard project={project} isReversed={i % 2 === 1} key={project.slug} />
        ))}
      </div>
    </section>
  );
}

export function TechStack() {
  return (
    <section id="skills" className="container-frame scroll-mt-20 py-14 md:py-20">
      <Reveal>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md border border-signal/30 bg-signal/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-signal">
              <LayersIcon size={14} /> Capabilities
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              What I work with.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted md:text-base">
            The technologies I use to take a product from an early idea to a working release.
          </p>
        </div>
      </Reveal>

      {/* 4-Card Categorized Grid */}
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal key={group.label} delay={index * 0.05}>
            <SpotlightCard
              spotlightColor={
                group.accent === "sky"
                  ? "rgba(122, 157, 184, 0.12)"
                  : group.accent === "coral"
                  ? "rgba(205, 126, 105, 0.12)"
                  : "rgba(214, 198, 161, 0.12)"
              }
              className="group relative rounded-2xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-sm transition-all duration-300 hover:border-signal/40 hover:bg-white/[0.04] md:p-8"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-paper transition-colors group-hover:text-signal">
                  {group.label}
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-widest text-signal">
                  0{index + 1}
                </span>
              </div>
              <p className="mt-2 text-xs text-muted">
                {group.desc}
              </p>

              {/* Skills Badge Matrix */}
              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-black/40 px-3 py-1.5 font-mono text-xs text-paper/85 transition-all duration-200 hover:border-signal/50 hover:bg-signal/[0.08] hover:text-signal hover:scale-[1.03]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>

      {/* Engineering Philosophy Ribbon */}
      <div className="mt-10 grid gap-4 rounded-xl border border-white/10 bg-white/[0.015] p-5 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Clean Code", desc: "Modular, readable, reusable" },
          { label: "Performance", desc: "Sub-100ms API latency & SSR" },
          { label: "Applied AI", desc: "Multi-model prompt pipelines" },
          { label: "Data Modeling", desc: "Structured schemas & indexing" },
        ].map((item) => (
          <div key={item.label} className="group/item flex items-start gap-3 transition-transform duration-300 hover:translate-x-1">
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-signal/20 text-signal transition-transform duration-300 group-hover/item:scale-110">
              <CheckIcon size={12} />
            </span>
            <div>
              <p className="text-xs font-semibold text-paper transition-colors group-hover/item:text-signal">{item.label}</p>
              <p className="text-[11px] text-muted">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="container-frame scroll-mt-20 py-14 md:py-20">
      <Reveal>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md border border-signal/30 bg-signal/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-signal">
              <TerminalIcon size={14} /> Background
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Where I’ve worked and learned.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted md:text-base">
            Professional experience at Cogmac Technologies, backed by MCA and BCA degrees.
          </p>
        </div>
      </Reveal>

      {/* Detailed Timeline Cards */}
      <div className="mt-8 space-y-3">
        {experience.map((item, index) => (
          <Reveal delay={index * 0.05} key={item.company}>
            <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-signal/40 hover:bg-white/[0.04] md:p-8">
              <div className="grid gap-4 md:grid-cols-12 md:items-center">
                <div className="md:col-span-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-signal">
                    {item.period}
                  </span>
                  <h3 className="mt-1 text-xl font-semibold text-paper md:text-2xl">
                    {item.company}
                  </h3>
                </div>

                <div className="md:col-span-3">
                  <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-xs font-medium text-paper">
                    {item.role}
                  </span>
                </div>

                <div className="md:col-span-6">
                  <p className="text-sm leading-relaxed text-paper/75">
                    {item.detail}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Achievement() {
  return (
    <section className="container-frame py-14 md:py-20">
      <Reveal>
        <SpotlightCard
          spotlightColor="rgba(214, 198, 161, 0.15)"
          size={500}
          className="achievement-shell relative overflow-hidden rounded-3xl border border-white/15 p-8 md:p-12 transition-all duration-500 hover:border-signal/40"
        >
          <div className="achievement-orb absolute -right-20 -top-24 h-72 w-72 rounded-full bg-signal/20 blur-[90px]" aria-hidden="true" />
          <div className="achievement-orb absolute -bottom-32 left-[20%] h-64 w-64 rounded-full bg-sky/20 blur-[100px]" aria-hidden="true" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left Col: Award Pill & Big Number */}
            <div className="lg:col-span-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-signal/40 bg-signal/15 px-3 py-1 font-mono text-xs uppercase tracking-widest text-signal shadow-[0_0_15px_rgba(214,198,161,0.2)]">
                <SparklesIcon size={14} /> Competition Winner
              </div>
              <div className="mt-4 flex items-baseline gap-3">
                <span className="font-mono text-7xl font-bold text-signal md:text-8xl drop-shadow-[0_0_30px_rgba(214,198,161,0.25)]">
                  1st
                </span>
                <span className="font-mono text-sm uppercase tracking-widest text-muted">
                  Prize
                </span>
              </div>
              <p className="mt-1 text-sm font-semibold text-paper">
                Tatva ’25 Web Designing Competition
              </p>
            </div>

            {/* Right Col: Award Context & Highlights */}
            <div className="space-y-4 lg:col-span-8">
              <h3 className="text-2xl font-semibold tracking-tight text-paper md:text-4xl">
                Recognized for rapid prototyping, visual aesthetic, and full-stack execution under pressure.
              </h3>
              <p className="text-sm leading-relaxed text-paper/70 md:text-base">
                Competing against talented university teams, I delivered a fully functional, responsive web application from concept to deployment in a high-intensity hackathon setting.
              </p>

              {/* Award Pillars */}
              <div className="grid gap-3 pt-2 sm:grid-cols-3">
                {[
                  { title: "Rapid Execution", desc: "Zero to fully working prototype" },
                  { title: "Visual Polish", desc: "Responsive layout & micro-interactions" },
                  { title: "Clean Code", desc: "Modular architecture under pressure" },
                ].map((pillar) => (
                  <div key={pillar.title} className="rounded-xl border border-white/10 bg-black/40 p-3 transition-all duration-300 hover:border-signal/40 hover:bg-signal/[0.05] hover:-translate-y-0.5">
                    <p className="text-xs font-semibold text-signal">{pillar.title}</p>
                    <p className="mt-1 text-[11px] text-muted">{pillar.desc}</p>
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

export function About() {
  return (
    <section id="about" className="container-frame scroll-mt-16 py-14 md:py-20">
      <Reveal>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Personal Narrative */}
          <div className="space-y-6 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-md border border-signal/30 bg-signal/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-signal">
              <TerminalIcon size={14} /> About me
            </div>

            <h2 className="text-3xl font-semibold tracking-tight text-paper md:text-5xl">
              More than writing code.
            </h2>

            <div className="space-y-4 text-base leading-relaxed text-paper/75">
              <p>
                I&apos;m <strong>{profile.name}</strong>, a software engineer based in Delhi. I enjoy understanding why a product is being built, simplifying the problem, and then choosing the right technical approach.
              </p>
              <p>
                I&apos;m most comfortable working across the stack—building responsive React interfaces, structured REST APIs, and databases that remain straightforward to maintain.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-5 py-2.5 text-xs font-mono uppercase tracking-wider text-paper transition-all hover:border-signal hover:bg-signal/20 hover:scale-105"
              >
                <GithubIcon size={16} /> Explore GitHub
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center gap-2 rounded-full bg-signal px-5 py-2.5 text-xs font-mono uppercase tracking-wider text-ink font-semibold transition-transform hover:scale-105 shadow-md hover:shadow-[0_0_20px_rgba(214,198,161,0.3)]"
              >
                Message on LinkedIn <ArrowIcon size={14} />
              </a>
            </div>
          </div>

          {/* Right Column: 4 Engineering Pillars */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5">
            {[
              {
                title: "Component Architecture",
                desc: "Modular, reusable, and maintainable React/Next.js components with clean separation of concerns.",
              },
              {
                title: "Resilient APIs",
                desc: "RESTful architecture with proper error handling, input validation, and performance caching.",
              },
              {
                title: "Applied AI Workflows",
                desc: "Connecting OpenAI & Gemini APIs with structured schemas for practical, brand-safe products.",
              },
              {
                title: "Continuous Learning",
                desc: "Strengthening CS fundamentals daily through DSA problem solving, system design, and testing.",
              },
            ].map((pillar, i) => (
              <SpotlightCard
                key={pillar.title}
                spotlightColor="rgba(214, 198, 161, 0.09)"
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur-sm transition-all duration-300 hover:border-signal/40 hover:-translate-y-0.5"
              >
                <span className="font-mono text-xs font-semibold text-signal">
                  0{i + 1}
                </span>
                <h3 className="mt-2 text-base font-semibold text-paper">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {pillar.desc}
                </p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

const process = [
  {
    number: "01",
    title: "Understand",
    copy: "Clarify user needs, requirements, and technical constraints before writing code.",
    deliverables: ["User journeys & scope", "Technical architecture", "Edge-case mapping"],
  },
  {
    number: "02",
    title: "Architect",
    copy: "Shape modular components, REST API contracts, and scalable data schemas.",
    deliverables: ["Database schema design", "API endpoint contracts", "Component hierarchy"],
  },
  {
    number: "03",
    title: "Build",
    copy: "Develop responsive, accessible web apps with clean and maintainable code.",
    deliverables: ["Type-safe implementations", "Micro-interactions", "REST integrations"],
  },
  {
    number: "04",
    title: "Refine",
    copy: "Test, optimize performance bottlenecks, and polish the user experience.",
    deliverables: ["Lighthouse optimization", "Cross-device testing", "Production deployment"],
  },
];

export function Process() {
  return (
    <section className="container-frame py-14 md:py-20">
      <Reveal>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md border border-signal/30 bg-signal/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-signal">
              <TerminalIcon size={14} /> Workflow &amp; Methodology
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              How I build software that lasts.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted md:text-base">
            A disciplined, iterative engineering cycle from initial requirements to production monitoring.
          </p>
        </div>
      </Reveal>

      {/* 4 Process Cards with Deliverables */}
      <div className="relative mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {process.map((item, index) => (
          <Reveal key={item.number} delay={index * 0.06}>
            <SpotlightCard
              spotlightColor="rgba(214, 198, 161, 0.1)"
              className="process-card group relative flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-signal/40 hover:bg-signal/[0.04]"
            >
              <div>
                <span className="grid h-12 w-12 place-items-center rounded-xl border border-signal/30 bg-ink font-mono text-sm font-semibold text-signal shadow-[0_0_20px_rgba(214,198,161,0.15)] transition-all duration-300 group-hover:scale-105 group-hover:border-signal group-hover:shadow-[0_0_25px_rgba(214,198,161,0.3)]">
                  {item.number}
                </span>
                <h3 className="mt-6 text-xl font-semibold text-paper transition-colors group-hover:text-signal">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {item.copy}
                </p>
              </div>

              {/* Concrete Deliverables Pill List */}
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="font-mono text-[9px] uppercase tracking-wider text-muted">Deliverables:</p>
                <ul className="mt-2 space-y-1">
                  {item.deliverables.map((deliv) => (
                    <li key={deliv} className="flex items-center gap-1.5 text-[11px] text-paper/70">
                      <span className="h-1 w-1 rounded-full bg-signal transition-transform duration-200 group-hover:scale-125" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Marquee() {
  const words = "REACT — NEXT.JS — NODE.JS — MONGODB — REST APIS — AI WORKFLOWS — POSTGRESQL — ";
  return (
    <div className="overflow-hidden border-y border-white/10 bg-white/[0.01] py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]" aria-hidden="true">
      <div className="marquee-track flex w-max whitespace-nowrap font-mono text-xs uppercase tracking-[0.25em] text-paper/40">
        <span>{words.repeat(4)}</span>
        <span>{words.repeat(4)}</span>
      </div>
    </div>
  );
}
