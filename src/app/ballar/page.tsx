'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import Footer from '@/components/Footer'

const balProducts = [
  {
    id: 201,
    name: 'Karakovan Balı',
    description: 'Yüzyıllık geleneksel karakovan arıcılığı ile üretilmiş, doğal propolis ve balmumu içeren eşsiz tatlar. Polen ve arı sütü zenginliği.',
    price: 350,
    image: '/images/bal-karakovan.jpg',
    weight: '500g'
  },
  {
    id: 202,
    name: 'Çam Balı',
    description: 'Türkiye\'nin eşsiz çam balı. Yüksek mineral ve enzim içeriği ile sağlığınız için en doğal besin kaynağı. Koyu kıvamlı ve aromatik.',
    price: 280,
    image: '/images/bal-cam.jpg',
    weight: '500g'
  },
  {
    id: 203,
    name: 'Çiçek Balı',
    description: 'İlkbahar çiçeklerinden toplanan, hafif ve hoş kokulu çiçek balı. Kahvaltılarınızın vazgeçilmezi.',
    price: 220,
    image: '/images/bal-cicek.jpg',
    weight: '500g'
  },
  {
    id: 204,
    name: 'Kestane Balı',
    description: 'Kestane çiçeklerinden elde edilen, acımsı ve aromatik kestane balı. Yüksek antioksidan içeriği.',
    price: 240,
    image: '/images/bal-kestane.jpg',
    weight: '500g'
  },
  {
    id: 205,
    name: 'Akasya Balı',
    description: 'Akasya çiçeklerinden toplanan, açık renkli ve kristalize olmayan doğal bal. Hafif ve lezzetli.',
    price: 230,
    image: '/images/bal-akasya.jpg',
    weight: '500g'
  },
  {
    id: 206,
    name: 'Anzer Balı',
    description: 'Anzer yaylasının eşsiz florası ile üretilen, dünyaca ünlü Anzer balı. Sınırlı üretim, yüksek kalite.',
    price: 450,
    image: '/images/bal-anzer.jpg',
    weight: '500g'
  }
]

export default function BallarPage() {
  const { addToCart } = useCart()

  const handleAddToCart = (product: typeof balProducts[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
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
              Ballarımız
            </h1>
            <p className="text-lg text-olive-deep/80 max-w-2xl mx-auto">
              Türkiye\'nin dört bir yanından, doğal yöntemlerle üretilmiş, katkısız ve organik ballarımız. 
              Her biri doğanın eşsiz hediyesi, sağlığınız için en değerli besin.
            </p>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {balProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-64 bg-amber-50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-600/20 to-transparent z-10" />
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-32 h-32 bg-amber-100 rounded-full flex items-center justify-center">
                      <span className="text-6xl">🍯</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-serif text-2xl font-bold text-olive-deep group-hover:text-gold transition-colors">
                      {product.name}
                    </h3>
                    <span className="text-sm text-olive-deep/60 font-semibold bg-amber-100 px-3 py-1 rounded-full">
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

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleAddToCart(product)}
                      className="flex items-center gap-2 px-6 py-3 bg-gold hover:bg-gold/90 text-olive-deep font-semibold rounded-full transition-colors shadow-md hover:shadow-lg"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      Sepete Ekle
                    </motion.button>
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
              Ballarımız Hakkında
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-olive-deep/80">
              <div>
                <h3 className="font-semibold text-xl text-olive-deep mb-3">🐝 Saf ve Doğal</h3>
                <p className="leading-relaxed">
                  Ballarımız hiçbir katkı maddesi içermez, tamamen doğal yöntemlerle üretilir. 
                  Her kavanoz, arıların doğada özgürce topladığı nektardan elde edilir.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-olive-deep mb-3">🌸 Yüksek Kalite</h3>
                <p className="leading-relaxed">
                  Bal üretiminde modern hijyen standartları ve geleneksel arıcılık bilgisi bir araya gelir. 
                  Her ürün laboratuvar testlerinden geçer.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-olive-deep mb-3">💚 Sağlık Deposu</h3>
                <p className="leading-relaxed">
                  Ballarımız vitamin, mineral ve antioksidan açısından zengindir. 
                  Doğal antibiyotik özelliği ile bağışıklık sisteminizi güçlendirir.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-olive-deep mb-3">🎯 Analiz Sertifikalı</h3>
                <p className="leading-relaxed">
                  Tüm ballarımız akredite laboratuvarlarda analiz edilir ve sertifikalandırılır. 
                  Kalite garantisi ile size ulaşır.
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
