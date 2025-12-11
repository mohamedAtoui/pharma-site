import { Phone, Mail, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle, ArrowRight } from "lucide-react"
import ContactForm from "@/components/contact-form"
import HandSonLogo from "@/components/handson-logo"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16">
            <div className="flex justify-center w-full">
              <HandSonLogo size="sm" />
            </div>
          </div>
        </div>
      </header>

      {/* Under Construction Section */}
      <section className="relative py-20 lg:py-32 min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-orange-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Logo */}
            <div className="mb-12 flex justify-center">
              <HandSonLogo size="lg" />
            </div>
            
            {/* Under Construction Message */}
            <div className="inline-flex items-center px-8 py-4 rounded-full text-lg font-medium"
                 style={{ backgroundColor: 'var(--handson-green)', color: 'white' }}>
              <Clock className="h-5 w-5 mr-2" />
              Under Construction
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{ backgroundColor: "var(--handson-green)", color: "white" }}
            >
              Our Products
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Discover Our Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quality pharmaceutical products designed to support your health and well-being.
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <Link href="/products/synapgen" className="block">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/synapgen.png"
                    alt="Synapgen"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Synapgen</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Your ally for clearer memory and better focus! Supports memory, concentration and cognitive functions.
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Supports memory function</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Enhances concentration</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Contains Magnesium L-thréonate</span>
                    </div>
                  </div>

                  <span className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6"
                 style={{ backgroundColor: 'var(--handson-green)', color: 'white' }}>
              Contact
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team is at your disposal to answer your questions and support you in your
              projects.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                       style={{ backgroundColor: 'var(--handson-green)' }}>
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">Gasria, Setif, Algeria</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                       style={{ backgroundColor: 'var(--handson-orange)' }}>
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">contact@handson.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                       style={{ backgroundColor: 'var(--handson-green)' }}>
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">+213 560797282</p>
                    <p className="text-gray-600">Sun-Thu: 9:00 AM-6:00 PM</p>
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
      <footer className="text-gray-800 py-8 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <HandSonLogo size="sm" />
          </div>
          <p>© {new Date().getFullYear()} HandSon - Innovative pharmaceutical solutions</p>
        </div>
      </footer>
    </div>
  )
}
