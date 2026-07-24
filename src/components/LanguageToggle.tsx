"use client";

import { useI18n } from "@/i18n/LanguageContext";
import type { Lang } from "@/i18n/translations";

export default function LanguageToggle() {
  const { lang, setLang, t } = useI18n();

  const btn = (code: Lang, label: string) => (
    <button
      type="button"
      key={code}
      onClick={() => setLang(code)}
      aria-pressed={lang === code}
      className={`rounded px-2 py-1 text-xs tracking-wide transition ${
        lang === code
          ? "bg-[rgba(57,255,20,0.18)] text-[var(--green)] shadow-[0_0_12px_rgba(57,255,20,0.25)]"
          : "text-[var(--text-dim)] hover:text-[var(--text-muted)]"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div
      className="inline-flex items-center gap-0.5 rounded border border-[var(--border)] bg-black/40 p-0.5"
      role="group"
      aria-label={t.lang.label}
    >
      {btn("de", t.lang.de)}
      {btn("en", t.lang.en)}
    </div>
  );
}
