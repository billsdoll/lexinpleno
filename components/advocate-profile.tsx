"use client"
import { useEffect, useState } from "react"
import { Award, GraduationCap, Briefcase, Star, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function AdvocateProfile() {
  const [isVisible, setIsVisible] = useState(false)
  const [countUp, setCountUp] = useState({ cases: 0, years: 0, rate: 0 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('advocate-section')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      const duration = 2000
      const steps = 60
      const increment = duration / steps

      let currentStep = 0
      const timer = setInterval(() => {
        currentStep++
        const progress = currentStep / steps
        
        setCountUp({
          cases: Math.floor(3000 * progress),
          years: Math.floor(25 * progress),
          rate: Math.floor(98 * progress)
        })

        if (currentStep >= steps) clearInterval(timer)
      }, increment)

      return () => clearInterval(timer)
    }
  }, [isVisible])

  const credentials = [
    {
      icon: GraduationCap,
      title: "Educational Excellence",
      description: "LL.B, LL.M, Ph.D., M.A., PGDCL",
      gradient: "from-amber-500 to-orange-500",
      iconBg: "bg-amber-500/10",
      delay: "0ms"
    },
    {
      icon: Briefcase,
      title: "Extensive Experience",
      description: "25+ years in criminal, civil, and commercial law",
      gradient: "from-blue-500 to-cyan-500",
      iconBg: "bg-blue-500/10",
      delay: "150ms"
    },
    {
      icon: Award,
      title: "Recognized Excellence",
      description: "Multiple awards and accolades from bar associations",
      gradient: "from-purple-500 to-pink-500",
      iconBg: "bg-purple-500/10",
      delay: "300ms"
    },
  ]

  return (
    <section id="advocate-section" className="relative mb-40 mt-40 min-h-screen flex items-center overflow-hidden bg-transparent">
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <div 
            className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 backdrop-blur-sm">
              <Star className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-medium text-amber-400">Lead Advocate</span>
            </div>

            {/* Heading */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3 leading-tight">
                Meet Our <span className="bg-linear-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Distinguished</span>
              </h2>
              <h3 className="text-3xl font-bold bg-linear-to-r from-amber-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                Dr. Umesh Manshore
              </h3>
              <div className="flex items-center gap-2 mt-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                ))}
                <span className="text-primary text-sm ml-2">5.0 Client Rating</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-foreground leading-relaxed">
              Dr. Umesh Manshore brings unparalleled expertise and dedication to every case. With multiple advanced degrees and a Ph.D. in Law, he stands as one of the most qualified advocates in the region.
            </p>

            {/* Credentials */}
            <div className="space-y-4">
              {credentials.map((item, index) => {
                const Icon = item.icon
                
                return (
                  <div 
                    key={index}
                    className={`group relative p-5 rounded-xl bg-background/50 backdrop-blur-sm border border-slate-800 hover:border-slate-700 hover:bg-backgound transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: isVisible ? item.delay : '0ms' }}
                  >
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-linear-to-r ${item.gradient} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-500`} />
                    
                    <div className="relative flex gap-4 items-start">
                      {/* Icon */}
                      <div className={`shrink-0 w-12 h-12 rounded-lg ${item.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-foreground" strokeWidth={2} />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <p className="font-bold text-foreground mb-1 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-amber-400 group-hover:to-orange-500 group-hover:bg-clip-text transition-all duration-300">
                          {item.title}
                        </p>
                        <p className="text-primary text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300">
                          {item.description}
                        </p>
                      </div>

                      {/* Chevron */}
                      {/* <svg className="w-5 h-5 text-slate-600 group-hover:text-amber-500 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg> */}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Stats Counter */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 rounded-xl bg-linear-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20">
                <p className="text-3xl font-bold bg-linear-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  {countUp.cases}+
                </p>
                <p className="text-xs text-primary mt-1">Cases Won</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-linear-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                <p className="text-3xl font-bold bg-linear-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                  {countUp.years}+
                </p>
                <p className="text-xs text-primary mt-1">Years Exp.</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-linear-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                <p className="text-3xl font-bold bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  {countUp.rate}%
                </p>
                <p className="text-xs text-primary mt-1">Success</p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div 
            className={`relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          >
            {/* Decorative Background Elements */}
            <div className="absolute -top-8 -right-8 w-72 h-72 bg-linear-to-br from-amber-500/20 to-orange-500/20 rounded-full filter blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-linear-to-br from-blue-500/20 to-purple-500/20 rounded-full filter blur-3xl" />
            
            {/* Main Image Container */}
            <div className="relative">
              <div className="relative aspect-3/4 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group">
                <Image
                  fill
                  src="/lawyer-image.jpg"
                  alt="Dr. Umesh Manshore - Lead Advocate"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background via-background/30 to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute top-6 right-6 p-4 bg-primary/90 backdrop-blur-xl rounded-xl border border-slate-800 shadow-xl">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    <div>
                      <p className="text-xs text-primary">Success Rate</p>
                      <p className="text-xl font-bold text-foreground">98%</p>
                    </div>
                  </div>
                </div>

                {/* Bottom Info Card */}
                <div className="absolute bottom-6 left-6 right-6 p-5 bg-background/90 backdrop-blur-xl rounded-xl border border-slate-800 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-linear-to-r from-amber-500 to-orange-500 flex items-center justify-center shrink-0">
                      <Award className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">Ph.D. in Law</p>
                      <p className="text-sm text-primary">Supreme Court Certified</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Corner Accents */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-amber-500 rounded-tl-3xl opacity-50" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-purple-500 rounded-br-3xl opacity-50" />
              
              {/* Floating Certification Badges */}
              <div className="absolute -right-4 top-1/3 space-y-3">
                <div className="w-16 h-16 rounded-full bg-linear-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-xl border-4 border-slate-950 animate-float">
                  <span className="text-foreground text-xs font-bold">LL.B</span>
                </div>
                <div className="w-16 h-16 rounded-full bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-xl border-4 border-slate-950 animate-float" style={{ animationDelay: '1s' }}>
                  <span className="text-foreground text-xs font-bold">LL.M</span>
                </div>
                <div className="w-16 h-16 rounded-full bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-xl border-4 border-slate-950 animate-float" style={{ animationDelay: '2s' }}>
                  <span className="text-foreground text-xs font-bold">Ph.D</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  )
}
// import { Award, GraduationCap, Briefcase } from "lucide-react"

// export default function AdvocateProfile() {
//   return (
//     <section className="py-20 bg-secondary/10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Content */}
//           <div className="space-y-8 animate-in fade-in slide-in-from-left-4 duration-1000">
//             <div>
//               <h2 className="text-4xl font-bold text-primary mb-2">Our Advocate</h2>
//               <h3 className="text-2xl text-accent font-semibold">Dr. Umesh Manshore</h3>
//             </div>

//             <p className="text-lg text-muted-foreground leading-relaxed">
//               Dr. Umesh Manshore brings unparalleled expertise and dedication to every case. With multiple advanced
//               degrees and a Ph.D. in Law, he stands as one of the most qualified advocates in the region.
//             </p>

//             <div className="space-y-4">
//               <div className="flex gap-3">
//                 <GraduationCap className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
//                 <div>
//                   <p className="font-semibold text-foreground">Educational Excellence</p>
//                   <p className="text-muted-foreground text-sm">LL.B, LL.M, Ph.D., M.A., PGDCL</p>
//                 </div>
//               </div>
//               <div className="flex gap-3">
//                 <Briefcase className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
//                 <div>
//                   <p className="font-semibold text-foreground">Extensive Experience</p>
//                   <p className="text-muted-foreground text-sm">20+ years in criminal, civil, and commercial law</p>
//                 </div>
//               </div>
//               <div className="flex gap-3">
//                 <Award className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
//                 <div>
//                   <p className="font-semibold text-foreground">Recognized Excellence</p>
//                   <p className="text-muted-foreground text-sm">Multiple awards and accolades from bar associations</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Image */}
//           <div className="relative h-96 rounded-lg overflow-hidden animate-in fade-in slide-in-from-right-4 duration-1000 delay-200">
//             <img
//               src="/distinguished-advocate-professional-portrait.jpg"
//               alt="Dr. Umesh Manshore"
//               className="w-full h-full object-cover rounded-lg shadow-2xl"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-lg" />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
