'use client'

import { motion } from 'framer-motion'

interface NumericKeypadProps {
  onNumberClick: (num: string) => void
  onDelete: () => void
  onClear: () => void
}

export default function NumericKeypad({ onNumberClick, onDelete, onClear }: NumericKeypadProps) {
  const numbers = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['', '0', '⌫'],
  ]

  return (
    <div className="grid grid-cols-3 gap-1.5 w-full max-w-[280px] mx-auto">
      {numbers.map((row, rowIndex) =>
        row.map((item, colIndex) => {
          if (item === '') {
            return <div key={`empty-${rowIndex}-${colIndex}`} />
          }

          if (item === '⌫') {
            return (
              <motion.button
                key="delete"
                type="button"
                onClick={onDelete}
                className="aspect-square rounded-lg bg-gradient-to-br from-romantic-pink-400 to-romantic-pink-500 text-white font-bold text-base shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    '0 6px 15px rgba(236, 72, 153, 0.3)',
                    '0 10px 25px rgba(236, 72, 153, 0.5)',
                    '0 6px 15px rgba(236, 72, 153, 0.3)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                ⌫
              </motion.button>
            )
          }

          return (
            <motion.button
              key={item}
              type="button"
              onClick={() => onNumberClick(item)}
              className="aspect-square rounded-lg bg-gradient-to-br from-white to-romantic-pink-50 text-romantic-pink-600 font-bold text-lg shadow-lg hover:shadow-xl border-2 border-romantic-pink-200 hover:border-romantic-pink-400 transition-all flex items-center justify-center"
              whileHover={{ 
                scale: 1.06,
                rotate: [0, -2, 2, 0],
              }}
              whileTap={{ scale: 0.92 }}
              transition={{ duration: 0.2 }}
            >
              {item}
            </motion.button>
          )
        })
      )}
    </div>
  )
}

