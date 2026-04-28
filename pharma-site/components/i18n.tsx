"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";

type Lang = "fr" | "en";
const STORAGE_KEY = "hs_lang";

export function T({ fr, en }: { fr: ReactNode; en: ReactNode }) {
  return (
    <>
      <span data-lang-only="fr">{fr}</span>
      <span data-lang-only="en">{en}</span>
    </>
  );
}

export function LanguageToggle() {
  const [lang, setLang] = useState<Lang>("fr");

  useEffect(() => {
    const stored = (typeof window !== "undefined" &&
      (localStorage.getItem(STORAGE_KEY) as Lang | null)) || null;
    if (stored === "fr" || stored === "en") setLang(stored);
  }, []);

  const choose = (next: Lang) => {
    setLang(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
    document.documentElement.dataset.lang = next;
    document.documentElement.lang = next;
  };

  return (
    <div
      role="group"
      aria-label="Language"
      className="inline-flex items-center rounded-full border border-gray-200 bg-white p-0.5 text-[11px] font-semibold tracking-wide shadow-sm"
    >
      <button
        type="button"
        onClick={() => choose("fr")}
        aria-pressed={lang === "fr"}
        className={`rounded-full px-2.5 py-1 transition-colors ${
          lang === "fr"
            ? "bg-[var(--handson-green)] text-white"
            : "text-gray-500 hover:text-gray-800"
        }`}
      >
        FR
      </button>
      <button
        type="button"
        onClick={() => choose("en")}
        aria-pressed={lang === "en"}
        className={`rounded-full px-2.5 py-1 transition-colors ${
          lang === "en"
            ? "bg-[var(--handson-green)] text-white"
            : "text-gray-500 hover:text-gray-800"
        }`}
      >
        EN
      </button>
    </div>
  );
}
