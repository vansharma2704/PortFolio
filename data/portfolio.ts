export type ScreenItem = {
  title: string;
  tag: string;
  description: string;
  image: string;
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  summary: string;
  role: string;
  year: string;
  services: string[];
  impact: string;
  color: "signal" | "coral" | "sky";
  challenge: string;
  approach: string;
  result: string;
  metrics: { value: string; label: string }[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  badge?: string;
  accessNotice?: string;
  screens?: ScreenItem[];
};

export const profile = {
  name: "Vansh Sharma",
  initials: "VS",
  role: "Software Engineer · Full-stack Developer",
  email: "vansharma2702@gmail.com",
  location: "Delhi, India · Open to opportunities",
  availability: "Building reliable software and AI-powered products",
  intro: "Full-stack software engineer building responsive web products with React, Next.js, Node.js, MongoDB, and PostgreSQL.",
  socials: {
    github: "https://github.com/vansharma2704",
    linkedin: "https://www.linkedin.com/in/vansharma2702/",
    x: "https://github.com/vansharma2704",
  },
};

export const projects: Project[] = [
  {
    slug: "ai-brand-studio",
    index: "01",
    title: "AI Brand Studio",
    subtitle: "Brand-consistent marketing assets, generated intelligently.",
    summary: "A full-stack enterprise platform that combines product media, brand guidelines, and multi-model AI orchestration to generate production-ready marketing assets at scale.",
    role: "Full-stack developer",
    year: "2026",
    badge: "Company Project · Internal",
    accessNotice: "Internal Enterprise Tool · Deployed privately under company NDA",
    services: ["Next.js & React", "Express REST APIs", "Multi-Model AI (OpenAI & Gemini)", "Prisma & PostgreSQL"],
    impact: "Enterprise AI Workflow",
    color: "signal",
    image: "/images/ai-brand-studio-hero.png",
    challenge: "Generic AI tools produce inconsistent visual styles, hallucinate copy, and risk uncontrollable token expenses across teams. The company needed a unified internal workspace where marketing teams could reliably produce campaigns strictly adhering to brand guidelines without burning excessive API credits.",
    approach: "Architected a dual-provider AI pipeline using Gemini for multimodal asset analysis and OpenAI for structured copy generation. Engineered prompt caching, strict JSON schema validation, and failover routing to minimize token consumption, backed by Express REST APIs and Prisma data models.",
    result: "Automated campaign asset preparation with 60% faster turnaround, enforced 100% brand styling consistency across assets, and kept API operational overhead predictable through structured caching and token limits.",
    metrics: [
      { value: "194+", label: "AI designs generated" },
      { value: "9 Brands", label: "managed concurrently" },
      { value: "7-Step", label: "guided prompt pipeline" },
    ],
    screens: [
      {
        title: "Multi-Brand Overview & Dashboard",
        tag: "01 / Command Hub",
        description: "Centralized workspace managing 9 active enterprise brand identities (NIKOOO, Oxcia, RollingFizz, BrewMac), 20 campaigns, 13 brand assets, and 194 total AI-generated designs with instant brand switching.",
        image: "/images/ai-brand-studio-dashboard.png",
      },
      {
        title: "7-Step Guided AI Prompt Builder",
        tag: "02 / Prompt Pipeline",
        description: "A structured 7-step wizard (Scope, Style, Content, Uploads, Layout, Guidelines, Review) translating complex marketing requirements into strict AI prompts formatted for Square, Portrait, Story, Landscape, and Banner canvases.",
        image: "/images/ai-brand-studio-prompt-builder.png",
      },
      {
        title: "Brand Identity & Campaign Workspaces",
        tag: "03 / Asset Workspace",
        description: "Dedicated profile view holding ASME-certified product compliance details, hex color token palettes, brand asset repositories, and folderized campaigns (daily & weekly batch runs).",
        image: "/images/ai-brand-studio-campaigns.png",
      },
      {
        title: "Saved Designs & Review Lifecycle",
        tag: "04 / Review Board",
        description: "End-to-end design lifecycle dashboard tracking 194 generated designs with approval stages (In Review: 30, Approved: 3, Rejected: 1), multi-brand search filters, and preview/edit actions.",
        image: "/images/ai-brand-studio-saved-designs.png",
      },
    ],
  },
  {
    slug: "kai-career-mentor",
    index: "02",
    title: "K.AII Career Mentor",
    subtitle: "Practical AI guidance for resumes, interviews, and careers.",
    summary: "An AI-powered career platform offering ATS resume analysis, personalized guidance, and structured interview preparation.",
    role: "Full-stack developer",
    year: "2025",
    services: ["React development", "Node.js APIs", "Resume analysis"],
    impact: "End-to-end career toolkit",
    color: "sky",
    image: "/images/kaii-career-mentor-live.png",
    liveUrl: "https://kaii-career-mentor.vercel.app/",
    challenge: "Candidates often use disconnected tools for resume feedback, career planning, and interview preparation, making it difficult to understand where they should improve first.",
    approach: "I built secure REST APIs and resume-parsing logic that evaluates candidate profiles against job requirements and organizes the results into actionable guidance.",
    result: "K.AII gives candidates a single workflow for understanding resume fit, preparing for interviews, and making better-informed career decisions.",
    metrics: [{ value: "ATS", label: "resume analysis" }, { value: "AI", label: "career guidance" }, { value: "REST", label: "secure APIs" }],
  },
  {
    slug: "merabudget",
    index: "03",
    title: "MeraBudget",
    subtitle: "AI-powered personal finance & wealth growth platform built for India.",
    summary: "An intelligent personal finance and expense management platform featuring OCR bill scanning, geofenced budget alerts, 50/30/20 salary planning, bill splitting, and interactive wealth simulators.",
    role: "Full-stack developer",
    year: "2026",
    services: ["Next.js & React", "AI Receipt OCR", "Clerk Auth", "Tailwind CSS"],
    impact: "AI Personal Finance",
    color: "coral",
    image: "/images/merabudget-ui.png",
    liveUrl: "https://merabudget.vercel.app/",
    challenge: "Traditional finance trackers rely on tedious manual entry and ignore the realities of Indian spending—frequent UPI micropayments, shared restaurant bills, and impulsive spending triggers that derail monthly savings.",
    approach: "Built a modern, AI-augmented finance platform with camera-based receipt scanning for automated expense categorization, geolocation nudges before budget-breaking spots, automated 50/30/20 payday rules, and interactive compound growth modeling.",
    result: "MeraBudget transforms tedious expense logging into an engaging financial copilot—enabling instant receipt capture, seamless bill splits, and clear visibility into long-term wealth creation.",
    metrics: [{ value: "AI OCR", label: "receipt scanning" }, { value: "50/30/20", label: "salary planner" }, { value: "Interactive", label: "wealth simulator" }],
  },
];

export const experience = [
  { period: "Mar 2026—Now", company: "Cogmac Technologies", role: "Software Engineer", detail: "Building reusable React and Next.js interfaces, integrating REST APIs, improving frontend performance, and collaborating through Git-based reviews and testing." },
  { period: "2024—2026", company: "RKGIT", role: "Master of Computer Applications", detail: "Advanced computer applications and software engineering studies. CGPA: 7.56 / 10." },
  { period: "2021—2024", company: "GGSIPU", role: "Bachelor of Computer Applications", detail: "Built a strong foundation in programming, databases, operating systems, networks, and software development. CGPA: 7.88 / 10." },
];

export const experiments = [
  { number: "001", title: "API Engineering", category: "Backend systems", year: "2026", accent: "signal", description: "Designing maintainable REST APIs with Express, Prisma, MongoDB, PostgreSQL, and MySQL." },
  { number: "002", title: "AI Workflows", category: "Applied AI", year: "2026", accent: "sky", description: "Exploring practical product experiences powered by OpenAI, Gemini, prompt pipelines, and structured data." },
  { number: "003", title: "DSA Practice", category: "Problem solving", year: "Ongoing", accent: "coral", description: "Strengthening fundamentals through arrays, dynamic programming, graphs, trees, and reusable problem-solving patterns." },
];
