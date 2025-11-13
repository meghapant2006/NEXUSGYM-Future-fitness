"use client"

import { motion } from "framer-motion"
import { Zap, Target, Users, Award } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Zap,
    title: "Smart Equipment",
    description: "AI-powered machines that adapt to your fitness level and track your progress in real-time"
  },
  {
    icon: Target,
    title: "Personal Training",
    description: "Expert trainers dedicated to helping you achieve your fitness goals with customized plans"
  },
  {
    icon: Users,
    title: "Group Classes",
    description: "Dynamic classes from HIIT to Yoga, designed to keep you motivated and engaged"
  },
  {
    icon: Award,
    title: "Premium Facilities",
    description: "State-of-the-art equipment and amenities in a modern, comfortable environment"
  }
]

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-32 px-8 overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-red-600">Nexus Gym</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine cutting-edge technology with expert guidance to deliver unmatched fitness experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-gray-50 to-red-50 border-2 border-gray-200 rounded-2xl p-8 hover:border-red-500 hover:shadow-xl hover:shadow-red-500/10 transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-red-500/30">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}