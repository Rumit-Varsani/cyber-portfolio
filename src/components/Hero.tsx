"use client";

import { useI18n } from "@/i18n/LanguageContext";
import { siteConfig } from "@/i18n/translations";
import TerminalWindow from "./TerminalWindow";
import Typewriter from "./Typewriter";

export default function Hero() {
  const { t, lang } = useI18n();
  const h = t.hero;

  return (
    <section id="home" className="section-pad relative pt-28 md:pt-32">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div className="animate-fade-up">
          <p className="mb-4 inline-flex items-center gap-2 rounded border border-[var(--border)] bg-black/30 px-3 py-1 text-xs text-[var(--cyan)]">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--green)]" />
            {h.status}
          </p>

          <h1 className="mb-4 text-4xl leading-tight font-semibold tracking-tight md:text-5xl lg:text-6xl">
            <span className="text-[var(--text-dim)]">{h.whoami}</span>
            <br />
            <span className="glow-text text-[var(--green)]">{siteConfig.name}</span>
          </h1>

          <p className="mb-2 font-sans text-lg text-[var(--cyan)] md:text-xl">
            {h.title}
          </p>
          <p className="mb-8 max-w-xl font-sans text-sm leading-relaxed text-[var(--text-muted)] md:text-base">
            {h.subtitle}
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              {h.ctaProjects}
            </a>
            <a href="#contact" className="btn-ghost">
              {h.ctaContact}
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              {h.linkedin}
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              {h.github}
            </a>
          </div>

          <div className="mt-10 grid max-w-md grid-cols-3 gap-3">
            {h.stats.map((stat) => (
              <div key={stat.label} className="panel px-3 py-3 text-center">
                <p className="text-[10px] tracking-widest text-[var(--text-dim)] uppercase">
                  {stat.label}
                </p>
                <p className="mt-1 text-sm text-[var(--green)]">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-fade-up-delay min-w-0">
          <TerminalWindow title={h.terminalTitle}>
            <div className="mb-4 text-xs text-[var(--text-dim)]">
              session: portfolio / secure
            </div>
            <Typewriter key={lang} lines={[...h.bootLines]} />
            <div className="mt-6 border-t border-[var(--border)] pt-4 font-mono text-xs text-[var(--text-dim)]">
              <p>
                <span className="text-[var(--green)]">TIP</span> {h.tip}
              </p>
              <pre className="mt-4 overflow-x-auto text-[10px] leading-tight text-[var(--green-dim)] md:text-xs">
{`    ┌─────────────────────┐
    │  SECURE · OBSERVE   │
    │  MAP · HARDEN       │
    └─────────────────────┘`}
              </pre>
            </div>
          </TerminalWindow>
        </div>
      </div>
    </section>
  );
}
