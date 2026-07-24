"use client";

import { useI18n } from "@/i18n/LanguageContext";
import SectionHeading from "./SectionHeading";

export default function Certificates() {
  const { t } = useI18n();
  const c = t.certs;

  return (
    <section id="certs" className="section-pad border-y border-[var(--border)] bg-black/20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading command={c.command} title={c.title} subtitle={c.subtitle} />
        <div className="grid gap-4 md:grid-cols-2">
          {c.items.map((cert, i) => (
            <article
              key={cert.name}
              className="panel animate-fade-up flex flex-col p-5 transition hover:border-[var(--border-bright)]"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                <h3 className="text-base text-[var(--text)]">{cert.name}</h3>
                <span className="text-xs text-[var(--text-dim)]">{cert.date}</span>
              </div>
              <p className="text-sm text-[var(--cyan)]">{cert.issuer}</p>
              <p className="mt-2 flex-1 text-xs leading-relaxed text-[var(--text-muted)]">
                {cert.note}
              </p>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-4 w-fit text-xs"
              >
                {c.viewCert}
              </a>
            </article>
          ))}
        </div>
        <div className="panel mt-6 animate-fade-up p-5">
          <h3 className="mb-3 text-sm tracking-widest text-[var(--amber)] uppercase">
            [{c.roadmapTitle}]
          </h3>
          <ul className="space-y-2">
            {c.roadmap.map((item) => (
              <li key={item} className="text-sm text-[var(--text-muted)]">
                <span className="text-[var(--green)]">›</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
