'use client'

import { motion, useInView } from 'framer-motion'
import { MessageCircle, Eye, ShoppingBag, Plus, Minus, Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { useCart } from '@/context/CartContext'
import { useFavorites } from '@/context/FavoritesContext'

interface Product {
  id: number
  name: string
  category: string
  image: string
  price: string
  description: string
  region?: string
  isFeatured?: boolean
}

const products: Product[] = [
  {
    id: 1,
    name: 'Premium Soğuk Sıkım Zeytinyağı',
    category: 'Zeytinyağı',
    image: '/images/erken hasat.jpg',
    price: '₺450',
    description: 'Asitlik oranı %0.3, ilk hasat'
  },
  {
    id: 2,
    name: 'Yeşil Çizik Zeytin',
    category: 'Sofralık Zeytin',
    image: '/images/cızık.jpg',
    price: '₺180',
    description: 'Organik, el ile toplandı'
  },
  {
    id: 3,
    name: 'Gemlik Siyah Zeytin',
    category: 'Sofralık Zeytin',
    image: '/images/sofralıksıyah.jpg',
    price: '₺220',
    description: 'Doğal fermantasyon'
  },
  {
    id: 4,
    name: 'Çiçek Balı',
    category: 'Bal',
    image: '/images/cıcek.jpg',
    price: '₺220',
    description: 'Doğal, katkısız çiçek balı',
    region: 'Marmara',
    isFeatured: true
  },
  {
    id: 5,
    name: 'Erken Hasat Zeytinyağı',
    category: 'Zeytinyağı',
    image: '/images/gemlık.jpg',
    price: '₺520',
    description: 'Yoğun aromalı, güçlü tat'
  },
  {
    id: 6,
    name: 'Taş Baskı Zeytinyağı',
    category: 'Zeytinyağı',
    image: '/images/tasbaskı.jpg',
    price: '₺680',
    description: 'Geleneksel yöntemle üretim'
  },
  {
    id: 7,
    name: 'Kırma Yeşil Zeytin',
    category: 'Sofralık Zeytin',
    image: '/images/kırmayesıl.jpg',
    price: '₺160',
    description: 'Hafif tuzlu, yemeklere uygun'
  },
  {
    id: 8,
    name: 'Gemlik Zeytini',
    category: 'Sofralık Zeytin',
    image: '/images/sofralıksıyah.jpg',
    price: '₺145',
    description: 'Yumuşak dokusu ve eşsiz lezzet',
    region: 'Marmara',
    isFeatured: true
  },
]

function ProductCard({ product, index }: { product: Product; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { addToCart, updateQuantity, getItemQuantity } = useCart()
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites()
  
  const quantity = getItemQuantity(product.id)
  const isInFavorites = isFavorite(product.id)

  const handleAddToCart = () => {
    const priceNumber = parseFloat(product.price.replace('₺', ''))
    addToCart({
      id: product.id,
      name: product.name,
      price: priceNumber,
      image: product.image,
    })
  }

  const toggleFavorite = () => {
    const priceNumber = parseFloat(product.price.replace('₺', ''))
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
      {/* Image Container */}
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden cursor-pointer">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Favorite Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleFavorite}
          className={`absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-lg ${
            isInFavorites 
              ? 'bg-red-500 text-white' 
              : 'bg-white/90 text-olive-deep hover:bg-white'
          }`}
        >
          <Heart className={`w-5 h-5 ${isInFavorites ? 'fill-white' : ''}`} />
        </motion.button>
        
        {/* View Detail Overlay on Hover */}
        <motion.div
          initial={{ opacity: 0 }}
          className="absolute inset-0 bg-gradient-to-t from-olive-deep/60 via-olive-deep/40 to-transparent flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        >
          <motion.a
            href={`/product/${product.id}`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="glass px-6 py-3 rounded-full text-cream font-semibold flex items-center gap-2 hover:bg-white/30 transition-all shadow-lg"
          >
            <Eye className="w-5 h-5" />
            Detayları Gör
          </motion.a>
        </motion.div>
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
        <div className="flex items-center justify-between mb-4">
          <span className="font-serif text-2xl font-bold text-olive-deep">
            {product.price}
          </span>
        </div>
        
        {/* Quantity Controls */}
        <div className="flex items-center justify-center">
          {quantity > 0 ? (
            <div className="flex items-center gap-3 bg-olive-deep/10 rounded-full px-3 py-2 w-full justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleDecrement}
                className="w-9 h-9 bg-olive-deep text-cream rounded-full flex items-center justify-center hover:bg-olive-medium transition-colors"
              >
                <Minus className="w-4 h-4" />
              </motion.button>
              <span className="font-bold text-olive-deep text-lg min-w-[32px] text-center">
                {quantity}
              </span>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleIncrement}
                className="w-9 h-9 bg-gold text-olive-deep rounded-full flex items-center justify-center hover:bg-gold-light transition-colors"
              >
                <Plus className="w-4 h-4" />
              </motion.button>
            </div>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAddToCart}
              className="bg-gold text-olive-deep px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-gold-light transition-colors w-full justify-center"
            >
              <Plus className="w-5 h-5" />
              Sepete Ekle
            </motion.button>
          )}
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
            Ürünlerimiz
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
