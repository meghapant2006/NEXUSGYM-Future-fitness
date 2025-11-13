"use client"

import { motion } from "framer-motion"
import { Dumbbell, Menu } from "lucide-react"
import { useEffect, useState } from "react"

export default function GymHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState<string>("hero")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sectionIds = ["hero", "about", "programs", "membership", "gallery", "testimonials", "contact"]
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(id)
            }
          })
        },
        { root: null, threshold: 0.3 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => {
      observers.forEach((o) => o.disconnect())
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-[9999] w-full"
      style={{ position: 'fixed' }}
    >
      <div className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/98 backdrop-blur-xl border-b border-gray-700 shadow-lg' 
          : 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-700 shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
            onClick={() => scrollToSection("hero")}
          >
            <Dumbbell className="w-8 h-8 text-red-400" />
            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight">
                NEXUS<span className="text-red-400">GYM</span>
              </h1>
              <div className="text-xs text-gray-400 tracking-widest">FUTURE FITNESS</div>
            </div>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {[
              { name: "Home", id: "hero" },
              { name: "About", id: "about" },
              { name: "Programs", id: "programs" },
              { name: "Membership", id: "membership" },
              { name: "Gallery", id: "gallery" },
              { name: "Testimonials", id: "testimonials" },
              { name: "Contact", id: "contact" }
            ].map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-semibold tracking-wide transition-colors relative group ${
                  active === item.id ? "text-red-400" : "text-gray-300 hover:text-red-400"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
                <motion.div
                  className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-red-400 transition-transform origin-left ${
                    active === item.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </motion.button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("membership")}
              className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold text-sm rounded-lg shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 transition-all"
            >
              Join Now
            </motion.button>
            
            <button 
              className="md:hidden text-gray-300 hover:text-red-400 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-600 bg-gray-900"
          >
            <div className="px-8 py-4 space-y-3">
              {[
                { name: "Home", id: "hero" },
                { name: "About", id: "about" },
                { name: "Programs", id: "programs" },
                { name: "Membership", id: "membership" },
                { name: "Gallery", id: "gallery" },
                { name: "Testimonials", id: "testimonials" },
                { name: "Contact", id: "contact" }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2 font-semibold transition-colors ${
                    active === item.id ? "text-red-400" : "text-gray-300 hover:text-red-400"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("membership")}
                className="block w-full text-left bg-gradient-to-r from-red-600 to-red-500 text-white font-bold py-3 px-4 rounded-lg"
              >
                Join Now
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}