"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useMemo, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { MapPin, ArrowLeft, Star, Heart, Sparkles, Flower2, Phone, MessageCircle, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { hotels } from "../hotels-data"

// Video Player Component with Custom Play/Pause Button
function VideoPlayer({ video, index }: { video: string; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showPlayButton, setShowPlayButton] = useState(true)

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
    }
  }

  const handlePlay = () => {
    setIsPlaying(true)
    setShowPlayButton(false)
  }

  const handlePause = () => {
    setIsPlaying(false)
    setShowPlayButton(true)
  }

  return (
    <div className="bg-card rounded-3xl overflow-hidden shadow-xl border border-border/50 hover:border-saffron/50 transition-all duration-500">
      <div className="relative max-[700px]:aspect-[9/16] min-[700px]:aspect-square bg-black group/video">
        <video
          ref={videoRef}
          src={video}
          controls
          className="w-full h-full object-cover"
          preload="metadata"
          onPlay={handlePlay}
          onPause={handlePause}
        >
          Your browser does not support the video tag.
        </video>
        {/* Custom Play Button Overlay - Shows when paused */}
        {showPlayButton && (
          <button
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-all duration-300 z-10 group/play cursor-pointer"
            aria-label="Play video"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-2xl group-hover/play:scale-110 transition-transform duration-300">
              <Play className="w-10 h-10 md:w-12 md:h-12 text-saffron ml-1" fill="currentColor" />
            </div>
          </button>
        )}
        {/* Custom Pause Button Overlay - Shows when playing (on hover) */}
        {!showPlayButton && isPlaying && (
          <button
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/20 transition-all duration-300 z-10 group/pause cursor-pointer opacity-0 group-hover/video:opacity-100"
            aria-label="Pause video"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-2xl group-hover/pause:scale-110 transition-transform duration-300">
              <Pause className="w-10 h-10 md:w-12 md:h-12 text-saffron" fill="currentColor" />
            </div>
          </button>
        )}
      </div>
    </div>
  )
}

// Get all images from hotel folders
const getHotelImages = (folder: string): string[] => {
  if (folder === "hotel1") {
    // Hotel 1 images
    const imageNames = [
      "WhatsApp Image 2025-11-10 at 10.45.59 AM (2).jpeg",
      "WhatsApp Image 2025-11-10 at 10.45.59 AM (1).jpeg",
      "WhatsApp Image 2025-11-10 at 10.45.59 AM.jpeg",
      "WhatsApp Image 2025-11-10 at 10.45.58 AM.jpeg",
      "WhatsApp Image 2025-11-10 at 10.46.00 AM (2).jpeg",
      "WhatsApp Image 2025-11-10 at 10.46.05 AM (2).jpeg",
      "WhatsApp Image 2025-11-10 at 10.46.05 AM (1).jpeg",
      "WhatsApp Image 2025-11-10 at 10.46.05 AM.jpeg",
      "WhatsApp Image 2025-11-10 at 10.46.04 AM (2).jpeg",
      "WhatsApp Image 2025-11-10 at 10.46.04 AM (1).jpeg",
      "WhatsApp Image 2025-11-10 at 10.46.04 AM.jpeg",
      "WhatsApp Image 2025-11-10 at 10.46.03 AM (3).jpeg",
      "WhatsApp Image 2025-11-10 at 10.46.03 AM (2).jpeg",
      "WhatsApp Image 2025-11-10 at 10.46.03 AM (1).jpeg",
      "WhatsApp Image 2025-11-10 at 10.46.03 AM.jpeg",
      "WhatsApp Image 2025-11-10 at 10.46.02 AM (2).jpeg",
      "WhatsApp Image 2025-11-10 at 10.46.02 AM (1).jpeg",
      "WhatsApp Image 2025-11-10 at 10.46.02 AM.jpeg",
      "WhatsApp Image 2025-11-10 at 10.46.01 AM (2).jpeg",
      "WhatsApp Image 2025-11-10 at 10.46.01 AM (1).jpeg",
      "WhatsApp Image 2025-11-10 at 10.46.01 AM.jpeg",
      "WhatsApp Image 2025-11-10 at 10.46.00 AM (1).jpeg",
      "WhatsApp Image 2025-11-10 at 10.46.00 AM.jpeg"
    ]
    return imageNames.map(name => `/hotel1/${name}`)
  } else if (folder === "hotel2") {
    // Hotel 2 images
    const imageNames = [
      "WhatsApp Image 2025-11-10 at 10.47.34 AM (2).jpeg",
      "WhatsApp Image 2025-11-10 at 10.47.34 AM (1).jpeg",
      "WhatsApp Image 2025-11-10 at 10.47.34 AM.jpeg",
      "WhatsApp Image 2025-11-10 at 10.47.33 AM (1).jpeg",
      "WhatsApp Image 2025-11-10 at 10.47.33 AM.jpeg",
      "WhatsApp Image 2025-11-10 at 10.47.32 AM (2).jpeg",
      "WhatsApp Image 2025-11-10 at 10.47.32 AM (1).jpeg",
      "WhatsApp Image 2025-11-10 at 10.47.32 AM.jpeg",
      "WhatsApp Image 2025-11-10 at 10.47.31 AM (2).jpeg",
      "WhatsApp Image 2025-11-10 at 10.47.31 AM (1).jpeg",
      "WhatsApp Image 2025-11-10 at 10.47.31 AM.jpeg",
      "WhatsApp Image 2025-11-10 at 10.47.30 AM (1).jpeg",
      "WhatsApp Image 2025-11-10 at 10.47.30 AM.jpeg",
      "WhatsApp Image 2025-11-10 at 10.47.29 AM.jpeg",
      "WhatsApp Image 2025-11-10 at 10.47.20 AM.jpeg"
    ]
    return imageNames.map(name => `/hotel2/${name}`)
  }
  
  return []
}

