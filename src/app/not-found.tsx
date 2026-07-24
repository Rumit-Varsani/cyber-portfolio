import Link from "next/link";

export default function NotFound() {
  return (
    <div className="section-pad mx-auto flex min-h-[70vh] max-w-2xl flex-col justify-center pt-28">
      <p className="mb-2 text-xs tracking-widest text-[var(--text-dim)] uppercase">
        <span className="text-[var(--red)]">!</span> connection refused
      </p>
      <h1 className="glow-text mb-3 text-4xl font-semibold text-[var(--green)]">
        404 — host not found
      </h1>
      <p className="mb-8 text-sm text-[var(--text-muted)]">
        Route not in routing table / Route nicht in der Routing-Tabelle.
      </p>
      <Link href="/" className="btn-primary w-fit">
        ./cd_home
      </Link>
    </div>
  );
}
