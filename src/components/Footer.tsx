"use client"

import { motion } from "framer-motion"
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { useState } from "react"

const footerLinks = {
  explore: [
    { label: "About Vrindavan", href: "#about" },
    { label: "Temples", href: "#temples" },
    { label: "Saints", href: "#saints" },
    { label: "Holy Places", href: "#places" }
  ],
  services: [
    { label: "Hotel Booking", href: "#services" },
    { label: "Taxi Services", href: "#services" },
    { label: "Temple Tours", href: "#services" },
    { label: "Festival Packages", href: "#services" }
  ],
  support: [
    { label: "Contact Us", href: "#contact" },
    { label: "FAQs", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" }
  ]
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-500" },
  { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-500" },
  { icon: Youtube, href: "#", label: "YouTube", color: "hover:text-red-500" }
]

export default function Footer() {
  const [email, setEmail] = useState("")

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <footer className="relative bg-gradient-to-b from-background via-muted/30 to-muted/50 dark:from-gray-900 dark:via-gray-800 dark:to-black text-foreground overflow-hidden border-t border-border/50">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Top Section */}
        <div className="py-12 sm:py-16 md:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 md:gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                <Image
                  src="/elegant-peacock-feather-icon-illustratio-727b518e-20251106081939.jpg"
                  alt="Vrindavan Live"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-saffron via-gold to-peacock bg-clip-text text-transparent">
                Vrindavan Live
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 italic text-sm sm:text-base font-serif">
              "Every moment here is a prayer, every breath a devotion to the divine."
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Experience the eternal bliss of Krishna's sacred land. We help pilgrims discover Vrindavan's divine beauty and spiritual essence.
            </p>
            
            {/* Contact Info */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-saffron" />
                <span>+91 5652-240000</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-saffron" />
                <span>info@vrindavanlive.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-saffron" />
                <span>Vrindavan, Mathura, Uttar Pradesh</span>
              </div>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-5 text-foreground font-serif">Explore</h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-saffron transition-colors inline-block text-sm sm:text-base hover:translate-x-1 duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-5 text-foreground font-serif">Services</h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-saffron transition-colors inline-block text-sm sm:text-base hover:translate-x-1 duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-5 text-foreground font-serif">Support</h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-saffron transition-colors inline-block text-sm sm:text-base hover:translate-x-1 duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        {/* <div className="py-10 sm:py-12 md:py-16 border-t border-border/50">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-foreground font-serif">
                Subscribe for Krishna Quotes & Updates
              </h3>
              <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base px-4">
                Receive daily devotional quotes, temple updates, and festival notifications
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto px-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-saffron focus:ring-saffron/20"
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-saffron to-gold hover:from-saffron/90 hover:to-gold/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Subscribe
                </Button>
              </form>
            </motion.div>
          </div>
        </div> */}

        {/* Bottom Section */}
        <div className="py-6 sm:py-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            {/* Social Links */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <span className="text-xs sm:text-sm text-muted-foreground font-medium">Follow Us:</span>
              <div className="flex items-center gap-2 sm:gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-muted hover:bg-saffron text-muted-foreground hover:text-white transition-all duration-300 flex items-center justify-center group border border-border hover:border-saffron"
                  >
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2 justify-center md:justify-end">
                Made with <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-saffron fill-saffron animate-pulse" /> for Krishna Devotees
              </p>
              <p className="text-[10px] sm:text-xs text-muted-foreground/70 mt-1">
                © {new Date().getFullYear()} Vrindavan Live. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}