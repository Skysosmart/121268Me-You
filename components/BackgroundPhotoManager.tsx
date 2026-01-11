'use client'

import { useState, useEffect } from 'react'

// This component manages background photos
// Photos should be placed in /public/backgrounds/ folder
// Default: couple-background.jpg

export function useBackgroundPhoto() {
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null)

  useEffect(() => {
    // Check if custom background photo exists
    // Place your photo at: /public/backgrounds/couple-background.jpg
    const checkBackground = () => {
      const img = new Image()
      const imagePath = '/backgrounds/couple-background.jpg'
      
      img.onload = () => {
        // Image exists, use it
        setBackgroundImage(imagePath)
      }
      
      img.onerror = () => {
        // Image doesn't exist, use default gradient (null = no background image)
        setBackgroundImage(null)
      }
      
      // Start loading the image
      img.src = imagePath
    }

    checkBackground()
  }, [])

  return backgroundImage
}

// Helper function to get background image URL
export function getBackgroundImageUrl(): string | null {
  // You can customize this to check for different image formats
  // Try different extensions
  const possiblePaths = [
    '/backgrounds/couple-background.jpg',
    '/backgrounds/couple-background.jpeg',
    '/backgrounds/couple-background.png',
  ]
  
  // Return the first path (you can enhance this to check which exists)
  return possiblePaths[0]
}

