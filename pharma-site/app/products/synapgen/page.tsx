import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Pill, Clock } from "lucide-react"
import HandSonLogo from "@/components/handson-logo"

export const metadata: Metadata = {
  title: "Synapgen - Memory & Cognitive Support Supplement",
  description:
    "Synapgen with Magnesium L-threonate supports memory, concentration and cognitive functions. A dietary supplement by HandSon for clearer memory and better focus.",
  keywords: [
    "Synapgen",
    "Magnesium",
    "Magnesium-L-threonate",
    "L-threonate",
    "Mg",
    "HandSon",
    "memory supplement",
    "cognitive function",
    "concentration",
    "brain health",
    "mental vitality",
  ],
  openGraph: {
    title: "Synapgen - Memory & Cognitive Support Supplement | HandSon",
    description:
      "Discover Synapgen - your ally for clearer memory and better focus! With Magnesium L-threonate for memory, concentration and cognitive support.",
    url: "https://www.sarlhandson.com/products/synapgen",
    type: "website",
    images: [
      {
        url: "/synapgen.png",
        width: 800,
        height: 600,
        alt: "Synapgen - Memory and Mental Vitality Supplement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Synapgen - Memory & Cognitive Support Supplement",
    description:
      "Synapgen with Magnesium L-threonate supports memory, concentration and cognitive functions.",
    images: ["/synapgen.png"],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Synapgen",
  description:
    "Synapgen is a dietary supplement with Magnesium L-threonate that supports memory, concentration and cognitive functions for clearer memory and better focus.",
  brand: {
    "@type": "Brand",
    name: "HandSon",
  },
  category: "Dietary Supplement",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Organization",
      name: "HandSon",
    },
  },
}

export default function SynapgenPage() {
  const features = [
    "Supports memory function",
    "Enhances concentration",
    "Cognitive function support",
    "Contains Magnesium L-thréonate",
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
              <div
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6"
                style={{ backgroundColor: "var(--handson-green)", color: "white" }}
              >
                Dietary Supplement
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Synapgen
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Your ally for clearer memory and better focus! Thanks to magnesium
                L-thréonate, Synapgen supports memory, concentration and cognitive
                functions to accompany you daily in your studies, work or demanding
                activities.
              </p>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle
                      className="h-6 w-6 flex-shrink-0"
                      style={{ color: "var(--handson-green)" }}
                    />
                    <span className="text-gray-700 text-lg">{feature}</span>
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
                <h3 className="font-semibold text-gray-900 mb-2">Availability</h3>
                <p className="text-gray-600">
                  Available in pharmacies, pharmaceutical wholesalers and
                  parapharmaceuticals.
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
