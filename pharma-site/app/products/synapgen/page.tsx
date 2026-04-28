import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Pill, Clock, Phone, Mail } from "lucide-react"
import HandSonLogo from "@/components/handson-logo"
import ProductBox3D from "@/components/product-box-3d"
import AnnouncementBanner from "@/components/announcement-banner"
import { T, LanguageToggle } from "@/components/i18n"

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
    { en: "Memory improvement", fr: "Amélioration de la mémoire" },
    { en: "Better concentration", fr: "Meilleure concentration" },
    { en: "Optimized cognitive performance", fr: "Optimisation des performances cognitives" },
    { en: "Brain function support", fr: "Soutien des fonctions cérébrales" },
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
              <div className="flex items-center gap-4 sm:gap-6">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <T fr="Retour à l'accueil" en="Back to Home" />
                </Link>
                <LanguageToggle />
              </div>
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
                  <span className="badge-green">
                    <T fr="Complément Alimentaire" en="Dietary Supplement" />
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2" style={{ letterSpacing: '-0.03em' }}>
                  Synapgen
                </h1>
                <p className="text-base text-gray-400 mb-3 font-medium">by HandSon</p>
                <p className="text-lg sm:text-xl text-gray-800 font-semibold mb-8 leading-snug" style={{ letterSpacing: '-0.01em' }}>
                  <T
                    fr="Une approche scientifique ciblée de la mémoire"
                    en="A targeted scientific approach to memory"
                  />
                </p>

                {/* Description — French */}
                <div data-lang-only="fr" className="space-y-4 text-gray-600 leading-relaxed mb-10" lang="fr">
                  <p>
                    Synapgen est un complément alimentaire innovant conçu pour
                    agir directement au niveau cérébral et soutenir durablement
                    les fonctions cognitives.
                  </p>
                  <p>
                    Sa formule repose sur une technologie avancée permettant une
                    action ciblée sur les mécanismes neuronaux impliqués dans la
                    mémoire et la concentration. Contrairement aux approches
                    classiques, Synapgen se distingue par sa capacité à
                    intervenir au cœur des processus cognitifs.
                  </p>
                  <p>
                    Des études scientifiques, incluant des essais cliniques
                    randomisés en double aveugle, ont mis en évidence une
                    amélioration significative des performances mnésiques ainsi
                    que des fonctions cognitives globales après supplémentation.
                  </p>
                  <p>
                    Les données expérimentales montrent également un effet
                    positif sur la plasticité synaptique, un élément clé dans
                    les processus d&rsquo;apprentissage et de mémorisation.
                  </p>
                </div>

                {/* Description — English */}
                <div data-lang-only="en" className="space-y-4 text-gray-600 leading-relaxed mb-10" lang="en">
                  <p>
                    Synapgen is an innovative dietary supplement designed to
                    act directly at the cerebral level and provide lasting
                    support for cognitive functions.
                  </p>
                  <p>
                    Its formula relies on advanced technology that targets the
                    neuronal mechanisms involved in memory and concentration.
                    Unlike conventional approaches, Synapgen stands out for
                    its ability to act at the heart of cognitive processes.
                  </p>
                  <p>
                    Scientific studies, including randomized double-blind
                    clinical trials, have demonstrated a significant
                    improvement in memory performance as well as overall
                    cognitive function following supplementation.
                  </p>
                  <p>
                    Experimental data also show a positive effect on synaptic
                    plasticity, a key element in learning and memorization
                    processes.
                  </p>
                </div>

                {/* Benefits */}
                <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-4">
                  <T fr="Bénéfices observés" en="Observed benefits" />
                </h3>
                <div className="space-y-3 mb-10">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle
                        className="h-5 w-5 flex-shrink-0"
                        style={{ color: "var(--handson-green)" }}
                      />
                      <span className="text-gray-700">
                        <T fr={feature.fr} en={feature.en} />
                      </span>
                    </div>
                  ))}
                </div>

                {/* Product Details Pills */}
                <div className="flex flex-wrap gap-3 mb-10">
                  <div className="flex items-center gap-2 rounded-xl px-5 py-3 border border-gray-100" style={{ background: 'var(--handson-slate-50)' }}>
                    <Pill className="h-5 w-5" style={{ color: 'var(--handson-green)' }} />
                    <span className="text-gray-700 font-medium text-sm">
                      <T fr="60 gélules" en="60 capsules" />
                    </span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl px-5 py-3 border border-gray-100" style={{ background: 'var(--handson-slate-50)' }}>
                    <Clock className="h-5 w-5" style={{ color: 'var(--handson-orange)' }} />
                    <span className="text-gray-700 font-medium text-sm">
                      <T fr="3 gélules / jour" en="3 capsules / day" />
                    </span>
                  </div>
                </div>

                {/* Availability / Disponibilité */}
                <div className="rounded-xl p-6 border" style={{ background: 'var(--handson-green-tint)', borderColor: 'rgba(26, 159, 74, 0.15)' }}>
                  <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">
                    <T fr="Disponibilité" en="Availability" />
                  </h3>

                  <p data-lang-only="fr" lang="fr" className="text-gray-700 text-sm leading-relaxed mb-5">
                    Synapgen est disponible auprès des principaux grossistes
                    pharmaceutiques. Pour toute demande de référencement,
                    d&rsquo;approvisionnement ou d&rsquo;informations
                    commerciales, notre équipe reste à votre disposition afin
                    de vous accompagner dans l&rsquo;intégration du produit au
                    sein de votre officine.
                  </p>
                  <p data-lang-only="en" lang="en" className="text-gray-700 text-sm leading-relaxed mb-5">
                    Synapgen is available through leading pharmaceutical
                    wholesalers. For any inquiries about listing, supply, or
                    commercial information, our team is at your disposal to
                    support the integration of the product into your pharmacy.
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm">
                    <a
                      href="tel:+213664117011"
                      className="inline-flex items-center gap-2 text-gray-800 font-medium hover:text-[var(--handson-green-dark)] transition-colors"
                    >
                      <Phone className="h-4 w-4" style={{ color: 'var(--handson-green)' }} />
                      <span>+213 664 11 70 11</span>
                    </a>
                    <a
                      href="mailto:sarl.handson@gmail.com"
                      className="inline-flex items-center gap-2 text-gray-800 font-medium hover:text-[var(--handson-green-dark)] transition-colors break-all"
                    >
                      <Mail className="h-4 w-4 shrink-0" style={{ color: 'var(--handson-green)' }} />
                      <span>sarl.handson@gmail.com</span>
                    </a>
                  </div>
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
                <T fr="Solutions pharmaceutiques innovantes" en="Innovative pharmaceutical solutions" />
              </p>
              <div className="section-divider"></div>
              <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-400">
                <span>&copy; {new Date().getFullYear()} HandSon</span>
                <span className="hidden sm:inline">&middot;</span>
                <span>
                  <T fr="Tous droits réservés" en="All rights reserved" />
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
