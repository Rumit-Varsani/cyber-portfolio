"use client";

import { FormEvent, useState } from "react";
import { useI18n } from "@/i18n/LanguageContext";
import { siteConfig } from "@/i18n/translations";
import SectionHeading from "./SectionHeading";
import TerminalWindow from "./TerminalWindow";

export default function Contact() {
  const { t } = useI18n();
  const c = t.contact;
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  }

  return (
    <section id="contact" className="section-pad border-t border-[var(--border)] bg-black/20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading command={c.command} title={c.title} subtitle={c.subtitle} />
        <div className="grid gap-6 lg:grid-cols-2">
          <TerminalWindow title="channels.txt" className="animate-fade-up">
            <ul className="space-y-4 text-sm">
              <li>
                <p className="text-[10px] tracking-widest text-[var(--text-dim)] uppercase">
                  {c.email}
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-[var(--green)] hover:underline"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <p className="text-[10px] tracking-widest text-[var(--text-dim)] uppercase">
                  {c.linkedin}
                </p>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--cyan)] hover:underline"
                >
                  linkedin.com/in/rumit-varsani
                </a>
              </li>
              <li>
                <p className="text-[10px] tracking-widest text-[var(--text-dim)] uppercase">
                  {c.github}
                </p>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--cyan)] hover:underline"
                >
                  github.com/Rumit-Varsani
                </a>
              </li>
              <li>
                <p className="text-[10px] tracking-widest text-[var(--text-dim)] uppercase">
                  {c.location}
                </p>
                <p className="text-[var(--text-muted)]">{c.locationValue}</p>
              </li>
              <li>
                <p className="text-[10px] tracking-widest text-[var(--text-dim)] uppercase">
                  {c.status}
                </p>
                <p className="text-[var(--amber)]">{c.statusValue}</p>
              </li>
            </ul>
          </TerminalWindow>

          <form onSubmit={handleSubmit} className="panel animate-fade-up-delay space-y-4 p-5">
            <p className="text-xs text-[var(--text-dim)]">{c.formHint}</p>
            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs text-[var(--text-muted)]">
                {c.name}
              </label>
              <input
                id="name"
                name="name"
                required
                className="input-terminal"
                placeholder={c.namePh}
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs text-[var(--text-muted)]">
                {c.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="input-terminal"
                placeholder={c.emailPh}
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs text-[var(--text-muted)]">
                {c.message}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="input-terminal resize-y"
                placeholder={c.messagePh}
              />
            </div>
            <button type="submit" className="btn-primary w-full sm:w-auto">
              {c.send}
            </button>
            {status === "sent" ? (
              <p className="text-xs text-[var(--green)]">{c.sent}</p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
