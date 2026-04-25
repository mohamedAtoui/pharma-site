"use client"

import { Phone, Mail, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle, ArrowRight } from "lucide-react"
import ContactForm from "@/components/contact-form"
import HandSonLogo from "@/components/handson-logo"
import SiteHeader from "@/components/site-header"
import { useLanguage } from "@/components/language-context"

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader variant="home" />

      {/* Hero Section */}
      <section className="relative py-24 lg:py-36 min-h-[65vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute inset-0 bg-dots opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10 flex justify-center animate-fade-in-up">
              <HandSonLogo size="lg" />
            </div>

            <p
              className="text-lg sm:text-xl text-gray-500 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200"
              style={{ letterSpacing: "0.01em" }}
            >
              {t.hero.subtitle}
            </p>

            <div className="animate-fade-in-up animation-delay-300">
              <div className="badge-outline">
                <Clock className="h-4 w-4" />
                {t.hero.underConstruction}
              </div>
            </div>

            <div className="mt-10 flex justify-center gap-4 animate-fade-in-up animation-delay-400">
              <Link href="#products" className="btn-handson">
                {t.hero.viewProducts}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-gray-700 bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300"
                style={{ fontSize: "0.9375rem" }}
              >
                {t.hero.contactUs}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24" style={{ background: "var(--handson-slate-50)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-green mb-6">{t.products.badge}</div>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
              style={{ letterSpacing: "-0.02em" }}
            >
              {t.products.heading}
            </h2>
            <div className="section-divider mx-auto mb-6"></div>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">{t.products.subheading}</p>
          </div>

          {/* Product Card */}
          <div className="max-w-5xl mx-auto">
            <Link href="/products/synapgen" className="block group">
              <div className="product-card bg-white rounded-2xl overflow-hidden transition-all duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div
                    className="relative h-72 lg:h-auto lg:min-h-[320px] overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(145deg, #1a1a2e 0%, #16213e 100%)",
                    }}
                  >
                    <Image
                      src="/synapgen-landing.png"
                      alt="Synapgen - Memory and Mental Vitality Supplement"
                      fill
                      className="object-contain object-center p-4 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="badge-muted mb-4 self-start">
                      {t.products.dietarySupplement}
                    </div>
                    <h3
                      className="text-3xl font-bold text-gray-900 mb-4"
                      style={{ letterSpacing: "-0.02em" }}
                    >
                      Synapgen
                    </h3>
                    <p className="text-gray-500 mb-6 leading-relaxed text-base">
                      {t.products.synapgenBlurb}
                    </p>

                    <div className="space-y-3 mb-8">
                      {t.products.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle
                            className="h-5 w-5 flex-shrink-0"
                            style={{ color: "var(--handson-green)" }}
                          />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <span
                      className="inline-flex items-center gap-2 font-semibold group-hover:gap-3 transition-all duration-300"
                      style={{ color: "var(--handson-green)" }}
                    >
                      {t.products.learnMore}
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-green mb-6">{t.contact.badge}</div>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
              style={{ letterSpacing: "-0.02em" }}
            >
              {t.contact.heading}
            </h2>
            <div className="section-divider mx-auto mb-6"></div>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">{t.contact.subheading}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <div>
              <h3
                className="text-xl font-bold text-gray-900 mb-8"
                style={{ letterSpacing: "-0.01em" }}
              >
                {t.contact.infoHeading}
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="icon-box icon-box-orange">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm uppercase tracking-wide">
                      {t.contact.emailLabel}
                    </h4>
                    <p className="text-gray-600">sarl.handson@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="icon-box icon-box-green">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm uppercase tracking-wide">
                      {t.contact.phoneLabel}
                    </h4>
                    <p className="text-gray-600">+213 664 11 70 11</p>
                    <p className="text-gray-400 text-sm mt-1">{t.contact.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100" style={{ background: "var(--handson-slate-50)" }}>
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
