"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Flower2, Heart, Users, Sparkles } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Heart,
    title: "Divine Love",
    description: "Experience the eternal love between Radha and Krishna in every corner"
  },
  {
    icon: Sparkles,
    title: "Sacred Energy",
    description: "Feel the spiritual vibrations that have touched millions of souls"
  },
  {
    icon: Users,
    title: "Rich Heritage",
    description: "5000+ years of devotional traditions and timeless wisdom"
  },
  {
    icon: Flower2,
    title: "Peaceful Atmosphere",
    description: "Find inner peace amidst temples, ghats, and sacred groves"
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
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="about" ref={ref} className="relative py-20 md:py-32 bg-gradient-to-b from-background via-ivory to-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-saffron text-sm md:text-base tracking-[0.3em] uppercase font-semibold mb-4">
            Discover the Divine
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-saffron via-peacock to-gold bg-clip-text text-transparent">
            About Vrindavan
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The sacred land where Lord Krishna spent His childhood, performing divine pastimes that continue to enchant devotees across the world.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left: Images Collage */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/nab.jpeg"
                  alt="Vrindavan Temple"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/ab2.jpg"
                  alt="Yamuna Ghat"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/radha_govind.jpg"
                  alt="Vrindavan Sacred Place"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/radhakrishan7.webp"
                  alt="Prem Mandir"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Land of Eternal Devotion
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Vrindavan, located on the banks of the sacred Yamuna River, is one of the most revered pilgrimage sites in India. This ancient town is where Lord Krishna spent His childhood, enchanting devotees with His divine play (leela) and timeless teachings.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 5,000 temples, countless sacred groves, and the gentle flow of devotional kirtans filling the air, Vrindavan offers a unique spiritual experience. Every stone, every tree, and every ghat (riverbank) resonates with Krishna's divine presence.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Pilgrims from around the world visit Vrindavan to immerse themselves in bhakti (devotional service), participate in festivals, and walk the same paths where Krishna once played His enchanting flute.
            </p>

            {/* Decorative Quote */}
            <div className="bg-gradient-to-r from-saffron/10 via-gold/10 to-peacock/10 rounded-xl p-6 border-l-4 border-saffron">
              <p className="text-lg italic text-foreground">
                "Vrindavan is not just a place — it is the very heart of devotion, where every breath is a prayer and every step a dance of divine love."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-saffron/50 h-full">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-saffron/20 to-gold/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-saffron" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-saffron via-gold to-peacock rounded-3xl p-1"
        >
          <div className="bg-card rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-saffron via-gold to-peacock bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">
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