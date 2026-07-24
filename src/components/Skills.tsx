"use client";

import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/i18n/LanguageContext";
import SectionHeading from "./SectionHeading";

function SkillGroup({
  title,
  items,
  visible,
}: {
  title: string;
  items: readonly { name: string; level: number }[];
  visible: boolean;
}) {
  return (
    <div className="panel animate-fade-up p-5">
      <h3 className="mb-5 text-sm tracking-widest text-[var(--cyan)] uppercase">
        [{title}]
      </h3>
      <ul className="space-y-4">
        {items.map((skill, idx) => (
          <li key={skill.name} style={{ transitionDelay: `${idx * 60}ms` }}>
            <div className="mb-1.5 flex items-center justify-between gap-3 text-xs">
              <span className="text-[var(--text-muted)]">{skill.name}</span>
              <span className="tabular-nums text-[var(--green)]">{skill.level}%</span>
            </div>
            <div className="skill-bar" aria-hidden>
              <span
                style={{
                  width: visible ? `${skill.level}%` : "0%",
                  transitionDelay: `${idx * 80}ms`,
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  const { t } = useI18n();
  const s = t.skills;
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      className="section-pad border-y border-[var(--border)] bg-black/20"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading command={s.command} title={s.title} subtitle={s.subtitle} />
        <div className="grid gap-5 md:grid-cols-3">
          <SkillGroup title={s.groups.security} items={s.security} visible={visible} />
          <SkillGroup title={s.groups.networking} items={s.networking} visible={visible} />
          <SkillGroup title={s.groups.operations} items={s.operations} visible={visible} />
        </div>
        <div className="panel mt-6 animate-fade-up p-5">
          <h3 className="mb-4 text-sm tracking-widest text-[var(--amber)] uppercase">
            [{s.toolsTitle}]
          </h3>
          <div className="flex flex-wrap gap-2">
            {s.tools.map((tool, i) => (
              <span
                key={tool}
                className="tag transition hover:scale-105 hover:border-[var(--green)]"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
