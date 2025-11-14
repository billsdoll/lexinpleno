"use client"
import { useEffect, useState } from "react"
import { Scale, Users, Award } from "lucide-react"

export default function TeamSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('team-section')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const associates = [
    { name: "Shakeel S", specialization: "Criminal Law", gradient: "from-amber-500 to-orange-500" },
    { name: "Hitesh Kiran T", specialization: "Civil Litigation", gradient: "from-blue-500 to-cyan-500" },
    { name: "Vishal Sharma", specialization: "Corporate Law", gradient: "from-purple-500 to-pink-500" },
    { name: "Taseef Majeed", specialization: "Family Law", gradient: "from-green-500 to-emerald-500" },
    { name: "Aadil Bensaleh", specialization: "Tax Law", gradient: "from-red-500 to-rose-500" },
    { name: "JRF Thomas", specialization: "Property Law", gradient: "from-indigo-500 to-purple-500" },
    { name: "Hitesh Bharati", specialization: "Labour Law", gradient: "from-yellow-500 to-amber-500" },
    { name: "Aijaz Omar", specialization: "Consumer Law", gradient: "from-teal-500 to-cyan-500" },
    { name: "Pankesh Bhai", specialization: "Banking Law", gradient: "from-orange-500 to-red-500" },
    { name: "Robert Bhagat", specialization: "IP Law", gradient: "from-violet-500 to-purple-500" },
    { name: "Poonam Mehta", specialization: "Immigration Law", gradient: "from-pink-500 to-rose-500" },
    { name: "Ranjeet Bhagat", specialization: "Constitutional Law", gradient: "from-cyan-500 to-blue-500" },
  ]

  return (
    <section id="team-section" className="relative min-h-screen mb-40 flex items-center overflow-hidden bg-transparent">
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 backdrop-blur-sm mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <Users className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-medium text-amber-400">Our Legal Team</span>
          </div>
          
          <h2 
            className={`text-4xl md:text-5xl font-bold text-foreground mb-4 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Meet Our <span className="bg-linear-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Expert</span> Associates
          </h2>
          
          <p 
            className={`text-lg text-primary max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            A team of highly qualified advocates dedicated to achieving justice for our clients across diverse practice areas
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-24">
          {associates.map((associate, index) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const isHovered = hoveredIndex === index
            const delay = 300 + index * 50
            
            return (
              <div
                key={index}
                className={`group relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${delay}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Glow Effect */}
                {/* <div className={`absolute inset-0 bg-gradient-to-r ${associate.gradient} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity duration-500`} /> */}
                
                {/* Card */}
                <div className="relative p-6 w-52 bg-background/50 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-slate-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center h-full flex flex-col">
                  {/* Avatar Container */}
                  <div className="relative mb-5 mx-auto">
                    {/* Rotating Ring */}
                    {/* <div className={`absolute inset-0 rounded-full transition-transform duration-700 ${isHovered ? 'rotate-180' : 'rotate-0'}`}>
                      <div className={`w-24 h-24 rounded-full border-4 border-dashed bg-gradient-to-r ${associate.gradient} opacity-20`} />
                    </div> */}
                    
                    {/* Inner Glow */}
                    {/* <div className={`absolute inset-0 bg-gradient-to-r ${associate.gradient} rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`} /> */}
                    
                    {/* Avatar Circle */}
                    <div className={`relative w-24 h-24 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                      <Scale className="w-10 h-10 text-foreground group-hover:rotate-12 transition-transform duration-500" strokeWidth={2.5} />
                    </div>
                    
                    {/* Floating Badge */}
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-primary border-2 border-slate-700 flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                      <Award className="w-4 h-4 text-amber-500" />
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-amber-400 group-hover:to-orange-500 group-hover:bg-clip-text transition-all duration-300">
                    {associate.name}
                  </h3>
                  
                  {/* Specialization */}
                  <p className={`text-sm font-medium bg-gradient-to-r ${associate.gradient} bg-clip-text text-transparent mb-3`}>
                    {associate.specialization}
                  </p>
                  
                  {/* Credentials */}
                  <div className="mt-auto">
                    <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700">
                      <span className="text-xs text-primary font-medium">Advocate, LL.B</span>
                    </div>
                  </div>

                  {/* Bottom Accent Line */}
                  {/* <div className={`absolute bottom-1 left-0 right-0 h-1 bg-gradient-to-r ${associate.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl`} /> */}
                  
                  {/* Corner Dot */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${associate.gradient} animate-ping`} />
                    <div className={`absolute top-0 w-2 h-2 rounded-full bg-gradient-to-r ${associate.gradient}`} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Stats Bar */}
        <div 
          className={`mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-8 py-8 bg-background/50 backdrop-blur-sm rounded-2xl border border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center">
                <Users className="w-7 h-7 text-foreground" />
              </div>
              <div className="text-left">
                <p className="text-3xl font-bold text-foreground">12+</p>
                <p className="text-sm text-primary">Expert Associates</p>
              </div>
            </div>
            
            <div className="hidden md:block w-px h-16 bg-slate-800" />
            
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <Scale className="w-7 h-7 text-foreground" />
              </div>
              <div className="text-left">
                <p className="text-3xl font-bold text-foreground">15+</p>
                <p className="text-sm text-primary">Practice Areas</p>
              </div>
            </div>
            
            <div className="hidden md:block w-px h-16 bg-slate-800" />
            
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <Award className="w-7 h-7 text-foreground" />
              </div>
              <div className="text-left">
                <p className="text-3xl font-bold text-foreground">100%</p>
                <p className="text-sm text-primary">Dedicated Service</p>
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
// export default function TeamSection() {
//   const associates = [
//     "Shakeel S",
//     "Hitesh Kiran T",
//     "Vishal Sharma",
//     "Taseef Majeed",
//     "Aadil Bensaleh",
//     "JRF Thomas",
//     "Hitesh Bharati",
//     "Aijaz Omar",
//     "Pankesh Bhai",
//     "Robert Bhagat",
//     "Poonam Mehta",
//     "Ranjeet Bhagat",
//   ]

//   return (
//     <section id="team" className="py-20 bg-gradient-to-br from-background to-secondary/5">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16 animate-fade-in-down">
//           <h2 className="text-4xl font-bold text-primary mb-4">Our Associates</h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             A team of highly qualified advocates dedicated to achieving justice for our clients
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {associates.map((name, index) => (
//             <div
//               key={index}
//               className="group p-6 bg-card rounded-lg border border-border hover:border-accent/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center animate-fade-in-up"
//               style={{ animationDelay: `${index * 50}ms` }}
//             >
//               <div className="w-20 h-20 bg-accent/20 rounded-full mx-auto mb-4 group-hover:bg-accent/40 transition-all duration-300 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3">
//                 <span className="text-2xl animate-float">⚖️</span>
//               </div>
//               <h3 className="font-semibold text-foreground mb-1">{name}</h3>
//               <p className="text-sm text-muted-foreground">Advocate, LL.B</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }