import Navigation from "@/components/Navigation"
import HeroCarousel from "@/components/HeroCarousel"
import AboutSection from "@/components/AboutSection"
import TemplesSection from "@/components/TemplesSection"
import SaintsSection from "@/components/SaintsSection"
import HolyPlacesSection from "@/components/HolyPlacesSection"
import ServicesSection from "@/components/ServicesSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import GallerySection from "@/components/GallerySection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="relative">
      <Navigation />
      <main>
        <section id="home">
          <HeroCarousel />
        </section>
        <AboutSection />
        <TemplesSection />
        <SaintsSection />
        <HolyPlacesSection />
        <ServicesSection />
        <TestimonialsSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}