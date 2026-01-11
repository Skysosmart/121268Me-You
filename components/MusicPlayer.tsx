'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(true) // Start playing by default
  const [isVisible, setIsVisible] = useState(true)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3
      // Try to autoplay on mount
      const tryAutoplay = async () => {
        try {
          await audioRef.current?.play()
          setIsPlaying(true)
        } catch (error) {
          // Autoplay blocked, user will need to interact
          setIsPlaying(false)
        }
      }
      tryAutoplay()
    }
  }, [])

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => {
          setIsPlaying(false)
        })
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying])

  const toggleMusic = () => {
    setIsPlaying(!isPlaying)
    // Try to enable audio if it was blocked
    if (audioRef.current && !isPlaying) {
      audioRef.current.play().catch(() => {
        console.log('Audio play was blocked')
      })
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        autoPlay
        muted={false}
      >
        {/* Love Story - Taylor Swift (Lo-fi) */}
        {/* Place your "love-story-lofi.mp3" file in the /public folder */}
        <source src="/love-story-lofi.mp3" type="audio/mpeg" />
        {/* Fallback: If you have the file with a different name, update the path above */}
        {/* Alternative: Use an external URL if hosting elsewhere */}
        {/* <source src="https://your-cdn.com/love-story-lofi.mp3" type="audio/mpeg" /> */}
      </audio>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed bottom-6 right-6 z-50"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              onClick={toggleMusic}
              className="w-14 h-14 rounded-full bg-gradient-romantic shadow-2xl flex items-center justify-center text-2xl hover:shadow-romantic-pink-300/50 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                rotate: isPlaying ? [0, 10, -10, 0] : 0,
              }}
              transition={{
                rotate: {
                  duration: 2,
                  repeat: isPlaying ? Infinity : 0,
                  ease: 'easeInOut',
                },
              }}
            >
              {isPlaying ? '🎵' : '🔇'}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

