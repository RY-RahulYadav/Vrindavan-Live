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
  const isInView = useInView(ref, { once: false, amount: 0.05, margin: "0px" })
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
    <section id="temples" ref={ref} className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
          style={{ willChange: 'transform, opacity' }}
        >
          <span className="inline-block text-peacock text-base md:text-[30px] max-[700px]:text-[22px] tracking-[0.3em] uppercase font-semibold mb-4">
            Sacred Destinations
          </span>
          <h2 className="max-[700px]:text-[32px] text-4xl md:text-[60px] font-bold mb-6 bg-gradient-to-r from-peacock via-saffron to-gold bg-clip-text text-transparent">
            Famous Temples of Vrindavan
          </h2>
          <p className="text-xl md:text-[22px] text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the magnificent temples where millions of devotees find peace, divine love, and spiritual awakening
          </p>
        </motion.div>

        {/* Temple Carousel */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevTemple}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-r from-saffron to-gold text-white shadow-xl hover:shadow-2xl transition-all duration-300 items-center justify-center group -ml-6 hidden min-[500px]:flex"
            aria-label="Previous temple"
          >
            <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 group-hover:scale-125 transition-transform" />
          </button>
          <button
            onClick={nextTemple}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-r from-saffron to-gold text-white shadow-xl hover:shadow-2xl transition-all duration-300 items-center justify-center group -mr-6 hidden min-[500px]:flex"
            aria-label="Next temple"
          >
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 group-hover:scale-125 transition-transform" />
          </button>

          {/* Temple Cards */}
          <div className="grid md:grid-cols-3 gap-6 py-8">
            {getVisibleTemples().map((temple, idx) => {
              const isCenter = idx === 1
              
              return (
                <motion.div
                  key={temple.id}
                  initial={{ opacity: isCenter ? 1 : 0.6, scale: 1, y: isCenter ? -10 : 0 }}
                  animate={isInView ? { 
                    opacity: isCenter ? 1 : 0.6, 
                    scale: 1,
                    y: isCenter ? -10 : 0
                  } : { opacity: isCenter ? 1 : 0.6, scale: 1, y: isCenter ? -10 : 0 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className={`group ${isCenter ? 'md:col-span-1 z-10' : 'hidden md:block'}`}
                  style={{ willChange: 'transform, opacity' }}
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
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-saffron to-gold text-white text-sm md:text-base font-bold px-3 py-1 rounded-full shadow-lg">
                        Est. {temple.year}
                      </div>
                    </div>

                    {/* Temple Info */}
                    <div className="p-6">
                      <h3 className="text-2xl md:text-[25px] font-bold mb-3 text-foreground group-hover:text-saffron transition-colors">
                        {temple.name}
                      </h3>
                      <p className="text-xl md:text-[22px] text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                        {temple.description}
                      </p>

                      {/* Timings */}
                      <div className="flex items-center gap-2 text-xl md:text-[22px] text-muted-foreground mb-4">
                        <Clock className="w-5 h-5 md:w-6 md:h-6 text-peacock" />
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
          initial={{ opacity: 1, y: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="text-center mt-8 md:mt-12"
          style={{ willChange: 'transform, opacity' }}
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