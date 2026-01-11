'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'

interface FloatingImage {
  id: string
  src: string
  x: number // percentage
  y: number // percentage
  size: number // width in pixels
  rotation: number // degrees
  delay: number // animation delay in seconds
  duration: number // animation duration in seconds
  opacity: number
}

interface FloatingBackgroundProps {
  images: string[]
  imageCount?: number // Number of images to display (default: all)
  minSize?: number // Minimum image size in pixels
  maxSize?: number // Maximum image size in pixels
}

export default function FloatingBackground({
  images,
  imageCount,
  minSize = 120,
  maxSize = 200,
}: FloatingBackgroundProps) {
  const [floatingImages, setFloatingImages] = useState<FloatingImage[]>([])
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 })

  // Calculate random positions and properties for images
  const generateFloatingImages = useMemo(() => {
    const count = imageCount || images.length
    const selectedImages = images.slice(0, count)
    
    return selectedImages.map((src, index) => {
      // Random position (with padding from edges)
      const x = 5 + Math.random() * 90 // 5% to 95%
      const y = 5 + Math.random() * 90 // 5% to 95%
      
      // Random size
      const size = minSize + Math.random() * (maxSize - minSize)
      
      // Random rotation (-4° to +4°)
      const rotation = -4 + Math.random() * 8
      
      // Random animation delay (0 to 2s)
      const delay = Math.random() * 2
      
      // Random duration (6s to 10s)
      const duration = 6 + Math.random() * 4
      
      // Random opacity (0.6 to 0.85) - very visible
      const opacity = 0.6 + Math.random() * 0.25
      
      return {
        id: `floating-${index}-${src}`,
        src,
        x,
        y,
        size,
        rotation,
        delay,
        duration,
        opacity,
      }
    })
  }, [images, imageCount, minSize, maxSize])

  // Update viewport size on mount and resize
  useEffect(() => {
    const updateViewport = () => {
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateViewport()
    window.addEventListener('resize', updateViewport)
    return () => window.removeEventListener('resize', updateViewport)
  }, [])

  // Initialize floating images
  useEffect(() => {
    setFloatingImages(generateFloatingImages)
  }, [generateFloatingImages])

  // Don't render if no images
  if (floatingImages.length === 0) {
    return null
  }

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
      style={{ 
        zIndex: -1,
      }}
    >
      {/* Base gradient background - very light */}
      <div className="absolute inset-0 bg-gradient-to-br from-romantic-pink-100/20 via-sky-blue-50/10 to-romantic-pink-50/20" />
      
      {/* Floating images container - images should be visible and on top */}
      <div className="absolute inset-0" style={{ zIndex: 10 }}>
        {floatingImages.map((image) => (
          <FloatingImageItem key={image.id} image={image} />
        ))}
      </div>
      
      {/* Very light blur overlay - behind images */}
      <div className="absolute inset-0 backdrop-blur-[1px] opacity-20" style={{ zIndex: 5 }} />
      
      {/* Very light gradient overlay - behind images */}
      <div className="absolute inset-0 bg-gradient-to-br from-romantic-pink-200/5 via-sky-blue-100/3 to-romantic-pink-100/5" style={{ zIndex: 6 }} />
    </div>
  )
}

// Individual floating image component
function FloatingImageItem({ image }: { image: FloatingImage }) {
  const [loaded, setLoaded] = useState(false)

  // Floating animation - smooth up/down and left/right drift
  const floatingAnimation = {
    y: [-10, 10, -10],
    x: [-5, 5, -5],
    transition: {
      duration: image.duration,
      delay: image.delay,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  }

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${image.x}%`,
        top: `${image.y}%`,
        width: `${image.size}px`,
        transform: `translate(-50%, -50%) rotate(${image.rotation}deg)`,
        willChange: 'transform, opacity', // GPU acceleration hint
      }}
      animate={{
        ...floatingAnimation,
        opacity: image.opacity,
        scale: 1,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      transition={{
        opacity: { duration: 0.8, ease: 'easeOut' },
        scale: { duration: 0.8, ease: 'easeOut' },
        ...floatingAnimation.transition,
      }}
    >
      {/* Polaroid style frame */}
      <div className="relative w-full h-auto bg-white p-1.5 shadow-xl rounded-sm border border-white/80">
        {/* Image container */}
        <div className="relative w-full aspect-square overflow-hidden bg-gradient-to-br from-romantic-pink-50 to-sky-blue-50">
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-romantic-pink-300/50 border-t-transparent rounded-full animate-spin opacity-40" />
            </div>
          )}
          
          <img
            src={image.src}
            alt=""
            className={`w-full h-full object-cover transition-opacity duration-700 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            draggable={false}
            style={{ 
              willChange: 'opacity',
              transform: 'translateZ(0)', // GPU acceleration
            }}
          />
        </div>
        
        {/* Polaroid bottom border effect */}
        <div className="h-0.5 bg-white/90 mt-0.5" />
      </div>
    </motion.div>
  )
}

// Hook to get background images from the backgrounds folder
export function useFloatingBackgroundImages() {
  // Return images directly - only JPG/PNG (exclude HEIC which can cause build issues)
  const allPhotos = [
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
    // Excluded HEIC files: IMG_3029.HEIC, IMG_3481.HEIC (can cause build crashes)
  ]

  return allPhotos
}

