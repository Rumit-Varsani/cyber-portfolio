"use client";

import { useEffect, useState } from "react";
import { navLinks, site } from "@/data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-40 border-b transition-colors ${
        scrolled
          ? "border-[var(--border)] bg-[rgba(5,8,5,0.92)] backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#home" className="group flex items-center gap-2 font-mono text-sm">
          <span className="text-[var(--green)]">~/</span>
          <span className="text-[var(--text)] group-hover:text-[var(--green)]">
            {site.name.split(" ")[0].toLowerCase()}
          </span>
          <span className="hidden text-[var(--text-dim)] sm:inline">
            — cyber.ops
          </span>
        </a>

        <button
          type="button"
          className="rounded border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--text-muted)] md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? "close" : "menu"}
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded px-2.5 py-1.5 text-xs tracking-wide text-[var(--text-muted)] transition hover:bg-[rgba(57,255,20,0.08)] hover:text-[var(--green)]"
              >
                ./{link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {open ? (
        <div className="border-t border-[var(--border)] bg-[rgba(5,8,5,0.98)] px-4 py-3 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded px-3 py-2 text-sm text-[var(--text-muted)] hover:bg-[rgba(57,255,20,0.08)] hover:text-[var(--green)]"
                >
                  ./{link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
