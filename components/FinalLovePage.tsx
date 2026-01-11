'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const FloatingHeart = ({ delay, x, duration }: { delay: number; x: number; duration: number }) => (
  <motion.div
    className="absolute text-romantic-pink-400 text-3xl md:text-4xl"
    initial={{ y: '100vh', x, opacity: 0, rotate: 0 }}
    animate={{ 
      y: '-10vh', 
      opacity: [0, 1, 1, 0],
      rotate: [0, 180, 360]
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: 'linear',
    }}
  >
    💕
  </motion.div>
)

export default function FinalLovePage() {
  const [hearts, setHearts] = useState<Array<{ delay: number; x: number; duration: number }>>([])

  useEffect(() => {
    const heartArray = Array.from({ length: 20 }, () => ({
      delay: Math.random() * 5,
      x: Math.random() * 100,
      duration: 4 + Math.random() * 4,
    }))
    setHearts(heartArray)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden" style={{ background: 'transparent' }}>
      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden">
        {hearts.map((heart, i) => (
          <FloatingHeart key={`heart-${i}`} {...heart} />
        ))}
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-romantic-pink-600 mb-8 romantic-text-glow"
          animate={{ 
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          I love you forever 💕
        </motion.h1>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.button
            onClick={scrollToTop}
            className="px-8 py-4 bg-gradient-romantic text-white text-lg md:text-xl font-semibold rounded-full shadow-2xl hover:shadow-romantic-pink-300/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ย้อนดูความทรงจำอีกครั้ง
          </motion.button>
        </motion.div>

        <motion.div
          className="mt-16 text-gray-600 text-sm md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p>Made with ❤️ for Sky & Kaning</p>
        </motion.div>
      </motion.div>
    </section>
  )
}

