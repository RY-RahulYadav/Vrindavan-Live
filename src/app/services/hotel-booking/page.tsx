"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import HeroCarousel from "@/components/HeroCarousel"
import { Hotel, MapPin, Phone, MessageCircle, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

// Hotel booking images from public/hotel-booking folder
const hotelImages = [
  "/hotel-booking/WhatsApp Image 2025-11-10 at 10.42.08 AM (1).jpeg",
  "/hotel-booking/WhatsApp Image 2025-11-10 at 10.42.08 AM.jpeg",
  "/hotel-booking/WhatsApp Image 2025-11-10 at 10.42.09 AM (1).jpeg",
  "/hotel-booking/WhatsApp Image 2025-11-10 at 10.42.09 AM (3).jpeg",
  "/hotel-booking/WhatsApp Image 2025-11-10 at 10.42.09 AM.jpeg",
  "/hotel-booking/WhatsApp Image 2025-11-10 at 10.42.10 AM.jpeg",
]

// Hotel data
export const hotels = [
  {
    id: 1,
    name: "Shri vindhyavasini Residency",
    image: "/hotel1/WhatsApp Image 2025-11-10 at 10.45.58 AM.jpeg",
    location: "Gautam pada chauraha Near gaudiya math temple",
    locationLine1: "Gautam pada chauraha",
    locationLine2: "Near gaudiya math temple",
    rating: 4.5,
    receptionNumbers: ["7078673005", "8808936666"],
    galleryFolder: "hotel1",
    features: [
      "Comfortable accommodation",
      "Easy access to temple",
      "24/7 reception service",
      "Clean and hygienic rooms"
    ]
  },
  {
    id: 2,
    name: "Shree Bala Ji Residency",
    image: "/hotel2/WhatsApp Image 2025-11-10 at 10.47.29 AM.jpeg",
    location: "Moti Jheel marg, near JP Saraswat clinic, Bankebihari Colony, Vrindavan, Uttar Pradesh 281121",
    locationLine1: "Moti Jheel marg, near JP Saraswat clinic",
    locationLine2: "Bankebihari Colony, Vrindavan, Uttar Pradesh 281121",
    rating: 4.8,
    receptionNumbers: ["7078673005", "8808936666"],
    galleryFolder: "hotel2",
    features: [
      "Peaceful stay",
      "Modern amenities",
      "Near Banke Bihari Temple",
      "Complimentary services"
    ]
  }
]

export default function HotelBookingPage() {
  const heroRef = useRef(null)
  const galleryRef = useRef(null)
  const textRef = useRef(null)
  const hotelsRef = useRef(null)
  const heroInView = useInView(heroRef, { once: false, amount: 0.05, margin: "0px" })
  const galleryInView = useInView(galleryRef, { once: false, amount: 0.05, margin: "0px" })
  const textInView = useInView(textRef, { once: false, amount: 0.05, margin: "0px" })
  const hotelsInView = useInView(hotelsRef, { once: false, amount: 0.05, margin: "0px" })

  return (
    <div className="relative min-h-screen">
      <Navigation />
      <main>
        {/* Hero Carousel Section */}
        <section ref={heroRef} className="relative">
          <HeroCarousel />
        </section>

        {/* Image Gallery Section */}
        <section ref={galleryRef} className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background via-muted to-background">
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={galleryInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.15 }}
              className="text-center mb-12 md:mb-16"
            >
              <span className="inline-block text-gold text-base md:text-[30px] max-[700px]:text-[22px] tracking-[0.3em] uppercase font-semibold mb-4">
                Visual Journey
              </span>
              <h2 className="max-[700px]:text-[32px] text-4xl md:text-[60px] font-bold mb-6 bg-gradient-to-r from-gold via-saffron to-peacock bg-clip-text text-transparent">
                Gallery
              </h2>
              <p className="text-xl md:text-[22px] text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Glimpse the divine beauty of Vrindavan through our curated collection of sacred moments
              </p>
            </motion.div>

            {/* Image Gallery Grid */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={galleryInView ? { opacity: 1 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
              className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
            >
              {hotelImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 1, y: 0 }}
                  animate={galleryInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.15 }}
                  className="break-inside-avoid group"
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-saffron/50">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={image}
                        alt={`Hotel image ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Text Content Section */}
        <section ref={textRef} className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background via-saffron/5 to-background">
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={textInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.15 }}
              className="max-w-4xl mx-auto space-y-8"
            >
              {/* English Text */}
              <div className="bg-card rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-saffron/20">
                <h3 className="text-2xl md:text-[25px] font-bold mb-4 text-foreground flex items-center gap-2">
                  <span>🌟</span>
                  <span>Blissful Stays Near Shri Banke Bihari Ji Mandir! 🛕</span>
                </h3>
                <p className="text-xl md:text-[22px] text-muted-foreground leading-relaxed">
                  Experience divine darshan with cozy rooms just steps away. Serenity, comfort, and easy temple access for your spiritual retreat. Book now for November – spots filling fast! Weather: Pleasant 12-27°C. Jai Shri Banke Bihari Ji! 🙏
                </p>
              </div>

              {/* Hindi Text */}
              <div className="bg-card rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-saffron/20">
                <h3 className="text-2xl md:text-[25px] font-bold mb-4 text-foreground flex items-center gap-2">
                  <span>🌟</span>
                  <span>श्री बांके बिहारी जी मंदिर के पास आनंदमय ठहराव! 🛕</span>
                </h3>
                <p className="text-xl md:text-[22px] text-muted-foreground leading-relaxed">
                  दिव्य दर्शन का अनुभव लें, मंदिर से कदम दूर आरामदायक कमरों के साथ। शांति, सुविधा और आसान पहुँच। अपनी आध्यात्मिक यात्रा के लिए बुक करें – नवंबर के लिए जल्दी! मौसम: सुखद 12-27°C। जय श्री बांके बिहारी जी! 🙏
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hotels Cards Section */}
        <section ref={hotelsRef} className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background via-muted to-background">
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={hotelsInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.15 }}
              className="text-center mb-12 md:mb-16"
            >
              <span className="inline-block text-peacock text-base md:text-[30px] max-[700px]:text-[22px] tracking-[0.3em] uppercase font-semibold mb-4">
                Our Hotels
              </span>
              <h2 className="max-[700px]:text-[32px] text-4xl md:text-[60px] font-bold mb-6 bg-gradient-to-r from-peacock via-saffron to-gold bg-clip-text text-transparent">
                Choose Your Stay
              </h2>
            </motion.div>

            {/* Hotels Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
              {hotels.map((hotel, index) => (
                <motion.div
                  key={hotel.id}
                  initial={{ opacity: 1, y: 0 }}
                  animate={hotelsInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.15 }}
                  className="group flex h-full"
                >
                  <div className="relative bg-card rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-saffron/50 w-full flex flex-col h-full">
                    {/* Hotel Image */}
                    <div className="relative h-80 overflow-hidden flex-shrink-0">
                      <Image
                        src={hotel.image}
                        alt={hotel.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      
                      {/* Rating Badge */}
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-saffron to-gold text-white text-sm md:text-base font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                        <Star className="w-4 h-4 fill-white" />
                        <span>{hotel.rating}</span>
                      </div>
                    </div>

                    {/* Hotel Info */}
                    <div className="p-6 flex flex-col flex-grow min-h-0">
                      <h3 className="text-2xl md:text-[25px] font-bold mb-4 text-foreground group-hover:text-saffron transition-colors">
                        {hotel.name}
                      </h3>
                      
                      <div className="flex items-start gap-2.5 text-muted-foreground mb-4">
                        <MapPin className="w-5 h-5 text-saffron flex-shrink-0 mt-0.5" />
                        <span className="text-lg md:text-xl leading-relaxed break-words flex-1">{hotel.location}</span>
                      </div>

                      {/* Features with Bullet Points */}
                      <div className="mb-6 flex-grow">
                        <ul className="space-y-2.5">
                          {hotel.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-saffron to-gold mt-2.5 flex-shrink-0"></div>
                              <span className="text-lg md:text-xl text-muted-foreground leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Button */}
                      <div className="mt-auto pt-2">
                        <Button 
                          asChild
                          className="w-full bg-gradient-to-r from-saffron to-gold hover:from-saffron/90 hover:to-gold/90 text-white font-semibold h-12 rounded-md flex items-center justify-center gap-2 transition-all duration-300"
                        >
                          <Link href={`/services/hotel-booking/${hotel.id}`}>
                            Explore More
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Fixed Call and WhatsApp Buttons - Below 700px Only */}
      <div className="fixed bottom-0 left-0 right-0 z-50 hidden max-[700px]:flex border-t border-border/20 bg-background">
        <a
          href="tel:+918700661267"
          className="flex-1 bg-[#F28C28] hover:bg-[#E07A1F] border-r border-border/20 text-white font-semibold py-3 px-3 flex items-center justify-center gap-2 transition-all duration-300 text-base"
        >
          <Phone className="w-5 h-5 text-white" />
          <span>Call Now</span>
        </a>
        <a
          href="https://wa.me/918700661267"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-3 px-3 flex items-center justify-center gap-2 transition-all duration-300 text-base"
        >
          <MessageCircle className="w-5 h-5 text-white" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  )
}

