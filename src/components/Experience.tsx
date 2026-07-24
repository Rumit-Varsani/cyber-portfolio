"use client";

import { useI18n } from "@/i18n/LanguageContext";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  const { t } = useI18n();
  const e = t.experience;

  return (
    <section
      id="experience"
      className="section-pad border-y border-[var(--border)] bg-black/20"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading command={e.command} title={e.title} subtitle={e.subtitle} />
        <div className="relative space-y-5 before:absolute before:top-2 before:bottom-2 before:left-3 before:w-px before:bg-[var(--border)] md:before:left-4">
          {e.items.map((job, i) => (
            <article
              key={`${job.role}-${job.period}`}
              className="panel animate-fade-up relative ml-6 p-5 md:ml-8"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <span className="absolute top-6 -left-[1.65rem] h-3 w-3 rounded-full border-2 border-[var(--green)] bg-[var(--bg)] shadow-[0_0_10px_var(--green-glow)] md:-left-[2.15rem]" />
              <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base text-[var(--green)]">{job.role}</h3>
                <span className="text-xs text-[var(--text-dim)]">{job.period}</span>
              </div>
              <p className="mb-3 text-sm text-[var(--text-muted)]">
                {job.org} · {job.location}
              </p>
              <ul className="space-y-2">
                {job.bullets.map((b) => (
                  <li key={b} className="text-sm leading-relaxed text-[var(--text-dim)]">
                    <span className="text-[var(--green)]">›</span> {b}
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
