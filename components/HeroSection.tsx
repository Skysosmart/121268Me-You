'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useBackgroundPhoto } from '@/components/BackgroundPhotoManager'

const Heart = ({ delay, x, duration }: { delay: number; x: number; duration: number }) => (
  <motion.div
    className="absolute text-romantic-pink-400 text-2xl"
    initial={{ y: '100vh', x, opacity: 0 }}
    animate={{ y: '-10vh', opacity: [0, 1, 1, 0] }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: 'linear',
    }}
  >
    ❤️
  </motion.div>
)

const IceCrystal = ({ delay, x, duration }: { delay: number; x: number; duration: number }) => (
  <motion.div
    className="absolute w-3 h-3 bg-sky-blue-200 opacity-60"
    style={{
      clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
    }}
    initial={{ y: '100vh', x, opacity: 0, rotate: 0 }}
    animate={{ 
      y: '-10vh', 
      opacity: [0, 0.6, 0.6, 0],
      rotate: 360
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: 'linear',
    }}
  />
)

export default function HeroSection() {
  const [hearts, setHearts] = useState<Array<{ delay: number; x: number; duration: number }>>([])
  const [crystals, setCrystals] = useState<Array<{ delay: number; x: number; duration: number }>>([])
  const backgroundImage = useBackgroundPhoto()

  useEffect(() => {
    // Generate random hearts
    const heartArray = Array.from({ length: 15 }, () => ({
      delay: Math.random() * 5,
      x: Math.random() * 100,
      duration: 3 + Math.random() * 4,
    }))
    setHearts(heartArray)

    // Generate random crystals
    const crystalArray = Array.from({ length: 20 }, () => ({
      delay: Math.random() * 5,
      x: Math.random() * 100,
      duration: 4 + Math.random() * 5,
    }))
    setCrystals(crystalArray)
  }, [])

  return (
    <section 
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-gradient-romantic"
    >
      {/* Background removed - using FloatingBackground component instead */}
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {hearts.map((heart, i) => (
          <Heart key={`heart-${i}`} {...heart} />
        ))}
        {crystals.map((crystal, i) => (
          <IceCrystal key={`crystal-${i}`} {...crystal} />
        ))}
      </div>

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

