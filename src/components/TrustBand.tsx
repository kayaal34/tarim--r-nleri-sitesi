'use client'

import { motion, useInView } from 'framer-motion'
import { Package, ShieldCheck, Leaf, Truck } from 'lucide-react'
import { useRef } from 'react'

const features = [
  {
    icon: Package,
    title: 'Özel Paketleme',
    description: 'Siparişinize özel korumalı paketleme',
  },
  {
    icon: ShieldCheck,
    title: 'Güvenli Ödeme',
    description: '%100 Güvenli ödeme sistemi',
  },
  {
    icon: Leaf,
    title: '%100 Doğal Üretim',
    description: 'Katkısız, doğal üretim',
  },
  {
    icon: Truck,
    title: 'Hızlı Teslimat',
    description: ' Hızlı teslimat',
  },
]

export default function TrustBand() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-sage/5 border-y border-sage/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div 
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="mb-6 p-6 bg-gradient-to-br from-olive-deep to-olive-medium rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow"
                >
                  <Icon className="w-12 h-12 md:w-14 md:h-14 text-cream stroke-[1.5]" />
                </motion.div>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-olive-deep mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-sage-dark font-display leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
