"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Moon, Sun, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Temples", href: "#temples" },
  { label: "Saints", href: "#saints" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
]

export default function Navigation() {
  const router = useRouter()
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    // Only track scroll for active sections if we're on the home page
    if (pathname !== '/') return
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // If at the top of the page, set home as active
      if (window.scrollY < 100) {
        setActiveSection('home')
        return
      }
      
      // Update active section based on scroll position (only for hash links)
      const sections = navItems
        .filter(item => item.href.startsWith('#'))
        .map(item => item.href.replace('#', ''))
      
      let foundSection = false
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            foundSection = true
            break
          }
        }
      }
      
      // If no section is in view and we're scrolled, keep the last active section
      // or set to home if we're near the top
      if (!foundSection && window.scrollY < 200) {
        setActiveSection('home')
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  // Handle hash navigation when arriving at home page with hash
  useEffect(() => {
    if (pathname === '/' && typeof window !== 'undefined') {
      const hash = window.location.hash
      if (hash) {
        // Wait for page to render, then scroll to section
        setTimeout(() => {
          const element = document.querySelector(hash)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            // Update active section
            const sectionId = hash.replace('#', '')
            setActiveSection(sectionId)
          }
        }, 100)
      } else {
        // If no hash, set home as active
        setActiveSection('home')
      }
    } else {
      // If not on home page, clear active section
      setActiveSection('')
    }
  }, [pathname])

  const scrollToSection = (href: string) => {
    // If it's a page route (starts with /), navigate using Next.js router
    if (href.startsWith('/')) {
      router.push(href)
      setMobileOpen(false)
      return
    }
    // Otherwise, it's a hash link - navigate to home first if not already there
    if (pathname !== '/') {
      router.push(`/${href}`)
      setMobileOpen(false)
      return
    }
    // If already on home page, scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-border/50" 
          : "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6 xl:px-8 py-4 md:py-6">
        <div className="flex items-center justify-between gap-2 md:gap-3 xl:gap-4">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("#home")
            }}
            className="flex items-center gap-1 md:gap-1.5 xl:gap-2 group flex-shrink-0 min-w-0"
          >
            <div className="relative w-12 h-12 md:w-20 md:h-20 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Vrindavan Live Logo"
                fill
                className="object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[22px] sm:text-xl md:text-[24px] lg:text-[26px] xl:text-[28px] font-bold bg-gradient-to-r from-saffron via-gold to-peacock bg-clip-text text-transparent whitespace-nowrap">
                Vrindavan Live
              </span>
              <span className={`hidden sm:block text-[10px] md:text-xs lg:text-sm tracking-widest ${
                scrolled ? "text-muted-foreground" : "text-foreground/70"
              }`}>
                Experience Krishna's Divine Abode
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0 lg:gap-0.5 xl:gap-1 flex-shrink-0 min-w-0">
            {navItems.map((item) => {
              const sectionId = item.href.startsWith('#') ? item.href.replace('#', '') : ''
              // Check if active: 
              // - For Home ("/"), only active if on home page AND at top (activeSection is 'home' or empty)
              // - For hash links, only active if on home page AND scroll position matches
              // - For other page routes, active if pathname matches
              let isActive = false
              if (item.href === '/') {
                // Home is only active when on home page and at the top
                isActive = pathname === '/' && (activeSection === 'home' || activeSection === '')
              } else if (item.href.startsWith('#')) {
                // Hash links are active when on home page and scroll position matches
                isActive = pathname === '/' && activeSection === sectionId
              } else {
                // Page routes are active when pathname matches
                isActive = pathname === item.href
              }
              
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  className={`relative px-1.5 lg:px-2 xl:px-3 2xl:px-4 py-2 text-sm lg:text-[14px] xl:text-[16px] 2xl:text-[18px] font-semibold transition-colors duration-300 rounded-lg whitespace-nowrap ${
                    isActive 
                      ? "text-saffron" 
                      : "text-foreground hover:text-saffron"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-saffron to-gold rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              )
            })}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-1.5 md:gap-2 xl:gap-3 flex-shrink-0">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="rounded-full hover:bg-muted text-foreground"
            >
              <AnimatePresence mode="wait">
                {darkMode ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-5 h-5 md:w-6 lg:w-7 xl:w-8 text-gold" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="w-5 h-5 md:w-6 lg:w-7 xl:w-8 text-peacock" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>

            <Button
              size="sm"
              variant="outline"
              className="hidden md:inline-flex border-2 border-saffron text-saffron hover:bg-saffron hover:text-white font-bold transition-all duration-300 text-xs lg:text-sm xl:text-base 2xl:text-lg px-2.5 lg:px-3 xl:px-5 2xl:px-6 py-1.5 lg:py-2 xl:py-3 2xl:py-4 rounded-full whitespace-nowrap"
            >
              Get Started
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden rounded-full hover:bg-muted text-foreground"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X className="w-6 h-6 md:w-8 md:h-8" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu className="w-6 h-6 md:w-8 md:h-8" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white dark:bg-gray-900 border-t border-border/50"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
              {navItems.map((item, index) => {
                const sectionId = item.href.startsWith('#') ? item.href.replace('#', '') : ''
                // Check if active: 
                // - For Home ("/"), only active if on home page AND at top (activeSection is 'home' or empty)
                // - For hash links, only active if on home page AND scroll position matches
                // - For other page routes, active if pathname matches
                let isActive = false
                if (item.href === '/') {
                  // Home is only active when on home page and at the top
                  isActive = pathname === '/' && (activeSection === 'home' || activeSection === '')
                } else if (item.href.startsWith('#')) {
                  // Hash links are active when on home page and scroll position matches
                  isActive = pathname === '/' && activeSection === sectionId
                } else {
                  // Page routes are active when pathname matches
                  isActive = pathname === item.href
                }
                
                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(item.href)
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`text-xl md:text-2xl font-semibold transition-colors py-2 px-4 rounded-lg ${
                      isActive 
                        ? "text-saffron bg-saffron/10" 
                        : "hover:text-saffron hover:bg-muted"
                    }`}
                  >
                    {item.label}
                  </motion.a>
                )
              })}
              <Button
                size="lg"
                className="mt-4 bg-gradient-to-r from-saffron to-gold hover:from-saffron/90 hover:to-gold/90 text-white font-semibold w-full"
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}