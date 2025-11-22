"use client"

import Header from "@/components/landing-page/header"
import Footer from "@/components/landing-page/footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "Successful Criminal Defense Verdict",
      category: "Criminal Law",
      excerpt: "Client acquitted of serious felony charges through comprehensive defense strategy",
      result: "Not Guilty Verdict",
      slug: "case-1-criminal-defense",
    },
    {
      id: 2,
      title: "Multi-Million Dollar Business Acquisition",
      category: "Business Law",
      excerpt: "Successfully negotiated merger resulting in favorable terms for client",
      result: "$5M+ Deal Completed",
      slug: "case-2-business-acquisition",
    },
    {
      id: 3,
      title: "Custody Rights Restored",
      category: "Family Law",
      excerpt: "Fought for and secured full custody rights for parent in contested case",
      result: "Full Custody Awarded",
      slug: "case-3-custody-rights",
    },
    {
      id: 4,
      title: "Property Title Dispute Resolution",
      category: "Real Estate Law",
      excerpt: "Resolved complex property boundary dispute without expensive litigation",
      result: "Favorable Settlement",
      slug: "case-4-property-dispute",
    },
    {
      id: 5,
      title: "Personal Injury Settlement Victory",
      category: "Personal Injury",
      excerpt: "Secured substantial settlement for injury victim against corporate defendant",
      result: "$2M+ Settlement",
      slug: "case-5-injury-settlement",
    },
    {
      id: 6,
      title: "Appellate Reversal Success",
      category: "Judicial Law",
      excerpt: "Successfully overturned lower court decision on constitutional grounds",
      result: "Case Reversed",
      slug: "case-6-appellate-reversal",
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Case Studies</h1>
            <p className="text-xl text-slate-300">Our track record of successful case outcomes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              
              <Link key={study.id} href={`/case-studies/${study.slug}`}>
                <div className="group bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-amber-500/50 hover:bg-slate-900/80 transition-all duration-300 h-full cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-sm text-amber-500 font-semibold">{study.category}</span>
                    <span className="text-sm bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full">
                      {study.result}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-500 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-slate-300 mb-6">{study.excerpt}</p>
                  <div className="flex items-center gap-2 text-amber-500 group-hover:gap-3 transition-all">
                    <span>Read Case Study</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* <div className="mt-16 bg-slate-900/90 border border-amber-500/20 rounded-2xl p-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Impressed with Our Results?</h3>
            <p className="text-slate-300 mb-6">Let us help you achieve the justice you deserve</p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold py-3 px-8 rounded-lg hover:shadow-lg hover:shadow-amber-500/50 transition-all"
            >
              Schedule Consultation
            </Link>
          </div> */}
        </div>
      </section>

      <Footer />
    </main>
  )
}
