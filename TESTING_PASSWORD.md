# 🔓 Password Protection Testing Guide

## ✅ Password Protection is NOW ACTIVE for Testing

The password protection has been temporarily enabled so you can test it right now!

## 🧪 How to Test

1. **Start your development server:**
   ```bash
   npm run dev
   ```

2. **Open your browser:**
   - Go to: http://localhost:3000
   - **You should see the password protection screen immediately!**

3. **Test the password:**
   - **Correct password:** `121225` ✅
   - Enter the password and click "Enter"
   - You should see the full website after entering the correct password

4. **Test wrong password:**
   - Clear browser sessionStorage (or open incognito/private window)
   - Try a wrong password (e.g., `123456`)
   - You should see an error message
   - Then try the correct password: `121225`

5. **Test session persistence:**
   - Enter correct password and access the site
   - Refresh the page
   - You should stay logged in (no password needed)
   - Close browser completely and reopen
   - Password screen should appear again (sessionStorage clears)

## 🔄 How to Clear Session for Re-testing

### Method 1: Browser DevTools
1. Open DevTools (F12)
2. Go to "Application" tab (Chrome) or "Storage" tab (Firefox)
3. Find "Session Storage" → your domain
4. Delete `anniversary_authenticated` key
5. Refresh page

### Method 2: Incognito/Private Window
- Open a new incognito/private window
- Visit the site
- Password screen will appear

### Method 3: Clear All Session Storage
- DevTools → Application → Clear storage → Clear site data

## 🔙 Revert to Production Mode

When you're done testing, change these files back:

### 1. `components/PasswordProtection.tsx`
Change line 7-8 from:
```tsx
const TARGET_DATE = new Date(Date.now() - 24 * 60 * 60 * 1000) // Yesterday (for testing)
```
Back to:
```tsx
const TARGET_DATE = new Date('2026-01-12T00:00:00') // 12 January 2026
```

### 2. `app/page.tsx`
Change line 29 from:
```tsx
setShowFullScreenCountdown(false) // Temporarily disabled for password testing
```
Back to:
```tsx
setShowFullScreenCountdown(isBeforeDate) // Production mode
```

## 📝 Current Test Settings

- ✅ Password protection: **ACTIVE** (set to yesterday)
- ✅ Full-screen countdown: **DISABLED** (for testing)
- ✅ Password: `121225`

## 🎯 What You Should See

1. **Password Screen:**
   - Beautiful glassmorphism card
   - Lock icon 🔒
   - "Welcome to Our Anniversary" text
   - Password input field
   - Enter button

2. **After Correct Password:**
   - Full website appears
   - All sections visible
   - No password needed on refresh (until browser closes)

3. **After Wrong Password:**
   - Error message appears
   - Input field clears
   - Can try again

---

**Happy Testing! 💕**

Remember to revert the changes before deploying to production!

