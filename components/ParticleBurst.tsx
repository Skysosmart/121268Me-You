'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Particle {
  id: number
  angle: number
  distance: number
  duration: number
  delay: number
}

export default function ParticleBurst({ trigger }: { trigger: boolean }) {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    if (trigger) {
      // Generate 30 particles with random angles and distances
      const newParticles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        angle: (360 / 30) * i + Math.random() * 10, // Spread evenly with slight randomness
        distance: 100 + Math.random() * 150, // Random distance
        duration: 0.8 + Math.random() * 0.4, // Random duration
        delay: Math.random() * 0.2, // Slight delay variation
      }))
      setParticles(newParticles)

      // Reset after animation
      setTimeout(() => {
        setParticles([])
      }, 2000)
    }
  }, [trigger])

  if (!trigger || particles.length === 0) return null

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => {
        const radians = (particle.angle * Math.PI) / 180
        const x = Math.cos(radians) * particle.distance
        const y = Math.sin(radians) * particle.distance

        return (
          <motion.div
            key={particle.id}
            className="absolute top-1/2 left-1/2 w-1 h-12 bg-gradient-to-b from-romantic-pink-400 to-sky-blue-400 rounded-full opacity-80"
            style={{
              transformOrigin: 'center bottom',
            }}
            initial={{
              x: 0,
              y: 0,
              opacity: 1,
              scale: 1,
              rotate: particle.angle,
            }}
            animate={{
              x,
              y,
              opacity: [1, 0.8, 0],
              scale: [1, 1.2, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              ease: 'easeOut',
            }}
          />
        )
      })}
    </div>
  )
}

