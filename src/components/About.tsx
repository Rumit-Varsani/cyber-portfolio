"use client";

import { useI18n } from "@/i18n/LanguageContext";
import SectionHeading from "./SectionHeading";
import TerminalWindow from "./TerminalWindow";

export default function About() {
  const { t } = useI18n();
  const a = t.about;

  return (
    <section id="about" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <SectionHeading command={a.command} title={a.title} subtitle={a.subtitle} />
        <div className="grid gap-6 lg:grid-cols-5">
          <div className="prose-terminal animate-fade-up lg:col-span-3">
            {a.paragraphs.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
          <TerminalWindow className="animate-fade-up-delay lg:col-span-2" title={a.focusTitle}>
            <p className="mb-4 text-xs text-[var(--text-dim)]">{a.focusHint}</p>
            <ul className="space-y-3">
              {a.focusAreas.map((item, i) => (
                <li key={item} className="flex gap-3 text-sm text-[var(--text-muted)]">
                  <span className="text-[var(--green)]">{String(i + 1).padStart(2, "0")}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </TerminalWindow>
        </div>
      </div>
    </section>
  );
}
