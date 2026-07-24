import { skills } from "@/data/content";
import SectionHeading from "./SectionHeading";

function SkillGroup({
  title,
  items,
}: {
  title: string;
  items: { name: string; level: number }[];
}) {
  return (
    <div className="panel p-5">
      <h3 className="mb-5 text-sm tracking-widest text-[var(--cyan)] uppercase">
        [{title}]
      </h3>
      <ul className="space-y-4">
        {items.map((skill) => (
          <li key={skill.name}>
            <div className="mb-1.5 flex items-center justify-between gap-3 text-xs">
              <span className="text-[var(--text-muted)]">{skill.name}</span>
              <span className="text-[var(--green)]">{skill.level}%</span>
            </div>
            <div className="skill-bar" aria-hidden>
              <span style={{ width: `${skill.level}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad border-y border-[var(--border)] bg-black/20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          command="ls -la ~/skills/"
          title="Skills & Tooling"
          subtitle="Honest self-assessment — growing daily through labs, docs, and deliberate practice."
        />

        <div className="grid gap-5 md:grid-cols-3">
          <SkillGroup title="security" items={skills.security} />
          <SkillGroup title="networking" items={skills.networking} />
          <SkillGroup title="engineering" items={skills.engineering} />
        </div>

        <div className="panel mt-6 p-5">
          <h3 className="mb-4 text-sm tracking-widest text-[var(--amber)] uppercase">
            [toolbelt]
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.tools.map((tool) => (
              <span key={tool} className="tag">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
