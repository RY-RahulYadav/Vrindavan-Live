"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Play, Heart, Sparkles } from "lucide-react"
import Image from "next/image"

const videos = [
  {
    id: 1,
    type: "youtube",
    url: "https://www.youtube.com/embed/ABQIMCa776M",
    title: "पूज्य महाराज जी के आज के दर्शन",
    thumbnail: "/radhakrishan1.jpg",
    description: "Guru Kripa Kevalam by Param Pujya Vrindavan Rasik Sant Shri Hit Premanand Govind Sharan Ji Maharaj, Shri Hit Radha Keli Kunj, Varah Ghat, Vrindavan Dham ||  Shri Hit Premanand Ji Maharaj"
  },
  {
    id: 2,
    type: "youtube",
    url: "https://www.youtube.com/embed/9MOObu47Nw0",
    title: "Yamuna Aarti | Jai Jai Maharani Jamuna Jai Jai Patrani Yamuna",
    thumbnail: "/radhakrishan2.jpg",
    description: "Watch  Yamuna Aarti | Jai Jai Maharani Jamuna Jai Jai Patrani Yamuna | Aarti Yamuna Ji Ki | Sanskar TV"
  },
  {
    id: 3,
    type: "local",
    url: "/video1.mp4",
    title: "Devotional Moments",
    thumbnail: "/videothumba.jpeg",
    description: "Vrindavan, the divine playground of Radha and Krishna, is where Their eternal love story unfolded"
  }
]

const devotionalQuotes = [
  {
    text: "In the divine land of Vrindavan, every moment is a celebration of Radha and Krishna's eternal love.",
    icon: Heart
  },
  {
    text: "Witness the sacred pastimes that continue to inspire millions of devotees across the world.",
    icon: Sparkles
  }
]

export default function VideoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.05, margin: "0px" })
  const [playingVideo, setPlayingVideo] = useState<number | null>(null)
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({})

  const handlePlayClick = (videoId: number) => {
    const videoElement = videoRefs.current[videoId]
    if (videoElement) {
      videoElement.play()
      setPlayingVideo(videoId)
    }
  }

  return (
    <section ref={ref} className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-muted via-background to-ivory overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-saffron rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-peacock rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
          style={{ willChange: 'transform, opacity' }}
        >
          <span className="inline-block text-peacock text-base md:text-[30px] max-[700px]:text-[22px] tracking-[0.3em] uppercase font-semibold mb-4">
            Divine Videos
          </span>
          <h2 className="max-[700px]:text-[32px] text-4xl md:text-[60px] font-bold mb-4 sm:mb-6 bg-gradient-to-r from-peacock via-saffron to-gold bg-clip-text text-transparent">
            Experience Divine Love
          </h2>
          <p className="text-xl md:text-[22px] text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Watch the sacred moments and divine pastimes of Radha and Krishna that fill hearts with eternal devotion
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-4">
            <span className="text-xl sm:text-2xl text-saffron font-semibold">🕉️</span>
            <span className="text-lg sm:text-xl md:text-2xl text-foreground font-semibold">राधे राधे</span>
            <span className="text-lg sm:text-xl md:text-2xl text-foreground font-semibold">•</span>
            <span className="text-lg sm:text-xl md:text-2xl text-foreground font-semibold">Hare Krishna</span>
          </div>
        </motion.div>

      

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 1, y: 0 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.15 }}
              className="group"
            >
              <div className="bg-card rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-border/50 hover:border-saffron/50 transition-all duration-500 hover:shadow-2xl" style={{ maxHeight: '680px' }}>
                {/* Video Container */}
                <div className="relative bg-gradient-to-br from-saffron/20 via-gold/20 to-peacock/20 h-[360px] sm:h-[400px] md:h-[460px] overflow-hidden">
                  {video.type === "youtube" ? (
                    <iframe
                      src={`${video.url}?rel=0&modestbranding=1&cc_load_policy=0&iv_load_policy=3`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                      loading="lazy"
                      style={{ border: 'none' }}
                    ></iframe>
                  ) : (
                    <>
                      <video
                        ref={(el) => {
                          if (el) videoRefs.current[video.id] = el
                        }}
                        src={video.url}
                        controls
                        className="w-full h-full object-contain"
                        poster={video.thumbnail}
                        onPlay={() => setPlayingVideo(video.id)}
                        onPause={() => {
                          if (playingVideo === video.id) {
                            setPlayingVideo(null)
                          }
                        }}
                      >
                        Your browser does not support the video tag.
                      </video>
                      {/* Overlay with play icon for local video */}
                      {video.type === "local" && playingVideo !== video.id && (
                        <div 
                          className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-center justify-center cursor-pointer transition-opacity duration-300"
                          onClick={() => handlePlayClick(video.id)}
                        >
                          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-saffron/90 rounded-full flex items-center justify-center shadow-2xl hover:bg-saffron transition-colors">
                            <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1" fill="white" />
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
                
                {/* Video Title */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-saffron transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
                    {video.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      
      </div>
    </section>
  )
}

