"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Heart, Sparkles, Flower2, Music } from "lucide-react"
import Image from "next/image"

const radhaKrishnaImages = [
  { src: "/radhakrishan1.jpg", alt: "Radha Krishna Divine Love" },
  { src: "/radhakrishan2.jpg", alt: "Radha Krishna Eternal Union" },
  { src: "/radhakrishan3.jpg", alt: "Radha Krishna Sacred Bond" },
  { src: "/radhakrishan5.jpg", alt: "Radha Krishna Divine Play" },
  { src: "/rk0.jpg", alt: "Radha Krishna Bliss" },
  { src: "/rk1.jpg", alt: "Radha Krishna Devotion" },
  { src: "/rk2.jpg", alt: "Radha Krishna Love" },
  { src: "/rk3.jpg", alt: "Radha Krishna Together" },
  { src: "/radhkrishan2.jpg", alt: "Radha Krishna Divine" },
  { src: "/radhkrishan4.jpg", alt: "Radha Krishna Sacred" },
  { src: "/radhkrishan6.jpg", alt: "Radha Krishna Eternal" },
  { src: "/radha_govind.jpg", alt: "Radha Govind" },
]

const devotionalQuotes = [
  {
    text: "Radha's love for Krishna is the highest form of devotion, where the soul merges completely with the divine.",
    icon: Heart
  },
  {
    text: "In the eternal dance of Radha and Krishna, we find the essence of pure bhakti and unconditional love.",
    icon: Music
  },
  {
    text: "Their divine pastimes in Vrindavan teach us that love is the ultimate path to spiritual realization.",
    icon: Flower2
  }
]

export default function DivineLoveSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.05, margin: "0px" })

  return (
    <section id="divine-love" ref={ref} className="relative pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-6 sm:pb-8 md:pb-10 bg-gradient-to-b from-background via-saffron/5 to-background overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-saffron rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-peacock rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gold rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <span className="inline-block text-saffron text-sm sm:text-base md:text-[30px] max-[700px]:text-[22px] tracking-[0.3em] uppercase font-semibold mb-3 sm:mb-4">
            Eternal Divine Love
          </span>
          <h2 className="max-[700px]:text-[32px] text-4xl md:text-[60px] font-bold mb-4 sm:mb-6 bg-gradient-to-r from-saffron via-peacock to-gold bg-clip-text text-transparent leading-tight">
            श्री राधा कृष्ण
          </h2>
          <h2 className="max-[700px]:text-[32px] text-3xl md:text-[60px] font-bold mb-4 sm:mb-6 bg-gradient-to-r from-saffron via-peacock to-gold bg-clip-text text-transparent">
            Radha & Krishna
          </h2>
          <p className="text-xl md:text-[22px] text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 mb-4">
            Experience the eternal love story that embodies the highest form of devotion and spiritual union
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-4">
            <span className="text-xl sm:text-2xl text-saffron font-semibold">🕉️</span>
            <span className="text-lg sm:text-xl md:text-2xl text-foreground font-semibold">राधे राधे</span>
            <span className="text-lg sm:text-xl md:text-2xl text-foreground font-semibold">•</span>
            <span className="text-lg sm:text-xl md:text-2xl text-foreground font-semibold">Hare Krishna</span>
          </div>
        </motion.div>

        {/* Devotional Quotes */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 md:mb-16"
        >
          {devotionalQuotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 1, scale: 1 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="bg-gradient-to-br from-saffron/10 via-gold/10 to-peacock/10 rounded-2xl p-4 sm:p-6 border border-saffron/20 hover:border-saffron/40 transition-all duration-300"
            >
              <quote.icon className="w-6 h-6 sm:w-8 sm:h-8 text-saffron mb-3 sm:mb-4" />
              <p className="text-xl md:text-[22px] text-foreground leading-relaxed italic">
                "{quote.text}"
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Large Featured Images - Devotional Display */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={isInView ? { opacity: 1 } : { opacity: 1 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="space-y-6 sm:space-y-8 md:space-y-12 mb-6 sm:mb-8"
        >
          {/* First Large Image */}
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="group relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-saffron/30 hover:border-saffron/60 transition-all duration-500"
          >
            <Image
              src={radhaKrishnaImages[0].src}
              alt={radhaKrishnaImages[0].alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="100vw"
              priority
              loading="eager"
            />
          </motion.div>

          {/* Two Large Images Side by Side */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {radhaKrishnaImages.slice(1, 3).map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 1, y: 0 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="group relative w-full h-[250px] sm:h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-2xl border-4 border-gold/30 hover:border-gold/60 transition-all duration-500"
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
          </div>

          {/* Three Large Images */}
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            {radhaKrishnaImages.slice(3, 6).map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 1, scale: 1 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="group relative w-full h-[200px] sm:h-[280px] md:h-[350px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border-2 border-peacock/30 hover:border-peacock/60 transition-all duration-500"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 33vw"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Devotional Message */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="mt-8 sm:mt-12 md:mt-16 mb-0 text-center"
        >
          <div className="bg-gradient-to-r from-saffron/20 via-gold/20 to-peacock/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border-2 border-saffron/30 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-saffron/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-peacock/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-[25px] font-bold mb-4 sm:mb-6 text-foreground">
                The Path of Pure Devotion
              </h3>
              <p className="text-xl md:text-[22px] text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-4 sm:mb-6">
                Radha and Krishna's divine love story teaches us that true devotion transcends all boundaries. 
                Their eternal bond in Vrindavan represents the ultimate union of the individual soul with the Supreme.
              </p>
              <div className="mb-4 sm:mb-6">
                <p className="text-2xl md:text-[20px] text-foreground font-bold mb-2">
                  "यत्र राधा तत्र कृष्णः"
                </p>
                <p className="text-xl md:text-[22px] text-foreground font-semibold italic">
                  "Where there is Radha, there is Krishna. Where there is Krishna, there is eternal bliss."
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-4">
                <span className="text-2xl sm:text-3xl text-saffron font-bold">🕉️</span>
                <span className="text-lg sm:text-xl md:text-2xl text-foreground font-semibold">हरे कृष्ण हरे कृष्ण</span>
                <span className="text-lg sm:text-xl md:text-2xl text-foreground font-semibold">कृष्ण कृष्ण हरे हरे</span>
                <span className="text-lg sm:text-xl md:text-2xl text-foreground font-semibold">हरे राम हरे राम</span>
                <span className="text-lg sm:text-xl md:text-2xl text-foreground font-semibold">राम राम हरे हरे</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

