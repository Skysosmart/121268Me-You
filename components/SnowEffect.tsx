'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Snowflake {
  id: number
  left: number
  delay: number
  duration: number
  size: number
}

export default function SnowEffect() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([])

  useEffect(() => {
    const generateSnowflakes = () => {
      const flakes: Snowflake[] = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 10 + Math.random() * 10,
        size: 4 + Math.random() * 6,
      }))
      setSnowflakes(flakes)
    }

    generateSnowflakes()
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          className="absolute text-sky-blue-200 opacity-60"
          style={{
            left: `${flake.left}%`,
            fontSize: `${flake.size}px`,
          }}
          initial={{ y: -20, rotate: 0, opacity: 0 }}
          animate={{
            y: '100vh',
            rotate: 360,
            opacity: [0, 0.6, 0.6, 0],
          }}
          transition={{
            duration: flake.duration,
            delay: flake.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          ❄
        </motion.div>
      ))}
    </div>
  )
}

