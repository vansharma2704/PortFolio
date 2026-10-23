export default function Loading() {
  return <div className="fixed inset-0 z-[190] grid place-items-center bg-ink" role="status" aria-label="Loading page">
    <div className="relative h-20 w-20">
      <div className="absolute inset-0 rounded-full border border-line" />
      <div className="loading-orbit absolute inset-0 rounded-full border-t border-signal" />
      <span className="absolute inset-0 grid place-items-center font-mono text-[9px] tracking-widest text-muted">VS</span>
    </div>
  </div>;
}
