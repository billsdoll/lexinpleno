"use client"

import { useEffect, useState } from "react"
import { MapPin, Phone, Mail, Globe, Send, Clock, CheckCircle2 } from "lucide-react"
import { Button } from "./ui/button"

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [focusedInput, setFocusedInput] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('contact-section')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "106 Nashville Trade Centre\n934 Kamaraj Road\nOpp. Bharat Petrol Bunk\nMadurai – 625 002 (TN)",
      gradient: "from-amber-500 to-orange-500",
      bgGlow: "bg-amber-500/20"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 9794 717544",
      link: "tel:+919794717544",
      gradient: "from-blue-500 to-cyan-500",
      bgGlow: "bg-blue-500/20"
    },
    {
      icon: Mail,
      title: "Email",
      content: "umesh@lexinplenolegalservices.in",
      link: "mailto:umesh@lexinplenolegalservices.in",
      gradient: "from-purple-500 to-pink-500",
      bgGlow: "bg-purple-500/20"
    },
    {
      icon: Globe,
      title: "Website",
      content: "www.lexinpleno.com",
      link: "https://lexinpleno.com/",
      gradient: "from-green-500 to-emerald-500",
      bgGlow: "bg-green-500/20"
    },
  ]

  return (
    <section id="contact-section" className="relative min-h-screen flex items-center overflow-hidden bg-transparent">
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 backdrop-blur-sm mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <Mail className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-medium text-amber-400">Contact Us</span>
          </div>
          
          <h2 
            className={`text-4xl md:text-5xl font-bold text-foreground mb-4 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Get in <span className="bg-linear-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          
          <p 
            className={`text-lg text-primary max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Reach out to us for a consultation or to discuss your legal needs. We&apos;re here to help you navigate your legal challenges.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactInfo.map((item, index) => {
            const Icon = item.icon
            const delay = 300 + index * 100
            
            return (
              <div
                key={index}
                className={`group relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 ${item.bgGlow} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Card */}
                <div className="relative h-full p-6 bg-background/50 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-slate-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center">
                  {/* Icon */}
                  <div className="relative mb-4 mx-auto w-fit">
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300`} />
                    <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <Icon className="w-7 h-7 text-foreground" strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-foreground mb-2 text-lg">{item.title}</h3>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-primary hover:text-amber-400 transition-colors text-sm whitespace-pre-line block"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-primary text-sm whitespace-pre-line leading-relaxed">{item.content}</p>
                  )}

                  {/* Bottom Accent */}
                  {/* <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl`} /> */}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
      `}</style>
    </section>
  )
}
// import { MapPin, Phone, Mail, Globe } from "lucide-react"
// import { Button } from "@/components/ui/button"

// export default function ContactSection() {
//   return (
//     <section id="contact" className="py-20 bg-secondary/10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-1000">
//           <h2 className="text-4xl font-bold text-primary mb-4">Get in Touch</h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Reach out to us for a consultation or to discuss your legal needs
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {[
//             {
//               icon: MapPin,
//               title: "Address",
//               content: "106 Nashville Trade Centre\n934 Kamaraj Road\nOpp. Bharat Petrol Bunk\nMadurai – 625 002 (TN)",
//             },
//             {
//               icon: Phone,
//               title: "Phone",
//               content: "+91 9794 717544",
//               link: "tel:+919794717544",
//             },
//             {
//               icon: Mail,
//               title: "Email",
//               content: "umesh@lexinplenolegalservices.in",
//               link: "mailto:umesh@lexinplenolegalservices.in",
//             },
//             {
//               icon: Globe,
//               title: "Website",
//               content: "www.lexinplenolegalservices.in",
//               link: "https://www.lexinplenolegalservices.in",
//             },
//           ].map((item, index) => {
//             const Icon = item.icon
//             return (
//               <div
//                 key={index}
//                 className="p-6 bg-card rounded-lg border border-border hover:border-accent/50 transition-all duration-300 text-center animate-in fade-in slide-in-from-bottom-4"
//                 style={{ animationDelay: `${index * 100}ms` }}
//               >
//                 <div className="w-12 h-12 rounded-lg bg-accent/20 text-accent flex items-center justify-center mx-auto mb-4">
//                   <Icon className="w-6 h-6" />
//                 </div>
//                 <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
//                 {item.link ? (
//                   <a
//                     href={item.link}
//                     className="text-muted-foreground hover:text-accent transition-colors text-sm whitespace-pre-line"
//                   >
//                     {item.content}
//                   </a>
//                 ) : (
//                   <p className="text-muted-foreground text-sm whitespace-pre-line">{item.content}</p>
//                 )}
//               </div>
//             )
//           })}
//         </div>

//         {/* Contact Form */}
//         <div className="mt-16 max-w-2xl mx-auto bg-card p-8 rounded-lg border border-border">
//           <h3 className="text-2xl font-bold text-foreground mb-6">Schedule a Consultation</h3>
//           <form className="space-y-4">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 placeholder="First Name"
//                 className="px-4 py-3 border border-border rounded bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
//               />
//               <input
//                 type="text"
//                 placeholder="Last Name"
//                 className="px-4 py-3 border border-border rounded bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
//               />
//             </div>
//             <input
//               type="email"
//               placeholder="Email Address"
//               className="w-full px-4 py-3 border border-border rounded bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
//             />
//             <input
//               type="tel"
//               placeholder="Phone Number"
//               className="w-full px-4 py-3 border border-border rounded bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
//             />
//             <textarea
//               placeholder="Tell us about your case..."
//               rows={4}
//               className="w-full px-4 py-3 border border-border rounded bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
//             />
//             <Button
//               type="submit"
//               className="w-full px-6 py-3 bg-accent text-accent-foreground rounded font-semibold hover:shadow-lg transition-all duration-300"
//             >
//               Request Consultation
//             </Button>
//           </form>
//         </div>
//       </div>
//     </section>
//   )
// }
