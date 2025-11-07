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
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [selectedCategory, setSelectedCategory] = useState("All")
  const images = dataStore.galleryImages

  const filteredImages = selectedCategory === "All" 
    ? images 
    : images.filter(img => img.category === selectedCategory)

  return (
    <section id="gallery" ref={ref} className="relative py-20 md:py-32 bg-gradient-to-b from-ivory via-background to-muted overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-gold text-sm md:text-base tracking-[0.3em] uppercase font-semibold mb-4">
            Visual Journey
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gold via-saffron to-peacock bg-clip-text text-transparent">
            Gallery
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Glimpse the divine beauty of Vrindavan through our curated collection of sacred moments
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={
                selectedCategory === category
                  ? "bg-gradient-to-r from-saffron to-gold hover:from-saffron/90 hover:to-gold/90 text-white font-semibold"
                  : "border-saffron/30 text-foreground hover:bg-saffron/10 hover:text-saffron"
              }
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="break-inside-avoid group"
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
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
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