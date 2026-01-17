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
            src="/images/hakkında.jpg"
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
              Gemlik'in Bereketinden,
              <br />
              <span className="text-gold">Sofranıza Uzanan Bir Yolculuk</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-sage text-xl md:text-2xl max-w-3xl mx-auto font-display"
            >
              Nesillerden nesile aktarılan bilgelik, Marmara'nın eşsiz iklimi ve tutkuyla üretilen saf zeytinyağı.
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
                Gemlik'in Altın Suyunun Hikayesi
              </h2>

              <div className="space-y-6 text-sage-dark text-lg font-display leading-relaxed">
                <p>
                  Her sabah güneş Marmara'nın üzerinden doğduğunda, Gemlik'in bereketli 
                  topraklarında bir mucize başlar. <strong className="text-olive-deep">Zeytinlerimiz</strong>, 
                  denizden gelen hafif esintide sallanırken, yüzyıllardır olduğu gibi aynı tutkuyla 
                  hasat edilmeyi bekler.
                </p>

                <p>
                  <em className="text-gold font-semibold">"Zeytin ağacı, atalarımızın emaneti"</em> diyerek 
                  başladığımız bu yolculukta, her damla sızma yağ bir hikaye anlatır. Gemlik zeytininin 
                  eşsiz aroması, Marmara'nın nemli havasıyla dans eder ve size ulaşır.
                </p>

                <p>
                  Modern tesislerimizde, <strong className="text-olive-deep">soğuk sıkım</strong> yöntemiyle, 
                  zeytinlerin tüm besin değerini ve lezzetini koruyarak işleriz. Her aşamada, doğaya 
                  saygılı üretim anlayışımızdan asla taviz vermeyiz. Çünkü biz sadece zeytinyağı 
                  üretmiyoruz; <em className="text-gold">bir yaşam felsefesi sunuyoruz</em>.
                </p>

                <p className="text-olive-deep font-semibold border-l-4 border-gold pl-4">
                  "Her şişede Gemlik'in ruhu, Marmara'nın esintisi ve nesillerden gelen bilgelik var."
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
                  Nesillerden nesile, sofranıza...
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
                  src="/images/uretım.png"
                  alt="Geleneksel ve modern tarım aletleri"
                  fill
                  className="object-cover"
                />
                {/* Decorative Elements */}
                <div className="absolute top-8 right-8 w-24 h-24 bg-gold/20 rounded-full backdrop-blur-sm" />
                <div className="absolute bottom-8 left-8 w-32 h-32 bg-olive-deep/20 rounded-full backdrop-blur-sm" />
                
                {/* Info Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="absolute top-8 left-8 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg"
                >
                  <p className="text-olive-deep font-serif font-bold text-sm">🫒 Gemlik Zeytini</p>
                  <p className="text-sage-dark text-xs mt-1">Dünya çapında ünlü</p>
                </motion.div>
              </div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -left-8 bg-gradient-to-br from-olive-deep to-olive-medium p-6 rounded-2xl shadow-xl text-white"
              >
                <p className="font-serif text-4xl font-bold">25+</p>
                <p className="text-sage text-sm font-display">Yıllık Tecrübe</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Zeytinyağı Bilgi Bölümü - Premium Section */}
      <section className="relative py-20 md:py-32 px-4 md:px-8 bg-gradient-to-br from-olive-deep to-olive-medium overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block mb-8"
            >
              <Image
                src="/images/kayaal-logo.svg"
                alt="KAYAAL Logo"
                width={300}
                height={120}
                className="w-auto h-24 md:h-32 drop-shadow-2xl"
              />
            </motion.div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6">
              Zeytinyağı: Akdeniz'in Altın Damlası
            </h2>
            <p className="text-sage text-xl md:text-2xl max-w-3xl mx-auto font-display">
              Binlerce yıldır beslediği medeniyetlerin sırrı
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column - Bilgi */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <h3 className="font-serif text-2xl font-bold text-gold mb-4 flex items-center gap-3">
                  <Sparkles className="w-6 h-6" />
                  Sızma Zeytinyağı Nedir?
                </h3>
                <p className="text-sage leading-relaxed font-display">
                  Sızma zeytinyağı, zeytinlerin ilk preslenmesinden elde edilen, 
                  hiçbir kimyasal işlem görmemiş, saf ve doğal yağdır. <strong className="text-cream">27°C</strong> altında 
                  soğuk sıkım yöntemiyle üretilen sızma yağ, zeytinin tüm besin değerlerini, 
                  vitaminlerini ve antioksidanlarını korur.
                </p>
                <div className="mt-6 p-4 bg-gold/20 rounded-xl border border-gold/30">
                  <p className="text-cream text-sm font-display">
                    💡 <strong>Önemli:</strong> Asitlik oranı %0.8'in altında olan zeytinyağları "sızma" olarak adlandırılır. 
                    Bizim yağlarımız ortalama <strong className="text-gold">%0.3-0.5</strong> asitlik değerine sahiptir.
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <h3 className="font-serif text-2xl font-bold text-gold mb-4 flex items-center gap-3">
                  <Heart className="w-6 h-6" />
                  Sağlık Faydaları
                </h3>
                <ul className="space-y-3 text-sage font-display">
                  <li className="flex items-start gap-3">
                    <span className="text-gold text-xl mt-1">✓</span>
                    <span><strong className="text-cream">Kalp sağlığı:</strong> Omega-3 ve Omega-9 yağ asitleri kalp-damar sağlığını korur</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold text-xl mt-1">✓</span>
                    <span><strong className="text-cream">Antioksidan:</strong> E vitamini ve polifenoller hücre yenilenmesini destekler</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold text-xl mt-1">✓</span>
                    <span><strong className="text-cream">Anti-inflamatuar:</strong> Vücuttaki iltihaplanmayı azaltır</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold text-xl mt-1">✓</span>
                    <span><strong className="text-cream">Bağışıklık:</strong> Doğal bağışıklık sistemini güçlendirir</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold text-xl mt-1">✓</span>
                    <span><strong className="text-cream">Kolesterol:</strong> Kötü kolesterolü (LDL) düşürür, iyi kolesterolü (HDL) artırır</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right Column - Üretim & Görsel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Production Image */}
              <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src="/images/uretım2.png"
                  alt="Taze zeytinlerin hasat edilmesi"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-olive-deep via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-cream font-serif text-xl font-bold mb-2">Elle Hasat</p>
                  <p className="text-sage text-sm font-display">
                    Zeytinler dalında olgunlaşır ve özenle toplanır
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <h3 className="font-serif text-2xl font-bold text-gold mb-4 flex items-center gap-3">
                  <Factory className="w-6 h-6" />
                  Üretim Süreci
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center text-gold font-bold border border-gold/30">
                      1
                    </div>
                    <div>
                      <h4 className="text-cream font-semibold mb-1">Hasat</h4>
                      <p className="text-sage text-sm font-display">Zeytinler en uygun olgunlukta dalından toplanır</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center text-gold font-bold border border-gold/30">
                      2
                    </div>
                    <div>
                      <h4 className="text-cream font-semibold mb-1">Yıkama & Temizleme</h4>
                      <p className="text-sage text-sm font-display">Zeytinler özel makinelerde yıkanır ve yapraklardan arındırılır</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center text-gold font-bold border border-gold/30">
                      3
                    </div>
                    <div>
                      <h4 className="text-cream font-semibold mb-1">Soğuk Sıkım</h4>
                      <p className="text-sage text-sm font-display">27°C altında, kapalı sistem makinelerde sıkılır</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center text-gold font-bold border border-gold/30">
                      4
                    </div>
                    <div>
                      <h4 className="text-cream font-semibold mb-1">Dinlendirme</h4>
                      <p className="text-sage text-sm font-display">Yağ, paslanmaz çelik tanklarda 2-3 gün dinlendirilir</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center text-gold font-bold border border-gold/30">
                      5
                    </div>
                    <div>
                      <h4 className="text-cream font-semibold mb-1">Filtreleme & Şişeleme</h4>
                      <p className="text-sage text-sm font-display">Son filtreleme yapılır ve hijyenik şişelere doldurulur</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
              <p className="font-serif text-4xl font-bold text-gold mb-2">%100</p>
              <p className="text-sage text-sm font-display">Doğal</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
              <p className="font-serif text-4xl font-bold text-gold mb-2">&lt;27°C</p>
              <p className="text-sage text-sm font-display">Soğuk Sıkım</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
              <p className="font-serif text-4xl font-bold text-gold mb-2">0.3%</p>
              <p className="text-sage text-sm font-display">Asitlik</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
              <p className="font-serif text-4xl font-bold text-gold mb-2">0</p>
              <p className="text-sage text-sm font-display">Katkı Maddesi</p>
            </div>
          </motion.div>
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
              Üretimden Sofranıza: Görsel Yolculuk
            </h2>
            <p className="text-sage-dark text-xl max-w-2xl mx-auto font-display">
              Zeytinlikten şişeye, her aşamada özenle...
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
                src="/images/uretım2.png"
                alt="Taze yeşil zeytinlerin hasat edilmesi"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-olive-deep/80 via-olive-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
                <h3 className="text-cream font-serif text-lg font-bold mb-1">Hasat Zamanı</h3>
                <p className="text-sage text-sm font-display opacity-0 group-hover:opacity-100 transition-opacity">
                  Zeytinler en taze halinde, el emeğiyle toplanır
                </p>
              </div>
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
                src="/images/hakkında.jpg"
                alt="Gemlik'teki zeytin bahçelerimiz"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-olive-deep/80 via-olive-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
                <h3 className="text-cream font-serif text-lg font-bold mb-1">Gemlik Zeytinlikleri</h3>
                <p className="text-sage text-sm font-display opacity-0 group-hover:opacity-100 transition-opacity">
                  Marmara'nın eşsiz ikliminde yetişen zeytinliklerimiz
                </p>
              </div>
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
                src="/images/uretım3.png"
                alt="Modern paslanmaz çelik depolama tankları"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-olive-deep/80 via-olive-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
                <h3 className="text-cream font-serif text-lg font-bold mb-1">Modern Tesis</h3>
                <p className="text-sage text-sm font-display opacity-0 group-hover:opacity-100 transition-opacity">
                  Hijyenik üretim ve depolama
                </p>
              </div>
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
                src="/images/kasıkta.jpg"
                alt="Sofranızda taze zeytinyağı"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-olive-deep/80 via-olive-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
                <h3 className="text-cream font-serif text-lg font-bold mb-1">Sofranızda</h3>
                <p className="text-sage text-sm font-display opacity-0 group-hover:opacity-100 transition-opacity">
                  Sağlıklı ve lezzetli beslenmenin anahtarı
                </p>
              </div>
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
                src="/images/uretım4.jpg"
                alt="Zeytinyağı üretim süreci"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-olive-deep/80 via-olive-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
                <h3 className="text-cream font-serif text-lg font-bold mb-1">Üretim</h3>
                <p className="text-sage text-sm font-display opacity-0 group-hover:opacity-100 transition-opacity">
                  Soğuk sıkım ile muhafaza edilen besin değerleri
                </p>
              </div>
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
