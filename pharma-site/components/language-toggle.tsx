"use client"

import { useLanguage } from "@/components/language-context"

export default function LanguageToggle() {
  const { lang, setLang, t } = useLanguage()

  const baseBtn =
    "px-2.5 py-1 text-xs font-semibold rounded-md transition-all duration-200"
  const activeStyle = {
    background: "var(--handson-green)",
    color: "#fff",
  }
  const inactiveClasses = "text-gray-500 hover:text-gray-900"

  return (
    <div
      role="group"
      aria-label={t.toggle.ariaLabel}
      className="inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white p-0.5"
      style={{ boxShadow: "var(--shadow-soft)" }}
    >
      <button
        type="button"
        aria-pressed={lang === "fr"}
        onClick={() => setLang("fr")}
        className={`${baseBtn} ${lang === "fr" ? "" : inactiveClasses}`}
        style={lang === "fr" ? activeStyle : undefined}
      >
        {t.toggle.fr}
      </button>
      <button
        type="button"
        aria-pressed={lang === "en"}
        onClick={() => setLang("en")}
        className={`${baseBtn} ${lang === "en" ? "" : inactiveClasses}`}
        style={lang === "en" ? activeStyle : undefined}
      >
        {t.toggle.en}
      </button>
    </div>
  )
}
