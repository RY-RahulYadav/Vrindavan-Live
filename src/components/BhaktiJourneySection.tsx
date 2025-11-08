"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Heart, Flower2, Music2, Sparkles, Moon } from "lucide-react"
import Image from "next/image"

const journeySteps = [
  {
    icon: Heart,
    title: "Surrender",
    description: "Offer your heart completely to the divine, just as Radha surrendered everything to Krishna",
    image: "/hero/h1.jpeg",
    color: "from-saffron/20 to-saffron/5"
  },
  {
    icon: Music2,
    title: "Chant",
    description: "Sing the holy names and feel the divine presence in every moment of devotion",
    image: "/gallery/t1.jpg",
    color: "from-peacock/20 to-peacock/5"
  },
  {
    icon: Flower2,
    title: "Serve",
    description: "Serve with love and humility, following the path of selfless devotion",
    image: "/hero/h2.jpeg",
    color: "from-gold/20 to-gold/5"
  },
  {
    icon: Sparkles,
    title: "Realize",
    description: "Experience the eternal bliss of divine love and spiritual awakening",
    image: "/gallery/t2.jpeg",
    color: "from-saffron/20 via-peacock/20 to-gold/20"
  }
]

const devotionalImages = [
  { src: "/hero/h3.jpeg", alt: "Divine Devotion" },
  { src: "/gallery/t3.jpg", alt: "Spiritual Journey" },
  { src: "/hero/h4.jpeg", alt: "Eternal Love" },
  { src: "/gallery/t4.jpg", alt: "Pure Bhakti" },
]

export default function BhaktiJourneySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.05, margin: "0px" })

  return (
    <section id="bhakti-journey" ref={ref} className="relative pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-6 sm:pb-8 md:pb-10 bg-gradient-to-b from-muted via-background to-ivory overflow-visible max-[700px]:overflow-visible">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-24 h-24 bg-saffron/10 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-peacock/10 rounded-full blur-2xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="text-center mb-8 sm:mb-12 md:mb-16 max-[700px]:pt-4 sm:pt-0"
        >
          <span className="inline-block text-gold text-sm sm:text-base md:text-[30px] max-[700px]:text-[22px] tracking-[0.3em] uppercase font-semibold mb-3 sm:mb-4">
            Your Spiritual Path
          </span>
          <h2 className="max-[700px]:text-[32px] max-[700px]:leading-[1.4] max-[700px]:pt-3 max-[700px]:pb-2 max-[700px]:my-2 text-4xl md:text-[60px] font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gold via-saffron to-peacock bg-clip-text text-transparent leading-tight px-2 sm:px-0 break-words overflow-visible">
            भक्ति मार्ग
          </h2>
          <h2 className="max-[700px]:text-[32px] text-3xl md:text-[60px] font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gold via-saffron to-peacock bg-clip-text text-transparent">
            The Bhakti Journey
          </h2>
          <p className="text-xl md:text-[22px] text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 mb-4">
            Walk the sacred path of devotion and discover the eternal love that transforms the soul
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-4">
            <span className="text-xl sm:text-2xl text-gold font-semibold">🕉️</span>
            <span className="text-lg sm:text-xl md:text-2xl text-foreground font-semibold">हरे कृष्ण</span>
            <span className="text-lg sm:text-xl md:text-2xl text-foreground font-semibold">•</span>
            <span className="text-lg sm:text-xl md:text-2xl text-foreground font-semibold">Hare Krishna</span>
          </div>
        </motion.div>

        {/* Journey Steps with Large Images */}
        <div className="space-y-8 sm:space-y-12 mb-6 sm:mb-8">
          {journeySteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 1, y: 0 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.15, 
                ease: "easeOut"
              }}
              className={`group relative ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} flex flex-col sm:flex-row gap-6 sm:gap-8 items-center`}
            >
              {/* Large Image */}
              <div className="relative w-full sm:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-saffron/30 hover:border-saffron/60 transition-all duration-500">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>

              {/* Content Card */}
              <div className={`w-full sm:w-1/2 bg-gradient-to-br ${step.color} rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-saffron/30 hover:border-saffron/50 transition-all duration-500 shadow-xl h-full flex flex-col justify-center`}>
                <h3 className="text-2xl md:text-[25px] font-bold mb-4 sm:mb-6 text-foreground">
                  {step.title}
                </h3>
                <p className="text-xl md:text-[22px] text-muted-foreground leading-relaxed mb-4">
                  {step.description}
                </p>
                <div className="mt-4 pt-4 border-t border-saffron/20">
                  <p className="text-xl md:text-[22px] text-foreground italic">
                    "In devotion, we find the path to the divine. Every step taken with love brings us closer to Radha and Krishna."
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Large Devotional Images */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8"
        >
          {devotionalImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 1, scale: 1 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.15, 
                ease: "easeOut"
              }}
              className="group relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-gold/30 hover:border-gold/60 transition-all duration-500"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Inspirational Message */}
        
      </div>
    </section>
  )
}

