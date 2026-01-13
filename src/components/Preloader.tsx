'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [isComplete, setIsComplete] = useState(false)
  
  const brandName = 'KAYAAL TARIM'
  const letters = brandName.split('')

  useEffect(() => {
    // Simulate loading time (in production, tie this to actual asset loading)
    const timer = setTimeout(() => {
      setIsComplete(true)
      setTimeout(onComplete, 1000) // Wait for exit animation
    }, 2800)

    return () => clearTimeout(timer)
  }, [onComplete])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.06,
        delayChildren: 0.2,
      },
    },
    exit: {
      scale: 1.15,
      opacity: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.01, 0.05, 0.95],
      },
    },
  }

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.01, 0.05, 0.95],
      },
    },
  }

  const underlineVariants = {
    hidden: { width: 0 },
    visible: {
      width: '100%',
      transition: {
        delay: 2,
        duration: 0.8,
        ease: [0.6, 0.01, 0.05, 0.95],
      },
    },
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-olive-deep overflow-hidden"
      initial={{ opacity: 1 }}
      animate={isComplete ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.8, delay: isComplete ? 0 : 0 }}
    >
      {/* Background Logo - Watermark Style */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <img
          src="/images/kayaal-logo.svg"
          alt="Background Logo"
          className="w-[700px] h-[700px] object-contain"
          style={{ filter: 'brightness(0) invert(1)' }}
        />
      </motion.div>

      <motion.div
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isComplete ? 'exit' : 'visible'}
      >
        <div className="flex items-center justify-center space-x-1">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-cream tracking-wider"
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </div>
        
        {/* Animated Underline */}
        <motion.div
          variants={underlineVariants}
          initial="hidden"
          animate="visible"
          className="h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mt-4 mx-auto"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          className="text-center text-sage text-sm md:text-base tracking-[0.3em] mt-6 font-display uppercase"
        >
          Doğanın Saf Mucizesi
        </motion.p>
      </motion.div>
    </motion.div>
  )
}
