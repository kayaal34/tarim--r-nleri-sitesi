'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import Footer from '@/components/Footer'

const zeytinProducts = [
  {
    id: 101,
    name: 'Sofralık Siyah Zeytin',
    description: 'Geleneksel yöntemlerle işlenmiş, özenle seçilmiş kaliteli sofralık siyah zeytinlerimiz. Kahvaltı sofralarınızın vazgeçilmezi.',
    price: 125,
    image: '/images/zeytin-siyah.jpg',
    weight: '500g'
  },
  {
    id: 102,
    name: 'Kırma Yeşil Zeytin',
    description: 'Taze, çıtır çıtır kırma yeşil zeytinler. Doğal fermantasyon ile hazırlanmış, sağlıklı ve lezzetli.',
    price: 135,
    image: '/images/zeytin-yesil.jpg',
    weight: '500g'
  },
  {
    id: 103,
    name: 'Gemlik Zeytini',
    description: 'Ege\'nin ünlü Gemlik zeytini. Yumuşak dokusu ve eşsiz lezzeti ile sofranızın yıldızı.',
    price: 145,
    image: '/images/zeytin-gemlik.jpg',
    weight: '500g'
  },
  {
    id: 104,
    name: 'Çizik Zeytin',
    description: 'Özel çizik tekniği ile hazırlanmış, limon aromalı nefis zeytinler. Acısı alınmış, taze ve lezzetli.',
    price: 140,
    image: '/images/zeytin-cizik.jpg',
    weight: '500g'
  },
  {
    id: 105,
    name: 'Kızartmalık Zeytin',
    description: 'Kahvaltılık kızartma için özel olarak hazırlanmış zeytinler. Tuzlu ve lezzetli.',
    price: 130,
    image: '/images/zeytin-kizartmalik.jpg',
    weight: '500g'
  },
  {
    id: 106,
    name: 'Salamura Zeytin',
    description: 'Geleneksel salamura yöntemi ile hazırlanmış, doğal ve sağlıklı zeytinler.',
    price: 120,
    image: '/images/zeytin-salamura.jpg',
    weight: '500g'
  }
]

export default function ZeytinlerPage() {
  const { addToCart } = useCart()

  const handleAddToCart = (product: typeof zeytinProducts[0]) => {
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
              Zeytinlerimiz
            </h1>
            <p className="text-lg text-olive-deep/80 max-w-2xl mx-auto">
              Ege\'nin bereketli topraklarından sofranıza, özenle seçilmiş ve geleneksel yöntemlerle işlenmiş 
              zeytinlerimizle tanışın. Her biri doğanın eşsiz lezzetini taşıyor.
            </p>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {zeytinProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-64 bg-sage/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-olive-deep/20 to-transparent z-10" />
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-32 h-32 bg-olive-deep/10 rounded-full flex items-center justify-center">
                      <span className="text-6xl">🫒</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-serif text-2xl font-bold text-olive-deep group-hover:text-gold transition-colors">
                      {product.name}
                    </h3>
                    <span className="text-sm text-olive-deep/60 font-semibold bg-sage/30 px-3 py-1 rounded-full">
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
              Zeytinlerimiz Hakkında
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-olive-deep/80">
              <div>
                <h3 className="font-semibold text-xl text-olive-deep mb-3">🌿 Doğal Üretim</h3>
                <p className="leading-relaxed">
                  Zeytinlerimiz, kimyasal gübre ve ilaç kullanılmadan, doğal yöntemlerle yetiştirilir. 
                  Topraktan sofraya kadar her aşamada kalite kontrolü yapılır.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-olive-deep mb-3">🫒 Geleneksel İşleme</h3>
                <p className="leading-relaxed">
                  Yüzyıllardır süregelen geleneksel yöntemlerle işlenen zeytinlerimiz, 
                  modern hijyen standartlarında hazırlanır ve size taze olarak ulaşır.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-olive-deep mb-3">✨ Kalite Garantisi</h3>
                <p className="leading-relaxed">
                  Her bir zeytin özenle seçilir ve kalite kontrolünden geçirilir. 
                  Memnuniyetiniz bizim önceliğimizdir.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-olive-deep mb-3">📦 Hızlı Teslimat</h3>
                <p className="leading-relaxed">
                  Siparişiniz, taze olarak özenle paketlenir ve kısa sürede kapınıza teslim edilir.
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
