"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Info } from "lucide-react"
import { dataStore } from "@/lib/data-store"
import Image from "next/image"

export default function HolyPlacesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1, margin: "-50px" })
  const places = dataStore.holyPlaces

  if (!places || places.length === 0) {
    return null
  }

  return (
    <section id="places" ref={ref} className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-muted to-background overflow-hidden min-h-[400px]">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
          style={{ willChange: 'transform, opacity' }}
        >
          <span className="inline-block text-peacock text-base md:text-[28px] tracking-[0.3em] uppercase font-semibold mb-4">
            Sacred Locations
          </span>
          <h2 className="text-4xl md:text-[32px] font-bold mb-6 bg-gradient-to-r from-peacock via-gold to-saffron bg-clip-text text-transparent">
            Holy Places Around Vrindavan
          </h2>
          <p className="text-xl md:text-[22px] text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore the sacred sites where divine pastimes unfolded and spiritual energy flows eternally
          </p>
        </motion.div>

        {/* Places Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {places && places.length > 0 && places.map((place, index) => (
            <motion.div
              key={place.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
              className="group"
              style={{ willChange: 'transform, opacity' }}
            >
              <div className="relative bg-card rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-peacock/50">
                {/* Image with Parallax Effect */}
                <div className="relative h-80 overflow-hidden">
                  <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-700">
                    <Image
                      src={place.image}
                      alt={place.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-peacock/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Location Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-3 py-2 rounded-full">
                    <MapPin className="w-3 h-3" />
                    <span>Vrindavan</span>
                  </div>

                  {/* Place Name */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">
                      {place.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <p className="text-xl md:text-[22px] text-muted-foreground leading-relaxed">
                    {place.description}
                  </p>

                  {/* Significance */}
                  <div className="bg-gradient-to-r from-peacock/10 via-gold/10 to-transparent rounded-xl p-4 border-l-4 border-peacock">
                    <div className="flex items-start gap-2">
                      <Info className="w-6 h-6 text-peacock mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="text-2xl md:text-[25px] font-bold text-foreground mb-1">Significance</h4>
                        <p className="text-xl md:text-[22px] text-muted-foreground leading-relaxed">
                          {place.significance}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
          className="text-center mt-12 md:mt-16"
          style={{ willChange: 'transform, opacity' }}
        >
          <div className="inline-block bg-gradient-to-r from-peacock/10 via-gold/10 to-saffron/10 rounded-2xl p-8 border border-peacock/20">
            <h3 className="text-2xl md:text-[25px] font-bold mb-4 text-foreground">
              Plan Your Pilgrimage
            </h3>
            <p className="text-xl md:text-[22px] text-muted-foreground mb-6 max-w-xl mx-auto">
              Experience the divine energy of these sacred locations with our guided temple tours and customized pilgrimage packages
            </p>
            <button className="bg-gradient-to-r from-peacock to-gold hover:from-peacock/90 hover:to-gold/90 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Contact Us for Tours
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}