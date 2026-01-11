'use client'

import { useState, useEffect } from 'react'

// This component manages background photos
// Photos should be placed in /public/backgrounds/ folder

// List of possible background images (in order of preference)
const BACKGROUND_IMAGES = [
  '/backgrounds/IMG_3285.JPG',      // Try this first
  '/backgrounds/IMG_3287.JPG',     // Second option
  '/backgrounds/IMG_3273.JPG',     // Third option
  '/backgrounds/IMG_3116.JPG',     // Fourth option
  '/backgrounds/IMG_3115.JPG',     // Fifth option
  '/backgrounds/IMG_3111.JPG',     // Sixth option
  '/backgrounds/IMG_3108.JPG',     // Seventh option
  '/backgrounds/IMG_3103.JPG',     // Eighth option
  '/backgrounds/IMG_3093.JPG',     // Ninth option
  '/backgrounds/IMG_2428.JPG',     // Tenth option
  '/backgrounds/couple-background.jpg', // Fallback name
]

export function useBackgroundPhoto() {
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null)

  useEffect(() => {
    // Check multiple possible background images
    const checkBackground = () => {
      let currentIndex = 0

      const tryNextImage = () => {
        if (currentIndex >= BACKGROUND_IMAGES.length) {
          // No images found, use default gradient
          setBackgroundImage(null)
          return
        }

        const img = new Image()
        const imagePath = BACKGROUND_IMAGES[currentIndex]
        
        img.onload = () => {
          // Image exists, use it
          setBackgroundImage(imagePath)
        }
        
        img.onerror = () => {
          // Image doesn't exist, try next one
          currentIndex++
          tryNextImage()
        }
        
        // Start loading the image
        img.src = imagePath
      }

      tryNextImage()
    }

    checkBackground()
  }, [])

  return backgroundImage
}

// Helper function to get background image URL
export function getBackgroundImageUrl(): string | null {
  // Returns the first available image from the list
  return BACKGROUND_IMAGES[0]
}

