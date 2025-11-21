"use client"

import Link from "next/link"
import { ArrowLeft, Scale } from "lucide-react"

export default function NotFoundPage() {
  const isVisible = true

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 sm:py-28 lg:py-32">

      {/* Decorative Glows */}
      <div className="absolute -top-20 -right-20 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/20 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute -bottom-20 -left-20 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500/20 rounded-full blur-3xl opacity-30 animate-pulse" />

      {/* Main container */}
      <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* GRID for responsive layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">

            {/* Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mx-auto lg:mx-0 
              bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800  border border-amber-500/20 backdrop-blur-sm
              transition-all duration-1000 
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <Scale className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-medium text-amber-500 dark:text-amber-400">
                Page Not Found
              </span>
            </div>

            {/* Title */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight transition-all duration-1000 delay-100 
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <span className="text-foreground block">Oops…</span>
              <span className="bg-linear-to-r from-amber-400 via-amber-500 to-orange-500 
                  bg-clip-text text-transparent block mt-1">
                This Page Doesn&apos;t Exist.
              </span>
            </h1>

            {/* Description */}
            <p
              className={`text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed 
                max-w-xl mx-auto lg:mx-0 transition-all duration-1000 delay-200 
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              The page you&apos;re looking for may have been moved, deleted, or never existed. 
              Let&apos;s help you find your way back.
            </p>

            {/* Button */}
            <div
              className={`flex justify-center lg:justify-start transition-all duration-1000 delay-300
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r 
                from-amber-500 to-orange-500 text-white font-semibold rounded-lg 
                hover:shadow-xl hover:shadow-amber-500/50 hover:scale-105 
                transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </Link>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: .25; }
          50% { opacity: .45; }
        }
      `}</style>

    </section>
  )
}
