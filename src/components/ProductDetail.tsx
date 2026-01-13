'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { MessageCircle, Award, Droplet, MapPin, Clock, Heart, Star, ShoppingBag, ChevronRight, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { useCart } from '@/context/CartContext'

interface ProductDetailProps {
  product: {
    name: string
    category: string
    image: string
    price: string
    description: string
    story: string
    acidRatio: string
    origin: string
    harvestDate: string
    features: string[]
    rating?: number
    reviewCount?: number
    variants?: Array<{ size: string; price: string }>
  }
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedVariant, setSelectedVariant] = useState(0)
  const [openAccordion, setOpenAccordion] = useState<string | null>('story')
  const { addToCart } = useCart()
  
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  // Parallax effect for the image
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  const variants = product.variants || [
    { size: '500ml Cam', price: '₺450' },
    { size: '1 Litre Teneke', price: '₺850' },
    { size: '5 Litre Teneke', price: '₺3.800' },
  ]

  const rating = product.rating || 5
  const reviewCount = product.reviewCount || 124

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? null : section)
  }

  const handleAddToCart = () => {
    const priceNumber = parseFloat(variants[selectedVariant].price.replace('₺', '').replace('.', ''))
    addToCart({
      id: 1, // You would get this from product
      name: product.name,
      price: priceNumber,
      image: product.image,
      variant: variants[selectedVariant].size,
    })
  }

  return (
    <section ref={containerRef} className="relative min-h-screen bg-cream py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Sticky Image Section */}
          <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-12rem)]">
            <motion.div
              style={{ y: imageY, scale: imageScale }}
              className="relative w-full h-[500px] lg:h-full rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
                quality={95}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-olive-deep/20 via-transparent to-transparent" />
              
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute top-6 right-6 glass px-4 py-2 rounded-full flex items-center gap-2"
              >
                <Award className="w-5 h-5 text-gold" />
                <span className="text-cream font-semibold text-sm">Premium</span>
              </motion.div>

              {/* Favorite Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-6 left-6 glass w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
              >
                <Heart className="w-6 h-6 text-cream" />
              </motion.button>
            </motion.div>
          </div>

          {/* RIGHT: Scrollable Details Section */}
          <div className="space-y-8">
            
            {/* Breadcrumb */}
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-sm"
            >
              <a href="/" className="text-sage-dark hover:text-olive-deep transition-colors">
                Anasayfa
              </a>
              <ChevronRight className="w-4 h-4 text-sage-dark" />
              <a href="/#products" className="text-sage-dark hover:text-olive-deep transition-colors">
                Zeytinyağları
              </a>
              <ChevronRight className="w-4 h-4 text-sage-dark" />
              <span className="text-olive-deep font-semibold">Soğuk Sıkım</span>
            </motion.nav>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gold text-sm uppercase tracking-wider font-semibold mb-2">
                {product.category}
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-olive-deep mb-4">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < rating ? 'fill-gold text-gold' : 'text-sage'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sage-dark text-sm">
                  ({reviewCount} Değerlendirme)
                </span>
              </div>

              <p className="text-sage-dark text-lg font-display leading-relaxed">
                {product.description}
              </p>
            </motion.div>

            {/* Variant Selector */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              <label className="text-sm font-semibold text-olive-deep block">
                Boyut Seçin:
              </label>
              <div className="flex flex-wrap gap-3">
                {variants.map((variant, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setSelectedVariant(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-3 rounded-full font-semibold transition-all ${
                      selectedVariant === index
                        ? 'bg-olive-deep text-cream shadow-lg'
                        : 'bg-white border-2 border-sage text-olive-deep hover:border-olive-deep'
                    }`}
                  >
                    {variant.size}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Price & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-dark p-6 rounded-2xl"
            >
              <div className="mb-6">
                <p className="text-sage-dark text-sm mb-1">Fiyat</p>
                <p className="font-serif text-4xl md:text-5xl font-bold text-olive-deep">
                  {variants[selectedVariant].price}
                </p>
                <p className="text-sage-dark text-xs mt-1">
                  {variants[selectedVariant].size}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <motion.button
                  onClick={handleAddToCart}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-olive-deep px-6 py-4 rounded-full text-cream font-bold flex items-center justify-center gap-3 hover:bg-olive-medium transition-all shadow-lg"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Sepete Ekle
                </motion.button>
                <motion.a
                  href={`https://wa.me/905551234567?text=Merhaba, ${product.name} (${variants[selectedVariant].size}) için sipariş vermek istiyorum.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-[#25D366] px-6 py-4 rounded-full text-white font-bold flex items-center justify-center gap-3 hover:bg-[#20BD5A] transition-all shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Sipariş
                </motion.a>
              </div>
            </motion.div>

            {/* Accordion Sections */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              {/* Product Story Accordion */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <button
                  onClick={() => toggleAccordion('story')}
                  className="w-full p-6 flex items-center justify-between hover:bg-sage/10 transition-colors"
                >
                  <h3 className="font-serif text-xl font-semibold text-olive-deep">
                    Ürünümüzün Hikayesi
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-olive-deep transition-transform ${
                      openAccordion === 'story' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openAccordion === 'story' ? 'auto' : 0,
                    opacity: openAccordion === 'story' ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-sage-dark leading-relaxed font-display">
                      {product.story}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Acid Ratio Accordion */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <button
                  onClick={() => toggleAccordion('acid')}
                  className="w-full p-6 flex items-center justify-between hover:bg-sage/10 transition-colors"
                >
                  <h3 className="font-serif text-xl font-semibold text-olive-deep flex items-center gap-3">
                    <Droplet className="w-5 h-5 text-gold" />
                    Asit Oranı
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-olive-deep transition-transform ${
                      openAccordion === 'acid' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openAccordion === 'acid' ? 'auto' : 0,
                    opacity: openAccordion === 'acid' ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 space-y-4">
                    <div className="bg-olive-deep/5 p-4 rounded-lg">
                      <p className="font-serif text-3xl font-bold text-olive-deep mb-2">
                        {product.acidRatio}
                      </p>
                      <p className="text-sage-dark text-sm font-display">
                        Extra Virgin kalitesi - Uluslararası standartlara uygun
                      </p>
                    </div>
                    <p className="text-sage-dark text-sm font-display leading-relaxed">
                      Asitlik oranı zeytinyağının kalitesini gösteren en önemli kriterlerden biridir. 
                      {product.acidRatio} ile Extra Virgin kategorisinde yer alan ürünümüz, en üst kalite standardını temsil eder.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Storage Accordion */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <button
                  onClick={() => toggleAccordion('storage')}
                  className="w-full p-6 flex items-center justify-between hover:bg-sage/10 transition-colors"
                >
                  <h3 className="font-serif text-xl font-semibold text-olive-deep">
                    Saklama Koşulları
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-olive-deep transition-transform ${
                      openAccordion === 'storage' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openAccordion === 'storage' ? 'auto' : 0,
                    opacity: openAccordion === 'storage' ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sage-dark font-display">
                          Serin ve karanlık bir yerde saklayın (18-22°C ideal)
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sage-dark font-display">
                          Doğrudan güneş ışığından uzak tutun
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sage-dark font-display">
                          Açıldıktan sonra 6 ay içinde tüketin
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sage-dark font-display">
                          Kapağını sıkıca kapatarak saklayın
                        </span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Product Specs - Origin and Harvest */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {/* Origin */}
              <div className="bg-white p-6 rounded-2xl shadow-md flex items-start gap-4">
                <div className="bg-olive-deep/10 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-olive-deep" />
                </div>
                <div>
                  <p className="text-xs text-sage-dark uppercase tracking-wider mb-1">
                    Menşei
                  </p>
                  <p className="font-serif text-xl font-bold text-olive-deep">
                    {product.origin}
                  </p>
                </div>
              </div>

              {/* Harvest Date */}
              <div className="bg-white p-6 rounded-2xl shadow-md flex items-start gap-4">
                <div className="bg-olive-deep/10 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-olive-deep" />
                </div>
                <div>
                  <p className="text-xs text-sage-dark uppercase tracking-wider mb-1">
                    Hasat Tarihi
                  </p>
                  <p className="font-serif text-xl font-bold text-olive-deep">
                    {product.harvestDate}
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Fixed WhatsApp Button - Mobile */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="fixed bottom-6 left-4 right-4 lg:hidden z-40"
      >
        <motion.a
          href={`https://wa.me/905551234567?text=Merhaba, ${product.name} (${variants[selectedVariant].size}) için sipariş vermek istiyorum.`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-[#25D366] py-4 rounded-full text-white font-bold flex items-center justify-center gap-3 shadow-2xl hover:bg-[#20BD5A] transition-all"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp Sipariş
        </motion.a>
      </motion.div>
    </section>
  )
}
