'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, Plus, Minus, Heart } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { useFavorites } from '@/context/FavoritesContext'
import Footer from '@/components/Footer'
import { products } from '@/data/products'

// Zeytinyağı kategorisindeki ürünleri filtrele
const yagProducts = products.filter(p => p.category === 'Zeytinyağı')

export default function YaglarPage() {
  const { addToCart, updateQuantity, getItemQuantity } = useCart()
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites()

  const handleAddToCart = (product: typeof yagProducts[0]) => {
    const priceNumber = parseFloat(product.price.replace('₺', '').replace('.', ''))
    addToCart({
      id: product.id,
      name: product.name,
      price: priceNumber,
      image: product.image,
    })
  }

  const toggleFavorite = (product: typeof yagProducts[0]) => {
    const priceNumber = parseFloat(product.price.replace('₺', '').replace('.', ''))
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id)
    } else {
      addToFavorites({
        id: product.id,
        name: product.name,
        price: priceNumber,
        image: product.image,
        category: 'Zeytinyagı',
        description: product.description
      })
    }
  }

  const handleIncrement = (product: typeof yagProducts[0]) => {
    const quantity = getItemQuantity(product.id)
    if (quantity === 0) {
      handleAddToCart(product)
    } else {
      updateQuantity(product.id, quantity + 1)
    }
  }

  const handleDecrement = (productId: number) => {
    const quantity = getItemQuantity(productId)
    if (quantity > 0) {
      updateQuantity(productId, quantity - 1)
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
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-olive-deep mb-4">
              Zeytinyağlarımız
            </h1>
            <p className="text-lg text-olive-deep/80 max-w-2xl mx-auto">
              Marmara Bölgesi'nin bereketli topraklarında, Gemlik'in eşsiz ikliminde yetiştirilen zeytinlerden,
              geleneksel ve modern yöntemlerle üretilen, saf ve doğal zeytinyağlarımız. Sağlığınız için altın değerinde.
            </p>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {yagProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <Link href={`/product/${product.id}`} className="block">
                  <div className="relative h-64 bg-amber-50 overflow-hidden cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent z-10" />
                  
                  {/* Favorite Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => toggleFavorite(product)}
                    className={`absolute top-4 right-4 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-lg ${
                      isFavorite(product.id)
                        ? 'bg-red-500 text-white' 
                        : 'bg-white/90 text-olive-deep hover:bg-white'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isFavorite(product.id) ? 'fill-white' : ''}`} />
                  </motion.button>
                  
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  </div>
                </Link>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-serif text-2xl font-bold text-olive-deep group-hover:text-gold transition-colors">
                      {product.name}
                    </h3>
                    <span className="text-sm text-olive-deep/60 font-semibold bg-green-100 px-3 py-1 rounded-full">
                      {product.variants?.[0]?.size || '500ml'}
                    </span>
                  </div>

                  <p className="text-olive-deep/70 mb-6 leading-relaxed min-h-[80px]">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-3xl font-bold text-olive-deep">
                        {product.price}
                      </span>
                      <span className="text-sm text-olive-deep/60">
                        / {product.variants?.[0]?.size || '500ml'}
                      </span>
                    </div>

                    {/* Quantity Controls */}
                    {(() => {
                      const quantity = getItemQuantity(product.id)
                      return quantity > 0 ? (
                        <div className="flex items-center gap-3 bg-olive-deep/10 rounded-full px-3 py-2">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleDecrement(product.id)}
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
                            onClick={() => handleIncrement(product)}
                            className="w-9 h-9 bg-gold text-olive-deep rounded-full flex items-center justify-center hover:bg-gold-light transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </motion.button>
                        </div>
                      ) : (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleAddToCart(product)}
                          className="flex items-center gap-2 px-6 py-3 bg-gold hover:bg-gold/90 text-olive-deep font-semibold rounded-full transition-colors shadow-md hover:shadow-lg"
                        >
                          <Plus className="w-5 h-5" />
                          Ekle
                        </motion.button>
                      )
                    })()}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-lg"
          >
            <h2 className="font-serif text-3xl font-bold text-olive-deep mb-6">
              Zeytinyağlarımız Hakkında
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-olive-deep/80">
              <div>
                <h3 className="font-semibold text-xl text-olive-deep mb-3">🌿 Soğuk Sıkım</h3>
                <p className="leading-relaxed">
                  Zeytinyağlarımız 27°C\'nin altında, soğuk sıkım yöntemiyle üretilir. 
                  Bu sayede tüm besin değerleri, vitaminler ve aroması korunur.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-olive-deep mb-3">✨ Düşük Asitlik</h3>
                <p className="leading-relaxed">
                  Tüm zeytinyağlarımız %0.8\'in altında asitlik değerine sahiptir. 
                  Bu, ekstra sızma zeytinyağı standardıdır ve yüksek kaliteyi garanti eder.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-olive-deep mb-3">🫒 Özenle Seçilmiş Zeytinler</h3>
                <p className="leading-relaxed">
                  Sadece sağlıklı, olgunlaşmış ve hasar görmemiş zeytinler kullanılır. 
                  Hasat edildikten sonra 24 saat içinde preslenirler.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-olive-deep mb-3">🏆 Sertifikalı Kalite</h3>
                <p className="leading-relaxed">
                  Zeytinyağlarımız ulusal ve uluslararası standartlara uygun olarak üretilir ve 
                  düzenli olarak laboratuvar analizlerinden geçirilir.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
