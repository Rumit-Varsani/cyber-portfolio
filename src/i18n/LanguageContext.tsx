"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { translations, type Dictionary, type Lang } from "./translations";

type Ctx = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dictionary;
};

const LanguageContext = createContext<Ctx | null>(null);
const STORAGE_KEY = "portfolio-lang";

const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function emit() {
  listeners.forEach((l) => l());
}

function readLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "de" || saved === "en") return saved;
  } catch {
    /* ignore */
  }
  return "de";
}

function getServerLang(): Lang {
  return "de";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, readLang, getServerLang);

  const setLang = useCallback((next: Lang) => {
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = next;
    }
    emit();
  }, []);

  useEffect(() => {
    // Keep <html lang> in sync after hydrate (avoids fighting SSR markup)
    if (document.documentElement.lang !== lang) {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: translations[lang] as Dictionary,
    }),
    [lang, setLang],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}
