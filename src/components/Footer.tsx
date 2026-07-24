"use client";

import { useI18n } from "@/i18n/LanguageContext";
import { siteConfig } from "@/i18n/translations";

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--border)] bg-black/30">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-xs text-[var(--text-dim)] md:flex-row md:items-center md:justify-between md:px-6">
        <p>
          <span className="text-[var(--green)]">$</span> echo &quot;© {year}{" "}
          {siteConfig.name} — {t.footer.copy}&quot;
        </p>
        <p className="font-mono">{t.footer.built}</p>
      </div>
    </footer>
  );
}
