"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { dataStore } from "@/lib/data-store"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const categories = ["All", "Temples", "Radha Krishna"]

export default function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.05, margin: "0px" })
  const [selectedCategory, setSelectedCategory] = useState("All")
  const images = dataStore.galleryImages

  const filteredImages = selectedCategory === "All" 
    ? images 
    : images.filter(img => img.category === selectedCategory)

  return (
   
      <section id="about" ref={ref} className="relative mt-12 sm:mt-16 md:mt-20 lg:mt-24 py-16 sm:py-20 md:py-24 lg:py-32 about-section bg-gradient-to-b from-background via-ivory to-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="text-center mb-8 md:mb-12"
          style={{ willChange: 'transform, opacity' }}
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

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-3 mb-8 md:mb-12"
          style={{ willChange: 'transform, opacity' }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={
                selectedCategory === category
                  ? "bg-gradient-to-r from-saffron to-gold hover:from-saffron/90 hover:to-gold/90 text-white font-semibold max-[700px]:text-[16px]"
                  : "border-saffron/30 text-foreground hover:bg-saffron/10 hover:text-saffron max-[700px]:text-[16px]"
              }
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={isInView ? { opacity: 1 } : { opacity: 1 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          style={{ willChange: 'opacity' }}
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 1, y: 0 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="break-inside-avoid group"
              style={{ willChange: 'transform, opacity' }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-gold/50">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image.url}
                    alt={image.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="text-center mt-8 md:mt-12"
          style={{ willChange: 'transform, opacity' }}
        >
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-saffron/30 text-saffron hover:bg-saffron hover:text-white font-semibold"
          >
            Load More Images
          </Button>
        </motion.div>
      </div>
    </section>
  )
}