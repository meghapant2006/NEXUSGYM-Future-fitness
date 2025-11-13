"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function Hero3DSection() {
  const [imageError, setImageError] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)

  const heroImages = [
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  ]

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      <div className="absolute inset-0">
        {/* Background Image with Fallbacks */}
        {!imageError ? (
          <Image
            src={heroImages[0]}
            alt="Modern Gym Interior with State-of-the-art Equipment"
            fill
            className="object-cover"
            priority
            onError={() => setImageError(true)}
            onLoad={() => setImageLoading(false)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black">
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-600/30 via-gray-900 to-black"></div>
            </div>
          </div>
        )}
        
        {/* Loading State */}
        {imageLoading && !imageError && (
          <div className="absolute inset-0 bg-gray-900 animate-pulse">
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900"></div>
          </div>
        )}
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/40" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 pb-16">
        {/* Main Content - Positioned at Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-6 py-3 bg-red-900/80 backdrop-blur-sm text-red-300 rounded-full text-lg md:text-xl font-bold mb-6 border border-red-700/50"
          >
             Transform Your Body Today
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl xl:text-10xl font-black text-white mb-6 leading-tight">
            BUILD YOUR 
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
              BEST SELF
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Join the most advanced fitness facility with state-of-the-art equipment, expert trainers, and a community that motivates you to succeed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold text-lg rounded-xl shadow-xl shadow-red-500/30 hover:shadow-2xl hover:shadow-red-500/40 transition-all flex items-center justify-center gap-3"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-black/40 backdrop-blur-sm border-2 border-white/50 text-white font-bold text-lg rounded-xl hover:bg-black/60 hover:border-white/70 transition-all flex items-center justify-center gap-3"
            >
              <Play className="w-5 h-5" />
              Watch Tour
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-8"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">2,500+</div>
              <div className="text-white/80">Active Members</div>
            </div>
            <div className="w-px h-12 bg-white/30 hidden sm:block" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">50+</div>
              <div className="text-white/80">Expert Trainers</div>
            </div>
            <div className="w-px h-12 bg-white/30 hidden sm:block" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">4.9★</div>
              <div className="text-white/80">Rating</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}