'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns'

const targetDate = new Date('2026-01-12T00:00:00')

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const days = differenceInDays(targetDate, now)
      const hours = differenceInHours(targetDate, now) % 24
      const minutes = differenceInMinutes(targetDate, now) % 60
      const seconds = differenceInSeconds(targetDate, now) % 60

      setTimeLeft({ days, hours, minutes, seconds })
    }

    calculateTimeLeft()
    const interval = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(interval)
  }, [])

  const CountdownBox = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      className="glassmorphism rounded-2xl p-6 md:p-8 text-center shadow-xl romantic-glow border border-romantic-pink-200/50"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="text-4xl md:text-6xl font-bold text-romantic-pink-600 mb-2"
        key={value}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {value.toString().padStart(2, '0')}
      </motion.div>
      <div className="text-sm md:text-base text-gray-600 uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  )

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20" style={{ background: 'transparent' }}>
      <motion.div
        className="w-full max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-romantic-pink-600 mb-4 text-glow"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Countdown to Our Anniversary
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 mb-12 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          12 January 2026
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <CountdownBox value={timeLeft.days} label="Days" />
          <CountdownBox value={timeLeft.hours} label="Hours" />
          <CountdownBox value={timeLeft.minutes} label="Minutes" />
          <CountdownBox value={timeLeft.seconds} label="Seconds" />
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-4xl">⏰</div>
        </motion.div>
      </motion.div>
    </section>
  )
}

