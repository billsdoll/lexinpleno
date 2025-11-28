"use client"

import Header from "@/components/landing-page/header"
import Footer from "@/components/landing-page/footer"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "How much does a legal consultation cost?",
      answer:
        "We offer a free initial consultation to discuss your case, answer questions, and determine how we can help you.",
    },
    {
      question: "What is your success rate?",
      answer: "We maintain a 98% success rate across all practice areas, with over 10,000 cases successfully resolved.",
    },
    {
      question: "How long does a typical case take?",
      answer:
        "Case duration varies significantly depending on complexity. Criminal cases may take months to years, while some negotiations resolve in weeks. We'll provide a realistic timeline during your consultation.",
    },
    {
      question: "Do you handle appeals?",
      answer:
        "Yes, we have extensive appellate experience. We handle appeals across all practice areas and have successfully overturned numerous decisions.",
    },
    {
      question: "What if I cannot afford an attorney?",
      answer:
        "We offer flexible payment arrangements and payment plans. Additionally, for criminal cases, if you cannot afford an attorney, one will be appointed to you by the court.",
    },
    {
      question: "Are you available for emergencies?",
      answer:
        "Yes, we provide 24/7 emergency availability for urgent legal matters. Call our emergency number anytime.",
    },
    {
      question: "What should I bring to my consultation?",
      answer:
        "Bring any relevant documents related to your case, such as contracts, court papers, correspondence, or police reports. Also prepare a detailed account of the situation.",
    },
    {
      question: "How do you communicate with clients?",
      answer:
        "We maintain regular communication through phone calls, emails, and in-person meetings. You'll always know the status of your case.",
    },
    {
      question: "What areas of law do you practice?",
      answer:
        "We specialize in Criminal Law, Business Law, Family Law, Real Estate Law, Personal Injury, and Judicial Law.",
    },
    {
      question: "Can you handle cases outside your jurisdiction?",
      answer:
        "We primarily practice in our jurisdiction but can associate with qualified attorneys in other jurisdictions when necessary.",
    },
  ]

  return (
      <section className="backdrop-blur-md relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-slate-300">Find answers to common questions about our services</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-amber-500/50 transition-all"
              >
                <Button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 hover:bg-slate-800/50 transition-colors text-left"
                >
                  <span className="text-lg font-semibold text-white">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-500 transition-transform ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </Button>

                {activeIndex === index && (
                  <div className="p-6 text-slate-300 border-t border-slate-700">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>

          
        </div>
      </section>
  )
}
