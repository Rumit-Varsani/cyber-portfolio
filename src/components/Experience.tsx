import {
  certifications,
  education,
  experience,
  languages,
} from "@/data/content";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-pad border-y border-[var(--border)] bg-black/20"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          command="journalctl -u career --since forever"
          title="Experience & Education"
          subtitle="Professional background plus the formal learning path supporting a security/network direction."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-xs tracking-widest text-[var(--cyan)] uppercase">
              {"// work"}
            </h3>
            {experience.map((job) => (
              <article key={job.org} className="panel p-5">
                <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="text-base text-[var(--green)]">{job.role}</h4>
                  <span className="text-xs text-[var(--text-dim)]">
                    {job.period}
                  </span>
                </div>
                <p className="mb-3 text-sm text-[var(--text-muted)]">
                  {job.org} · {job.location}
                </p>
                <ul className="space-y-2">
                  {job.bullets.map((b) => (
                    <li
                      key={b}
                      className="text-sm leading-relaxed text-[var(--text-dim)]"
                    >
                      <span className="text-[var(--green)]">›</span> {b}
                    </li>
                  ))}
                </ul>
              </article>
            ))}

            <h3 className="pt-2 text-xs tracking-widest text-[var(--cyan)] uppercase">
              {"// languages"}
            </h3>
            <div className="panel p-5">
              <ul className="space-y-2">
                {languages.map((lang) => (
                  <li
                    key={lang.name}
                    className="flex justify-between gap-3 text-sm"
                  >
                    <span className="text-[var(--text-muted)]">{lang.name}</span>
                    <span className="text-[var(--text-dim)]">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs tracking-widest text-[var(--cyan)] uppercase">
              {"// education"}
            </h3>
            {education.map((ed) => (
              <article key={ed.degree} className="panel p-5">
                <h4 className="text-base text-[var(--green)]">{ed.degree}</h4>
                <p className="mt-1 text-sm text-[var(--text-muted)]">
                  {ed.school}
                </p>
                {ed.note ? (
                  <p className="mt-1 text-xs text-[var(--text-dim)]">{ed.note}</p>
                ) : null}
              </article>
            ))}

            <h3 className="pt-2 text-xs tracking-widest text-[var(--cyan)] uppercase">
              {"// certs & learning path"}
            </h3>
            <div className="panel p-5">
              <ul className="space-y-3">
                {certifications.map((c) => (
                  <li key={c.name}>
                    <p className="text-sm text-[var(--text-muted)]">{c.name}</p>
                    <p className="text-xs text-[var(--text-dim)]">{c.focus}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
