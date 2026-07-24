"use client";

import { useI18n } from "@/i18n/LanguageContext";
import SectionHeading from "./SectionHeading";

export default function Education() {
  const { t } = useI18n();
  const ed = t.education;

  return (
    <section id="education" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <SectionHeading command={ed.command} title={ed.title} subtitle={ed.subtitle} />
        <div className="grid gap-5 md:grid-cols-2">
          {ed.items.map((item, i) => (
            <article
              key={item.degree}
              className="panel animate-fade-up p-5 transition hover:-translate-y-0.5"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <p className="mb-1 text-xs tracking-widest text-[var(--cyan)] uppercase">
                {item.period}
              </p>
              <h3 className="text-lg text-[var(--green)]">{item.degree}</h3>
              <p className="mt-1 text-sm text-[var(--text-muted)]">{item.school}</p>
              <ul className="mt-4 space-y-2 border-t border-[var(--border)] pt-4">
                {item.points.map((point) => (
                  <li key={point} className="text-sm leading-relaxed text-[var(--text-dim)]">
                    <span className="text-[var(--green)]">+</span> {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
