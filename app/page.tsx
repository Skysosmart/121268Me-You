'use client'

import HeroSection from '@/components/HeroSection'
import StorySection from '@/components/StorySection'
import GallerySection from '@/components/GallerySection'
import MessageSection from '@/components/MessageSection'
import CountdownSection from '@/components/CountdownSection'
import FinalLovePage from '@/components/FinalLovePage'
import MusicPlayer from '@/components/MusicPlayer'
import SnowEffect from '@/components/SnowEffect'

export default function Home() {
  return (
    <main className="relative">
      <SnowEffect />
      <HeroSection />
      <StorySection />
      <GallerySection />
      <MessageSection />
      <CountdownSection />
      <FinalLovePage />
      <MusicPlayer />
    </main>
  )
}

