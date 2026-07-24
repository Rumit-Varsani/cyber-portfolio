import { projects } from "@/data/content";
import SectionHeading from "./SectionHeading";

const statusColor: Record<string, string> = {
  lab: "text-[var(--cyan)]",
  project: "text-[var(--green)]",
  writeup: "text-[var(--amber)]",
};

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          command="find ~/labs -type f -name '*.md'"
          title="Projects & Labs"
          subtitle="Hands-on network labs, security experiments, and prior engineering / data work."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="panel flex flex-col p-5 transition duration-200 hover:-translate-y-0.5"
            >
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <span className="tag">{project.tag}</span>
                <span
                  className={`text-[10px] tracking-widest uppercase ${statusColor[project.status]}`}
                >
                  {project.status}
                </span>
              </div>

              <h3 className="mb-2 text-lg text-[var(--text)]">
                {project.title}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
                {project.description}
              </p>

              <ul className="mb-4 space-y-1.5 border-l border-[var(--border)] pl-3">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="text-xs leading-relaxed text-[var(--text-dim)]"
                  >
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
