'use client'

import { useState, useEffect } from 'react'
import { isAfter } from 'date-fns'
import HeroSection from '@/components/HeroSection'
import StorySection from '@/components/StorySection'
import GallerySection from '@/components/GallerySection'
import AnimatedPhotoGallery from '@/components/AnimatedPhotoGallery'
import SwipeablePhotoGallery from '@/components/SwipeablePhotoGallery'
import MessageSection from '@/components/MessageSection'
import CountdownSection from '@/components/CountdownSection'
import FinalLovePage from '@/components/FinalLovePage'
import MusicPlayer from '@/components/MusicPlayer'
import SnowEffect from '@/components/SnowEffect'
import PasswordProtection from '@/components/PasswordProtection'
import FullScreenCountdown from '@/components/FullScreenCountdown'
import { useBackgroundPhoto } from '@/components/BackgroundPhotoManager'
import FloatingBackground, { useFloatingBackgroundImages } from '@/components/FloatingBackground'

// TESTING MODE: Temporarily disabled countdown to test password protection
// CHANGE BACK TO: new Date('2026-01-12T00:00:00') before production
const TARGET_DATE = new Date('2026-01-12T00:00:00') // 12 January 2026

export default function Home() {
  const [showFullScreenCountdown, setShowFullScreenCountdown] = useState(true)
  const floatingImages = useFloatingBackgroundImages()

  const handleCountdownComplete = () => {
    setShowFullScreenCountdown(false)
  }

  return (
    <>
      {/* Full-screen countdown - shows first, always (outside PasswordProtection) */}
      {showFullScreenCountdown && (
        <FullScreenCountdown 
          onCountdownComplete={handleCountdownComplete}
        />
      )}

      {/* Password Protection and Main content - only show after countdown completes */}
      {!showFullScreenCountdown && (
        <PasswordProtection>
          <main className="relative">
            {/* Floating background images */}
            <FloatingBackground 
              images={floatingImages} 
              imageCount={15} // Show 15 floating images
              minSize={100}
              maxSize={180}
            />
            <SnowEffect />
            <HeroSection />
            <StorySection />
            <SwipeablePhotoGallery />
            <MessageSection />
            <CountdownSection />
            <FinalLovePage />
            <MusicPlayer />
          </main>
        </PasswordProtection>
      )}
    </>
  )
}

