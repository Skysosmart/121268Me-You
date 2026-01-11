'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules'
import { motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

interface Photo {
  id: number
  image: string
  caption: string
}

const photos: Photo[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80',
    caption: 'Our first moment together 💕',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&q=80',
    caption: 'Walking under the stars ✨',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80',
    caption: 'Every day with you is special 🌟',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&q=80',
    caption: 'Love like ice crystals, pure and beautiful ❄️',
  },
]

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-gradient-romantic">
      <motion.div
        className="w-full max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-romantic-pink-600 mb-12 text-glow"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Our Memories
        </motion.h2>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="gallery-swiper"
          >
            {photos.map((photo) => (
              <SwiperSlide key={photo.id} className="!w-80">
                <motion.div
                  className="relative rounded-3xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="aspect-[3/4] bg-gradient-to-br from-romantic-pink-200 to-sky-blue-200 relative">
                    <img
                      src={photo.image}
                      alt={photo.caption}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-lg font-medium">{photo.caption}</p>
                  </div>
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
          transition={{ delay: 0.4 }}
        >
          <p className="text-sm">Swipe to see more memories</p>
        </motion.div>
      </motion.div>

      <style jsx global>{`
        .gallery-swiper .swiper-button-next,
        .gallery-swiper .swiper-button-prev {
          color: #ec4899;
        }
        .gallery-swiper .swiper-pagination-bullet {
          background: #ec4899;
        }
        .gallery-swiper .swiper-pagination-bullet-active {
          background: #0ea5e9;
        }
      `}</style>
    </section>
  )
}

