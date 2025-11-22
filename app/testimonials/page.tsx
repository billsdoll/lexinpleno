"use client"

import Header from "@/components/landing-page/header"
import Footer from "@/components/landing-page/footer"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      title: "Criminal Case",
      rating: 5,
      text: "Dr. Manshore defended me brilliantly. The charges against me were completely dismissed. His expertise and dedication were incredible. I highly recommend his services.",
    },
    {
      name: "Priya Sharma",
      title: "Family Law Case",
      rating: 5,
      text: "Fighting for custody was the hardest thing I've done. Dr. Manshore made sure my voice was heard and secured full custody for me. Thank you for being my advocate.",
    },
    {
      name: "Amit Patel",
      title: "Business Law Matter",
      rating: 5,
      text: "The business acquisition Dr. Manshore negotiated for us was complex, but he handled everything perfectly. Great results and excellent communication throughout.",
    },
    {
      name: "Neha Singh",
      title: "Personal Injury Case",
      rating: 5,
      text: "After my accident, Dr. Manshore fought tirelessly for my compensation. The settlement he secured exceeded my expectations. Truly professional and compassionate.",
    },
    {
      name: "Vikram Reddy",
      title: "Real Estate Dispute",
      rating: 5,
      text: "My property dispute could have been extremely costly and time-consuming. Dr. Manshore resolved it quickly and favorably. Excellent legal mind and strong negotiator.",
    },
    {
      name: "Divya Nair",
      title: "Appellate Case",
      rating: 5,
      text: "When my lower court case went wrong, I felt hopeless. Dr. Manshore successfully appealed and reversed the decision. He gave me back my life.",
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">What Our Clients Say</h1>
            <p className="text-xl text-slate-300">Real testimonials from satisfied clients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-amber-500/50 hover:bg-slate-900/80 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                <p className="text-slate-300 leading-relaxed mb-6 italic">"{testimonial.text}"</p>

                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-amber-500">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-slate-900/90 border border-amber-500/20 rounded-2xl p-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Join Our List of Satisfied Clients</h3>
            <p className="text-slate-300 mb-6">Let us fight for your justice and protect your rights</p>
            <a
              href="tel:+919794717544"
              className="inline-block bg-linear-to-r from-amber-500 to-orange-500 text-white font-bold py-3 px-8 rounded-lg hover:shadow-lg hover:shadow-amber-500/50 transition-all"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
