'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const message = `To my Kaning...

Thank you for coming into my life and making every day brighter. Your smile is like the morning sky, and your love is as pure as ice crystals.

I'm grateful for every moment we share together. Happy 1 month anniversary, my love! 💕`

export default function MessageSection() {
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (!isTyping) return

    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex < message.length) {
        setDisplayedText(message.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        setIsTyping(false)
        clearInterval(typingInterval)
      }
    }, 50)

    return () => clearInterval(typingInterval)
  }, [isTyping])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-sky">
      <motion.div
        className="max-w-2xl w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="glassmorphism rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-romantic-pink-300 relative overflow-hidden"
          animate={{
            boxShadow: [
              '0 0 20px rgba(236, 72, 153, 0.3)',
              '0 0 40px rgba(236, 72, 153, 0.5)',
              '0 0 20px rgba(236, 72, 153, 0.3)',
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {/* Glowing border effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-romantic opacity-20 blur-xl -z-10" />

          <motion.h2
            className="text-2xl md:text-3xl font-bold text-romantic-pink-600 mb-6 text-center text-glow"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            A Message from Sky
          </motion.h2>

          <motion.div
            className="text-lg md:text-xl text-gray-700 leading-relaxed whitespace-pre-line"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {displayedText}
            {isTyping && (
              <motion.span
                className="inline-block w-0.5 h-6 bg-romantic-pink-500 ml-1"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            )}
          </motion.div>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          >
            <div className="text-4xl">💌</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

