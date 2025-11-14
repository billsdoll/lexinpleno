"use client"
import { Shield, CheckCircle, Award } from "lucide-react"
import { useEffect, useState } from "react"

export default function KeyHighlights() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('highlights-section')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const highlights = [
    {
      icon: Shield,
      title: "Expert Advocates",
      description: "Highly qualified legal professionals with decades of combined experience",
      gradient: "from-amber-500 to-orange-500",
      bgGlow: "bg-amber-500/20",
      hoverGlow: "hover:shadow-amber-500/50"
    },
    {
      icon: CheckCircle,
      title: "Case Dismissed",
      description: "Proven track record of successful case dismissals and favorable verdicts",
      gradient: "from-blue-500 to-cyan-500",
      bgGlow: "bg-blue-500/20",
      hoverGlow: "hover:shadow-blue-500/50"
    },
    {
      icon: Award,
      title: "Court Performance",
      description: "Exceptional courtroom presence and persuasive legal arguments",
      gradient: "from-purple-500 to-pink-500",
      bgGlow: "bg-purple-500/20",
      hoverGlow: "hover:shadow-purple-500/50"
    },
  ]

  return (
    <section 
      id="highlights-section"
      className="relative min-h-screen mt-20 mb-20 flex items-center overflow-hidden bg-transparent"
    >
    
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 backdrop-blur-sm mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <Award className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-medium text-amber-400">Why Choose Us</span>
          </div>
          
          <h2 
            className={`text-4xl md:text-5xl font-bold text-foreground mb-4 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Our <span className="bg-linear-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Commitment</span> to Excellence
          </h2>
          
          <p 
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Delivering exceptional legal services with integrity, expertise, and unwavering dedication
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <div
                key={index}
                className={`group relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 ${highlight.bgGlow} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Card */}
                <div className={`relative p-8 bg-background/50 backdrop-blur-sm rounded-2xl border border-slate-800 ${highlight.hoverGlow} hover:border-slate-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500`}>
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    {/* Glow Icon background */}
                    {/* <div className={`absolute inset-0 bg-linear-to-r ${highlight.gradient} rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300`} /> */}

                    <div className={`relative w-16 h-16 rounded-xl bg-transparent border flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 text-foreground`} strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-amber-400 group-hover:to-orange-500 group-hover:bg-clip-text transition-all duration-300">
                    {highlight.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed group-hover:text-primary transition-colors duration-300">
                    {highlight.description}
                  </p>

                  {/* Animated Line */}
                  {/* <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:from-amber-500 group-hover:via-orange-500 group-hover:to-transparent transition-all duration-500" /> */}
                  
                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-linear-to-r ${highlight.gradient} animate-ping`} />
                    <div className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-linear-to-r ${highlight.gradient}`} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Decorative Element */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex flex-col md:flex-row items-center gap-6 md:gap-8 px-6 md:px-8 py-6 bg-background/50 backdrop-blur-sm rounded-2xl border border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-linear-to-r from-amber-500 to-orange-500 flex items-center justify-center">
                <span className="text-foreground text-xl font-bold">✓</span>
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-foreground">100%</p>
                <p className="text-sm text-foreground">Client Satisfaction</p>
              </div>
            </div>
            
            {/* <div className="w-px h-12 bg-slate-800" /> */}
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-linear-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <Shield className="w-6 h-6 text-foreground" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-foreground">24/7</p>
                <p className="text-sm text-foreground">Legal Support</p>
              </div>
            </div>
            
            {/* <div className="w-px h-12 bg-slate-800" /> */}
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-linear-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <Award className="w-6 h-6 text-foreground" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-foreground">Award</p>
                <p className="text-sm text-foreground">Winning Team</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  )
}