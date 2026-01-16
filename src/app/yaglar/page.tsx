'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import Footer from '@/components/Footer'

const yagProducts = [
  {
    id: 301,
    name: 'Erken Hasat Zeytinyağı',
    description: 'Erken hasat edilmiş zeytinlerden soğuk sıkım yöntemiyle elde edilen, yüksek antioksidan içerikli natürel sızma zeytinyağı. Acılığı ve keskin aroması ile öne çıkar.',
    price: 450,
    image: '/images/yag-erken-hasat.jpg',
    weight: '1L'
  },
  {
    id: 302,
    name: 'Soğuk Sıkım Zeytinyağı',
    description: 'Geleneksel taş değirmende soğuk sıkım yöntemiyle üretilen, asitliği düşük natürel sızma zeytinyağı. Sofralık kullanım için ideal.',
    price: 380,
    image: '/images/yag-soguk-sikim.jpg',
    weight: '1L'
  },
  {
    id: 303,
    name: 'Organik Zeytinyağı',
    description: 'Organik sertifikalı zeytinlerden üretilen, kimyasal gübre ve ilaç kullanılmadan yetiştirilen zeytinyağı. Doğal ve sağlıklı.',
    price: 520,
    image: '/images/yag-organik.jpg',
    weight: '1L'
  },
  {
    id: 304,
    name: 'Filtre Edilmiş Zeytinyağı',
    description: 'Modern filtreleme teknolojisi ile berraklaştırılmış, uzun ömürlü zeytinyağı. Kızartma ve pişirme için uygun.',
    price: 350,
    image: '/images/yag-filtre.jpg',
    weight: '1L'
  },
  {
    id: 305,
    name: 'Natürel Sızma Zeytinyağı',
    description: 'Hiç işlem görmemiş, doğrudan preslenmiş natürel zeytinyağı. Tüm aromasını ve besin değerlerini korur.',
    price: 420,
    image: '/images/yag-naturel.jpg',
    weight: '1L'
  },
  {
    id: 306,
    name: 'Premium Zeytinyağı Seti',
    description: 'Erken hasat, soğuk sıkım ve organik zeytinyağlarından oluşan özel hediye seti. 3x250ml şık şişelerde.',
    price: 380,
    image: '/images/yag-set.jpg',
    weight: '3x250ml'
  }
]

export default function YaglarPage() {
  const { addToCart } = useCart()

  const handleAddToCart = (product: typeof yagProducts[0]) => {
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
              Zeytinyağlarımız
            </h1>
            <p className="text-lg text-olive-deep/80 max-w-2xl mx-auto">
              Ege\'nin bereketli topraklarında yetiştirilen zeytinlerden, geleneksel ve modern yöntemlerle 
              üretilen, saf ve doğal zeytinyağlarımız. Sağlığınız için altın değerinde.
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
                <div className="relative h-64 bg-amber-50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent z-10" />
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-amber-100 to-green-100 rounded-full flex items-center justify-center">
                      <span className="text-6xl">🫒</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-serif text-2xl font-bold text-olive-deep group-hover:text-gold transition-colors">
                      {product.name}
                    </h3>
                    <span className="text-sm text-olive-deep/60 font-semibold bg-green-100 px-3 py-1 rounded-full">
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
