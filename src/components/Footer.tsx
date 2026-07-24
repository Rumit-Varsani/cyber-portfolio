import { site } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--border)] bg-black/30">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-xs text-[var(--text-dim)] md:flex-row md:items-center md:justify-between md:px-6">
        <p>
          <span className="text-[var(--green)]">$</span> echo &quot;© {year}{" "}
          {site.name} — all packets reserved&quot;
        </p>
        <p className="font-mono">
          built with Next.js · Tailwind · deployed on Vercel
        </p>
      </div>
    </footer>
  );
}
