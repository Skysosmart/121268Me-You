'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const PASSWORD = '121225'
// TESTING MODE: Temporarily set to yesterday to test password protection
// CHANGE BACK TO: new Date('2026-01-12T00:00:00') before production
const TARGET_DATE = new Date(Date.now() - 24 * 60 * 60 * 1000) // Yesterday (for testing)
// const TARGET_DATE = new Date('2026-01-12T00:00:00') // 12 January 2026 (PRODUCTION)

interface PasswordProtectionProps {
  children: React.ReactNode
}

export default function PasswordProtection({ children }: PasswordProtectionProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [showPasswordScreen, setShowPasswordScreen] = useState(false)

  useEffect(() => {
    // Check if we've reached the target date
    const now = new Date()
    const hasReachedDate = now >= TARGET_DATE

    // Check if user was previously authenticated (stored in sessionStorage)
    const wasAuthenticated = sessionStorage.getItem('anniversary_authenticated') === 'true'

    if (hasReachedDate && !wasAuthenticated) {
      setShowPasswordScreen(true)
    } else if (wasAuthenticated) {
      setIsAuthenticated(true)
      setShowPasswordScreen(false)
    } else {
      // Before the date, show content normally
      setIsAuthenticated(true)
      setShowPasswordScreen(false)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (password === PASSWORD) {
      setIsAuthenticated(true)
      setShowPasswordScreen(false)
      // Store authentication in sessionStorage (clears when browser closes)
      sessionStorage.setItem('anniversary_authenticated', 'true')
    } else {
      setError('Incorrect password. Please try again.')
      setPassword('')
    }
  }

  // If authenticated or before the date, show content
  if (isAuthenticated || !showPasswordScreen) {
    return <>{children}</>
  }

  // Show password screen
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-romantic p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="glassmorphism rounded-3xl p-8 md:p-12 max-w-md w-full shadow-2xl"
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-6xl mb-4">🔒</div>
            <h2 className="text-3xl md:text-4xl font-bold text-romantic-pink-600 mb-2 text-glow">
              Welcome to Our Anniversary
            </h2>
            <p className="text-gray-600">
              Please enter the password to continue
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  setError('')
                }}
                placeholder="Enter password"
                className="w-full px-6 py-4 rounded-2xl border-2 border-romantic-pink-300 focus:border-romantic-pink-500 focus:outline-none text-lg bg-white/50 backdrop-blur-sm text-center"
                autoFocus
              />
              {error && (
                <motion.p
                  className="mt-2 text-red-500 text-sm text-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {error}
                </motion.p>
              )}
            </div>

            <motion.button
              type="submit"
              className="w-full px-6 py-4 bg-gradient-romantic text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all text-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Enter
            </motion.button>
          </form>

          <motion.div
            className="mt-6 text-center text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p>💕 Special day, special access 💕</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

