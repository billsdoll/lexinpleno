"use client"

import Link from "next/link"
import { ArrowLeft, Scale } from "lucide-react"
import Image from "next/image"

export default function NotFoundPage() {
  const isVisible = true

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">
      
      {/* Decorative Glows */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-30 animate-pulse" />

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-5xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 backdrop-blur-sm transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <Scale className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-medium text-amber-500 dark:text-amber-400">
                Page Not Found
              </span>
            </div>

            {/* Title */}
            <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <span className="text-foreground">Oops...</span>
              <br />
              <span className="bg-linear-to-r from-amber-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                This Page Doesn&apos;t Exist.
              </span>
            </h1>

            {/* Description */}
            <p className={`text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              The page you’re looking for may have been moved, deleted, or never existed. Let’s guide you back to safety.
            </p>

            {/* Button */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-amber-500/50 hover:scale-105 transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </Link>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="lg:col-span-5 relative">
            <div className={`relative transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
              
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

              <div className="relative rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl backdrop-blur-sm">
                
                <div className="aspect-3/4 bg-linear-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
                  <Image
                    fill
                    src="/sitting-lawyer-image.jpg"
                    alt="Not Found Illustration"
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>

                {/* Floating Card */}
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-background/95 backdrop-blur-md rounded-xl shadow-2xl border border-white/20">
                  <p className="text-lg font-semibold text-foreground">We couldn’t find the page.</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    But our legal team is here to help.
                  </p>
                </div>
              </div>

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
