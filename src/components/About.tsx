import { about } from "@/data/content";
import SectionHeading from "./SectionHeading";
import TerminalWindow from "./TerminalWindow";

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          command="cat ~/about.md"
          title="About"
          subtitle="Background, mindset, and the path into cybersecurity & networking."
        />

        <div className="grid gap-6 lg:grid-cols-5">
          <div className="prose-terminal lg:col-span-3">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          <TerminalWindow
            className="lg:col-span-2"
            title="focus_areas.cfg"
          >
            <p className="mb-4 text-xs text-[var(--text-dim)]">
              # priority learning tracks
            </p>
            <ul className="space-y-3">
              {about.focusAreas.map((item, i) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm text-[var(--text-muted)]"
                >
                  <span className="text-[var(--green)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
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
