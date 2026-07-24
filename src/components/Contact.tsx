"use client";

import { FormEvent, useState } from "react";
import { site } from "@/data/content";
import SectionHeading from "./SectionHeading";
import TerminalWindow from "./TerminalWindow";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  }

  return (
    <section
      id="contact"
      className="section-pad border-t border-[var(--border)] bg-black/20"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          command="nc -vz contact 443"
          title="Contact"
          subtitle="Open a channel — roles, collabs, labs, or just a technical conversation."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <TerminalWindow title="channels.txt">
            <ul className="space-y-4 text-sm">
              <li>
                <p className="text-[10px] tracking-widest text-[var(--text-dim)] uppercase">
                  email
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="text-[var(--green)] hover:underline"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <p className="text-[10px] tracking-widest text-[var(--text-dim)] uppercase">
                  linkedin
                </p>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--cyan)] hover:underline"
                >
                  linkedin.com/in/rumit-varsani
                </a>
              </li>
              <li>
                <p className="text-[10px] tracking-widest text-[var(--text-dim)] uppercase">
                  location
                </p>
                <p className="text-[var(--text-muted)]">{site.location}</p>
              </li>
              <li>
                <p className="text-[10px] tracking-widest text-[var(--text-dim)] uppercase">
                  status
                </p>
                <p className="text-[var(--amber)]">
                  exploring cyber / networking opportunities
                </p>
              </li>
            </ul>
          </TerminalWindow>

          <form onSubmit={handleSubmit} className="panel space-y-4 p-5">
            <p className="text-xs text-[var(--text-dim)]">
              $ compose --to operator --encrypt optional
            </p>
            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs text-[var(--text-muted)]">
                name
              </label>
              <input
                id="name"
                name="name"
                required
                className="input-terminal"
                placeholder="whoami"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs text-[var(--text-muted)]">
                email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="input-terminal"
                placeholder="you@domain.tld"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs text-[var(--text-muted)]">
                message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="input-terminal resize-y"
                placeholder="payload goes here…"
              />
            </div>
            <button type="submit" className="btn-primary w-full sm:w-auto">
              ./send_message
            </button>
            {status === "sent" ? (
              <p className="text-xs text-[var(--green)]">
                opening mail client… if nothing happens, email me directly.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
