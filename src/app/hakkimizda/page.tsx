'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Leaf, Shield, Award, Heart, Factory, Sparkles } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

export default function HakkimizdaPage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3])

  return (
    <div className="bg-cream">
      {/* Hero Section - Emotional Entrance */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=2670"
            alt="Olive Grove at Sunset"
            fill
            className="object-cover scale-110"
            priority
            quality={95}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-olive-deep/40 via-olive-deep/60 to-olive-deep/90" />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 h-full flex flex-col items-center justify-center px-4 md:px-8 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-8 inline-block"
            >
              <Leaf className="w-16 h-16 md:w-20 md:h-20 text-gold" />
            </motion.div>

            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-cream mb-8 leading-tight">
              Toprağa Duyduğumuz Saygı,
              <br />
              <span className="text-gold">Sofranıza Gelen Sağlık</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-sage text-xl md:text-2xl max-w-3xl mx-auto font-display"
            >
              Yılların tecrübesi, Torosların bereketi ve değişmeyen aile geleneğimizle.
            </motion.p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-6 h-10 border-2 border-cream rounded-full flex items-start justify-center p-2"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1.5 h-1.5 bg-cream rounded-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* The Story Section - Split Layout */}
      <section className="relative py-20 md:py-32 px-4 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Text Content - Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-block mb-4"
              >
                <span className="bg-gold/20 px-4 py-2 rounded-full text-gold font-bold text-sm uppercase tracking-wider">
                  Hikayemiz
                </span>
              </motion.div>

              <h2 className="font-serif text-4xl md:text-5xl font-bold text-olive-deep mb-6">
                Köklerimiz ve Hikayemiz
              </h2>

              <div className="space-y-6 text-sage-dark text-lg font-display leading-relaxed">
                <p>
                  Bu yolculuk yıllar önce, doğaya duyulan saf bir tutku ile başladı. 
                  Akdeniz'in bereketli topraklarında, güneşin altında olgunlaşan her zeytin, 
                  özenle ve <strong className="text-olive-deep">el ile toplanır</strong>. 
                  Çünkü bizim için her meyve, doğanın armağanıdır.
                </p>

                <p>
                  <em className="text-gold font-semibold">"Doğa bizim patronumuzdur"</em> felsefesiyle 
                  hareket ederiz. Geleneksel yöntemlerimizi modern hijyen standartlarıyla birleştirerek, 
                  atalarımızdan devralınan bilgeliği bugünün teknolojisiyle harmanlıyoruz.
                </p>

                <p>
                  Zeytinliklerimizden sofranıza uzanan bu yolda, her adımda kaliteyi, 
                  saflığı ve doğallığı korumak için titizlikle çalışıyoruz. Sizin ve 
                  sevdiklerinizin sağlığı bizim en büyük sorumluluğumuzdur.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-8 flex items-center gap-4"
              >
                <div className="w-20 h-1 bg-gold rounded-full" />
                <p className="text-olive-deep font-serif italic">
                  Gelenekten geleceğe...
                </p>
              </motion.div>
            </motion.div>

            {/* Image - Right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
              className="relative"
            >
              <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1452857297128-d9c29adba80b?q=80&w=1200"
                  alt="Traditional and Modern Agricultural Tools"
                  fill
                  className="object-cover"
                />
                {/* Decorative Elements */}
                <div className="absolute top-8 right-8 w-24 h-24 bg-gold/20 rounded-full backdrop-blur-sm" />
                <div className="absolute bottom-8 left-8 w-32 h-32 bg-olive-deep/20 rounded-full backdrop-blur-sm" />
              </div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl"
              >
                <p className="font-serif text-4xl font-bold text-olive-deep">25+</p>
                <p className="text-sage-dark text-sm font-display">Yıllık Tecrübe</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Safe for Your Family Section */}
      <section className="relative py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-cream to-sage/10">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              <Heart className="w-16 h-16 text-gold" />
            </motion.div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-olive-deep mb-6">
              Aileniz İçin Güvenli
            </h2>
            <p className="text-sage-dark text-xl md:text-2xl max-w-3xl mx-auto font-display">
              Siz ve çocuklarınız <span className="text-gold font-semibold">korkmadan tüketebilsin</span> diye.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 bg-olive-deep/10 rounded-2xl flex items-center justify-center mb-6">
                <Factory className="w-8 h-8 text-olive-deep" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-olive-deep mb-4">
                El Değmeden Üretim
              </h3>
              <p className="text-sage-dark font-display leading-relaxed">
                Kapalı sistem soğuk sıkım makinelerimizle, zeytinler hiçbir insan teması olmadan 
                işlenir. Modern hijyen standartlarının garantisi.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: '-100px' }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 bg-olive-deep/10 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-olive-deep" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-olive-deep mb-4">
                Katkısız ve Saf
              </h3>
              <p className="text-sage-dark font-display leading-relaxed">
                Hiçbir kimyasal, hiçbir katkı maddesi yok. Sadece saf zeytin suyu. 
                Doğanın sunduğu gibi, hiçbir şey eklemeden, hiçbir şey çıkarmadan.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, margin: '-100px' }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 bg-olive-deep/10 rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-olive-deep" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-olive-deep mb-4">
                Analizli ve Sertifikalı
              </h3>
              <p className="text-sage-dark font-display leading-relaxed">
                Her şişe asitlik ve saflık testi geçer. Laboratuvar analizleriyle 
                doğrulanan kalite garantisi. Uluslararası standartlara uygun üretim.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visual Gallery - Masonry Grid */}
      <section className="relative py-20 md:py-32 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-olive-deep mb-4">
              Üretimden Sofranıza
            </h2>
            <p className="text-sage-dark text-xl max-w-2xl mx-auto font-display">
              Her aşamada özenle...
            </p>
          </motion.div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            
            {/* Image 1 - Tall */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="col-span-1 row-span-2 relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
            >
              <Image
                src="https://images.unsplash.com/photo-1452857297128-d9c29adba80b?q=80&w=800"
                alt="Close up of hands holding fresh green olives"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-olive-deep/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>

            {/* Image 2 - Wide */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: '-100px' }}
              className="col-span-2 relative h-48 lg:h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
            >
              <Image
                src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=1200"
                alt="A wide shot of the olive fields"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-olive-deep/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>

            {/* Image 3 - Square */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, margin: '-100px' }}
              className="col-span-1 relative h-48 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
            >
              <Image
                src="https://images.unsplash.com/photo-1472476443507-c7a5948772fc?q=80&w=800"
                alt="Stainless steel storage tanks - modern tools"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-olive-deep/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>

            {/* Image 4 - Wide */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, margin: '-100px' }}
              className="col-span-2 relative h-48 lg:h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
            >
              <Image
                src="https://images.unsplash.com/photo-1511795267-8ceb24fb6052?q=80&w=1200"
                alt="A happy family dining table"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-olive-deep/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>

            {/* Image 5 - Tall */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true, margin: '-100px' }}
              className="col-span-1 relative h-48 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
            >
              <Image
                src="https://images.unsplash.com/photo-1452857297128-d9c29adba80b?q=80&w=800"
                alt="Olive harvest process"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-olive-deep/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action - Closing */}
      <section className="relative py-20 md:py-32 px-4 md:px-8 bg-gradient-to-br from-olive-deep to-olive-medium overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-sage rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-8"
          >
            <Leaf className="w-20 h-20 text-gold" />
          </motion.div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-8">
            Bu Doğallığı Ailenizle Paylaşın
          </h2>

          <p className="text-sage text-xl md:text-2xl mb-12 font-display">
            Premium zeytinyağı ve organik ürünlerimizle, sofranıza sağlık ve lezzet getirin.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/#products"
                className="inline-block bg-gold hover:bg-gold-light text-olive-deep font-bold px-10 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all"
              >
                Ürünlerimizi Keşfedin
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://wa.me/905551234567?text=Merhaba, ürünleriniz hakkında bilgi almak istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block glass border border-cream/30 text-cream font-bold px-10 py-5 rounded-full shadow-xl hover:bg-white/20 transition-all backdrop-blur-lg"
              >
                İletişime Geçin
              </a>
            </motion.div>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sage"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-gold" />
              <span className="font-display">%100 Güvenli</span>
            </div>
            <div className="flex items-center gap-2">
              <Leaf className="w-6 h-6 text-gold" />
              <span className="font-display">Doğal Üretim</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-gold" />
              <span className="font-display">Sertifikalı</span>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
