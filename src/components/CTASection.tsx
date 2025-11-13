"use client"

import { motion } from "framer-motion"
import { ArrowRight, Eye } from "lucide-react"

export default function CTASection() {
  return (
    <section id="contact" className="relative py-32 px-8 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-block px-6 py-3 bg-red-100 text-red-600 rounded-full text-lg font-bold mb-8"
          >
            🎉 Limited Time Offer - 50% Off First Month
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Ready to Transform<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
              Your Fitness Journey?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Join thousands of members who are already experiencing the future of fitness
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-10 py-5 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold text-xl rounded-xl shadow-2xl shadow-red-500/40 hover:shadow-red-500/60 transition-all flex items-center gap-3"
            >
              Start Free Trial
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white border-2 border-gray-300 text-gray-900 font-bold text-xl rounded-xl hover:border-red-600 hover:bg-red-50 transition-all flex items-center gap-3"
            >
              <Eye className="w-6 h-6" />
              Virtual Tour
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 text-gray-500 text-sm"
          >
            No credit card required • Cancel anytime • 30-day money-back guarantee
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}