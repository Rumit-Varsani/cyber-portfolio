"use client";

import { FormEvent, useState } from "react";
import { useI18n } from "@/i18n/LanguageContext";
import { siteConfig } from "@/i18n/translations";
import SectionHeading from "./SectionHeading";
import TerminalWindow from "./TerminalWindow";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const { t } = useI18n();
  const c = t.contact;
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    setStatus("sending");

    try {
      // FormSubmit delivers to siteConfig.email (varsanirumit@gmail.com)
      // First submission: check Gmail for FormSubmit activation email.
      const res = await fetch(
        `https://formsubmit.co/ajax/${siteConfig.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
            _subject: `Portfolio contact from ${name}`,
            _template: "table",
            _captcha: "false",
            _replyto: email,
          }),
        },
      );

      if (!res.ok) {
        throw new Error(`FormSubmit HTTP ${res.status}`);
      }

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
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
                <p className="mt-1 text-[10px] text-[var(--text-dim)]">{c.inboxNote}</p>
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
                disabled={status === "sending"}
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
                disabled={status === "sending"}
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
                disabled={status === "sending"}
              />
            </div>
            <button
              type="submit"
              className="btn-primary w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-60"
              disabled={status === "sending"}
            >
              {status === "sending" ? c.sending : c.send}
            </button>
            {status === "sent" ? (
              <p className="text-xs text-[var(--green)]">{c.sent}</p>
            ) : null}
            {status === "error" ? (
              <p className="text-xs text-[var(--red)]">
                {c.error}{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-[var(--cyan)] underline">
                  {siteConfig.email}
                </a>
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
