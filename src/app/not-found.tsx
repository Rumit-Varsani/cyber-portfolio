import Link from "next/link";

export default function NotFound() {
  return (
    <div className="section-pad mx-auto flex min-h-[70vh] max-w-2xl flex-col justify-center pt-28">
      <p className="mb-2 text-xs tracking-widest text-[var(--text-dim)] uppercase">
        <span className="text-[var(--red)]">!</span> connection refused
      </p>
      <h1 className="mb-3 text-4xl font-semibold text-[var(--green)] glow-text">
        404 — host not found
      </h1>
      <p className="mb-8 text-sm text-[var(--text-muted)]">
        The route you requested is not in the routing table. Trace back to home.
      </p>
      <pre className="panel mb-8 overflow-x-auto p-4 text-xs text-[var(--text-dim)]">
{`$ traceroute requested.path
1  gateway (local)  0ms
2  * * *
3  destination unreachable`}
      </pre>
      <Link href="/" className="btn-primary w-fit">
        ./cd_home
      </Link>
    </div>
  );
}
