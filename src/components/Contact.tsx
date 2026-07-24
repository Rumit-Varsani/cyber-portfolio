"use client";

import { FormEvent, useRef, useState } from "react";
import { useI18n } from "@/i18n/LanguageContext";
import { siteConfig } from "@/i18n/translations";
import SectionHeading from "./SectionHeading";
import TerminalWindow from "./TerminalWindow";

type Status = "idle" | "sending" | "sent" | "error" | "rate";

const MAX_NAME = 100;
const MAX_EMAIL = 200;
const MAX_MESSAGE = 4000;

export default function Contact() {
  const { t } = useI18n();
  const c = t.contact;
  const [status, setStatus] = useState<Status>("idle");
  const lastSent = useRef(0);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot
    if (String(data.get("company") || "").trim()) {
      setStatus("sent");
      form.reset();
      return;
    }

    const name = String(data.get("name") || "").trim().slice(0, MAX_NAME);
    const email = String(data.get("email") || "").trim().slice(0, MAX_EMAIL);
    const message = String(data.get("message") || "").trim().slice(0, MAX_MESSAGE);

    // Client cooldown (extra layer)
    const now = Date.now();
    if (now - lastSent.current < 8000) {
      setStatus("rate");
      return;
    }

    if (name.length < 2 || message.length < 5) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email, message, company: "" }),
      });

      if (res.status === 429) {
        setStatus("rate");
        return;
      }
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      lastSent.current = Date.now();
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

          <form
            onSubmit={handleSubmit}
            className="panel relative animate-fade-up-delay space-y-4 p-5"
            autoComplete="on"
          >
            <p className="text-xs text-[var(--text-dim)]">{c.formHint}</p>

            {/* Honeypot — hidden from users, bots often fill it */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
            >
              <label htmlFor="company">Company</label>
              <input
                id="company"
                name="company"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs text-[var(--text-muted)]">
                {c.name}
              </label>
              <input
                id="name"
                name="name"
                required
                maxLength={MAX_NAME}
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
                maxLength={MAX_EMAIL}
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
                maxLength={MAX_MESSAGE}
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
            {status === "rate" ? (
              <p className="text-xs text-[var(--amber)]">{c.rateLimited}</p>
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
