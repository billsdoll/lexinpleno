"use client";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from 'lucide-react';
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
      className={`top-0 w-full h-20 z-10 transition-all fixed duration-300`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="top-3">
            {/* <div className="flex flex-col"> */}
            <Image
              alt="logo"
              width={250}
              height={250}
              // fill
              // src="/logo.png"
              src="/logo-2.png"
              className=""
            />
            {/* </div> */}
          </Link>

          {/* Contact Number */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="tel:+919794717544"
              className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-background/80 border border-slate-800 hover:border-amber-500/50 transition-all duration-300"
            >
              <Phone className="w-4 h-4 text-amber-500 group-hover:rotate-12 transition-transform" />
              <span className="text-lg text-foreground transition-colors">
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

// "use client";
// import { useState, useEffect } from "react";
// import { Menu, X, Phone } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

// // Header Component
// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`top-0 w-full h-20 z-10 transition-all bg-white fixed duration-300`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <Link href="/" className="top-3">
//             {/* <div className="flex flex-col"> */}
//             <Image
//               alt="logo"
//               width={200}
//               height={200}
//               // fill
//               src="/logo.png"
//               className=""
//             />
//             {/* </div> */}
//           </Link>
//           {/* <div className="flex items-center gap-3 group cursor-pointer">
//             <div className="relative">
//               <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
//               <div className="relative w-12 h-12 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center">
//                 <Scale className="w-7 h-7 text-white" strokeWidth={2.5} />
//               </div>
//             </div>
//             <div className="flex flex-col">
//               <span className="text-lg font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
//                 Lex in Pleno
//               </span>
//               <span className="text-xs text-slate-400">Legal Services</span>
//             </div>
//           </div> */}

//           {/* Contact Number */}
//           <div className="hidden md:flex items-center gap-6">
//             <a
//               href="tel:+919794717544"
//               className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/50 border border-slate-800 hover:border-amber-500/50 transition-all duration-300"
//             >
//               <Phone className="w-4 h-4 text-amber-500 group-hover:rotate-12 transition-transform" />
//               <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
//                 +91 9794 717544
//               </span>
//             </a>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden p-2 text-slate-300 hover:text-amber-500 transition-colors"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             {mobileMenuOpen ? (
//               <X className="w-6 h-6" />
//             ) : (
//               <Menu className="w-6 h-6" />
//             )}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {mobileMenuOpen && (
//           <nav className="md:hidden pb-4 border-t border-slate-800 pt-4 mt-2 animate-in fade-in slide-in-from-top-2 duration-300">
//             <a
//               href="tel:+919794717544"
//               className="flex items-center gap-2 px-4 py-3 rounded-lg bg-primary/50 border border-slate-800 hover:border-amber-500/50 transition-all"
//             >
//               <Phone className="w-4 h-4 text-amber-500" />
//               <span className="text-sm text-slate-300">+91 9794 717544</span>
//             </a>
//           </nav>
//         )}
//       </div>
//     </header>
//   );
// }
