import Navigation from "@/components/Navigation"
import HeroCarousel from "@/components/HeroCarousel"
import AboutSection from "@/components/AboutSection"
import DivineLoveSection from "@/components/DivineLoveSection"
import BhaktiJourneySection from "@/components/BhaktiJourneySection"
import GallerySection from "@/components/GallerySection"
import TemplesSection from "@/components/TemplesSection"
import SaintsSection from "@/components/SaintsSection"
import HolyPlacesSection from "@/components/HolyPlacesSection"
import ServicesSection from "@/components/ServicesSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="relative">
      <Navigation />
      <main>
        <section id="home" className="relative">
          <HeroCarousel />
        </section>
        <AboutSection />
        <GallerySection />
        <DivineLoveSection />
        <BhaktiJourneySection />
        
        <TemplesSection />
        <SaintsSection />
        <HolyPlacesSection />
        {/* <ServicesSection /> */}
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}