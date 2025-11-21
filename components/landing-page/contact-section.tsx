"use client"

import { useEffect, useState } from "react"
import { MapPin, Phone, Mail, Globe, Send, Clock, CheckCircle2 } from "lucide-react"
import { Button } from "../ui/button"

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
      link:"https://www.google.com/maps/place/Akanksha+Trade+Centre,+156,+Kanchan+Bagh,+Indore,+Madhya+Pradesh+452001/@22.718154,75.8790164,17z/data=!3m1!4b1!4m6!3m5!1s0x3962fd3c6d099f9f:0xdeca6826474d63b6!8m2!3d22.7181491!4d75.8815913!16s%2Fg%2F11wb2gwc9f?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D",
      content: "106 Akanksha Trade Centre 156 Kanchan Bagh Indore-452001 (M.P)",
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
  ]

  return (
    <section id="contact-section" className="relative min-h-screen flex items-center overflow-hidden bg-transparent">
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 hover:bg-slate-900/80 border border-amber-500/20 backdrop-blur-sm mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <Mail className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-medium text-amber-400">Contact Us</span>
          </div>
          
          <h2 
            className={`text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Get in <span className="bg-linear-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          
          <p 
            className={`text-lg text-white max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Reach out to us for a consultation or to discuss your legal needs. We&apos;re here to help you navigate your legal challenges.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
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
                <div className="relative h-full p-6 bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800  backdrop-blur-sm rounded-2xl hover:border-slate-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center">
                  {/* Icon */}
                  <div className="relative mb-4 mx-auto w-fit">
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300`} />
                    <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <Icon className="w-7 h-7 text-background" strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-background mb-2 text-lg">{item.title}</h3>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-background/80 hover:text-amber-400 transition-colors text-sm whitespace-pre-line block"
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