# 📸 Background Photos Folder

## How to Add Your Couple Photo as Background

### Step 1: Prepare Your Photo

1. **Choose a romantic photo** of you and your girlfriend
2. **Recommended specifications:**
   - Format: JPG or PNG
   - Resolution: 1920x1080 or higher (for best quality)
   - File size: Under 2MB (optimize for web)
   - Aspect ratio: 16:9 or similar (will be cropped to fit)

### Step 2: Add the Photo

1. **Place your photo here:**
   ```
   /public/backgrounds/couple-background.jpg
   ```

2. **Supported formats:**
   - `couple-background.jpg`
   - `couple-background.jpeg`
   - `couple-background.png`

3. **The photo will automatically be used as:**
   - Full-screen countdown background
   - Can be used in other sections if needed

### Step 3: Test

1. Run `npm run dev`
2. Visit http://localhost:3000
3. The countdown should show your photo as background!

### Alternative Filenames

If you want to use a different filename, update `components/BackgroundPhotoManager.tsx`:
```tsx
img.src = '/backgrounds/your-photo-name.jpg'
```

## 📝 Tips

- **Best photos:** Romantic moments, couple photos, beautiful scenery together
- **Optimization:** Use tools like TinyPNG to compress images
- **Privacy:** Only upload photos you're comfortable sharing publicly
- **Multiple photos:** You can add multiple photos and switch them in the code

---

**Note:** The background photo will be visible during the full-screen countdown (before the anniversary date).

