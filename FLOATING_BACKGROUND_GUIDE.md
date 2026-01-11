# 🌌 Floating Background Component Guide

## ✨ Overview

The `FloatingBackground` component creates a beautiful floating image background with multiple photos that drift gently behind your content, creating a "memories floating in the sky" effect.

## 🎨 Features

- ✅ Multiple images floating behind content
- ✅ Pinterest-style random positioning
- ✅ Different image sizes (configurable)
- ✅ Random rotation (-4° to +4°)
- ✅ Images can overlap naturally
- ✅ Polaroid-style white frame borders
- ✅ Smooth floating animations (up/down + left/right drift)
- ✅ Different animation delays per image
- ✅ Infinite loop animations
- ✅ Soft pink → sky blue gradient overlay
- ✅ 6px blur effect for dreamy look
- ✅ Mobile-first & responsive
- ✅ GPU-accelerated animations
- ✅ Lazy loading images
- ✅ Auto random positioning
- ✅ Re-calculates on resize

## 📦 Import & Usage

### Basic Usage (Auto-detect images)

```tsx
import FloatingBackground, { useFloatingBackgroundImages } from '@/components/FloatingBackground'

export default function MyPage() {
  const images = useFloatingBackgroundImages() // Auto-detects images from /backgrounds folder
  
  return (
    <div>
      <FloatingBackground images={images} />
      {/* Your content here */}
    </div>
  )
}
```

### Custom Image Array

```tsx
import FloatingBackground from '@/components/FloatingBackground'

const myImages = [
  '/backgrounds/IMG_3285.JPG',
  '/backgrounds/IMG_3287.JPG',
  '/backgrounds/IMG_3273.JPG',
  // ... more images
]

export default function MyPage() {
  return (
    <div>
      <FloatingBackground 
        images={myImages}
        imageCount={12}      // Show 12 images (default: all)
        minSize={100}        // Minimum size in pixels
        maxSize={180}        // Maximum size in pixels
      />
      {/* Your content here */}
    </div>
  )
}
```

## ⚙️ Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `images` | `string[]` | **required** | Array of image URLs/paths |
| `imageCount` | `number` | `images.length` | Number of images to display |
| `minSize` | `number` | `120` | Minimum image width in pixels |
| `maxSize` | `number` | `200` | Maximum image width in pixels |

## 🎯 Animation Specs

Each image has:
- **Vertical movement**: -10px → +10px
- **Horizontal drift**: -5px → +5px
- **Duration**: Random 6s - 10s
- **Delay**: Random 0s - 2s
- **Opacity**: Random 0.35 - 0.6
- **Rotation**: Random -4° to +4°
- **Easing**: `easeInOut` (smooth)

## 🎨 Visual Effects

- **Polaroid Frame**: Thin white border with shadow
- **Gradient Overlay**: Soft pink → sky blue (40% opacity)
- **Backdrop Blur**: 6px for dreamy effect
- **Z-index**: -1 (behind all content)
- **Pointer Events**: None (doesn't interfere with interactions)

## 📱 Responsive Behavior

- **Mobile**: Smaller images, fewer displayed
- **Tablet**: Medium images
- **Desktop**: Full size images
- **Auto-adjusts**: On window resize

## 🚀 Performance

- ✅ GPU-accelerated animations (`will-change`, `translateZ(0)`)
- ✅ Lazy loading images
- ✅ Optimized re-renders
- ✅ Smooth 60fps animations
- ✅ No layout shift

## 💡 Customization Examples

### Show More Images

```tsx
<FloatingBackground 
  images={images}
  imageCount={20}  // Show 20 images
/>
```

### Larger Images

```tsx
<FloatingBackground 
  images={images}
  minSize={150}
  maxSize={250}
/>
```

### Smaller Images

```tsx
<FloatingBackground 
  images={images}
  minSize={80}
  maxSize={120}
/>
```

## 🔧 Advanced Customization

To customize the component further, edit `components/FloatingBackground.tsx`:

### Change Animation Range

```tsx
// In FloatingImageItem component
const floatingAnimation = {
  y: [-15, 15, -15],  // Larger vertical movement
  x: [-8, 8, -8],     // Larger horizontal drift
  // ...
}
```

### Change Opacity Range

```tsx
// In generateFloatingImages
const opacity = 0.4 + Math.random() * 0.3  // 0.4 to 0.7
```

### Change Rotation Range

```tsx
// In generateFloatingImages
const rotation = -6 + Math.random() * 12  // -6° to +6°
```

### Change Blur Amount

```tsx
// In FloatingBackground component
<div className="absolute inset-0 backdrop-blur-[8px]">  // 8px instead of 6px
```

## 📝 Current Implementation

The component is already integrated in `app/page.tsx`:

```tsx
<FloatingBackground 
  images={floatingImages} 
  imageCount={15}  // Shows 15 floating images
  minSize={100}
  maxSize={180}
/>
```

## 🎨 Theme Integration

The component uses your existing Tailwind theme colors:
- `romantic-pink-200/40` - Pink gradient
- `sky-blue-100/30` - Blue gradient
- Matches your website's romantic theme perfectly!

## ✨ Tips

1. **Image Count**: Start with 10-15 images for best performance
2. **Size Range**: 100-180px works well for most screens
3. **Placement**: Component should be inside your main layout
4. **Z-index**: Already set to -1, so it stays behind content
5. **Performance**: Fewer images = better performance on mobile

---

**Your floating background is ready! Memories floating in the sky! 💕✨**

