'use client'

import { useState, useEffect } from 'react'
import { isAfter } from 'date-fns'
import HeroSection from '@/components/HeroSection'
import StorySection from '@/components/StorySection'
import GallerySection from '@/components/GallerySection'
import MessageSection from '@/components/MessageSection'
import CountdownSection from '@/components/CountdownSection'
import FinalLovePage from '@/components/FinalLovePage'
import MusicPlayer from '@/components/MusicPlayer'
import SnowEffect from '@/components/SnowEffect'
import PasswordProtection from '@/components/PasswordProtection'
import FullScreenCountdown from '@/components/FullScreenCountdown'
import { useBackgroundPhoto } from '@/components/BackgroundPhotoManager'

const TARGET_DATE = new Date('2026-01-12T00:00:00') // 12 January 2026

export default function Home() {
  const [showFullScreenCountdown, setShowFullScreenCountdown] = useState(false)
  const backgroundImage = useBackgroundPhoto()

  useEffect(() => {
    // Check if we're before the target date
    const now = new Date()
    const isBeforeDate = now < TARGET_DATE
    
    // Show full-screen countdown if before the date
    setShowFullScreenCountdown(isBeforeDate)
  }, [])

  const handleCountdownComplete = () => {
    setShowFullScreenCountdown(false)
  }

  return (
    <PasswordProtection>
      <main className="relative">
        {/* Full-screen countdown - shows before the anniversary date */}
        {showFullScreenCountdown && (
          <FullScreenCountdown 
            onCountdownComplete={handleCountdownComplete}
            backgroundImage={backgroundImage || undefined}
          />
        )}

        {/* Main website content - hidden when full-screen countdown is active */}
        {!showFullScreenCountdown && (
          <>
            <SnowEffect />
            <HeroSection />
            <StorySection />
            <GallerySection />
            <MessageSection />
            <CountdownSection />
            <FinalLovePage />
            <MusicPlayer />
          </>
        )}
      </main>
    </PasswordProtection>
  )
}

