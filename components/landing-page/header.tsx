"use client";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Testimonials", href: "/testimonials" },
  ];

  return (
    <header className="top-0 w-full h-20 z-10 transition-all fixed bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/">
            <Image
              alt="logo"
              width={200}
              height={200}
              src="/logo-2.png"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-slate-300 hover:text-amber-500 transition-colors text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}

            {/* Contact Number */}
            <a
              href="tel:+919794717544"
              className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-background/80 border border-slate-800 hover:border-amber-500/50 transition-all duration-300"
            >
              <Phone className="w-4 h-4 text-amber-500 group-hover:rotate-12 transition-transform" />
              <span className="text-lg text-foreground transition-colors">
                +91 79996 32639
              </span>
            </a>
          </nav>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden p-2 text-slate-300 hover:text-amber-500 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-slate-800 pt-4 mt-2 animate-in fade-in slide-in-from-top-2 duration-300">

            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="block px-4 py-3 text-slate-300 hover:text-amber-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <a
              href="tel:+919794717544"
              className="flex items-center gap-2 px-4 py-3 rounded-lg bg-primary/50 border border-slate-800 hover:border-amber-500/50 transition-all"
            >
              <Phone className="w-4 h-4 text-amber-500" />
              <span className="text-sm text-slate-300">+91 79996 32639</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
// "use client";
// import { useState, useEffect } from "react";
// import { Menu, X, Phone } from 'lucide-react';
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
//       className={`top-0 w-full h-20 z-10 transition-all fixed duration-300`}
//     >
//       <div className="mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <Link href="/" className="top-3">
//             {/* <div className="flex flex-col"> */}
//             <Image
//               alt="logo"
//               width={250}
//               height={250}
//               // fill
//               // src="/logo.png"
//               src="/logo-2.png"
//               className=""
//             />
//             {/* </div> */}
//           </Link>

//           {/* Contact Number */}
//           <div className="hidden md:flex items-center gap-6">
//             <a
//               href="tel:+919794717544"
//               className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-background/80 border border-slate-800 hover:border-amber-500/50 transition-all duration-300"
//             >
//               <Phone className="w-4 h-4 text-amber-500 group-hover:rotate-12 transition-transform" />
//               <span className="text-lg text-foreground transition-colors">
//                 +91 79996 32639
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
//               <span className="text-sm text-slate-300">+91 79996 32639</span>
//             </a>
//           </nav>
//         )}
//       </div>
//     </header>
//   );
// }
