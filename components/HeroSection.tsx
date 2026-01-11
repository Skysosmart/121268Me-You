'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {

  return (
    <section 
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
      style={{ background: 'transparent' }}
    >
      {/* Main content */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-romantic-pink-600 mb-6 text-glow"
          animate={{ 
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          Happy 1 Month Anniversary
        </motion.h1>

        <motion.div
          className="text-3xl md:text-4xl font-semibold text-sky-blue-600 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Sky ❤️ Kaning
        </motion.div>

        <motion.div
          className="text-xl md:text-2xl text-gray-700 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          12 January 2026
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-romantic-pink-500 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
        >
          Thank you for being my smile every day
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-romantic-pink-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-romantic-pink-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

