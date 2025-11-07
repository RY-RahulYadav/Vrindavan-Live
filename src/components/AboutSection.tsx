"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Flower2, Heart, Users, Sparkles } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Heart,
    title: "Radha Krishna's Divine Love",
    description: "Experience the eternal, unconditional love between Radha and Krishna that transcends all boundaries"
  },
  {
    icon: Sparkles,
    title: "Sacred Leelas",
    description: "Feel the divine pastimes of Radha Krishna that continue to enchant devotees across the world"
  },
  {
    icon: Users,
    title: "Bhakti Tradition",
    description: "5000+ years of devotional service dedicated to Radha Krishna's eternal love"
  },
  {
    icon: Flower2,
    title: "Divine Presence",
    description: "Every corner of Vrindavan resonates with Radha Krishna's divine presence and grace"
  }
]

const stats = [
  { number: "5000+", label: "Ancient Temples" },
  { number: "10M+", label: "Annual Pilgrims" },
  { number: "365", label: "Days of Festivals" },
  { number: "∞", label: "Divine Blessings" }
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.05, margin: "0px" })

  return (
    <section id="about" ref={ref} className="relative py-16 sm:py-20 md:py-24 lg:py-32 about-section bg-gradient-to-b from-background via-ivory to-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block text-saffron text-base md:text-[30px] max-[700px]:text-[22px] tracking-[0.3em] uppercase font-semibold mb-4">
            Radha Krishna's Divine Abode
          </span>
          <h2 className="max-[700px]:text-[32px] text-4xl md:text-[60px] font-bold mb-6 bg-gradient-to-r from-saffron via-peacock to-gold bg-clip-text text-transparent">
            About Vrindavan
          </h2>
          <p className="text-xl md:text-[22px] text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The sacred land where Radha and Krishna performed Their divine pastimes, where Their eternal love story continues to inspire millions of devotees across the world.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 md:mb-20">
          {/* Left: Images Collage */}
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="relative"
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="relative h-48 sm:h-56 md:h-[320px] lg:h-[380px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/radhakrishan1.jpg"
                  alt="Radha Krishna Divine"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 50vw"
                  loading="eager"
                  priority
                />
              </div>
              <div className="relative h-48 sm:h-56 md:h-[320px] lg:h-[380px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/hero/h1.jpeg"
                  alt="Radha Krishna Leela"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 50vw"
                />
              </div>
              <div className="relative h-48 sm:h-56 md:h-[320px] lg:h-[380px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/radha_govind.jpg"
                  alt="Radha Govind"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 50vw"
                />
              </div>
              <div className="relative h-48 sm:h-56 md:h-[320px] lg:h-[380px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/hero/h8.jpg"
                  alt="Radha Krishna Divine Love"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 50vw"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="space-y-4 sm:space-y-6"
            style={{ willChange: 'transform, opacity' }}
          >
            <h3 className="text-2xl md:text-[25px] font-bold text-foreground mb-4">
              The Eternal Abode of Radha Krishna
            </h3>
            <p className="text-xl md:text-[22px] text-muted-foreground leading-relaxed">
              Vrindavan, the divine playground of Radha and Krishna, is where Their eternal love story unfolded. This sacred land on the banks of Yamuna River is where Krishna performed His enchanting pastimes with Radha, the embodiment of pure devotion and divine love.
            </p>
            <p className="text-xl md:text-[22px] text-muted-foreground leading-relaxed">
              Every corner of Vrindavan echoes with the divine love between Radha and Krishna. The sacred groves, the Yamuna ghats, and the countless temples all bear witness to Their eternal leelas. Here, devotees experience the highest form of bhakti - the selfless love that Radha has for Krishna.
            </p>
            <p className="text-xl md:text-[22px] text-muted-foreground leading-relaxed">
              Pilgrims from around the world come to Vrindavan to immerse themselves in the devotional mood of Radha Krishna, to participate in Their festivals, and to walk the same paths where Radha and Krishna once danced together in divine ecstasy.
            </p>

            {/* Decorative Quote */}
            <div className="bg-gradient-to-r from-saffron/10 via-gold/10 to-peacock/10 rounded-xl p-4 sm:p-6 border-l-4 border-saffron">
              <p className="text-xl md:text-[22px] italic text-foreground">
                "Vrindavan is the eternal abode of Radha Krishna's divine love, where every breath is a prayer to Their lotus feet and every step a dance in Their divine service."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Images Above Features Grid - Desktop: Flex Row, Mobile: Single Image */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          {/* Mobile: Single Image (rk0.jpg) */}
          <div className="block sm:hidden max-w-5xl mx-auto relative h-64 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/hero/h9.png"
              alt="Radha Krishna Divine"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          {/* Desktop: Flex Row with Both Images */}
          <div className="hidden sm:flex max-w-7xl mx-auto gap-4 sm:gap-6">
            <motion.div
              initial={{ opacity: 1, x: 0 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="flex-1 relative h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/rk0.jpg"
                alt="Radha Krishna Divine"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 1024px) 50vw, 640px"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 1, x: 0 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="flex-1 relative h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/radha-raman.jpg"
                alt="Radha Raman"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 1024px) 50vw, 640px"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 md:mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 1, y: 0 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="group"
              style={{ willChange: 'transform, opacity' }}
            >
              <div className="bg-card rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-saffron/50 h-full">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-saffron/20 to-gold/20 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-saffron" />
                </div>
                <h4 className="text-2xl md:text-[25px] font-bold mb-2 text-foreground">{feature.title}</h4>
                <p className="text-xl md:text-[22px] text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Below Features Grid - Mobile Only */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="mb-12 sm:mb-16 md:mb-20 block sm:hidden"
        >
          <div className="max-w-5xl mx-auto relative h-64 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/hero/h6.jpg"
              alt="Radha Raman"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="max-w-6xl mx-auto bg-gradient-to-r from-saffron via-gold to-peacock rounded-3xl p-1"
          style={{ willChange: 'transform, opacity' }}
        >
          <div className="bg-card rounded-3xl p-6 sm:p-8 md:p-12">
            <div className="flex flex-col min-[430px]:grid min-[430px]:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 1, scale: 1 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="text-center"
                  style={{ willChange: 'transform, opacity' }}
                >
                  <div className="text-[50px] sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-saffron via-gold to-peacock bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-[18px] sm:text-xl md:text-[22px] text-muted-foreground font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}