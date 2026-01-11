# 📸 Photo Background & Password Protection Setup Guide

## ✨ Features Added

1. **Full-Screen Countdown** - Shows before the anniversary date (12 January 2026)
2. **Background Photo** - Add your couple photo as countdown background
3. **Password Protection** - Activates on the anniversary date (password: 121225)

## 📸 Adding Your Couple Photo

### Quick Steps:

1. **Prepare your photo:**
   - Choose a romantic photo of you and your girlfriend
   - Recommended size: 1920x1080 or larger
   - Format: JPG, JPEG, or PNG
   - Optimize file size (under 2MB)

2. **Add the photo:**
   - Place it in: `/public/backgrounds/`
   - Name it: `couple-background.jpg`
   - Full path: `/public/backgrounds/couple-background.jpg`

3. **That's it!** The photo will automatically appear as the countdown background.

### Alternative Filenames:

If you use a different name, update `components/BackgroundPhotoManager.tsx`:
```tsx
img.src = '/backgrounds/your-photo-name.jpg'
```

## 🔒 Password Protection

### How It Works:

- **Before 12 January 2026:** Website shows normally with full-screen countdown
- **On/After 12 January 2026:** Password protection activates
- **Password:** `121225`
- **Authentication:** Stored in browser session (clears when browser closes)

### Password Details:

- **Password:** `121225`
- **Location:** Set in `components/PasswordProtection.tsx`
- **To change:** Edit line 4 in `PasswordProtection.tsx`:
  ```tsx
  const PASSWORD = 'your-new-password'
  ```

### Testing Password Protection:

To test before the date, temporarily change the date in `components/PasswordProtection.tsx`:
```tsx
const TARGET_DATE = new Date('2025-01-01T00:00:00') // Test date
```

**Remember to change it back!**

## ⏰ Full-Screen Countdown

### Behavior:

- **Shows:** Before 12 January 2026
- **Hides:** On/after 12 January 2026 (then password protection shows)
- **Background:** Your couple photo (if added) or gradient
- **Style:** Full-screen, centered, beautiful glassmorphism design

### Customization:

Edit `components/FullScreenCountdown.tsx` to:
- Change countdown text
- Adjust styling
- Modify animations

## 📁 File Structure

```
/public/
  /backgrounds/
    couple-background.jpg  ← Your photo goes here
    README.md
```

## 🚀 Deployment

1. **Add your photo:**
   ```bash
   # Place couple-background.jpg in /public/backgrounds/
   ```

2. **Commit and push:**
   ```bash
   git add public/backgrounds/couple-background.jpg
   git commit -m "Add couple background photo"
   git push
   ```

3. **Deploy:**
   ```bash
   vercel --prod
   ```

## 🎯 Complete Flow

### Before Anniversary (Now - Jan 11, 2026):
1. User visits website
2. **Full-screen countdown appears** with your couple photo background
3. Countdown shows days, hours, minutes, seconds
4. Website content is hidden

### On Anniversary (Jan 12, 2026):
1. User visits website
2. **Password protection screen appears**
3. User enters password: `121225`
4. After correct password, full website appears
5. All sections visible (Hero, Story, Gallery, etc.)

### After Anniversary (Jan 13+):
1. Same as on anniversary
2. Password protection remains active
3. Users need password to access

## 🔧 Troubleshooting

### Photo not showing?
- Check file path: `/public/backgrounds/couple-background.jpg`
- Check filename spelling (case-sensitive)
- Try different image format (JPG, PNG)
- Check browser console for errors

### Password not working?
- Verify password is exactly: `121225` (no spaces)
- Clear browser sessionStorage and try again
- Check date in `PasswordProtection.tsx`

### Countdown not full-screen?
- Check date in `FullScreenCountdown.tsx`
- Verify `showFullScreenCountdown` state logic in `app/page.tsx`

## 💡 Tips

- **Photo quality:** Use high-resolution photos for best results
- **Photo privacy:** Only use photos you're comfortable sharing publicly
- **Password security:** The password is visible in code (client-side). For production, consider server-side authentication.
- **Testing:** Test locally before deploying to production

---

**Everything is ready! Just add your couple photo and you're all set! 💕**

