# 🎵 Music Setup Guide

## Adding Background Music

The website includes a music player feature. To add your own romantic lofi music:

### Option 1: Local File (Recommended)

1. Place your music file (e.g., `romantic-lofi.mp3`) in the `public` folder
2. Update `components/MusicPlayer.tsx`:
   ```tsx
   <source src="/romantic-lofi.mp3" type="audio/mpeg" />
   ```

### Option 2: External URL

1. Host your music file online (e.g., on a CDN or cloud storage)
2. Update `components/MusicPlayer.tsx` with the URL:
   ```tsx
   <source src="https://your-cdn.com/music.mp3" type="audio/mpeg" />
   ```

### Recommended Music Sources

- Free lofi music: [Pixabay](https://pixabay.com/music/), [Free Music Archive](https://freemusicarchive.org/)
- Royalty-free romantic music
- Ensure the music is soft and ambient to match the romantic theme

## 📸 Image Setup

### Adding Your Own Photos

1. Place your photos in the `public/images` folder
2. Update `components/GallerySection.tsx`:
   ```tsx
   const photos: Photo[] = [
     {
       id: 1,
       image: '/images/photo1.jpg',
       caption: 'Your caption here 💕',
     },
     // ... more photos
   ]
   ```

### Image Recommendations

- Use high-quality images (at least 800px width)
- Optimize images for web (use tools like TinyPNG)
- Recommended aspect ratio: 3:4 (portrait) for best mobile display
- Use pastel/pink/blue tones to match the theme

## 🎨 Customization Tips

### Colors
Edit `tailwind.config.ts` to customize the color palette:
- `romantic-pink`: Pink shades
- `sky-blue`: Blue shades  
- `ice-crystal`: White/gray shades

### Text Content
Update text in each component:
- `HeroSection.tsx`: Main anniversary message
- `StorySection.tsx`: Love story text
- `MessageSection.tsx`: Personal message
- `FinalLovePage.tsx`: Final message

### Animations
Adjust animation speeds and effects in:
- Framer Motion `transition` props
- Tailwind `animation` config in `tailwind.config.ts`

