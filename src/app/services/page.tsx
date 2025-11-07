"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Hotel, Car, MapPin, Calendar, Heart, Phone, Flower2, BookOpen, Users, Camera, Music, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    icon: Hotel,
    title: "Hotel Booking",
    description: "Find comfortable accommodations near sacred temples. We partner with verified hotels offering peaceful stays for pilgrims. Experience divine comfort in the land where Radha and Krishna performed their eternal pastimes.",
    color: "from-saffron to-gold",
    features: ["Near Temple Locations", "Pilgrim-Friendly", "24/7 Support", "Verified Properties"]
  },
  {
    icon: Car,
    title: "Taxi Services",
    description: "Reliable transportation throughout Vrindavan and nearby holy sites. Book safe, comfortable rides with experienced local drivers who know every sacred path where Radha and Krishna once walked.",
    color: "from-peacock to-blue-600",
    features: ["Local Expert Drivers", "Temple Tours", "Airport Transfer", "Safe & Reliable"]
  },
  {
    icon: MapPin,
    title: "Temple Tours",
    description: "Guided tours of Vrindavan's most sacred temples dedicated to Radha and Krishna. Expert guides share divine stories, history, and spiritual significance of each sacred site.",
    color: "from-gold to-yellow-600",
    features: ["Expert Guides", "Radha Krishna Temples", "Spiritual Stories", "Darshan Assistance"]
  },
  {
    icon: Calendar,
    title: "Festival Packages",
    description: "Experience Vrindavan's vibrant festivals like Holi, Janmashtami, and Kartik celebrating Radha and Krishna's divine love. Complete packages including accommodation and special darshan.",
    color: "from-purple-600 to-pink-600",
    features: ["Festival Celebrations", "Special Darshan", "Complete Packages", "Cultural Experience"]
  },
  {
    icon: Heart,
    title: "Donation Help",
    description: "Contribute to temple maintenance and charitable causes in the name of Radha and Krishna. We ensure your donations reach the right places with complete transparency and divine blessings.",
    color: "from-red-500 to-rose-600",
    features: ["Temple Donations", "Charitable Causes", "Transparent Process", "Divine Service"]
  },
  {
    icon: Phone,
    title: "24/7 Support",
    description: "Round-the-clock assistance for pilgrims visiting Radha and Krishna's divine abode. Get help with bookings, directions, emergencies, or any questions during your spiritual journey.",
    color: "from-green-600 to-emerald-600",
    features: ["24/7 Availability", "Emergency Support", "Booking Assistance", "Spiritual Guidance"]
  },
  {
    icon: Flower2,
    title: "Prasadam Services",
    description: "Experience the divine taste of prasadam (blessed food) offered to Radha and Krishna. We help you find authentic temple prasadam and organize special prasadam distribution.",
    color: "from-orange-500 to-amber-600",
    features: ["Temple Prasadam", "Authentic Food", "Special Arrangements", "Divine Blessings"]
  },
  {
    icon: BookOpen,
    title: "Spiritual Books & Literature",
    description: "Access sacred texts, books, and literature about Radha and Krishna's divine pastimes. We provide guidance on authentic spiritual literature and scriptures.",
    color: "from-indigo-600 to-purple-600",
    features: ["Sacred Texts", "Spiritual Books", "Krishna Literature", "Divine Knowledge"]
  },
  {
    icon: Users,
    title: "Group Pilgrimage",
    description: "Organize group pilgrimages to Vrindavan with special arrangements for devotees of Radha and Krishna. Experience the divine together with like-minded souls.",
    color: "from-teal-600 to-cyan-600",
    features: ["Group Packages", "Special Rates", "Coordinated Tours", "Community Experience"]
  },
  {
    icon: Camera,
    title: "Photography Services",
    description: "Capture your spiritual journey in Vrindavan with professional photography services. Document your darshan and memories in the divine land of Radha and Krishna.",
    color: "from-pink-600 to-rose-600",
    features: ["Professional Photographers", "Temple Photography", "Memory Preservation", "Divine Moments"]
  },
  {
    icon: Music,
    title: "Kirtan & Bhajan Services",
    description: "Experience soul-stirring kirtans and bhajans dedicated to Radha and Krishna. We organize special kirtan sessions and connect you with renowned kirtan artists.",
    color: "from-violet-600 to-purple-600",
    features: ["Kirtan Sessions", "Bhajan Programs", "Renowned Artists", "Divine Music"]
  },
  {
    icon: Gift,
    title: "Puja & Ritual Services",
    description: "Arrange special pujas, aartis, and rituals dedicated to Radha and Krishna. We help organize personalized spiritual ceremonies in sacred temples.",
    color: "from-amber-600 to-orange-600",
    features: ["Special Pujas", "Aarti Arrangements", "Ritual Services", "Divine Ceremonies"]
  }
]

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-saffron/10 via-gold/5 to-background overflow-hidden xl:mt-10">
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block text-saffron text-sm md:text-base tracking-[0.3em] uppercase font-semibold mb-4">
                Divine Services
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-saffron via-peacock to-gold bg-clip-text text-transparent">
                Services for Radha & Krishna Devotees
              </h1>
            </motion.div>

            {/* Radha Krishna Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl mx-auto mb-8"
            >
              <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl dark:shadow-saffron/20">
                <Image
                  src="/radha_govind.jpg"
                  alt="Radha and Krishna"
                  fill
                  className="object-cover dark:brightness-110 dark:contrast-105 dark:saturate-110"
                  priority
                />
                {/* Dark mode overlay for better visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent dark:from-black/40 dark:via-black/20 dark:to-transparent pointer-events-none"></div>
              </div>
            </motion.div>

            {/* Description Text Below Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center max-w-3xl mx-auto"
            >
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Comprehensive services to make your spiritual journey to Vrindavan comfortable, memorable, and filled with divine blessings of Radha and Krishna
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-background via-muted to-background">
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-saffron/50 h-full overflow-hidden">
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
                      <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-saffron transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}></div>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* Know More Button */}
                      <Button 
                        variant="ghost"
                        className="group-hover:bg-saffron/10 group-hover:text-saffron transition-colors w-full"
                      >
                        Explore Now →
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {/* <section className="relative py-20 md:py-32 bg-gradient-to-r from-saffron via-gold to-peacock">
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Begin Your Divine Journey?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Let us help you plan your perfect pilgrimage to the sacred land of Radha and Krishna. Experience the divine love and eternal bliss of Vrindavan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#contact">
                  <Button 
                    size="lg"
                    className="bg-white text-saffron hover:bg-white/90 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-lg"
                  >
                    Explore Now
                  </Button>
                </Link>
                <Link href="/">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg"
                  >
                    Explore More
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section> */}
      </main>
      <Footer />
    </div>
  )
}

