"use client";
import { useEffect, useState } from "react";
import {
  Scale,
  Users,
  Briefcase,
  Home,
  Heart,
  Gavel,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("services-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Briefcase,
      title: "Business Law",
      description:
        "Expert guidance on corporate matters, contracts, and business litigation",
      gradient: "from-amber-500 to-orange-500",
      bgGlow: "bg-amber-500/20",
      features: [
        "Contract Drafting",
        "Corporate Compliance",
        "Business Disputes",
      ],
    },
    {
      icon: Users,
      title: "Family Law",
      description:
        "Sensitive representation in divorce, custody, and family matters",
      gradient: "from-blue-500 to-cyan-500",
      bgGlow: "bg-blue-500/20",
      features: ["Divorce Cases", "Child Custody", "Alimony Matters"],
    },
    {
      icon: Scale,
      title: "Criminal Law",
      description:
        "Aggressive defense strategies for criminal charges and prosecution",
      gradient: "from-red-500 to-rose-500",
      bgGlow: "bg-red-500/20",
      features: ["Criminal Defense", "Bail Applications", "Appeals"],
    },
    {
      icon: Home,
      title: "Real Estate Law",
      description:
        "Comprehensive legal services for property transactions and disputes",
      gradient: "from-green-500 to-emerald-500",
      bgGlow: "bg-green-500/20",
      features: ["Property Transactions", "Title Disputes", "Lease Agreements"],
    },
    {
      icon: Heart,
      title: "Personal Injury",
      description: "Maximum compensation recovery for injuries and damages",
      gradient: "from-purple-500 to-pink-500",
      bgGlow: "bg-purple-500/20",
      features: ["Accident Claims", "Medical Negligence", "Compensation"],
    },
    {
      icon: Gavel,
      title: "Judicial Law",
      description:
        "Appellate representation and complex constitutional matters",
      gradient: "from-indigo-500 to-purple-500",
      bgGlow: "bg-indigo-500/20",
      features: ["High Court Appeals", "Supreme Court", "Constitutional Law"],
    },
  ];

  return (
    <section
      id="services-section"
      className="relative min-h-screen flex mt-10  items-center overflow-hidden bg-transparent"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 backdrop-blur-sm mb-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <Scale className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-medium text-amber-400">
              Practice Areas
            </span>
          </div>

          <h2
            className={`text-4xl md:text-5xl font-bold text-foreground mb-4 transition-all duration-1000 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Comprehensive{" "}
            <span className="bg-linear-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Legal Services
            </span>
          </h2>

          <p
            className={`text-lg text-primary max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Expert representation across multiple practice areas to meet all
            your legal needs with dedication and excellence
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeIndex === index;
            const delay = 300 + index * 100;

            return (
              <div
                key={index}
                className={`group relative transition-all mb-10 duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${delay}ms` }}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {/* Outer Glow */}
                {/* <div className={`absolute inset-0 ${service.bgGlow} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} /> */}

                {/* Card */}
                <div className="relative h-full p-8 bg-background/50 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-slate-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col">
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    {/* Icon Background Glow */}
                    {/* <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300`} /> */}

                    {/* Icon */}
                    <div
                      className={`relative w-16 h-16 rounded-xl bg-transparent flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border shadow-xl`}
                    >
                      <Icon
                        className="w-8 h-8 text-foreground"
                        strokeWidth={2.5}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3
                      className="text-2xl font-bold mb-3 
             group-hover:text-transparent 
             group-hover:bg-gradient-to-r 
             group-hover:from-amber-400 
             group-hover:to-orange-500 
             group-hover:bg-clip-text 
             transition-all duration-300"
                    >
                      {service.title}
                    </h3>

                    <p className="text-primary leading-relaxed mb-6 group-hover:text-primary transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div
                      className={`space-y-2 mb-6 overflow-hidden transition-all duration-500 ${
                        isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-amber-500 shrink-0" />
                          <span className="text-sm text-primary">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  {/* <Button className={`group/btn flex items-center justify-between w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 hover:bg-slate-800 hover:border-slate-600 transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                    <span className="text-sm font-medium text-primary group-hover/btn:text-foreground transition-colors">Learn More</span>
                    <ArrowRight className="w-4 h-4 text-amber-500 group-hover/btn:translate-x-1 transition-transform" />
                  </Button> */}

                  {/* Decorative Elements */}
                  {/* <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl`} /> */}

                  {/* Corner Accent */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div
                      className={`w-2 h-2 rounded-full bg-linear-to-r ${service.gradient} animate-ping`}
                    />
                    <div
                      className={`absolute top-0 w-2 h-2 rounded-full bg-linear-to-r ${service.gradient}`}
                    />
                  </div>

                  {/* Number Badge */}
                  <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-primary border-2 border-slate-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span
                      className={`text-sm font-bold bg-linear-to-r ${service.gradient} bg-clip-text text-transparent`}
                    >
                      0{index + 1}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        {/* <div 
          className={`mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="relative p-12 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl border border-slate-800 overflow-hidden">
            // Background Pattern 
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05))] bg-[length:60px_60px]" />
            </div>

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold text-foreground mb-3">
                  Need Legal <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Consultation?</span>
                </h3>
                <p className="text-primary text-lg">
                  Our expert team is ready to help you with any legal matter. Schedule your consultation .
                </p>
              </div>
              
              <Link href={"#contact"} >
              <Button className="group/cta px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-foreground font-semibold rounded-lg hover:shadow-xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2 whitespace-nowrap">
                Contact Us Now
                <ArrowRight className="w-5 h-5 group-hover/cta:translate-x-1 transition-transform" />
              </Button>
              </Link>
            </div>
          </div>
        </div> */}
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
  );
}
// import { Scale, Users, Briefcase, Home, Heart, Gavel } from "lucide-react"

// export default function ServicesSection() {
//   const services = [
//     {
//       icon: Briefcase,
//       title: "Business Law",
//       description: "Expert guidance on corporate matters, contracts, and business litigation",
//     },
//     {
//       icon: Users,
//       title: "Family Law",
//       description: "Sensitive representation in divorce, custody, and family matters",
//     },
//     {
//       icon: Scale,
//       title: "Criminal Law",
//       description: "Aggressive defense strategies for criminal charges and prosecution",
//     },
//     {
//       icon: Home,
//       title: "Real Estate Law",
//       description: "Comprehensive legal services for property transactions and disputes",
//     },
//     {
//       icon: Heart,
//       title: "Personal Injury",
//       description: "Maximum compensation recovery for injuries and damages",
//     },
//     {
//       icon: Gavel,
//       title: "Judicial Law",
//       description: "Appellate representation and complex constitutional matters",
//     },
//   ]

//   return (
//     <section id="services" className="py-20 bg-background">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16 animate-fade-in-down">
//           <h2 className="text-4xl font-bold text-primary mb-4">What We Cover</h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Comprehensive legal services across multiple practice areas to meet all your needs
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => {
//             const Icon = service.icon
//             return (
//               <div
//                 key={index}
//                 className="group p-8 bg-card rounded-lg border border-border hover:border-secondary/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 animate-fade-in-up"
//                 style={{ animationDelay: `${index * 100}ms` }}
//               >
//                 <div className="w-12 h-12 rounded-lg bg-secondary/20 text-secondary flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
//                   <Icon className="w-6 h-6" />
//                 </div>
//                 <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
//                 <p className="text-muted-foreground leading-relaxed">{service.description}</p>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }
