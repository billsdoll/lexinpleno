"use client";
import { useState, useEffect } from "react";
import {
  Facebook,
  Linkedin,
  Twitter,
  Phone,
  Mail,
  MapPin,
  Scale,
  ArrowUp,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Footer Component
export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("footer-section");
    if (section) observer.observe(section);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // const quickLinks = [
  //   { name: "Home", href: "#home" },
  //   { name: "About", href: "#about" },
  //   { name: "Services", href: "#services" },
  //   { name: "Team", href: "#team" },
  //   { name: "Contact", href: "#contact" },
  // ]

  const services = [
    "Criminal Law",
    "Business Law",
    "Family Law",
    "Real Estate Law",
    "Personal Injury",
    "Judicial Law",
  ];

  return (
    <footer
      id="footer-section"
      className="relative bg-slate-950 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-size-[64px_64px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-12">
          {/* Brand Section */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <Link href="/" className="block">
                <Image
                  alt="logo"
                  width={180}
                  height={180}
                  src="/logo.png"
                  className="w-32 sm:w-40"
                />
              </Link>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              We serve with dedication to protect your rights and achieve
              justice in every case.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <div className="group w-10 h-10 rounded-lg border border-slate-800 hover:border-blue-500 hover:bg-slate-800 transition-all flex items-center justify-center">
                <Facebook className="w-5 h-5 text-slate-400 group-hover:text-blue-500" />
              </div>
              <div className="group w-10 h-10 rounded-lg border border-slate-800 hover:border-blue-500 hover:bg-slate-800 transition-all flex items-center justify-center">
                <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-blue-500" />
              </div>
              <div className="group w-10 h-10 rounded-lg border border-slate-800 hover:border-cyan-500 hover:bg-slate-800 transition-all flex items-center justify-center">
                <Twitter className="w-5 h-5 text-slate-400 group-hover:text-cyan-500" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div
            className={`transition-all duration-1000 delay-150 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h4 className="font-bold text-white mb-4 text-lg">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="group flex items-center gap-2 cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-amber-500 transition-colors" />
                  <span className="text-sm text-slate-400 group-hover:text-amber-500 transition-colors">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h4 className="font-bold text-white mb-4 text-lg">Contact</h4>
            <ul className="space-y-5">
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-amber-500" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Phone</p>
                  <a
                    href="tel:+919794717544"
                    className="text-sm text-slate-300 hover:text-amber-500 transition-colors"
                  >
                    +91 9794 717544
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-blue-500" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Email</p>
                  <a
                    href="mailto:umesh@lexinpleno.in"
                    className="text-sm text-slate-300 hover:text-blue-500 transition-colors break-all"
                  >
                    umesh@lexinpleno.in
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-purple-500" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Location</p>
                  <p className="text-sm text-slate-300">Madurai, Tamil Nadu</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider with Gradient */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-800" />
          </div>
          <div className="relative flex justify-center">
            <div className="px-4 bg-slate-950">
              <div className="w-2 h-2 rounded-full bg-linear-to-r from-amber-500 to-orange-500" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`flex flex-col sm:flex-row justify-between items-center gap-4 text-sm transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-slate-400">
            {"© 2025 "}
            <span className="text-amber-500 font-semibold">
              Lex in Pleno Legal Services
            </span>
            . All rights reserved.
          </p>
          <p className="text-slate-400">
            {"Made by "}
            <a
              href="https://itsoftlab.com/"
              className="text-blue-500 font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              ITSoftlab
            </a>
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-linear-to-r from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/50 hover:shadow-xl hover:shadow-amber-500/70 transition-all duration-300 hover:scale-110 group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 text-white group-hover:-translate-y-1 transition-transform" />
        </button>
      )}
    </footer>
  );
}

// import { Facebook, Linkedin, Twitter } from "lucide-react"

// export default function Footer() {
//   return (
//     <footer className="bg-primary text-primary-foreground">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
//           {/* Brand */}
//           <div className="col-span-1 md:col-span-1">
//             <div className="flex flex-col mb-4">
//               <span className="text-lg font-bold text-accent">Lex in Pleno</span>
//               <span className="text-xs text-primary-foreground/70">Legal Services</span>
//             </div>
//             <p className="text-sm text-primary-foreground/70 leading-relaxed">
//               We serve with dedication to protect your rights and achieve justice in every case.
//             </p>
//             {/* Social Links */}
//             <div className="flex gap-4 mt-6">
//               <a
//                 href="#"
//                 className="w-10 h-10 rounded-full bg-primary-foreground/20 hover:bg-accent hover:text-primary transition-all duration-300 flex items-center justify-center"
//               >
//                 <Facebook className="w-5 h-5" />
//               </a>
//               <a
//                 href="#"
//                 className="w-10 h-10 rounded-full bg-primary-foreground/20 hover:bg-accent hover:text-primary transition-all duration-300 flex items-center justify-center"
//               >
//                 <Linkedin className="w-5 h-5" />
//               </a>
//               <a
//                 href="#"
//                 className="w-10 h-10 rounded-full bg-primary-foreground/20 hover:bg-accent hover:text-primary transition-all duration-300 flex items-center justify-center"
//               >
//                 <Twitter className="w-5 h-5" />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-semibold mb-4">Quick Links</h4>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <a href="#home" className="text-primary-foreground/70 hover:text-accent transition-colors">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="#about" className="text-primary-foreground/70 hover:text-accent transition-colors">
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a href="#services" className="text-primary-foreground/70 hover:text-accent transition-colors">
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a href="#team" className="text-primary-foreground/70 hover:text-accent transition-colors">
//                   Team
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 className="font-semibold mb-4">Services</h4>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
//                   Criminal Law
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
//                   Business Law
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
//                   Family Law
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
//                   Real Estate Law
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="font-semibold mb-4">Contact</h4>
//             <ul className="space-y-2 text-sm text-primary-foreground/70">
//               <li>📞 +91 9794 717544</li>
//               <li>✉️ umesh@lexinplenolegalservices.in</li>
//               <li>📍 Madurai, Tamil Nadu</li>
//             </ul>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="border-t border-primary-foreground/20 pt-8">
//           <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-primary-foreground/70">
//             <p>© 2025 Lex in Pleno Legal Services. All rights reserved.</p>
//             <p className="mt-4 sm:mt-0">Made with ❤️ by Codexia.com</p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }
