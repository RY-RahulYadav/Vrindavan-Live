"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1, margin: "-50px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 87006 61267"],
      color: "from-peacock to-blue-600"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@vrindavanlive.com", "support@vrindavanlive.com"],
      color: "from-saffron to-gold"
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Gautam pada chauraha", "Near gaudiya math temple", "Vrindavan, Mathura District", "Uttar Pradesh, India - 281121"],
      color: "from-gold to-yellow-600"
    }
  ]

  return (
    <section id="contact" ref={ref} className="relative py-16 sm:py-20 md:py-24 lg:py-32 pb-24 sm:pb-20 md:pb-24 lg:pb-32 bg-gradient-to-b from-muted to-background overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 lg:px-8 relative z-10 max-w-full overflow-x-hidden">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
          style={{ willChange: 'transform, opacity' }}
        >
          <span className="inline-block text-saffron text-base md:text-[30px] max-[700px]:text-[22px] tracking-[0.3em] uppercase font-semibold mb-4">
            Get in Touch
          </span>
          <h2 className="max-[700px]:text-[32px] text-4xl md:text-[60px] font-bold mb-6 bg-gradient-to-r from-saffron via-gold to-peacock bg-clip-text text-transparent">
            Contact Us
          </h2>
          <p className="text-xl md:text-[22px] text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions about your Vrindavan visit? We're here to help make your pilgrimage seamless and memorable
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 max-w-7xl mx-auto items-stretch">
          {/* Left: Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="space-y-4 sm:space-y-8 flex flex-col h-full w-full min-w-0"
            style={{ willChange: 'transform, opacity' }}
          >
            {/* Contact Info Cards */}
            <div className="space-y-3 sm:space-y-4 w-full">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05, ease: "easeOut" }}
                  className="group w-full"
                  style={{ willChange: 'transform, opacity' }}
                >
                  <div className="bg-card rounded-2xl p-3 sm:p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-saffron/50 w-full overflow-hidden">
                    <div className="flex items-start gap-2 sm:gap-3 md:gap-4 w-full">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0 overflow-hidden">
                        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[25px] font-bold mb-1 sm:mb-2 text-foreground break-words">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[20px] text-muted-foreground break-words">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Google Maps - Moved to right column */}
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-xl border border-border/50"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56449.76887!2d77.65!3d27.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39736ce47bffc039%3A0xfe5fc3da92c6341!2sVrindavan%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </motion.div> */}
          </motion.div>

          {/* Right: Contact Form - COMMENTED OUT */}
          {/* <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-card rounded-3xl p-8 md:p-10 shadow-xl border border-border/50">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                Send Us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-foreground">
                    Your Name <span className="text-saffron">*</span>
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="border-border/50 focus:border-saffron focus:ring-saffron/20"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">
                    Email Address <span className="text-saffron">*</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="border-border/50 focus:border-saffron focus:ring-saffron/20"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-foreground">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="border-border/50 focus:border-saffron focus:ring-saffron/20"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-foreground">
                    Your Message <span className="text-saffron">*</span>
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your inquiry or how we can help..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="border-border/50 focus:border-saffron focus:ring-saffron/20 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-saffron to-gold hover:from-saffron/90 hover:to-gold/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div> */}

          {/* Right: Google Maps - Moved here */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="w-full h-full flex min-w-0"
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="bg-card rounded-2xl sm:rounded-3xl p-2 sm:p-3 md:p-4 lg:p-6 shadow-xl border border-border/50 h-full w-full flex flex-col min-w-0 overflow-hidden">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[25px] font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-6 text-foreground px-1">
                Find Us
              </h3>
              <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-border/50 flex-1 min-h-[200px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-0 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56449.76887!2d77.65!3d27.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39736ce47bffc039%3A0xfe5fc3da92c6341!2sVrindavan%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '200px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500 w-full h-full"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Fixed Call and WhatsApp Buttons - Mobile Only */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex sm:hidden border-t border-border/20">
        <a
          href="tel:+918700661267"
          className="flex-1 bg-gradient-to-r from-saffron to-gold hover:from-saffron/90 hover:to-gold/90 text-white font-semibold py-3 px-3 flex items-center justify-center gap-2 transition-all duration-300 shadow-lg text-base md:text-lg"
        >
          <Phone className="w-4 h-4" />
          <span>Call Now</span>
        </a>
        <a
          href="https://wa.me/918700661267"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-gradient-to-r from-green-700 to-green-600 hover:from-green-800 hover:to-green-700 text-white font-semibold py-3 px-3 flex items-center justify-center gap-2 transition-all duration-300 shadow-lg text-base md:text-lg"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
      </div>
    </section>
  )
}