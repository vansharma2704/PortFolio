"use client";

export function HomeMotion({ children }: { children: React.ReactNode }) {
  return (
    <div className="home-canvas relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <span className="ambient-spot ambient-spot-one" />
        <span className="ambient-spot ambient-spot-two" />
        <span className="ambient-spot ambient-spot-three" />
      </div>
      {children}
    </div>
  );
}
