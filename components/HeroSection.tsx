'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import ParticleBurst from './ParticleBurst'

export default function HeroSection() {
  const [showPopup, setShowPopup] = useState(false)
  const [triggerParticles, setTriggerParticles] = useState(false)

  useEffect(() => {
    // Show popup after a short delay
    const timer = setTimeout(() => {
      setShowPopup(true)
      setTriggerParticles(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section 
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
      style={{ background: 'transparent' }}
    >
      {/* Particle Burst Effect */}
      <ParticleBurst trigger={triggerParticles} />

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <AnimatePresence>
          {showPopup && (
            <motion.div
              initial={{ scale: 0, opacity: 0, rotate: -180 }}
              animate={{ 
                scale: 1, 
                opacity: 1, 
                rotate: 0,
                y: [0, -10, 0],
              }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ 
                type: 'spring',
                stiffness: 200,
                damping: 15,
                y: {
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
              className="relative mb-6"
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-romantic-pink-600 text-glow relative z-10"
                style={{
                  textShadow: '0 0 20px rgba(236, 72, 153, 0.6), 0 0 40px rgba(236, 72, 153, 0.4), 0 0 60px rgba(236, 72, 153, 0.2)',
                }}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                Happy 1 Month Anniversary
              </motion.h1>
              
              {/* Glow effect behind text */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-romantic-pink-400/30 via-sky-blue-400/30 to-romantic-pink-400/30 blur-3xl -z-10"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

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

