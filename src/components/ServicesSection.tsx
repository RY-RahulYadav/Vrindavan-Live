"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Hotel, Car, MapPin, Calendar, Heart, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Hotel,
    title: "Hotel Booking",
    description: "Find comfortable accommodations near sacred temples. We partner with verified hotels offering peaceful stays for pilgrims.",
    color: "from-saffron to-gold"
  },
  {
    icon: Car,
    title: "Taxi Services",
    description: "Reliable transportation throughout Vrindavan and nearby holy sites. Book safe, comfortable rides with experienced local drivers.",
    color: "from-peacock to-blue-600"
  },
  {
    icon: MapPin,
    title: "Temple Tours",
    description: "Guided tours of Vrindavan's most sacred temples. Expert guides share history, stories, and spiritual significance of each site.",
    color: "from-gold to-yellow-600"
  },
  {
    icon: Calendar,
    title: "Festival Packages",
    description: "Experience Vrindavan's vibrant festivals like Holi, Janmashtami, and Kartik. Complete packages including accommodation and darshan.",
    color: "from-purple-600 to-pink-600"
  },
  {
    icon: Heart,
    title: "Donation Help",
    description: "Contribute to temple maintenance and charitable causes. We ensure your donations reach the right places with complete transparency.",
    color: "from-red-500 to-rose-600"
  },
  {
    icon: Phone,
    title: "24/7 Support",
    description: "Round-the-clock assistance for pilgrims. Get help with bookings, directions, emergencies, or any questions during your visit.",
    color: "from-green-600 to-emerald-600"
  }
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="services" ref={ref} className="relative py-20 md:py-32 bg-gradient-to-b from-background via-muted to-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-saffron text-sm md:text-base tracking-[0.3em] uppercase font-semibold mb-4">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-saffron via-peacock to-gold bg-clip-text text-transparent">
            Plan Your Vrindavan Visit
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive services to make your spiritual journey comfortable, memorable, and hassle-free
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
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

                  {/* Know More Button */}
                  <Button 
                    variant="ghost"
                    className="group-hover:bg-saffron/10 group-hover:text-saffron transition-colors"
                  >
                    Know More →
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-gradient-to-r from-saffron via-gold to-peacock p-1 rounded-3xl">
            <div className="bg-card rounded-3xl px-8 py-6">
              <h3 className="text-2xl font-bold mb-2 text-foreground">
                Need Personalized Assistance?
              </h3>
              <p className="text-muted-foreground mb-4">
                Contact us for customized packages and special requests
              </p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-saffron to-gold hover:from-saffron/90 hover:to-gold/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}