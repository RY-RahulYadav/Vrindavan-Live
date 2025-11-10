"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

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
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Monday - Saturday: 9:00 AM - 6:00 PM", "Sunday: 10:00 AM - 4:00 PM"],
    color: "from-purple-600 to-pink-600"
  }
]

export default function ContactPage() {
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
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" })
    alert("Thank you for your message! We'll get back to you soon.")
  }

  return (
    <div className="relative min-h-screen">
      <Navigation />
      <main className="pt-32 md:pt-40">
        {/* Hero Section */}
        <section className="relative pt-8 pb-20 sm:pt-12 sm:pb-24 md:pt-16 md:pb-32 bg-gradient-to-b from-saffron/10 via-gold/5 to-background overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block text-saffron text-base md:text-[30px] max-[700px]:text-[22px] tracking-[0.3em] uppercase font-semibold mb-4">
                Get in Touch
              </span>
              <h1 className="max-[700px]:text-[32px] text-4xl md:text-[60px] font-bold mb-6 bg-gradient-to-r from-saffron via-peacock to-gold bg-clip-text text-transparent">
                Contact Us
              </h1>
              <p className="text-xl md:text-[22px] text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Have questions about your Vrindavan visit? We're here to help make your pilgrimage to Radha and Krishna's divine abode seamless and memorable
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="relative max-[700px]:py-12 py-20 md:py-32 max-[700px]:pb-16 pb-24 md:pb-32 bg-gradient-to-b from-background via-muted to-background overflow-hidden">
          <div className="container mx-auto max-[700px]:px-3 px-2 sm:px-4 lg:px-8 relative z-10 max-w-full">
            <div className="grid lg:grid-cols-2 max-[700px]:gap-6 gap-12 max-w-7xl mx-auto items-stretch">
              {/* Left: Contact Info Cards */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-[700px]:space-y-4 space-y-6 contact-info-section"
              >
                <h2 className="max-[700px]:text-[32px] max-[700px]:mb-4 text-4xl md:text-[60px] font-bold mb-8 text-foreground">
                  Contact Information
                </h2>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-card rounded-2xl max-[700px]:p-3 p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-saffron/50 overflow-hidden">
                      <div className="flex items-start max-[700px]:gap-2 gap-3 sm:gap-4 min-w-0">
                        <div className={`max-[700px]:w-8 max-[700px]:h-8 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <info.icon className="max-[700px]:w-4 max-[700px]:h-4 w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0 overflow-hidden">
                          <h3 className="max-[700px]:text-lg text-2xl md:text-[25px] font-bold mb-1 sm:mb-2 text-foreground break-words">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="max-[700px]:text-[18px] text-xl md:text-[22px] text-muted-foreground break-words">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Right: Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="bg-card rounded-2xl sm:rounded-3xl max-[700px]:p-3 p-4 sm:p-6 md:p-8 lg:p-10 shadow-xl border border-border/50 overflow-hidden">
                  <h3 className="max-[700px]:text-[32px] text-4xl md:text-[60px] font-bold max-[700px]:mb-3 mb-4 sm:mb-6 text-foreground break-words">
                    Send Us a Message
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-3 max-[700px]:space-y-3 sm:space-y-6">
                    <div>
                      <label htmlFor="name" className="block max-[700px]:text-base text-xl md:text-[22px] font-semibold mb-1 sm:mb-2 text-foreground break-words">
                        Your Name <span className="text-saffron">*</span>
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="max-[700px]:text-base max-[700px]:h-10 text-xl md:text-[22px] border-border/50 focus:border-saffron focus:ring-saffron/20 h-12 sm:h-14 w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block max-[700px]:text-base text-xl md:text-[22px] font-semibold mb-1 sm:mb-2 text-foreground break-words">
                        Email Address <span className="text-saffron">*</span>
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="max-[700px]:text-base max-[700px]:h-10 text-xl md:text-[22px] border-border/50 focus:border-saffron focus:ring-saffron/20 h-12 sm:h-14 w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block max-[700px]:text-base text-xl md:text-[22px] font-semibold mb-1 sm:mb-2 text-foreground break-words">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="max-[700px]:text-base max-[700px]:h-10 text-xl md:text-[22px] border-border/50 focus:border-saffron focus:ring-saffron/20 h-12 sm:h-14 w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block max-[700px]:text-base text-xl md:text-[22px] font-semibold mb-1 sm:mb-2 text-foreground break-words">
                        Your Message <span className="text-saffron">*</span>
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your inquiry or how we can help..."
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="max-[700px]:text-base max-[700px]:min-h-[100px] text-xl md:text-[22px] border-border/50 focus:border-saffron focus:ring-saffron/20 resize-none min-h-[120px] sm:min-h-[140px] w-full"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-saffron to-gold hover:from-saffron/90 hover:to-gold/90 text-white max-[700px]:text-base max-[700px]:py-4 text-xl md:text-[22px] font-semibold shadow-lg hover:shadow-xl transition-all duration-300 py-6 sm:py-8"
                    >
                      <Send className="max-[700px]:w-4 max-[700px]:h-4 w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </div>
              </motion.div>
            </div>

            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-[700px]:mt-8 mt-16"
            >
              <div className="bg-card rounded-3xl max-[700px]:p-3 p-4 md:p-6 shadow-xl border border-border/50 overflow-hidden">
                <h3 className="max-[700px]:text-[32px] max-[700px]:mb-3 text-4xl md:text-[60px] font-bold mb-4 md:mb-6 text-foreground break-words">
                  Find Us on Map
                </h3>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-border/50 min-w-0">
                  <iframe
                    src="https://www.google.com/maps?q=Gautam+pada+chauraha+Near+gaudiya+math+temple+Vrindavan+Uttar+Pradesh+India&output=embed"
                    width="100%"
                    height="400"
                    style={{ border: 0, minHeight: '250px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full max-[700px]:h-[250px]"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
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

