'use client'

import { motion, useInView } from 'framer-motion'
import { ShoppingBag, Plus, Minus, Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { useCart } from '@/context/CartContext'
import { useFavorites } from '@/context/FavoritesContext'

interface TrendProduct {
  id: number
  name: string
  category: string
  image: string
  price: number
  description: string
  region?: string
  isTrending?: boolean
}

const trendingProducts: TrendProduct[] = [
  {
    id: 101,
    name: 'Erken Hasat Zeytinyağı',
    category: 'Zeytinyağı',
    image: '/images/erken hasat.jpg',
    price: 520,
    description: 'Yoğun aromalı, güçlü tat profili',
    region: 'Gemlik',
    isTrending: true
  },
  {
    id: 102,
    name: 'Kırma Yeşil Zeytin',
    category: 'Sofralık Zeytin',
    image: '/images/kırmayesıl.jpg',
    price: 180,
    description: 'Taze, çıtır dokusu',
    region: 'Gemlik',
    isTrending: true
  },
  {
    id: 103,
    name: 'Premium Soğuk Sıkım',
    category: 'Zeytinyağı',
    image: '/images/tasbaski.jpg',
    price: 450,
    description: 'Asitlik %0.3, ilk hasat',
    region: 'Marmara',
    isTrending: true
  },
  {
    id: 104,
    name: 'Gemlik Siyah Zeytin',
    category: 'Sofralık Zeytin',
    image: '/images/gemlik-zeytini.jpg',
    price: 220,
    description: 'Doğal fermantasyon',
    region: 'Gemlik',
    isTrending: true
  },
]

function TrendingProductCard({ product, index }: { product: TrendProduct; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { addToCart, updateQuantity, getItemQuantity } = useCart()
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites()
  
  const quantity = getItemQuantity(product.id)
  const isInFavorites = isFavorite(product.id)

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
  }

  const toggleFavorite = () => {
    if (isInFavorites) {
      removeFromFavorites(product.id)
    } else {
      addToFavorites({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        description: product.description
      })
    }
  }

  const handleIncrement = () => {
    if (quantity === 0) {
      handleAddToCart()
    } else {
      updateQuantity(product.id, quantity + 1)
    }
  }

  const handleDecrement = () => {
    if (quantity > 0) {
      updateQuantity(product.id, quantity - 1)
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
    >
      <Link href={`/product/${product.id}`} className="block">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden cursor-pointer">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Trending Badge */}
          <div className="absolute top-4 left-4 bg-gold px-3 py-1 rounded-full">
            <span className="text-xs font-bold text-olive-deep">TREND</span>
          </div>

          {/* Favorite Button */}
          <motion.button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              toggleFavorite()
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center z-10"
          >
            <Heart 
              className={`w-5 h-5 transition-colors ${
                isInFavorites ? 'text-red-500 fill-red-500' : 'text-olive-deep'
              }`}
            />
          </motion.button>
        </div>
      </Link>

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
            ₺{product.price}
          </span>
          
          {/* Quantity Controls */}
          <div className="flex items-center gap-2">
            {quantity > 0 ? (
              <div className="flex items-center gap-2 bg-olive-deep/10 rounded-full px-2 py-1">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleDecrement}
                  className="w-8 h-8 bg-olive-deep text-cream rounded-full flex items-center justify-center hover:bg-olive-medium transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </motion.button>
                <span className="font-bold text-olive-deep min-w-[24px] text-center">
                  {quantity}
                </span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleIncrement}
                  className="w-8 h-8 bg-gold text-olive-deep rounded-full flex items-center justify-center hover:bg-gold-light transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </motion.button>
              </div>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAddToCart}
                className="bg-gold text-olive-deep px-4 py-2 rounded-full font-bold text-sm flex items-center gap-1 hover:bg-gold-light transition-colors"
              >
                <Plus className="w-4 h-4" />
                Ekle
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function TrendingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-20 md:py-28 px-4 md:px-8 bg-sage/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-block mb-4"
          >
            <div className="bg-gold/20 px-4 py-2 rounded-full">
              <span className="text-gold font-bold text-sm uppercase tracking-wider">
                Bu Ay En Çok Satanlar
              </span>
            </div>
          </motion.div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-olive-deep mb-4">
            Trend Ürünler
          </h2>
          <p className="text-sage-dark text-lg md:text-xl max-w-2xl mx-auto font-display">
            En beğenilen ve tercih edilen premium ürünlerimiz
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {trendingProducts.map((product, index) => (
            <TrendingProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
