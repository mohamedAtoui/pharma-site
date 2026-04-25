"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import HandSonLogo from "@/components/handson-logo"
import LanguageToggle from "@/components/language-toggle"
import { useLanguage } from "@/components/language-context"

type Variant = "home" | "product"

export default function SiteHeader({ variant }: { variant: Variant }) {
  const { t } = useLanguage()

  return (
    <header
      className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100/80"
      style={{ boxShadow: "var(--shadow-soft)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {variant === "home" ? (
            <HandSonLogo size="sm" />
          ) : (
            <Link href="/">
              <HandSonLogo size="sm" />
            </Link>
          )}

          <div className="flex items-center gap-4 sm:gap-6">
            {variant === "home" ? (
              <nav className="hidden sm:flex items-center gap-8">
                <Link
                  href="#products"
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {t.nav.products}
                </Link>
                <Link
                  href="#contact"
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {t.nav.contact}
                </Link>
              </nav>
            ) : (
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">{t.nav.backToHome}</span>
              </Link>
            )}
            <LanguageToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
