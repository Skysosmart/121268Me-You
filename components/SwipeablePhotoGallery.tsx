'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import 'swiper/css/autoplay'

// List of all photos
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

export default function SwipeablePhotoGallery() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden" style={{ background: 'transparent' }}>
      <motion.div
        className="w-full max-w-6xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-romantic-pink-600 mb-4 text-glow"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Our Beautiful Memories
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 mb-12 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Swipe to see our journey together 💕
        </motion.p>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={800}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 150,
              modifier: 2,
              slideShadows: true,
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
              bulletClass: 'swiper-pagination-bullet-custom',
            }}
            navigation={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="swipeable-gallery"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            {ALL_PHOTOS.map((photo, index) => (
              <SwiperSlide key={photo} className="!w-80 md:!w-96">
                <motion.div
                  className="relative rounded-3xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="aspect-[3/4] bg-gradient-to-br from-romantic-pink-200 to-sky-blue-200 relative">
                    <img
                      src={photo}
                      alt={`Memory ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-lg font-medium">Memory {index + 1} 💕</p>
                  </div>
                  
                  {/* Floating hearts effect */}
                  <motion.div
                    className="absolute top-4 right-4 text-2xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 15, -15, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    ✨
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <motion.div
          className="mt-8 text-center text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm md:text-base">
            {activeIndex + 1} / {ALL_PHOTOS.length} • Swipe or drag to explore
          </p>
        </motion.div>
      </motion.div>

      <style jsx global>{`
        .swipeable-gallery .swiper-button-next,
        .swipeable-gallery .swiper-button-prev {
          color: #ec4899;
          background: rgba(255, 255, 255, 0.8);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          backdrop-filter: blur(10px);
        }
        .swipeable-gallery .swiper-button-next:after,
        .swipeable-gallery .swiper-button-prev:after {
          font-size: 20px;
          font-weight: bold;
        }
        .swipeable-gallery .swiper-pagination-bullet {
          background: #ec4899;
          width: 12px;
          height: 12px;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background: #0ea5e9 !important;
          opacity: 1 !important;
          transform: scale(1.2);
        }
        .swipeable-gallery .swiper-slide {
          transition: all 0.3s ease;
        }
        .swipeable-gallery .swiper-slide-active {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  )
}

