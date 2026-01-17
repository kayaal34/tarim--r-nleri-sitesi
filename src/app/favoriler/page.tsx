'use client'

import { motion } from 'framer-motion'
import { Heart, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useFavorites } from '@/context/FavoritesContext'
import { useCart } from '@/context/CartContext'
import Footer from '@/components/Footer'

export default function FavorilerPage() {
  const { favorites, removeFromFavorites } = useFavorites()
  const { addToCart, updateQuantity, getItemQuantity } = useCart()

  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    })
  }

  const handleIncrement = (item: any) => {
    const quantity = getItemQuantity(item.id)
    if (quantity === 0) {
      handleAddToCart(item)
    } else {
      updateQuantity(item.id, quantity + 1)
    }
  }

  const handleDecrement = (itemId: number) => {
    const quantity = getItemQuantity(itemId)
    if (quantity > 0) {
      updateQuantity(itemId, quantity - 1)
    }
  }

  return (
    <div className="min-h-screen bg-cream">
      <div className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Heart className="w-12 h-12 text-red-500 fill-red-500" />
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-olive-deep">
                Favorilerim
              </h1>
            </div>
            <p className="text-lg text-olive-deep/80 max-w-2xl mx-auto">
              Beğendiğiniz ürünler burada. İstediğiniz zaman sepete ekleyebilirsiniz.
            </p>
          </motion.div>

          {favorites.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="w-32 h-32 rounded-full bg-olive-deep/10 flex items-center justify-center mx-auto mb-6">
                <Heart className="w-16 h-16 text-olive-deep/30" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-olive-deep mb-4">
                Favori ürününüz yok
              </h2>
              <p className="text-olive-deep/70 mb-8 max-w-md mx-auto">
                Beğendiğiniz ürünlerin kalbine tıklayarak favorilere ekleyebilirsiniz
              </p>
              <Link
                href="/"
                className="inline-block bg-gold hover:bg-gold/90 text-olive-deep font-bold px-8 py-4 rounded-full transition-colors shadow-lg"
              >
                Ürünleri Keşfet
              </Link>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {favorites.map((item, index) => {
                const quantity = getItemQuantity(item.id)
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group relative"
                  >
                    {/* Remove from Favorites Button */}
                    <motion.button
                      onClick={() => removeFromFavorites(item.id)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center"
                    >
                      <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                    </motion.button>

                    {/* Image */}
                    <div className="relative aspect-square overflow-hidden bg-sage/10">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <span className="text-xs uppercase tracking-wider text-gold font-semibold">
                        {item.category}
                      </span>
                      <h3 className="font-serif text-xl font-semibold text-olive-deep mb-2 mt-1 line-clamp-2">
                        {item.name}
                      </h3>
                      {item.description && (
                        <p className="text-sm text-sage-dark mb-4 line-clamp-2">
                          {item.description}
                        </p>
                      )}
                      
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-serif text-2xl font-bold text-olive-deep">
                          ₺{item.price}
                        </span>
                      </div>

                      {/* Add to Cart / Quantity Controls */}
                      <div className="flex items-center justify-center">
                        {quantity > 0 ? (
                          <div className="flex items-center gap-3 bg-olive-deep/10 rounded-full px-3 py-2 w-full justify-center">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => handleDecrement(item.id)}
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
                              onClick={() => handleIncrement(item)}
                              className="w-9 h-9 bg-gold text-olive-deep rounded-full flex items-center justify-center hover:bg-gold-light transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </motion.button>
                          </div>
                        ) : (
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleAddToCart(item)}
                            className="bg-gold text-olive-deep px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-gold-light transition-colors w-full justify-center"
                          >
                            <ShoppingBag className="w-5 h-5" />
                            Sepete Ekle
                          </motion.button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}
