"use client"

import Header from "@/components/landing-page/header"
import Footer from "@/components/landing-page/footer"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Your Rights in Criminal Cases",
      excerpt: "Learn about your constitutional rights if you're facing criminal charges and how to protect them.",
      date: "Dec 15, 2024",
      category: "Criminal Law",
      slug: "criminal-rights",
    },
    {
      id: 2,
      title: "Essential Steps in Business Contract Negotiation",
      excerpt: "A comprehensive guide to negotiating business contracts that protect your interests.",
      date: "Dec 10, 2024",
      category: "Business Law",
      slug: "contract-negotiation",
    },
    {
      id: 3,
      title: "Child Support: What You Need to Know",
      excerpt: "Important information about child support calculations and legal obligations.",
      date: "Dec 5, 2024",
      category: "Family Law",
      slug: "child-support-guide",
    },
    {
      id: 4,
      title: "Real Estate: Common Title Issues and Solutions",
      excerpt: "Learn about the most common property title issues and how to resolve them.",
      date: "Nov 28, 2024",
      category: "Real Estate Law",
      slug: "title-issues",
    },
    {
      id: 5,
      title: "Personal Injury Claims: Maximizing Your Recovery",
      excerpt: "Strategies for documenting injuries and building a strong compensation claim.",
      date: "Nov 20, 2024",
      category: "Personal Injury",
      slug: "injury-claims",
    },
    {
      id: 6,
      title: "Appellate Law: When to Appeal Your Case",
      excerpt: "Understanding the appellate process and when an appeal makes sense.",
      date: "Nov 15, 2024",
      category: "Judicial Law",
      slug: "appellate-process",
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Legal Insights & Blog</h1>
            <p className="text-xl text-slate-300">Stay informed about legal topics and recent developments</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <div className="group bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-amber-500/50 hover:bg-slate-900/80 transition-all duration-300 h-full cursor-pointer">
                  <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <span className="text-xs text-amber-500 font-semibold bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800  px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-3 mb-3 group-hover:text-amber-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-300 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-amber-500 group-hover:gap-3 transition-all">
                    <span className="text-sm">Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
