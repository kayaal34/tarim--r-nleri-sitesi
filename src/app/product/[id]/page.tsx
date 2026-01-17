'use client'

import { useParams } from 'next/navigation'
import ProductDetail from '@/components/ProductDetail'
import Footer from '@/components/Footer'
import { getProductById } from '@/data/products'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function ProductPage() {
  const params = useParams()
  const productId = parseInt(params.id as string)
  const product = getProductById(productId)

  if (!product) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold text-olive-deep mb-4">
            Ürün Bulunamadı
          </h1>
          <p className="text-sage-dark mb-8">
            Aradığınız ürün mevcut değil veya kaldırılmış olabilir.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-olive-deep text-cream px-6 py-3 rounded-full font-bold hover:bg-olive-medium transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-24 left-4 md:left-8 z-50"
      >
        <Link
          href="/"
          className="flex items-center gap-2 bg-white/90 backdrop-blur-sm text-olive-deep px-4 py-2 rounded-full font-semibold hover:bg-white transition-all shadow-lg"
        >
          <ArrowLeft className="w-4 h-4" />
          Geri
        </Link>
      </motion.div>

      <ProductDetail product={product} />
      <Footer />
    </>
  )
}
