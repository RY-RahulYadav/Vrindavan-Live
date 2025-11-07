"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"
import { dataStore } from "@/lib/data-store"
import Image from "next/image"

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)
  const [mounted, setMounted] = useState(false)
  const [headerHeight, setHeaderHeight] = useState(80)
  // Filter out any invalid/undefined slides
  const slides = dataStore.carouselSlides.filter(slide => slide && slide.image && slide.title)

  // Ensure currentSlide is within valid range when slides change
  useEffect(() => {
    setCurrentSlide((prev) => {
      if (slides.length === 0) return 0
      return prev >= slides.length ? 0 : prev
    })
  }, [slides.length])

  // Preload next and previous images
  useEffect(() => {
    if (slides.length === 0) return
    
    const preloadImage = (src: string) => {
      const img = new window.Image()
      img.src = src
    }
    
    const currentIndex = Math.max(0, Math.min(currentSlide, slides.length - 1))
    const nextIndex = (currentIndex + 1) % slides.length
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length
    
    if (slides[nextIndex]?.image) {
      preloadImage(slides[nextIndex].image)
    }
    if (slides[prevIndex]?.image) {
      preloadImage(slides[prevIndex].image)
    }
  }, [currentSlide, slides])

  useEffect(() => {
    setMounted(true)
    
    // Calculate header height dynamically
    const updateHeaderHeight = () => {
      const nav = document.querySelector('nav')
      if (nav) {
        setHeaderHeight(nav.offsetHeight)
      }
    }
    
    updateHeaderHeight()
    window.addEventListener('resize', updateHeaderHeight)
    
    const timer = setInterval(() => {
      if (slides.length > 0) {
        setDirection(1)
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }
    }, 6000)
    
    return () => {
      clearInterval(timer)
      window.removeEventListener('resize', updateHeaderHeight)
    }
  }, [slides.length])

  const nextSlide = () => {
    if (slides.length === 0) return
    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    if (slides.length === 0) return
    setDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -500 : 500,
      opacity: 0
    })
  }

  if (!mounted || !slides || slides.length === 0) return null

  // Ensure currentSlide is within valid range
  const safeCurrentSlide = Math.max(0, Math.min(currentSlide, slides.length - 1))
  const currentSlideData = slides[safeCurrentSlide]

  if (!currentSlideData) return null

  return (
    <section 
      className="relative w-full overflow-hidden bg-black  " 
      style={{ 
        marginTop: `${headerHeight}px`, 
        height: `calc(100vh - ${headerHeight}px)`, 
        top:'-50px'
      }}
    >
     

      {/* Carousel Slides */}
      <AnimatePresence initial={false} custom={direction} mode="sync">
        <motion.div
          key={safeCurrentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ 
            x: { type: "tween", duration: 0.4, ease: "easeInOut" },
            opacity: { duration: 0.2, ease: "easeInOut" }
          }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={currentSlideData.image}
              alt={currentSlideData.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
              onError={(e) => {
                console.error('Image load error:', currentSlideData.image)
              }}
            />
            {/* Gradient Overlays - Lightened for clearer images */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/60"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/50"></div>
          </div>
          {/* ient-to-b from-black/60 via-black/40 to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div> */}
          {/* Content */}
          
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full glass border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full glass border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide Indicators */}
      {/* <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1)
              setCurrentSlide(index)
            }}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "w-6 sm:w-8 md:w-12 h-1 sm:h-1.5 md:h-2 bg-gradient-to-r from-saffron to-gold"
                : "w-1 sm:w-1.5 md:w-2 h-1 sm:h-1.5 md:h-2 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}

      {/* Scroll Down Indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 z-20 text-white cursor-pointer opacity-70 hover:opacity-100 transition-opacity hidden md:block"
      >
        <div className="flex flex-col items-center gap-1 sm:gap-2">
          <span className="text-[10px] sm:text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      </motion.a>
    </section>
  )
}