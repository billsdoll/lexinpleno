import Header from "@/components/landing-page/header";
import HeroSection from "@/components/landing-page/hero-section";
import KeyHighlights from "@/components/landing-page/key-highlights";
import AboutSection from "@/components/landing-page/about-section";
import AdvocateProfile from "@/components/landing-page/advocate-profile";
import TeamSection from "@/components/landing-page/new-team-section";
// import StatsSection from "@/components/landing-page/stats-section"
import ServicesSection from "@/components/landing-page/services-section";
import ContactSection from "@/components/landing-page/contact-section";
import Footer from "@/components/landing-page/footer";
import CaseStudies from "@/components/landing-page/case-studies";
import FAQ from "@/components/landing-page/faq";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      
      {/* Background Blur Effects */}
      {/* <div className="absolute inset-0 pointer-events-none"> */}
        {/* <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-1/4 w-screen h-screen bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-1/4 w-screen h-screen bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div> */}

        {/* Parallax Background Image */}
        
        <div
          className=" backdrop-blur-md absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/blind_law_lady.jpg')",
          }}
        />
      {/* </div> */}

      {/* Actual Page Content */}
      <div className="backdrop-blur-md relative z-10">
        <Header />
        <HeroSection />
        <KeyHighlights />
        <AboutSection />
        <AdvocateProfile />
        <TeamSection />
        <CaseStudies />
        <ServicesSection />
        <FAQ/>
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}