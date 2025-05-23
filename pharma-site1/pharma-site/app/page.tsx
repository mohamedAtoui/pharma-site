import Image from "next/image"
import Link from "next/link"
import { Globe, Search, Phone, Mail, MapPin, ArrowRight, CheckCircle, Microscope } from "lucide-react"
import ProductCard from "@/components/product-card"
import ContactForm from "@/components/contact-form"
import FeatureCard from "@/components/feature-card"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <span className="text-xl font-bold text-gray-900">HandSon</span>
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                À Propos
              </Link>
              <Link href="#products" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Produits
              </Link>
              <Link href="#innovation" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Innovation
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Contact
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Globe className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Faire aujourd&apos;hui ce dont les{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                patients
              </span>{" "}
              auront besoin demain
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              Nous développons des solutions pharmaceutiques innovantes pour améliorer la qualité de vie et créer un
              avenir plus sain pour tous.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#products"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Découvrir nos produits
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="#about"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">10M+</h3>
              <p className="text-gray-600">Patients traités</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">25+</h3>
              <p className="text-gray-600">Années d&apos;expérience</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Microscope className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Produits développés</p>
            </div>
          </div>
        </div>
      </section> */}
      
      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <Image
                  src="/HeroImg.png"
                  alt="Scientifique Pharmaceutique"
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-2xl object-cover"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 rounded-2xl flex items-center justify-center">
                  <CheckCircle className="h-12 w-12 text-white" />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                À propos de nous
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Nous sommes HandSon
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-gray-900">Un avenir plus sain.</strong> C&apos;est ce qui nous pousse à innover
                  chaque jour.
                </p>
                <p>
                  Nous nous engageons à faire progresser continuellement la science et à garantir à chacun l&apos;accès aux
                  soins de santé dont il a besoin aujourd&apos;hui et pour les générations à venir.
                </p>
                <p>
                  Notre mission est de créer un monde où nous avons tous plus de temps avec les personnes que nous
                  aimons.
                </p>
                <p className="font-semibold text-blue-600">C&apos;est ce qui fait de nous HandSon.</p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <FeatureCard
                  icon={<CheckCircle className="h-6 w-6 text-green-600" />}
                  title="Qualité certifiée"
                  description="Standards internationaux"
                />
                <FeatureCard
                  icon={<Microscope className="h-6 w-6 text-blue-600" />}
                  title="Innovation continue"
                  description="Recherche de pointe"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              Nos produits
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Solutions pharmaceutiques innovantes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez notre gamme de produits développés avec les dernières avancées scientifiques pour répondre aux
              besoins de santé d&apos;aujourd&apos;hui.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ProductCard
              title="MediCure Plus"
              description="Notre produit phare conçu pour améliorer les résultats des patients avec des effets secondaires minimes. Formule avancée testée cliniquement."
              imageSrc="/HeroImg.png"
              features={["Efficacité prouvée", "Effets secondaires réduits", "Dosage optimisé"]}
            />
            <ProductCard
              title="VitaHealth Pro"
              description="Formule avancée soutenant le fonctionnement du système immunitaire et le bien-être général. Développé avec des ingrédients naturels."
              imageSrc="/HeroImg.png"
              features={["100% naturel", "Système immunitaire", "Bien-être global"]}
            />
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              Contact
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre équipe d&apos;experts est à votre disposition pour répondre à vos questions et vous accompagner dans vos
              projets.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Informations de contact</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Adresse</h4>
                    <p className="text-gray-600">Setif</p>
                    <p className="text-gray-600">Gasria, Setif, Algerie </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">contact@handson.com</p>
          
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Téléphone</h4>
                    <p className="text-gray-600">+213 560797282</p>
                    <p className="text-gray-600">Dim-Jeu: 9h00-18h00</p>
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

      {/* Footer simple pour test */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© {new Date().getFullYear()} HandSon!</p>
        </div>
      </footer>
    </div>
  )
}
