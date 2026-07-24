import { site } from "@/data/content";
import TerminalWindow from "./TerminalWindow";
import Typewriter from "./Typewriter";

const bootLines = [
  "initializing secure shell…",
  "loading network stack… ok",
  "mounting skill modules… ok",
  `operator: ${site.name}`,
  "role: cybersecurity & networking",
  "status: open to opportunities",
];

export default function Hero() {
  return (
    <section id="home" className="section-pad relative pt-28 md:pt-36">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded border border-[var(--border)] bg-black/30 px-3 py-1 text-xs text-[var(--cyan)]">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--green)]" />
            {site.location} · online
          </p>

          <h1 className="mb-4 text-4xl leading-tight font-semibold tracking-tight md:text-5xl lg:text-6xl">
            <span className="text-[var(--text-dim)]">whoami</span>
            <br />
            <span className="glow-text text-[var(--green)]">{site.name}</span>
          </h1>

          <p className="mb-2 text-lg text-[var(--cyan)] md:text-xl">
            {site.title}
          </p>
          <p className="mb-8 max-w-xl text-sm leading-relaxed text-[var(--text-muted)] md:text-base">
            {site.tagline}
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              ./view_projects
            </a>
            <a href="#contact" className="btn-ghost">
              ./contact
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              linkedin ↗
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3 max-w-md">
            {[
              { label: "focus", value: "sec + net" },
              { label: "base", value: "Berlin" },
              { label: "stack", value: "ops-first" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="panel px-3 py-3 text-center"
              >
                <p className="text-[10px] tracking-widest text-[var(--text-dim)] uppercase">
                  {stat.label}
                </p>
                <p className="mt-1 text-sm text-[var(--green)]">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        <TerminalWindow title={`${site.handle}:~/portfolio$`}>
          <div className="mb-4 text-xs text-[var(--text-dim)]">
            last login: {new Date().toUTCString()}
          </div>
          <Typewriter lines={bootLines} />
          <div className="mt-6 border-t border-[var(--border)] pt-4 font-mono text-xs text-[var(--text-dim)]">
            <p>
              <span className="text-[var(--green)]">TIP</span> scroll to explore
              modules — about, skills, labs, writeups.
            </p>
            <pre className="mt-4 overflow-x-auto text-[10px] leading-tight text-[var(--green-dim)] md:text-xs">
{`    ┌─────────────────────┐
    │  SECURE · OBSERVE   │
    │  MAP · HARDEN       │
    └─────────────────────┘`}
            </pre>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
