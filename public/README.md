# 📁 Public Folder

This folder contains static assets that will be served directly by Next.js.

## 🎵 Music File

**Place your "Love Story (Lo-fi)" music file here:**

- **Filename:** `love-story-lofi.mp3`
- **Location:** `/public/love-story-lofi.mp3`
- **Format:** MP3 (recommended) or other web-compatible audio formats

### Quick Steps:

1. Download or create your "Love Story – Taylor Swift (Lo-fi)" file
2. Rename it to `love-story-lofi.mp3` (if needed)
3. Place it in this `/public` folder
4. The MusicPlayer component will automatically use it!

### Alternative Filenames:

If you use a different filename, update `components/MusicPlayer.tsx`:
```tsx
<source src="/your-filename.mp3" type="audio/mpeg" />
```

## 📸 Images (Optional)

You can also place images here if you want to use them in the gallery:
- `/public/images/photo1.jpg`
- `/public/images/photo2.jpg`
- etc.

Then update `components/GallerySection.tsx` to use:
```tsx
image: '/images/photo1.jpg'
```

---

**Note:** Files in the `/public` folder are accessible at the root URL:
- `/love-story-lofi.mp3` → `https://your-site.com/love-story-lofi.mp3`

