"use client"

import Header from "@/components/landing-page/header"
import Footer from "@/components/landing-page/footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Services() {
  const practiceAreas = [
    {
      name: "Criminal Law",
      slug: "criminal-law",
      description: "Expert defense and prosecution in criminal matters including felonies, misdemeanors, and appeals",
    },
    {
      name: "Business Law",
      slug: "business-law",
      description: "Comprehensive legal services for business formation, contracts, mergers, and corporate governance",
    },
    {
      name: "Family Law",
      slug: "family-law",
      description: "Compassionate representation in divorce, custody, inheritance, and family disputes",
    },
    {
      name: "Real Estate Law",
      slug: "real-estate-law",
      description: "Property transactions, disputes, zoning issues, and real estate contract negotiations",
    },
    {
      name: "Personal Injury",
      slug: "personal-injury",
      description: "Aggressive advocacy for personal injury victims seeking maximum compensation",
    },
    {
      name: "Judicial Law",
      slug: "judicial-law",
      description: "Constitutional law, judicial procedures, and appellate representation",
    },
  ]

  return (
    <main className="min-h-screen inset-0 bg-cover bg-center bg-fixed" style={{
            backgroundImage: "url('/blind_law_lady.jpg')",
          }}>
      <Header />

      <section className="pt-40 backdrop-blur-md pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Our Services</h1>
            <p className="text-xl text-slate-300">Comprehensive legal expertise across multiple practice areas</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {practiceAreas.map((area) => (
              <Link key={area.slug} href={`/practice-areas/${area.slug}`}>
                <div className="group bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-amber-500/50 hover:bg-slate-900/80 transition-all duration-300 h-full cursor-pointer">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-500 transition-colors">
                    {area.name}
                  </h3>
                  <p className="text-slate-300 mb-6">{area.description}</p>
                  <div className="flex items-center gap-2 text-amber-500 group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl p-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-slate-300 mb-6">Contact us today for a free consultation</p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold py-3 px-8 rounded-lg hover:shadow-lg hover:shadow-amber-500/50 transition-all"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
