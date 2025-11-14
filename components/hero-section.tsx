"use client"
// import { useEffect, useState } from "react"
import { Scale, Shield, Award } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  const isVisible = true
  // const [scrollY, setScrollY] = useState(0)



  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-transparent">


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-f-fit">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content Section */}
          <div className="lg:col-span-7 space-y-8">
            {/* Badge */}
            <div 
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 backdrop-blur-sm transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <Scale className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-medium text-amber-500 dark:text-amber-400">Trusted Legal Excellence</span>
            </div>

            {/* Main Heading */}
            <h1 
              className={`text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <span className="text-foreground ">Don&apos;t Feel</span>
              <br />
              <span className="text-foreground ">Helpless.</span>
              <br />
              <span className="bg-linear-to-r from-amber-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                We Fight for Justice.
              </span>
            </h1>

            {/* Description */}
            <p 
              className={`text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              From the first consultation to the final verdict, we&apos;re dedicated to protecting your rights and achieving the justice you deserve with unwavering commitment.
            </p>

            {/* CTA Buttons */}
            {/* <div 
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <Button className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="px-8 py-4 bg-white/5 text-white font-semibold rounded-lg border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
                View Practice Areas
              </Button>
            </div> */}

            {/* Stats Grid */}
            <div 
              className={`grid grid-cols-3 gap-6 pt-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-amber-500" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-foreground ">3,000+</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Cases Resolved</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center ">
                    <Shield className="w-5 h-5 text-blue-500" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-foreground ">98%</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Success Rate</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center ">
                    <Scale className="w-5 h-5 text-purple-500" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-foreground ">25+</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:col-span-5 relative">
            <div 
              className={`relative transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            >
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-amber-500/20 rounded-full filter blur-3xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
              
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 backdrop-blur-sm shadow-2xl">
                <div className="aspect-3/4 bg-linear-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
                  <Image
                    fill 
                    src="/sitting-lawyer-image.jpg"
                    alt="Professional Legal Team"
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-gray-50/50 via-transparent to-transparent dark:from-slate-950" />
                </div>
                
                {/* Floating Card */}
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-background/95 backdrop-blur-md rounded-xl shadow-2xl border border-white/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-linear-to-br from-amber-500 to-orange-500 flex items-center justify-center shrink-0">
                      <span className="text-white text-xl font-bold">✓</span>
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-lg">Dr. Umesh Manshore</p>
                      <p className="text-sm text-primary/30 font-medium">Lead Advocate & Legal Expert</p>
                      <div className="flex items-center gap-1 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-amber-500 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  )
}
// "use client"
// import Image from "next/image"
// import { useEffect, useState } from "react"

// export default function HeroSection() {
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     setIsVisible(true)
//   }, [])

//   return (
//     <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-background to-accent/5 z-0" />

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Content */}
//           <div className={`space-y-8 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
//             <h1 className="text-balance text-5xl lg:text-6xl font-bold text-primary leading-tight">
//               Don't Feel Helpless.
//               <span className="text-accent bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
//                 We Fight for Justice.
//               </span>
//             </h1>

//             <p
//               className="text-lg text-muted-foreground leading-relaxed max-w-md animate-fade-in-up"
//               style={{ animationDelay: "0.2s" }}
//             >
//               From the first consultation to the final verdict, we're dedicated to protect your rights and achieve the
//               justice you deserve.
//             </p>

//             {/* Trust Badge */}
//             <div
//               className="flex items-center gap-3 pt-8 border-t border-border animate-fade-in-up"
//               style={{ animationDelay: "0.6s" }}
//             >
//               <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center animate-float">
//                 <span className="text-accent font-bold">✓</span>
//               </div>
//               <div>
//                 <p className="font-semibold text-foreground">3,000+ Resolved Cases</p>
//                 <p className="text-sm text-muted-foreground">Trusted by thousands</p>
//               </div>
//             </div>
//           </div>

//           {/* Image Placeholder */}
//           <div className="relative h-96 lg:h-full rounded-lg overflow-hidden animate-scale-in">
//             <Image
//               fill
//               src="/professional-lawyer-in-office.jpg"
//               alt="Dr. Umesh Manshore - Lead Advocate"
//               className="w-full h-full object-cover rounded-lg shadow-2xl"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg" />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
