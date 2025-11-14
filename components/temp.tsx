import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import KeyHighlights from "@/components/key-highlights";
import AboutSection from "@/components/about-section";
import AdvocateProfile from "@/components/advocate-profile";
import TeamSection from "@/components/team-section";
// import StatsSection from "@/components/stats-section"
import ServicesSection from "@/components/services-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <div className="absolute inset-0 bg-transparent">
        <div className="absolute inset-0 opacity-10  bg-transparent">
          <div className="absolute top-20 left-1/4 w-screen h-screen bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse " />
          <div
            className="absolute bottom-20 right-1/4 w-screen h-screen bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>
      </div>

      {/* Grid Pattern Overlay */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-size-[64px_64px]" /> */}

      {/* Parallax Image Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('/blind_law_lady.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          // transform: `translateY(${scrollY * 1}px)`
        }}
      />
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <KeyHighlights />
        <AboutSection />
        {/* <AdvocateProfile /> */}
        <TeamSection />
        {/* <StatsSection />*/}
        <ServicesSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
