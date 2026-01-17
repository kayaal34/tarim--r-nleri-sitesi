'use client'

import { motion } from 'framer-motion'
import { Star, ShoppingBag, Heart, Plus, Minus } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { useCart } from '@/context/CartContext'
import { useFavorites } from '@/context/FavoritesContext'

interface ProductDetailProps {
  product: {
    id: number
    name: string
    category: string
    image: string
    price: string
    description: string
    story?: string
    acidRatio?: string
    origin?: string
    harvestDate?: string
    features: string[]
    rating?: number
    reviewCount?: number
    variants?: Array<{ size: string; price: string }>
    gallery?: string[]
  }
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(0)
  const [quantity, setQuantity] = useState(1)
  
  const { addToCart, updateQuantity, getItemQuantity } = useCart()
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites()
  
  const variants = product.variants || [
    { size: '500gr', price: product.price },
    { size: '1000gr', price: product.price },
  ]

  const gallery = product.gallery || [product.image, product.image, product.image]
  const rating = product.rating || 5
  const reviewCount = product.reviewCount || 2
  const isInFavorites = isFavorite(product.id)

  const handleAddToCart = () => {
    const priceNumber = parseFloat(variants[selectedVariant].price.replace('₺', '').replace('.', ''))
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: priceNumber,
        image: product.image,
      })
    }
  }

  const toggleFavorite = () => {
    const priceNumber = parseFloat(variants[selectedVariant].price.replace('₺', '').replace('.', ''))
    if (isInFavorites) {
      removeFromFavorites(product.id)
    } else {
      addToFavorites({
        id: product.id,
        name: product.name,
        price: priceNumber,
        image: product.image,
        category: product.category,
        description: product.description
      })
    }
  }

  return (
    <section className="relative min-h-screen bg-cream py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          
          {/* LEFT: Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-square rounded-3xl overflow-hidden bg-white shadow-xl"
            >
              <Image
                src={gallery[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
                quality={95}
              />
            </motion.div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-3 gap-4">
              {gallery.map((img, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative aspect-square rounded-xl overflow-hidden bg-white shadow-md transition-all ${
                    selectedImage === index ? 'ring-4 ring-olive-deep' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </div>

          {/* RIGHT: Product Info */}
          <div className="space-y-6">
            
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-olive-deep mb-4">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < rating ? 'fill-gold text-gold' : 'text-sage/30'
                      }`}
                    />
                  ))}
                </div>
                <a href="#" className="text-sage-dark text-sm hover:text-gold transition-colors underline">
                  ({reviewCount}) Yorum
                </a>
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              {product.features.slice(0, 4).map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  <span className="text-olive-deep text-sm">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* Variant Selector */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-3"
            >
              <label className="text-sm font-semibold text-olive-deep block">
                Ağırlık
              </label>
              <div className="flex gap-3">
                {variants.map((variant, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setSelectedVariant(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                      selectedVariant === index
                        ? 'bg-olive-deep text-cream shadow-lg'
                        : 'bg-white border-2 border-sage/30 text-olive-deep hover:border-olive-deep'
                    }`}
                  >
                    {variant.size}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Price */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="py-4"
            >
              <span className="font-serif text-4xl font-bold text-olive-deep">
                {variants[selectedVariant].price}
              </span>
            </motion.div>

            {/* Quantity & Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-4"
            >
              {/* Quantity Selector */}
              <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-md">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 bg-sage/20 rounded-lg flex items-center justify-center hover:bg-sage/30 transition-colors"
                >
                  <Minus className="w-4 h-4 text-olive-deep" />
                </motion.button>
                <span className="font-bold text-olive-deep text-lg min-w-[40px] text-center">
                  {quantity}
                </span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 bg-gold/20 rounded-lg flex items-center justify-center hover:bg-gold/30 transition-colors"
                >
                  <Plus className="w-4 h-4 text-olive-deep" />
                </motion.button>
              </div>

              {/* Add to Cart Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                className="flex-1 bg-olive-deep hover:bg-olive-medium text-cream font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <ShoppingBag className="w-5 h-5" />
                SEPETE EKLE
              </motion.button>

              {/* Favorite Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleFavorite}
                className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-lg transition-all ${
                  isInFavorites
                    ? 'bg-red-500 text-white'
                    : 'bg-white text-olive-deep hover:bg-sage/10'
                }`}
              >
                <Heart className={`w-6 h-6 ${isInFavorites ? 'fill-white' : ''}`} />
              </motion.button>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="pt-6 border-t border-sage/20"
            >
              <p className="text-sage-dark leading-relaxed font-display">
                {product.description}
              </p>
            </motion.div>

            {/* Product Story - Only if available */}
            {product.story && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="pt-6 border-t border-sage/20"
              >
                <h3 className="font-serif text-xl font-semibold text-olive-deep mb-3">
                  Ürünün Hikayesi
                </h3>
                <p className="text-sage-dark leading-relaxed font-display">
                  {product.story}
                </p>
              </motion.div>
            )}

            {/* Product Specs - Origin and Harvest - Only if available */}
            {(product.origin || product.harvestDate) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6"
              >
                {product.origin && (
                  <div className="bg-white p-6 rounded-2xl shadow-md">
                    <p className="text-xs text-sage-dark uppercase tracking-wider mb-1">
                      Menşei
                    </p>
                    <p className="font-serif text-lg font-bold text-olive-deep">
                      {product.origin}
                    </p>
                  </div>
                )}

                {product.harvestDate && (
                  <div className="bg-white p-6 rounded-2xl shadow-md">
                    <p className="text-xs text-sage-dark uppercase tracking-wider mb-1">
                      Hasat Tarihi
                    </p>
                    <p className="font-serif text-lg font-bold text-olive-deep">
                      {product.harvestDate}
                    </p>
                  </div>
                )}
              </motion.div>
            )}

            {/* Acid Ratio - Only for olive oil products */}
            {product.acidRatio && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="pt-6"
              >
                <div className="bg-olive-deep/5 p-6 rounded-2xl">
                  <p className="text-xs text-sage-dark uppercase tracking-wider mb-2">
                    Asit Oranı
                  </p>
                  <p className="font-serif text-3xl font-bold text-olive-deep mb-2">
                    {product.acidRatio}
                  </p>
                  <p className="text-sage-dark text-sm font-display">
                    Extra Virgin kalitesi - Uluslararası standartlara uygun
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
