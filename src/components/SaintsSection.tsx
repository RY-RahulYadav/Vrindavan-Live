"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { X } from "lucide-react"
import { dataStore } from "@/lib/data-store"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function SaintsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [selectedSaint, setSelectedSaint] = useState<any>(null)
  const saints = dataStore.saints

  return (
    <section id="saints" ref={ref} className="relative py-20 md:py-32 bg-gradient-to-b from-muted via-background to-muted overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold text-sm md:text-base tracking-[0.3em] uppercase font-semibold mb-4">
            Divine Souls
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gold via-saffron to-peacock bg-clip-text text-transparent">
            Saints & Devotees
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Learn about the great saints and devotees who dedicated their lives to Krishna and established Vrindavan's spiritual legacy
          </p>
        </motion.div>

        {/* Saints Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {saints.map((saint, index) => (
            <motion.div
              key={saint.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedSaint(saint)}
            >
              <div className="relative bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-gold/50">
                {/* Saint Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={saint.image}
                    alt={saint.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-saffron/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gold/30 rounded-full blur-3xl"></div>
                  </div>
                  
                  {/* Name Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
                      {saint.name}
                    </h3>
                    <p className="text-gold text-sm font-semibold tracking-wider">
                      {saint.title}
                    </p>
                    <p className="text-white/70 text-sm mt-1">
                      {saint.period}
                    </p>
                  </div>
                </div>

                {/* Read More Indicator */}
                <div className="absolute top-4 right-4 bg-gold/90 text-white text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to Learn More
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedSaint && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSaint(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[95%] max-w-4xl max-h-[90vh] overflow-y-auto"
            >
              <div className="bg-card rounded-3xl shadow-2xl border border-gold/30 overflow-hidden">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedSaint(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors flex items-center justify-center"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="grid md:grid-cols-5 gap-0">
                  {/* Left: Image */}
                  <div className="md:col-span-2 relative h-64 md:h-auto">
                    <Image
                      src={selectedSaint.image}
                      alt={selectedSaint.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  {/* Right: Content */}
                  <div className="md:col-span-3 p-8 md:p-10">
                    <div className="space-y-6">
                      {/* Header */}
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
                          {selectedSaint.name}
                        </h3>
                        <p className="text-gold text-base font-semibold mb-1">
                          {selectedSaint.title}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {selectedSaint.period}
                        </p>
                      </div>

                      {/* Biography */}
                      <div>
                        <h4 className="text-xl font-bold mb-3 text-foreground">Biography</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {selectedSaint.bio}
                        </p>
                      </div>

                      {/* Contribution */}
                      <div className="bg-gradient-to-r from-saffron/10 via-gold/10 to-transparent rounded-xl p-5 border-l-4 border-saffron">
                        <h4 className="text-lg font-bold mb-2 text-foreground">Contribution</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {selectedSaint.contribution}
                        </p>
                      </div>

                      {/* Close Button */}
                      <Button
                        onClick={() => setSelectedSaint(null)}
                        className="w-full md:w-auto bg-gradient-to-r from-saffron to-gold hover:from-saffron/90 hover:to-gold/90 text-white font-semibold"
                        size="lg"
                      >
                        Close
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}