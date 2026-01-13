'use client'

import { useState, useEffect } from 'react'
import Preloader from '@/components/Preloader'
import Hero from '@/components/Hero'
import TrendingSection from '@/components/TrendingSection'
import ProductShowcase from '@/components/ProductShowcase'
import TrustBand from '@/components/TrustBand'
import Footer from '@/components/Footer'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Prevent scrolling during preloader
    if (isLoading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isLoading])

  return (
    <main className="relative">
      {isLoading && (
        <Preloader onComplete={() => setIsLoading(false)} />
      )}
      
      {/* Add padding-top to account for fixed header */}
      <div className="pt-20">
        <Hero />
        <TrendingSection />
        <ProductShowcase />
        <TrustBand />
        <Footer />
      </div>
    </main>
  )
}
