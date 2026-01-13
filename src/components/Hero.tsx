'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Leaf } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden -mt-20">
      {/* Background Image with Parallax Effect */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=2670"
          alt="Olive Grove"
          fill
          className="object-cover scale-110"
          priority
          quality={90}
        />
        {/* Gradient Overlay */}
        <div className="gradient-overlay" />
      </motion.div>

      {/* Content Container */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center px-4 md:px-8 text-center"
      >
        {/* Logo Icon */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <Leaf className="w-16 h-16 md:w-20 md:h-20 text-gold mb-6" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-cream mb-6 max-w-5xl leading-tight mt-20"
        >
          Topraktan Sofranıza,
          <br />
          <span className="text-gold">Doğanın Saf Mucizesi</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-sage text-lg md:text-xl lg:text-2xl max-w-2xl mb-12 font-display"
        >
          Premium zeytinyağı ve organik ürünlerle lezzeti keşfedin
        </motion.p>

        {/* CTA Buttons with Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.button
            onClick={scrollToProducts}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="glass px-10 py-5 rounded-full text-cream font-semibold hover:bg-white/25 transition-all duration-300 shadow-lg hover:shadow-2xl backdrop-blur-xl border border-white/30"
          >
            Ürünleri Keşfet
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="glass px-10 py-5 rounded-full text-cream font-semibold hover:bg-gold/20 transition-all duration-300 shadow-lg hover:shadow-2xl backdrop-blur-xl border border-gold/50"
          >
            Hikayemiz
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToProducts}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-8 h-8 text-cream" />
          </motion.div>
          <p className="text-cream text-sm mt-2 font-display">Keşfet</p>
        </motion.div>
      </motion.div>
    </section>
  )
}
