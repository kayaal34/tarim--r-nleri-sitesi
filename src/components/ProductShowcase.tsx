'use client'

import { motion, useInView } from 'framer-motion'
import { MessageCircle, Eye, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'
import { useCart } from '@/context/CartContext'

interface Product {
  id: number
  name: string
  category: string
  image: string
  price: string
  description: string
}

const products: Product[] = [
  {
    id: 1,
    name: 'Premium Soğuk Sıkım Zeytinyağı',
    category: 'Zeytinyağı',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=800',
    price: '₺450',
    description: 'Asitlik oranı %0.3, ilk hasat'
  },
  {
    id: 2,
    name: 'Yeşil Çizik Zeytin',
    category: 'Sofralık Zeytin',
    image: 'https://images.unsplash.com/photo-1452857297128-d9c29adba80b?q=80&w=800',
    price: '₺180',
    description: 'Organik, el ile toplandı'
  },
  {
    id: 3,
    name: 'Gemlik Siyah Zeytin',
    category: 'Sofralık Zeytin',
    image: 'https://images.unsplash.com/photo-1611137923746-c8c6d3d22bb3?q=80&w=800',
    price: '₺220',
    description: 'Doğal fermantasyon'
  },
  {
    id: 4,
    name: 'Özel Yemeklik Sos Serisi',
    category: 'Soslar',
    image: 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?q=80&w=800',
    price: '₺120',
    description: 'El yapımı, doğal malzemeler'
  },
  {
    id: 5,
    name: 'Erken Hasat Zeytinyağı',
    category: 'Zeytinyağı',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=800',
    price: '₺520',
    description: 'Yoğun aromalı, güçlü tat'
  },
  {
    id: 6,
    name: 'Taş Baskı Zeytinyağı',
    category: 'Zeytinyağı',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=800',
    price: '₺680',
    description: 'Geleneksel yöntemle üretim'
  },
  {
    id: 7,
    name: 'Kızartmalık Zeytin',
    category: 'Sofralık Zeytin',
    image: 'https://images.unsplash.com/photo-1452857297128-d9c29adba80b?q=80&w=800',
    price: '₺160',
    description: 'Hafif tuzlu, yemeklere uygun'
  },
  {
    id: 8,
    name: 'Zeytinyağlı Sabun Seti',
    category: 'Kozmetik',
    image: 'https://images.unsplash.com/photo-1585235268217-e6a2c7b0d7e6?q=80&w=800',
    price: '₺95',
    description: 'Doğal, el yapımı sabunlar'
  },
]

function ProductCard({ product, index }: { product: Product; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    const priceNumber = parseFloat(product.price.replace('₺', ''))
    addToCart({
      id: product.id,
      name: product.name,
      price: priceNumber,
      image: product.image,
    })
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay on Hover */}
        <motion.div
          initial={{ opacity: 0 }}
          className="absolute inset-0 bg-gradient-to-t from-olive-deep via-olive-deep/70 to-transparent flex items-end justify-center pb-6 gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        >
          <motion.button
            onClick={handleAddToCart}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="glass px-6 py-3 rounded-full text-cream font-semibold flex items-center gap-2 hover:bg-white/30 transition-all shadow-lg"
          >
            <ShoppingBag className="w-5 h-5" />
            Sepete Ekle
          </motion.button>
          <motion.a
            href={`/product/${product.id}`}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="glass px-6 py-3 rounded-full text-cream font-semibold flex items-center gap-2 hover:bg-white/30 transition-all shadow-lg"
          >
            <Eye className="w-5 h-5" />
            Detay
          </motion.a>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-xs uppercase tracking-wider text-gold font-semibold mb-2">
          {product.category}
        </p>
        <h3 className="font-serif text-xl font-semibold text-olive-deep mb-2">
          {product.name}
        </h3>
        <p className="text-sage-dark text-sm mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-serif text-2xl font-bold text-olive-deep">
            {product.price}
          </span>
          <span className="text-xs text-sage-dark">/ 500ml</span>
        </div>
      </div>
    </motion.div>
  )
}

export default function ProductShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="products" className="relative py-20 md:py-32 px-4 md:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-olive-deep mb-4">
            Premium Koleksiyonumuz
          </h2>
          <p className="text-sage-dark text-lg md:text-xl max-w-2xl mx-auto font-display">
            El ile seçilmiş, özenle üretilmiş doğal ürünler
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
