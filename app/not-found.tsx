import Link from "next/link";

export default function NotFound() { return <main id="main" className="container-frame grid min-h-screen place-items-center py-32 text-center"><div><p className="eyebrow text-signal">Error / 404</p><h1 className="display mt-6 text-[clamp(6rem,20vw,16rem)]">Lost?</h1><p className="mx-auto mt-7 max-w-md text-muted">This page has moved, disappeared, or never made it past the prototype.</p><Link className="focus-ring mt-10 inline-block border-b border-paper pb-1" href="/">Return home</Link></div></main>; }
