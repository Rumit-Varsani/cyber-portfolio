"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/i18n/LanguageContext";
import LanguageToggle from "./LanguageToggle";

export default function Navbar() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const navLinks = [
    { href: "#home", id: "home", label: t.nav.home },
    { href: "#about", id: "about", label: t.nav.about },
    { href: "#skills", id: "skills", label: t.nav.skills },
    { href: "#projects", id: "projects", label: t.nav.projects },
    { href: "#experience", id: "experience", label: t.nav.experience },
    { href: "#education", id: "education", label: t.nav.education },
    { href: "#certs", id: "certs", label: t.nav.certs },
    { href: "#contact", id: "contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.id);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t.nav.home]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-40 border-b transition-colors duration-300 ${
        scrolled
          ? "border-[var(--border)] bg-[rgba(5,8,5,0.94)] backdrop-blur-md"
          : "border-transparent bg-[rgba(5,8,5,0.55)] backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-6">
        <a
          href="#home"
          className="group flex shrink-0 items-center gap-2 font-mono text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--green)]"
        >
          <span className="text-[var(--green)]">~/</span>
          <span className="text-[var(--text)] transition group-hover:text-[var(--green)]">
            rumit
          </span>
          <span className="hidden text-[var(--text-dim)] sm:inline">— cyber.ops</span>
        </a>

        <ul className="hidden items-center gap-0.5 xl:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`rounded px-2 py-1.5 text-[11px] tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--green)] ${
                  active === link.id
                    ? "bg-[rgba(57,255,20,0.12)] text-[var(--green)]"
                    : "text-[var(--text-muted)] hover:bg-[rgba(57,255,20,0.08)] hover:text-[var(--green)]"
                }`}
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
            className="rounded border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--text-muted)] xl:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--green)]"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Menu"
          >
            {open ? "×" : "≡"}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="max-h-[70vh] overflow-y-auto border-t border-[var(--border)] bg-[rgba(5,8,5,0.98)] px-4 py-3 xl:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded px-3 py-2.5 text-sm transition ${
                    active === link.id
                      ? "bg-[rgba(57,255,20,0.12)] text-[var(--green)]"
                      : "text-[var(--text-muted)] hover:bg-[rgba(57,255,20,0.08)] hover:text-[var(--green)]"
                  }`}
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
