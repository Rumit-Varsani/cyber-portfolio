"use client";

import { useI18n } from "@/i18n/LanguageContext";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const { t } = useI18n();
  const p = t.projects;

  return (
    <section id="projects" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <SectionHeading command={p.command} title={p.title} subtitle={p.subtitle} />
        <div className="grid gap-5 md:grid-cols-2">
          {p.items.map((project, i) => (
            <article
              key={project.id}
              className="panel animate-fade-up flex flex-col p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_28px_rgba(57,255,20,0.12)]"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <span className="tag">{project.tag}</span>
                <span className="text-[10px] tracking-widest text-[var(--cyan)] uppercase">
                  {project.status}
                </span>
              </div>
              <h3 className="mb-2 text-lg text-[var(--text)]">{project.title}</h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
                {project.description}
              </p>
              <ul className="mb-4 space-y-1.5 border-l border-[var(--border)] pl-3">
                {project.highlights.map((h) => (
                  <li key={h} className="text-xs leading-relaxed text-[var(--text-dim)]">
                    <span className="text-[var(--green)]">+</span> {h}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-1.5 border-t border-[var(--border)] pt-4">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded border border-[var(--border)] px-2 py-0.5 text-[10px] text-[var(--text-dim)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs"
                >
                  {p.viewGithub}
                </a>
                <a
                  href={`https://github.com/Rumit-Varsani/cyber-portfolio/tree/main/${project.localPath}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost text-xs"
                >
                  {p.viewCode}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
