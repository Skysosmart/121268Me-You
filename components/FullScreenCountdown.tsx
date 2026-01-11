'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds, isAfter } from 'date-fns'

const targetDate = new Date('2026-01-12T00:00:00') // 12 January 2026

interface FullScreenCountdownProps {
  onCountdownComplete?: () => void
}

export default function FullScreenCountdown({ onCountdownComplete }: FullScreenCountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      
      // Check if we've passed the target date
      if (isAfter(now, targetDate)) {
        setIsComplete(true)
        if (onCountdownComplete) {
          onCountdownComplete()
        }
        return
      }

      const days = Math.max(0, differenceInDays(targetDate, now))
      const hours = Math.max(0, differenceInHours(targetDate, now) % 24)
      const minutes = Math.max(0, differenceInMinutes(targetDate, now) % 60)
      const seconds = Math.max(0, differenceInSeconds(targetDate, now) % 60)

      setTimeLeft({ days, hours, minutes, seconds })
    }

    calculateTimeLeft()
    const interval = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(interval)
  }, [onCountdownComplete])

  // If countdown is complete, don't show this component
  if (isComplete) {
    return null
  }

  return (
    <div 
      className="fixed inset-0 z-[9998] flex items-center justify-center bg-gradient-romantic"
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
      
      <motion.div
        className="relative z-10 text-center px-4 w-full max-w-6xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 text-glow"
          animate={{ 
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          Countdown to Our Anniversary
        </motion.h1>

        <motion.p
          className="text-2xl md:text-3xl text-white/90 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          12 January 2026
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-8">
          <CountdownBox value={timeLeft.days} label="Days" />
          <CountdownBox value={timeLeft.hours} label="Hours" />
          <CountdownBox value={timeLeft.minutes} label="Minutes" />
          <CountdownBox value={timeLeft.seconds} label="Seconds" />
        </div>

        <motion.div
          className="text-6xl"
          animate={{ 
            rotate: [0, 10, -10, 0],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          ⏰
        </motion.div>
      </motion.div>
    </div>
  )
}

const CountdownBox = ({ value, label }: { value: number; label: string }) => (
  <motion.div
    className="glassmorphism rounded-3xl p-6 md:p-10 text-center shadow-2xl border-2 border-white/30"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <motion.div
      className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-3"
      key={value}
      initial={{ scale: 1.2, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {value.toString().padStart(2, '0')}
    </motion.div>
    <div className="text-lg md:text-xl text-white/80 uppercase tracking-wider font-semibold">
      {label}
    </div>
  </motion.div>
)

