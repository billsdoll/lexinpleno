"use client"

import { useState, useEffect } from "react"
import Header from "@/components/landing-page/header"
import Footer from "@/components/landing-page/footer"
import { Award, Users, Target, Heart } from "lucide-react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const values = [
    {
      icon: Target,
      title: "Justice Focused",
      description: "Every case is treated with the utmost dedication to achieving the best possible outcome",
    },
    {
      icon: Users,
      title: "Client Centered",
      description: "Your concerns and goals are at the heart of everything we do",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards of legal practice and professional conduct",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Honesty and ethical behavior guide every decision we make",
    },
  ]

  return (
    <main className="min-h-screen inset-0 bg-cover bg-center bg-fixed" style={{
            backgroundImage: "url('/blind_law_lady.jpg')",
          }}>
      <Header />

      <section className="pt-40 backdrop-blur-md pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">About Us</h1>

          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
              <h2 className="text-3xl font-bold text-amber-500 mb-4">Dr. Umesh Manshore</h2>
              <p className="text-lg text-white leading-relaxed mb-4">
                With over 25 years of experience in legal practice, Dr. Umesh Manshore has become one of the most
                respected and sought-after legal advocates in the region. His unwavering commitment to justice and
                excellence has earned him the trust of thousands of clients.
              </p>
              <p className="text-lg text-white leading-relaxed">
                Specializing in multiple areas of law, Dr. Manshore brings a unique combination of legal expertise,
                courtroom brilliance, and compassionate client service. His track record speaks for itself with a 98%
                success rate across diverse case types.
              </p>
            </div>

            <h3 className="text-3xl font-bold text-white mt-12 mb-8">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div
                    key={index}
                    className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-amber-500/50 transition-all"
                  >
                    <Icon className="w-8 h-8 text-amber-500 mb-4" />
                    <h4 className="text-xl font-bold text-white mb-2">{value.title}</h4>
                    <p className="text-slate-300">{value.description}</p>
                  </div>
                )
              })}
            </div>

            <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h3>
              <ul className="space-y-3 text-white">
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold">✓</span>
                  <span>25+ years of dedicated legal practice</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold">✓</span>
                  <span>98% success rate in case resolution</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold">✓</span>
                  <span>10,000+ cases successfully resolved</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold">✓</span>
                  <span>24/7 client support and availability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold">✓</span>
                  <span>Expertise across multiple legal domains</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
