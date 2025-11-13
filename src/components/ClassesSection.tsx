"use client"

import { motion } from "framer-motion"
import { Clock, Users, Activity } from "lucide-react"
import Image from "next/image"

const classes = [
  { 
    name: "HIIT Training", 
    time: "Mon, Wed, Fri - 10:00 AM",
    duration: "45 min",
    spots: 8, 
    intensity: 95,
    description: "High-intensity interval training for maximum calorie burn",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/47c11136-e311-4eb8-8769-db09d7b04b88/generated_images/dynamic-group-fitness-class-in-bright-mo-9b41468d-20250930140807.jpg?"
  },
  { 
    name: "Yoga Flow", 
    time: "Tue, Thu - 11:30 AM",
    duration: "60 min",
    spots: 12, 
    intensity: 45,
    description: "Mindful movement to build strength and flexibility",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/47c11136-e311-4eb8-8769-db09d7b04b88/generated_images/yoga-and-wellness-studio-in-bright-moder-c856f514-20250930140847.jpg?"
  },
  { 
    name: "Spin Cycle", 
    time: "Mon, Wed, Fri - 2:00 PM",
    duration: "50 min",
    spots: 5, 
    intensity: 88,
    description: "Energetic cycling workouts with motivating instructors",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/47c11136-e311-4eb8-8769-db09d7b04b88/generated_images/modern-gym-equipment-zone-with-sleek-mac-ae1122e9-20250930140822.jpg?"
  },
  { 
    name: "CrossFit", 
    time: "Tue, Thu, Sat - 4:30 PM",
    duration: "55 min",
    spots: 3, 
    intensity: 98,
    description: "Functional fitness combining strength and conditioning",
    image: "https://v3.fal.media/files/zebra/XhixZ8DEkgArvu5Z_GcZ6_output.png"
  },
]

export default function ClassesSection() {
  return (
    <section id="classes" className="relative py-32 px-8 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-red-600">Classes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our expert-led classes designed for all fitness levels
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {classes.map((cls, index) => (
            <motion.div
              key={cls.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-red-500 hover:shadow-2xl hover:shadow-red-500/10 transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={cls.image}
                  alt={cls.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-3xl font-bold text-white mb-1">{cls.name}</h3>
                </div>
              </div>

              <div className="p-8">
                <p className="text-gray-600 mb-6">{cls.description}</p>
                
                <div className="flex items-center gap-6 text-sm text-gray-700 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-red-600" />
                    <span>{cls.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-red-600" />
                    <span>{cls.spots} spots left</span>
                  </div>
                </div>

                <div className="text-gray-700 text-sm mb-6">{cls.time}</div>
                
                {/* Intensity Bar */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-gray-700 text-sm font-semibold">
                      <Activity className="w-4 h-4 text-red-600" />
                      <span>Intensity</span>
                    </div>
                    <span className="text-gray-700 text-sm font-bold">{cls.intensity}%</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${cls.intensity}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      className="h-full bg-gradient-to-r from-red-600 to-red-500 rounded-full"
                    />
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-red-500/30 transition-all"
                >
                  Book Class
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}