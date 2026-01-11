'use client'

import { motion } from 'framer-motion'

export default function StorySection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20" style={{ background: 'transparent' }}>
      <motion.div
        className="max-w-2xl w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="glassmorphism rounded-3xl p-8 md:p-12 shadow-2xl">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-romantic-pink-600 mb-4 text-glow">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-gradient-romantic mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            className="text-lg md:text-xl text-gray-700 leading-relaxed text-center italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p className="mb-6">
              Since the day we met,
            </p>
            <p className="mb-6">
              every day became brighter...
            </p>
            <p className="text-romantic-pink-500 font-semibold">
              Like the sky meeting ice crystals,
            </p>
            <p className="text-sky-blue-500 font-semibold">
              creating something beautiful and magical ✨
            </p>
          </motion.div>

          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="text-4xl">💕</div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

