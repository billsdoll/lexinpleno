"use client"
import { useEffect, useState } from "react"
import { CheckCircle, Zap, Scale } from "lucide-react"
import Image from "next/image"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('about-section')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const features = [
    {
      icon: Scale,
      title: "Integrity First",
      description: "We uphold the highest ethical standards in every case we handle",
      gradient: "from-amber-500 to-orange-500",
      iconBg: "bg-amber-500/10"
    },
    {
      icon: CheckCircle,
      title: "Proven Case Dismissals",
      description: "Our strategic approach has resulted in thousands of successful case dismissals",
      gradient: "from-blue-500 to-cyan-500",
      iconBg: "bg-blue-500/10"
    },
    {
      icon: Zap,
      title: "Swift Action",
      description: "Quick charges defense and rapid response to protect your rights",
      gradient: "from-purple-500 to-pink-500",
      iconBg: "bg-purple-500/10"
    },
  ]

  return (
    <section id="about-section" className="relative min-h-screen flex items-center overflow-hidden bg-transparent">
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div 
            className={`relative order-2 lg:order-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            {/* Decorative Elements */}
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-linear-to-br from-amber-500/20 to-orange-500/20 rounded-full filter blur-3xl" />
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-linear-to-br from-blue-500/20 to-purple-500/20 rounded-full filter blur-3xl" />
            
            {/* Main Image Container */}
            <div className="relative">
              <div className="relative aspect-4/5 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group">
                <Image
                  fill
                  src="/mjolnir.jpg"
                  alt="Lady Justice Statue"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* <div className="absolute inset-0 bg-linear-to-t from-background via-background/30 to-transparent" /> */}
                
                {/* Floating Stats Card */}
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-background backdrop-blur-xl rounded-xl border border-slate-800 shadow-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-3xl font-bold bg-linear-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">25+</p>
                      <p className="text-sm text-primary font-medium">Years of Excellence</p>
                    </div>
                    <div className="w-px h-12 bg-slate-700" />
                    <div>
                      <p className="text-3xl font-bold bg-linear-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">10K+</p>
                      <p className="text-sm text-primary font-medium">Cases Won</p>
                    </div>
                    <div className="w-px h-12 bg-slate-700" />
                    <div>
                      <p className="text-3xl font-bold bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">3000+</p>
                      <p className="text-sm text-primary font-medium">Trusted Clients</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Corner Accent */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-4 border-r-4 border-amber-500 rounded-tr-3xl opacity-50" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-4 border-l-4 border-blue-500 rounded-bl-3xl opacity-50" />
            </div>
          </div>

          {/* Content Section */}
          <div 
            className={`space-y-8 order-1 lg:order-2 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 backdrop-blur-sm">
              <Scale className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-medium text-amber-400">About Our Firm</span>
            </div>

            {/* Heading */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Why Put Your <br />
                <span className="bg-linear-to-r from-amber-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                  Trust in Us
                </span>
              </h2>
              <p className="text-lg text-white leading-relaxed">
                With years of proven expertise and a commitment to justice, we stand as your steadfast advocates in the legal arena.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((item, index) => {
                const Icon = item.icon
                const isActive = activeIndex === index
                
                return (
                  <div 
                    key={index}
                    className={`group relative bg-background p-6 rounded-xl border transition-all duration-500 cursor-pointer`}
                    onMouseEnter={() => setActiveIndex(index)}
                  >
                    
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-background opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-500`} />
                    
                    <div className="relative flex gap-4 items-start bg-background">
                      {/* Icon */}
                      <div className={`shrink-0 w-12 h-12 rounded-lg ${item.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-foreground" strokeWidth={2} />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className={`font-bold text-lg mb-2 transition-all duration-300 ${
                          isActive 
                            ? 'text-transparent bg-linear-to-r from-amber-400 to-orange-500 bg-clip-text' 
                            : 'text-foregrond group-hover:text-primary'
                        }`}>
                          {item.title}
                        </h3>
                        <p className="text-primary text-sm leading-relaxed group-hover:text-primary transition-colors duration-300">
                          {item.description}
                        </p>
                      </div>

                      {/* Active gradiant line */}
                      {/* <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${item.gradient} rounded-r transition-all duration-500 ${
                        isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                      }`} /> */}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* CTA Button */}
            {/* <div className="pt-4">
              <Button className="group px-8 py-4 bg-linear-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                Schedule Consultation
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </div> */}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
      `}</style>
    </section>
  )
}