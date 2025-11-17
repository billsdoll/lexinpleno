"use client";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Header Component
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 shadow-lg shadow-slate-900/50"
          : "bg-slate-950/80 backdrop-blur-lg border-b border-slate-800/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="top-3">
            {/* <div className="flex flex-col"> */}
            <Image
              alt="logo"
              width={200}
              height={200}
              // fill
              src="/logo.png"
            />
            {/* </div> */}
          </Link>
          {/* <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative w-12 h-12 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center">
                <Scale className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Lex in Pleno
              </span>
              <span className="text-xs text-slate-400">Legal Services</span>
            </div>
          </div> */}

          {/* Contact Number */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="tel:+919794717544"
              className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/50 border border-slate-800 hover:border-amber-500/50 transition-all duration-300"
            >
              <Phone className="w-4 h-4 text-amber-500 group-hover:rotate-12 transition-transform" />
              <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                +91 9794 717544
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-300 hover:text-amber-500 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-slate-800 pt-4 mt-2 animate-in fade-in slide-in-from-top-2 duration-300">
            <a
              href="tel:+919794717544"
              className="flex items-center gap-2 px-4 py-3 rounded-lg bg-primary/50 border border-slate-800 hover:border-amber-500/50 transition-all"
            >
              <Phone className="w-4 h-4 text-amber-500" />
              <span className="text-sm text-slate-300">+91 9794 717544</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
// import { useState } from "react"
// import Link from "next/link"
// import { Menu, X, Phone } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import Image from "next/image"

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   return (
//     <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <Link href="/" className="top-3">
//             {/* <div className="flex flex-col"> */}
//               <Image
//               alt="logo"
//               width={200}
//               height={200}
//               // fill
//               src="/logo.png"
//               />
//             {/* </div> */}
//           </Link>

//           {/* Contact Number & CTA */}
//           <div className="hidden md:flex items-center gap-6">
//             <a
//               href="tel:+919794717544"
//               className="flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
//             >
//               <Phone className="w-4 h-4" />
//               <span>+91 9794 717544</span>
//             </a>
//             {/* <Button className="px-6 py-2 bg-primary text-primary-foreground rounded hover:bg-accent hover:text-accent-foreground transition-all duration-300 text-sm font-medium">
//               Schedule Consultation
//             </Button> */}
//           </div>

//           {/* Mobile Menu Button */}
//           <Button
//             className="md:hidden p-2 text-foreground hover:text-accent"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </Button>
//         </div>

//         {/* Mobile Navigation */}
//         {mobileMenuOpen && (
//           <nav className="md:hidden pb-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
//             <a href="tel:+919794717544" className="flex items-center gap-2 text-sm text-primary py-2">
//               <Phone className="w-4 h-4" />
//               <span>+91 9794 717544</span>
//             </a>
//             {/* <Button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-accent text-sm font-medium mt-4">
//               Schedule Consultation
//             </Button> */}
//           </nav>
//         )}
//       </div>
//     </header>
//   )
// }
