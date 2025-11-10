"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Hotel, Car, MapPin, Calendar, Heart, Phone, Flower2, BookOpen, Users, Camera, Music, Gift, Sparkles, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import ContactSection from "@/components/ContactSection"

const services = [
  {
    icon: Hotel,
    title: "Hotel Booking",
    description: "Find comfortable accommodations near sacred temples. We partner with verified hotels offering peaceful stays for pilgrims. Experience divine comfort in the land where Radha and Krishna performed their eternal pastimes.",
    color: "from-saffron to-gold",
    features: ["Near Temple Locations", "Pilgrim-Friendly", "24/7 Support", "Verified Properties"]
  },
  // {
  //   icon: Car,
  //   title: "Taxi Services",
  //   description: "Reliable transportation throughout Vrindavan and nearby holy sites. Book safe, comfortable rides with experienced local drivers who know every sacred path where Radha and Krishna once walked.",
  //   color: "from-peacock to-blue-600",
  //   features: ["Local Expert Drivers", "Temple Tours", "Airport Transfer", "Safe & Reliable"]
  // },
  // {
  //   icon: MapPin,
  //   title: "Temple Tours",
  //   description: "Guided tours of Vrindavan's most sacred temples dedicated to Radha and Krishna. Expert guides share divine stories, history, and spiritual significance of each sacred site.",
  //   color: "from-gold to-yellow-600",
  //   features: ["Expert Guides", "Radha Krishna Temples", "Spiritual Stories", "Darshan Assistance"]
  // },
  // {
  //   icon: Calendar,
  //   title: "Festival Packages",
  //   description: "Experience Vrindavan's vibrant festivals like Holi, Janmashtami, and Kartik celebrating Radha and Krishna's divine love. Complete packages including accommodation and special darshan.",
  //   color: "from-purple-600 to-pink-600",
  //   features: ["Festival Celebrations", "Special Darshan", "Complete Packages", "Cultural Experience"]
  // },
  // {
  //   icon: Heart,
  //   title: "Donation Help",
  //   description: "Contribute to temple maintenance and charitable causes in the name of Radha and Krishna. We ensure your donations reach the right places with complete transparency and divine blessings.",
  //   color: "from-red-500 to-rose-600",
  //   features: ["Temple Donations", "Charitable Causes", "Transparent Process", "Divine Service"]
  // },
  // {
  //   icon: Phone,
  //   title: "24/7 Support",
  //   description: "Round-the-clock assistance for pilgrims visiting Radha and Krishna's divine abode. Get help with bookings, directions, emergencies, or any questions during your spiritual journey.",
  //   color: "from-green-600 to-emerald-600",
  //   features: ["24/7 Availability", "Emergency Support", "Booking Assistance", "Spiritual Guidance"]
  // },
  // {
  //   icon: Flower2,
  //   title: "Prasadam Services",
  //   description: "Experience the divine taste of prasadam (blessed food) offered to Radha and Krishna. We help you find authentic temple prasadam and organize special prasadam distribution.",
  //   color: "from-orange-500 to-amber-600",
  //   features: ["Temple Prasadam", "Authentic Food", "Special Arrangements", "Divine Blessings"]
  // },
  // {
  //   icon: BookOpen,
  //   title: "Spiritual Books & Literature",
  //   description: "Access sacred texts, books, and literature about Radha and Krishna's divine pastimes. We provide guidance on authentic spiritual literature and scriptures.",
  //   color: "from-indigo-600 to-purple-600",
  //   features: ["Sacred Texts", "Spiritual Books", "Krishna Literature", "Divine Knowledge"]
  // },
  // {
  //   icon: Users,
  //   title: "Group Pilgrimage",
  //   description: "Organize group pilgrimages to Vrindavan with special arrangements for devotees of Radha and Krishna. Experience the divine together with like-minded souls.",
  //   color: "from-teal-600 to-cyan-600",
  //   features: ["Group Packages", "Special Rates", "Coordinated Tours", "Community Experience"]
  // },
  // {
  //   icon: Camera,
  //   title: "Photography Services",
  //   description: "Capture your spiritual journey in Vrindavan with professional photography services. Document your darshan and memories in the divine land of Radha and Krishna.",
  //   color: "from-pink-600 to-rose-600",
  //   features: ["Professional Photographers", "Temple Photography", "Memory Preservation", "Divine Moments"]
  // },
  // {
  //   icon: Music,
  //   title: "Kirtan & Bhajan Services",
  //   description: "Experience soul-stirring kirtans and bhajans dedicated to Radha and Krishna. We organize special kirtan sessions and connect you with renowned kirtan artists.",
  //   color: "from-violet-600 to-purple-600",
  //   features: ["Kirtan Sessions", "Bhajan Programs", "Renowned Artists", "Divine Music"]
  // },
  // {
  //   icon: Gift,
  //   title: "Puja & Ritual Services",
  //   description: "Arrange special pujas, aartis, and rituals dedicated to Radha and Krishna. We help organize personalized spiritual ceremonies in sacred temples.",
  //   color: "from-amber-600 to-orange-600",
  //   features: ["Special Pujas", "Aarti Arrangements", "Ritual Services", "Divine Ceremonies"]
  // }
]

