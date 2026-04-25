"use client"

import { CheckCircle, Pill, Clock, Phone, Mail } from "lucide-react"
import HandSonLogo from "@/components/handson-logo"
import ProductBox3D from "@/components/product-box-3d"
import SiteHeader from "@/components/site-header"
import { useLanguage } from "@/components/language-context"

export default function SynapgenContent() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader variant="product" />

      {/* Product Hero */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* 3D Product Box */}
            <div
              className="flex items-center justify-center py-10 lg:py-16 rounded-2xl overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, #ffffff 0%, #f7f8fa 100%)",
              }}
            >
              <ProductBox3D />
            </div>

            {/* Product Info */}
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="badge-green">{t.synapgen.badgeFr}</span>
                <span className="badge-muted">{t.synapgen.badgeEn}</span>
              </div>

              <h1
                className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2"
                style={{ letterSpacing: "-0.03em" }}
              >
                Synapgen
              </h1>
              <p className="text-xl text-gray-400 mb-6 font-medium">
                {t.synapgen.tagline}
              </p>

              <h2
                className="text-xl lg:text-2xl font-semibold text-gray-900 mb-6 leading-snug"
                style={{ letterSpacing: "-0.01em" }}
              >
                {t.synapgen.heading}
              </h2>

              <div className="space-y-4 mb-10">
                {t.synapgen.paragraphs.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-base lg:text-[1.05rem] text-gray-600 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Benefits */}
              <h3
                className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide"
                style={{ letterSpacing: "0.05em" }}
              >
                {t.synapgen.benefitsHeading}
              </h3>
              <div className="space-y-3 mb-10">
                {t.synapgen.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle
                      className="h-5 w-5 flex-shrink-0 mt-0.5"
                      style={{ color: "var(--handson-green)" }}
                    />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Product Details Pills */}
              <div className="flex flex-wrap gap-3 mb-10">
                <div
                  className="flex items-center gap-2 rounded-xl px-5 py-3 border border-gray-100"
                  style={{ background: "var(--handson-slate-50)" }}
                >
                  <Pill className="h-5 w-5" style={{ color: "var(--handson-green)" }} />
                  <span className="text-gray-700 font-medium text-sm">
                    {t.synapgen.capsules}
                  </span>
                </div>
                <div
                  className="flex items-center gap-2 rounded-xl px-5 py-3 border border-gray-100"
                  style={{ background: "var(--handson-slate-50)" }}
                >
                  <Clock className="h-5 w-5" style={{ color: "var(--handson-orange)" }} />
                  <span className="text-gray-700 font-medium text-sm">
                    {t.synapgen.dosage}
                  </span>
                </div>
              </div>

              {/* Availability */}
              <div
                className="rounded-xl p-6 border"
                style={{
                  background: "var(--handson-green-tint)",
                  borderColor: "rgba(26, 159, 74, 0.15)",
                }}
              >
                <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">
                  {t.synapgen.availabilityHeading}
                </h3>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  {t.synapgen.availabilityBody}
                </p>
                <div className="space-y-1.5">
                  <p className="flex items-center gap-2 text-gray-700 text-sm">
                    <Phone className="h-4 w-4" style={{ color: "var(--handson-green)" }} />
                    <span className="font-medium">{t.synapgen.telLabel} :</span>
                    <a
                      href={`tel:${t.synapgen.telValue.replace(/\s/g, "")}`}
                      className="hover:underline"
                    >
                      {t.synapgen.telValue}
                    </a>
                  </p>
                  <p className="flex items-center gap-2 text-gray-700 text-sm">
                    <Mail className="h-4 w-4" style={{ color: "var(--handson-green)" }} />
                    <span className="font-medium">{t.synapgen.emailLabel} :</span>
                    <a
                      href={`mailto:${t.synapgen.emailValue}`}
                      className="hover:underline"
                    >
                      {t.synapgen.emailValue}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-12 border-t border-gray-100 mt-12"
        style={{ background: "var(--handson-slate-50)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6">
            <HandSonLogo size="sm" />
            <p className="text-sm text-gray-400" style={{ letterSpacing: "0.02em" }}>
              {t.footer.tagline}
            </p>
            <div className="section-divider"></div>
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-400">
              <span>&copy; {new Date().getFullYear()} HandSon</span>
              <span className="hidden sm:inline">&middot;</span>
              <span>{t.footer.rights}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
