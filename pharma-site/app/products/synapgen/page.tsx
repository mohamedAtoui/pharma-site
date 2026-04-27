import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Pill, Clock } from "lucide-react"
import HandSonLogo from "@/components/handson-logo"
import ProductBox3D from "@/components/product-box-3d"
import AnnouncementBanner from "@/components/announcement-banner"

export const metadata: Metadata = {
  title: "Synapgen by HandSon - Complément Alimentaire Magnésium L-Thréonate | Memory Supplement",
  description:
    "Synapgen HandSon - Complément alimentaire à base de Magnésium L-Thréonate pour la mémoire et les fonctions cognitives. Dietary supplement for memory, concentration and cognitive support.",
  keywords: [
    // Primary search terms
    "Synapgen HandSon",
    "Synapgen",
    "HandSon Synapgen",
    "complément alimentaire Synapgen",
    // English
    "Magnesium L-threonate",
    "L-threonate",
    "Mg",
    "MgT",
    "HandSon",
    "memory supplement",
    "cognitive function",
    "concentration",
    "brain health",
    "mental vitality",
    // French (Algeria)
    "Magnésium L-Thréonate",
    "Mémoire",
    "Concentration",
    "Fonctions cognitives",
    "Gériatrie",
    "Examen",
    "complément alimentaire mémoire",
    "soutien cognitif",
    // Arabic (Algeria)
    "مغنزيوم",
    "مغنيزيوم ل ثريونات",
    "ذاكرة",
    "تركيز",
    "اختبار",
    "سينابجين",
  ],
  openGraph: {
    title: "Synapgen by HandSon - Complément Alimentaire Mémoire | Memory Supplement",
    description:
      "Synapgen HandSon - Votre allié pour une mémoire plus claire! Magnésium L-Thréonate pour mémoire, concentration et fonctions cognitives. Your ally for clearer memory and better focus!",
    url: "https://www.sarlhandson.com/products/synapgen",
    type: "website",
    images: [
      {
        url: "/synapgen-landing.png",
        width: 800,
        height: 600,
        alt: "Synapgen HandSon - Memory and Mental Vitality Supplement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Synapgen by HandSon - Memory & Cognitive Support",
    description:
      "Synapgen HandSon - Magnésium L-Thréonate pour mémoire et fonctions cognitives. Memory support supplement.",
    images: ["/synapgen-landing.png"],
  },
  alternates: {
    canonical: "https://www.sarlhandson.com/products/synapgen",
    languages: {
      "en": "https://www.sarlhandson.com/products/synapgen",
      "fr": "https://www.sarlhandson.com/products/synapgen",
    },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Synapgen",
  alternateName: ["Synapgen HandSon", "Complément Alimentaire Synapgen"],
  description:
    "Synapgen is a dietary supplement with Magnesium L-threonate that supports memory, concentration and cognitive functions for clearer memory and better focus. Synapgen est un complément alimentaire à base de Magnésium L-Thréonate pour la mémoire et les fonctions cognitives.",
  gtin13: "6132632000067",
  sku: "SYNAPGEN-60",
  brand: {
    "@type": "Brand",
    name: "HandSon",
  },
  manufacturer: {
    "@type": "Organization",
    name: "HandSon",
    alternateName: "SARL HandSon",
    url: "https://www.sarlhandson.com",
  },
  category: "Dietary Supplement",
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "Active Ingredient",
      value: "Magnesium L-Threonate",
    },
    {
      "@type": "PropertyValue",
      name: "Capsules",
      value: "60",
    },
  ],
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "DZD",
    seller: {
      "@type": "Organization",
      name: "HandSon",
      url: "https://www.sarlhandson.com",
    },
  },
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "HandSon",
  alternateName: "SARL HandSon",
  url: "https://www.sarlhandson.com",
  logo: "https://www.sarlhandson.com/handson-logo.png",
  description: "HandSon - Innovative pharmaceutical solutions and dietary supplements",
}

