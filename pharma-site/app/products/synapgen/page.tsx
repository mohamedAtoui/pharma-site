import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Pill, Clock } from "lucide-react"
import HandSonLogo from "@/components/handson-logo"

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
        url: "/synapgen.png",
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
    images: ["/synapgen.png"],
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
  address: {
    "@type": "PostalAddress",
    addressCountry: "DZ",
  },
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
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16">
            <Link href="/">
              <HandSonLogo size="sm" />
            </Link>
          </div>
        </div>
      </header>

      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
      </div>

      {/* Product Section */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Product Image */}
            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/synapgen.png"
                  alt="Synapgen - Memory and Mental Vitality Supplement"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium"
                  style={{ backgroundColor: "var(--handson-green)", color: "white" }}
                >
                  Dietary Supplement
                </span>
                <span
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700"
                >
                  Complément Alimentaire
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Synapgen <span className="text-2xl lg:text-3xl font-medium text-gray-500">by HandSon</span>
              </h1>

              <p className="text-xl text-gray-600 mb-4 leading-relaxed">
                Your ally for clearer memory and better focus! Thanks to Magnesium
                L-Threonate, Synapgen supports memory, concentration and cognitive
                functions to accompany you daily in your studies, work or demanding
                activities.
              </p>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed italic">
                Votre allié pour une mémoire plus claire et une meilleure concentration !
                Grâce au Magnésium L-Thréonate, Synapgen soutient la mémoire, la concentration
                et les fonctions cognitives pour vous accompagner au quotidien dans vos études,
                votre travail ou vos activités exigeantes.
              </p>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle
                      className="h-6 w-6 flex-shrink-0 mt-1"
                      style={{ color: "var(--handson-green)" }}
                    />
                    <div>
                      <span className="text-gray-700 text-lg block">{feature.en}</span>
                      <span className="text-gray-500 text-sm italic">{feature.fr}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Product Details */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2 bg-gray-100 rounded-lg px-4 py-3">
                  <Pill className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-700 font-medium">60 capsules</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-100 rounded-lg px-4 py-3">
                  <Clock className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-700 font-medium">3 capsules/day</span>
                </div>
              </div>

              {/* Availability */}
              <div
                className="rounded-xl p-6"
                style={{ backgroundColor: "rgba(0, 166, 81, 0.1)" }}
              >
                <h3 className="font-semibold text-gray-900 mb-2">Availability / Disponibilité</h3>
                <p className="text-gray-600 mb-2">
                  Available in pharmacies, pharmaceutical wholesalers and
                  parapharmaceuticals.
                </p>
                <p className="text-gray-500 text-sm italic">
                  Disponible en pharmacies, grossistes pharmaceutiques et
                  parapharmacies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-gray-800 py-8 bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <HandSonLogo size="sm" />
          </div>
          <p>
            © {new Date().getFullYear()} HandSon - Innovative pharmaceutical
            solutions
          </p>
        </div>
      </footer>
      </div>
    </>
  )
}