// Get videos for hotel
const getHotelVideos = (folder: string): string[] => {
  if (folder === "hotel1") {
    return [
      "/hotel1/WhatsApp Video 2025-11-10 at 1.17.53 PM.mp4",
      "/hotel1/WhatsApp Video 2025-11-10 at 10.46.00 AM.mp4"
    ]
  }
  return []
}

export default function HotelDetailPage() {
  const params = useParams()
  const hotelId = params?.hotelId ? parseInt(params.hotelId as string) : null
  const hotel = hotelId ? hotels.find(h => h.id === hotelId) : null
  
  const infoRef = useRef(null)
  const galleryRef = useRef(null)
  const videoRef = useRef(null)
  const infoInView = useInView(infoRef, { once: false, amount: 0.05, margin: "0px" })
  const galleryInView = useInView(galleryRef, { once: false, amount: 0.05, margin: "0px" })
  const videoInView = useInView(videoRef, { once: false, amount: 0.05, margin: "0px" })

  const hotelImages = useMemo(() => {
    if (!hotel) return []
    return getHotelImages(hotel.galleryFolder)
  }, [hotel])

  const hotelVideos = useMemo(() => {
    if (!hotel) return []
    return getHotelVideos(hotel.galleryFolder)
  }, [hotel])

  if (!hotelId || !hotel) {
    return (
      <div className="relative min-h-screen">
        <Navigation />
        <main className="pt-20">
          <div className="container mx-auto px-4 lg:px-8 py-20 text-center">
            <h1 className="text-4xl font-bold mb-4">Hotel Not Found</h1>
            <Link href="/services/hotel-booking">
              <Button>Back to Hotels</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="relative min-h-screen">
      <Navigation />
      <main className="pt-32 md:pt-40">
        {/* Hotel Info Section */}
        <div ref={infoRef} className="relative pt-8 pb-20 sm:pt-12 sm:pb-24 md:pt-32 md:pb-32 lg:pt-30 lg:pb-32 !xl:pt-[50px] xl:pb-32 bg-gradient-to-b from-background via-saffron/10 via-gold/5 to-background">
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={infoInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.15 }}
              className="w-full"
            >
              {/* Back Button - Hidden above 700px */}
              <Link href="/services/hotel-booking" className="max-[700px]:block hidden">
                <Button 
                  variant="ghost" 
                  className="mb-8 text-saffron hover:text-gold hover:bg-saffron/10"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Hotels
                </Button>
              </Link>

              {/* Hotel Info Card */}
              <div className="bg-card rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16 shadow-2xl relative">
                
                {/* Hotel Name with Devotional Style */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Heart className="w-6 h-6 md:w-8 md:h-8 text-saffron" />
                    <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-gold" />
                    <Flower2 className="w-6 h-6 md:w-8 md:h-8 text-peacock" />
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-foreground bg-gradient-to-r from-saffron via-gold to-peacock bg-clip-text text-transparent">
                    {hotel.name}
                  </h1>
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <span className="text-lg md:text-xl text-saffron font-semibold">🕉️</span>
                    <span className="text-lg md:text-xl text-foreground font-semibold">हरे कृष्ण</span>
                    <span className="text-lg md:text-xl text-foreground font-semibold">•</span>
                    <span className="text-lg md:text-xl text-foreground font-semibold">Hare Krishna</span>
                  </div>
                </div>
                
                {/* Location */}
                <div className="mb-8 text-center">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hotel.location)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 text-muted-foreground mb-4 hover:text-saffron transition-colors cursor-pointer group"
                  >
                    <MapPin className="w-6 h-6 md:w-7 md:h-7 text-saffron flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div className="flex flex-col items-center">
                      <span className="text-lg md:text-xl leading-relaxed font-medium">{hotel.locationLine1}</span>
                      {hotel.locationLine2 && (
                        <span className="text-lg md:text-xl leading-relaxed font-medium">{hotel.locationLine2}</span>
                      )}
                    </div>
                  </a>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center gap-2 mb-8">
                  <div className="bg-gradient-to-r from-saffron to-gold text-white text-base md:text-lg font-bold px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2">
                    <Star className="w-5 h-5 fill-white" />
                    <span>{hotel.rating}</span>
                  </div>
                </div>

                {/* Features Section */}
                <div className="border-t-2 border-saffron/30 pt-8">
                  <h3 className="text-2xl md:text-[25px] font-bold mb-6 text-center text-foreground bg-gradient-to-r from-saffron to-gold bg-clip-text text-transparent">
                    Divine Amenities
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {hotel.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 rounded-2xl bg-gradient-to-br from-saffron/5 via-gold/5 to-peacock/5 border border-saffron/20 hover:border-saffron/40 transition-all duration-300"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-saffron to-gold mt-2.5 flex-shrink-0"></div>
                        <span className="text-lg md:text-xl text-muted-foreground leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call and Chat Buttons */}
                <div className="border-t-2 border-saffron/30 pt-8 mt-8 mb-8">
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto my-4">
                    <a
                      href="tel:+918700661267"
                      className="flex-1 bg-[#F28C28] hover:bg-[#E07A1F] text-white font-semibold py-3 px-5 rounded-md flex items-center justify-center gap-2.5 transition-all duration-300 text-base md:text-lg"
                    >
                      <Phone className="w-5 h-5" />
                      <span>Call</span>
                    </a>
                    <a
                      href="https://wa.me/918700661267"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-3 px-5 rounded-md flex items-center justify-center gap-2.5 transition-all duration-300 text-base md:text-lg"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>Chat</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Gallery Section */}
        {hotelImages.length > 0 && (
          <section ref={galleryRef} className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-b from-background via-muted to-background">
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <motion.div
                initial={{ opacity: 1, y: 0 }}
                animate={galleryInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.15 }}
                className="text-center mb-12 md:mb-16"
              >
                <span className="inline-block text-saffron text-base md:text-[30px] max-[700px]:text-[22px] tracking-[0.3em] uppercase font-semibold mb-4">
                  Photo Gallery
                </span>
                <h2 className="max-[700px]:text-[32px] text-4xl md:text-[60px] font-bold mb-6 bg-gradient-to-r from-saffron via-peacock to-gold bg-clip-text text-transparent">
                  {hotel.name}
                </h2>
              </motion.div>

              {/* Image Gallery Grid */}
              <motion.div
                initial={{ opacity: 1 }}
                animate={galleryInView ? { opacity: 1 } : { opacity: 1 }}
                transition={{ duration: 0.15 }}
                className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
              >
                {hotelImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 1, y: 0 }}
                    animate={galleryInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.15 }}
                    className="break-inside-avoid group"
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-saffron/50">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={image}
                          alt={`${hotel.name} - Image ${index + 1}`}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        )}

        {/* Video Section */}
        {hotelVideos.length > 0 && (
          <section ref={videoRef} className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-b from-background via-saffron/5 to-background">
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <motion.div
                initial={{ opacity: 1, y: 0 }}
                animate={videoInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.15 }}
                className="text-center mb-12 md:mb-16"
              >
                <span className="inline-block text-peacock text-base md:text-[30px] max-[700px]:text-[22px] tracking-[0.3em] uppercase font-semibold mb-4">
                  Video Tour
                </span>
                <h2 className="max-[700px]:text-[32px] text-4xl md:text-[60px] font-bold mb-6 bg-gradient-to-r from-peacock via-saffron to-gold bg-clip-text text-transparent">
                  Experience {hotel.name}
                </h2>
              </motion.div>

              {/* Videos Grid */}
              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {hotelVideos.map((video, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 1, y: 0 }}
                    animate={videoInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.15 }}
                    className="group"
                  >
                    <VideoPlayer video={video} index={index} />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />

      {/* Fixed Call and WhatsApp Buttons - Below 700px Only */}
      <div className="fixed bottom-0 left-0 right-0 z-50 hidden max-[700px]:flex border-t border-border/20 bg-background">
        <a
          href="tel:+918700661267"
          className="flex-1 bg-[#F28C28] hover:bg-[#E07A1F] border-r border-border/20 text-white font-semibold py-3 px-3 flex items-center justify-center gap-2 transition-all duration-300 text-base"
        >
          <Phone className="w-5 h-5 text-white" />
          <span>Call Now</span>
        </a>
        <a
          href="https://wa.me/918700661267"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-3 px-3 flex items-center justify-center gap-2 transition-all duration-300 text-base"
        >
          <MessageCircle className="w-5 h-5 text-white" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  )
}

