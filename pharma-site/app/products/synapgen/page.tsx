import type { Metadata } from "next"
import SynapgenContent from "./synapgen-content"

export const metadata: Metadata = {
  title: "Synapgen par HandSon - Complément Alimentaire Magnésium L-Thréonate | Memory Supplement",
  description:
    "Synapgen HandSon - Complément alimentaire innovant à base de Magnésium L-Thréonate. Approche scientifique ciblée de la mémoire, de la concentration et des fonctions cognitives. Dietary supplement for memory and cognitive support.",
  keywords: [
    "Synapgen HandSon",
    "Synapgen",
    "HandSon Synapgen",
    "complément alimentaire Synapgen",
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
    "synaptic plasticity",
    "Magnésium L-Thréonate",
    "Mémoire",
    "Concentration",
    "Fonctions cognitives",
    "plasticité synaptique",
    "Gériatrie",
    "Examen",
    "complément alimentaire mémoire",
    "soutien cognitif",
    "مغنزيوم",
    "مغنيزيوم ل ثريونات",
    "ذاكرة",
    "تركيز",
    "اختبار",
    "سينابجين",
  ],
  openGraph: {
    title:
      "Synapgen par HandSon - Une approche scientifique ciblée de la mémoire",
    description:
      "Synapgen HandSon - Complément alimentaire innovant conçu pour agir directement au niveau cérébral et soutenir durablement les fonctions cognitives.",
    url: "https://www.sarlhandson.com/products/synapgen",
    type: "website",
    locale: "fr_DZ",
    alternateLocale: ["en_US"],
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
    title: "Synapgen par HandSon - Mémoire & Fonctions cognitives",
    description:
      "Synapgen - Complément alimentaire à base de Magnésium L-Thréonate pour la mémoire, la concentration et les fonctions cognitives.",
    images: ["/synapgen-landing.png"],
  },
  alternates: {
    canonical: "https://www.sarlhandson.com/products/synapgen",
    languages: {
      "fr": "https://www.sarlhandson.com/products/synapgen",
      "en": "https://www.sarlhandson.com/products/synapgen",
    },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Synapgen",
  alternateName: ["Synapgen HandSon", "Complément Alimentaire Synapgen"],
  description:
    "Synapgen est un complément alimentaire innovant à base de Magnésium L-Thréonate conçu pour agir directement au niveau cérébral et soutenir durablement les fonctions cognitives. Synapgen is an innovative dietary supplement with Magnesium L-Threonate designed to support memory, concentration and cognitive functions.",
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
  description:
    "HandSon - Solutions pharmaceutiques innovantes et compléments alimentaires",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+213664117011",
    email: "sarl.handson@gmail.com",
    contactType: "sales",
  },
}

export default function SynapgenPage() {
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
      <SynapgenContent />
    </>
  )
}
