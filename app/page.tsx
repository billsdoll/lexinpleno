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
    <main className="relative min-h-screen bg-background overflow-hidden">
      
      {/* Background Blur Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-1/4 w-screen h-screen bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-1/4 w-screen h-screen bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        {/* Parallax Background Image */}
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/blind_law_lady.jpg')",
          }}
        />
      </div>

      {/* Actual Page Content */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <KeyHighlights />
        <AboutSection />
        <AdvocateProfile />
        <TeamSection />
        {/* <StatsSection /> */}
        <ServicesSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}