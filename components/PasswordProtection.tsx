'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import NumericKeypad from './NumericKeypad'

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
          className="glassmorphism rounded-2xl p-4 md:p-6 max-w-sm w-full shadow-2xl overflow-y-auto max-h-[90vh]"
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <motion.div
            className="text-center mb-4 md:mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-4xl md:text-5xl mb-2">🔒</div>
            <h2 className="text-xl md:text-2xl font-bold text-romantic-pink-600 mb-1 text-glow">
              Welcome to Our Anniversary
            </h2>
            <p className="text-gray-300 text-sm">
              Please enter the password
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Password Display */}
            <div className="mb-4">
              <div className="flex justify-center gap-1 mb-3">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <motion.div
                    key={index}
                    className={`w-8 h-8 md:w-10 md:h-10 rounded-lg border-2 flex items-center justify-center text-sm md:text-base font-bold transition-all ${
                      index < password.length
                        ? 'bg-gradient-romantic border-romantic-pink-500 text-white shadow-lg'
                        : 'bg-white/50 border-romantic-pink-200 text-romantic-pink-300'
                    }`}
                    animate={{
                      scale: index < password.length ? [1, 1.1, 1] : 1,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: index < password.length ? 0 : 0,
                    }}
                  >
                    {index < password.length ? '●' : ''}
                  </motion.div>
                ))}
              </div>
              {error && (
                <motion.p
                  className="text-red-500 text-sm text-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {error}
                </motion.p>
              )}
            </div>

            {/* Custom Numeric Keypad */}
            <NumericKeypad
              onNumberClick={(num) => {
                if (password.length < 6) {
                  setPassword(password + num)
                  setError('')
                }
              }}
              onDelete={() => {
                setPassword(password.slice(0, -1))
                setError('')
              }}
              onClear={() => {
                setPassword('')
                setError('')
              }}
            />

            {/* Enter Button */}
            <motion.button
              type="submit"
              disabled={password.length !== 6}
              className={`w-full px-4 py-3 rounded-xl shadow-xl hover:shadow-2xl transition-all text-base font-semibold ${
                password.length === 6
                  ? 'bg-gradient-romantic text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              whileHover={password.length === 6 ? { scale: 1.02 } : {}}
              whileTap={password.length === 6 ? { scale: 0.98 } : {}}
            >
              Enter
            </motion.button>
          </form>

          <motion.div
            className="mt-4 text-center text-xs text-gray-400"
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

