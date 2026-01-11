'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// List of all background photos
const ALL_PHOTOS = [
  '/backgrounds/IMG_3285.JPG',
  '/backgrounds/IMG_3287.JPG',
  '/backgrounds/IMG_3273.JPG',
  '/backgrounds/IMG_3116.JPG',
  '/backgrounds/IMG_3115.JPG',
  '/backgrounds/IMG_3111.JPG',
  '/backgrounds/IMG_3120.JPG',
  '/backgrounds/IMG_3122.JPG',
  '/backgrounds/IMG_3108.JPG',
  '/backgrounds/IMG_3110.JPG',
  '/backgrounds/IMG_3103.JPG',
  '/backgrounds/IMG_3093.JPG',
  '/backgrounds/IMG_3398.JPG',
  '/backgrounds/IMG_2428.JPG',
  '/backgrounds/IMG_2208.JPG',
  '/backgrounds/IMG_3644.JPG',
  '/backgrounds/IMG_3645.JPG',
  '/backgrounds/IMG_3646.JPG',
  '/backgrounds/IMG_3648.JPG',
  '/backgrounds/IMG_3649.JPG',
  '/backgrounds/IMG_3650.JPG',
  '/backgrounds/IMG_3651.JPG',
  '/backgrounds/IMG_3741.JPG',
  '/backgrounds/IMG_3777.JPG',
  '/backgrounds/IMG_3814.JPG',
  '/backgrounds/IMG_3816.JPG',
  '/backgrounds/IMG_5623.JPG',
  '/backgrounds/IMG_5652.JPG',
  '/backgrounds/IMG_5759.JPG',
  '/backgrounds/46857974-B508-45F5-9B1D-74AF02FFBB5C.png',
]

export default function AnimatedPhotoGallery() {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())

  const handleImageLoad = (src: string) => {
    setLoadedImages((prev) => new Set(prev).add(src))
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.7,
      y: 60,
      rotate: -5,
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-sky">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-romantic-pink-600 mb-4 text-glow"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Beautiful Memories
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 mb-12 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Every moment with you is a treasure 💕
        </motion.p>

        <AnimatePresence mode="popLayout">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {ALL_PHOTOS.map((photoSrc, index) => (
              <motion.div
                key={photoSrc}
                variants={itemVariants}
                layout
                className="relative group cursor-pointer"
                whileHover={{ 
                  scale: 1.08, 
                  zIndex: 10,
                  rotate: 2,
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                {/* Photo container with padding effect */}
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-romantic-pink-200 to-sky-blue-200 p-2">
                  {/* Loading placeholder */}
                  {!loadedImages.has(photoSrc) && (
                    <motion.div
                      className="absolute inset-2 flex items-center justify-center bg-gradient-to-br from-romantic-pink-100 to-sky-blue-100 rounded-2xl"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="w-12 h-12 border-4 border-romantic-pink-400 border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      />
                    </motion.div>
                  )}
                  
                  {/* Actual photo */}
                  <motion.img
                    src={photoSrc}
                    alt={`Our memory ${index + 1}`}
                    className={`w-full h-full object-cover rounded-2xl transition-all duration-500 ${
                      loadedImages.has(photoSrc) ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => handleImageLoad(photoSrc)}
                    loading="lazy"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Gradient overlay on hover */}
                  <motion.div
                    className="absolute inset-2 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />

                  {/* Heart icon on hover */}
                  <motion.div
                    className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    initial={{ y: 20, scale: 0.8 }}
                    whileHover={{ y: 0, scale: 1.1 }}
                  >
                    ❤️
                  </motion.div>

                  {/* Photo number badge */}
                  <motion.div
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold text-romantic-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {index + 1}
                  </motion.div>
                </div>

                {/* Sparkle effect on hover */}
                <motion.div
                  className="absolute -top-3 -right-3 text-3xl opacity-0 group-hover:opacity-100 pointer-events-none"
                  animate={{
                    rotate: [0, 180, 360],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  ✨
                </motion.div>

                {/* Floating hearts on hover */}
                <AnimatePresence>
                  {loadedImages.has(photoSrc) && (
                    <motion.div
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
                      initial={{ y: 0, opacity: 0 }}
                      animate={{ 
                        y: [-10, -20, -30],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                    >
                      💕
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {loadedImages.size > 0 && (
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p className="text-gray-600 text-lg">
              {loadedImages.size} beautiful memories 💕
            </p>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}