const devotionalQuotes = [
  {
    text: "Service to the divine and devotees is the highest form of devotion. Every act of seva brings us closer to Radha and Krishna.",
    icon: Heart
  },
  {
    text: "In serving the pilgrims of Vrindavan, we serve Radha and Krishna themselves, for they reside in the hearts of all devotees.",
    icon: Flower2
  },
  // {
  //   text: "True service is offering everything to the divine with love, humility, and devotion, just as Radha offered everything to Krishna.",
  //   icon: Sparkles
  // }
]

const serviceImages = [
  { src: "/hero/h11.jpg", alt: "Radha Krishna Divine Service" },
  { src: "/hero/h4.jpeg", alt: "Divine Blessings" },
  { src: "/hero/h2.jpeg", alt: "Spiritual Journey" },
  { src: "/hero/h10.jpg", alt: "Radha Govind" },
  { src: "/hero/h7.jpg", alt: "Divine Abode" },
  { src: "/hero/h8.jpg", alt: "Sacred Vrindavan" },
]

export default function ServicesPage() {
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const quotesRef = useRef(null)
  const heroInView = useInView(heroRef, { once: false, amount: 0.05, margin: "0px" })
  const servicesInView = useInView(servicesRef, { once: false, amount: 0.05, margin: "0px" })
  const quotesInView = useInView(quotesRef, { once: false, amount: 0.05, margin: "0px" })

  return (
    <div className="relative min-h-screen">
      <Navigation />
      <main className="pt-32 md:pt-40">
        {/* Hero Section */}
        
        <div ref={heroRef} className="relative pt-12 pb-8 sm:pt-8 sm:pb-8 md:pt-20 md:pb-10 bg-gradient-to-b from-saffron/10 via-gold/5 to-background overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.15 }}
              className="text-center mb-12 md:mb-16"
            >
              <span className="inline-block text-saffron text-base md:text-[30px] max-[700px]:text-[22px] tracking-[0.3em] uppercase font-semibold mb-4">
                Divine Services
              </span>
              <h1 className="max-[700px]:text-[32px] text-4xl md:text-[60px] font-bold mb-6 bg-gradient-to-r from-saffron via-peacock to-gold bg-clip-text text-transparent">
                Services for Radha & Krishna Devotees
              </h1>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-4 mb-6">
                <span className="text-xl sm:text-2xl text-saffron font-semibold">🕉️</span>
                <span className="text-lg sm:text-xl md:text-2xl text-foreground font-semibold">हरे कृष्ण</span>
                <span className="text-lg sm:text-xl md:text-2xl text-foreground font-semibold">•</span>
                <span className="text-lg sm:text-xl md:text-2xl text-foreground font-semibold">Hare Krishna</span>
              </div>
            </motion.div>

            {/* Radha Krishna Images Grid */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={heroInView ? { opacity: 1 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 max-w-7xl mx-auto"
            >
              {serviceImages.slice(0, 3).map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 1, scale: 1 }}
                  animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                  transition={{ duration: 0.15 }}
                  className="relative h-48 sm:h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-saffron/30 hover:border-saffron/60 transition-all duration-500 group"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </motion.div>
              ))}
            </motion.div>

            {/* Description Text Below Images */}
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.15 }}
              className="text-center max-w-3xl mx-auto"
            >
              <p className="text-xl md:text-[22px] text-muted-foreground leading-relaxed mb-4">
                Comprehensive services to make your spiritual journey to Vrindavan comfortable, memorable, and filled with divine blessings of Radha and Krishna
              </p>
              <p className="text-xl md:text-[22px] text-foreground font-semibold italic">
                "सेवा परमो धर्मः" - Service is the highest form of devotion
              </p>
            </motion.div>
          </div>
        </div>

        {/* Devotional Quotes Section */}
        <section ref={quotesRef} className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background via-saffron/5 to-background">
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={quotesInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.15 }}
              className="text-center mb-12 md:mb-16"
            >
              <span className="inline-block text-gold text-base md:text-[30px] max-[700px]:text-[22px] tracking-[0.3em] uppercase font-semibold mb-4">
                Divine Wisdom
              </span>
              <h2 className="max-[700px]:text-[32px] text-4xl md:text-[60px] font-bold mb-6 bg-gradient-to-r from-gold via-saffron to-peacock bg-clip-text text-transparent">
                Path of Seva
              </h2>
            </motion.div>

            {/* Image Left, Quotes Right Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto items-center">
              {/* Left Side - Single Image */}
              <motion.div
                initial={{ opacity: 1, scale: 1 }}
                animate={quotesInView ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                transition={{ duration: 0.15 }}
                className="order-2 md:order-1"
              >
                <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-saffron/30 hover:border-saffron/60 transition-all duration-500 group">
                  <Image
                    src={serviceImages[3].src}
                    alt={serviceImages[3].alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
              </motion.div>

              {/* Right Side - Three Quote Boxes */}
              <div className="order-1 md:order-2 space-y-4 sm:space-y-6">
                {devotionalQuotes.map((quote, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 1, scale: 1 }}
                    animate={quotesInView ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                    transition={{ duration: 0.15 }}
                    className="bg-gradient-to-br from-saffron/10 via-gold/10 to-peacock/10 rounded-2xl p-4 sm:p-6 md:p-8 border border-saffron/20 hover:border-saffron/40 transition-all duration-300"
                  >
                    <quote.icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-saffron mb-3 sm:mb-4" />
                    <p className="text-lg sm:text-xl md:text-[22px] text-foreground leading-relaxed italic">
                      "{quote.text}"
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section ref={servicesRef} className="relative py-20 md:py-32 bg-gradient-to-b from-background via-muted to-background">
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.15 }}
              className="text-center mb-12 md:mb-16"
            >
              <span className="inline-block text-peacock text-base md:text-[30px] max-[700px]:text-[22px] tracking-[0.3em] uppercase font-semibold mb-4">
                Our Services
              </span>
              <h2 className="max-[700px]:text-[32px] text-4xl md:text-[60px] font-bold mb-6 bg-gradient-to-r from-peacock via-saffron to-gold bg-clip-text text-transparent">
                Divine Services for Devotees
              </h2>
              <p className="text-xl md:text-[22px] text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Every service we offer is dedicated to Radha and Krishna, ensuring your spiritual journey is filled with divine grace and blessings
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 1, y: 0 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.15 }}
                  className="group"
                >
                  <div className="relative bg-card rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-saffron/50 h-full overflow-hidden">
                    {/* Gradient Background on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <h3 className="text-2xl md:text-[25px] font-bold mb-3 text-foreground group-hover:text-saffron transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xl md:text-[22px] text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xl md:text-[22px] text-muted-foreground">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* Know More Button */}
                      {service.title === "Hotel Booking" ? (
                        <Button 
                          asChild
                          variant="ghost"
                          className="group-hover:bg-saffron/10 group-hover:text-saffron transition-colors w-full"
                        >
                          <Link href="/services/hotel-booking">
                            Explore Now →
                          </Link>
                        </Button>
                      ) : (
                        <Button 
                          variant="ghost"
                          className="group-hover:bg-saffron/10 group-hover:text-saffron transition-colors w-full"
                        >
                          Explore Now →
                        </Button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

 

      </main>
      <ContactSection />
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

