"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/i18n/LanguageContext";
import LanguageToggle from "./LanguageToggle";

export default function Navbar() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#projects", label: t.nav.projects },
    { href: "#experience", label: t.nav.experience },
    { href: "#education", label: t.nav.education },
    { href: "#certs", label: t.nav.certs },
    { href: "#blog", label: t.nav.blog },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-40 border-b transition-colors duration-300 ${
        scrolled
          ? "border-[var(--border)] bg-[rgba(5,8,5,0.92)] backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-6">
        <a href="#home" className="group flex shrink-0 items-center gap-2 font-mono text-sm">
          <span className="text-[var(--green)]">~/</span>
          <span className="text-[var(--text)] transition group-hover:text-[var(--green)]">
            rumit
          </span>
          <span className="hidden text-[var(--text-dim)] sm:inline">— cyber.ops</span>
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded px-2 py-1.5 text-[11px] tracking-wide text-[var(--text-muted)] transition hover:bg-[rgba(57,255,20,0.08)] hover:text-[var(--green)]"
              >
                ./{link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <button
            type="button"
            className="rounded border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--text-muted)] lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Menu"
          >
            {open ? "×" : "≡"}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="max-h-[70vh] overflow-y-auto border-t border-[var(--border)] bg-[rgba(5,8,5,0.98)] px-4 py-3 lg:hidden">
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
