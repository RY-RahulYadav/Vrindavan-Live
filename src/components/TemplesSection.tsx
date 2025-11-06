"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Clock, Calendar } from "lucide-react"
import { dataStore } from "@/lib/data-store"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function TemplesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [currentIndex, setCurrentIndex] = useState(0)
  const temples = dataStore.temples

  const nextTemple = () => {
    setCurrentIndex((prev) => (prev + 1) % temples.length)
  }

  const prevTemple = () => {
    setCurrentIndex((prev) => (prev - 1 + temples.length) % temples.length)
  }

  const getVisibleTemples = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % temples.length
      visible.push({ ...temples[index], position: i })
    }
    return visible
  }

  return (
    <section id="temples" ref={ref} className="relative py-20 md:py-32 bg-gradient-to-b from-background to-muted overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-peacock text-sm md:text-base tracking-[0.3em] uppercase font-semibold mb-4">
            Sacred Destinations
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-peacock via-saffron to-gold bg-clip-text text-transparent">
            Famous Temples of Vrindavan
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the magnificent temples where millions of devotees find peace, divine love, and spiritual awakening
          </p>
        </motion.div>

        {/* Temple Carousel */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevTemple}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-saffron to-gold text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group -ml-6"
            aria-label="Previous temple"
          >
            <ChevronLeft className="w-6 h-6 group-hover:scale-125 transition-transform" />
          </button>
          <button
            onClick={nextTemple}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-saffron to-gold text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group -mr-6"
            aria-label="Next temple"
          >
            <ChevronRight className="w-6 h-6 group-hover:scale-125 transition-transform" />
          </button>

          {/* Temple Cards */}
          <div className="grid md:grid-cols-3 gap-6 py-8">
            {getVisibleTemples().map((temple, idx) => {
              const isCenter = idx === 1
              
              return (
                <motion.div
                  key={temple.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { 
                    opacity: isCenter ? 1 : 0.6, 
                    scale: isCenter ? 1 : 0.9,
                    y: isCenter ? -10 : 0
                  } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`group ${isCenter ? 'md:col-span-1 z-10' : 'hidden md:block'}`}
                >
                  <div className="bg-card rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-saffron/50 h-full">
                    {/* Temple Image */}
                    <div className="relative h-64 md:h-72 overflow-hidden">
                      <Image
                        src={temple.image}
                        alt={temple.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Year Badge */}
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-saffron to-gold text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        Est. {temple.year}
                      </div>
                    </div>

                    {/* Temple Info */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-saffron transition-colors">
                        {temple.name}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                        {temple.description}
                      </p>

                      {/* Timings */}
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <Clock className="w-4 h-4 text-peacock" />
                        <span>{temple.timings}</span>
                      </div>

                      {/* Learn More Button */}
                      <Button 
                        variant="outline"
                        className="w-full border-saffron/30 text-saffron hover:bg-saffron hover:text-white transition-all duration-300"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {temples.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-8 h-2 bg-gradient-to-r from-saffron to-gold"
                    : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to temple ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All Temples Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button 
            size="lg"
            className="bg-gradient-to-r from-peacock to-saffron hover:from-peacock/90 hover:to-saffron/90 text-white font-semibold px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            View All {temples.length} Temples
          </Button>
        </motion.div>
      </div>
    </section>
  )
}