export default function SynapgenPage() {
  const features = [
    { en: "Supports memory function", fr: "Soutient la fonction mémorielle" },
    { en: "Enhances concentration", fr: "Améliore la concentration" },
    { en: "Cognitive function support", fr: "Soutien des fonctions cognitives" },
    { en: "Contains Magnesium L-threonate", fr: "Contient du Magnésium L-Thréonate" },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100/80" style={{ boxShadow: 'var(--shadow-soft)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/">
                <HandSonLogo size="sm" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </div>
          </div>
        </header>

        <AnnouncementBanner />

        {/* Product Hero */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* 3D Product Box */}
              <div className="flex items-center justify-center py-10 lg:py-16 rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f7f8fa 100%)' }}>
                <ProductBox3D />
              </div>

              {/* Product Info */}
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="badge-green">Dietary Supplement</span>
                  <span className="badge-muted">Complément Alimentaire</span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2" style={{ letterSpacing: '-0.03em' }}>
                  Synapgen
                </h1>
                <p className="text-xl text-gray-400 mb-8 font-medium">by HandSon</p>

                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  Your ally for clearer memory and better focus! Thanks to Magnesium
                  L-Threonate, Synapgen supports memory, concentration and cognitive
                  functions to accompany you daily in your studies, work or demanding
                  activities.
                </p>
                <p className="text-base text-gray-400 mb-10 leading-relaxed italic border-l-2 pl-4" style={{ borderColor: 'var(--handson-orange-light)' }}>
                  Votre allié pour une mémoire plus claire et une meilleure concentration !
                  Grâce au Magnésium L-Thréonate, Synapgen soutient la mémoire, la concentration
                  et les fonctions cognitives pour vous accompagner au quotidien dans vos études,
                  votre travail ou vos activités exigeantes.
                </p>

                {/* Features */}
                <div className="space-y-4 mb-10">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle
                        className="h-5 w-5 flex-shrink-0 mt-0.5"
                        style={{ color: "var(--handson-green)" }}
                      />
                      <div>
                        <span className="text-gray-700 block">{feature.en}</span>
                        <span className="text-gray-400 text-sm italic">{feature.fr}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Product Details Pills */}
                <div className="flex flex-wrap gap-3 mb-10">
                  <div className="flex items-center gap-2 rounded-xl px-5 py-3 border border-gray-100" style={{ background: 'var(--handson-slate-50)' }}>
                    <Pill className="h-5 w-5" style={{ color: 'var(--handson-green)' }} />
                    <span className="text-gray-700 font-medium text-sm">60 capsules</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl px-5 py-3 border border-gray-100" style={{ background: 'var(--handson-slate-50)' }}>
                    <Clock className="h-5 w-5" style={{ color: 'var(--handson-orange)' }} />
                    <span className="text-gray-700 font-medium text-sm">3 capsules/day</span>
                  </div>
                </div>

                {/* Availability */}
                <div className="rounded-xl p-6 border" style={{ background: 'var(--handson-green-tint)', borderColor: 'rgba(26, 159, 74, 0.15)' }}>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm uppercase tracking-wide">
                    Availability / Disponibilité
                  </h3>
                  <p className="text-gray-600 mb-1 text-sm">
                    Available in pharmacies, pharmaceutical wholesalers and parapharmaceuticals.
                  </p>
                  <p className="text-gray-400 text-sm italic">
                    Disponible en pharmacies, grossistes pharmaceutiques et parapharmacies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-gray-100 mt-12" style={{ background: 'var(--handson-slate-50)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-6">
              <HandSonLogo size="sm" />
              <p className="text-sm text-gray-400" style={{ letterSpacing: '0.02em' }}>
                Innovative pharmaceutical solutions
              </p>
              <div className="section-divider"></div>
              <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-400">
                <span>&copy; {new Date().getFullYear()} HandSon</span>
                <span className="hidden sm:inline">&middot;</span>
                <span>All rights reserved</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
