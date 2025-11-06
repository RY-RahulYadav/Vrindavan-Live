"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { dataStore } from "@/lib/data-store"
import Image from "next/image"

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const testimonials = dataStore.testimonials

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" ref={ref} className="relative py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-b from-ivory/50 via-background to-ivory/30 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block text-peacock text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.3em] uppercase font-semibold mb-3 sm:mb-4">
            Devotee Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-peacock via-gold to-saffron bg-clip-text text-transparent px-4">
            Stories from the Heart
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Hear from pilgrims who experienced the divine grace and transformative power of Vrindavan
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-5xl mx-auto relative px-4 sm:px-8 md:px-0"
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:-translate-x-12 lg:-translate-x-16 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-r from-peacock to-saffron text-white shadow-xl hover:shadow-2xl transition-all duration-300 items-center justify-center group hidden min-[500px]:flex"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 group-hover:scale-125 transition-transform" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 md:translate-x-12 lg:translate-x-16 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-r from-peacock to-saffron text-white shadow-xl hover:shadow-2xl transition-all duration-300 items-center justify-center group hidden min-[500px]:flex"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 group-hover:scale-125 transition-transform" />
          </button>

          {/* Testimonial Card */}
          <div className="relative min-h-[400px] sm:min-h-[450px] overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              {testimonials.map((testimonial, index) => (
                index === currentIndex && (
                  <motion.div
                    key={testimonial.id}
                    custom={direction}
                    initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction > 0 ? -300 : 300 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="bg-card/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl border border-border/50"
                  >
                {/* Quote Icon */}
                <div className="flex justify-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-peacock/20 to-gold/20 flex items-center justify-center">
                    <Quote className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-peacock" />
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center text-foreground leading-relaxed mb-6 sm:mb-8 italic px-2">
                  "{testimonial.text}"
                </p>

                {/* Rating Stars */}
                <div className="flex justify-center gap-1 mb-4 sm:mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-gold text-gold" />
                  ))}
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-center gap-3 sm:gap-4">
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-gold flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="text-base sm:text-lg font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-6 sm:w-8 h-1.5 sm:h-2 bg-gradient-to-r from-peacock to-gold"
                    : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Share Your Experience CTA */}
       
      </div>
    </section>
  )
}