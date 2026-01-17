'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ShoppingCart, Plus, Minus, Heart } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { useFavorites } from '@/context/FavoritesContext'
import Footer from '@/components/Footer'

const dogalUrunler = [
  {
    id: 401,
    name: 'Zeytinyağlı Doğal Sabun',
    description: 'El yapımı, kimyasal içermeyen zeytinyağlı sabunlarımız. Cildiniz için en doğal bakım. Her cilt tipine uygun, hassas formül.',
    price: 85,
    image: '/images/sabun.jpg',
    weight: '100g'
  },
  {
    id: 402,
    name: 'Defne Sabunu',
    description: 'Geleneksel Antep sabunu, %100 doğal zeytinyağı ve defne yağı ile üretilmiş. Saç ve cilt bakımı için ideal.',
    price: 120,
    image: '/images/sabun-defne.jpg',
    weight: '150g'
  },
  {
    id: 403,
    name: 'Lavanta Sabunu',
    description: 'Rahatlatıcı lavanta özlü, zeytinyağı bazlı doğal sabun. Aromaterapi etkisi ile huzur ve temizlik bir arada.',
    price: 95,
    image: '/images/sabun-lavanta.jpg',
    weight: '100g'
  },
  {
    id: 404,
    name: 'Bal Özlü Sabun',
    description: 'Doğal bal ve zeytinyağı ile zenginleştirilmiş besleyici sabun. Cildinize nem ve yumuşaklık kazandırır.',
    price: 100,
    image: '/images/sabun-bal.jpg',
    weight: '100g'
  },
  {
    id: 405,
    name: 'Aktif Karbonlu Sabun',
    description: 'Aktif kömür ve zeytinyağı karışımı detoks sabunu. Cildinizi derinlemesine temizler ve arındırır.',
    price: 110,
    image: '/images/sabun-karbon.jpg',
    weight: '100g'
  },
  {
    id: 406,
    name: 'Sabun Seti (6\'lı)',
    description: 'Tüm sabun çeşitlerimizden oluşan özel hediye seti. Kendiniz için veya sevdikleriniz için ideal.',
    price: 480,
    image: '/images/sabun-set.jpg',
    weight: '6x100g'
  }
]

export default function DogalUrunlerPage() {
  const { addToCart, updateQuantity, getItemQuantity } = useCart()
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites()

  const handleAddToCart = (product: typeof dogalUrunler[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
  }

  const toggleFavorite = (product: typeof dogalUrunler[0]) => {
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id)
    } else {
      addToFavorites({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: 'Doğal Ürünler',
        description: product.description
      })
    }
  }

  const handleIncrement = (product: typeof dogalUrunler[0]) => {
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
              Doğal Ürünlerimiz
            </h1>
            <p className="text-lg text-olive-deep/80 max-w-2xl mx-auto">
              Zeytinyağından üretilmiş, el yapımı doğal sabunlar ve kozmetik ürünlerimiz. 
              Kimyasal içermeyen, cildiniz için en saf bakım ürünleri.
            </p>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dogalUrunler.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-64 bg-purple-50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent z-10" />
                  
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
                  
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                      <span className="text-6xl">🧼</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-serif text-2xl font-bold text-olive-deep group-hover:text-gold transition-colors">
                      {product.name}
                    </h3>
                    <span className="text-sm text-olive-deep/60 font-semibold bg-purple-100 px-3 py-1 rounded-full">
                      {product.weight}
                    </span>
                  </div>

                  <p className="text-olive-deep/70 mb-6 leading-relaxed min-h-[80px]">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-3xl font-bold text-olive-deep">
                        ₺{product.price}
                      </span>
                      <span className="text-sm text-olive-deep/60">
                        / {product.weight}
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
              Doğal Ürünlerimiz Hakkında
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-olive-deep/80">
              <div>
                <h3 className="font-semibold text-xl text-olive-deep mb-3">🌿 %100 Doğal</h3>
                <p className="leading-relaxed">
                  Tüm sabunlarımız el yapımı ve kimyasal içermez. Sadece zeytinyağı, 
                  bitkisel yağlar ve doğal esanslar kullanılır.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-olive-deep mb-3">✨ Hassas Cilt Dostu</h3>
                <p className="leading-relaxed">
                  Hassas ciltler için ideal. Paraben, SLS, kimyasal katkı maddesi içermez. 
                  Alerjik reaksiyonlara neden olmaz.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-olive-deep mb-3">🧼 Geleneksel Üretim</h3>
                <p className="leading-relaxed">
                  Yüzyıllık geleneksel sabun yapım yöntemleri ile üretilir. 
                  Soğuk proses yöntemi ile tüm faydası korunur.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-olive-deep mb-3">♻️ Çevre Dostu</h3>
                <p className="leading-relaxed">
                  Biyolojik olarak parçalanabilir, çevre dostu ambalaj. 
                  Hayvanlar üzerinde test edilmemiştir.
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
